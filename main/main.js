'use strict';

function printReceipt(inputs) {
    const countedItems = inputs.reduce((allItems, currentIem) => {
        allItems[currentIem] ? allItems[currentIem]++ : allItems[currentIem] = 1;
        return allItems;
    }, {});
    let totalPrice = 0;
    const output = Object.keys(countedItems).map(input => {
        const boughtIem = loadAllItems().find(item => item.barcode === input);
        boughtIem.quantity = countedItems[input];
        boughtIem.subtotalPrice = boughtIem.quantity * boughtIem.price;
        totalPrice = totalPrice + boughtIem.subtotalPrice
        return boughtIem;
    }).map(item =>
        `名称：${item.name}，数量：${item.quantity}${item.unit}，单价：${item.price.toFixed(2)}(元)，小计：${item.subtotalPrice.toFixed(2)}(元)`).join('\n');
    console.log(`***<没钱赚商店>收据***
${output}
----------------------
总计：${totalPrice.toFixed(2)}(元)
**********************`);
}
