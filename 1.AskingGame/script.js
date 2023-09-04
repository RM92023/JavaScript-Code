let timeFinish;
let intervalTime;

function startCountDown() {
  timeFinish = setTimeout(timeComplete, 30000);
  intervalTime = setInterval(ticTac, 1000);

  document.getElementById("countDown").textContent = 30;
}

const ticTac = () => {
  let time = document.getElementById("countDown").textContent;
  document.getElementById("countDown").textContent = time - 1;
};

const timeComplete = () => {
  clearInterval(intervalTime);
  document.getElementById("countDown").textContent = 0;
  //document.getElementById("audioFinal").play();
  alert("Finish Time, GAME OVER");
};

const finish = () => {
  clearTimeout(timeFinish);
  clearInterval(intervalTime);

  let date = new Date();
  let response1 = document.getElementById("question1");
  let response2 = document.getElementById("question2");
  let response3 = document.getElementById("question3");
  let response4 = document.getElementById("question4");
  let response5 = document.getElementById("question5");

  let message =
    date.toLocaleDateString("es-Es") +
    `
    1. ${response1.value}
    2. ${response2.value}
    3. ${response3.value}
    4. ${response4.value} 
    5. ${response5.value}`;

  alert(message);
};

const restart = () => {
  location.reload();
};
