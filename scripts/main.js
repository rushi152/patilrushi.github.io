// var myImage = document.querySelector('img');

// myImage.onclick = function() {
//     var mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/logo_html.jpg') {
//       myImage.setAttribute ('src','images/logo_css.png');
//     } else {
//       myImage.setAttribute ('src','images/logo_html.jpg');
//     }
// }


// var myImage = document.querySelector('img');

// myImage.onclick = function () {
//   var mySrc = myImage.getAttribute('src');
//   if (mySrc === 'images/logo_html.jpg') {
//     myImage.setAttribute('src', 'images/logo_css.png')
//   } else {
//     myImage.setAttribute('src', 'images/logo_html.jpg')
//   }
// }


function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;


  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  
}
  
  



var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myButton.onclick = function () {
  setUserName();
}


