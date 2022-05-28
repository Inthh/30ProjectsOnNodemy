var imgFeatures = document.querySelector('.img-feature');
var listImage = document.querySelectorAll('.list-image img');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

var currentIndex = 0;
function updateImageByIndex(index) {
    document.querySelectorAll('.list-image div').forEach(function(element) {
        element.classList.remove('active');
    })
    currentIndex = index;
    imgFeatures.src = listImage[index].src;
    listImage[index].parentElement.classList.add('active');
}

listImage.forEach(function(element, index) {
    element.addEventListener('click', function() {
        imgFeatures.style.opacity = '0';
        setTimeout(function() {
            updateImageByIndex(index);
            imgFeatures.style.opacity = '1';
        }, 400);
        
    });
})

prevBtn.addEventListener('click', function() {
    if (currentIndex == 0) {
        currentIndex = listImage.length - 1;
    } else {
        currentIndex =currentIndex - 1;
    }
    imgFeatures.style.animation = '';
    setTimeout(function() {
        updateImageByIndex(currentIndex);
        imgFeatures.style.animation = 'slideLeft 1s ease-in-out forwards';
    })
})

nextBtn.addEventListener('click', function() {
    if (currentIndex == listImage.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex = currentIndex + 1;
    }
    imgFeatures.style.animation = '';
    setTimeout(function() {
        updateImageByIndex(currentIndex);
        imgFeatures.style.animation = 'slideRight 1s ease-in-out forwards';
    })
})
