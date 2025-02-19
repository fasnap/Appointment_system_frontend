import "./App.css";
import AppointmentBooking from "./components/appointments/AppointmentBooking";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <AppointmentBooking apiBaseUrl="http://127.0.0.1:8000/api" />
    </div>
  );
}

export default App;
