<template>
  <auth-vue>
    <div class="pt-[18vh] w-[38.0555555556vw] max-w-[376px] m-auto">
      <!-- <p class="noto-sans-bold text-seccondary text-[3.90625vh]">Log In</p> -->
      <form-heading>Log In</form-heading>
      <div class="mt-[5vh]">
        <Form @submit="handleSubmit">
          <form-label htmlFor="Username">Username </form-label>
          <Field
            type="text"
            id="Username"
            name="Username"
            class="border border-inputBorder rounded-lg w-full h-[5.46875vh] max-w-[376px]"
            placeholder="Username"
            :rules="validateUsername"
          />
          <ErrorMessage name="Username" />

          <form-input v-model="formData.password" inputName="Password" inputType="password" />
          <form-bottom button-text="Submit"></form-bottom>
        </Form>
      </div>
    </div>
  </auth-vue>
</template>

<script setup>
import { ref } from 'vue'
import FormBottom from '@/components/Form/FormBottom.vue'
import FormInput from '@/components/Form/FormInput.vue'
import FormHeading from '@/components/Form/FormHeading.vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup';
const formData = ref({
  username: '',
  password: ''
})

const handleSubmit = (value) => {
  console.log(value)
}
const validateUsername = (value) => {
  if (!value) {
    return 'this field is required'
  }
  console.log(value)
}
</script>
