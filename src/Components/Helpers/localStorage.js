// carrito en product-key, mayuscula cuando se usa global
export const PRODUCT_KEY = 'product';

export const getItemFromStorage = (key) => {
  try {
    //modifico con parse el string del storage a objeto
    const storage = JSON.parse(window.localStorage.getItem(key));
    return storage;
  } catch {
    console.error('No se pudo obtener el elemento del local storage');
  }
}
const setItemInStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    console.error('No se pudo cargar el elemento en el local storage')
  }
}

export const setItemInCart = (key, item) => {
  console.log(item)
  const itemWithQuantity = {
    ...item,
    quantity: 1,
  }

  const currentItemMatch = findItemInCard(key, item);
  let currentItems = getItemFromStorage(key);
  let allProducts;

  try {
    // chequeo si hay productos en el carrito
    if(currentItems) {
      //chequeo si el producto que estoy agregando ya existe y le aumento la cantidad
      if(currentItemMatch){
        const findItemIndex = currentItems.findIndex(item => item.id === currentItemMatch.id);
        currentItems[findItemIndex] = {
          ...currentItemMatch,
          quantity: currentItemMatch.quantity+1
        };

        allProducts = [ ...currentItems ]

      } else {
        //y si no existe, le agrego uno nuevo con quantity = 1 a los existentes
        allProducts = [
          ...currentItems,
          itemWithQuantity
        ]
      }
    // y si el carrito esta vacio, creo un item de cero.
    } else allProducts = [ itemWithQuantity ];

    console.log(allProducts);
    setItemInStorage(key, allProducts)
  } catch {
    console.error('No se pudo cargar elemento en el local storage');
  }
}

// en el if elimino los productos iguales que tienen cantidad mayor a 1
// en el else elimino los productos que solo se agregaron 1
export const clearElementInCart = (key, item) => {
  let currentItems = getItemFromStorage(key);
  const currentItemMatch = findItemInCard(key, item);
  const itemIndex = currentItems.findIndex(item => item.id === currentItemMatch.id);

  if(currentItemMatch.quantity > 1) {
    currentItems[itemIndex] = {
      ...currentItemMatch,
      quantity: currentItemMatch.quantity-1
    };
    console.log('itemIndex: ', itemIndex)
    console.log('currentItems: ', currentItems)
  } else {
    currentItems.splice(itemIndex, 1)
  }

  setItemInStorage(key, currentItems);
}

export const clearAll = (key) => {
  let currentItems = getItemFromStorage(key)
  if(currentItems){
    currentItems.clear()
  }
  }



const findItemInCard = (key, item) => {
  const currentProducts = getItemFromStorage(key);
  const matchInCart = currentProducts && currentProducts.find(product => product.id === item.id);
  return matchInCart;
}