<template>
    <div class="sidebar">
        <div @click="navigateTo('/')" class="logo sidebar__logo"></div>
        <div class="number sidebar__number">(953) 523-83-49</div>
        <div class="sidebar__work_time">Время работы: Круглосуточно</div>
        <div v-if="(menuStore.category !== null)" class="category sidebar__category">
            <div class="category__one" v-for="category_one in menuStore.category" :key="category_one._id" @click="navigateTo(`/menu/${category_one.navigate}`)">
                <div class="category__one__name">
                    {{category_one.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { navigateTo } from '../.nuxt/imports';
    import { useMenuStore } from '../store/menu';

    const menuStore = useMenuStore()
    menuStore.getCategory()
</script>

<style lang="scss" scoped>
$sodebar_background: black;
.category__one__name{
    font-size: 80%;
}
.category__one{
    height: 8%;
    width: 100%;
    cursor: pointer;
    box-shadow: 0 1.5px 2px -2px gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.category{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
}

.sidebar__work_time{
    font-size: 0.65vw;
    font-weight: 500;
}
.sidebar__number{
    font-weight: 700;
    font-size: 1.5vw;
}
.sidebar__logo{
    margin-top: 10%;
    height: 7vw;
    width: 90%;
    background-image: url('../assets/Logo.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    cursor: pointer;
}
.sidebar{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 13vw;
    height: 100vh;
    min-height: 100vh;
    background-color: $sodebar_background;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
}
</style>