console.log("it is loaded")

var theList = ["we're gods","its kinda too late","do it","sexy keegan is watching","have fun, you're gonna die soon anyawys","so its not gonna be easy its gonna be really hard. and we're gonna have to work at this every day but i wanna do that because i want you. i want all of you. forever. you and me. everyday. will you do something for me? please? just picture your life for me. 30 years from now, 40 years from now? what's it look like?","You are alone, child. There is only darkness for you, and only death for your people. These ancients are just the beginning. I will command a great and terrible army, and we will sail to a billion worlds. We will sail until every light has been extinguished. You are strong, child, but I am beyond strength. I am the end, and I have come for you"]
var pastFortunes = [];
var buttonList = ["another one", "another? really?", "don't you think you had enough?", "lmao press me"]
function generateFortuneCookie(){
  /*math random crap*/

  var a = Math.floor(Math.random()*7)
  var fortune = theList[a]
  pastFortunes.push(fortune)
  document.getElementById("fortune-onclick").innerHTML = fortune
  var b = Math.floor(Math.random()*4)
  var button = buttonList[b]
  document.getElementById("fortune-button").innerHTML = button

  /*the append crap*/

  var div = document.createElement("div")
  div.innerHTML = fortune
  document.getElementById("previous-fortunes").appendChild(div)
  var div1 = document.createElement("div1")
  div1.innerHTML = "----------"
  document.getElementById("previous-fortunes").appendChild(div1)
  if (fortune = pastFortunes[0]){
    console.log(fortune)
    fortune = theList[a+1]
  }else if (pastFortunes[1] = pastFortunes[0]){
    console.log(fortune)
    fortune = theList[a+1]
  }
}