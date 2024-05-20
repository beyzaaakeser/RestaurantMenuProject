import { buttonsData, menu } from './js/db.js';
import { calculatePrice, elements } from './js/helpers.js';

const renderMenuItems = (menuItems) => {
  let menuHTML = menuItems.map(
    (item) =>
      `      
    <a
    href="productDetail.html?id=${item.id}"
    class="text-decoration-none text-black d-flex flex-column flex-md-row gap-2 mt-3" id="card"
    >
        <img src="${item.img}" alt="" class="rounded shadow mt-1 img-fluid" />
        <div>
          <div class="d-flex justify-content-between">
            <h5 class ="mt-0">${item.title}</h5>
            <p class="text-success">${calculatePrice(item.price)} TL</p>
          </div>
          <p id="pLead" class="lead">
            ${item.desc}
          </p>
        </div>
    </a>`
  );
  menuHTML = menuHTML.join('');
  elements.menuArea.innerHTML = menuHTML;
};

const searchCategory = (e) => {
  const category = e.target.dataset.category;
  const filteredMenu = menu.filter((item) => item.category === category);

  if (category === undefined) {
    console.log("return edildi")
    return;
   
  } else if(category === 'all'){
    renderMenuItems(menu);
  } else {
    renderMenuItems(filteredMenu);
  }
  renderButtons(category);
};

const renderButtons = (active) => {
  elements.buttonsArea.innerHTML = '';
  buttonsData.forEach((btn) => {
    const buttonEl = document.createElement('button');
    buttonEl.className = "btn btn-outline-dark filter-btn"
    buttonEl.textContent = btn.text;
    buttonEl.dataset.category = btn.value;
    console.log(buttonEl)
    if (btn.value === active ) {
        buttonEl.classList.add("bg-dark", "text-light");
    }
    elements.buttonsArea.appendChild(buttonEl)

  });
};

document.addEventListener('DOMContentLoaded', ()=> {
  renderButtons("all")
  renderMenuItems(menu)
});

elements.buttonsArea.addEventListener('click', searchCategory);
