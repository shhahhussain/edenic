export const animationTokens = {
  easing: {
    easePrimary: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
    easeSecondary: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0.0, 0.3, 1)'
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
        ease: 'cubic-bezier(0.0, 0.0, 0.3, 1)'
      },
      fadeIn: {
        duration: 300,
        ease: 'cubic-bezier(0.0, 0.0, 0.3, 1)'
      },
      layout: {
        duration: 400,
        ease: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
      }
    },
    hero: {
      initialLoad: {
        duration: 500,
        ease: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
      },
      bob: {
        duration: 8000,
        ease: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
      }
    },
    header: {
      scroll: {
        duration: 400,
        ease: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
      },
      mobileMenu: {
        stagger: 200
      }
    },
    button: {
      hover: {
        duration: 150,
        ease: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
      },
      press: {
        duration: 100,
        ease: 'cubic-bezier(0.0, 0.0, 0.2, 1)'
      },
      focus: {
        duration: 600,
        ease: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
      }
    },
    card: {
      scroll: {
        duration: 400,
        ease: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        stagger: 100
      },
      hover: {
        duration: 200,
        ease: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
      }
    },
    link: {
      hover: {
        duration: 250,
        ease: 'cubic-bezier(0.0, 0.0, 0.3, 1)'
      }
    },
    icon: {
      entry: {
        duration: 300,
        ease: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
      }
    },
    particle: {
      drift: {
        duration: 20000,
        ease: 'linear'
      },
      hover: {
        duration: 300,
        ease: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
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
        ease: 'cubic-bezier(0.0, 0.0, 0.3, 1)'
      }
    }
  }
} 