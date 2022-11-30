function tabgen() {
  var table = document.getElementById("tab1");
  for (let i = 0; i < 50; i++) {
    var row = table.insertRow(i);
    for (let j = 0; j < 50; j++) {
      var cell = row.insertCell(j);
    }
  }
}

function paint() {
  var table = document.getElementById("tab1");
  table.rows[a].cells[b].style.background = "green";
  if (a > 0 && b > 0) {
    table.rows[a - 1].cells[b - 1].style.background = "white";
  }
  a++;
  b++;
  if (a > 40) {
    clearInterval(intervalID);
  }
}

function clear1() {
  clearInterval(intervalID);
}
var time = 0;
var direction = "";
function counter() {
  time++;
  var count = document.getElementById("counter");
  count.innerHTML = time;
}

function count() {
  var intervalID = window.setInterval(function () {
    a++;
  }, 1000);
  var count2 = document.getElementById("counter1");
  count2.innerHTML = intervalID;

  return intervalID;
}

function clear_int() {
  var p1 = document.getElementById("counter1").innerHTML;
  clearInterval(p1);
  document.getElementById("counter1").innerHTML = "blank";
}

var a = 24;
var b = 24;
var snake = [[24, 24]];
var direction = "Down";
var snake_len = 1;
var intID = 0;
var food_coordinates = [];
var current_direction = "";

function snake_moving1() {
  var intervalID = window.setInterval(function () {
    intID = intervalID;
    if (direction === "Down") {
      current_direction = "Down";
      a++;
      if (a === 50) {
        a = 0;
      }
      if ((a !== food_coordinates[0]) | (b !== food_coordinates[1])) {
        var x = [];
        x.push(a, b);
        snake.push(x);
        y = snake.shift();
        lose_condition(snake);
        var table = document.getElementById("tab1");
        for (i = 0; i < snake.length; i++) {
          table.rows[snake[i][0]].cells[snake[i][1]].style.background = "green";
        }

        table.rows[y[0]].cells[y[1]].style.background = "white";
      }
      if (a === food_coordinates[0] && b === food_coordinates[1]) {
        console.log("food      " + food_coordinates);
        food_coordinates = generate_food(snake);
        var x = [];
        x.push(a, b);
        snake.push(x);
        lose_condition(snake);
        var table = document.getElementById("tab1");
        for (i = 0; i < snake.length; i++) {
          table.rows[snake[i][0]].cells[snake[i][1]].style.background = "green";
        }
      }
    }
    if (direction === "Up") {
      current_direction = "Up";
      a--;
      if (a === -1) {
        a = 49;
      }
      if ((a !== food_coordinates[0]) | (b !== food_coordinates[1])) {
        var x = [];
        x.push(a, b);
        snake.push(x);
        y = snake.shift();
        lose_condition(snake);
        var table = document.getElementById("tab1");
        for (i = 0; i < snake.length; i++) {
          table.rows[snake[i][0]].cells[snake[i][1]].style.background = "green";
        }

        table.rows[y[0]].cells[y[1]].style.background = "white";
      }
      if (a === food_coordinates[0] && b === food_coordinates[1]) {
        console.log("food      " + food_coordinates);
        food_coordinates = generate_food(snake);
        var x = [];
        x.push(a, b);
        snake.push(x);
        lose_condition(snake);
        var table = document.getElementById("tab1");
        for (i = 0; i < snake.length; i++) {
          table.rows[snake[i][0]].cells[snake[i][1]].style.background = "green";
        }
      }
    }

    if (direction === "Right") {
      current_direction = "Right";
      b++;
      if (b === 50) {
        b = 0;
      }
      if ((a !== food_coordinates[0]) | (b !== food_coordinates[1])) {
        var x = [];
        x.push(a, b);
        snake.push(x);
        y = snake.shift();
        lose_condition(snake);
        var table = document.getElementById("tab1");
        for (i = 0; i < snake.length; i++) {
          table.rows[snake[i][0]].cells[snake[i][1]].style.background = "green";
        }

        table.rows[y[0]].cells[y[1]].style.background = "white";
      }
      if (a === food_coordinates[0] && b === food_coordinates[1]) {
        console.log("food      " + food_coordinates);
        food_coordinates = generate_food(snake);
        var x = [];
        x.push(a, b);
        snake.push(x);
        lose_condition(snake);
        var table = document.getElementById("tab1");
        for (i = 0; i < snake.length; i++) {
          table.rows[snake[i][0]].cells[snake[i][1]].style.background = "green";
        }
      }
    }

    if (direction === "Left") {
      current_direction = "Left";
      b--;
      if (b === -1) {
        b = 49;
      }
      if ((a !== food_coordinates[0]) | (b !== food_coordinates[1])) {
        var x = [];
        x.push(a, b);
        snake.push(x);
        y = snake.shift();
        lose_condition(snake);
        var table = document.getElementById("tab1");
        for (i = 0; i < snake.length; i++) {
          table.rows[snake[i][0]].cells[snake[i][1]].style.background = "green";
        }

        table.rows[y[0]].cells[y[1]].style.background = "white";
      }
      if (a === food_coordinates[0] && b === food_coordinates[1]) {
        console.log("food      " + food_coordinates);
        food_coordinates = generate_food(snake);
        var x = [];
        x.push(a, b);
        snake.push(x);
        lose_condition(snake);
        var table = document.getElementById("tab1");
        for (i = 0; i < snake.length; i++) {
          table.rows[snake[i][0]].cells[snake[i][1]].style.background = "green";
        }
      }
    }
  }, 300);
  return intervalID;
}

