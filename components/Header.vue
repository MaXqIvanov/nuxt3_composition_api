<template>
    <div class="header">
        <div class="info header__info">11</div>
        <div class="profile header__profile">
            <Icon name="mdi:cart-outline"></Icon>
            <div class="separate__line"></div>
            <div class="products">
                <div class="products__count">0 руб</div>
                <div class="products__costs">0 шт.</div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
$background_header: #282828;
$color_header: white;
.separate__line{
    height: 40px;
    width: 0.12vw;
    min-width: 1px;
    background: white;
    margin-right: 14px;
    margin-left: 10px;
}
.products__costs{
    font-size: 1.1vw;
    font-weight: 700;
    @media(min-width: 1500px){
        font-size: 0.7vw;
    }
}
.products__count{
    font-size: 1.3vw;
    font-weight: 600;

    @media(min-width: 1500px){
        font-size: 0.9vw;
    }
}
.products{
    display: flex;
    flex-direction: column;
}
.header__profile{
    position: relative;
    display: flex;
    align-items: center;
    svg{
        font-size: 2.4vw;
        cursor: pointer;
    }
    @media(min-width: 1500px){
        svg{
            font-size: 1.8vw;
        }
    }
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