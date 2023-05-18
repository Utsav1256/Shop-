import React from 'react';
class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div>Phone</div>
          <div>Rs 999</div>
          <div>Qty: 1</div>
        </div>
        <div className="product-actions">{/* Buttons */}</div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 115,
    width: 110,
    borderRadius: 4,
    background: '#ccc',
  },
};

export default Product;
