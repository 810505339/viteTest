<template>
  <swiper
      :slides-per-view="1"
      :space-between="50"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
</template>

<script lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue'

export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style scoped>

</style>
