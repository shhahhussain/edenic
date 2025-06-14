import { useEffect, useState } from 'react'

interface VideoBackgroundProps {
  videoSrc: string
  className?: string
}

export function VideoBackground({ videoSrc, className = '' }: VideoBackgroundProps) {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)

    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  if (!isDesktop) {
    return null
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  )
} 