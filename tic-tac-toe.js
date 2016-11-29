// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function createCircle() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 60)
  circle.setAttribute("cy", 78)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "skyblue")
  canvas.appendChild(circle)
}
  function createRect() {
    var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 120)
  rect.setAttribute("y", 60)
  rect.setAttribute("height", 40)
  rect.setAttribute("width", 40)
  rect.setAttribute("fill", "lightgreen")
  canvas.appendChild(rect)
}
var namespace = "http://www.w3.org/2000/svg"
function createCircle1() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 230)
  circle.setAttribute("cy", 78)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "skyblue")
  canvas.appendChild(circle)
}
  function createRect1() {
    var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 130)
  rect.setAttribute("y", 140)
  rect.setAttribute("height", 40)
  rect.setAttribute("width", 40)
  rect.setAttribute("fill", "lightgreen")
  canvas.appendChild(rect)
}
var namespace = "http://www.w3.org/2000/svg"
function createCircle2() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 60)
  circle.setAttribute("cy", 160)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "skyblue")
  canvas.appendChild(circle)
}
  function createRect2() {
    var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 220)
  rect.setAttribute("y", 160)
  rect.setAttribute("height", 40)
  rect.setAttribute("width", 40)
  rect.setAttribute("fill", "lightgreen")
  canvas.appendChild(rect)
}
var namespace = "http://www.w3.org/2000/svg"
function createCircle3() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 60)
  circle.setAttribute("cy", 260)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "skyblue")
  canvas.appendChild(circle)
}
  function createRect3() {
    var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 130)
  rect.setAttribute("y", 240)
  rect.setAttribute("height", 40)
  rect.setAttribute("width", 40)
  rect.setAttribute("fill", "lightgreen")
  canvas.appendChild(rect)
}
var namespace = "http://www.w3.org/2000/svg"
function createCircle4() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 240)
  circle.setAttribute("cy", 260)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "skyblue")
  canvas.appendChild(circle)
}
  function createRect4() {
    var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 130)
  rect.setAttribute("y", 60)
  rect.setAttribute("height", 40)
  rect.setAttribute("width", 40)
  rect.setAttribute("fill", "lightgreen")
  canvas.appendChild(rect)
}
var namespace = "http://www.w3.org/2000/svg"
function createCircle5() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 60)
  circle.setAttribute("cy", 78)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "skyblue")
  canvas.appendChild(circle)
}
  function createRect5() {
    var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 130)
  rect.setAttribute("y", 60)
  rect.setAttribute("height", 40)
  rect.setAttribute("width", 40)
  rect.setAttribute("fill", "lightgreen")
  canvas.appendChild(rect)
}
var namespace = "http://www.w3.org/2000/svg"
function createCircle6() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 60)
  circle.setAttribute("cy", 78)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "skyblue")
  canvas.appendChild(circle)
}
  function createRect6() {
    var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 130)
  rect.setAttribute("y", 60)
  rect.setAttribute("height", 40)
  rect.setAttribute("width", 40)
  rect.setAttribute("fill", "lightgreen")
  canvas.appendChild(rect)
}
var namespace = "http://www.w3.org/2000/svg"
function createCircle7() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 60)
  circle.setAttribute("cy", 78)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "skyblue")
  canvas.appendChild(circle)
}
  function createRect7() {
    var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 130)
  rect.setAttribute("y", 60)
  rect.setAttribute("height", 40)
  rect.setAttribute("width", 40)
  rect.setAttribute("fill", "lightgreen")
  canvas.appendChild(rect)
}
var namespace = "http://www.w3.org/2000/svg"
function createCircle8() {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 60)
  circle.setAttribute("cy", 78)
  circle.setAttribute("r", 30)
  circle.setAttribute("fill", "skyblue")
  canvas.appendChild(circle)
}
  function createRect8() {
    var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace,"rect")
  rect.setAttribute("x", 130)
  rect.setAttribute("y", 60)
  rect.setAttribute("height", 40)
  rect.setAttribute("width", 40)
  rect.setAttribute("fill", "lightgreen")
  canvas.appendChild(rect)
}
  var buttonClicked = 0
  function createShape() {
    if(buttonClicked == 0) {
    createCircle()
  buttonClicked = 1
  }
}
 var turn="player1"
 function topLeft() {
   if(turn == "player1") {
     createCircle()
     turn="player2"
   } else {
     createRect()
     turn="player1"
   }
 }
  function topMiddle() {
    if(turn == "player1") {
      createCircle()
      turn="player2"
    } else {
      createRect()
      turn="player1"
    }
  }
   function topRight() {
     if(turn == "player1") {
       createCircle()
       turn="player2"
     } else {
       createRect()
       turn="player1"
     }
   }
