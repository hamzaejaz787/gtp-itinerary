export interface FormDataProps {
  firstname: string;
  lastname?: string;
  email: string;
  phone: string;
  travelDate: string | Date | undefined;
  numberOfPeople: number;
  packageOption: string;
  destination: string;
}
