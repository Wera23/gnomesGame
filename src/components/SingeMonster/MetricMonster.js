import React from 'react'

const MetricMonster = (props) => (
    <div className='monster__metric'>
        <span className='monster__metric-name'>{props.name}</span>
        <span className='monster__metric-age'>Age: {props.age}</span>
    </div>
)

export default MetricMonster;
