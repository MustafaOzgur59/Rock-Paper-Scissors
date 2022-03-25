let images = document.getElementsByTagName("img");
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let history = document.getElementById("history");
let info = document.getElementById("infoText");
console.log(images.length);

for (let i = 0; i < 3; i++) {
  images[i].addEventListener("click", (e) => {
    console.log(e.target.name);
    let computerMove = computerPlay();
    console.log(computerMove);
    switch (computerMove) {
      case 0: //rock
        if (e.target.name === "Rock") {
          const node = document.createElement("li");
          const textnode = document.createTextNode("It's a tie");
          node.appendChild(textnode);
          history.appendChild(node);
          info.textContent = "It's a tie";
        } else if (e.target.name === "Paper") {
          const node = document.createElement("li");
          const textnode = document.createTextNode("Player wins");
          node.appendChild(textnode);
          history.appendChild(node);
          info.textContent = "Player wins";
          playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
        } else {
          const node = document.createElement("li");
          const textnode = document.createTextNode("Computer wins");
          node.appendChild(textnode);
          history.appendChild(node);
          info.textContent = "Computer wins";
          computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
        }
        break;
      case 1: //paper
        if (e.target.name === "Rock") {
          const node = document.createElement("li");
          const textnode = document.createTextNode("Computer wins");
          node.appendChild(textnode);
          info.textContent = "Computer wins";
          history.appendChild(node);
          computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
        } else if (e.target.name === "Paper") {
          const node = document.createElement("li");
          const textnode = document.createTextNode("It's a tie");
          node.appendChild(textnode);
          info.textContent = "It's a tie";
          history.appendChild(node);
        } else {
          const node = document.createElement("li");
          const textnode = document.createTextNode("Player wins");
          node.appendChild(textnode);
          info.textContent = "Player wins";
          history.appendChild(node);
          playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
        }
        break;
      case 2: //scissors
        if (e.target.name === "Rock") {
          const node = document.createElement("li");
          const textnode = document.createTextNode("Player wins");
          node.appendChild(textnode);
          info.textContent = "Player wins";
          history.appendChild(node);
          playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
        } else if (e.target.name === "Paper") {
          const node = document.createElement("li");
          const textnode = document.createTextNode("Computer wins");
          info.textContent = "Computer wins";
          node.appendChild(textnode);
          history.appendChild(node);
          computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
        } else {
          console.log("It's a tie");
          const node = document.createElement("li");
          const textnode = document.createTextNode("It's a tie");
          info.textContent = "It's a tie";
          node.appendChild(textnode);
          history.appendChild(node);
        }
        break;
    }
  });
}

function computerPlay() {
  let rand = parseInt(Math.random() * 3);
  return rand;
}
