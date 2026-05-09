/* =============================================
   WISHOLOGY — Main JavaScript
   ============================================= */

'use strict';

// --- Mobile Nav Toggle -------------------------------
const navToggle = document.querySelector('.nav-toggle');
const mainNav   = document.querySelector('.main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

// Mobile nav CSS injection
const mobileNavCSS = document.createElement('style');
mobileNavCSS.textContent = `
  @media (max-width: 1024px) {
    .main-nav.nav-open {
      display: flex !important;
      flex-direction: column;
      position: absolute;
      top: 68px;
      left: 0;
      right: 0;
      background: #FAF8F3;
      padding: 20px 24px;
      border-bottom: 1px solid rgba(201,184,154,0.3);
      gap: 16px !important;
      z-index: 99;
    }
  }
`;
document.head.appendChild(mobileNavCSS);

// --- Cart Count (Shopify integration-ready) ----------
let cartCount = 0;
const cartCountEl = document.querySelector('.cart-count');

function updateCartDisplay() {
  if (cartCountEl) {
    cartCountEl.textContent = cartCount;
    cartCountEl.style.display = cartCount > 0 ? 'flex' : 'none';
  }
}
updateCartDisplay();

// --- Quick Add Buttons -------------------------------
document.querySelectorAll('.quick-add').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    cartCount++;
    updateCartDisplay();

    // Visual feedback
    btn.textContent = '✓';
    btn.style.background = '#8FA67A';
    btn.style.color = 'white';
    setTimeout(() => {
      btn.textContent = '+';
      btn.style.background = '';
      btn.style.color = '';
    }, 1200);
  });
});

// --- Newsletter Subscribe ----------------------------
function handleSubscribe(e) {
  e.preventDefault();
  const form   = e.target;
  const input  = form.querySelector('input[type="email"]');
  const button = form.querySelector('button');
  const email  = input.value.trim();

  if (!email) return;

  // Simulate subscription
  button.textContent = '✓ Subscribed!';
  button.style.background = '#8FA67A';
  button.style.borderColor = '#8FA67A';
  input.value = '';
  input.placeholder = 'Thank you for joining!';

  setTimeout(() => {
    button.textContent = 'Subscribe';
    button.style.background = '';
    button.style.borderColor = '';
    input.placeholder = 'Your email address';
  }, 3000);
}
window.handleSubscribe = handleSubscribe;

// --- Scroll-triggered reveal animations --------------
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -60px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Inject reveal CSS
const revealCSS = document.createElement('style');
revealCSS.textContent = `
  .product-card, .category-card, .testimonial-card, .trust-item {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.22s ease, border-color 0.22s ease;
  }
  .product-card.revealed, .category-card.revealed, .testimonial-card.revealed, .trust-item.revealed {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(revealCSS);

document.querySelectorAll('.product-card, .category-card, .testimonial-card, .trust-item').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  revealObserver.observe(el);
});

// --- Sticky header shadow on scroll -----------------
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (header) {
    header.style.boxShadow = window.scrollY > 40
      ? '0 4px 20px rgba(30,26,20,0.1)'
      : 'none';
  }
}, { passive: true });

// --- Shopify-ready: Add to Cart API hook ------------
// Uncomment and adapt when deploying to Shopify:
/*
async function addToCart(variantId, quantity = 1) {
  try {
    const res = await fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: variantId, quantity })
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Add to cart error:', err);
  }
}

async function fetchCart() {
  const res = await fetch('/cart.js');
  const cart = await res.json();
  cartCount = cart.item_count;
  updateCartDisplay();
}

fetchCart();
*/
