<template>
  <div class="mt-[2vh]">
    <form-label :htmlFor="modifiedId">{{ inputName }} </form-label>
    <input
      :type="inputType"
      :id="modifiedId"
      class="border border-inputBorder rounded-lg w-full h-[5.46875vh] max-w-[548px]"
      :class="customClass"
      :placeholder="inputPlaceholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    inputName: String,
    inputType: {
      default: 'text'
    },
    customClass: String,
    customPlaceholder: String
  },
  computed: {
    inputPlaceholder() {
      return this.customPlaceholder ? this.customPlaceholder.toLowerCase() : this.inputName
    },
    modifiedId() {
      return this.inputName.replace(/\s/g, '')
    }
  }
}
</script>
