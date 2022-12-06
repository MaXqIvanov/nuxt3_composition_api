<template>
  <div>
    {{new_var}}
  </div>
</template>

<script lang="ts" setup>
  import { useHead } from './.nuxt/imports';
  useHead({
    title: 'Pizza Mafia',
    meta: [
      { name: 'description', content: 'Pizza Mafia - best pizza' }
    ],
    bodyAttrs: {
      class: 'test'
    },
    script: [ { children: 'console.log(\'Hello world\')' } ]
  })

  const new_var = '123'

</script>

<style lang="scss" scoped>

</style>
