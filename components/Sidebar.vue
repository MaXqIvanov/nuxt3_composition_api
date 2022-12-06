<template>
    <div @click="menuStore.addCategory({id: 4, name: 'Max'})">
        sidebar
    </div>
</template>

<script setup lang="ts">
    import { useMenuStore } from '../store/menu';

    const menuStore = useMenuStore()
    console.log(menuStore.nav_sidebar)

</script>

<style lang="scss" scoped>

</style>