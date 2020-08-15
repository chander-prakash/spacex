/* eslint-disable indent */
import React, { useState } from 'react'

// set the defaults
export const MissionContext = React.createContext<any>(null)

export const MissionProvider = ({ children }: any) => {
    const [missions, setMissions] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    return (
        <MissionContext.Provider
            value={{
                missions,
                setMissions,
                isLoading,
                setIsLoading
            }}
        >
            {children}
        </MissionContext.Provider>
    )
}
