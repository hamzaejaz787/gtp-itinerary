import React from "react";
import { Card, CardTitle } from "@/components/ui/card";

interface ItineraryDisplayProps {
  itinerary: string;
}

const ItineraryDisplay: React.FC<ItineraryDisplayProps> = ({ itinerary }) => {
  let itineraryData;
  const clearJsonItinerary = itinerary.replace(/```json|```/g, "");
  console.log(clearJsonItinerary);
  // Parse the JSON safely
  try {
    itineraryData = JSON.parse(clearJsonItinerary);
  } catch (error) {
    console.error("Invalid JSON format:", error);
    return (
      <p className="text-red-500">
        Failed to load itinerary details. Please try again.
      </p>
    );
  }
  return (
    <div className="my-8 p-6 rounded-lg shadow-md border-gray-200 border max-w-2xl mx-auto space-y-4">
      <h2 className="text-xl font-bold">Your Itinerary</h2>
      <em className="text-gray-400 text-sm block">
        This itinerary is just to give you an overview of what you can expect
        for the trip. The actual trip plan may vary.
      </em>
      {/* Overview Section */}
      <Card className="shadow-none space-y-2 border-none">
        <CardTitle>Overview</CardTitle>
        <p className="text-gray-700">
          {itineraryData.overview.summary || itineraryData.overview}
        </p>
      </Card>

      {/* Breakdown Section */}
      <h3 className="text-xl font-semibold">Daily Breakdown</h3>
      {itineraryData.breakdown.map((day: any, index: number) => (
        <Card key={index} className="shadow-none space-y-2 border-none">
          <CardTitle>{day.day}</CardTitle>
          <ul className="space-y-1">
            {day.schedule.map((activity: string, activityIndex: number) => (
              <li key={activityIndex} className="text-gray-600">
                {activity}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
};

export default ItineraryDisplay;
