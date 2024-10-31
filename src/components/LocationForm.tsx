import FormWrapper from "./FormWrapper";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

import Skardu from "../assets/skardu.jpeg";
import Naran from "../assets/naran.jpeg";
import Swat from "../assets/swat.jpeg";
import Hunza from "../assets/hunza.jpeg";

type LocationInfo = {
  destination: string;
};

type LocationInfoProps = LocationInfo & {
  updateFields: (fields: Partial<LocationInfo>) => void;
};

const destinations = [
  { id: "skardu", label: "Skardu", image: Skardu },
  { id: "naran", label: "Naran", image: Naran },
  { id: "swat", label: "Swat", image: Swat },
  { id: "hunza", label: "Hunza", image: Hunza },
];

const LocationForm = ({ destination, updateFields }: LocationInfoProps) => {
  return (
    <FormWrapper title="Step 2" description="Choose Your Destination">
      <Label htmlFor="destination" className="block">
        Destination <span className="text-red-500">*</span>
      </Label>

      <RadioGroup
        value={destination}
        onValueChange={(value) => updateFields({ destination: value })}
        className="grid grid-cols-2 gap-8"
      >
        {destinations.map((option) => (
          <div
            key={option.id}
            className={`flex items-center flex-col h-full cursor-pointer rounded-lg border-2 overflow-hidden transition-all duration-200 ease-in ${
              destination === option.id
                ? "border-blue-500"
                : "border-transparent hover:border-blue-300"
            }`}
          >
            <Label
              htmlFor={option.id}
              className="flex flex-col justify-between h-full"
            >
              <img
                src={option.image}
                alt={option.label}
                className={`min-h-40 h-full w-full object-cover cursor-pointer `}
              />

              <h3 className="text-center p-2 text-lg w-full bg-gray-200">
                {option.label}
              </h3>
            </Label>
            <RadioGroupItem
              value={option.id}
              id={option.id}
              className="hidden"
            />
          </div>
        ))}
      </RadioGroup>
    </FormWrapper>
  );
};

export default LocationForm;
