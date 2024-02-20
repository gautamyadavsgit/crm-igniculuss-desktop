import router from '@/router';
<template>
  <auth-vue>
    <div class="pt-[18vh] w-[38.0555555556vw] m-auto">
      <p class="noto-sans-bold text-seccondary text-[3.90625vh]">Log In</p>
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

export default {
  components: {
    FormBottom,
    FormInput
  }
}
</script>

