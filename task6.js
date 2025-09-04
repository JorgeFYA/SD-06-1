// Type your code below this line!
const prompt = require('prompt-sync')();

function ShopList(list) {
  this.list = list;
}

function createItemList() {
  const uniqueItems = +prompt('¿Cuántos artículos diferentes comprarás? ');
  const itemList = [];

  for (let i = 0; i < uniqueItems; i++) {
    let item = prompt(`¿Cómo se llama el artículo número ${i + 1}? `);
    let quantity = +prompt(`¿Cuántas unidades de ${item} comprarás? `);
    itemList.push({ articulo: item, cantidad: quantity });
  }

  return itemList;
}

const newList = new ShopList(createItemList());
console.log(newList.list);

// Type your code above this line!
