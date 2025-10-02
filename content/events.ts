export const csvURL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTPSyppMint-P9hXfeiW2yOz3Bp6DX2R8qZR4c1jB5s5IBMJoV2_rxxbL7lHhlDPzUty8hB442KcNlN/pub?output=csv";

export const calendarLink =
  "https://calendar.google.com/calendar/u/1?cid=MWNiMzVjNTFhZjE1NGI2ZTg4OWU1MWFmNzI3MGI3ZDk0MjRhYTJhNjQ5YzBhNWFmODUzYmVmNmFiYzJkNDdjZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t";

export interface Event {
  title: string;
  description: string;
  date: Date | string;
  status: "past" | "planned";
  link?: string;
}

export const dateConfig = {
  timeZone: "America/Chicago",
  weekday: "short",
  month: "short",
  day: "numeric",
};

export const timeConfig = {
  timeZone: "America/Chicago",
  hour: "numeric",
  minute: "2-digit",
};

export async function fetchEvents(): Promise<Event[]> {
  const response = await fetch(csvURL, { cache: "no-cache"});
  const csvText = await response.text();

  const lines = csvText.trim().split("\n");

  const events = lines
    .slice(1)
    .map((line) => {
      // Simple CSV parsing that handles quoted fields
      const values: string[] = [];
      let current = "";
      let inQuotes = false;

      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"' && (i === 0 || line[i - 1] === ",")) {
          inQuotes = true;
        } else if (
          char === '"' &&
          inQuotes &&
          (i === line.length - 1 || line[i + 1] === ",")
        ) {
          inQuotes = false;
        } else if (char === "," && !inQuotes) {
          values.push(current.trim());
          current = "";
          continue;
        } else if (
          char !== '"' ||
          (char === '"' && inQuotes && line[i + 1] === '"')
        ) {
          current += char;
          if (char === '"' && inQuotes && line[i + 1] === '"') i++; // Skip next quote
        }
      }
      values.push(current.trim());

      const eventTitle = values[0];
      const description = values[1] || "";
      const dateStr = values[2];
      const link = values[3] || "";

      let date: Date | string;
      let status: "past" | "planned";

      // Parse date and determine status
      if (dateStr && /^\d{4}-\d{2}-\d{2}/.test(dateStr)) {
        date = new Date(dateStr);
        status = date < new Date() ? "past" : "planned";
      } else {
        // Handle TBA/TBD dates
        date = dateStr;
        status = "planned";
      }

      return {
        title: eventTitle,
        description,
        date,
        status,
        link: link || undefined,
      };
    })
    .filter((event) => event.title); // Filter out empty rows

  return events;
}
