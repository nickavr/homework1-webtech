//visualizing the object 

// var order ={
//     total:20,
//     items:[
//         {price: 1, 
//         quantity: 3},

//         {price: 1, 
//         quantity: 3},

//         {price: 1, 
//         quantity: 3},

//         {price: 1, 
//         quantity: 3},

//         {price: 1, 
//         quantity: 3},
//     ]
// };

function removeOrderItem(orderInfo, position){
    
    if(!(orderInfo["items"] instanceof Array)){
        throw "Items should be an array";
    }

    for(let i = 0; i < orderInfo.items.length; i++){
        if(!(orderInfo.items[i].hasOwnProperty("price") && 
        orderInfo.items[i].hasOwnProperty("quantity"))){
            throw "Malformed item";
        }
    }

    if(position > orderInfo.items.length){
        throw "Invalid position"
    }

    orderInfo.total -= orderInfo.items[position].price * orderInfo.items[position].quantity;

    orderInfo.items.splice(position, 1);
    return orderInfo;

}

const app = {
    removeOrderItem
};

module.exports = app;