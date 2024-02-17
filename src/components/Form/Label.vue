<template>
  <label :for="htmlFor" class="noto-sans-500 block my-[1vh] text-[1.171875vh]" :class="class"><slot></slot></label>
</template>

<script>
export default {
  props: {
    htmlFor: String,
    class: String
  }
}
</script>
