let imgs = [
  "imgchiemsee/lake-7956268_1280.jpg",
  "imgchiemsee/milky-way-8149815_1280.jpg",
  "imgchiemsee/sunset-8381528_1280.jpg",
  "imgchiemsee/sunset-8541936_1280.jpg",
  "imgchiemsee/Bild (1).png",
  "imgchiemsee/Bild.png"
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
      counter = imgs.length-1;
  }
  changeImg();
});