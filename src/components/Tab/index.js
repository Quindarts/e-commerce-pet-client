import React, { cloneElement, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Tab = (props) => {
    const [activeTab, setActiveTab] = useState(1)
    const { className, style, data, dataChildren, id, children, ...rest } =
        props

    const handleActive = (tabId) => {
        setActiveTab(tabId === activeTab ? tabId : tabId)
    }

    const activeTabData = data.find((tab) => tab.id === activeTab)
    // console.log(activeTabData)
    // console.log(activeTab)
    return (
        <div style={style} className={className} {...rest}>
            <div className="tabs">
                <div className="tabs__menu">
                    {data &&
                        data.map((tab) => (
                            <div
                                key={tab.id}
                                className={`tabs__menu--item ${
                                    activeTab === tab.id ? 'active' : ''
                                }`}
                            >
                                <NavLink
                                    onClick={() => handleActive(tab.id)}
                                    className="tabs__menu--item-link"
                                >
                                    {tab.tab}
                                </NavLink>
                            </div>
                        ))}
                </div>
                <div className="tab__content">
                    {React.Children.map(children, (child) => {
                        // Truyền dữ liệu xuống children
                        return cloneElement(child, { activeTabData })
                    })}
                </div>
            </div>
        </div>
    )
}

export default Tab
