import React from 'react'

const metricMonster = (props) => (
    <div className='monster-metric'>
        <span className='monster-metric_monster-name'>{props.name}</span>
        <span className='monster-metric_monster-age'>Age: {props.age}</span>
    </div>
)

export default metricMonster