import React from 'react';
class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: 'Phone',
      detail: '4 GB RAM | 64 GB ROM | Expandable Upto 1 TB',
      img: '',
    };
  }
  render() {
    const { price, title, detail } = this.state;
    return (
      <div className="product">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div>{title}</div>
          <div>{detail}</div>
          <div>Rs {price}</div>
        </div>
        <div className="product-actions">
          {/* Buttons */}
          <button className="add-to-cart">Add To Cart</button>
        </div>
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
