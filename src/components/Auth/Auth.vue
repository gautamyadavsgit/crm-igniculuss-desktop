<template>
  <div class="h-screen w-full bg-primary">
    <!-- <div class="bg-left-image-login h-screen"></div> -->
    <div class="grid grid-cols-16">
      <div class="col-span-10 flex flex-col justify-between align-center z-10 h-screen">
        <div></div>
        <div v-if="shouldDisplay" class="">
          <div class="w-[70%] m-auto relative mt-[5vh]">
            <img
              :src="img.starImg"
              class="absolute w-[4.583vw] h-[8.0078125vh] left-[11vw] top-[-4vh]"
            />
            <div class="align-middle">
              <p class="noto-sans-bold text-[6.0546875vh] font-bold text-white leading-[7vh]">
                Hello
              </p>
              <p class="noto-sans-bold text-[6.0546875vh] font-bold text-white leading-[7vh]">
                Igniculuss 👋🏻
              </p>
            </div>
            <p class="noto-sans-bold font-bold text-[1.953125vh] text-white mt-[5vh]">
              Skip repetitive and manual sales-marketing tasks.Get highly productive through
              automation and save tons of time!
            </p>
          </div>
        </div>
        <img :src="img.sunImg" alt="Sun Image" class="mx-auto w-[17.986vw] h-[13.28125vh]" />
      </div>
      <div class="col-span-6 bg-white" :class="addBgClass">
        <slot v-if="shouldDisplay"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import SunImg from '@/assets/img/Union.svg'
import StarImg from '@/assets/img/Subtract.svg'

export default {
  props: {
    shouldDisplay: {
      default: true
    }
  },
  setup() {
    const img = reactive({
      sunImg: SunImg,
      starImg: StarImg
    })

    return { img }
  },
  computed: {
    addBgClass() {
      return this.shouldDisplay ? '' : '!bg-transparent'
    }
  }
}
</script>
