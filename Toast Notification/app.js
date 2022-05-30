const buttonShows = document.querySelectorAll('.control button')
buttonShows.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		createToast(e.target.getAttribute('class'))
	})
})


function createToast(status, timeout = 4000) {

    let template = `<i class='bx bxs-check-circle'></i>
                    <span class="message">This ia a Success message !</span>`

    switch (status) {
        case 'success':
            break;
        case 'warning':
            template = `<i class='bx bxs-error-circle' ></i>
                        <span class="message">This ia a Warning message !</span>`
            break;
        case 'error':
            template = `<i class='bx bxs-x-circle' ></i>
                        <span class="message">This ia a Error message !</span>`
            break;
    }

    var toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(status)
    toast.innerHTML = `${template}
                        <div class="countdown"></div>`
    
    var toastList = document.getElementById('toasts')
    toastList.appendChild(toast)

    setTimeout(() => {
        toast.style.animation = 'slideHide 1s ease forwards'
    }, timeout - 500)

    setTimeout(() => {
        toast.remove()
    }, timeout + 1000)
}

