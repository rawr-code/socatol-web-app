import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

import esLocale from '@fullcalendar/core/locales/es';

// Material UI
import { Card, CardContent } from '@material-ui/core';
// import '@fullcalendar/timegrid/main.css';
// import '@fullcalendar/list/main.css';

class CalendarView extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <FullCalendar
            defaultView="dayGridMonth"
            locale={esLocale}
            plugins={[dayGridPlugin]}
          />
        </CardContent>
      </Card>
    );
  }
}

export default CalendarView;
