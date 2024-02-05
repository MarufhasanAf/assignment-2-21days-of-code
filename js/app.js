
let buttons = document.getElementsByClassName('btn-course');
let htmlCode = `
<div class="flex justify-between mb-4">
    <div class="flex ">
        <img width="70px" height="70px" src="img/img-1.jpg" alt="">
        <div class="pl-3">
        <h4 class="font-semibold">Modern Psychology</h4>
        <p>1300Tk</p>
    </div>
 </div>
<img onclick='remove(this)' width="15px" height="15px" src="img/xmark-solid.svg" alt="">
</div>`;
for (let btn of buttons) {
    btn.addEventListener('click', function (event) {
        let parentCart = document.getElementById('parent-cart');
        let div = document.createElement('div');
        let priceField = document.getElementById('price-field');
        let previousTotalString = priceField.innerText;
        let previousTotal = parseFloat(previousTotalString);
        let itemsCount = document.getElementById('items-count');
        let itemsString = itemsCount.innerText;
        let itemsNumber = parseFloat(itemsString);
        let seatCount = event.target.nextElementSibling.children[1].children[1];
        let seatCountString = seatCount.innerText;
        let seatCountNumber = parseInt(seatCountString);
        div.innerHTML = htmlCode;
        parentCart.appendChild(div);
        priceField.innerText = previousTotal + 1300;
        itemsCount.innerText = itemsNumber + 1;
        console.log(itemsNumber);
        seatCount.innerText = seatCountNumber - 1;
    })
}
function remove(event) {
    event.parentElement.remove();
}