const categories = [
    {catNo: 2, cat: "Chairs"},
    {catNo: 3, cat: "Desks"}, 
    {catNo: 4, cat: "Wall Art"}
];

export function getCategories(){
    return categories;
}

export function getCategory(catNo){
    return categories.find((category) => category.catNo == catNo);
}