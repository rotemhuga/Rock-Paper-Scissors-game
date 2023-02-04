
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


//Choosen shape
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
        console.log(cla);
        return cla.classList[0] === randomString
    })
    console.log(found)
    found.setAttribute("id", "all-found")
    // houseChoose?.setAttribute("class", `${random}`)
    const rightSide =  document.getElementById('right-side');
    const divSide:any =  document.getElementById('div-right');

    console.log(valueClick)
    let randomStringNew = randomString + ' form-div'
    console.log(randomStringNew)
    const test= event.target;
    console.log(test)
    if(randomStringNew !== valueClick) {
        rightSide?.appendChild(found);
    }
    else {
        // divSide?.appendChild(event.target.elements[0])
        divSide.innerHTML = `<div>${test}</div>`;
        document.body.appendChild(divSide);
    }


// Check who win - Game rules
function game(valueClick) {

    let middleSide = document.getElementById('middle-side') 
    //draw case
    if(randomStringNew === valueClick){
        setTimeout(() => {
            const draw = document.getElementById('result-status');
            draw.innerHTML = 'Draw';
            middleSide.style.display = "flex";
        }, 2000) 
        return "it is a draw"

    //lose case
    } else if (randomStringNew === "rock3 form-div" && valueClick === "scissors2 form-div"){
        setTimeout(() => {
            const lose = document.getElementById('result-status');
            lose.innerHTML = 'YOU LOSE';
            middleSide.style.display = "flex";
        }, 2000) 

        return "you lose"
    } else if (randomStringNew === "scissors2 form-div" && valueClick === "paper1 form-div"){
        setTimeout(() => {
            const lose = document.getElementById('result-status');
            lose.innerHTML = 'YOU LOSE';
            middleSide.style.display = "flex";
        }, 2000) 
        return "you lose"
    } else if (randomStringNew === "paper1 form-div" && valueClick === "rock3 form-div"){
        setTimeout(() => {
            const lose = document.getElementById('result-status');
            lose.innerHTML = 'YOU LOSE';
            middleSide.style.display = "flex";
        }, 2000) 
        return "you lose"

    //win case
    } else if (randomStringNew === "rock3 form-div" && valueClick === "paper1 form-div"){
        setTimeout(() => {
            const win = document.getElementById('result-status');
            win.innerHTML = 'YOU WIN';
            middleSide.style.display = "flex";
        }, 2000)
        return "you win"
    } else if (randomStringNew === "paper1 form-div" && valueClick === "scissors2 form-div") {
        setTimeout(() => {
            const win = document.getElementById('result-status');
            win.innerHTML = 'YOU WIN';
            middleSide.style.display = "flex";
        }, 2000)
        return "you win"
        } else (randomStringNew === "scissors2 form-div" && valueClick === "rock3 form-div") {
        setTimeout(() => {
            const win = document.getElementById('result-status');
            win.innerHTML = 'YOU WIN';
            middleSide.style.display = "flex";
        }, 2000) 
        return "you win"
    }
}
    const score = document.getElementById('num-score');
    score: number = 0;
    score?.innerHTML = 0
    let returnValue:any = game(valueClick);
    if (returnValue === "you win") {
    score += 1;
    } else if (returnValue === "you lose") {
    score -= 1;  
    }
    console.log(score)
    
}



//option 2
// let middleSide = document.getElementById('middle-side') 
// let score: number = 0;
// const results = {
//   draw: {
//     message: 'Draw',
//     action: () => {
//       setTimeout(() => {
//         const draw = document.getElementById('result-status');
//         draw.innerHTML = 'Draw';
//         middleSide.style.display = "flex";
//       }, 2000) 
//       return "it is a draw";
//     }
//   },
//   lose: {
//     message: 'YOU LOSE',
//     action: () => {
//       setTimeout(() => {
//         const lose = document.getElementById('result-status');
//         lose.innerHTML = 'YOU LOSE';
//         middleSide.style.display = "flex";
//       }, 2000) 
//       return "you lose";
//     }
//   },
//   win: {
//     message: 'YOU WIN',
//     action: () => {
//       setTimeout(() => {
//         const win = document.getElementById('result-status');
//         win.innerHTML = 'YOU WIN';
//         middleSide.style.display = "flex";
//         score += 1;
//       }, 2000) 
//       return "you win";
//     }
//   }
// };

// if (randomStringNew === valueClick) {
//   return results.draw.action();
// } else if ((randomStringNew === "rock3 form-div" && valueClick === "scissors2 form-div") ||
//            (randomStringNew === "scissors2 form-div" && valueClick === "paper1 form-div") ||
//            (randomStringNew === "paper1 form-div" && valueClick === "rock3 form-div")) {
//   return results.lose.action();
// } else {
//   return results.win.action();
// }