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
};
// Get the <span> element that closes the modal
var span = document.getElementById("close");
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
var threeShpes = document.getElementById("bg-triangle");
var buttonSubmit = function (event) {
    event.preventDefault();
    console.log(event);
    // console.log(event.srcElement.classList.value)
    var valueClick = event.srcElement.classList.value;
    console.log(valueClick);
    threeShpes.style.display = "none";
    if (valueClick === "1") {
        var leftSide = document.createElement('div');
        var paper = document.createElement('div');
        paper.setAttribute("id", 'paper-click');
        leftSide.appendChild(paper);
        paper.style.display = "block";
        // alert("1 is choosen")
    }
    else {
        alert("you didnt choose anything");
    }
};
