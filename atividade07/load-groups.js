const groupList = document.querySelector("ul.group");
const groupHeaderEl = document.querySelector(
  ".main-container .header-container .header-wrapper"
);

async function loadGroups() {
  try {
    const response = await fetch(`${BASE_URL}/grupos`);
    const groups = await response.json();
    renderGroupHeader(groups);
    renderGroups(groups);
  } catch (error) {
    throw Error(error);
  }
}

function renderGroupHeader(groups) {
  groupHeaderEl.innerHTML = "";

  const loggedUserIn = localStorage.getItem("@zipzop:user");

  const group = groups
    .filter((group) => Object.keys(group).includes("nome"))
    .find((group) => group.id === currentGroupId);

  if (group) {
    const groupImageContainer = document.createElement("div");
    groupImageContainer.className = "image";

    const groupImage = document.createElement("img");
    groupImage.src = `https://via.placeholder.com/40/000000/61C554?text=${
      group.nome?.charAt(0) ?? "D"
    }`;
    groupImageContainer.appendChild(groupImage);

    const groupName = document.createElement("span");
    groupName.className = "name";
    const groupNameText = document.createTextNode(group.nome);
    groupName.appendChild(groupNameText);

    groupHeaderEl.appendChild(groupImageContainer);
    groupHeaderEl.appendChild(groupName);

    if (!!loggedUserIn) {
      const userInfo = document.createElement("strong");
      const userName = document.createTextNode(loggedUserIn);
      userInfo.className = "user-info";
      userInfo.appendChild(userName);
      groupHeaderEl.appendChild(userInfo);
    }
  }
}

function renderGroups(groups) {
  groupList.innerHTML = "";

  groups
    .filter((group) => Object.keys(group).includes("nome"))
    .forEach((group) => {
      const groupItem = document.createElement("li");
      groupItem.classList.add("group-item");
      groupItem.classList.remove("active");

      if (currentGroupId === group.id) {
        groupItem.classList.add("active");
      }

      const groupImageContainer = document.createElement("div");
      groupImageContainer.className = "image";

      const groupImage = document.createElement("img");
      groupImage.src = `https://via.placeholder.com/40/${
        groupItem.classList.contains("active") ? "000000" : "FFFFFF"
      }/61C554?text=${group.nome.charAt(0)}`;
      groupImageContainer.appendChild(groupImage);

      const groupName = document.createElement("span");
      groupName.className = "name";
      const groupNameText = document.createTextNode(group.nome);
      groupName.appendChild(groupNameText);

      groupItem.appendChild(groupImageContainer);
      groupItem.appendChild(groupName);
      groupItem.onclick = () => handleChangeGroup(group.id);
      groupList.appendChild(groupItem);
    });
}

loadGroups();

// handlers click

async function handleChangeGroup(groupId) {
  currentGroupId = groupId;
  await loadGroups();
  await loadMessages(groupId);
  scrollBottom();
  toggleInputSendMessage();
}
