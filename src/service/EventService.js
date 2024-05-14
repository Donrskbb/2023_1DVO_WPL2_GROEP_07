const products = [
    {
        id: 1,
        name: 'Product 1',
        image: 'product1.jpg',
        price: 10,
        inventoryStatus: 'INSTOCK'
    },
    {
        id: 2,
        name: 'Product 2',
        image: 'product2.jpg',
        price: 20,
        inventoryStatus: 'LOWSTOCK'
    },
    {
        id: 3,
        name: 'Product 3',
        image: 'product3.jpg',
        price: 30,
        inventoryStatus: 'OUTOFSTOCK'
    },
    // Add more products as needed
];

// Simulated delay for asynchronous operation
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// ProductService object
const ProductService = {
    // Method to fetch small product data
    getProductsSmall() {
        // Simulate delay and then return a portion of products
        return delay(1000).then(() => products.slice(0, 9));
    },
    // Method to fetch large product data
    getProductsLarge() {
        // Simulate delay and then return all products
        return delay(1500).then(() => products);
    }
};

export default ProductService;
