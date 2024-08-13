import { useDispatch, useSelector } from "react-redux";
import CartItem from '../components/CartItem';
import { handledAPIPost } from "../APIs/APIs.js";
import { useState } from "react";
import Loder from "../components/Loder";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js"
import instance from "../APIs/API-instance.js";

const Cart = () => {

  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const processBoking = async () => {
      try {
        setLoading(true);
        const response = await handledAPIPost("/booking/booking-events", cart);
        alert(response.msg);
        navigate(`/bookingSuccess? bookingNo = ${response.bookingNo}`);
        dispatch({ type: "cart_clear" });
      } catch (error) {
        alert("Somthing went wrong, please try again later");
      } finally {
        setLoading(false);
      }
  };
 
  const makePayment = async () => {
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUB_KEY);

    const response = await instance.post("/payment/get-payment-session" , {
      bookings: cart.bookings,
   });
   const {id} = response.data;
   const result = await stripe.redirectToCheckout({
     sessionId : id,
   });

   if(result.error) {
     console.log(result.error);
   }
 }

  if (loading){
    return <Loder />
  }

  return (
    <div className="container mt-5">
      <h1>Booking Cart</h1>
      {(cart.bookings || []).map((item, index) => (
        <CartItem
          key={index}
          name={item.name}
          venue={item.venue}
          images={item.images}
          price={item.price}
          description={item.description}
          subtotal={item.subtotal}
        />
      ))}
      {cart.bookings.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "end" }}
        >
          <h4>Grand Total: ${cart.bookings.reduce((p, c) => p + c.price,0)}</h4>
          <button onClick={processBoking} className="btn btn-primary">Book Now</button>
        </div>
      )}

    </div>
  );
};

export default Cart;
