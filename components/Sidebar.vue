<template>
    <div @click="menuStore.addCategory({id: 4, name: 'Max'})">
        sidebar
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from '../.nuxt/imports';
    import { useMenuStore } from '../store/menu';

    const menuStore = useMenuStore()

    onMounted(() => menuStore.getCategory(''))

</script>

<style lang="scss" scoped>

</style>