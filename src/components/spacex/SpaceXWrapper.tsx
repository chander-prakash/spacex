import React, { useContext } from "react";
import { MissionContext } from "./../../context/mission";
import Mission from "./Mission";

const SpaceXWrapper = () => {

    const { missions, isLoading } = useContext(MissionContext);

    return (
        <div className="spacex-container">
            {isLoading && <div className="loader">Loading.......</div>}
            <div className="spacex-missions">
                {
                    missions.map((mission: any, index: number) => {
                        return (
                            <Mission mission={mission} key={index} />
                        )
                    })
                }
            </div>

            {/* showing no result */}
            {
                (!isLoading && missions.length == 0) &&
                <div className="no-result">No Result</div>
            }
        </div>
    )
}

export default SpaceXWrapper;