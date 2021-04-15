//Propiedades de las cartas
itemOne = document.querySelector(".Item-1")
itemTwo = document.querySelector(".Item-2")
itemThree = document.querySelector(".Item-3")
itemOneP = document.querySelector(".item-flex-1")
itemTwoP = document.querySelector(".item-flex-2")
itemThreeP = document.querySelector(".item-flex-3")
AllItems = document.querySelector(".item-flex")
player = document.querySelector(".jugador")
modal = document.querySelector(".modal-inicio")
botonPlay = document.querySelector (".modal-datos__button")

imagenSigno1 = document.querySelector(".img-1")
imagenSigno2 = document.querySelector(".img-2")
imagenSigno3 = document.querySelector(".img-3")
var puntosTotales
var puntosRandomOne = []
var puntosRandomTwo = []
var puntosRandomThree = []


//declaraciones colores
let rojo ="#e44e";
let amarillo ="#dc4e";
let verde ="#08A85Aee";
//imagen signo de pregunta 
itemOne.appendChild(imagenSigno1)
imagenSigno1.style.display = "block"
imagenSigno1.style.width = "170px"
imagenSigno1.style.textAlign = "center"
imagenSigno1.style.margin = "auto"
imagenSigno1.style.marginTop = "33%"

itemTwo.appendChild(imagenSigno2)
imagenSigno2.style.display = "block"
imagenSigno2.style.width = "170px"
imagenSigno2.style.textAlign = "center"
imagenSigno2.style.margin = "auto"
imagenSigno2.style.marginTop = "33%"
itemThree.appendChild(imagenSigno3)
imagenSigno3.style.display = "block"
imagenSigno3.style.width = "170px"
imagenSigno3.style.textAlign = "center"
imagenSigno3.style.margin = "auto"
imagenSigno3.style.marginTop = "33%"


//pruebas

