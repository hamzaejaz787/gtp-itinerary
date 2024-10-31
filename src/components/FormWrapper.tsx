import { ReactNode } from "react";
import { CardContent, CardDescription, CardTitle } from "./ui/card";

type FormWrapperProps = {
  title: string;
  description: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children, description }: FormWrapperProps) => {
  return (
    <>
      <CardTitle className="text-center text-2xl">{title}</CardTitle>
      <CardDescription className="text-center">{description}</CardDescription>
      <CardContent className="space-y-3 px-0">{children}</CardContent>
    </>
  );
};

export default FormWrapper;
