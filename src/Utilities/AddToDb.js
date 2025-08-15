
const getStoredCartList = ()=>{
    // cartlist
    const storedListStr = localStorage.getItem('cart-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return[];
    }
}

const addToStoredCartList = (id) =>{
    const storedList = getStoredCartList();

    if(storedList.includes(id)){
        // already exists, do not add it
        // toast
        alert('Already exists this product')
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list', storedListStr);
        alert('successfully added to Cart')
    }
}


export {addToStoredCartList, getStoredCartList}