let imgs = [
  "imgberchtesgaden/berchtesgaden-2928711_1280.jpg",
  "imgberchtesgaden/berchtesgaden-3625654_1280.jpg",
  "imgberchtesgaden/konigssee-2399711_1280.jpg",
  "imgberchtesgaden/saint-bartholoma-2928710_1280.jpg",
  "imgberchtesgaden/watzmann-2928770_1280.jpg",

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
