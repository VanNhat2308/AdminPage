
  const quantityInput = document.getElementById('quantity');
  const totalPriceEl = document.getElementById('totalPrice');
  const unitPrice = 39.99;

  quantityInput.addEventListener('input', () => {
    const qty = parseInt(quantityInput.value) || 1;
    const total = (qty * unitPrice).toFixed(2);
    totalPriceEl.textContent = `$${total}`;
  });