//eventos del juego
    botonPlay.addEventListener ("click", ()=>{
    modal.style.display = "none";
    })
	itemOne.addEventListener("click",()=>{
		
		puntosRandomOne.push(puntosRandom())
		
let	 puntosRandomOneTwo = puntosRandom()
let	 puntosRandomOneThree = puntosRandom()	
		itemOneP.style.display = "block"
		itemThreeP.style.display = "block"
		itemTwoP.style.display = "block"
			itemOneP.innerHTML = `${puntosRandomOne[puntosRandomOne.length - 1]}`
		
		
			itemTwoP.innerHTML = `${puntosRandomOneTwo}  `
		
			itemThreeP.innerHTML = ` ${puntosRandomOneThree}`
			//aparecer, reaparecer signo
			imagenSigno1.style.display ="none"
			imagenSigno2.style.display = "none"
			imagenSigno3.style.display = "none"
		almacenarScore(puntosRandomOne,puntosRandomTwo,puntosRandomThree) // almacenaje
	setTimeout(function renovar(){
		itemOneP.innerHTML = "  "
		itemTwoP.innerHTML = "  "
		itemThreeP.innerHTML = "  "
		
	},3000)
	
		if (puntosRandomOne[puntosRandomOne.length - 1] > puntosRandomOneTwo && puntosRandomOne[puntosRandomOne.length - 1] >  puntosRandomOneThree){//mejor puntaje
		setTimeout (function ChangeColor(){
			itemOne.style.background =`${verde}`
			itemTwo.style.background =  `${rojo}`
			itemThree.style.background = `${rojo}`
			
		},1)
		setTimeout(() => {
			itemOneP.style.display = "none"
			itemThreeP.style.display = "none"
			itemTwoP.style.display = "none"
		}, 900);
		setTimeout (function ChangeColorToZero(){
			itemOne.style.background ="#bbb0"
			itemTwo.style.background =  "#bbb0"
			itemThree.style.background = "#bbb0"
			imagenSigno1.style.display = "block"
			imagenSigno2.style.display = "block"
			imagenSigno3.style.display = "block"
			
		
		},1000)

	}else if ((puntosRandomOne[puntosRandomOne.length - 1] >= puntosRandomOneTwo && puntosRandomOne[puntosRandomOne.length - 1] <= puntosRandomOneThree) || 
		(puntosRandomOne[puntosRandomOne.length - 1] <= puntosRandomOneTwo && puntosRandomOne[puntosRandomOne.length - 1] >= puntosRandomOneThree)) {//puntaje mejorable
		setTimeout (function ChangeColor(){
			itemOne.style.background  =`${amarillo}`
			itemTwo.style.background  = `${amarillo}`
			itemThree.style.background = `${amarillo}`
		},1)
			setTimeout(() => {
				itemOneP.style.display = "none"
				itemThreeP.style.display = "none"
				itemTwoP.style.display = "none"
			}, 900);
		setTimeout (function ChangeColorToZero(){
			itemOne.style.background =" #bbb0"
			itemTwo.style.background =  "#bbb0"
			itemThree.style.background = "#bbb0"
			imagenSigno1.style.display = "block"
			imagenSigno2.style.display = "block"
			imagenSigno3.style.display = "block"
			
		},1000)
	} else if (puntosRandomOne[puntosRandomOne.length - 1] < puntosRandomOneThree && puntosRandomOne[puntosRandomOne.length - 1] < puntosRandomOneTwo){ //puntaje horrible
		setTimeout (function ChangeColor(){
			itemOne.style.background = `${rojo}`
			itemTwo.style.background  = `${verde}`
			itemThree.style.background= `${verde}`
		},1)
			setTimeout(() => {
				itemOneP.style.display = "none"
				itemThreeP.style.display = "none"
				itemTwoP.style.display = "none"
			}, 900);
		setTimeout (function ChangeColorToZero(){
			itemOne.style.background ="#bbb0"
			itemTwo.style.background =  "#bbb0"
			itemThree.style.background = "#bbb0"
			imagenSigno1.style.display = "block"
			imagenSigno2.style.display = "block"
			imagenSigno3.style.display = "block"
		},1000)
	}
})
itemTwo.addEventListener("click",()=>{
	
		
	 puntosRandomTwo.push(puntosRandom())
let	 puntosRandomTwoOne = puntosRandom()
let	 puntosRandomTwoThree = puntosRandom()
	itemOneP.style.display = "block"
	itemThreeP.style.display = "block"
	itemTwoP.style.display = "block"
	itemOneP.innerHTML = puntosRandomTwoOne
	itemTwoP.innerHTML = puntosRandomTwo[puntosRandomTwo.length - 1]
	itemThreeP.innerHTML = puntosRandomTwoThree
	//aparecer reaparecer signo
	imagenSigno1.style.display = "none"
	imagenSigno2.style.display = "none"
	imagenSigno3.style.display = "none"
	almacenarScore(puntosRandomOne, puntosRandomTwo, puntosRandomThree) // almacenaje
	
	setTimeout(function renovar(){
		itemOneP.innerHTML = "  "
		itemTwoP.innerHTML = "  "
		itemThreeP.innerHTML = "  "
	},3000)
	if (puntosRandomTwo[puntosRandomTwo.length - 1] > puntosRandomTwoOne && puntosRandomTwo[puntosRandomTwo.length - 1] >  puntosRandomTwoThree){
		setTimeout (function ChangeColor(){
			itemOne.style.background =`${rojo}`
			itemTwo.style.background =  `${verde}`
			itemThree.style.background = `${rojo}`
		},1)
		setTimeout(() => {
			itemOneP.style.display = "none"
			itemThreeP.style.display = "none"
			itemTwoP.style.display = "none"
		}, 900);
		setTimeout (function ChangeColorToZero(){
			itemOne.style.background ="#bbb0"
			itemTwo.style.background =  "#bbb0"
			itemThree.style.background = "#bbb0"
			imagenSigno1.style.display = "block"
			imagenSigno2.style.display = "block"
			imagenSigno3.style.display = "block"
		},1000)

	} else if ((puntosRandomTwo[puntosRandomTwo.length - 1] >= puntosRandomTwoOne && puntosRandomTwo[puntosRandomTwo.length - 1] <= puntosRandomTwoThree) ||
		(puntosRandomTwo[puntosRandomTwo.length - 1] <= puntosRandomTwoOne && puntosRandomTwo[puntosRandomTwo.length - 1] >= puntosRandomTwoThree)) {
		setTimeout (function ChangeColor(){
			itemOne.style.background  =`${amarillo}`
			itemTwo.style.background = `${amarillo}`
			itemThree.style.background = `${amarillo}`
		},1)
		setTimeout(() => {
			itemOneP.style.display = "none"
			itemThreeP.style.display = "none"
			itemTwoP.style.display = "none"
		}, 900);
		setTimeout (function ChangeColorToZero(){
			itemOne.style.background ="#bbb0"
			itemTwo.style.background =  "#bbb0"
			itemThree.style.background = "#bbb0"
			imagenSigno1.style.display = "block"
			imagenSigno2.style.display = "block"
			imagenSigno3.style.display = "block"
		},1000)
	} else if (puntosRandomTwo[puntosRandomTwo.length - 1] < puntosRandomTwoThree && puntosRandomTwo[puntosRandomTwo.length - 1] < puntosRandomTwoOne){
		setTimeout (function ChangeColor(){
			itemOne.style.background = `${verde}`
			itemTwo.style.background  = `${rojo}`
			itemThree.style.background= `${verde}`
		},1)
		setTimeout(() => {
			itemOneP.style.display = "none"
			itemThreeP.style.display = "none"
			itemTwoP.style.display = "none"
		}, 900);
		setTimeout (function ChangeColorToZero(){
			itemOne.style.background ="#bbb0"
			itemTwo.style.background =  "#bbb0"
			itemThree.style.background = "#bbb0"
			imagenSigno1.style.display = "block"
			imagenSigno2.style.display = "block"
			imagenSigno3.style.display = "block"
			
		},1000)
	}
	
	
	
	
})

