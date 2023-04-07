pointers = gsap.utils.toArray('.pointItem')
photos = gsap.utils.toArray('.photoSlide')
pointBar = document.querySelector('.pointers')

counter = 0

function poinSwapper() {
    pointers.forEach((elem)=>{
        elem.classList.toggle('active', pointers.indexOf(elem)==counter%pointers.length)
    })
}

let changePhoto = setInterval(()=>{
    counter+=1
    gsap.to('.slider', {
        translateX: `-${counter%photos.length}00%`,
        duration: 1,
    })
    poinSwapper()
}, 3000)

pointBar.addEventListener('click', (event)=>{
    indexOfPoint = pointers.indexOf(event.target)
    if (indexOfPoint != -1){
        counter = indexOfPoint
        poinSwapper()
        gsap.to('.slider', {
            translateX: `-${counter%photos.length}00%`,
            duration: 1,
        })
        
        clearInterval(changePhoto)
        
        changePhoto = setInterval(()=>{
            counter+=1
            gsap.to('.slider', {
                translateX: `-${counter%photos.length}00%`,
                duration: 1,
            })
            poinSwapper()
        }, 3000)
        
    }
})