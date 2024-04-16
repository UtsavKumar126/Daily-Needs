export function getTotalCost(cart){
    let total=0;
    cart.map((product)=>{
        total+=(product.price*product.quantity)
    })
    return total;
}