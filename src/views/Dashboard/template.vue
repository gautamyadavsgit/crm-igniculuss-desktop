<template>
  <div class="h-auto w-full bg-[#E4E6ED]">
    <div class="grid grid-cols-12">
      <div class="col-span-2">
        <div class="h-screen bg-white min-w-[236px] p-2">
          <div class="p-2 border-b">
            <img :src="logo" class="w-28 h-28 m-auto" />
          </div>
          <div class="w-full px-2 py-1 text-center">
            <a href="" class="m-auto bg-white active flex p-3 rounded-lg justify-start"
              ><img :src="homeWhite" class="object-contain" /> &nbsp; &nbsp;
              <span class="noto-sans-500 text-base">Home</span></a
            >
          </div>

          <div class="w-full px-2 py-1 text-center">
            <a href="" class="m-auto bg-white flex p-3 rounded-lg justify-start"
              ><img :src="leadIcon" class="object-contain" /> &nbsp; &nbsp;
              <span class="noto-sans-500 text-base">Leads</span></a
            >
          </div>
          <div class="w-full px-2 py-1 text-center">
            <a href="" class="m-auto bg-white flex p-3 rounded-lg justify-start"
              ><img :src="ContactIcon" class="object-contain" /> &nbsp; &nbsp;
              <span class="noto-sans-500 text-base">Contacts</span></a
            >
          </div>
          <div class="w-full px-2 py-1 text-center">
            <a href="" class="m-auto bg-white flex p-3 rounded-lg justify-start"
              ><img :src="AccountsLogo" class="object-contain" /> &nbsp; &nbsp;
              <span class="noto-sans-500 text-base">Accounts</span></a
            >
          </div>
          <div class="w-full px-2 py-1 text-center">
            <a href="" class="m-auto bg-white flex p-3 rounded-lg justify-start"
              ><img :src="DealsLogo" class="object-contain" /> &nbsp; &nbsp;
              <span class="noto-sans-500 text-base">Deals</span></a
            >
          </div>
          <div class="w-full px-2 py-1 text-center">
            <a href="" class="m-auto bg-white flex p-3 rounded-lg justify-start"
              ><img :src="TasksLogo" class="object-contain" /> &nbsp; &nbsp;
              <span class="noto-sans-500 text-base">Tasks</span></a
            >
          </div>
          <div class="w-full px-2 py-1 text-center">
            <a href="" class="m-auto bg-white flex p-3 rounded-lg justify-start"
              ><img :src="MeetingsIcon" class="object-contain" /> &nbsp; &nbsp;
              <span class="noto-sans-500 text-base">Meetings</span></a
            >
          </div>
          <div class="w-full px-2 py-1 text-center">
            <a href="" class="m-auto bg-white flex p-3 rounded-lg justify-start"
              ><img :src="CallVolume" class="object-contain" /> &nbsp; &nbsp;
              <span class="noto-sans-500 text-base">Calls</span></a
            >
          </div>
          <div class="w-full px-2 py-1 text-center">
            <a href="" class="m-auto bg-white flex p-3 rounded-lg justify-start"
              ><img :src="ReportsIcon" class="object-contain" /> &nbsp; &nbsp;
              <span class="noto-sans-500 text-base">Reports</span></a
            >
          </div>
          <div class="w-full px-2 py-1 text-center">
            <a href="" class="m-auto bg-white flex p-3 rounded-lg justify-start"
              ><img :src="SalesOrder" class="object-contain" /> &nbsp; &nbsp;
              <span class="noto-sans-500 text-base">Sales Order</span></a
            >
          </div>
          <div class="w-full px-2 py-1 text-center">
            <a href="" class="m-auto bg-white flex p-3 rounded-lg justify-start"
              ><img :src="AnalyticsIcon" class="object-contain" /> &nbsp; &nbsp;
              <span class="noto-sans-500 text-base">Analytics</span></a
            >
          </div>
        </div>
      </div>
      <div class="col-span-10"></div>
    </div>
    <!-- <router-view mode="out-in" v-slot="{ Component, route }"> -->
    <!-- Use any custom transition and  to `fade` -->
    <!-- <transition>
        <component :is="Component" />
      </transition>
    </router-view> -->
  </div>
  <span class="clear-both"></span>
</template>

<script setup>
import logo from '@/assets/img/logo.png'

import homeWhite from '@/assets/img/icons/home-smile-svgrepo-com1.png'
import leadIcon from '@/assets/img/icons/user-id-svgrepo-com1.png'
import ContactIcon from '@/assets/img/icons/contact-book-svgrepo-com1.png'
import AccountsLogo from '@/assets/img/icons/Vector.png'
import DealsLogo from '@/assets/img/icons/sale-svgrepo-com1.png'
import TasksLogo from '@/assets/img/icons/tasks-badged-svgrepo-com 1.png'
import MeetingsIcon from '@/assets/img/icons/group-discussion-meetingx3-svgrepo-com 1.png'
import CallVolume from '@/assets/img/icons/call-volume-svgrepo-com 1.png'
import ReportsIcon from '@/assets/img/icons/brand-google-analytics-svgrepo-com 1.png'
import SalesOrder from "@/assets/img/icons/Group.png"
import AnalyticsIcon from "@/assets/img/icons/analytics-business-chart-svgrepo-com 1.png"
</script>
