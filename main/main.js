'use strict';

function printReceipt(inputs) {
  const countedItems = inputs.reduce((allItems, currentIem) => {
        allItems[currentIem] ? allItems[currentIem]++ : allItems[currentIem] = 1;
        return allItems;
    }, {});
  let totalPrice = 0;
  const output = Object.keys(countedItems).map(input => {
      const currentItem = loadAllItems().find(item => item.barcode === input);
      const {name, unit, price} = currentItem;
      const quantity = countedItems[input];
      const currentPrice = price*quantity;
      totalPrice = totalPrice + currentPrice;
      return `名称：${name}，数量：${quantity}${unit}，单价：${price.toFixed(2)}(元)，小计：${currentPrice.toFixed(2)}(元)`
  }).join("\n");
    console.log(`***<没钱赚商店>收据***
${output}
----------------------
总计：${totalPrice.toFixed(2)}(元)
**********************`);
}
