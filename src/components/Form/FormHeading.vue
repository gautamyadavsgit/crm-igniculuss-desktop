<template>
  <div class="flex justify-start">
    <img :src="SubtractBB" class="object-contain" /> &nbsp;
    <p class="noto-sans-bold text-secondary text-[3.90625vh]"><slot></slot></p>
  </div>
  <slot name="para"></slot>
  <p v-if="!hasParaslot">Free Forever No credit Card Needed</p>
</template>

<script setup>
import SubtractBB from '@/assets/img/Subtract-bb.png'

import { useSlots } from 'vue'

const slots = useSlots()

var hasParaslot = slots.para
</script>
