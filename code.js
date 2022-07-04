const scaleImg = document.querySelector('.scaleImage')
const cardOne = document.querySelector('.cardOne')
const cardTwo = document.querySelector('.cardTwo')

function scroll() {
    const scrolled = window.scrollY + window.innerHeight
    // Scale Image
    const scaleImgTrue = (scaleImg.offsetTop + scaleImg.offsetHeight / 3) < scrolled
    const scaleImgFinish = (scaleImg.offsetTop + scaleImg.offsetHeight) > window.scrollY

    // Cards One and Two
    const Card1 = (cardOne.offsetTop + cardOne.offsetHeight / 3.5) < scrolled
    const Card1Finish = (cardOne.offsetTop + cardOne.offsetHeight) > window.scrollY

    console.log(Card1, Card1Finish)

    if (scaleImgTrue && scaleImgFinish) {
        scaleImg.classList.add('active')
    } else {
        scaleImg.classList.remove('active')
    }

    if (Card1 && Card1Finish) {
        cardOne.classList.add('activeRight')
        cardTwo.classList.add('activeLeft')
    } else {
        cardOne.classList.remove('activeRight')
        cardTwo.classList.remove('activeLeft')
    }

}


window.addEventListener('scroll', scroll)