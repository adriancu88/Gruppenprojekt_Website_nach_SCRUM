// #1 Usereingabe beim Tastendruck abfangen
// #2 Alle Früchte durchlaufen deren Inhalt mit der Usereingabe vergleichen
// #3 Wurde die Usereingabe nicht gefunden, soll das Element ausgeblendet werden

let fruits = document.querySelectorAll('.card');

document.querySelector('#search').addEventListener('keyup', (event) => {
    let input = event.target.value.toLowerCase();

    fruits.forEach((element)=>{
        if(element.innerText.toLowerCase().indexOf(input) >= 0) {
            // Soll angezeigt werden
            element.classList.remove("d-none");
        } else {
            // Element soll ausgeblendet werden
            element.classList.add("d-none");
        }
    });
});