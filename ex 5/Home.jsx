import React, { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [hovered, setHovered] = useState(null); // track which button is hovered

  const handleIncrement = () => {
    const stepValue = Number(step);
    if (!isNaN(stepValue)) {
      setCount(prev => prev + stepValue);
    }
  };

  const handleDecrement = () => {
    const stepValue = Number(step);
    if (!isNaN(stepValue)) {
      setCount(prev => prev - stepValue);
    }
  };

  const handleReset = () => setCount(0);

  const handleStepChange = (e) => {
    const value = e.target.value;
    setStep(value === '' ? '' : Number(value));
  };

  const getButtonStyle = (type) => {
    const base = {
      padding: '10px 16px',
      fontSize: '1rem',
      border: 'none',
      borderRadius: '6px',
      color: '#fff',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    };

    const colors = {
      increment: '#3f5fcf',
      decrement: '#3f5fcf',
      reset: 'b#ea5856ff',
    };

    const hoverColors = {
      increment: '#093aecff',
      decrement: '#093aecff',
      reset: '#f00606ff',
    };

    return {
      ...base,
      backgroundColor: hovered === type ? hoverColors[type] : colors[type],
    };
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>Counter Application</h1>
        <p style={styles.subtitle}>Control the count with custom step values</p>

        <div style={styles.display}>
          <span style={styles.count}>{count}</span>
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Step:</label>
          <input 
            type="number" 
            value={step} 
            onChange={handleStepChange} 
            style={styles.input}
            min="1"
          />
        </div>

        <div style={styles.buttonGroup}>
          <button
            onClick={handleIncrement}
            style={getButtonStyle('increment')}
            onMouseEnter={() => setHovered('increment')}
            onMouseLeave={() => setHovered(null)}
          >
            ➕ Increment
          </button>

          <button
            onClick={handleDecrement}
            style={getButtonStyle('decrement')}
            onMouseEnter={() => setHovered('decrement')}
            onMouseLeave={() => setHovered(null)}
          >
            ➖ Decrement
          </button>

          <button
            onClick={handleReset}
            style={getButtonStyle('reset')}
            onMouseEnter={() => setHovered('reset')}
            onMouseLeave={() => setHovered(null)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #ece9e6, #ffffff)',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    textAlign: 'center',
    width: '400px',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '10px',
    color: '#333',
  },
  subtitle: {
    fontSize: '1rem',
    marginBottom: '20px',
    color: '#584a4aff',
  },
  display: {
    marginBottom: '20px',
  },
  count: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    marginRight: '10px',
    fontSize: '1rem',
    color: '#555',
  },
  input: {
    padding: '8px',
    fontSize: '1rem',
    width: '80px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px',
  },
};

export default Home;
