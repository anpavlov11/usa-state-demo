import React from 'react'
import data from '../dist/usa-map-data'

const HoverComponent = () => {
   return (
        <div>
            <h3> {data.stateName} </h3>
            <h4> {data.statePop} </h4>
        </div>
  )
}

export default HoverComponent