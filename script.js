let i = 13;
let count = 0;
let cheat = 0;
let flip = [0, 0, 0, 0, 0, 0, 0,0,0,0,0,0];
let dritribute = 0;
let step = 0;
let step1 = 50;
let step2 = 50;
let step3 = 50;
let step4 = 50;
let step5 = 50;
let step6 = 50;
let step7 = 50;
let step8 = 50;
let step9 = 50;
let step10 = 50;
let step11 = 50;
let step12 = 50;
let step13 = 50;
const actionButtons = document.querySelectorAll('.action');
const deck = document.querySelector('.deck');
const body = document.querySelector('body');
const card = document.querySelector('.card');
const cardBack = document.querySelector('.card-back');
const cardFront = document.querySelector('.card-front');
const next = document.querySelector('#action1');
const previous = document.querySelector('#action2');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');
const p4 = document.querySelector('#p4');
const p5 = document.querySelector('#p5');
const p6 = document.querySelector('#p6');
const p7 = document.querySelector('#p7');
const p8 = document.querySelector('#p8');
const p9 = document.querySelector('#p9');
const p10 = document.querySelector('#p10');
const p11 = document.querySelector('#p11');
const p12 = document.querySelector('#p12');
const p13 = document.querySelector('#p13');
const pd = document.querySelector('.p');
let p = [p1, p2, p3, p4, p5, p6, p7,p8,p9,p10,p11,p12,p13];

function distributeCards() {
    let deck = document.querySelector(".deck");
    let button = document.getElementById("distributeBtn");

    deck.classList.add("distributed");
    button.classList.add("hidden");
    setTimeout(function() {
    actionButtons.forEach(button => {
        button.style.display = 'block'; // Make action buttons visible
        alert("Click on the cards to flip them and see the images!");
    })}, 3000);

    deck.style.background = 'transparent';

    setTimeout(() => {
        document.querySelector(".deck").classList.add("expanded");
        expand(i);
        card.style.position = "relative";
    }, 2000);
    setTimeout(() => {
        dritribute = 1;
    },3000);
}
function flipFront(event) {
    if (dritribute === 1) {
        const card = event.target.closest('.card-card');
        if (card) {
            card.classList.add('flipped');
            card.classList.remove('deflipped');
            flip[i] = 1;
            next.style.display = 'block';
            p[i-1].style.display = 'flex';
            if (i-1 === 5){
                step = step6;
            }
            else if (i-1 === 4){
                step = step5;
            }
            else if (i-1 === 3){
                step = step4;
            }
            else if (i-1 === 2){
                step = step3;
            }
            else if (i-1 === 1){
                step = step2;
            }
            else if (i-1 === 0){
                step = step1;
            }
            else if (i-1 === 6){
                step = step7;
            }
            else if (i-1 === 7){
                step = step8;
            }
            else if (i-1 === 8){
                step = step9;
            }
            else if (i-1 === 9){
                step = step10;
            }
            else if (i-1 === 10){
                step = step11;
            }
            else if (i-1 === 11){
                step = step12;
            }
            else if (i-1 === 12){
                step = step13;
            }
            p[i-1].style.animation = 'typing 4s steps('+step+') forwards, blink .4s step-end infinite alternate';
    }
}
}

function flipBack(event) {
    let card;
    if (event) {
        // If event is provided, find the closest card.
        card = event.target.closest('.card-card');
    } 
    else {
        // If no event, find the currently expanded card.
        card = document.querySelector('.card-card.flipped');
    }

    if (card) {
        card.classList.remove('flipped');
        card.classList.add('deflipped');
    }
    p[i-1].style.display = 'none';
}

function expand(i) {
    let color;
    if (i === 1) {
        color = "yellow"; // Matches the theme of Card 1
    } else if (i === 2) {
        color = "green"; // Matches the theme of Card 2
    } else if (i === 3) {
        color = "blue"; // Matches the theme of Card 3
    } else if (i === 4) {
        color = "red"; // Matches the theme of Card 4
    } else if (i === 5) {
        color = "orange"; // Matches the theme of Card 5
    } else if (i === 6) {
        color = "purple"; // Matches the theme of Card 6
    } else if (i === 7) {
        color = "pink"; // Matches the theme of Card 7
    } else if (i === 8) {
        color = "cyan"; // Matches the theme of Card 8
    } else if (i === 9) {
        color = "lime"; // Matches the theme of Card 9
    } else if (i === 10) {
        color = "teal"; // Matches the theme of Card 10
    } else if (i === 11) {
        color = "gold"; // Matches the theme of Card 11
    } else if (i === 12) {
        color = "silver"; // Matches the theme of Card 12
    } else if (i === 13) {
        color = "brown"; // Matches the theme of Card 13
    }

    let cards = document.querySelectorAll('.expanded .card');
    cards.forEach(card => {
        card.style.transform = "";
        card.style.opacity = "";
    });

    let card = document.querySelector(`.expanded .card:nth-child(${i})`);
    if (card) {
        card.style.transform = "scale(8,7) translate(0px, 0px)";
        card.style.opacity = "1";

        // Set the CSS variable for the spread color
        body.style.setProperty('--spread-color', color);

        body.style.animation = "spreadFromCard 5s forwards";
    }
}

