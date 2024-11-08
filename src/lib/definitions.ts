export interface FormDataProps {
  firstname: string;
  lastname?: string;
  email: string;
  phone: string;
  startDate: string | Date | undefined;
  endDate: string | Date | undefined;
  numberOfPeople: number;
  packageOption: string;
  destination: string;
}
