const images = document.querySelectorAll('.image img');
const prev = document.querySelector('.control.prev');
const next = document.querySelector('.control.next');
const close = document.querySelector('.close');
const galleryImg = document.querySelector('.gallery__inner img');
const gallery = document.querySelector('.gallery');

var currentIndex = 0;

function showGallery() {
    if (currentIndex==0) {
        prev.classList.add('hide')
    }
    else {
        prev.classList.remove('hide');
    }

    if (currentIndex == images.length - 1) {
        next.classList.add('hide');
    } else {
        next.classList.remove('hide');
    }
    galleryImg.src = images[currentIndex].src;
    gallery.classList.add('show');
}

images.forEach((item, index) => {
    item.addEventListener('click', function() {
        currentIndex = index;
        showGallery();
    })
})

close.addEventListener('click', function() {
    gallery.classList.remove('show');
})

document.addEventListener('keydown', function(e) {
    if(e.keyCode == 27) {
        gallery.classList.remove('show');
    }
})

gallery.addEventListener('click', function(e) {
    if(e.target == e.currentTarget) {
        gallery.classList.remove('show');
    }
})

prev.addEventListener('click', function(e) {
    if (currentIndex > 0) {
        currentIndex--;
        showGallery();
    }
})

next.addEventListener('click', function(e) {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showGallery();
    }
})