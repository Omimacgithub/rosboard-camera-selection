"use strict";

// JavaScript to handle dropdown selection (The tailwind implementation: https://tailwindui.com/components/application-ui/elements/dropdowns in HTML doesn't include the javascript logic)
function selectOption(value) {
  initSubscribe({topicName: value, topicType: 'sensor_msgs/Image'})
  toggleDropdown();
}

// Function to toggle the dropdown
function toggleDropdown() {
  const dropDownMenu = document.getElementById("dropdown-menu");
  const isDeleted = dropDownMenu.innerHTML === "";

  // Toggle visibility
  if (isDeleted) {
    createDropDown()
    dropDownMenu.classList.remove("opacity-0", "scale-95");
    dropDownMenu.classList.add("opacity-100", "scale-100");
  } else {
    dropDownMenu.classList.remove("opacity-100", "scale-100");
    dropDownMenu.classList.add("opacity-0", "scale-95");
    deleteDropDown();
  }
}

// Close the dropdown when clicking outside
document.addEventListener("click", (event) => {
const button = document.getElementById("menu-button");
const dropDownMenu = document.getElementById("dropdown-menu");

// Check if the click is outside the dropdown and button
if (!dropDownMenu.contains(event.target) && !button.contains(event.target)) {
      dropDownMenu.classList.remove("opacity-100", "scale-100");
      dropDownMenu.classList.add("opacity-0", "scale-95");
      deleteDropDown();
}
});
function createDropDown(){
  // Create the parent div
  const divElement = document.createElement("div");
  divElement.id = "elements";
  divElement.className = "py-1";
  divElement.setAttribute("role", "none");

  // Array of menu items
  const menuItems = [
  { text: "right", id: "menu-item-0", value: "/camswall/right" },
  { text: "left", id: "menu-item-1", value: "/camswall/left" },
  ];

  // Function to create a menu item
  function createMenuItem(item) {
    const link = document.createElement("a");
    link.href = "#";
    link.className = "block px-4 py-2 text-sm text-gray-700";
    link.setAttribute("role", "menuitem");
    link.setAttribute("tabindex", "-1");
    link.id = item.id;
    link.textContent = item.text;

    // Add the onclick event
    link.onclick = () => selectOption(item.value);

    return link;
  }

  // Append each menu item to the div
  menuItems.forEach((item) => {
    const menuItem = createMenuItem(item);
    divElement.appendChild(menuItem);
  });

  // Append the div to the body or another container
  const dropDownMenu = document.getElementById("dropdown-menu");
  dropDownMenu.appendChild(divElement);
}
function deleteDropDown(){
  const dropDownMenu = document.getElementById("dropdown-menu");
  const isDeleted = dropDownMenu.innerHTML === "";
  if(!isDeleted){
    dropDownMenu.innerHTML = "";
  }
}
