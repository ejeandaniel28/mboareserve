//APPARTEMENT SLIDER
let arrowBack = document.querySelector('.material-symbols-outlined.back')
let arrowForward = document.querySelector('.material-symbols-outlined.forward')
let imagesList = document.querySelectorAll('.shows img');
let imagesDiv = document.querySelector('.shows')
console.log(imagesList)

let currentImg = 0;

const scrollNext = (e) =>{
    checkCurrent();
    imagesList[currentImg +1].scrollIntoView(true);
    currentImg++;

    console.log(currentImg < imagesList.length)
    //;
}
const scrollBack = () => {
    imagesList[currentImg -1].scrollIntoView(true);
    currentImg--;
}
const checkCurrent = () =>{
    if(currentImg >= imagesList.length){
        currentImg = 0;
    }
}
arrowBack.addEventListener('click',scrollBack)
arrowForward.addEventListener('click',scrollNext)
