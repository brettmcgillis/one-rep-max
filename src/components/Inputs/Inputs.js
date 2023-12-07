import React, { useState, useEffect } from 'react';
import './Inputs.css';

const Inputs = ({ onWeightChange, onRepsChange }) => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');

  const handleWeightChange = (event) => {
    const value = event.target.value;
    if (value === '' || (/^\d*\.?\d*$/.test(value) && parseFloat(value) >= 1)) {
      setWeight(value);
      onWeightChange(value); 
    }
  };

  const handleRepsChange = (event) => {
    const value = event.target.value;
    if (value === '' || (/^\d*$/.test(value) && parseInt(value, 10) >= 1)) {
      setReps(value);
      onRepsChange(value);
    }
  };

  useEffect(() => {
    handleWeightChange({ target: { value: 100 } });
    handleRepsChange({ target: { value: 1 } });
  }, []);


  return (
    <div className='Inputs'>
      <div className='Input-container'>
        <label 
          className='Input-label'
          htmlFor="weightInput"
        >
          Weight:
        </label>
        <input
          className='Input'
          type="number"
          id="weightInput"
          value={weight}
          onChange={handleWeightChange}
        />
      </div>
      <div className='Input-container'>
        <label 
          className='Input-label'
          htmlFor="repsInput"
        >
          Reps:
        </label>
        <input
          className='Input'
          type="number"
          id="repsInput"
          value={reps}
          onChange={handleRepsChange}
        />
      </div>
    </div>
  );
};

export default Inputs;
