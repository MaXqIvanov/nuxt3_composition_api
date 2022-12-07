<template>
    <div class="sidebar">
        <div class="logo sidebar__logo"></div>
        <div class="number sidebar__number">(953) 523-83-49</div>
        <div class="sidebar__work_time">Время работы: Круглосуточно</div>
        <div v-if="(menuStore.category !== null)" class="category sidebar__category">
            <div class="category__one" v-for="category_one in menuStore.category" :key="category_one._id">1</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from '../.nuxt/imports';
    import { useMenuStore } from '../store/menu';

    const menuStore = useMenuStore()
    menuStore.getCategory()

</script>

<style lang="scss" scoped>
$sodebar_background: black;
.category__one{
    border: 2px solid white;
    height: 50px;
    width: 100%;
}
.category{
    display: flex;
    flex-direction: column;
    align-items: center;
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