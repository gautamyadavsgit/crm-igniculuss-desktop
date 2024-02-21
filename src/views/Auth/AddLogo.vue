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
        class="relative bg-white rounded-[40px] py-[6vh] px-[3vw] noto-sans-500 box-border shadow w-[45vw]"
      >
        <h2 class="text-[2.34375vh] text-center">Add Company Logo</h2>
        <div class="mt-[2vh] py-[2vh] px-[4vw]">
          <form @submit.prevent="handleSubmit">
            <!-- Use @submit.prevent to prevent default form submission -->
            <label for="company-logo" class="block">
              <img :src="Clogo" class="m-auto" />
              <p class="text-center mt-[2vh] text-[1.171875vh] text-[#676767]">
                Supported formats: JPEG, PNG, GIF, MP4, PDF,
              </p>
              <input type="file" id="company-logo" class="hidden" />
            </label>

            <form-input inputName="Company Name" />
            <form-bottom
              btnClass="!mt-[6vh]"
              button-text="Verify"
              :shouldDisplay="false"
              :shouldDisplayGoogle="false"
              :shouldDisplayLoginWith="false"
            ></form-bottom>
          </form>
        </div>
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

const router = useRouter()
let modal // Declare modal outside of onMounted so that it's accessible in onUnmounted

const handleSubmit = () => {
  // Add your form submission logic here
  // For example, redirect to the home page
  router.push({ name: 'auth.welcome' })
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
