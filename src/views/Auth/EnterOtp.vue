<template>
  <auth-vue>
    <div class="mt-[20vh] max-w-[576px] m-auto">
      <form-heading tagLine="Enter the one-time password sent to your mobile number."
        >Verify Your sign up
        <template v-slot:para
          >Enter the one-time password sent to your mobile number.</template
        ></form-heading
      >
    </div>
    <div class="pt-[4vh] max-w-[376px] w-[38.0555555556vw] m-auto">
      <div class="]">
        <form method="post" @submit.prevent="handleSubmit">
          <div class="justify-between flex my-[2vh]">
            <label for="otp" class="nato-sans-500 text-[1.953125vh]">789636487895</label>
            <a href="" class="text-hyperLink underline">Change</a>
          </div>
          <input
            :type="inputType"
            :id="modifiedId"
            class="border border-primary max-w-[376px] rounded-lg w-full h-[5.46875vh]"
            :class="customClass"
            :placeholder="inputPlaceholder"
          />
          <div class="justify-between flex my-[2vh]">
            <label class="nato-sans-500 text-[1.7vh]">Resend in 42s</label>
            <a href="" class="text-hyperLink underline">Choose other way</a>
          </div>
          <form-bottom
            btnClass="mt-[4vh]"
            button-text="Verify"
            :shouldDisplay="false"
            :shouldDisplayGoogle="false"
            :shouldDisplayLoginWith="false"
          ></form-bottom>
          <p class="mt-[2vh] text-center text-[1.5625] nato-bold">OTP Sent Successfully</p>
        </form>
      </div>
    </div>
  </auth-vue>
</template>
<script>
import FormBottom from '@/components/Form/FormBottom.vue'
import FormInput from '@/components/Form/FormInput.vue'
import FormHeading from '@/components/Form/FormHeading.vue'
// import Select2 from 'vue3-select2-component'
export default {
  components: {
    FormBottom,
    FormInput,
    FormHeading
    // Select2
  },
  methods: {
    handleSubmit() {
      this.$router.push({ name: 'auth.add-company' })
    }
  }
}
</script>
