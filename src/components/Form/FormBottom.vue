<template>
  <div class="text-center">
    <button
      class="leading-[2.990234375vh] max-w-[376px] mt-[6vh] w-[22.9166666667vw] h-[6.93359375vh] py-[1.953125vh] px-[2.5vw] bg-primary text-white rounded-md text-[2.34375vh] nato-sans-bold"
      :class="btnClass"
    >
      {{ buttonText }}
    </button>
    <fieldset v-if="shouldDisplayLoginWith" class="title my-[2vh]">
      <legend class="text-[1.953125vh]">Or login with</legend>
    </fieldset>
    <router-link
      v-if="shouldDisplayGoogle"
      to=""
      class="mx-auto avenir-font py-[1vh] mt-[3vh] max-w-[376px] rounded-lg border border-[#333333] inline-block w-[30.8333333333vw] flex justify-center h-[6vh] text-[1.953125vh]"
    >
      <div class="flex items-center m-auto">
        <Icon icon="flat-color-icons:google" class="text-center" />
        &nbsp; Continue with Google
      </div>
    </router-link>
  </div>
  <p v-if="shouldDisplay" class="mt-[3vh] font-[300]">
    {{ routeText }} &nbsp;<router-link
      v-if="shouldDisplay"
      :to="{ name: currentRoute }"
      class="noto-sans-500 underline text-blue-500"
      >{{ authText }}</router-link
    >
  </p>
</template>

<script>
export default {
  data() {
    return {
      currentRoute: '',
      routeText: '',
      authText: ''
    }
  },
  props: {
    buttonText: String,
    btnClass: String,
    shouldDisplay: {
      default: true
    },
    shouldDisplayGoogle: {
      default: true
    },
    shouldDisplayLoginWith: {
      default: true
    }
  },
  mounted() {
    if (this.$route.name == 'auth.register') {
      this.currentRoute = 'auth.login'
      this.routeText = 'Already have an account?'
      this.authText = 'Login'
    } else {
      this.currentRoute = 'auth.register'
      this.routeText = 'Don`t have an account?'
      this.authText = 'Create'
    }
  }
}
</script>
<style scoped>
fieldset.title {
  border-top: 1px solid #aaa;
  border-bottom: none;
  border-left: none;
  border-right: none;
  display: block;
  text-align: center;
}

fieldset.title legend {
  padding: 5px 10px;
}
</style>
