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

    currentX = lerp(currentX, targetX, 0.1)
    currentY = lerp(currentY, targetY, 0.1)

    const moveX = targetX - currentX
    const moveY = targetY - currentY
    const rotation = (moveX / window.innerWidth) * 15

    gsap.set(santa.value, {
      x: currentX,
      y: currentY,
      rotation: rotation,
      rotationY: moveX * 0.1,
      rotationX: -moveY * 0.05
    })

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
    const touch = e.touches ? e.touches[0] : e; // Utiliser la première touche

    targetX = touch.clientX - rect.width / 2
    targetY = touch.clientY - rect.height / 2

    if (!animationFrame) {
      updatePosition()
    }
  }

  const playHoHoHo = () => {
    if (audio) {
      audio.currentTime = 0
      audio.play()
      
      gsap.timeline()
        .to(santa .value, { scale: 1.1, duration: 0.1 })
        .to(santa.value, { scale: 1, duration: 0.1 });
    }
  }

  onUnmounted(() => {
    cancelAnimationFrame(animationFrame)
    document.removeEventListener('mousemove', moveSanta)
    document.removeEventListener('click', playHoHoHo)
  })

  return { santa, initAudio, moveSanta, playHoHoHo }
}