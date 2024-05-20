import { elements,calculatePrice } from './helpers.js';
import { menu } from './db.js';

const searchParams = new URLSearchParams(window.location.search);
const paramId = searchParams.get('id');

const product = menu.find((item) => item.id === Number(paramId));
console.log(product);

elements.outlet.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
        <a href="/"><i class="bi bi-house fs-1"></i> </a>
        <div class="cur">anasayfa / ${product.category} / ${product.title.toLowerCase()}</div>
    </div>
    <h1 class="text-center my-3 shadow p-2 rounded">${product.title}</h1>
    <div class="d-flex align-items-center justify-content-center">
        <img
        src="${product.img}"
        style="max-width: 500px"
        class="img-fluid shadow rounded"
        />
    </div>
    <div>
        <h3 class="my-3">
        Ürünün Kategorisi: <span class="text-success">${product.category}</span>
        </h3>
        <h3 class="my-3">
        Ürünün Fiyatı: <span class="text-success">${calculatePrice(product.price)}₺</span>
        </h3>
    </div>
    <p class="lead fs-3">
        ${product.desc}
    </p>
`;
