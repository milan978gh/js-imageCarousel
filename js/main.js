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
  showItem(currentItem);
});

prevBtn.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = gallery.length - 1;
  }
  showItem(currentItem);
});
nextBtn.addEventListener('click', () => {
  currentItem++;
  if (currentItem > gallery.length - 1) {
    currentItem = 0;
  }
  showItem(currentItem);
});

function showItem(item) {
  const image = gallery[item];
  slideImg.src = image.img;
  slideInfo.textContent = image.name;
}