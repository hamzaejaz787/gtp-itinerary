import React from "react";
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

interface ItineraryDisplayProps {
  itinerary: string;
}

const ItineraryDisplay: React.FC<ItineraryDisplayProps> = ({ itinerary }) => {
  let sanitizedItinerary = itinerary.trim();

  // Remove Markdown formatting like code block markers if present
  if (sanitizedItinerary.startsWith("```json")) {
    sanitizedItinerary = sanitizedItinerary.replace(/```json|```/g, "");
  }

  let itineraryData;
  try {
    itineraryData = JSON.parse(sanitizedItinerary);
  } catch (error) {
    console.error("Invalid JSON format:", error);
    return (
      <div className="flex h-screen justify-center items-center">
        <p className="text-red-500">
          Failed to load itinerary details. Please try again.
        </p>
      </div>
    );
  }
  console.log(itineraryData);

  const breakdown = itineraryData.breakdown;
  const hasValidBreakdown = Array.isArray(breakdown);

  return (
    <div className="my-8 p-6 rounded-lg shadow-md border-gray-200 border max-w-2xl mx-auto space-y-4">
      <h2 className="text-xl font-bold">Your Itinerary</h2>
      <em className="text-gray-400 text-sm block">
        This itinerary is just to give you an overview of what you can expect
        for the trip. The actual trip plan may vary.
      </em>

      {/* Overview Section */}
      {itineraryData.overview && itineraryData.overview.summary ? (
        <Card className="shadow-none space-y-2 border-none">
          <CardTitle>Overview</CardTitle>
          <p className="text-gray-700">{itineraryData.overview.summary}</p>
        </Card>
      ) : (
        <p className="text-gray-600">No overview available.</p>
      )}

      {/* Breakdown Section */}
      <h3 className="text-xl font-semibold">Daily Breakdown</h3>
      {hasValidBreakdown ? (
        breakdown.map((day: any, index: number) => (
          <Card key={index} className="shadow-none space-y-2 border-none">
            <CardTitle>{day.day}</CardTitle>
            <ul className="space-y-1">
              {Array.isArray(day.schedule) && day.schedule.length > 0 ? (
                day.schedule.map((activity: string, activityIndex: number) => (
                  <li key={activityIndex} className="text-gray-600">
                    {activity}
                  </li>
                ))
              ) : (
                <li className="text-gray-600">
                  No activities available for this day.
                </li>
              )}
            </ul>
          </Card>
        ))
      ) : (
        <p className="text-gray-600">No breakdown available.</p>
      )}

      <Button asChild>
        <a href="/">Start Again</a>
      </Button>
    </div>
  );
};

export default ItineraryDisplay;