itemThree.addEventListener("click",()=>{

	puntosRandomThree.push(puntosRandom());
	let	puntosRandomThreeOne = puntosRandom()
	let	puntosRandomThreeTwo = puntosRandom()
	itemOneP.style.display = "block"
	itemThreeP.style.display = "block"
	itemTwoP.style.display = "block"
	itemOneP.innerHTML =  puntosRandomThreeOne
	itemTwoP.innerHTML= puntosRandomThreeTwo
	itemThreeP.innerHTML = puntosRandomThree[puntosRandomThree.length - 1]
	//aparecer reaparecer signo
	imagenSigno1.style.display = "none"
	imagenSigno2.style.display = "none"
	imagenSigno3.style.display = "none"
	almacenarScore(puntosRandomOne, puntosRandomTwo, puntosRandomThree)
	setTimeout(function renovar(){
		itemOneP.innerHTML = "  "
		itemTwoP.innerHTML = "  "
		itemThreeP.innerHTML = "  "
	},900)
	if (puntosRandomThree[puntosRandomThree.length - 1] > puntosRandomThreeOne && puntosRandomThree[puntosRandomThree.length - 1] >  puntosRandomThreeTwo){
		setTimeout (function ChangeColor(){
			itemOne.style.background =`${rojo}`
			itemTwo.style.background =  `${rojo}`
			itemThree.style.background = `${verde}`
		},1)
		setTimeout(() => {
			itemOneP.style.display = "none"
			itemThreeP.style.display = "none"
			itemTwoP.style.display = "none"
		}, 900);
		setTimeout (function ChangeColorToZero(){
			itemOne.style.background ="#bbb0"
			itemTwo.style.background =  "#bbb0"
			itemThree.style.background = "#bbb0"
			imagenSigno1.style.display = "block"
			imagenSigno2.style.display = "block"
			imagenSigno3.style.display = "block"
		},1000)

	} else if ((puntosRandomThree[puntosRandomThree.length - 1] >= puntosRandomThreeOne && puntosRandomThree[puntosRandomThree.length - 1] <= puntosRandomThreeTwo) ||
		(puntosRandomThree[puntosRandomThree.length - 1] <= puntosRandomThreeOne && puntosRandomThree[puntosRandomThree.length - 1] >= puntosRandomThreeTwo)) {
		setTimeout (function ChangeColor(){
			itemOne.style.background  =`${amarillo}`
			itemTwo.style.background  = `${amarillo}`
			itemThree.style.background = `${amarillo}`
		},1)
		setTimeout(() => {
			itemOneP.style.display = "none"
			itemThreeP.style.display = "none"
			itemTwoP.style.display = "none"
		}, 900);
		setTimeout (function ChangeColorToZero(){
			itemOne.style.background ="#bbb0"
			itemTwo.style.background =  "#bbb0"
			itemThree.style.background = "#bbb0"
			imagenSigno1.style.display = "block"
			imagenSigno2.style.display = "block"
			imagenSigno3.style.display = "block"
		},1000)
	} else if (puntosRandomThree[puntosRandomThree.length - 1] < puntosRandomThreeOne && puntosRandomThree[puntosRandomThree.length - 1] < puntosRandomThreeTwo){
		setTimeout (function ChangeColor(){
			itemOne.style.background = `${verde}`
			itemTwo.style.background  = `${verde}`
			itemThree.style.background= `${rojo}`
		},1)
		setTimeout(() => {
			itemOneP.style.display = "none"
			itemThreeP.style.display = "none"
			itemTwoP.style.display = "none"
		}, 900);
		setTimeout (function ChangeColorToZero(){
			itemOne.style.background ="#bbb0"
			itemTwo.style.background =  "#bbb0"
			itemThree.style.background = "#bbb0"
			imagenSigno1.style.display = "block"
			imagenSigno2.style.display = "block"
			imagenSigno3.style.display = "block"
		},1000)
	}
	
})





