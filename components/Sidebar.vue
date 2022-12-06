<template>
    <div class="sidebar">
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
$sodebar_background: black;
.sidebar{
    position: fixed;
    top: 0px;
    left: 0px;
    width: 13vw;
    height: 100vh;
    min-height: 100vh;
    background-color: $sodebar_background;
}
</style>