<template>
  <auth-vue :shouldDisplay="false"> </auth-vue>

  <!-- Main modal -->
  <div
    id="static-modal"
    data-modal-backdrop="static"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-[45vw] max-h-full">
      <!-- Modal content -->
      <div
        class="relative corona-images bg-white rounded-[40px] py-[2vh] px-[3vw] noto-sans-500 box-border shadow w-[45vw]"
      >
        <form @submit.prevent="handleSubmit">
          <div class="py-[1vh] px-[4vw]">
            <img :src="Tata" class="m-auto" />
            <p class="text-center text-[3.125vh] mt-[2vh]">CRM</p>
            <p class="text-[#4880FF] text-center text-[6.93359375vh] mt-[3vh] noto-sans-bold">
              Welcome
            </p>
            <p class="text-center text-[3vh] mt-[1vh] noto-sans-500">Gautam Yadav</p>
            <p class="text-center text-[2vh] mt-[1vh]">Business Solutions</p>
            <!-- <form @submit.prevent="handleSubmit"> -->
            <!-- Use @submit.prevent to prevent default form submission -->

            <form-bottom
              btnClass="!mt-[6vh] "
              button-text="Get Started"
              :shouldDisplay="false"
              :shouldDisplayGoogle="false"
              :shouldDisplayLoginWith="false"
            ></form-bottom>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Modal } from 'flowbite'
import Clogo from '@/assets/img/c-logl.png'
import FormInput from '@/components/Form/FormInput.vue'
import FormBottom from '@/components/Form/FormBottom.vue'
import { useRouter } from 'vue-router'
import Tata from '@/assets/img/tata.png'

const router = useRouter()
let modal // Declare modal outside of onMounted so that it's accessible in onUnmounted

const handleSubmit = () => {
  // Add your form submission logic here
  // For example, redirect to the home page
  window.location.href = '/dashboard'
}

// lifecycle hooks
onMounted(() => {
  // reactive state
  const $targetEl = document.getElementById('static-modal')

  // options with default values
  const options = {
    placement: 'center',
    closable: false
  }

  // instance options object
  const instanceOptions = {
    id: 'modalEl',
    override: true
  }

  modal = new Modal($targetEl, options, instanceOptions)

  // show modal
  modal.show()
})

onUnmounted(() => {
  // Destroy modal when the component is unmounted
  if (modal) {
    modal.destroy()
  }
})
</script>

<style scoped>
.corona-images {
  background:
    url('../../assets/img/corona-left.png') left top 15vh no-repeat,
    url('../../assets/img/corona-right.png') right top 18vh no-repeat;
  background-color: white;
}
</style>