//almacenar score
function almacenarScore(score,score2,score3) {
	var almacen=0
	var almacen1 = 0
	var almacen2 = 0
	score.forEach(element => {
			almacen += element	 
	})
	score2.forEach(element => {
		almacen1 += element
	})
	score3.forEach(element => {
		almacen2 += element
	})
	var almacenFinal = almacen + almacen1 + almacen2;
	
	return player.innerHTML ="score: " +almacenFinal
}

	



//clase jugador
class Jugador {
	constructor(puntosC1,puntosC2,puntosC3){
		this.puntosC1 = puntosC1;
		this.puntosC2 = puntosC2;
		this.puntosC3 = puntosC3;

	}
	puntosJugador() {
		return this.puntosC1 + this.puntosC2 + this.puntosC3;
	}
	jugadorInfo() {
		
	}
}
let jugador = new Jugador(3,3,3)


	

//clase cartas
class Cartas {
	constructor (puntos){
		this.puntos = puntos;
		
	}
	items(){
		this.puntos = puntosRandom()
	}
	cartasInfo() {
		return `tus puntos son: ${this.puntos}`



	}


}
let carta1 = new Cartas (puntosRandom())
let carta2 = new Cartas (puntosRandom())
let carta3 = new Cartas (puntosRandom())







//funciones
function puntosRandom(){
 let puntos = Math.floor(Math.random() * (100 - 1))+1;

return puntos

}









/*notas
no se puede usar como funcion una funcion que está
siendo utilizada para usar otra funcion*/
/**/
/*problemas*/
/*el hover luego de haberse iniciado, cuando se juega
se pierde, una sugerencia es arreglarlo con un mouseenter,
pero es demasiado código por algo medianamente insignificante*/