function dev() {
    let input = prompt("Enter your input: ");
    console.log("User input:", input);
    if (input === "devtools") {
        alert("You are a developer!");
        let hider = 0;
        let button1 = 0;
        let button2 = 0;
        let button3 = 0;

        const devButton1 = document.createElement('button');
        devButton1.textContent = "Cheat +";
        devButton1.onclick = () => {
            alert("cheat + is clicked!");
            cheat = prompt("Enter the number of cheats you want to add: ");
            alert("Cheat is added by " + cheat + " !");
        };
        devButton1.oncontextmenu = () => {
            if (button1 === 0) {
                alert("cheat + is right clicked!");
                hider++;
                button1++;
                alert("Hider is activated!" + hider);
                hider = devhider(hider, devButton1 , devButton2, devButton3);
            }
            else {
                alert("You have already right clicked on this button!");
                button1 = 0;
                hider = 0;
            }
        };
        body.appendChild(devButton1);

        const devButton2 = document.createElement('button');
        devButton2.textContent = "count +";
        devButton2.onclick = () => {
            alert("count + is clicked!");
            previous.style.display = 'block';
            count = prompt("Enter the number of counts you want to add: ");
            alert("Count is added by " + count + " !");
        };
        devButton2.oncontextmenu = () => {
            if (button2 === 0) {
                alert("count + is right clicked!");
                hider++;
                alert("Hider is activated!" + hider);
                hider = devhider(hider, devButton1 , devButton2, devButton3 );
            }
            else {
                alert("You have already right clicked on this button!");
                button2 = 0;
                hider = 0;
            }
        };
        body.appendChild(devButton2);

        const devButton3 = document.createElement('button');
        devButton3.textContent = "flip +";  
        devButton3.onclick = () => {
            alert("flip + is clicked!");
            let input = prompt("Enter the number of flips you want to add: ");
            alert("Flip is added by " + flip[i] + " !");
            if (!isNaN(parsedInput)) {
                flip[i] = parsedInput;
                alert("Flip is added by " + parsedInput + " !");
            } else {
                alert("Invalid input. Please enter a numeric value.");
            }
            alert("Flip is added by " + flip + " !");
        };
        devButton3.oncontextmenu = () => {
            if (button3 === 0) {
                alert("flip + is right clicked!");
                hider++;
                alert("Hider is activated!"+hider);
                hider = devhider(hider, devButton1 , devButton2, devButton3);
            }
            else {
                alert("You have already right clicked on this button!");
                button3 = 0;
                hider = 0;
            }
        };
        body.appendChild(devButton3);
    }
}
function devhider(hider , devButton1 , devButton2 , devButton3) {
    if (hider === 3) {
        alert("devtools is deactivated!");
        body.removeChild(devButton1);
        body.removeChild(devButton2);
        body.removeChild(devButton3);
        hider = 0;
        return hider;
    }
    else {
        return hider;
    }
}

function incrementIndex() {
    if(flip[i] === 1){
        p[i-1].style.display = 'none';
        if (i === 1) {
            i = 13;
            previous.style.display = 'block';
            count++;
        } else {
            i--;
        }
        expand(i);
        flipBack(); // Corrected function name
    }
    else if(cheat >= 1){
        alert("Baby once again cheating plz baby see the picture and then go 🥺🥺🥺. So i decide to take the next button from you for now !");
        cheat++;
        next.style.display = 'none';
    }
    else{
        cheat++;
        alert("Baby first see the picture and then go 🥺🥺🥺");
    }
}

function ineg() {
    if (count != 0) {
        p[i-1].style.display = 'none';
        if (i === 13) {
            i = 1;
        } else {
            i++;
        }
        expand(i);
        flipBack(); // Corrected function name
    }
    else if(cheat >= 1){
        alert("Baby once again cheating plz baby. \n You can't go back! \n Until you cheack the rank 1 manually by flipping the cards. \n Don't cheat baby! \n So i taking the previous button for now.\n Good Luck!!!😉😁 ");
        cheat++;
        previous.style.display = 'none';
    }
    else{
        cheat++;
        previous.style.display = 'none';
        alert("You can't go back! \n Until you cheack the rank 1 manually by flipping the cards. \n Don't cheat baby! \n So i taking the previous button for now.\n Good Luck!!!😉😁 ");
    }
}