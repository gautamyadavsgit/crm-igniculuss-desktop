<template>
  <div class="mt-[2vh] m-auto">
    <form-label :htmlFor="modifiedId">{{ inputName }} </form-label>
    <Field
      :type="inputType"
      :id="modifiedId"
      :name="modifiedId"
      :class="computedClass"
      :placeholder="inputPlaceholder"
 
    />
    <ErrorMessage :name="modifiedId" />
  </div>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate'

export default {
  props: {
    inputName: String,
    inputType: {
      default: 'text'
    },
    customClass: String,
    customPlaceholder: String
  },
  components: {
    Field,
    ErrorMessage
  },
  computed: {
    computedClass() {
      return (
        'border border-inputBorder rounded-lg w-full h-[5.46875vh] max-w-[376px] ' +
        this.customClass
      )
    },
    inputPlaceholder() {
      return this.customPlaceholder ? this.customPlaceholder.toLowerCase() : this.inputName
    },
    modifiedId() {
      return this.inputName.replace(/\s/g, '')
    }
  }

}
</script>
