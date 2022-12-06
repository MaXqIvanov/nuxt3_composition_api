<template>
    <div class="header">
        <div class="info header__info">11</div>
        <div class="profile header__profile"><Icon name="mdi:cart-outline"></Icon></div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
$background_header: #282828;
$color_header: white;

.header__profile{
    font-size: 2.5vw;
}
.header{
    position: fixed;
    top: 0px;
    left: 13vw;
    width: calc(87vw);
    height: 60px;
    background: $background_header;
    color: $color_header;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-between;
}
</style>