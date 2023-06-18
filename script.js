document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger button and navigation
    var hamburgerButton = document.querySelector('.hamburger-button');
    var hamburgerNav = document.querySelector('.hamburger-nav');
  
    // Add a click event listener to the hamburger button
    hamburgerButton.addEventListener('click', function() {
      // Toggle the 'active' class on the hamburger navigation
      hamburgerNav.classList.toggle('active');
    });
  });

document.addEventListener('click', e =>{
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if(!isDropdownButton && e.target.closest("[data-dropdown]") != null)return

    let currentDropdown
    if(isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if(dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
})

document.querySelector('.search-icon-button').addEventListener('click', function() {
    var searchInput = document.querySelector('.search-input');
    var logoSmall = document.querySelector('.logo-small');
    if (searchInput.classList.contains('active')) {
      searchInput.classList.remove('active');
      logoSmall.classList.remove('shrink');
    } else {
      searchInput.classList.add('active');
      logoSmall.classList.add('shrink');
    }
  });

  document.querySelector('.hamburger-menu hamrburger-button').addEventListener('click', function() {
    var hamburgerNav = document.querySelector('.hamburger-nav');
    if (hamburgerNav.classList.contains('active')) {
      hamburgerNav.classList.remove('active');
      console.log("Script is running!");

    } else {
      hamburgerNav.classList.add('active');
      console.log("Script is running!");

    }
  });

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true
    counter++;
    if(counter > 4){
        counter = 1;

    }
},5000)