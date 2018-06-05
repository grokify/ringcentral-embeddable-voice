function openOffice365CalendarPage(calendarEvent) {
  // add office365 calendar logics here
  console.log(calendarEvent);
  window.open('https://outlook.office365.com/owa/?path=/calendar/view/WorkWeek');
}

export default openOffice365CalendarPage;
