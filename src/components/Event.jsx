
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

const EventBooking = ({ name, venue,  images, price, description }) => {

  const dispatch = useDispatch();

  const handleAddToCart = () => {

    dispatch({
      type: "cart_add",
      book: {
        name,
        venue,
        images,
        price,
        description,
      },
    });
  };

  return (
    <div className=" bg-light py-3 ">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={images} className="card-img-top" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <br/>
            <p className="fw-bold card-text">Venues : {venue}</p>
            <p className="card-text">{description}</p>
            <p className="card-text"><strong>Price :</strong> {price}</p>
            &nbsp;
            <button className="btn btn-primary" onClick={handleAddToCart}>Add To Booking</button>
          </div>
        </div>
      </div>
    </div>
  );
};

EventBooking.propTypes = {
  name: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired, 
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default EventBooking;
