/***************************
    Discography Script
*****************************/
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

const slides=document.querySelectorAll(".slide");
const captions=document.querySelectorAll(".caption");

function updateCaptions(){
    slides.forEach((slide,index) =>{
        if (slide.matches('[data-active]')){
            captions.forEach((caption, captionIndex) => {
                if (index===captionIndex){
                    caption.style.display="block";
                } else{
                    caption.style.display="none";
                }
            });
        }
    });
}

updateCaptions();

const carousel=document.querySelector(".carousel");
carousel.addEventListener("slideChanged", updateCaptions);