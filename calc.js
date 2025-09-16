import React, { useState } from 'react';

const Calc = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculation = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Enter valid numbers');
      return;
    }

    switch (operator) {
      case '+':
        setResult(a + b);
        break;
      case '-':
        setResult(a - b);
        break;
      case '*':
        setResult(a * b);
        break;
      case '/':
        setResult(b === 0 ? 'Cannot divide by 0' : a / b);
        break;
      default:
        setResult('Invalid operation');
    }
  };

  return (
    <div style={styles.container}>
      <h2>🧮 React Calculator</h2>
      <input
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={styles.input}
      />
      <div style={styles.buttonGroup}>
        <button onClick={() => handleCalculation('+')}>+</button>
        <button onClick={() => handleCalculation('-')}>−</button>
        <button onClick={() => handleCalculation('*')}>×</button>
        <button onClick={() => handleCalculation('/')}>÷</button>
      </div>
      <h3>Result: {result}</h3>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#f4f9fc',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    margin: '10px 0',
    padding: '10px',
    fontSize: '16px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
};

export default Calc;
