import React from "react";
import { z } from "zod";
import FormWrapper from "./FormWrapper";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type UserInfo = {
  firstname: string;
  lastname?: string;
  email: string;
  phone: string;
};

type UserInfoFormProps = UserInfo & {
  updateFields: (fields: Partial<UserInfo>) => void;
};

const phoneValidationSchema = z.string().refine(
  (val) => {
    const regex = /^(?:\+92\d{10}|92\d{10}|03\d{9})$/;
    return regex.test(val);
  },
  {
    message: "Invalid phone number!!",
  }
);

const UserInfoForm = ({
  email,
  firstname,
  lastname,
  phone,
  updateFields,
}: UserInfoFormProps) => {
  const [errors, setErrors] = React.useState<{ phone?: string }>({});

  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneValue = e.target.value;
    updateFields({ phone: phoneValue });

    try {
      phoneValidationSchema.parse(phoneValue);
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors({ phone: error.errors[0].message });
      }
    }
  };

  return (
    <FormWrapper title="Step 1" description="Enter Personal Details">
      <Label htmlFor="firstname" className="block">
        First Name
      </Label>
      <Input
        autoFocus
        name="firstname"
        placeholder="Enter First Name"
        required
        value={firstname}
        onChange={(e) => updateFields({ firstname: e.target.value })}
      />
      <Label htmlFor="lastname" className="block">
        Last Name
      </Label>
      <Input
        name="lastname"
        placeholder="Enter Last Name"
        value={lastname}
        onChange={(e) => updateFields({ lastname: e.target.value })}
      />
      <Label htmlFor="email" className="block">
        Email
      </Label>
      <Input
        name="email"
        type="email"
        placeholder="email@example.com"
        required
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <Label htmlFor="phone" className="block">
        Phone
      </Label>
      <Input
        name="phone"
        type="tel"
        placeholder="+921234567890"
        required
        value={phone}
        onChange={handlePhoneNumber}
      />

      {errors.phone && (
        <div className="text-red-500 text-sm">{errors.phone}</div>
      )}
    </FormWrapper>
  );
};

export default UserInfoForm;
