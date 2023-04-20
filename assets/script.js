const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		image: "slide2.jpg",
		tagLine:
			"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
];

/* Déclaration des variable globales */

("use strict");

const rightArrow = document.querySelector(".arrow_right");
const leftArrow = document.querySelector(".arrow_left");
const banner = document.querySelector("#banner");
const dots = document.querySelector('.dots');

let slidePosition = 0;


/* Création de l'élement et mise en place de l'image */

const img = document.createElement("img");
banner.insertAdjacentElement("afterbegin", img);

/* Création de l'élement et mise en place du texte */

const para = document.createElement("p");
banner.insertAdjacentElement("afterbegin", para);

/*fonction pour le défillement des images*/

const imgAppears = (slidePosition) => {
	img.src = "./assets/images/slideshow/" + slides[slidePosition].image;
	para.innerHTML = slides[slidePosition].tagLine;
	img.classList.add("banner-img");
};

imgAppears(slidePosition);



/* intégration des "dots" */

const dotsAppears = () => {
	const dot = document.createElement("div");
	dot.classList.add('dot');
	dots.insertAdjacentElement('afterbegin', dot);
};

for (let i = 0; i < slides.length; i++) {
	dotsAppears();
};





/* mise en place du systéme de mouvement des "dots"*/


const dotsBis = document.querySelectorAll('.dot')
dotsBis[0].classList.add('dot_selected')


const dotsPosition = (slidePosition) => {
	for (let i = 0; i < slides.length; i++) {
		if (i === slidePosition) {
			dotsBis[i].classList.add('dot_selected');
		} else {
			dotsBis[i].classList.remove('dot_selected');
		}
	}
};


/*Event click Droit*/

rightArrow.addEventListener("click", () => {
	if (slidePosition > slides.length - 2) {
		slidePosition = 0;
	} else {
		slidePosition++;
	}
	imgAppears(slidePosition);
	dotsPosition(slidePosition);

});

/*Event click Gauche*/

leftArrow.addEventListener("click", () => {
	slidePosition--;
	if (slidePosition < 0) {
		slidePosition = slides.length - 1;
	}

	imgAppears(slidePosition);
	dotsPosition(slidePosition);

});

