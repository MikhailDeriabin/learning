import {Outlet} from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

export default function EventLayout() {
    return(
        <>
            <EventsNavigation />
            <div>
                <Outlet/>
            </div>
        </>
    );
}