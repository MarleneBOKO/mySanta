<template>
    <div class="absolute -top-24 left-1/2 transform -translate-x-1/2">
      <!-- Visage -->
      <div class="w-32 h-32 bg-[#FFE4C4] rounded-full relative">
        <!-- Yeux -->
        <div class="absolute top-12 left-8 w-4 h-4 bg-black rounded-full"></div>
        <div class="absolute top-12 right-8 w-4 h-4 bg-black rounded-full"></div>
        
        <!-- Nez -->
        <div class="absolute top-16 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full"></div>
        
        <!-- Barbe -->
        <div class="absolute top-[90px] w-full h-20 bg-white rounded-b-full"></div>
      </div>
  
      <!-- Bonnet -->
      <div class="absolute -top-12 w-full">
        <div class="w-32 h-16 bg-red-600 rounded-t-full"></div>
        <div class="absolute -top-4 right-0 w-8 h-8 bg-white rounded-full"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>

<style lang="scss" scoped>

</style>