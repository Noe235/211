const selenSike = new Audio("assets/sound/ONE_TWO.mp3");
let lastTitle = "changing title";
let lastImage = "assets/image/bearselen.png";
let imagePosititon = 0;

//for moving picture, every 20 millis
//setInterval (movePicture,20);

function myFunction() {
  selenSike.play();

  //changing image
  let swapImage = lastImage;
  lastImage = document.getElementById("dynamicPicture").src;
  document.getElementById("dynamicPicture").src = swapImage;

  //changing title
  let swapTitle = lastTitle;
  lastTitle = document.getElementById(`dynamicTitle`).innerHTML;
  document.getElementById(`dynamicTitle`).innerHTML = swapTitle;

}



//function movePicture(){
// if(imagePosititon === 300) {
//   clearInterval(movePicture);
// } else {
//   imagePosititon += 3;
//   document,getElementById(`dynamicPicture`).style.right += "px";
// }