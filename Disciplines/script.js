/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function clickOnRegles() {
    document.getElementById("dropdown_1").classList.toggle("show");
  }
function clickOnTechniques() {
    document.getElementById("dropdown_2").classList.toggle("show");
}
  
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}
  