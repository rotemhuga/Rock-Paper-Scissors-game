// 1. לתפוס את 3 האלמנטים על ידי click event (תופסת את class/id - בשם choosen
// בדיוק אחרי הלחיצה:
// 1. להסתיר את הפופאפ אחרי הלחיצה 
// 2. להציג את הפופאפ החדש עם האחד שנבחר (choosen
// 3. למתחרה יבחר מספר רנדומלי 1/2/3
// 4. להוסיף לפופאפ החדש את הנבחר של המתחרה
// 5. להוסיף את כל כללי המשחק

// Function Rules Modal
// Get the button
let btn = document.getElementById(
    "myBtn",
) as HTMLButtonElement;

// Get the modal
let modal = document.getElementById(
    "myModal",
) as HTMLDivElement;

// Get the image
let img = document.getElementById(
    "img01",
) as HTMLImageElement;

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  img.src = "./assets/image-rules.svg";
  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

// Get the <span> element that closes the modal
let span = document.getElementById(
    "close"
) as HTMLImageElement;

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


//Choosen 
let threeShpes =  document.getElementById("bg-triangle",) as HTMLDivElement;
let randomString;
const buttonSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    let valueClick = event.srcElement.classList.value
    console.log(valueClick)
    threeShpes.style.display = "none";        
    const choosenContainer:any= document.getElementById("choosen-container");
    choosenContainer.style.display= "flex";
    console.log(choosenContainer)
    const colorDiv= event.target.childNodes[1].classList[0];
    const choosenForm= document.getElementById('choosen-form');
    choosenForm?.appendChild(event.target.elements[0]);
    choosenForm?.setAttribute("class", colorDiv )
    //house:        
    const random = Math.floor((Math.random() * 3) + 1);
    randomString= random === 1 ? `paper${random}` : random === 2 ? `scissors${random}` : `rock${random}`;
    console.log(randomString)
    // const houseChoose= document.getElementById('house-choose');
    const allClasses: any = document.querySelectorAll('.form-div')
    const arrClasses:any = Array.from(allClasses)
    console.log(arrClasses[0].classList[0]);
    const found: any = arrClasses?.find((cla: any) => {
        console.log(cla.classList[0]);
        return cla.classList[0] === randomString
    })
    console.log(found)
    found.setAttribute("id", "all-found")
    // houseChoose?.setAttribute("class", `${random}`)
    const rightSide =  document.getElementById('right-side');
    const divSide:any =  document.getElementById('div-right');


    console.log(randomString + ' form-div')
    console.log(valueClick)
    const test= event.target;
    console.log(test)
    if(randomString + ' form-div' !== valueClick) {
        rightSide?.appendChild(found);
    }
    else {
        // divSide?.appendChild(event.target.elements[0])
        divSide.innerHTML = `<div>${test}</div>`;
document.body.appendChild(divSide);
    }
    

}


