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
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { Label } from "./ui/label";

type DateFormTypes = {
  packageOption: string;
  startDate: string | Date | undefined;
  endDate: string | Date | undefined;
  numberOfPeople: number;
};

type DateFormProps = DateFormTypes & {
  updateFields: (fields: Partial<DateFormTypes>) => void;
};

const DateForm = ({
  numberOfPeople,
  packageOption,
  updateFields,
  startDate: initialStartDate,
  endDate: initialEndDate,
}: DateFormProps) => {
  const [people, setPeople] = React.useState(numberOfPeople || 1);
  const [selectedPackage, setSelectedPackage] = React.useState(packageOption);
  const [startDate, setStartDate] = React.useState<Date | undefined>(
    initialStartDate ? new Date(initialStartDate) : undefined
  );
  const [endDate, setEndDate] = React.useState<Date | undefined>(
    initialEndDate ? new Date(initialEndDate) : undefined
  );

  const updatePeopleCount = (newCount: number) => {
    setPeople(newCount);
    updateFields({ numberOfPeople: newCount });
  };

  const handleStartDateSelect = (date: Date | undefined) => {
    setStartDate(date);
    updateFields({ startDate: date });
  };

  const handleEndDateSelect = (date: Date | undefined) => {
    if (date && startDate && date >= startDate) {
      setEndDate(date);
      updateFields({ endDate: date });
    } else if (!date) {
      setEndDate(undefined);
      updateFields({ endDate: undefined });
    } else {
      alert("End date cannot be selected before the start date.");
    }
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
          <Label>Pick Starting Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start items-center gap-1 text-left font-normal",
                  !startDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon />
                {startDate ? (
                  format(startDate, "LLL dd, y")
                ) : (
                  <span className="text-gray-500">Pick A Date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start">
              <Calendar
                initialFocus
                mode="single"
                selected={startDate}
                onSelect={handleStartDateSelect}
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label>Pick Ending Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start items-center gap-1 text-left font-normal",
                  !endDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon />
                {endDate ? (
                  format(endDate, "LLL dd, y")
                ) : (
                  <span className="text-gray-500">Pick A Date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start">
              <Calendar
                initialFocus
                mode="single"
                selected={endDate}
                fromDate={startDate}
                onSelect={handleEndDateSelect}
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
      </div>
    </FormWrapper>
  );
};

export default DateForm;
