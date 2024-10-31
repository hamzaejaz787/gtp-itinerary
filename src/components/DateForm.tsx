import React from "react";
import FormWrapper from "./FormWrapper";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { DateRange } from "react-day-picker";
import { addDays, format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { Label } from "./ui/label";

type DateFormTypes = {
  travelDate: string | Date | undefined;
  packageOption: string;
  numberOfPeople: number;
};

type DateFormProps = DateFormTypes & {
  updateFields: (fields: Partial<DateFormTypes>) => void;
};

const DateForm = ({
  numberOfPeople,
  packageOption,
  updateFields,
}: DateFormProps) => {
  const [people, setPeople] = React.useState(numberOfPeople || 1);
  const [selectedPackage, setSelectedPackage] = React.useState(packageOption);
  const [currentDate, setDate] = React.useState<DateRange | undefined>({
    from: addDays(new Date(), 1),
    to: addDays(new Date(), 3),
  });

  const updatePeopleCount = (newCount: number) => {
    setPeople(newCount);
    updateFields({ numberOfPeople: newCount });
  };

  const handleDateSelect = (range: DateRange | undefined) => {
    if (range?.from && range?.to) {
      const formattedRange = `${format(range.from, "LLL dd, y")} - ${format(
        range.to,
        "LLL dd, y"
      )}`;
      updateFields({ travelDate: formattedRange });
    } else if (range?.from) {
      updateFields({ travelDate: format(range.from, "LLL dd, y") });
    }
    setDate(range);
  };

  const handlePackageSelect = (value: string) => {
    setSelectedPackage(value);
    updateFields({ packageOption: value });
  };

  const addPeople = () => updatePeopleCount(people + 1);
  const reducePeople = () => updatePeopleCount(Math.max(1, people - 1));

  return (
    <FormWrapper
      title="Step 3"
      description="Select Your Package & Expected Dates"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Pick Travel Dates</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start items-center gap-1 text-left font-normal",
                  !currentDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon />
                {currentDate?.from ? (
                  currentDate.to ? (
                    <>
                      {format(currentDate.from, "LLL dd, y")} -{" "}
                      {format(currentDate.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(currentDate.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={currentDate?.from}
                selected={currentDate}
                onSelect={handleDateSelect}
                numberOfMonths={1}
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label>Select A Package</Label>
          <Select
            name="packageOption"
            onValueChange={handlePackageSelect}
            value={selectedPackage}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your package" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="premium">Premium</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Number Of People</Label>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            type="button"
            onClick={reducePeople}
            className="items-center text-xl"
          >
            -
          </Button>
          <strong className="text-xs sm:text-sm font-normal font-Barlow text-gray-600">
            {people}
          </strong>
          <Button
            variant="outline"
            type="button"
            onClick={addPeople}
            className="items-center text-xl"
          >
            +
          </Button>
        </div>
      </div>
    </FormWrapper>
  );
};

export default DateForm;
