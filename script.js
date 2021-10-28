const selenSike = new Audio("assets/sound/ONE_TWO.mp3");
let lastTitle = "changing title";
let lastImage = "assets/image/bearselen.png";
let imageHorizontal = 1;
let imageVertical = 1;

//for moving picture, every 20 millis
//setInterval (movePicture,20);
document.addEventListener("keydown", keyboard)

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
function keyboard(event) {

  if (event.keyCode === 38) {
    imageVertical = imageVertical + 3;
    console.log("working")

  }
  if (event.keyCode === 40) {
    imageVertical -= 3;
  }
  if (event.keyCode === 37) {
    imageHorizontal += 3;
  }
  if (event.keyCode === 39) {
    imageHorizontal -= 3;
  }
  document.getElementById("dynamicPicture").style.right = imageHorizontal + "px";
  document.getElementById("dynamicPicture").style.bottom = imageVertical + "px";
  // window.alert("Hello World");
}