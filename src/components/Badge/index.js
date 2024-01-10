import React from 'react'

const Badge = (props) => {
    const { badges = [], className, classBadge, ...rest } = props

    return (
        <div className={className} {...rest}>
            <div classBadge={className} className="badge__list">
                {badges &&
                    badges.map((badge, index) => (
                        <span
                            key={index}
                            className={`badge badge__${badge.status}`}
                        >
                            {badge.message}
                        </span>
                    ))}
            </div>
        </div>
    )
}

export default Badge
