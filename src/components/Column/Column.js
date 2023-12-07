import React from 'react';
import './Column.css';
import percentages from '../../constants/percentages';

const Column = ({ weight, reps, formula }) => {

    const round = (val) => {
        return Math.ceil(val / 5) * 5; 
    };

    const max = round(formula.equation(weight, reps));

    return (
        <div className='Column'>
            <h3>{formula.name}</h3>
            {percentages.map((value, _) => (
                <div className="Cell">
                    <div className='Cell-Header'>{value * 100}%</div>
                    <div className='Cell-Value'>{ round(max * value)}</div>
                </div>
            ))}
        </div>
    );
};
export default Column;
