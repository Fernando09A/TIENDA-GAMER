const CART_KEY = "tienda_gamers_cart_v1";

function getCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    renderCartBadge();
}

function addToCart(game) {
    const cart = getCart();
    const existing = cart.find((item) => item.id === game.id);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            id: game.id,
            title: game.title,
            price: Number(game.price),
            platform: game.platform || "PC",
            qty: 1
        });
    }

    saveCart(cart);
}

function updateQty(id, delta) {
    const cart = getCart();
    const item = cart.find((i) => i.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(id);
        return;
    }
    saveCart(cart);
    renderCartPage();
}

function removeFromCart(id) {
    const cart = getCart().filter((i) => i.id !== id);
    saveCart(cart);
    renderCartPage();
}

function clearCart() {
    localStorage.removeItem(CART_KEY);
    renderCartBadge();
    renderCartPage();
}

function formatPrice(amount) {
    return `$${Number(amount).toFixed(2)}`;
}

function renderCartBadge() {
    const cart = getCart();
    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
    document.querySelectorAll(".cart-btn__count").forEach((el) => {
        el.textContent = totalItems > 0 ? totalItems : "";
    });
}

function renderCartPage() {
    const listEl = document.getElementById("cart-items-list");
    const subtotalEl = document.getElementById("cart-subtotal");
    const totalEl = document.getElementById("cart-total");
    const countEl = document.getElementById("cart-summary-count");

    if (!listEl || !subtotalEl || !totalEl) return;

    const cart = getCart();
    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    if (countEl) {
        countEl.textContent = `${totalItems} ${totalItems === 1 ? "juego" : "juegos"}`;
    }

    if (cart.length === 0) {
        listEl.innerHTML = `
            <div class="cart-empty">
                <p class="cart-empty__text">Tu bolsa está vacía por ahora.</p>
                <a href="catalogo.html" class="hero__cta hero__cta--lift cart-empty__btn">IR AL CATÁLOGO</a>
            </div>
        `;
        subtotalEl.textContent = "$0.00";
        totalEl.textContent = "$0.00";
        return;
    }

    listEl.innerHTML = cart.map((item) => `
        <article class="cart-item">
            <div class="cart-item__info">
                <h3 class="cart-item__title">${item.title}</h3>
                <span class="cart-item__meta">${item.platform} · Unitario: ${formatPrice(item.price)}</span>
            </div>
            <div class="cart-item__actions">
                <div class="qty-box">
                    <button type="button" class="qty-box__btn" onclick="updateQty('${item.id}', -1)" aria-label="Restar cantidad">−</button>
                    <span class="qty-box__value">${item.qty}</span>
                    <button type="button" class="qty-box__btn" onclick="updateQty('${item.id}', 1)" aria-label="Sumar cantidad">+</button>
                </div>
                <span class="cart-item__subtotal">${formatPrice(item.price * item.qty)}</span>
                <button type="button" class="cart-item__remove" onclick="removeFromCart('${item.id}')">Quitar</button>
            </div>
        </article>
    `).join("");

    subtotalEl.textContent = formatPrice(subtotal);
    totalEl.textContent = formatPrice(subtotal);
}

document.addEventListener("DOMContentLoaded", () => {
    renderCartBadge();
    renderCartPage();

    const checkoutForm = document.getElementById("checkout-form");
    const statusMsg = document.getElementById("checkout-status");

    if (checkoutForm && statusMsg) {
        checkoutForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const cart = getCart();
            if (cart.length === 0) {
                statusMsg.textContent = "Añade al menos un juego antes de finalizar la compra.";
                return;
            }
            const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
            clearCart();
            checkoutForm.reset();
            statusMsg.textContent = `¡Compra confirmada por ${formatPrice(total)}! Tus códigos digitales han sido generados (simulación).`;
        });
    }
});