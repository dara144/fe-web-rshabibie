export default function animate(swipers, fade = 'in') {
  const currentDirection = swipers.swiperPrev.current.offsetLeft
  const currentOpacity = window.getComputedStyle(swipers.swiperPrev.current).getPropertyValue('opacity')
  for (const key in swipers) {
    const direction = key === 'swiperPrev' ? 'left' : 'right'
    swipers[key].current.animate(
      {
        opacity: [currentOpacity, fade == 'in' ? 1 : 0],
        [direction]: [`${currentDirection}px`, fade == 'in' ? '3%' : '-2%'],
        easing: 'ease-in-out'
      },
      { duration: 500, fill: 'forwards' }
    )
  }
}
