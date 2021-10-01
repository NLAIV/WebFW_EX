import React from 'react'
import Pää from './pää/Pää'
import Navi from './navi/navi'

export default function Yläpalkki() {
    return (
        <div>
            <div>
                <Pää></Pää>
            </div>
            <div>
                <Navi></Navi>
            </div>
        </div>
    )
}
