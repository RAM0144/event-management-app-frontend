import PropTypes from 'prop-types';

const CartItem = ({ name, venue,  images, price, description, animDelay }) => {
  return (
    <div className="card mb-3 from-right-animation"
      style={{ animationDelay: `${animDelay}ms` }}
    >
      <div className="row g-0 ">
        <div className="col-md-4">
          <img src={images}
            style={{ height: 300, width: 400, objectFit: "contain" }}
            className="img-fluid rounded-start" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="fw-bold card-text">Venues: {venue}</p>
            <br/>
            <p className="fw-bold card-text">Price: ${price}</p>
            
            <p className="card-text">Description: {description}</p>
            <p className="fw-bold card-text">Subtotal: ${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired, 
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  animDelay: PropTypes.number.isRequired,
};

export default CartItem;
