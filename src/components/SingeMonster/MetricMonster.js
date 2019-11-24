import React from 'react'

const metricMonster = (props) => (
    <div className='monster-metric'>
        <span className='monster-metric--name'>{props.name}</span>
        <span className='monster-metric--age'>Age: {props.age}</span>
    </div>
)

export default metricMonster