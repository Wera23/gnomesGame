import React from 'react';

interface IProps {
    name: string;
    age: number;
}

const MetricMonster = (props: IProps) => (
 
    <div className='monster__metric'>
        <span className='monster__metric-name'>{props.name}</span>
        <span className='monster__metric-age'>Age: {props.age}</span>
    </div>
)

export default MetricMonster;
