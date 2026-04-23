'use client'

import { motion, useSpring, useMotionValue } from 'framer-motion'
import { useRef, useState } from 'react'

export const Magnetic = ({
    children,
    radius = 30,
}: {
    children: React.ReactNode
    radius?: number
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e
        const { left, top, width, height } = ref.current!.getBoundingClientRect()
        
        const centerX = left + width / 2
        const centerY = top + height / 2
        
        const distanceX = clientX - centerX
        const distanceY = clientY - centerY

        if (Math.abs(distanceX) < width / 2 + radius && Math.abs(distanceY) < height / 2 + radius) {
            mouseX.set(distanceX)
            mouseY.set(distanceY)
        } else {
            mouseX.set(0)
            mouseY.set(0)
        }
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
        setIsHovered(false)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setIsHovered(true)}
            style={{ x, y }}
        >
            {children}
        </motion.div>
    )
}
