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

  const prompt = `Act as a professional trip advisor to create a multi-day itinerary with realistic travel and accommodation stops. Ensure that the itinerary includes different overnight stays near the main activities for each day, if possible, instead of returning to the same base location. Consider nearby towns or guest houses when planning accommodation for each night. You don't have to include the accommodation in the itneray. Make sure to make the travel times realistic, keeping the stops in mind, like reaching Skardu from Islamabad and vice-versa in a day is not possible unless you travel without stops.
  Consider the provided travel details, including destination name: ${destination}, number of days ${startDate} - ${endDate}, and number of people ${numberOfPeople}. In case of multi-day travel, calculate the return time to the original location, and make sure the final day includes drop-off at Islamabad after completing the itinerary.
  Consider the itinerary should follow this approach to show more varied accommodations and realistic travel flow. If applicable, describe transportation modes (e.g., jeep or car) for any special activities, and mention if ticket prices for attractions include activities like boating or jet skiing.

  Do not include any price.
  
  Please create a detailed itinerary for ${destination} for dates between ${startDate} - ${endDate} days for ${numberOfPeople} people.

  Always structure the response in this format:
  {
    "overview": {
    A string that provides a concise summary of the trip including duration, main destination, key attractions, number of travelers, and any relevant information about the route or transportation. Like 'This 7-day itinerary takes you on a captivating journey through the breathtaking landscapes of Hunza Valley, Pakistan, from November 3 to November 9, 2024. This trip is designed for one traveler and includes key attractions such as Karimabad, Attabad Lake, and the historic Baltit Fort. You will experience scenic drives, delicious local cuisine, and opportunities for adventure activities like boating. The transportation will primarily be in a comfortable car, with travel times adjusted to ensure a leisurely pace and enriching experience.'
    },
    "breakdown": [
      Each day should have an hour-by-hour breakdown of events including all stops, meals, activities, and travel. Mention exact names of attractions and any notable features (ticket inclusions, transportation types). For instance:
  08:00am - 08:30am: Pickup from Islamabad.
  08:30am - 09:30am: Travel on [route_name], with a stop at [place].
  09:30am - 10:30am: Visit [place] for breakfast.
  ,
      // Continue with days and activities
    ]
  }
  `;

  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    console.log(response.data.choices);
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
