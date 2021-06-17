'use strict'

const menuButton = document.querySelector(".nav__link-menu")
const menu = document.querySelector(".nav__links")

menuButton.addEventListener('click', function (event) {
    event.preventDefault()
    if (menu.classList.contains("nav__links--active")) menu.classList.remove("nav__links--active")
    else menu.classList.add("nav__links--active")
})


const slideList = [
    {
        img: "../img/32.jpg",
        description: `“Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        nostrum
        commodi repellendus neque! Ad nisi
        voluptas atque culpa fuga voluptate molestias rerum. Aliquam nisi ab ipsa similique exercitationem.
        Repudiandae, expedita.”`,
        author: 'Nadia Adamczak',
    },
    {
        img: "../img/51.jpg",
        description: `“Nunc in velit nunc. Ut nec aliquet diam, ac feugiat nibh. Donec at risus vitae orci faucibus varius vel in eros. In scelerisque condimentum posuere. Morbi eget orci quis dolor malesuada egestas. Morbi pharetra pellentesque turpis, quis tempus orci scelerisque et. Proin vitae aliquet orci. Duis sagittis enim in lacus fringilla, nec lacinia tortor ultrices.”`,
        author: 'Cyprian Kordes',
    },
    {
        img: "../img/55.jpg",
        description: `“Curabitur vitae nisi lacus. Fusce convallis nisl nec suscipit bibendum. Fusce volutpat, turpis tempus cursus iaculis, ante purus semper mi, eget bibendum neque nisl nec orci. Donec pulvinar maximus lorem non blandit. Aliquam euismod auctor sollicitudin. Nam egestas elit augue, vitae convallis ipsum maximus nec. Morbi consectetur condimentum dapibus.”`,
        author: 'Józefina Badura',
    },
    {
        img: "../img/2.jpg",
        description: `“Sed lacinia, erat in pellentesque imperdiet, orci nisi eleifend sapien, sit amet aliquet mauris neque quis augue. Phasellus posuere rhoncus pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec accumsan tellus eu ante convallis, non venenatis odio volutpat. Donec ultrices consequat nulla cursus vulputate.”`,
        author: 'Ignacy Pasiński',
    },
    {
        img: "../img/74.jpg",
        description: `“Duis ut accumsan leo. Nulla id auctor neque. Aliquam erat diam, gravida eget scelerisque eget, hendrerit eu erat. Donec turpis dolor, egestas nec eros vel, accumsan fermentum dui. Aliquam ornare mi eu lectus maximus, non faucibus augue malesuada. Phasellus at turpis diam. Nullam at interdum enim, ac euismod libero.”`,
        author: 'Ewa Nawrocka',
    },
]

const description = document.querySelector('.testimonial__description')
const image = document.querySelector('.testimonial__avatar')
const author = document.querySelector('.testimonial__name')
const leftArrow = document.querySelector('.testimonial-arrow--left')
const rightArrow = document.querySelector('.testimonial-arrow--right')

const time = 5000;
let active = 0;

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    description.textContent = slideList[active].description;
    author.textContent = slideList[active].author;
}

const myTimer = setInterval(changeSlide, time)

leftArrow.addEventListener("click", changeSlide)
rightArrow.addEventListener("click", changeSlide)

document.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") {
        changeSlide()
    }
}
)

document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") {
        changeSlide()
    }
}
)