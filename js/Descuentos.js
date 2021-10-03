
const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value; 
    let descuento;
    switch(couponValue) {
        case coupons[0]: // "JuanDC_es_Batman"
        descuento = 15;
        break;
        case coupons[1]: // "pero_no_le_digas_a_nadie"
        descuento = 30;
        break;
        case coupons[2]: // "es_un_secreto"
        descuento = 25;
        break;
        default: // ""
        descuento = 0;
        break;
        }
        let descuento_number = Number(descuento);
        const discountValue_number = Number(discountValue);
        const descuentoYcoupon = discountValue_number + descuento_number;
        console.log(descuentoYcoupon,discountValue,descuento);
    const precioConDescuento = calcularPrecioConDescuento(priceValue,descuentoYcoupon);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

