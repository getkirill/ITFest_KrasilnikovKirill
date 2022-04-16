import React from "react"
import "./Badge.css"

export const Badge = ({children, forColor = "default"}: {children?: React.ReactNode, forColor?: 'default' | 'vk' | 'discord' | 'telegram'}) => {
    return (
        <span className="badge">
            {children}
        </span>
    )
}

export default Badge;