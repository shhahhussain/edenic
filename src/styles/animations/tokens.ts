export const animationTokens = {
  easing: {
    easePrimary: 'linear',
    easeSecondary: 'linear',
    easeOut: 'linear'
  },
  duration: {
    short: 150,
    medium: 300,
    long: 600,
    stagger: 50
  },
  transitions: {
    page: {
      fadeOut: {
        duration: 300,
        ease: 'linear'
      },
      fadeIn: {
        duration: 300,
        ease: 'linear'
      },
      layout: {
        duration: 400,
        ease: 'linear'
      }
    },
    hero: {
      initialLoad: {
        duration: 500,
        ease: 'linear'
      },
      bob: {
        duration: 8000,
        ease: 'linear'
      }
    },
    header: {
      scroll: {
        duration: 400,
        ease: 'linear'
      },
      mobileMenu: {
        stagger: 200
      }
    },
    button: {
      hover: {
        duration: 150,
        ease: 'linear'
      },
      press: {
        duration: 100,
        ease: 'linear'
      },
      focus: {
        duration: 600,
        ease: 'linear'
      }
    },
    card: {
      scroll: {
        duration: 400,
        ease: 'linear',
        stagger: 100
      },
      hover: {
        duration: 200,
        ease: 'linear'
      }
    },
    link: {
      hover: {
        duration: 250,
        ease: 'linear'
      }
    },
    icon: {
      entry: {
        duration: 300,
        ease: 'linear'
      }
    },
    particle: {
      drift: {
        duration: 20000,
        ease: 'linear'
      },
      hover: {
        duration: 300,
        ease: 'linear'
      }
    },
    loader: {
      dot: {
        duration: 200,
        stagger: 200,
        totalLoop: 1200
      },
      hide: {
        duration: 300,
        ease: 'linear'
      }
    }
  }
} 