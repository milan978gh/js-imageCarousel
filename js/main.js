const gallery = [
  {
    id: 1,
    name: '1',
    img: '../img/img1.jpg'
  },
  {
    id: 2,
    name: '2',
    img: '../img/img2.jpg'
  },
  {
    id: 3,
    name: '3',
    img: '../img/img3.jpg'
  },
  {
    id: 4,
    name: '4',
    img: '../img/img4.jpg'
  },
  {
    id: 5,
    name: '5',
    img: '../img/img5.jpg'
  }
];

const slideImg = document.getElementById('slide-img');
const slideInfo = document.getElementById('slide-info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
  loadItem(currentItem);
});

prevBtn.addEventListener('click', () => {

});
nextBtn.addEventListener('click', () => {

});

function loadItem(){
  
}