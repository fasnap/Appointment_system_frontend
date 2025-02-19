import React from 'react';
import ReactDOM from 'react-dom';
import AppointmentBooking from './src/components/appointments/AppointmentBooking';

const createAppointmentWidget = (containerId, apiBaseUrl) => {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }
  
  ReactDOM.render(<AppointmentBooking apiBaseUrl={apiBaseUrl} />, container);
};

// Expose the function globally
window.AppointmentPlugin = { createAppointmentWidget };
