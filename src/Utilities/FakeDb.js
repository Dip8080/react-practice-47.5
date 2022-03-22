



// const addTolocal = (id)=>{
//     let  shoppoingCart ;
//     const existingCart = localStorage.getItem('shopping-cart');
//     if(existingCart){
//         shoppoingCart = JSON.parse(existingCart);
//     }
//     else{
//         shoppoingCart={};
//     }
//     let value = shoppoingCart[id];
//     if(value){
//         shoppoingCart[id]=parseInt(value)+1;

//     }
//     // here else part means when 1st add to cart clicked
//     else{
//         shoppoingCart[id]=1;
//     }
//     localStorage.setItem('shopping-cart',JSON.stringify(shoppoingCart))
// }

const addTolocal=(id)=>{
    let shoppingCart;
    let existingCart = localStorage.getItem('shopping-cart');
    if(existingCart){
        shoppingCart = JSON.parse(existingCart);
    }
    else{
        shoppingCart={};
    }
    let value = shoppingCart[id];
    if(value){
        shoppingCart[id]=value+1;
    }
    else{
        shoppingCart[id]=1;
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}

const removeFromLocal = (id)=>{
    const existingCart = localStorage.getItem('shopping-cart');
    if(existingCart){
    let cartObject = JSON.parse(existingCart);
    if(id in cartObject){
        delete cartObject[id];
        localStorage.setItem('shopping-cart',JSON.stringify(cartObject))
    }
    localStorage.setItem('shopping-cart',JSON.stringify(cartObject))
}




}
export {addTolocal , removeFromLocal}