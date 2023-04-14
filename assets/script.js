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



let slidePosition = 0

/* Déclaration des variable globales */

const rightArrow = document.querySelector('.arrow_right')
const leftArrow = document.querySelector('.arrow_left')
const banner = document.querySelector('#banner')

/* Création de l'élement et mise en place de l'image */

const img = document.createElement('img')
banner.insertAdjacentElement('afterbegin', img)
img.innerHTML = img.src = "./assets/images/slideshow/" + slides[slidePosition].image

img.classList.add('banner-img')

/* Création de l'élement et mise en place du texte */

const para = document.createElement('p')
para.innerHTML = slides[slidePosition].tagLine
banner.insertAdjacentElement('afterbegin', para)


/*Event click Droit*/


rightArrow.addEventListener('click', () => {

	if (slidePosition === 3) {
		slidePosition = 0
	} else {
		slidePosition++
	}

	img.innerHTML = img.src = "./assets/images/slideshow/" + slides[slidePosition].image
	para.innerHTML = slides[slidePosition].tagLine

	dotsPosition()
})


/*Event click Gauche*/


leftArrow.addEventListener('click', () => {

	slidePosition--
	if (slidePosition === -1) {
		slidePosition = 3
	}

	img.innerHTML = img.src = "./assets/images/slideshow/" + slides[slidePosition].image
	para.innerHTML = slides[slidePosition].tagLine

	dotsPosition()

})


/*Création de la boucle pour les bullet points*/


const dots = document.querySelectorAll('.dot');
dots[0].classList.add('dot_selected');

function dotsPosition() {

	for (let i = 0; i < dots.length; i++) {
		if (i === slidePosition) {
			dots[i].classList.add('dot_selected');
		} else {
			dots[i].classList.remove('dot_selected');
		}
	}

}





