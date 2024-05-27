let imgs = [
    "img_Allgäu/Allgäu.jpg",
    "img_Allgäu/berge.jpg",
    "img_Allgäu/bodensee.jpg",
    "img_Allgäu/neuschwanstein.jpg",
    "img_Allgäu/see.jpg"
];
 
let counter = 0;
 
let changeImg = () => {
  document.querySelector('header img').src = imgs[counter];
}
 
document.querySelector('.btnRight').addEventListener("click", ()=>{
  counter++;
  if(counter >= imgs.length) {
      counter = 0;
  }
  changeImg();
});
 
document.querySelector('.btnLeft').addEventListener("click", ()=>{
  counter--;
  if(counter < 0) {
      counter = imgs.length - 1;
  }
  changeImg();
});
 
// Function to automatically change images every 2 seconds
let startSlideshow = () => {
  setInterval(() => {
      counter++;
      if (counter >= imgs.length) {
          counter = 0;
      }
      changeImg();
  }, 4000);
}
 
// Start the slideshow
startSlideshow();