let imgs = [
    "Fürstenfeldbruck/Fürstenfeldbruck/img_Fürstenfeldbruck/Amperauen.png",
    "Fürstenfeldbruck/Fürstenfeldbruck/img_Fürstenfeldbruck/Flugplatz.jpg",
    "Fürstenfeldbruck/Fürstenfeldbruck/img_Fürstenfeldbruck/Fürstenfeldbruck.jpg",
    "Fürstenfeldbruck/Fürstenfeldbruck/img_Fürstenfeldbruck/Schloss.jpg",
    "Fürstenfeldbruck/Fürstenfeldbruck/img_Fürstenfeldbruck/AltesRathaus.jpg"
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