console.log("it is loaded")

var theList = ["we're gods","its kinda too late","do it","kick that ice under the fridge","we all die one way or another, minus well yeah?","so its not gonna be easy its gonna be really hard. and we're gonna have to work at this every day but i wanna do that because i want you. i want all of you. forever. you and me. everyday. will you do something for me? please? just picture your life for me. 30 years from now, 40 years from now? what's it look like?","You are alone, child. There is only darkness for you, and only death for your people. These ancients are just the beginning. I will command a great and terrible army, and we will sail to a billion worlds. We will sail until every light has been extinguished. You are strong, child, but I am beyond strength. I am the end, and I have come for you"]
var pastFortunes = [];
var buttonList = ["another one", "another? really?", "don't you think you had enough?", "lmao press me"]
var number = 0
function generateFortuneCookie(){
  /*math random crap*/

  var a = Math.floor(Math.random()*7)
  var fortune = theList[a]
  pastFortunes.push(fortune)
  document.getElementById("fortune-onclick").innerHTML = fortune
  var b = Math.floor(Math.random()*4)
  var button = buttonList[b]
  document.getElementById("button1").innerHTML = button

  /*the append crap*/

  var div = document.createElement("div")
  div.innerHTML = fortune
  document.getElementById("previous-fortunes").appendChild(div)
  var div1 = document.createElement("div")
  div1.innerHTML = "----------"
  document.getElementById("previous-fortunes").appendChild(div1)

  /*add number*/
  document.getElementById("fortune-number2").innerHTML = number += 1
}

function generateFortuneMax(){
  /*generate math randoms*/
  var c = Math.floor(Math.random()*7)
  var d = Math.floor(Math.random()*7)
  var e = Math.floor(Math.random()*7)
  var f = Math.floor(Math.random()*7)
  var g = Math.floor(Math.random()*7)

  /*the fortunes*/
  var fortunes = [theList[c], "||", theList[d], "||", theList[e], "||", theList[f], "||", theList[g]]
  document.getElementById("fortune-onclick").innerHTML = fortunes

  /*appending fortunes*/
  var div2 = document.createElement("div")
  var div3 = document.createElement("div")
  var div4 = document.createElement("div")
  var div5 = document.createElement("div")
  var div6 = document.createElement("div")
  var div7 = document.createElement("div")
  div2.innerHTML = fortunes[0]
  div3.innerHTML = "----------"
  div4.innerHTML = fortunes[2]
  div5.innerHTML = fortunes[4]
  div6.innerHTML = fortunes[6]
  div7.innerHTML = fortunes[8]
  document.getElementById("previous-fortunes").appendChild(div2)
  document.getElementById("previous-fortunes").appendChild(div4)
  document.getElementById("previous-fortunes").appendChild(div5)
  document.getElementById("previous-fortunes").appendChild(div6)
  document.getElementById("previous-fortunes").appendChild(div7)
  document.getElementById("previous-fortunes").appendChild(div3)
  document.getElementById("fortune-number2").innerHTML = number += 5
  /*wacky buttons*/
  var c = Math.floor(Math.random()*4)
  var button1 = buttonList[c]
  document.getElementById("button2").innerHTML = button1
}
