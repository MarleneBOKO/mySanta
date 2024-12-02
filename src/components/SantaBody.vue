<template>
    <div class="santa-body w-40 h-48 bg-red-600 rounded-3xl relative">
      <!-- Ceinture -->
      <div class="absolute bottom-10 w-full h-8 bg-black"></div>
      <div class="absolute bottom-11 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-lg"></div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  @media only screen and (max-width: 156px) {
    .santa-body {
      width: 25vw; /* Adjust for smaller screens */
      height: auto; /* Maintain aspect ratio */
    }
  }
  </style>