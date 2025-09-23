interface Event {
  title: string;
  status: "Planned";
  description: string;
  date: string | Date;
}

// date format: "2023-09-15T18:00:00Z" for specific time. it is all in UTC!!
export const events: Event[] = [
  {
    title: "Kickoff",
    status: "Planned",
    description: "Introduction to the club",
    date: new Date("2025-09-24T18:00:00Z"),
  },
  {
    title: "WebFest #1",
    status: "Planned",
    description: '"Bucky\'s First Semester" (HTML/CSS)',
    date: new Date("2025-10-15T18:00:00Z"),
  },
  {
    title: "Speaker #1",
    status: "Planned",
    description: "Industry Speaker",
    date: "October - TBA",
  },
  {
    title: "WebFest #2",
    status: "Planned",
    description: '"Murder Mystery" (Databases and APIs)',
    date: new Date("2025-11-13"),
  },
  {
    title: "Speaker #2",
    status: "Planned",
    description: "Industry Speaker",
    date: "November - TBA",
  },
  {
    title: "Social",
    status: "Planned",
    description: "End of semester social event",
    date: new Date("2025-12-05"),
  },
  {
    title: "WebFest #3",
    status: "Planned",
    description: '"Galactic Explorer" (WebGL Canvas)',
    date: "March - TBD",
  },
  {
    title: "WebFest #4",
    status: "Planned",
    description: "",
    date: "April - TBD",
  },
];

export const calendarLink =
  "https://calendar.google.com/calendar/u/1?cid=MWNiMzVjNTFhZjE1NGI2ZTg4OWU1MWFmNzI3MGI3ZDk0MjRhYTJhNjQ5YzBhNWFmODUzYmVmNmFiYzJkNDdjZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t";
