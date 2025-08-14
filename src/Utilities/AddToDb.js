
const getStoredCartList = ()=>{
    // cartlist
    const storedListStr = localStorage.getItem('cart-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
}

const addToStoredCartList = (id) =>{
    const storedList = getStoredCartList();

    if(storedList.includes(id)){
        // already exists, do not add it
        // toast
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list', storedListStr);
        // toast
    }
}


export {addToStoredCartList, getStoredCartList}