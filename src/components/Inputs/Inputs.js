import React, { useState, useEffect } from 'react';
import './Inputs.css';

const Inputs = ({ key, onWeightChange, onRepsChange }) => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');

  const handleWeightChange = (event) => {
    const value = event.target.value;
    if (value === '' || (/^\d*\.?\d*$/.test(value) && parseFloat(value) >= 1)) {
      setWeight(value || '1');
      onWeightChange(value || '1'); 
    }
  };

  const handleRepsChange = (event) => {
    const value = event.target.value;
    if (value === '' || (/^\d*$/.test(value) && parseInt(value, 10) >= 1)) {
      setReps(value || '1');
      onRepsChange(value || '1');
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
          type="text"
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
          type="text"
          id="repsInput"
          value={reps}
          onChange={handleRepsChange}
        />
      </div>
    </div>
  );
};

export default Inputs;
