<template>
  <div class="min-h-screen bg-blue-900 flex items-center justify-center overflow-hidden">
    <!-- Background stars -->
    <div class="fixed inset-0 pointer-events-none">
      <div v-for="i in 50" :key="i"
           class="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
           :style="{
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             animationDelay: `${Math.random() * 2}s`
           }">
      </div>
    </div>
    
    <!-- Santa container -->
    <div 
      ref="santa" 
      class="fixed cursor-pointer transform-gpu will-change-transform"
      style="pointer-events: none;"
      @mousemove="moveSanta"
      @touchstart="moveSanta"
      @touchmove="moveSanta"
      @click="playHoHoHo"
    >
      <gift-sack></gift-sack>
      <santa-body></santa-body>
      <santa-head></santa-head>
      <santa-limbs></santa-limbs>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import SantaBody from './components/SantaBody.vue'
import SantaHead from './components/SantaHead.vue'
import SantaLimbs from './components/SantaLimbs.vue'
import GiftSack from './components/GiftSack.vue'
import { useAnimation } from './composables/useAnimation'

const { santa, initAudio, moveSanta, playHoHoHo } = useAnimation()

onMounted(() => {
  initAudio()
  document.addEventListener('mousemove', moveSanta)
  document.addEventListener('click', playHoHoHo)
})
</script>

<style>
.santa-shadow {
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
}

@keyframes twinkle {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
}

.animate-twinkle {
  animation: twinkle 2s infinite;
}
</style>