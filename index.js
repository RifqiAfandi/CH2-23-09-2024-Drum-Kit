// document
//     .querySelector("button")
//     .addEventListener("click", () => handleClick("hai"));

// function handleClick(greet) {
//     alert(`Hello FSW 2 ${greet}`);
// }

// handleClick();

// console.log(document.querySelectorAll('button')[6]);

// let totalButton = document.querySelectorAll('button').length;

// for(let i = 0; i < totalButton; i++){
//     // console.log(i);
//     document.querySelectorAll('button')[i].addEventListener('click', function(){
//         // alert(`Hallo FSW 2 Button ${i}` );
        
//         // let audio = new Audio('sounds/tom-1.mp3');
//         // audio.play();

//         // this.style.color = 'yellow';

//         switch(this.innerHTML){
//             case "w":
//                 let tom1 = new Audio("sounds/tom-1.mp3")
//                 tom1.play();
//                 break;
//             case "a":
//                 let tom2 = new Audio("sounds/tom-2.mp3")
//                 tom2.play();
//                 break;
//             case "s":
//                 let tom3 = new Audio("sounds/tom-3.mp3")
//                 tom3.play();
//                 break;
//             case "d":
//                 let tom4 = new Audio("sounds/tom-4.mp3")
//                 tom4.play();
//                 break;
//             case "j":
//                 let snare = new Audio("sounds/snare.mp3")
//                 snare.play();
//                 break;
//             case "k":
//                 let crash = new Audio("sounds/crash.mp3")
//                 crash.play();
//                 break;
//             case "l":
//                 let kick = new Audio("sounds/kick-bass.mp3")
//                 kick.play();
//                 break;
//             default:
//         }
//     })
// }

let totalButton = document.querySelectorAll('button').length;

for(let i = 0; i < totalButton; i++){
    document.querySelectorAll('button')[i].addEventListener('click', function(){
        playSound(this.innerHTML);
        animateBackground(this);
    });
}

document.addEventListener('keydown', function(event) {
    playSound(event.key);
    animateBackground(document.querySelector(`.${event.key}`));
});

function playSound(key) {
    switch(key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            break;
    }
}

function animateBackground(button) {
    button.style.backgroundColor = 'red';
    setTimeout(() => {
        button.style.backgroundColor = ''; 
    }, 2000);
}
