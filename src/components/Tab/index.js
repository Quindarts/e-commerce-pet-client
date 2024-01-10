import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const TabChildren = ({ data }) => {
    console.log(data)
    return (
        <div>
            <h1 className="mt-2">{data.title}</h1>
        </div>
    )
}
const Tab = (props) => {
    const [activeTab, setActiveTab] = useState(1)
    const { className, style, data, id, ...rest } = props

    const handleActive = (tabId) => {
        setActiveTab(tabId === activeTab ? tabId : tabId)
    }

    const activeTabData = data.find((tab) => tab.id === activeTab)

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
                    {activeTabData && <TabChildren data={activeTabData} />}
                </div>
            </div>
        </div>
    )
}

export default Tab
