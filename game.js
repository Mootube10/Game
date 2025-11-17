let coins = 0;
let cpc = 1;

const coinsDisplay = document.getElementById("coins");
const cpcDisplay = document.getElementById("cpc");

function openTab(tab) {
  document.getElementById("game").style.display = "none";
  document.getElementById("shop").style.display = "none";
  document.getElementById(tab).style.display = "block";
}

// Default tab
openTab('game');

// Click robot
document.getElementById("robot").onclick = () => {
  coins += cpc;
  coinsDisplay.textContent = coins;
};

// PayPal Buttons

// Purchase 100 coins (£1)
paypal.Buttons({
  style: { layout: "vertical" },
  createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{ amount: { value: "1.00" } }]
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

// Donation Button (£1–£20)
paypal.Buttons({
  style: { layout: "vertical" },
  createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{ amount: { value: "5.00" } }]
    });
  },
  onApprove: function(data, actions) {
    return actions.order.capture().then(function() {
      alert("Thank you for donating!");
    });
  }
}).render("#paypal-donate");
