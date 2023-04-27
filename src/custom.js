function updateList(){
    const titles = [...document.querySelectorAll('.section')].sort((a, b) => {
        return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
    })
    document.querySelectorAll('.selected').forEach(c => c.classList.remove('selected'));
    
    document.querySelectorAll('.nav-link')[[...document.querySelectorAll('.section')].indexOf(titles[0])].classList.add('selected');
    document.querySelectorAll('.nav-item')[[...document.querySelectorAll('.section')].indexOf(titles[0])].classList.add('selected');
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})


const menu = document.getElementById('menu')
const barsButton = document.getElementById('bars-button')
const timesButton = document.getElementById('times-button')

barsButton.addEventListener('click', () => {
    menu.classList.toggle('translate-x-full')
    barsButton.classList.toggle('hidden')
    timesButton.classList.toggle('hidden')

})
timesButton.addEventListener('click', () => {
    menu.classList.toggle('translate-x-full')
    barsButton.classList.toggle('hidden')
    timesButton.classList.toggle('hidden')

})

const navLinks = document.querySelectorAll('.nav-item')
navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        menu.classList.add('translate-x-full')
        barsButton.classList.remove('hidden')
        timesButton.classList.add('hidden')
    })
})
