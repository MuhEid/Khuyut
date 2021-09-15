const slideOneContainer = document.querySelector('.image-container');
const imageContainer = document.querySelectorAll('.image-container img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = imageContainer[0].clientWidth; 

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