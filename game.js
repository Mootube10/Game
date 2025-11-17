let stars = 0;
const starDisplay = document.getElementById("stars");
document.getElementById("planet").onclick = () => {
  stars++;
  starDisplay.textContent = stars;
};

// PayPal purchase button (sandbox)
paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
            amount: { value: "1.00" } // $1 → +100 stars
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        stars += 100;
        starDisplay.textContent = stars;
        alert("Purchase complete! +100 stars added.");
      });
    }
}).render("#paypal-button-container");
