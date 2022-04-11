const PRODUCTS = [
    {
        id: 1,
        name: "Sofa",  
        price: 550,
        material: "Brown Leather",
        type: "chair",
        image: require("../assets/images/sofa.png"),
        description:
          "6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
    },
    {
        id: 2,
        name: "Armchair",
        price: 229,
        material: "Brown Leather",
        type: "chair",
        image: require("../assets/images/armchair.png"),
        description:
            "6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
    },
    {
        id: 3,
        name: "Foldable",
        price: 10,
        material: "Brown Leather",
        type: "chair",
        image: require("../assets/images/foldable.png"),
        description: "Processor: Intel Core i9 11900H RAM: 32 GB (16GB+16GB) Storage: 1024GB PCIe NVMe SSD"
    },
    {
        id: 4,
        name: "Stool",
        price: 50,
        material: "Brown Leather",
        type: "chair",
        image: require("../assets/images/stool.png"),
        description: "Processor: Intel Core i9 11900H RAM: 32 GB (16GB+16GB) Storage: 1024GB PCIe NVMe SSD"
    }
]

export function getProducts(){
    return PRODUCTS;
}

export function getProduct(id){
    return PRODUCTS.find((product) => product.id == id);
}