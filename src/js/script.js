//Slide

let slideList = document.querySelector(".Slide--list");

let slideItem = document.querySelectorAll(".Slide__card");

let counter = 1;

let sizeItem = slideItem[0].clientWidth;
console.log(sizeItem)

let interval = 3500;

window.addEventListener('resize', () => {
  let sizeItem = slideItem[0].clientWidth;
})

setInterval(() => {
  slide()
}, interval)


const slide = () => { 

slideList.style.transform = "translate("+(-sizeItem*counter)+"px)";
slideList.style.transition = "all .8s"

  counter ++; 

  if(counter == slideItem.length){
    setTimeout(() => {
      slideList.style.transform = "translate(0px)"
      slideList.style.transition = "all .5s"
      counter = 1
    }, interval)
  }
}

// Fetch to load data

const moviesDataUrl = './data/moviesData.json'

fetch(moviesDataUrl)
.then(response => response.json())
.then(response => {
  console.log(response)
})