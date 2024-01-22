<script setup>
import { RouterView } from 'vue-router'
import { Toaster } from 'vue-sonner'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar />
  <RouterView />
  <Toaster richColors />
</template>
