<template>
    <div>
        
    </div>
</template>

<script setup lang="ts">
import { useMenuStore } from "../../store/menu"

const menuStore = useMenuStore()
menuStore.getProods()
</script>

<style lang="scss" scoped>

</style>