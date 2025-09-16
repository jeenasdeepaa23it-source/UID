import React, { useState } from 'react';

const AddItem = () => {
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    quantity: '',
  });

  const [itemList, setItemList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.name && newItem.description && newItem.quantity) {
      setItemList((prev) => [...prev, newItem]);
      setNewItem({ name: '', description: '', quantity: '' });
    }
  };

  // Styles
  const containerStyle = {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '30px 40px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#e4ebf3ff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center', // ✅ Center content
  };

  const titleStyle = {
    color: '#179fb1ff',
    marginBottom: '25px',
    fontWeight: 'bold',
    fontSize: '1.8rem',
  };

  const formStyle = {
    display: 'grid',
    gridTemplateColumns: '100px 1fr',
    rowGap: '50px',
    columnGap: '15px',
    alignItems: 'center',
    textAlign: 'left', // ✅ Keep form labels left aligned
  };

  const labelStyle = {
    fontWeight: '600',
    color: '#333',
    justifySelf: 'end',
  };

  const inputStyle = {
    padding: '10px 12px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1.8px solid #8d8383ff',
    transition: 'border-color 0.3s ease',
    width: '90%',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '80px',
    resize: 'vertical',
  };

  const inputFocus = {
    borderColor: '#007b8a',
    outline: 'none',
  };

  const buttonWrapperStyle = {
    gridColumn: '1 / 3', // ✅ Make button take full row
    marginTop: '20px',
    textAlign: 'center', // ✅ Center the button
  };

  const buttonStyle = {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '1rem',
    boxShadow: '0 4px 10px rgba(40, 167, 69, 0.3)',
    transition: 'background-color 0.3s ease',
  };

  const addedItemsStyle = {
    marginTop: '40px',
    backgroundColor: '#fff',
    padding: '20px 25px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
    textAlign: 'left',
  };

  const listItemStyle = {
    padding: '10px 0',
    borderBottom: '1px solid #eee',
    fontSize: '1rem',
    color: '#444',
  };

  const [focusField, setFocusField] = useState(null);

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Add a New Item</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        <label htmlFor="name" style={labelStyle}>Item Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter item name"
          value={newItem.name}
          onChange={handleChange}
          onFocus={() => setFocusField('name')}
          onBlur={() => setFocusField(null)}
          required
          style={focusField === 'name' ? { ...inputStyle, ...inputFocus } : inputStyle}
        />

        <label htmlFor="description" style={labelStyle}>Description:</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter item description"
          value={newItem.description}
          onChange={handleChange}
          onFocus={() => setFocusField('description')}
          onBlur={() => setFocusField(null)}
          required
          style={focusField === 'description' ? { ...textareaStyle, ...inputFocus } : textareaStyle}
        />

        <label htmlFor="quantity" style={labelStyle}>Quantity:</label>
        <input
          id="quantity"
          type="number"
          name="quantity"
          min="1"
          placeholder="0"
          value={newItem.quantity}
          onChange={handleChange}
          onFocus={() => setFocusField('quantity')}
          onBlur={() => setFocusField(null)}
          required
          style={focusField === 'quantity' ? { ...inputStyle, ...inputFocus } : inputStyle}
        />

        <div style={buttonWrapperStyle}>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#218838'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#28a745'}
          >
            Add Item
          </button>
        </div>
      </form>

      <div style={addedItemsStyle}>
        <h3 style={{ color: '#32addaff', marginBottom: '15px' }}>Added Items:</h3>
        {itemList.length === 0 ? (
          <p style={{ color: '#666', fontStyle: 'italic' }}>No items added yet.</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
            {itemList.map((item, index) => (
              <li key={index} style={listItemStyle}>
                <strong>{item.name}</strong> – {item.description} (Qty: {item.quantity})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddItem;
