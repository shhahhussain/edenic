import { Variants } from 'framer-motion'
import { animationTokens } from './tokens'

export const pageVariants: Variants = {
  initial: {
    opacity: 1
  },
  exit: {
    opacity: 0,
    transition: {
      duration: animationTokens.transitions.page.fadeOut.duration / 1000,
      ease: animationTokens.transitions.page.fadeOut.ease
    }
  },
  enter: {
    opacity: 1,
    transition: {
      duration: animationTokens.transitions.page.fadeIn.duration / 1000,
      ease: animationTokens.transitions.page.fadeIn.ease
    }
  }
}

export const heroVariants: Variants = {
  initial: {
    scale: 0.9,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: animationTokens.transitions.hero.initialLoad.duration / 1000,
      ease: animationTokens.transitions.hero.initialLoad.ease
    }
  },
  bob: {
    y: [0, -10, 0],
    rotate: [0, -5, 0],
    transition: {
      duration: animationTokens.transitions.hero.bob.duration / 1000,
      ease: animationTokens.transitions.hero.bob.ease,
      repeat: Infinity
    }
  }
}

export const headerVariants: Variants = {
  initial: {
    backdropFilter: 'blur(0px)',
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  scrolled: {
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    transition: {
      duration: animationTokens.transitions.header.scroll.duration / 1000,
      ease: animationTokens.transitions.header.scroll.ease
    }
  }
}

export const buttonVariants: Variants = {
  initial: {
    scale: 1
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: animationTokens.transitions.button.hover.duration / 1000,
      ease: animationTokens.transitions.button.hover.ease
    }
  },
  tap: {
    scale: 0.97,
    transition: {
      duration: animationTokens.transitions.button.press.duration / 1000,
      ease: animationTokens.transitions.button.press.ease
    }
  },
  focus: {
    boxShadow: '0 0 0 2px rgba(66, 153, 225, 0.6)',
    transition: {
      duration: animationTokens.transitions.button.focus.duration / 1000,
      ease: animationTokens.transitions.button.focus.ease
    }
  }
}

export const cardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: animationTokens.transitions.card.scroll.duration / 1000,
      ease: animationTokens.transitions.card.scroll.ease
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: animationTokens.transitions.card.hover.duration / 1000,
      ease: animationTokens.transitions.card.hover.ease
    }
  }
}

export const linkVariants: Variants = {
  initial: {
    width: '0%'
  },
  hover: {
    width: '100%',
    transition: {
      duration: animationTokens.transitions.link.hover.duration / 1000,
      ease: animationTokens.transitions.link.hover.ease
    }
  }
}

export const iconVariants: Variants = {
  initial: {
    opacity: 0,
    rotate: -15
  },
  animate: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: animationTokens.transitions.icon.entry.duration / 1000,
      ease: animationTokens.transitions.icon.entry.ease
    }
  }
}

export const particleVariants: Variants = {
  initial: {
    opacity: 0.3
  },
  animate: {
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: animationTokens.transitions.particle.drift.duration / 1000,
      ease: animationTokens.transitions.particle.drift.ease,
      repeat: Infinity
    }
  },
  hover: {
    filter: 'brightness(1.2)',
    transition: {
      duration: animationTokens.transitions.particle.hover.duration / 1000,
      ease: animationTokens.transitions.particle.hover.ease
    }
  }
}

export const loaderVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: animationTokens.transitions.loader.dot.duration / 1000,
      ease: animationTokens.transitions.loader.dot.ease
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: animationTokens.transitions.loader.hide.duration / 1000,
      ease: animationTokens.transitions.loader.hide.ease
    }
  }
} 