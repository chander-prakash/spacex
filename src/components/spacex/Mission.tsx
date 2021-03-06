/* eslint-disable indent */
import React, { lazy, Suspense } from 'react'
import Loader from './../common/Loader'

const Img = lazy(() => import('./Img'))

const Mission = ({ mission, index }: any) => {
    return (
        <article className="spacex-mission" aria-label="Mission">
            <div className="img-group">
                <Suspense fallback={<Loader />}>
                    <Img src={mission.links.mission_patch_small} alt={mission.details} name={mission.rocket.rocket_name} />
                </Suspense>
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
                                    mission.mission_id.map((missionID: any, index: number) => {
                                        return (<li key={index}>{missionID}</li>)
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
                <div className="label">Successfull Launch:</div>
                <div className="value">
                    {mission.launch_success ? <i className="fa fa-check-circle success"></i> : <i className="fa fa-times-circle-o failed"></i>}
                </div>
            </div>
            {/* <div className="mission-info">
                <div className="label">Successfull Landing:</div>
                {mission.launch_success ? <i className="fa fa-check-circle success"></i> : <i className="fa fa-times-circle-o failed"></i>}
            </div> */}
        </article>
    )
}

export default Mission
