export const getFullTime = (dateTimeStr) => {
  const date = new Date(dateTimeStr);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const timeStr = `${hours}:${minutes}`;
  return timeStr;
};

export const calculateDateDifference = (day1, day2) => {
  return (day2 - day1) / (1000 * 3600 * 24);
};

export const base64Image = (file, callback) => {
  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL("image/png");
      callback(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
};

// get all users or initialize if there is none
function getUsers() {
  const users = localStorage.getItem("usersData");
  return users ? JSON.parse(users) : [];
}

// check if an email already exists
function emailExists(email) {
  const users = getUsers();
  return users.some((user) => user.userEmail === email);
}

// add a new user
export function addUser(userData) {
  const users = getUsers();

  if (emailExists(userData.userEmail)) {
    return {
      success: false,
      message: "Email already in use.",
    };
  }

  users.push(userData);
  localStorage.setItem("usersData", JSON.stringify(users));
  return { success: true, message: "User signed up successfully." };
}

export const getUserByEmail = (email) => {
  const usersJson = localStorage.getItem("usersData");
  const users = usersJson ? JSON.parse(usersJson) : [];
  return users.find((user) => user.userEmail === email);
};
