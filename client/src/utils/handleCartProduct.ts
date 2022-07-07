import { ProductPayload } from "components/Common/ProductInfo";

function addProduct(product: ProductPayload) {
  const productList = localStorage.getItem("cart_products");
  let products: ProductPayload[] = [];
  if (productList) {
    const storage: ProductPayload[] = JSON.parse(productList);
    const isExiting = Boolean(
      storage.find((item) => item.product_id === product.product_id)
    );
    if (!isExiting) {
      storage.push(product);
      products = storage;
    } else {
      products = storage.map((item) => {
        if (item.product_id === product.product_id)
          return { ...item, amount: item.amount + product.amount };
        return item;
      });
    }
  } else {
    products.push(product);
  }
  localStorage.setItem("cart_products", JSON.stringify(products));
  return products;
}
function removeProduct(selectedProductCode: string) {
  const productList = localStorage.getItem("cart_products");
  if (productList) {
    let storageProducts = JSON.parse(productList);
    let products = storageProducts.filter(
      (product: ProductPayload) => product.product_id !== selectedProductCode
    );
    localStorage.setItem("cart_products", JSON.stringify(products));
    return products;
  }
  return productList;
}

export { addProduct, removeProduct };
