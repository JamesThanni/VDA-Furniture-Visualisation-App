/* Creating an array of product objects. */
const PRODUCTS = [
  {
    id: 1,
    title: 'Leather Sofa',
    name: 'Sofa',
    price: 650,
    material: 'Brown Leather',
    width: 1.99,
    depth: 0.95,
    height: 0.89,
    image: require('../assets/images/sofa.png'),
    description:
      'A couch, also known as a sofa, or settee is a cushioned item of furniture for seating multiple people (although it is not uncommon for a single person to use a couch).',
  },
  {
    id: 2,
    title: 'Modern Armchair',
    name: 'Armchair',
    price: 229,
    material: 'Grey Fabric',
    width: 0.82,
    depth: 0.96,
    height: 1.01,
    image: require('../assets/images/armchair.png'),
    description:
      'Armchair chairs usually contain armrests which will support part of the body weight through the arms if the arms are resting on the armrests. Elbow rest height is used to determine the height of the armrests. ',
  },
  {
    id: 3,
    title: 'Eames Desk Chair',
    name: 'DeskChair',
    price: 12,
    material: 'White Plastic and Oak Wood',
    width: 0.45,
    depth: 0.47,
    height: 0.76,
    image: require('../assets/images/foldable.png'),
    description:
      'A  desk chair, is a type of chair that is designed for use at a desk in an office. It is usually a swivel chair, with a set of wheels for mobility and adjustable height.',
  },
  {
    id: 4,
    title: 'Classy Barstool',
    name: 'BarChair',
    price: 20,
    material: 'White Plastic and Oak Wood',
    width: 0.41,
    depth: 0.34,
    height: 0.34,
    image: require('../assets/images/stool.png'),
    description:
      'Bar stools are a type of tall stool, often with a foot rest to support the feet. The height and narrowness of bar stools makes them suitable for use at bars and high tables in pubs or bars.',
  },
]

// A getter function for screens to access all products
export function getProducts() {
  return PRODUCTS
}

// A getter function for screens to access specific products
export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id)
}
