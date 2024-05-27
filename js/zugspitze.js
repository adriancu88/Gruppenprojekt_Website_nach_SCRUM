
let imgs = [

  "imgzugspitze/imgzugspitze/zugspitze-2523331_1280.jpg",
  "imgzugspitze/imgzugspitze/zugspitze-2806096_1280.jpg",
  "imgzugspitze/imgzugspitze/zugspitze-6650962_1280.jpg",
  "imgzugspitze/imgzugspitze/zugspitze-7070995_1280.jpg"
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
