console.log("loaded")
var fortunesList = ["you are a god, go slay people today", "today you will find yourself ded"]
function generateFortuneCookie () {
  var fortunesList = ['the gods are angry'] ;
  /* all possible fortunes */
  var random = fortunesList[Math.floor(Math.random() * fortunesList.length)];
  document.getElementById('text').textContent = random;
  /* randomizer set to random variable, change textContent of fortune-cookie-text to the random variable value */
  console.log(random)
  var list = document.getElementById('prevFortune');
  var node = document.createElement("div");
  node.innerHTML = random
  list.appendChild(node);   
}
