<template>
  <div class="h-screen bg-primary w-full">
    <div class="grid grid-cols-12">
      <div class="col-span-7 flex flex-col bg-left-image-login z-10">
        <div class="h-[50vh] mt-[10vh] w-full">
          <div class="w-[80%] m-auto relative">
            <img :src="img.starImg" class="absolute left-[28vw] top-[-8vh]" />
            <div class="align-middle">
              <p class="noto-sans-bold text-[62px] font-bold text-white leading-10">Hello</p>
              <p class="noto-sans-bold text-[62px] font-bold text-white leading-11">
                Igniculuss 👋🏻
              </p>
            </div>
          </div>
        </div>
        <img :src="img.sunImg" alt="Sun Image" class="mx-auto" />
      </div>
      <div class="col-span-5 bg-white"></div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import SunImg from '@/assets/img/Union.svg'
import StarImg from '@/assets/img/Subtract.svg'

export default {
  setup() {
    const img = reactive({
      sunImg: SunImg,
      starImg: StarImg
    })

    return { img }
  }
}
</script>

<style scoped>
.bg-left-image-login {
  background-image: url('./assets/img/login-bg.png');
}
</style>
