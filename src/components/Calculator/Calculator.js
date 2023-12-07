import React, { useState } from 'react';
import formulae from '../../constants/formulae';
import Inputs from '../Inputs/Inputs';
import Column from '../Column/Column';
import './Calculator.css';

const Calculator = ({ title = '1 Rep Max' }) => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');

  const handleWeightChange = (value) => {
    setWeight(value);
  };

  const handleRepsChange = (value) => {
    setReps(value);
  };

  return (
    <div className='Calculator'>
      <h2>{ title }</h2>
      <Inputs
        onWeightChange={handleWeightChange}
        onRepsChange={handleRepsChange}
      />
      <div className='Column-Container'>
        {formulae.map((formula, _) => (
          <Column 
            className="Column"
            weight={weight} 
            reps={reps} 
            formula={formula} 
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
