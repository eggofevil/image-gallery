var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');
var picFileName = 'images/pic';
/* Looping through images */
for(var i = 1; i <= 5; i++ ) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', picFileName + i + '.jpg');
  newImage.addEventListener('click', showDisplayed);
  thumbBar.appendChild(newImage);
}

function showDisplayed(event) {
  //alert(this.getAttribute("id")); Will not work in Explorer???
  var thisImageSrc = event.target.getAttribute('src');
  displayedImage.setAttribute('src', thisImageSrc);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', changeOverlay);

function changeOverlay() {
  if(btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }
  else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}
