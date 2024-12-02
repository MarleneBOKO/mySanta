import { ref, onUnmounted } from 'vue'
import gsap from 'gsap'

export function useAnimation() {
  const santa = ref(null)
  let audio
  let animationFrame
  let currentX = 0
  let currentY = 0
  let targetX = 0
  let targetY = 0

  const initAudio = () => {
    audio = new Audio('/ho-ho-ho.mp3')
    audio.volume = 0.5
  }

  const lerp = (start, end, factor) => {
    return start + (end - start) * factor
  }

  const updatePosition = () => {
    if (!santa.value) return

    // Smooth interpolation between current and target positions
    currentX = lerp(currentX, targetX, 0.1)
    currentY = lerp(currentY, targetY, 0.1)

    // Calculate rotation based on movement direction
    const moveX = targetX - currentX
    const moveY = targetY - currentY
    const rotation = (moveX / window.innerWidth) * 15

    // Apply transforms
    gsap.set(santa.value, {
      x: currentX,
      y: currentY,
      rotation: rotation,
      rotationY: moveX * 0.1,
      rotationX: -moveY * 0.05
    })

    // Add bobbing motion
    const bobbingY = Math.sin(Date.now() / 500) * 5
    gsap.to(santa.value, {
      y: currentY + bobbingY,
      duration: 0.1,
      ease: "none"
    })

    animationFrame = requestAnimationFrame(updatePosition)
  }

  const moveSanta = (e) => {
    if (!santa.value) return

    const rect = santa.value.getBoundingClientRect()
    
    // Calculate target position relative to cursor
    targetX = e.clientX - rect.width / 2
    targetY = e.clientY - rect.height / 2

    // Start animation loop if not already running
    if (!animationFrame) {
      updatePosition()
    }
  }

  const playHoHoHo = () => {
    if (audio) {
      audio.currentTime = 0
      audio.play()
      
      // Bouncy click animation
      gsap.timeline()
        .to(santa.value, {
          scale: 1.2,
          duration: 0.15,
          ease: "power2.out"
        })
        .to(santa.value, {
          scale: 1,
          duration: 0.4,
          ease: "elastic.out(1, 0.3)"
        })

      // Add a little spin on click
      gsap.to(santa.value, {
        rotation: "+=360",
        duration: 0.8,
        ease: "power2.inOut"
      })
    }
  }

  // Cleanup animation frame on component unmount
  onUnmounted(() => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame)
    }
  })

  return {
    santa,
    initAudio,
    moveSanta,
    playHoHoHo
  }
}