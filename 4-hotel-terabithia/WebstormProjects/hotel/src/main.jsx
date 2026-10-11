import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/homePage.jsx";
import AirConditioning from "./pages/airConditioning.jsx";
import Events from "./pages/events.jsx";
import GuestRegistration  from "./pages/guestRegistration.jsx";
import OperationalReports from "./pages/operationalReports.jsx";
import RoomReservation from "./pages/roomReservation.jsx";
import Supply from "./pages/supply.jsx";
import Exit from "./pages/exit.jsx"




createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/air" element={<AirConditioning />} />
            <Route path="/events" element={<Events />} />
            <Route path="/exit" element={<Exit />} />
            <Route path="/guest" element={<GuestRegistration />} />
            <Route path="/reports" element={<OperationalReports />} />
            <Route path="/reservation" element={<RoomReservation />} />
            <Route path="/supply" element={<Supply />} />
        </Routes>
    </BrowserRouter>
)
