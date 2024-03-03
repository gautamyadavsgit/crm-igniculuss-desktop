<template>
  <div class="h-auto w-full bg-[#E4E6ED]">
    <div class="grid grid-cols-12">
      <side-bar />
      <div class="col-span-10">
        <nav-bar></nav-bar>
        <div class="p-3">
        <router-view mode="out-in" v-slot="{ Component, route }">
          <transition>
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
      </div>
    </div>
  </div>
  <span class="clear-both"></span>
</template>

<script setup>
import NavBar from './Components/NavBar.vue'
import SideBar from './Components/SideBar.vue'
</script>
