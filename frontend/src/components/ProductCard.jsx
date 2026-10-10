import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <h3>{product.name}</h3>
      <p style={styles.category}>{product.category}</p>
      <p>{product.description}</p>
      <div style={styles.footer}>
        <span style={styles.price}>${product.price.toFixed(2)}</span>
        <button style={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '16px',
    margin: '12px',
    width: '260px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  category: {
    fontSize: '0.85rem',
    color: '#666',
    textTransform: 'uppercase',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '12px',
  },
  price: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ProductCard;