<template>
  <auth-vue>
    <div class="pt-[4vh] w-[38.0555555556vw] m-auto">
      <div class="mt-[20vh]">
        <p class="mt-[6vh] noto-sans-500">Instant access</p>
        <p class="mt-[10vh] noto-sans-500 text-[2.34375vh] nato-bold">Verify Your Sign-up</p>
        <p class="mt-[1vh] text-[1.5625] nato-bold">
          Enter the one-time password sent to your mobile number.
        </p>
        <form method="post" @submit="handleSubmit">
          <div class="justify-between flex my-[2vh]">
            <label for="otp" class="nato-sans-500 text-[1.953125vh]">789636487895</label>
            <a href="" class="text-hyperLink underline">Change</a>
          </div>
          <input
            :type="inputType"
            :id="modifiedId"
            class="border border-primary rounded-lg w-full h-[5.46875vh]"
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
// import Select2 from 'vue3-select2-component'
export default {
  components: {
    FormBottom,
    FormInput
    // Select2
  },
  methods: {
    handleSubmit() {
      this.$router.push({name:'auth.add-company'})
    }
  }
}
</script>
