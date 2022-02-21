class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.totalOutput.innerHTML= `<h2>Total: \$${1}</h2>`
  }

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h2'); // properties can be added everywhere inside of a class
    return cartEl;
  }
}

class ProductItem {
  constructor (product) {
    this.product = product;
  }
  
  addToCart() {
    App.addProductToCart(this.product);
  };

// logic for product element creation
  render() {
    const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
    const addCartItem = prodEl.querySelector('button');
    addCartItem.addEventListener('click', this.addToCart.bind(this)); // without bind(this), this refers to button element => .bind(this) refers to product obbject
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'Up Pillow',
      'https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6504047395760',
      'A soft pillow from Up Disney!',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://m.media-amazon.com/images/I/61i5XSPkngL._SL1080_.jpg',
      'A cool carpet!',
      59.99
    ),
  ];

  constructor() {}

// logic for accepting product element and appending to HTML element
  render() {
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod); // accepts object created based on Product class and stored in products array
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {

  render() {
    const renderHook = document.getElementById('app');
    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}
  
class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();