import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom"
import { handledAPIPost } from "../APIs/APIs";
import Loder from "../components/Loder";

const BookingSuccess = () => {

    const [params] = useSearchParams();

    const cart = useSelector((state) => state.cart)

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);


    const processBoking = async () => {
        try {
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

    useEffect(() => {
        if(!params.get("bookingNo")){
            processBoking();
        } 
    },[]);

    if (loading) {
        return <Loder />;
      }
    

    return (
        <h1 style={{ color: "greenyellow" }}>
           Your Booking Successfully{" "}
           {params.get("bookingNo")&& `bookingId: ${params.get("bookingNo")}`} 
        </h1>
    )
};

export default BookingSuccess;