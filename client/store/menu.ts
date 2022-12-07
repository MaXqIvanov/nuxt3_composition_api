import { defineStore } from "pinia";

interface ICategory {
    _id: string,
    name: string,
    navigate: string,
}


export const useMenuStore = defineStore('menu', {
    state: ()=>({
        category: [] as ICategory[] | null
    }),
    actions: {
        async getCategory(){
          console.log('getCategory')
          const {data} = await useCustomFetch<ICategory[]>('/category', {})
          this.category = data.value
        },
    },
    
})