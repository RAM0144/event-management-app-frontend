import { useEffect, useState } from "react";
import EventBooking from "../Event";
import { handledAPIGet } from "../../APIs/APIs";
import { useSelector } from "react-redux";
import EventForm from "../EventForm";


const Photos = () => {
  const { userInfo = { userType : "customer", userId : "" } } = useSelector((state) => state.account || {});
  
  const [openForm, setOpenForm] = useState(false);

  const [events, setEvents] = useState([]);

  const loadEvents = async () => {
    try {
        const events = await handledAPIGet(
         userInfo.userType === "seller" ? `/photos/seller/${userInfo.userId}` : "/photos"

        );
        setEvents(events);
    } catch (error) {
      alert(error.message);
    }
    
  };
  
  useEffect(() => {
    loadEvents();
  },[]);

   return (
     <div className="container mt-5">
       <h1 className="listingHeading__title">Wedding Photographers</h1>
       <button onClick={() => setOpenForm(true)} className="btn btn-primary"> Add New Events</button>
        {openForm && (
          <div style={{
            position: "fixed",
              top: 0,
              left: 0,
              height: "100vh",
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              placeItems: "center",
              placeContent: "center",
              zIndex: 9999.
          }}>
            <div className='bg-white m-4'
             style={{minWidth: 500, height: 500}}
             >
            <button onClick={() => setOpenForm(false)}>X</button>
           <EventForm />
          </div>
          </div>
        )}
   {events.map((photo) => (
    <EventBooking key={photo} {...photo} />
  )) }
</div>
)
}

export default Photos;