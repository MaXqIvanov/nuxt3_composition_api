import { defineStore } from "pinia";

interface ICategory {
    _id: string,
    name: string,
    navigate: string,
    image: string,
}

interface IProods {
    _id: string,
    name: string,
    id_category: string,
    image: string
}


export const useMenuStore = defineStore('menu', {
    state: ()=>({
        category: [] as ICategory[] | null,
        current_category: {} as ICategory | undefined,
        proods: [] as IProods[] | null,
    }),
    actions: {
        setCurrentCategory(action: ICategory | undefined){
            this.current_category = action
        },
        async getCategory(){
          const {data} = await useCustomFetch<ICategory[]>('/category', {})
          this.category = data.value
        },
        async getProods(){
          const {data} = await useCustomFetch<IProods[]>(`/proods${this.current_category !== undefined ? '?id_category'+this.current_category._id : ''}`, {})
          console.log(data)
          this.proods = data.value
        }
    },
    
})