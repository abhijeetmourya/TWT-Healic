const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')



document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

// gsap.from('.navlogo, .navtoggle', {opacity: 0, duration: 1, delay:2, y: 10})
// gsap.from('.navitem', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2,})
// gsap.from('.home .title', {opacity: 0, duration: 1, delay:1.6, y: 30})
// gsap.from('.home .slogan', {opacity: 0, duration: 1, delay:1.8, y: 30})
// gsap.from('.home .redirector', {opacity: 0, duration: 1, delay:2.1, y: 30})
// gsap.from('.home .logoParts', {opacity: 0, duration: 1, delay:1.3, y: 30})