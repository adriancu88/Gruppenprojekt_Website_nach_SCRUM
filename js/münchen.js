let imgs = [
    "imgmünchen/imgmünchen/ein-blick-auf-die-bayerische-landeshauptstadt-muenchen-2AB7XTA.jpg",
    "imgmünchen/imgmünchen/1503-Muenchen_AufmacherGregorLengel.jpg",
    "imgmünchen/imgmünchen/variant.jpg",
    "imgmünchen/imgmünchen/01-oktoberfest-m-06813261-jpg--77128-.jpg",
    "imgmünchen/imgmünchen/Karlsplatz.webp",
    "imgmünchen/imgmünchen/muenchen-schloss-nymphenburg.webp"
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