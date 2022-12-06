import { defineStore } from 'pinia'
import { markRaw } from 'vue'
import { ingre, coun } from './DeleteStorage'
import {
  checkLocalStorage,
  getLocalStorage,
  setToLocalStorage,
} from './LocalStorage'

const baseUrl = 'www.themealdb.com/api/json/v1/1/'

export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
    countries: {},
    letters: [],
    ingredients: [],
  }),

  // Actions-----------
  actions: {
    getIngredients() {
      console.log('Getting ingredients')
      if (checkLocalStorage('ingredientList')) {
        this.ingredients = getLocalStorage('ingredientList')
      } else {
        setToLocalStorage('ingredientList', ingre)
        this.ingredients = getLocalStorage('ingredientList')
      }
    },

    getCountries() {
      console.log('Getting countries')
      if (checkLocalStorage('countries')) {
        this.countries = getLocalStorage('countries')
      } else {
        // setToLocalStorage('countries', coun)
        const get = async () => {
          const res = await fetch(
            'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
          )
          const data = await res.json()
          setToLocalStorage('countries', data)
          this.countries = data
        }
        get()
      }
    },
  },

  //   Getters-----------
  getters: {
    ingredientsList() {
      return this.ingredients
    },
    countrieList() {
      return markRaw(this.countries)
    },
  },
})
