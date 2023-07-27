import React from "react";
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Appbar from "../../components/Appbar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

import useCalendar from "../../store/calender";
import { createEventId } from "../../mockData";

// Define the type for the useCalendar hook return value
interface CalendarHook {
  currentEvents: Event[];
  setCurrentEvents: (events: Event[]) => void;
}

function Calender() {
  const { currentEvents, setCurrentEvents } = useCalendar() as CalendarHook;;

  const handleEvents = async (events: any) => {
    await Promise.resolve(setCurrentEvents(events));
  };

  const handleDateSelect = (selectInfo: any) => {
    let title = prompt("Please enter a title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.start,
        end: selectInfo.end,
        allDay: selectInfo.allDay
      });
    }
  };

  const handleEventClick = (clickInfo: any) => {
    if (confirm("Are you sure you want to delete this event?")) {
      clickInfo.event.remove();
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Appbar appBarTitle="Appointment" />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto"
        }}
      >
        <Toolbar />

        <Container
          sx={{
            mt: 4,
            mb: 4
          }}
        >
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            timeZone={"UTC"}
            themeSystem="bootstrap3"
            allDaySlot={false}
            initialView="dayGridMonth"
            slotDuration={"01:00:00"}
            editable={true}
            selectable={true}
            selectMirror={true}
            weekNumbers={true}
            dayMaxEvents={true}
            weekends={true}
            nowIndicator={true}
            initialEvents={currentEvents}
            eventsSet={handleEvents}
            select={handleDateSelect}
            eventClick={handleEventClick}
          />
        </Container>
      </Box>
    </Box>
  );
}

export default Calender;
