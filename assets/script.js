const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]





/* Déclaration des variable globales */

const rightArrow = document.querySelector('.arrow_right')
const leftArrow = document.querySelector('.arrow_left')
const banner = document.querySelector('#banner')
const dots = document.querySelectorAll('.dot');
dots[0].classList.add('dot_selected');
let slidePosition = 0

/* Création de l'élement et mise en place de l'image */

const img = document.createElement('img')
banner.insertAdjacentElement('afterbegin', img)

/* Création de l'élement et mise en place du texte */

const para = document.createElement('p')
banner.insertAdjacentElement('afterbegin', para)


/*Appel de la fonction pour l'affichage lors du 1er démarrage*/

imgAppears()


/*fonction pour le défillement des images*/


function imgAppears() {
	img.innerHTML = img.src = "./assets/images/slideshow/" + slides[slidePosition].image
	para.innerHTML = slides[slidePosition].tagLine
	img.classList.add('banner-img')
}


/*fonction pour le positionnement des points*/


function dotsPosition() {

	for (let i = 0; i < dots.length; i++) {
		if (i === slidePosition) {
			dots[i].classList.add('dot_selected');
		} else {
			dots[i].classList.remove('dot_selected');
		}
	}

}


/*Event click Droit*/


rightArrow.addEventListener('click', () => {

	if (slidePosition === 3) {
		slidePosition = 0
	} else {
		slidePosition++
	}

	imgAppears()
	dotsPosition()
})


/*Event click Gauche*/


leftArrow.addEventListener('click', () => {

	slidePosition--
	if (slidePosition === -1) {
		slidePosition = 3
	}

	imgAppears()
	dotsPosition()

})







