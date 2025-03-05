function calculateTotal() {
    let total = 0;
    const quantities = document.querySelectorAll('.quantity');
    quantities.forEach(function(item) {
        const price = parseFloat(item.getAttribute('data-price'));
        const quantity = parseInt(item.value);
        total += price * quantity;
    });
    document.getElementById('total').innerText = total.toFixed(2);
}