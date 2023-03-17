const c = document.getElementById("myCanvas");
const canvasWidth = c.width;
const canvasHeight = c.height;
const ctx = c.getContext("2d");

let radius = 10;
let circle_x = canvasWidth / 2;
let circle_y = canvasHeight / 3;

let xSpeed = 5;
let ySpeed = -6;

function drawCircle() {
  ctx.beginPath();
  ctx.arc(circle_x, circle_y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "#ffc628";
  ctx.fill();
}

function draw() {
  //檢查是否碰到邊框
  if (circle_x <= 0 + radius || circle_x >= canvasWidth - radius) {
    xSpeed *= -1;
    circle_x += xSpeed;
  }

  if (circle_y <= 0 + radius || circle_y >= canvasHeight - radius) {
    ySpeed *= -1;
    circle_y += ySpeed;
  }

  //更新球的座標
  circle_x += xSpeed;
  circle_y += ySpeed;

  //填上黑色背景
  ctx.fillStyle = "#4f3f54";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  drawCircle();
}

let game = setInterval(draw, 15);

// ----------------------------------

let textArray = [
  {
    text: "/ToDoList",
    url: "https://charlie24024217.github.io/todoListAndTimer/",
  },
  {
    text: "/JumpBall",
    url: "https://charlie24024217.github.io/jumpBall/index",
  },
  { text: "/Snake", url: "https://charlie24024217.github.io/snake/" },
];

function init() {
  function jumpBorder() {
    if ($("#text").css("border-right") == "0px solid rgb(0, 0, 0)") {
      $("#text").css("border-right", "2px solid black");
    } else {
      $("#text").css("border-right", "0px solid rgb(0, 0, 0)");
    }
  }
  let startJump = setInterval(() => {
    jumpBorder();
  }, 500);

  let type;
  let untype;
  let typeSpeed = 200;
  let untypeSpeed = 100;
  let delay = 500;
  let showLength = 1;
  let showTextIndex = 0;
  $("#text").attr("href", textArray[showTextIndex].url);

  function grow() {
    if (showLength <= textArray[showTextIndex].text.length) {
      $("#text").text(textArray[showTextIndex].text.slice(0, showLength));
      showLength++;
    } else {
      setTimeout(() => {
        untype = setInterval(() => {
          shrink();
        }, untypeSpeed);
      }, delay);
      clearInterval(type);
    }
  }

  function shrink() {
    if (showLength > 0) {
      $("#text").text(textArray[showTextIndex].text.slice(0, showLength));
      showLength--;
    } else {
      if (showTextIndex < textArray.length - 1) {
        showTextIndex++;
      } else {
        showTextIndex = 0;
      }
      $("#text").attr("href", textArray[showTextIndex].url);
      type = setInterval(() => {
        grow();
      }, typeSpeed);
      clearInterval(untype);
    }
  }

  type = setInterval(() => {
    grow();
  }, typeSpeed);
}

init();

//----------------------------------

let icon = document.getElementById("icon");
console.log(icon.offsetHeight);
let i = 0;
let iconBoxHeight = document.getElementById("runBen").offsetHeight;
let topDistant = -icon.offsetHeight + i;
let go = setInterval(() => {
  let offsetTop = icon.offsetTop;
  if (offsetTop > iconBoxHeight) {
    i = 0;
  }

  topDistant = -icon.offsetHeight + i;
  icon.style.top = `${topDistant}px`;
  i += 1;
}, 10);
