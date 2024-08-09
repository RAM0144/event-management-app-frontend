import { useParams } from "react-router-dom"
import Events from "../components/data.json"
import EventBooking from "../components/Event";


const EventInfo = () => {

    const { weddingSku } = useParams();

    const currentBooking = Events.find((pd) => weddingSku === pd.sku);

    return (
        <div className="mt-5">
            <h1>Wedding Info</h1>
            <p>SKU: {weddingSku}</p>
            <EventBooking{...currentBooking} />
        </div>
    )
}

export default EventInfo;