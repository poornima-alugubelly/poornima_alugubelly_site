let darkMode = localStorage.getItem('darkMode'); 
const darkModeToggle = document.querySelector('#icon');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("dark-theme");
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
  darkModeToggle.className = "fa fa-sun";
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("dark-theme");
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
  darkModeToggle.className = "fa fa-moon";
  
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
    darkModeToggle.className = "fa fa-sun";
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
 
 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    darkModeToggle.className = "fa fa-moon";
    enableDarkMode();
    
  // if it has been enabled, turn it off  
  } else {  
    darkModeToggle.className = "fa fa-sun";
    disableDarkMode(); 
  }
});

      
