export const scrollAnimationHandler = (animation: string) => {
  const target = Array.from(document.getElementsByClassName(animation))

  target.forEach((c) => {
    const windowHeight = window.innerHeight
    const elementTop = c.getBoundingClientRect().top
    const elementVisible = 100

    if (elementTop < windowHeight - elementVisible) {
      c.classList.add('active')
    } else {
      c.classList.remove('active')
    }
  })
}

export const addAnimation = (className: string, animation: string) => {
  Array.from(document.getElementsByClassName(className)).forEach((c) => {
    c.classList.add(animation)
  })
}
