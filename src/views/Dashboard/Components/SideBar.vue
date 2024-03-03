<template>
    <div class="col-span-2">
    <div class="h-screen bg-primary min-w-[236px] p-2">
      <div class="p-4 border-b border-[#E4E7ED] my-6 w-8/12 m-auto">
        <img :src="logo" class="w-[84px] h-[84px] m-auto rounded-full" />
      </div>
      <div class="w-full px-2 py-1 text-center">
        <a href="" class="m-auto active flex p-3 rounded-lg justify-start"
          ><img :src="homeWhite" class="object-contain" /> &nbsp; &nbsp;
          <span class="noto-sans-500 text-base text-white">Home</span></a
        >
      </div>

      <div class="w-full px-2 py-1 text-center">
        <a href="" class="m-auto flex p-3 rounded-lg justify-start"
          ><img :src="leadIcon" class="object-contain" /> &nbsp; &nbsp;
          <span class="noto-sans-500 text-base text-white">Leads</span></a
        >
      </div>
      <div class="w-full px-2 py-1 text-center">
        <a href="" class="m-auto flex p-3 rounded-lg justify-start"
          ><img :src="ContactIcon" class="object-contain text-white" /> &nbsp; &nbsp;
          <span class="noto-sans-500 text-base text-white">Contacts</span></a
        >
      </div>
      <div class="w-full px-2 py-1 text-center">
        <a href="" class="m-auto flex p-3 rounded-lg justify-start"
          ><img :src="AccountsLogo" class="object-contain" /> &nbsp; &nbsp;
          <span class="noto-sans-500 text-base text-white">Accounts</span></a
        >
      </div>
      <div class="w-full px-2 py-1 text-center">
        <a href="" class="m-auto flex p-3 rounded-lg justify-start"
          ><img :src="DealsLogo" class="object-contain" /> &nbsp; &nbsp;
          <span class="noto-sans-500 text-base text-white">Deals</span></a
        >
      </div>
      <div class="w-full px-2 py-1 text-center">
        <a href="" class="m-auto flex p-3 rounded-lg justify-start"
          ><img :src="TasksLogo" class="object-contain" /> &nbsp; &nbsp;
          <span class="noto-sans-500 text-base text-white">Tasks</span></a
        >
      </div>
      <div class="w-full px-2 py-1 text-center">
        <a href="" class="m-auto flex p-3 rounded-lg justify-start"
          ><img :src="MeetingsIcon" class="object-contain" /> &nbsp; &nbsp;
          <span class="noto-sans-500 text-base text-white">Meetings</span></a
        >
      </div>

      <div class="w-full px-2 py-1 text-center">
        <a href="" class="m-auto flex p-3 rounded-lg justify-start"
          ><img :src="CallVolume" class="object-contain" /> &nbsp; &nbsp;
          <span class="noto-sans-500 text-base text-white">Calls</span></a
        >
      </div>
      <div class="w-full px-2 py-1 text-center">
        <a href="" class="m-auto flex p-3 rounded-lg justify-start"
          ><img :src="SalesOrder" class="object-contain" /> &nbsp; &nbsp;
          <span class="noto-sans-500 text-base text-white">Sales Order</span></a
        >
      </div>
      <div class="w-full px-2 py-1 text-center">
        <a href="" class="m-auto flex p-3 rounded-lg justify-start"
          ><img :src="AnalyticsIcon" class="object-contain" /> &nbsp; &nbsp;
          <span class="noto-sans-500 text-base text-white">Analytics</span></a
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import logo from '@/assets/img/logo.png'

import homeWhite from '@/assets/img/icons/dashboard-white/home-2-svgrepo-com 1.png'
import leadIcon from '@/assets/img/icons/dashboard-white/account-svgrepo-com 4.png'
import ContactIcon from '@/assets/img/icons/dashboard-white/account-management-svgrepo-com 1.png'
import AccountsLogo from '@/assets/img/icons/dashboard-white/account-svgrepo-com 4.png'
import DealsLogo from '@/assets/img/icons/dashboard-white/deal-svgrepo-com 1.png'
import TasksLogo from '@/assets/img/icons/dashboard-white/tasks-app-svgrepo-com 2.png'
import MeetingsIcon from '@/assets/img/icons/dashboard-white/meeting-discussion-svgrepo-com 1.png'
import CallVolume from '@/assets/img/icons/dashboard-white/phone-incoming-svgrepo-com 1.png'
import SalesOrder from '@/assets/img/icons/dashboard-white/Group (1).png'
import AnalyticsIcon from '@/assets/img/icons/dashboard-white/analytics-svgrepo-com 1.png'
</script>