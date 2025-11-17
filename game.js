let coins = 0;
let cpc = 1;

const coinsDisplay = document.getElementById("coins");
const cpcDisplay = document.getElementById("cpc");

// TAB SWITCHING (FULLY FIXED)
function openTab(tabName) {
    let tabs = ["game", "shop"];

    tabs.forEach(t => {
        document.getElementById(t).style.display = "none";
    });

    document.getElementById(tabName).style.display = "block";
}

// Default tab shown on page load
window.onload = function() {
    openTab("game");
};

// ROBOT CLICKER
document.getElementById("robot").onclick = () => {
    coins += cpc;
    coinsDisplay.textContent = coins;
};

// PAYPAL BUTTONS

// Purchase 100 coins (£1)
paypal.Buttons({
    style: { layout: "vertical" },
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: { value: "1.00" }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function() {
            coins += 100;
            coinsDisplay.textContent = coins;
            alert("Purchased 100 coins!");
        });
    }
}).render("#paypal-coins");

// Donations £1–£20 (default £5)
paypal.Buttons({
    style: { layout: "vertical" },

    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: { value: "5.00" }
            }]
        });
    },

    onApprove: function(data, actions) {
        return actions.order.capture().then(function() {
            alert("Thank you for donating!");
        });
    }
}).render("#paypal-donate");
