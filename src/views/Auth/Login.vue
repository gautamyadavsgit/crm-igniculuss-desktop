import router from '@/router';
<template>
  <auth-vue>
    <div class="pt-[18vh] w-[38.0555555556vw] max-w-[376px] m-auto">
      <!-- <p class="noto-sans-bold text-seccondary text-[3.90625vh]">Log In</p> -->
      <form-heading>Log In</form-heading>
      <div class="mt-[5vh]">
        <form>
          <form-input inputName="Username" inputType="text" />
          <form-input inputName="Password" inputType="password" />
          <form-bottom button-text="Submit"></form-bottom>
        </form>
      </div>
    </div>
  </auth-vue>
</template>
<script>
import FormBottom from '@/components/Form/FormBottom.vue'
import FormInput from '@/components/Form/FormInput.vue'
import FormHeading from '@/components/Form/FormHeading.vue'

export default {
  components: {
    FormBottom,
    FormInput,
    FormHeading
  }
}
</script>
