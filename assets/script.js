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

// variable counter
var counter = 0;

//elements
const right = document.querySelector(".arrow_right")
const left = document.querySelector(".arrow_left")

//fonctions slide

right.addEventListener('click', slideUp)
left.addEventListener('click', slideDown)

//creation dots

function dotCreate(index) {
    const newDot = document.createElement('i') //creation bulle
    newDot.classList.add('dot') //ajout de la classe
    newDot.setAttribute("data-positionArray", index) //ajout attribut data-positionArray

    newDot.addEventListener('click', e => {
        counter = parseInt(e.target.getAttribute("data-positionArray") ) //recuparation attribut depuis l'evenement
        displayCurrentBanner(counter)
        
    })

    if (index === 0) {
        newDot.classList.add("dot_selected");
    }

    return newDot

}

for (let index = 0; index < slides.length; index++) {
    const newDot = dotCreate(index)
    const dots = document.querySelector('.dots')
    dots.appendChild(newDot)//ajout du retour de newdot
}



// Fonction Slide

function slideUp() {
    if (counter < slides.length - 1) {
        counter++
    }
    else {
        counter = 0
    }
    displayCurrentBanner(counter)

}

function slideDown() {
    if (counter != 0) {
        counter--
    }
    else {
        counter = slides.length - 1
    }
    displayCurrentBanner(counter)

}

function displayCurrentBanner(counter) {
    changeSrcTitle(slides[counter])
    dotActiv(counter)
}

//changement titre/image

function changeSrcTitle(bannerObject) {
    const title = document.querySelector('.banner-title')
    const bannerImage = document.querySelector('.banner-img')

    bannerImage.src = `./assets/images/slideshow/${bannerObject.image}`
    title.innerHTML = bannerObject.tagLine
}

//Activation dot

function dotActiv(counter) {
    const dotItem = document.querySelectorAll('.dot')

    dotItem.forEach((item, index) => {
        if (index === counter) {
            item.classList.add('dot_selected')
        }
        else {
            item.classList.remove('dot_selected')
        }
    })
}



