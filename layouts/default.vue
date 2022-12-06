<template>
    <div>
        <Header />
        <Sidebar />
        <div class="content">
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
$background_color: black;
.content{
    margin-top: 60px;
    margin-left: 13vw;
    background-color: $background_color;
    min-height: calc(100vh - 60px);
    height: fit-content;
}
</style>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600;700&display=swap');
html, body{
    padding: 0px;
    margin: 0px;
    font-family: 'Open Sans', sans-serif;
    overflow-y: auto;
}
</style>