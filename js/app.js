const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const playPause = document.querySelector('.play-pause');

let x = 0;
let bool= false;
let interval;

const rotate = () => {
    const cubes = document.querySelectorAll('.cube');
    Array.from(cubes).forEach((cube) => {
        cube.style.transform = `rotateY(${x}deg)`
    });
}

const changePlayPause = () => {
    const i = playPause.children[0];
    const cls = i.classList[1];
    if(cls === 'fa-play'){
        i.classList.remove('fa-play');
        i.classList.add('fa-pause');
    } else {
        i.classList.remove('fa-pause');
        i.classList.add('fa-play');
    }
}

const playAndPause = () => {
    if(!bool){
        interval = setInterval(() => {
            x -= 90;
            rotate();
        }, 3000);
        changePlayPause();
        bool = true;
    } else {
        clearInterval(interval);
        changePlayPause();
        bool = false;
    }
}

leftArrow.addEventListener('click', () => {
    x += 90; // Esta linea es igual a x = x + 90;
    rotate();
    if(bool){
        playAndPause();
    }
});

leftArrow.addEventListener('mouseover', () => {
    x += 30;
    rotate();
});

leftArrow.addEventListener('mouseout', () => {
    x -= 30;
    rotate();
});

rightArrow.addEventListener('click', () => {
    x -= 90; // Esta linea es igual a x = x - 90;
    rotate();
    if(bool){
        playAndPause();
    }
});

rightArrow.addEventListener('mouseover', () => {
    x -= 30;
    rotate();
});

rightArrow.addEventListener('mouseout', () => {
    x += 30;
    rotate();
});

playPause.addEventListener('click', () => {
    playAndPause();
    // changePlayPause(); 
});