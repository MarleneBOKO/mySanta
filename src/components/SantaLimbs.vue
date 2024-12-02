<template>
    <div>
      <!-- Bras -->
      <div class="absolute -left-8 top-8 w-8 h-24 bg-red-600 rounded-full transform rotate-12"></div>
      <div class="absolute -right-8 top-8 w-8 h-24 bg-red-600 rounded-full transform -rotate-12"></div>
  
      <!-- Jambes -->
      <div class="absolute -bottom-16 left-8 w-8 h-20 bg-red-600 rounded-full"></div>
      <div class="absolute -bottom-16 right-8 w-8 h-20 bg-red-600 rounded-full"></div>
  </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  @media only screen and (max-width: 156px) {
    .absolute {
      width: 5vw; /* Adjust for smaller screens */
      height: auto; /* Maintain aspect ratio */
    }
  }
  </style>