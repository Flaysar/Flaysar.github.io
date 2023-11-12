function calculateTotal() {
    const productSelect = document.getElementById("productSelect");
    const selectedProduct =
      productSelect.options[productSelect.selectedIndex].value;

    quantity = parseFloat(document.getElementById("quantity").value);
    if (quantity<0) { quantity=-quantity } ;
    let price = 0;
    switch (selectedProduct) {
      case "product1":
        price = 200;
        break;
      case "product2":
        price = 150;
        break;
      case "product3":
        price = 50;
        break;
      default:
        price = 0;
    }
    const totalCost = 0;
    if (quantity>0){
        const totalCost = price * quantity;     
        document.getElementById("totalCost").textContent = totalCost;
    }
    else{
    document.getElementById("totalCost").textContent = totalCost;}
  }