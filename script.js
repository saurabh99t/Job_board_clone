window.addEventListener('scroll',() => {
    document.querySelector('.back').classList.toggle('window-scroll',window.scrollY > 800)
})