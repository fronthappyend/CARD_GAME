
let Deck = document.getElementsByClassName("card-container")[0]
let GC = document.getElementsByClassName("gamer-cards")[0]
let AC = document.getElementsByClassName("AI-cards")[0]
let gamerScoresField = document.getElementsByClassName("scores")[0]
let AIScoresField = document.getElementsByClassName("scores")[1]
let scores = 0
let AIScores = 0	
for (item of Deck.children){
	item.classList.add("hide")
}

start.onclick = function (event) {
	   		let N = Math.floor(Math.random()*Deck.children.length)
			let Child = Deck.children[N]
			Child.classList.remove("hide")
			Deck.removeChild(Child)
			GC.appendChild(Child)

			switch(Child.textContent) {
				case "6": scores += 6 
				break;
				case "7": scores += 7 
				break;
				case "8": scores += 8 
				break;
				case "9": scores += 9 
				break;
				case "10": scores += 10 
				break;
				case "J": scores += 2 
				break;
				case "Q": scores += 3 
				break;
				case "K": scores += 4 
				break;
				case "A": if(scores > 10) {
					scores += 1
				} else {
					scores += 11
				}
				break;
			}
			gamerScoresField.innerText = "Your score is " + scores
			Deck = document.getElementsByClassName("card-container")[0]
			if ( scores > 21 ) {
				alert ("Too much")
				start.classList.add("button-hide")
			}
}

// reset.onclick = function() {
// 	scores = 0;
// 	gamerScoresField.innerText = "Your score is " + scores
// 	AIScores = 0;
// 	AIScoresField.innerText = "Comp score is " + AIScores
// 	for( item of GC.children ){
// 		if (item == 0) continue
// 		GC.removeChild(item)
// 		Deck.appendChild(item)
// 	}
				
// }




 pass.onclick = function (event) {
	let AIPlay = setInterval(function (){
	if(AIScores < 18) {
			let N = Math.floor(Math.random()*Deck.children.length)
			let Child = Deck.children[N]
			Child.classList.remove("hide")
			Deck.removeChild(Child)
			AC.appendChild(Child)

			switch(Child.textContent) {
				case "6": AIScores += 6 
				break;
				case "7": AIScores += 7 
				break;
				case "8": AIScores += 8 
				break;
				case "9": AIScores += 9 
				break;
				case "10": AIScores += 10 
				break;
				case "J": AIScores += 2 
				break;
				case "Q": AIScores += 3 
				break;
				case "K": AIScores += 4 
				break;
				case "A": if(AIScores > 10) {
					AIScores += 1
				} else {
					AIScores += 11
				}
				break;
			}
			AIScoresField.innerText = "Comp score is " + AIScores
			Deck = document.getElementsByClassName("card-container")[0]
		} else if (AIScores > 18 && AIScores < 21) {
			++AIScores
		} else {
			alert ("Comp has too much")
			clearInterval(AIPlay)
			scores = 0
			AIScores = 0

		}
	}	,1000)
}












