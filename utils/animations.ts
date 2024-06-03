export const titleAnimation = {
  initial: {
    opacity: 0,
    x: -300,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05,
      duration: 0.8,
    },
  },
}

export const formAnimation = {
  initial: {
    opacity: 0,
    x: -300,
  },
  animate: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: delay,
      duration: 0.4,
    },
  }),
}
