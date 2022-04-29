const PRODUCTS = [
    {
        id: 1,
        name: "Sofa",  
        price: 650,
        material: "Brown Leather",
        width: 1.99,
        depth: 0.95,
        height: 0.89,
        type: "chair",
        image: require("../assets/images/sofa.png"),
        description:
          "6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
    },
    {
        id: 2,
        name: "Armchair",
        price: 229,
        material: "Grey Fabric",
        width: 0.82,
        depth: 0.96,
        height: 1.01,
        type: "chair",
        image: require("../assets/images/armchair.png"),
        description:
            "6.7-inch Super Retina XDR display with ProMotion for a faster, more responsive feel Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
    },
    {
        id: 3,
        name: "Foldable",
        price: 12,
        material: "Black Plastic",
        width: 0.45,
        depth: 0.47,
        height: 0.76,
        type: "chair",
        image: require("../assets/images/foldable.png"),
        description: "Processor: Intel Core i9 11900H RAM: 32 GB (16GB+16GB) Storage: 1024GB PCIe NVMe SSD"
    },
    {
        id: 4,
        name: "Stool",
        price: 20,
        material: "Blue Velvet",
        width: 0.41,
        depth: 0.34,
        height: 0.34,
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