function movedown() {
  if ((current_direction === "Right") | (current_direction === "Left")) {
    direction = "Down";
  }
}
function moveup() {
  if ((current_direction === "Right") | (current_direction === "Left")) {
    direction = "Up";
  }
}

function moveright() {
  if ((current_direction === "Down") | (current_direction === "Up")) {
    direction = "Right";
  }
}
function moveleft() {
  if ((current_direction === "Down") | (current_direction === "Up")) {
    direction = "Left";
  }
}

function lose_condition(snake) {
  for (i = 0; i < snake.length - 1; i++) {
    if (
      snake[snake.length - 1][0] === snake[i][0] &&
      snake[snake.length - 1][1] === snake[i][1]
    ) {
      alert("WASTED");
      reset();
    }
  }
}

function genereate_big_array() {
  let big_array = [];
  let a = 0;
  let b = 0;
  for (a = 0; a < 50; a++) {
    for (b = 0; b < 50; b++) {
      let x = [];
      x.push(a);
      x.push(b);
      big_array.push(x);
    }
  }
  return big_array;
}

function generate_food(snake) {
  var big_array = genereate_big_array();
  let difference_array = [];
  for (i = 0; i < snake.length; i++) {
    for (j = 0; j < big_array.length; j++) {
      if (snake[i][0] === big_array[j][0] && snake[i][1] === big_array[j][1]) {
        big_array.splice(j, 1);
      }
    }
  }
  var food_index = random_whole_number(big_array.length);
  var a = document.getElementById("tab1");
  a.rows[big_array[food_index][0]].cells[
    big_array[food_index][1]
  ].style.background = "red";
  food_coordinates = big_array[food_index];
  return big_array[food_index];
}

function random_whole_number(max) {
  max = Math.floor(max);
  const a = Math.floor(Math.random() * max) + 1;
  return a;
}

function disable_button() {
  var a = document.getElementById("start");
  a.setAttribute("disabled", true);
}
function enable_button() {
  var a = document.getElementById("start");
  a.removeAttribute("disabled");
}

function reset() {
  direction = "Down";
  current_direction = "";
  a = 24;
  b = 24;
  snake = [[24, 24]];
  clearInterval(intID);
  enable_button();
  var table = document.getElementById("tab1");
  for (i = 0; i < 50; i++) {
    for (j = 0; j < 50; j++) {
      table.rows[i].cells[j].style.background = "white";
    }
  }
}

tabgen();

document.addEventListener("keydown", (event) => {
  var name = event.key;
  var code = event.code;
  if (name === "ArrowDown") {
    movedown();
  }
  if (name === "ArrowUp") {
    moveup();
  }
  if (name === "ArrowRight") {
    moveright();
  }
  if (name === "ArrowLeft") {
    moveleft();
  }
});
