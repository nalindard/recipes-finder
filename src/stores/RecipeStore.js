import { defineStore } from 'pinia'
import { markRaw } from 'vue'
const url = 'https://www.themealdb.com/api/json/v1/1/'

export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
    countries: [],
    countriesIsLoading: true,
    ingreIsLoading: true,
    ingredients_2: [],
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',],
  }),

  // Actions-----------
  actions: {
    getCountries() {
      const get = async () => {
        // console.log('Getting countries')
        const res = await fetch(url + 'list.php?a=list')
        const data = await res.json()
        this.countries = markRaw(data)
        // console.log(data);
        this.countriesIsLoading = false
      }
      get()
    },
    getIngredients(){
      const get = async () => {
        // console.log('Getting ingredients')
        const res = await fetch(url + 'list.php?i=list')
        const data = await res.json()
        this.ingredients_2 = markRaw(data)
        // console.log(data);
        this.ingreIsLoading = false
      }
      get()
    }
  },

  //   Getters-----------
  getters: {
    countrieList() {
      return this.countries
    },
    countriNames(){
      return this.countries.meals.map(c => c.strArea)
    },
    cLoading(){
      return this.countriesIsLoading
    },
    iLoading(){
      return this.ingreIsLoading
    },
    letterList(){
      return this.letters
    },
    // ingreList(){
    //   return this.ingredients
    // },
    ingreList_2(){
      return this.ingredients_2
    },
    ingreNames(){
      return this.ingreList_2.meals.map(i => i.strIngredient)
    }
  },
})
