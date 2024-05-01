
const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-left')
        }else{
            entry.target.classList.remove('show-left')
        }
    })
})

const observerRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-right')
        }else{
            entry.target.classList.remove('show-right')
        }
    })
})

const hiddenElementLeft = document.querySelectorAll('.hidden-left');
const hiddenElementRight = document.querySelectorAll('.hidden-right');
hiddenElementLeft.forEach((el) => observerLeft.observe(el))
hiddenElementRight.forEach((el) => observerRight.observe(el))