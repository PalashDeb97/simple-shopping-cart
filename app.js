function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productValue = productInput.value;

    if (isIncreasing) {
        productValue = parseInt(productValue) + 1;
    } 
    else if (productValue > 0) {
        productValue = parseInt(productValue) - 1;
    }
    productInput.value = productValue;

    // update price
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productValue * price;

    // update total part
    calculateTotal()
}

function getInputValue(product) {
    const phoneInput = document.getElementById(product + '-number');
    const phoneValue = parseInt(phoneInput.value);
    return phoneValue;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tex = subTotal / 10;
    const total = subTotal + tex;
    // update subtotal text
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tex-amount').innerText = tex;
    document.getElementById('total-price').innerText = total;
}



// phone plus
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true)
})
// phone minus
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false)
})

// case plus
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true)
})
// case minus
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false)
})

