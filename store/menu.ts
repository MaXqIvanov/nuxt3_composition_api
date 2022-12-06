import { defineStore } from "pinia";

export const useMenuStore = defineStore('menu', {
    state: ()=>({
        nav_sidebar: [{id: 1, name: 'Хит'}]
    }),
    actions: {
        async getCategory(payload: any){
          console.log('getCategory')
          const response = await useCustomFetch('/category', {})
          console.log(response)
        },
        addCategory(payload:any){
            console.log(payload)
            this.nav_sidebar.push(payload)
        }
    },
    
})