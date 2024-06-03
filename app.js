const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "POHA",
    price: 119,
    colors: [
      {
        code: "POHA",
        img: "img/millet/1.png",
      },
    ],
  },
  {
    id: 2,
    title: "NOODLES",
    price: 149,
    colors: [
    ],
  },
  {
    id: 3,
    title: "NAMKEEN",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "img/millet/3.png",
      },
    ],
  },
  {
    id: 4,
    title: "PASTA",
    price: 129,
    colors: [
      {
        code: "black",
        img: "img/millet/4.png",
      },
    ],
  },
  {
    id: 5,
    title: "MILLETS",
    price: 129,
    colors: [
      {
        code: "black",
        img: "img/millet/5.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
  });
});
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});


ScrollReveal
({
      
        distance:'80px',
        duration: 2000,   
        delay: 200,
});
ScrollReveal().reveal('.limitedoffer',{origin:'top'});
ScrollReveal().reveal('.feature', { origin: 'right' });
ScrollReveal().reveal('.product', { origin: 'left' });
ScrollReveal().reveal('.gallery', { origin: 'right' });
ScrollReveal().reveal('.newSeason', { origin: 'left' });
ScrollReveal().reveal('.footers', { origin: 'bottom' });
ScrollReveal().reveal('.contrscroll', { origin: 'right' });





