import React, { useState } from 'react';
import { Calendar, Views, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import fr from 'date-fns/locale/fr';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  fr: fr,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const CalendarView = ({ appointments, onEventClick }) => {
  const [currentView, setCurrentView] = useState(Views.MONTH);

  // Formater les rendez-vous pour le calendrier
  const events = appointments.map(app => ({
    id: app.id,
    title: app.title,
    start: app.date,
    end: new Date(app.date.getTime() + app.duration * 60000),
    resource: app
  }));

  // Styles personnalisés selon le statut
  const eventStyleGetter = (event) => {
    const status = event.resource.status;
    const backgroundColor = status === 'confirmed' ? '#4ade80' : 
                          status === 'pending' ? '#fbbf24' : 
                          status === 'canceled' ? '#f87171' : '#60a5fa';
    
    return {
      style: {
        backgroundColor,
        borderRadius: '4px',
        border: 'none',
        color: '#1f2937',
        padding: '2px 5px'
      }
    };
  };

  return (
    <div className="h-[70vh] p-4">
      <Calendar
        localizer={localizer}
        events={events}
        defaultView={Views.MONTH}
        views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={eventStyleGetter}
        onSelectEvent={onEventClick}
        onView={setCurrentView}
        messages={{
          today: "Aujourd'hui",
          previous: 'Précédent',
          next: 'Suivant',
          month: 'Mois',
          week: 'Semaine',
          day: 'Jour',
          agenda: 'Agenda',
          date: 'Date',
          time: 'Heure',
          event: 'Rendez-vous',
          showMore: total => `+ ${total} autres`
        }}
        culture="fr"
      />
    </div>
  );
};

export default CalendarView;