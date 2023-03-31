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

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true
    counter++;
    if(counter > 4){
        counter = 1;

    }
},5000)