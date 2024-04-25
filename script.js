const stone = window.document.querySelector("#img-1");
alert("start  the Game")
const paper = window.document.querySelector("#img-2");
const scissor = window.document.querySelector("#img-3");
const user = window.document.querySelector("#user-score");
const comp = window.document.querySelector("#comp-score");
const msg = window.document.querySelector("#change-msg");
// For Stone
const stn = () => {
  let n = Math.floor(Math.random() * 3);
  computer = ["stone", "paper", "scissor"][n];
  if (computer == "paper") {
    msg.innerText = "you loss, paper beats stone";
    msg.style.backgroundColor = "red";
    msg.style.color = "#fff"
    // update computer score
    let b = parseInt(comp.innerHTML);
    b = b + 1;
    comp.innerText = b;
  }
  else if (computer == "scissor") {
    msg.innerText = "you win, stone beats scissor";
    msg.style.backgroundColor = "green";
    msg.style.color = "#F5F5DC"
    // update User score
    let b = parseInt(user.innerHTML);
    b = b + 1;
    user.innerText = b;
  }
  else {
    msg.innerHTML = "<b>the game is Tie...</b>"
    msg.style.backgroundColor = "#A9A9A9"
    msg.style.color = "#332941"
  }
}
// For Paper
const pap = () => {
  let n = Math.floor(Math.random() * 3);
  computer = ["stone", "paper", "scissor"][n];
  if (computer == "scissor") { // LOSS
    msg.innerText = "you loss, paper beats stone";
    msg.style.backgroundColor = "red";
    msg.style.color = "#fff"
    // update computer score
    let b = parseInt(comp.innerHTML);
    b = b + 1;
    comp.innerText = b;
  }
  else if (computer == "stone") {  // WIN
    msg.innerText = "you win, stone beats scissor";
    msg.style.backgroundColor = "green";
    msg.style.color = "#F5F5DC"
    // update User score
    let b = parseInt(user.innerHTML);
    b = b + 1;
    user.innerText = b;
  }
  else {                  //  TIE......
    msg.innerHTML = "<b>the game is Tie...</b>"
    msg.style.backgroundColor = "#A9A9A9"
    msg.style.color = "#332941"
  }
}
// For Scissor
const sci = () => {
  let n = Math.floor(Math.random() * 3);
  computer = ["stone", "paper", "scissor"][n];
  if (computer == "stone") { // LOSS
    msg.innerText = "you loss, paper beats stone";
    msg.style.backgroundColor = "red";
    msg.style.color = "#fff"
    // update computer score
    let b = parseInt(comp.innerHTML);
    b = b + 1;
    comp.innerText = b;
  }
  else if (computer == "paper") {  // WIN
    msg.innerText = "you win, stone beats scissor";
    msg.style.backgroundColor = "green";
    msg.style.color = "#F5F5DC"
    // update User score
    let b = parseInt(user.innerHTML);
    b = b + 1;
    user.innerText = b;
  }
  else {                  //  TIE......
    msg.innerHTML = "<b>the game is Tie...</b>"
    msg.style.backgroundColor = "#A9A9A9"
    msg.style.color = "#332941"
  }
}
stone.addEventListener("click", stn);
paper.addEventListener("click", pap);
scissor.addEventListener("click", sci);
