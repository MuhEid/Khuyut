const slideOneContainer = document.querySelector('.image-container');
const imageContainer = document.querySelectorAll('.image-container img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
let size = imageContainer[0].clientWidth; 

slideOneContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click',()=>{
    if (counter >= imageContainer.length -1) return;
    slideOneContainer.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slideOneContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter);


});

prevBtn.addEventListener('click',()=>{
    if (counter <= 0) return;
    slideOneContainer.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slideOneContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(counter);

    

});

slideOneContainer.addEventListener('transitionend', ()=>{
    if (imageContainer[counter].id === 'lastImage'){
        slideOneContainer.style.transition = "none";
        counter = imageContainer.length - 2;
        slideOneContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
});

slideOneContainer.addEventListener('transitionend', ()=>{
    if (imageContainer[counter].id === 'firstImage'){
        slideOneContainer.style.transition = "none";
        counter = imageContainer.length - counter;
        slideOneContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
});

// Second collection slider

const slideTwoContainer = document.querySelector('.image2-container');
const imageTwoContainer = document.querySelectorAll('.image2-container img');

const prevBtnSndSlider = document.querySelector('#prevBtnSndSlider');
const nextBtnSndSlider = document.querySelector('#nextBtnSndSlider');

let counterTwo = 1;
size = imageTwoContainer[0].clientWidth; 

slideTwoContainer.style.transform = 'translateX(' + (-size * counterTwo) + 'px)';

nextBtnSndSlider.addEventListener('click',()=>{
    if (counterTwo >= imageContainer.length -1) return;
    slideTwoContainer.style.transition = "transform 0.4s ease-in-out";
    counterTwo++;
    slideTwoContainer.style.transform = 'translateX(' + (-size * counterTwo) + 'px)';
    console.log(counterTwo);


});

prevBtnSndSlider.addEventListener('click',()=>{
    if (counterTwo <= 0) return;
    slideTwoContainer.style.transition = "transform 0.4s ease-in-out";
    counterTwo--;
    slideTwoContainer.style.transform = 'translateX(' + (-size * counterTwo) + 'px)';
    console.log(counterTwo);

    

});

slideTwoContainer.addEventListener('transitionend', ()=>{
    if (imageContainer[counterTwo].id === 'lastImageSndSlider'){
        slideTwoContainer.style.transition = "none";
        counterTwo = imageTwoContainer.length - 2;
        slideTwoContainer.style.transform = 'translateX(' + (-size * counterTwo) + 'px)';

    }
});

slideTwoContainer.addEventListener('transitionend', ()=>{
    if (imageTwoContainer[counterTwo].id === 'firstImageSndSlider'){
        slideTwoContainer.style.transition = "none";
        counterTwo = imageTwoContainer.length - counterTwo;
        slideTwoContainer.style.transform = 'translateX(' + (-size * counterTwo) + 'px)';

    }
});