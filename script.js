let rock = document.querySelector(`#rock`);
let paper = document.querySelector(`#paper`);
let scissors = document.querySelector(`#scissors`);
let roboArm = document.querySelector(`#roboArm`);
let humanArm = document.querySelector(`#humanArm`);
let AI = document.querySelector(`#ai`);
let YOU = document.querySelector(`#you`);
let buttons = document.querySelector(`.buttons`);
let nextRound = document.querySelector(`#nextRound`);
// let restart = document.querySelector(`#restart`);

let choice = [`rock`, `paper`, `scissors`];
let randomChoice = null;

function aiChoice() {
  randomChoice = choice[Math.floor(Math.random() * choice.length)];
  if (randomChoice == `scissors`) {
    roboArm.src = `./roboScisors.png`;
  } else if (randomChoice == `paper`) {
    roboArm.src = `./roboarmPaper.png`;
  } else if (randomChoice == `rock`) {
    roboArm.src = `roboArmRock.png`;
  }
}
let ai = 0;
let you = 0;
gamePlan();

function gamePlan() {
  rock.addEventListener(`click`, function () {
    humanArm.src = `humanArm.png`;
    aiChoice();
    if (randomChoice == `paper`) {
      AI.innerText = ai++;
    } else if (randomChoice == `scissors`) {
      YOU.innerText = you++;
    } else if (randomChoice == `rock`) {
      draw();
    }
  });
  paper.addEventListener(`click`, function () {
    humanArm.src = `humanarmPaper.png`;
    aiChoice();
    if (randomChoice == `scissors`) {
      AI.innerText = ai++;
    } else if (randomChoice == `rock`) {
      YOU.innerText = you++;
    } else if (randomChoice == `paper`) {
      draw();
    }
  });
  scissors.addEventListener(`click`, function () {
    console.log("sadsgsgsdfgsdgsdfgsdfgsdeg");
    humanArm.src = `humanarmScissors.png`;
    aiChoice();
    if (randomChoice == `rock`) {
      AI.innerText = ai++;
    } else if (randomChoice == `paper`) {
      YOU.innerText = you++;
    } else if (randomChoice == `scissors`) {
      draw();
    }
  });
}

function draw() {
  buttons.classList.remove(`buttons`);
  buttons.innerHTML = `<div><p class="drawclass">It's a draw</p></div>
  <br>
  <div class="gamebuttons">
    <button class="drawbuttons" id="nextRound">Next round</button>
  <button class="drawbuttons" id="restart">Restart</button>
  </div>`;
  let restart = document.querySelector(`#restart`);
  restart.addEventListener(`click`, function () {
    buttons.innerHTML = `        <button id="rock"><img src="buttonRock.png" alt="" /></button>
    <button id="paper"><img src="buttonPaper.png" alt="" /></button>
    <button id="scissors"><img src="buttonScissors.png" alt="" /></button>`;
    buttons.classList.add(`buttons`);

    ai = 0;
    you = 0;
    gamePlan();
  });
  let nextRound = document.querySelector(`#nextRound`);
  nextRound.addEventListener(`click`, function () {
    buttons.innerHTML = `        <button id="rock"><img src="buttonRock.png" alt="" /></button>
    <button id="paper"><img src="buttonPaper.png" alt="" /></button>
    <button id="scissors"><img src="buttonScissors.png" alt="" /></button>`;
    buttons.classList.add(`buttons`);
  });
}
