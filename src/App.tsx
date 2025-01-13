import { FormEvent, useState } from "react";
import { Card } from "@/components/ui/card";
import { useMultistepForm } from "./hooks/useMultistepForm";
import { FormDataProps } from "./lib/definitions";
import UserInfoForm from "@/components/UserInfoForm";
import { Button } from "@/components/ui/button";
import LocationForm from "@/components/LocationForm";
import DateForm from "@/components/DateForm";
import ItineraryDisplay from "@/components/ItineraryDisplay";
import Loader from "@/components/Loader";
import Footer from "./components/Footer";
import './fonts.css';
import Header from "./components/Header";
// });

const INITIAL_DATA: FormDataProps = {
  firstname: "",
  lastname: "",
  email: "",
  startDate: "",
  endDate: "",
  destination: "",
  phone: "",
  packageOption: "",
  numberOfPeople: 1,
};

function App() {
  const [data, setData] = useState<FormDataProps>(INITIAL_DATA);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [itinerary, setItinerary] = useState<string | null>(null);

  // Update form data fields
  const updateFields = (fields: Partial<FormDataProps>) =>
    setData((prev) => {
      return { ...prev, ...fields };
    });

  // Multi-step form logic
  const { step, nextStep, previousStep, isFirstStep, isLastStep } = useMultistepForm([
    <UserInfoForm {...data} updateFields={updateFields} />,
    <LocationForm {...data} updateFields={updateFields} />,
    <DateForm {...data} updateFields={updateFields} />,
  ]);

  // Form submission handler
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return nextStep();
    setIsLoading(true);
    setIsError(null);

    try {
      const response = await fetch("http://localhost:8080/api/itinerary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit data");
      }
      const responseData = await response.json();
      setItinerary(responseData.openAiResponse);
    } catch (error) {
      setIsError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  // Render itinerary if available
  if (itinerary) {
    return (
      <>
        <Header/>
        <ItineraryDisplay itinerary={itinerary} />
        <Footer />
      </>
    );
  }

  // Main return with Header, Form, and Footer
  return (
    <main >
      <Header/>
      <div className="min-h-screen bg-slate-200 h-full w-full grid content-center p-8">
        {isLoading && <Loader />}
        <Card className="max-w-2xl mx-auto w-full p-6 relative">
          <form onSubmit={handleSubmit} className="space-y-2">
            {step}
            {isError && <p className="text-red-500">{isError}</p>}

            <div className="flex items-center justify-end gap-4">
              <Button type="button" disabled={isFirstStep} onClick={previousStep}>
                Back
              </Button>

              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Submitting..." : isLastStep ? "Submit" : "Next"}
              </Button>
            </div>
          </form>
        </Card>
      </div>
      <Footer />
    </main>
  );
}

export default App;
