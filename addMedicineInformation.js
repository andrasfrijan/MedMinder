function ShowPurple() {
  document.getElementById("pill").src = "images/purple.png";
}
function ShowBlue() {
  document.getElementById("pill").src = "images/blue.png";
}
function ShowRed() {
  document.getElementById("pill").src = "images/red.png";
}

var divItems = document.getElementsByClassName("item");
function selected(item) {
  item.style.backgroundColor = "#61316B";
}

function showNotification() {
  const notification = new Notification("New message from MedMinder!", {
    body: "You will recieve a notification soon to take your pills!",
    icon: "images/logo.png"
  });

  notification.onclick = (e) => {
    window.location.href = "Homepage.html";
  };
}

const button = document.getElementById("save");

button.addEventListener("click", () => {
  if (Notification.permission === "granted") {
    showNotification();
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        showNotification();
      }
    });
  }
});
