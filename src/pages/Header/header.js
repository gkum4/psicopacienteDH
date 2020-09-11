
const handleMenu = () => {
  const menuElement      = document.querySelector("#menu_content");
  const containerElement = document.querySelector("#menu_container");
  
  const menuStyle        = menuElement.style;
  const containerStyle   = containerElement.style;


  if ( menuStyle.right !== "0px" ) {
    menuStyle.right = "0px";
    containerStyle.display = "block";
  } else {
    menuStyle.right = "-20vw";
    containerStyle.display = "none";
  }
}


const handleNotification = () => {
  const notificationsElement = document.querySelector(".notifications");
  const style = notificationsElement.style;

  if ( style.display !== "block" )
    style.display = "block";
  else 
    style.display = "none";
}

const hideNotification = () => {
  const notificationsElement = document.querySelector(".notifications");
  notificationsElement.style.display = "none";
}