class ProductManager {
    constructor(){
        this.products = [];
    }

    static id = 0

    addProduct(title, description, price, thumbnail, code, stock){
        ProductManager.id++
        this.products.push({title, description, price, thumbnail, code, stock, id:ProductManager.id});

    }

    getProduct() {
        return this.products;
    }

    getProductById(id){
        if(!this,products,find((producto) => producto.id === id)){
            console.log("Not Found")
        } else{
            console.log("Valido")
        }
    }
}

const productos = new ProductManager();

//Arreglo Vacio
console.log(productos.getProduct());

//Agregar Producto
productos.addProduct("titulo", "descripcion", 200, "no image", "abc123", 25);
productos.addProduct("titulo2", "descripcion2", 200, "no image2", "abc124", 25);

//Arreglo Con Producto
console.log(productos.getProduct());


console.log(productos.getProductById(2))