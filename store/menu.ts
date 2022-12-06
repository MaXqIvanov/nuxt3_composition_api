import { defineStore } from "pinia";

export const useMenuStore = defineStore('menu', {
    state: ()=>({
        nav_sidebar: [{id: 1, name: 'Хит'}]
    }),
    actions: {
        getCategory(payload: any){
            this.nav_sidebar = payload
        },
        addCategory(payload:any){
            console.log(payload)
            this.nav_sidebar.push(payload)
        }
    },
    
})