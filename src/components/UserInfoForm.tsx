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

const UserInfoForm = ({
  email,
  firstname,
  lastname,
  phone,
  updateFields,
}: UserInfoFormProps) => {
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
        type="number"
        placeholder="+921234567890"
        required
        value={phone}
        onChange={(e) => updateFields({ phone: e.target.value })}
      />
    </FormWrapper>
  );
};

export default UserInfoForm;
