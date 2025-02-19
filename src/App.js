import "./App.css";
import AppointmentBooking from "./components/appointments/AppointmentBooking";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <AppointmentBooking apiBaseUrl="https://appointment-system-backend-ns7d.onrender.com/api/" />
    </div>
  );
}

export default App;
