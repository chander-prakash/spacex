/* eslint-disable indent */
import React from 'react'

const Mission = ({ mission, index }: any) => {
    console.log('mission', mission)
    return (
        <div className="spacex-mission">
            <div className="img-group">
                <img src={mission.links.mission_patch_small}
                    alt={mission.details} />
            </div>

            <div className="mission-info title">
                <div className="label title">{mission.rocket.rocket_name} #{mission.flight_number}</div>
            </div>

            <div className="mission-info">
                <div className="label">Mission Ids:</div>
                <div className="value">
                    {
                        (mission.mission_id.length > 0)
                            ? <ul>
                                {
                                    mission.mission_id.map((mission_id: any, index: number) => {
                                        return (<li key={index}>{mission_id}</li>)
                                    })
                                }
                            </ul>
                            : 'No Data'
                    }

                </div>
            </div>
            <div className="mission-info">
                <div className="label">Launch Year:</div>
                <div className="value">{mission.launch_year}</div>
            </div>
            <div className="mission-info">
                <div className="label">Successfull Launch</div>
                <div className="value">
                    {mission.launch_success ? <i className="fa fa-check-circle"></i> : <i className="fa fa-circle-o"></i>}
                </div>
            </div>
            <div className="mission-info">
                <div className="label">Successfull Landing</div>
                {mission.launch_success ? <i className="fa fa-check-circle"></i> : <i className="fa fa-circle-o"></i>}
            </div>
        </div>
    )
}

export default Mission
