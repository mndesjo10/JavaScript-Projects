// Get DOM elements
const specialtyRadios = document.querySelectorAll('input[name="specialty"]');
const drinkCheckboxes = document.querySelectorAll('input[name="drink"]');
const dessertCheckboxes = document.querySelectorAll('input[name="dessert"]');
const sizeRadios = document.querySelectorAll('input[name="size"]');
const crustRadios = document.querySelectorAll('input[name="crust"]');
const sauceRadios = document.querySelectorAll('input[name="sauce"]');
const cheeseRadios = document.querySelectorAll('input[name="cheese"]');
const veggieCheckboxes = document.querySelectorAll('input[name="veggie"]');
const meatCheckboxes = document.querySelectorAll('input[name="meat"]');
const cancelBtn = document.getElementById('cancel-btn');
const placeOrderBtn = document.getElementById('place-order-btn');
const orderItemsDiv = document.getElementById('order-item');
const totalPriceSpan = document.getElementById('total-price');

// Initialize variables
let currentOrder = {
    size: { name: 'Medium', price: 11.00 },
    crust: { name: 'Cheese Stuffed', price: 4.00 },
    sauce: { name: 'Marinara Sauce', price: 0 },
    cheese: { name: 'Extra Cheese', price: 4.00 },
    veggies: [],
    meats: [],
    specialty: 'Build Your Own',
    drinks: [],
    desserts: []
};

// Function to update order summary
function updateOrderSummary() {
    let subtotal = 0;
    let itemsHtml = '<strong>Item</strong> <strong>Subtotal</strong><br>';

    // Size
    itemsHtml += `<div>${currentOrder.size.name} <span>£${currentOrder.size.price.toFixed(2)}</span></div>`;
    subtotal += currentOrder.size.price;

    // Crust
    if (currentOrder.crust.price > 0) {
        itemsHtml += `<div>${currentOrder.crust.name} <span>+£${currentOrder.crust.price.toFixed(2)}</span></div>`;
        subtotal += currentOrder.crust.price;
    } else {
        itemsHtml += `<div>${currentOrder.crust.name} <span>£0.00</span></div>`;
    }

    // Sauce & Cheese
    itemsHtml += `<div>${currentOrder.sauce.name} <span>£0.00</span></div>`;
    if (currentOrder.cheese.price > 0) {
        itemsHtml += `<div>${currentOrder.cheese.name} <span>+£${currentOrder.cheese.price.toFixed(2)}</span></div>`;
        subtotal += currentOrder.cheese.price;
    } else {
        itemsHtml += `<div>${currentOrder.cheese.name} <span>£0.00</span></div>`;
    }

    // Veggies (first free, others +2.00)
    let veggieCount = 0;
    currentOrder.veggies.forEach(item => {
        veggieCount++;
        const price = veggieCount === 1 ? 0 : 2.00;
        itemsHtml += `<div>${item} <span>£${price.toFixed(2)}</span></div>`;
        subtotal += price;
    });

    // Meats (first free, others +2.00)
    let meatCount = 0;
    currentOrder.meats.forEach(item => {
        meatCount++;
        const price = meatCount === 1 ? 0 : 2.00;
        itemsHtml += `<div>${item} <span>£${price.toFixed(2)}</span></div>`;
        subtotal += price;
    });

    // Drinks
    currentOrder.drinks.forEach(drink => {
        itemsHtml += `<div>${drink.name} <span>£${drink.price.toFixed(2)}</span></div>`;
        subtotal += drink.price;
    });

    // Desserts
    currentOrder.desserts.forEach(dessert => {
        itemsHtml += `<div>${dessert.name} <span>£${dessert.price.toFixed(2)}</span></div>`;
        subtotal += dessert.price;
    });

    // Update total
    itemsHtml += `<div><strong>Total Price:</strong> <span style="color:#ffcc00;">£${subtotal.toFixed(2)}</span></div>`;

    orderItemsDiv.innerHTML = itemsHtml;
    totalPriceSpan.textContent = `£${subtotal.toFixed(2)}`;
}

// Event listeners for radio buttons
sizeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        const selected = Array.from(sizeRadios).find(r => r.checked);
        currentOrder.size = {
            name: selected.nextElementSibling.textContent.split('........')[0].trim(),
            price: parseFloat(selected.value)
        };
        updateOrderSummary();
    });
});

crustRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        const selected = Array.from(crustRadios).find(r => r.checked);
        currentOrder.crust = {
            name: selected.nextElementSibling.textContent.split('........')[0].trim(),
            price: parseFloat(selected.value)
        };
        updateOrderSummary();
    });
});

sauceRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        const selected = Array.from(sauceRadios).find(r => r.checked);
        currentOrder.sauce = {
            name: selected.nextElementSibling.textContent.trim(),
            price: 0
        };
        updateOrderSummary();
    });
});

cheeseRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        const selected = Array.from(cheeseRadios).find(r => r.checked);
        currentOrder.cheese = {
            name: selected.nextElementSibling.textContent.split('........')[0].trim(),
            price: parseFloat(selected.value)
        };
        updateOrderSummary();
    });
});

// Event Listeners for checkboxes
veggieCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        currentOrder.veggies = Array.from(veggieCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.nextElementSibling.textContent.trim());
        updateOrderSummary();
    });
});

meatCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        currentOrder.meats = Array.from(meatCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.nextElementSibling.textContent.trim());
        updateOrderSummary();
    });
});

// Specialty Pizzas
specialtyRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        const selected = Array.from(specialtyRadios).find(r => r.checked);
        currentOrder.specialty = selected.nextElementSibling.textContent.split('........')[0].trim();
        updateOrderSummary();
    });
});

// Drinks
drinkCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        currentOrder.drinks = Array.from(drinkCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => ({
                name: cb.nextElementSibling.textContent.split('........')[0].trim(),
                price: parseFloat(cb.value)
            }));
        updateOrderSummary();
    });
});

// Desserts
dessertCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        currentOrder.desserts = Array.from(dessertCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => ({
                name: cb.nextElementSibling.textContent.split('........')[0].trim(),
                price: parseFloat(cb.value)
            }));
        updateOrderSummary();
    });
});

// Cancel button
cancelBtn.addEventListener('click', () => {
    // Reset all selections
    sizeRadios[1].checked = true; // Medium
    crustRadios[2].checked = true; // Cheese Stuffed
    sauceRadios[0].checked = true; // Marinara Sauce
    cheeseRadios[1].checked = true; // Extra Cheese
    veggieCheckboxes.forEach(cb => cb.checked = false);
    meatCheckboxes.forEach(cb => cb.checked = false);

    // Reset new selections
    specialtyRadios[4].checked = true; // "Build Your Own"
    drinkCheckboxes.forEach(cb => cb.checked = false);
    dessertCheckboxes.forEach(cb => cb.checked = false);

    // Reset currentOrder
    currentOrder = {
        size: { name: 'Medium', price: 11.00 },
        crust: { name: 'Cheese Stuffed', price: 4.00 },
        sauce: { name: 'Marinara Sauce', price: 0 },
        cheese: { name: 'Extra Cheese', price: 4.00 },
        veggies: [],
        meats: [],
        specialty: 'Build Your Own',
        drinks: [],
        desserts: []
    };

    updateOrderSummary();
});

// Place Order button
placeOrderBtn.addEventListener('click', () => {
    alert(`Your order has been placed!\n\n${orderItemsDiv.innerHTML.replace(/<[^>]*>/g, '')}\n\nTotal: ${totalPriceSpan.textContent}`);
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    updateOrderSummary();
});