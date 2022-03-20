const BASE_URL = "../../assets/";

export default {
  armchair: require(`${BASE_URL}armchair.png`),
  sofa: require(`${BASE_URL}sofa.png`),
  foldable: require(`${BASE_URL}foldable.png`),
  stool: require(`${BASE_URL}stool.png`),
}

/* 


Create an object for shop products with file locations as properties to iterate 
through when displaying product multiple images. I export an object which will 
map a product name specified in the list item props which is used in this 
object to find its corresponding image. This is the best practice to follow.


*/