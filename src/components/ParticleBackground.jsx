import React, { useEffect, useState } from 'react'

const ParticleBackground = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const createParticles = () => {
      const newParticles = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          delay: Math.random() * 6,
          duration: 6 + Math.random() * 4,
          size: 1 + Math.random() * 2
        })
      }
      setParticles(newParticles)
    }

    createParticles()
    window.addEventListener('resize', createParticles)
    
    return () => window.removeEventListener('resize', createParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          style={{
            left: `${particle.x}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `particle-float ${particle.duration}s infinite linear`
          }}
        />
      ))}
    </div>
  )
}

export default ParticleBackground

