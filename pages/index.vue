<template>
    <div>
        <v-carousel
        height="25vw"
        cycle
        class="carouser__item"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-sheet
            class="image"
            :style="{backgroundImage: `url(${img_slide[i]})`}"
            height="100%"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="text-h2">
                {{ slide }}
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
</template>

<script setup lang="ts">
import slide0 from '~/assets/slide.jpeg'
import slide1 from '~/assets/slide2.jpeg'
import slide2 from '~/assets/slide3.jpeg'

const slides = [
    '',
    '',
    '',
]
const img_slide = [
    slide0,
    slide1,
    slide2
]
</script>

<style lang="scss" scoped>
.image{
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>