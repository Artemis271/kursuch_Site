document.addEventListener('DOMContentLoaded', function() {
const menuBar = document.getElementById('menu-bar');
const navbar = document.querySelector('.navbar');

menuBar.addEventListener('click', function() {
    navbar.classList.toggle('active');
});
});



document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.fa-shopping-cart');
    const cartItems = []; // Create an array to store selected items

    function addToCart(event) {
        const box = event.target.closest('.box');
        const title = box.querySelector('h3').innerText;
        const price = box.querySelector('.price').innerText;

        const item = {
            title: title,
            price: price
        };

        // Add item to the cart
        cartItems.push(item);
        alert(`Товар "${item.title}" добавлен в корзину за ${item.price}`);
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    const cartIconHeader = document.querySelector('.icons .fa-shopping-cart');
    cartIconHeader.addEventListener('click', () => {
        if (cartItems.length === 0) {
            alert('Корзина пуста');
        } else {
            let cartContent = 'Товары в корзине:\n';
            cartItems.forEach((item, index) => {
                cartContent += `- ${item.title} за ${item.price}\n`;
            });

            const productsToRemove = prompt(cartContent + '\nВведите названия товаров для удаления (через запятую)');
            if (productsToRemove !== null) {
                const productsArray = productsToRemove.split(',').map(product => product.trim());
                const removedItems = [];

                productsArray.forEach(product => {
                    const index = cartItems.findIndex(item => item.title.toLowerCase() === product.toLowerCase());
                    if (index !== -1) {
                        removedItems.push(cartItems.splice(index, 1)[0]);
                    }
                });

                if (removedItems.length > 0) {
                    let removedItemsList = 'Удаленные товары:\n';
                    removedItems.forEach(item => {
                        removedItemsList += `- ${item.title} за ${item.price}\n`;
                    });
                    alert(removedItemsList);
                } else {
                    alert('Товары не найдены или не были удалены');
                }
            }
        }
    });
});
