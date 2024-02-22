<template>
  <auth-vue>
    <div class="pt-[4vh] max-w-[548px] w-[38.0555555556vw] m-auto">
      <p class="noto-sans-bold text-seccondary text-[3.90625vh]">Create Your Account</p>
      <div class="mt-[5vh]">
        <form action="javascript:void(0)" @submit="handleSubmit" method="post">
          <form-input inputName="First Name" />
          <form-input inputName="Last Name" />
          <form-input inputName="Email" customPlaceholder="abc@gmail.com" inputType="email" />
          <form-input inputName="Contact Input" customPlaceholder="+91" inputType="email" />
          <form-input inputName="Country" customPlaceholder="india" />
          <form-bottom
            btnClass="mt-[4vh]"
            button-text="Submit"
            :shouldDisplay="false"
          ></form-bottom>
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
      this.$router.push({
        name: 'auth.enterotp'
      })
    }
  }
  // mounted(){
  // $('#gautam').select2()
  // }
}
</script>
