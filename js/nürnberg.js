let imgs = [
  "imgnürnberg/bilder/istockphoto-1262538591-612x612.jpg",
  "imgnürnberg/bilder/istockphoto-1338725761-612x612.jpg",
  "imgnürnberg/bilder/istockphoto-1445631435-612x612.jpg",
  "imgnürnberg/bilder/istockphoto-1448870654-612x612.jpg",
  "imgnürnberg/bilder/istockphoto-649211678-612x612.jpg"
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