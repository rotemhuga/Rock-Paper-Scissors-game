// 1. לתפוס את 3 האלמנטים על ידי click event (תופסת את class/id - בשם choosen
// בדיוק אחרי הלחיצה:
// 1. להסתיר את הפופאפ אחרי הלחיצה 
// 2. להציג את הפופאפ החדש עם האחד שנבחר (choosen
// 3. למתחרה יבחר מספר רנדומלי 1/2/3
// 4. להוסיף לפופאפ החדש את הנבחר של המתחרה
// 5. להוסיף את כל כללי המשחק
// Function Rules Modal
// Get the button
var btn = document.getElementById("myBtn");
// Get the modal
var modal = document.getElementById("myModal");
// Get the image
var img = document.getElementById("img01");
// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
    img.src = "./assets/image-rules.svg";
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
};
// Get the <span> element that closes the modal
var span = document.getElementById("close");
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};
//Choosen 
var threeShpes = document.getElementById("bg-triangle");
var randomString;
var buttonSubmit = function (event) {
    event.preventDefault();
    console.log(event);
    var valueClick = event.srcElement.classList.value;
    console.log(valueClick);
    threeShpes.style.display = "none";
    var choosenContainer = document.getElementById("choosen-container");
    choosenContainer.style.display = "flex";
    console.log(choosenContainer);
    var colorDiv = event.target.childNodes[1].classList[0];
    var choosenForm = document.getElementById('choosen-form');
    choosenForm === null || choosenForm === void 0 ? void 0 : choosenForm.appendChild(event.target.elements[0]);
    choosenForm === null || choosenForm === void 0 ? void 0 : choosenForm.setAttribute("class", colorDiv);
    //house:        
    var random = Math.floor((Math.random() * 3) + 1);
    randomString = random === 1 ? "paper".concat(random) : random === 2 ? "scissors".concat(random) : "rock".concat(random);
    console.log(randomString);
    // const houseChoose= document.getElementById('house-choose');
    var allClasses = document.querySelectorAll('.form-div');
    var arrClasses = Array.from(allClasses);
    console.log(arrClasses[0].classList[0]);
    var found = arrClasses === null || arrClasses === void 0 ? void 0 : arrClasses.find(function (cla) {
        console.log(cla.classList[0]);
        return cla.classList[0] === randomString;
    });
    console.log(found);
    found.setAttribute("id", "all-found");
    // houseChoose?.setAttribute("class", `${random}`)
    var rightSide = document.getElementById('right-side');
    var divSide = document.getElementById('div-right');
    console.log(randomString + ' form-div');
    console.log(valueClick);
    var test = event.target;
    console.log(test);
    if (randomString + ' form-div' !== valueClick) {
        rightSide === null || rightSide === void 0 ? void 0 : rightSide.appendChild(found);
    }
    else {
        // divSide?.appendChild(event.target.elements[0])
        divSide.innerHTML = "<div>".concat(test, "</div>");
        document.body.appendChild(divSide);
    }
};
