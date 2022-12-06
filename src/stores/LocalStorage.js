export function setToLocalStorage(name, items) {
  console.log('items',items);
  localStorage.setItem(name, JSON.stringify(items))
}
export function checkLocalStorage(name) {
  return localStorage.getItem(name) ? true : false
}
export function getLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name))
}



// Fetch by letter,
// www.themealdb.com/api/json/v1/1/search.php?f=a

// Fetch by ingredient,
// www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

// Fetch by area,
// www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

// Search by name
// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

// Search by id
// www.themealdb.com/api/json/v1/1/lookup.php?i=52772

// Extra fields for -> Trending, Popular, Vegitarien, Meety, Also popular
// www.themealdb.com/api/json/v1/1/random.php

// Add /preview to the end of the meal image URL
// /images/media/meals/llcbn01574260722.jpg/preview
// Ingredient Thumbnail Images
// www.themealdb.com/images/ingredients/Lime.png
// www.themealdb.com/images/ingredients/Lime-Small.png
