var arr=["itemOne", "itemTwo", "itemThree", "itemFour", "donation"];

var cart= [];
var sum = 0;
// connects to the html
function addToCart(x) {
    getItemId(x);
    // obtains selected item's id
    function getItemId(x) {
        var itemId = x.id;
        var itemPrice = x.value;
        console.log(itemId);
        arr.forEach(element => getItemTotal(element, itemId, itemPrice));
    }
}

// gets the quantity and price of item selected
function getItemTotal(element, itemId, itemPrice) {
   if (element === itemId) {
    //    seperates donation from item purchase
        if (element === "donation") {
            let idSearch = itemId+"Value";
            let donate = document.getElementById(idSearch).value;
            document.getElementById(idSearch).value = "0";
            let donationTotal = parseFloat(donate);
            let donation = {
                item: itemId,
                total: donationTotal,
            }
            sum+= donationTotal;
            cart.push(donation);
        }
        else {
            let idSearch = itemId+"Value";
            let quantity = document.getElementById(idSearch).value;
            document.getElementById(idSearch).value = "0";          
            let itemTotal = quantity * parseFloat(itemPrice);
            sum+=itemTotal;
            
            let itemOrder = {
                item: itemId,
                total: itemTotal,
                quantity: quantity
            }
            cart.push(itemOrder);
        }
       console.log(cart);
       console.log(sum);
   }
}