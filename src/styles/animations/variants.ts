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
      ease: 'linear'
    }
  },
  enter: {
    opacity: 1,
    transition: {
      duration: animationTokens.transitions.page.fadeIn.duration / 1000,
      ease: 'linear'
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
      ease: 'linear'
    }
  },
  bob: {
    y: [0, -10, 0],
    rotate: [0, -5, 0],
    transition: {
      duration: animationTokens.transitions.hero.bob.duration / 1000,
      ease: 'linear',
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
      ease: 'linear'
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
      ease: 'linear'
    }
  },
  tap: {
    scale: 0.97,
    transition: {
      duration: animationTokens.transitions.button.press.duration / 1000,
      ease: 'linear'
    }
  },
  focus: {
    boxShadow: '0 0 0 2px rgba(66, 153, 225, 0.6)',
    transition: {
      duration: animationTokens.transitions.button.focus.duration / 1000,
      ease: 'linear'
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
      ease: 'linear'
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: animationTokens.transitions.card.hover.duration / 1000,
      ease: 'linear'
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
      ease: 'linear'
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
      ease: 'linear'
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
      ease: 'linear',
      repeat: Infinity
    }
  },
  hover: {
    filter: 'brightness(1.2)',
    transition: {
      duration: animationTokens.transitions.particle.hover.duration / 1000,
      ease: 'linear'
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
      ease: 'linear'
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: animationTokens.transitions.loader.hide.duration / 1000,
      ease: 'linear'
    }
  }
} 