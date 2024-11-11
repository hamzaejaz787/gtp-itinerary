import express, { Express, Request, Response } from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8080;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = process.env.OPENAI_API_URL;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Response from itinerary server");
});

app.post("/api/itinerary", async (req: Request, res: Response) => {
  const { startDate, endDate, numberOfPeople, packageOption, destination } =
    req.body;

  if (
    !startDate ||
    !endDate ||
    !numberOfPeople ||
    !packageOption ||
    !destination
  ) {
    return res.status(400).json({ error: "Missing fields!!" });
  }

  const prompt = `Develop a comprehensive multi-day itinerary for a travel company that prioritizes comfort, realistic travel pacing, and enriching experiences. Use the following guidelines to ensure the itinerary meets high professional standards:
Guidelines:
Optimized Daily Destinations: Structure each day around one primary destination, with overnight accommodations near that day's main activity to avoid backtracking. Select nearby towns or guest houses as options, allowing travelers to immerse themselves in new settings each night.
Realistic Travel Times & Stops: Use motorways instead of highways where possible. Ensure travel times accurately reflect road conditions, terrain, and necessary breaks. For long journeys (e.g., Islamabad to Skardu), include overnight stops in midway locations, such as a stay in Naran or Mingora or any other location in between on the first day if the travel time is longer than 8 hours, to manage traveler comfort. Apply the same approach for return routes to avoid excessive travel time on any single day. 
Tailored Travel Details: Incorporate specific trip information dynamically:
Destination: ${destination}
Dates: ${startDate} - ${endDate}
Group Size: ${numberOfPeople}
Thoughtful End-of-Trip Planning: Ensure the final day's schedule includes a timely drop-off in Islamabad, taking into account any activities and the return travel time.
Modes of Transportation: Specify transportation modes as applicable (e.g., jeep for mountainous areas or car for highway travel) to align with the terrain and experience. Note any optional or ticketed activities like boating or jet skiing, but exclude price information. All travel is by road, so plan times realistically with no flights.
6. Response Format: Deliver the response in this structured JSON format:
  {
    "overview": {
    A string that provides a concise summary of the trip including duration, main destination, key attractions, number of travelers, and any relevant information about the route or transportation. Like 'This 7-day itinerary takes you on a captivating journey through the breathtaking landscapes of Hunza Valley, Pakistan, from November 3 to November 9, 2024. This trip is designed for one traveler and includes key attractions such as Karimabad, Attabad Lake, and the historic Baltit Fort. You will experience scenic drives, delicious local cuisine, and opportunities for adventure activities like boating. The transportation will primarily be in a comfortable car, with travel times adjusted to ensure a leisurely pace and enriching experience.'
    },
    "breakdown": [{
    "day": "Day 1 - Arrival in Location",
    "schedule": [
        "08:00am - 08:30am: Pickup from Islamabad.",
        "08:30am - 12:30pm: Travel towards location, with a scenic stop at another location for a short break and photographs.",
        ....
        ...
        ..
        .
    ]
}]
  }
  `;

  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.6,
        response_format: { type: "json_object" },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    res.status(200).json({
      openAiResponse: response.data.choices[0].message.content,
    });
  } catch (error) {
    console.error(`Error with OpenAi API. ${error}`);
    res.status(500).json({ error: (error as Error).message });
  }
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
