let prev = document.getElementById('prev');
let next = document.getElementById('next');
let image = document.querySelector('.images');
let items = document.querySelectorAll('.images .item');

let contents = document.querySelectorAll('.content .item');

let rotate = 0;
let active = 0;

let countItem = items.length;
let rotateAdd = 360 / countItem;

function nextSlider(){
    active = active + 1 > countItem - 1 ? 0 : active + 1;
    rotate = rotate + rotateAdd;
    show();
}

function prevSlider(){
    active = active - 1 > countItem - 1 ? 0 : active - 1;
    rotate = rotate - rotateAdd;
    show();
}
function show(){
    image.style.setProperty("--rotate", rotate + 'deg');
    image.style.setProperty("--rotate", rotate + 'deg');

    contents.forEach((contents, key ) => {
        if(key == active){
            contents.classList.add('active');
        }else{
            contents.classList.remove('active');
        }
    });
}

next.onclick = nextSlider;
prev.onclick = prevSlider;

// const autoNext = setInterval(nextSlider, 3000);