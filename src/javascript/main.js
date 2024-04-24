const menuCard = document.querySelector(".cards"),
  btn = document.querySelectorAll(".infoBtn"),
  infoTitle =document.querySelector('#title'),
  infoDescription =document.querySelector('#description'),
  infoImg =document.querySelector('#infoImg')

//menu -cards
const menuInfo = [
    {
      id: 0,
      title: "Seared Salmon Fillet",
      img: "./src/img/menu-img/img-1.jpg",
      description:
        "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
    },
    {
      id: 1,
      title: "Rosemary Filet Mignon",
      img: "./src/img/menu-img/img-2.jpg",
      description:
        "Our prime beef served to your taste with a delicious choice of seasonal sides.",
    },
    {
      id: 2,
      title: "Summer Fruit Chocolate Mousse",
      img: "./src/img/menu-img/img-3.jpg",
      description:
        "Creamy mousse combined with summer fruits and dark chocolate shavings.",
    },
  ],
  infoCards = [
    {
      id: 1,
      img: "./src/img/info-cards/img-1.png",
      title: "Family Gathering",
      description:
        "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
    },
    {
      id: 2,
      img: "./src/img/info-cards/img-2.png",
      title: "Special Events",
      description:
        "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
    },
    {
      id: 3,
      img: "./src/img/info-cards/img-3.png",
      title: "Social Events",
      description:
        "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
    },
  ];
function menuCards(data, card) {
  data.forEach((item) => {
    const { id, title, img, description } = item;
    card.innerHTML += `
    <div class="card" id="${id}">
    <div class="image">
      <img src="${img}">
      <span></span>
    </div>
    <div class="card-text">
      <h2 class="description">${title}</h2>
      <p>${description}</p>
    </div>
  </div>
    `;
  });
  document.getElementById("2").style = "border:none; margin-bottom:0;";
}

menuCards(menuInfo, menuCard);
//information btn

function infoBtn(e) {
  btn.forEach((item) => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
  if (e.currentTarget.classList.contains("active")) {
    innerCard(infoCards, e.currentTarget.id);
  }
}
btn.forEach((item) => {
  item.addEventListener("click", infoBtn);
});


function innerCard(data, Id) {
  const { id, title, img, description } = data[Id];
infoTitle.textContent =title
infoDescription.textContent =description
infoImg.src =img
}
