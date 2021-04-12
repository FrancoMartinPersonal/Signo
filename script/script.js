//Propiedades de las cartas
itemOne = document.querySelector(".Item-1")
itemTwo = document.querySelector(".Item-2")
itemThree = document.querySelector(".Item-3")
AllItems = document.querySelector(".item-flex")
player = document.querySelector(".jugador")
modal = document.querySelector(".modal-inicio")
botonPlay = document.querySelector (".modal-datos__button")

let puntosTotales =[]
let puntosRandomOne;
let puntosRandomTwo;
let puntosRandomThree;

    botonPlay.addEventListener ("click", ()=>{
    modal.style.display = "none";
    })
	itemOne.addEventListener("click",()=>{
		
	 puntosRandomOne = puntosRandom()
let	 puntosRandomOneTwo = puntosRandom()
let	 puntosRandomOneThree = puntosRandom()
	itemOne.innerHTML = `tus puntos son ${puntosRandomOne}`;
	setTimeout(function renovar(){
		itemOne.innerHTML = "  "
		itemTwo.innerHTML = "  "
		itemThree.innerHTML = "  "
	},3000)
	itemTwo.innerHTML = `podrían haber sido ${puntosRandomOneTwo}`
	itemThree.innerHTML = `podrían haber sido ${puntosRandomOneThree}`
	if(puntosRandomOne > puntosRandomOneTwo  && puntosRandomOne >  puntosRandomOneThree){
		setTimeout (function ChangeColor(){
			itemOne.style.background =" green"
			itemTwo.style.background =  "red"
			itemThree.style.background = "red"
		},1)
		setTimeout (function ChangeColorToZero(){
			itemOne.style.background =" #bbb"
			itemTwo.style.background =  "#bbb"
			itemThree.style.background = "#bbb"
		},3000)

	}else if ((puntosRandomOne >= puntosRandomOneTwo && puntosRandomOne <= puntosRandomOneThree) || 
		(puntosRandomOne <= puntosRandomOneTwo && puntosRandomOne >= puntosRandomOneThree)) {
		setTimeout (function ChangeColor(){
			itemOne.style.background  ="orange"
			itemTwo.style.background  = "orange"
			itemThree.style.background = "orange"
		},1)
		setTimeout (function ChangeColorToZero(){
			itemOne.style.background =" #bbb"
			itemTwo.style.background =  "#bbb"
			itemThree.style.background = "#bbb"
		},3000)
	} else if (puntosRandomOne < puntosRandomOneThree && puntosRandomOne < puntosRandomOneTwo){
		setTimeout (function ChangeColor(){
			itemOne.style.background = "red"
			itemTwo.style.background  = "green"
			itemThree.style.background= "green"
		},1)
		setTimeout (function ChangeColorToZero(){
			itemOne.style.background =" #bbb"
			itemTwo.style.background =  "#bbb"
			itemThree.style.background = "#bbb"
		},3000)
	}
})
itemTwo.addEventListener("click",()=>{
		
	 puntosRandomTwo = puntosRandom()
let	 puntosRandomTwoOne = puntosRandom()
let	 puntosRandomTwoThree = puntosRandom()
	itemTwo.innerHTML = `tus puntos son ${puntosRandomTwo}`;
	itemOne.innerHTML = `podrían haber sido ${puntosRandomTwoOne}`
	itemThree.innerHTML = `podrían haber sido ${puntosRandomTwoThree}`
	setTimeout(function renovar(){
		itemOne.innerHTML = "  "
		itemTwo.innerHTML = "  "
		itemThree.innerHTML = "  "
	},3000)
	if(puntosRandomTwo > puntosRandomTwoOne  && puntosRandomTwo >  puntosRandomTwoThree){
		setTimeout (function ChangeColor(){
			itemOne.style.background =" red"
			itemTwo.style.background =  "green"
			itemThree.style.background = "red"
		},1)
		setTimeout (function ChangeColorToZero(){
			itemOne.style.background =" #bbb"
			itemTwo.style.background =  "#bbb"
			itemThree.style.background = "#bbb"
		},3000)

	}else if ((puntosRandomTwo >= puntosRandomTwoOne && puntosRandomTwo <= puntosRandomTwoThree) || 
		(puntosRandomTwo <= puntosRandomTwoOne && puntosRandomTwo >= puntosRandomTwoThree)) {
		setTimeout (function ChangeColor(){
			itemOne.style.background  ="orange"
			itemTwo.style.background  = "orange"
			itemThree.style.background = "orange"
		},1)
		setTimeout (function ChangeColorToZero(){
			itemOne.style.background =" #bbb"
			itemTwo.style.background =  "#bbb"
			itemThree.style.background = "#bbb"
		},3000)
	} else if (puntosRandomTwo < puntosRandomTwoThree && puntosRandomTwo < puntosRandomTwoOne){
		setTimeout (function ChangeColor(){
			itemOne.style.background = "green"
			itemTwo.style.background  = "red"
			itemThree.style.background= "green"
		},1)
		setTimeout (function ChangeColorToZero(){
			itemOne.style.background =" #bbb"
			itemTwo.style.background =  "#bbb"
			itemThree.style.background = "#bbb"
		},3000)
	}
	
	
	
	
})
itemThree.addEventListener("click",()=>{

	puntosRandomThree = puntosRandom();
	puntosRandomThreeOne = puntosRandom();
	puntosRandomThreeTwo = puntosRandom();
		itemThree.innerHTML = `tus puntos son ${puntosRandomThree}`
		itemTwo.innerHTML = `podrían haber sido ${puntosRandomThreeOne}`
	itemOne.innerHTML = `podrían haber sido ${puntosRandomThreeTwo}`
	setTimeout(function renovar(){
		itemOne.innerHTML = "  "
		itemTwo.innerHTML = "  "
		itemThree.innerHTML = "  "
	},3000)
	if(puntosRandomThree > puntosRandomThreeOne  && puntosRandomThree >  puntosRandomThreeTwo){
		setTimeout (function ChangeColor(){
			itemOne.style.background =" red"
			itemTwo.style.background =  "red"
			itemThree.style.background = "green"
		},1)
		setTimeout (function ChangeColorToZero(){
			itemOne.style.background =" #bbb"
			itemTwo.style.background =  "#bbb"
			itemThree.style.background = "#bbb"
		},3000)

	}else if ((puntosRandomThree >= puntosRandomThreeOne && puntosRandomThree <= puntosRandomThreeTwo) || 
		(puntosRandomThree <= puntosRandomThreeOne && puntosRandomThree >= puntosRandomThreeTwo)) {
		setTimeout (function ChangeColor(){
			itemOne.style.background  ="orange"
			itemTwo.style.background  = "orange"
			itemThree.style.background = "orange"
		},1)
		setTimeout (function ChangeColorToZero(){
			itemOne.style.background =" #bbb"
			itemTwo.style.background =  "#bbb"
			itemThree.style.background = "#bbb"
		},3000)
	} else if (puntosRandomThree < puntosRandomThreeOne && puntosRandomThree < puntosRandomThreeTwo){
		setTimeout (function ChangeColor(){
			itemOne.style.background = "green"
			itemTwo.style.background  = "green"
			itemThree.style.background= "red"
		},1)
		setTimeout (function ChangeColorToZero(){
			itemOne.style.background =" #bbb"
			itemTwo.style.background =  "#bbb"
			itemThree.style.background = "#bbb"
		},3000)
	}
	
	
	
	
})



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

console.log(carta1.cartasInfo())
console.log(carta2.cartasInfo())
console.log(carta3.cartasInfo())





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