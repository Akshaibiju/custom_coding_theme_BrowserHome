$(document).ready(function(){
    $('#search-btn').on('click', function(){
        let searchText = $("#search-input").val();
        if (searchText.length !== 0) {
            let searchText = $("#search-input").val();
            window.open('https://www.google.com/search?q='+searchText);
        } 
    });
    $('#search-input').keypress(function(event){
        let searchText = $("#search-input").val();
        if (event.which === 13 && searchText.length !== 0) {
            let searchText = $("#search-input").val();
            window.open('https://www.google.com/search?q='+searchText);
            return false;
        }
    });
});

const sideToggle = document.getElementById('side-toggle');
const sideButton = document.getElementById('side-button');

sideToggle.addEventListener('change', function() {
  if (this.checked) {
    sideButton.classList.add('active');
    var objectElement = document.getElementById('myObject');
    objectElement.setAttribute('data', './source/whitetheme.html');
  } else {
    sideButton.classList.remove('active');
    var objectElement = document.getElementById('myObject');
    objectElement.setAttribute('data', './source/darktheme.html');
  }
});
