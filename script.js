// Масив із даними про товари
// Дані про товари
const products = [
    {
      id: 1,
      name: "Nike Air Force 1 Winter Low White Grey",
      price: 2099,
      image: "img1.jpg",
      details: "Теплі зимові кросівки із хутром.",
      sizes: ["40", "41", "42", "43"],
      gallery: ["img1.jpg", "img1-1.jpg", "img1-2.jpg"]
    },
    {
      id: 2,
      name: "Nike Air Jordan 4 Winter Retro White",
      price: 2999,
      image: "img2.jpg",
      details: "Зимові кросівки із ретро дизайном.",
      sizes: ["38", "39", "40", "41"],
      gallery: ["img2.jpg", "img2-1.jpg", "img2-2.jpg"]
    },
    {
      id: 3,
      name: "Nike Air Max TN Plus Gore-Tex",
      price: 3099,
      image: "img3.jpg",
      details: "Чоловічі зимові кросівки з водостійким матеріалом.",
      sizes: ["42", "43", "44", "45"],
      gallery: ["img3.jpg", "img3-1.jpg", "img3-2.jpg"]
    }
  ];

// Завантаження товарів на головну сторінку
window.onload = function() {
    const catalog = document.querySelector('.catalog');
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.images[0]}" alt="${product.name}">  <!-- Перший малюнок -->
            <h3>${product.name}</h3>
            <p>Ціна: ${product.price} грн</p>
            <a href="product.html?id=${product.id}">Деталі</a>
        `;
        catalog.appendChild(card);
    });
};

// Перехід на сторінку з деталями
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const product = products.find(p => p.id === parseInt(productId));

    if (product) {
        const productDetail = document.querySelector('.product-detail');
        productDetail.innerHTML = `
            <h1>${product.name}</h1>
            <p>${product.description}</p>
            <p>Ціна: ${product.price} грн</p>
            <div class="gallery">
                ${product.images.map(image => `<img src="${image}" alt="${product.name}">`).join('')}
            </div>
        `;
    }
};

  
  // Динамічне завантаження каталогу
  const catalog = document.querySelector(".catalog");
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.price} грн</p>
      <button>Детальніше</button>
    `;
    card.addEventListener("click", () => {
      window.location.href = `product.html?id=${product.id}`;
    });
    catalog.appendChild(card);
  });
  
  // Відображення сторінки товару
  if (window.location.pathname.includes("product.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));
    const product = products.find((p) => p.id === productId);
  
    if (product) {
      const productDetails = document.querySelector(".product-details");
      productDetails.innerHTML = `
        <h1>${product.name}</h1>
        <div class="slider">
          ${product.gallery
            .map((img) => `<img src="${img}" alt="${product.name}" />`)
            .join("")}
        </div>
        <p>${product.details}</p>
        <p>Ціна: ${product.price} грн</p>
        <p>Розміри: ${product.sizes.join(", ")}</p>
        <button>Купити</button>
      `;
  
      // Слайдер
      const sliderImages = document.querySelectorAll(".slider img");
      let currentSlide = 0;
  
      function showSlide(index) {
        sliderImages.forEach((img, i) => {
          img.style.display = i === index ? "block" : "none";
        });
      }
  
      showSlide(currentSlide);
  
      document.querySelector(".slider").addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % sliderImages.length;
        showSlide(currentSlide);
      });
    }
  }
  