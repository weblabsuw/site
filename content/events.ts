interface Event {
  title: string;
  status: "Planned";
  description: string;
}

export const events: Event[] = [
  {
    title: "WebFest #1",
    status: "Planned",
    description: 'October - "Bucky\'s First Semester" (HTML/CSS)',
  },
  {
    title: "WebFest #2",
    status: "Planned",
    description: 'November - "Murder Mystery" (Databases and APIs)',
  },
  {
    title: "WebFest #3",
    status: "Planned",
    description: 'March - "Galactic Explorer" (WebGL Canvas)',
  },
  {
    title: "WebFest #4",
    status: "Planned",
    description: "April - Theme TBD",
  },
];
