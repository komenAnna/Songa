import FormInput from "@/components/Elements/Forms/FormInput";
import FormWrapper from "@/components/Elements/Forms/FormWrapper";

type RiderProfile = {
  location: string;
  stage: string;
  address: string;
  gender: string;
}

type RiderProfileProps = RiderProfile & {
  updateFields: (fields: Partial<RiderProfile>) => void;
}

export default function RiderProfile(
  {
    location,
    stage,
    address,
    gender,
    updateFields
  }: RiderProfileProps
) {
  return (
    <FormWrapper title="">
      <FormInput value={location} type={"text"} label={"Location"}
                 required name="location"
                 onChange={(e) => updateFields({ location: e.target.value })} />
      <FormInput value={stage} type={"text"} label={"Stage"}
        required name="stage"
        onChange={(e) => updateFields({ stage: e.target.value })} />

      <FormInput value={address} type={"text"} label={"Address"}
        name={"address"} required
        onChange={(e) => updateFields({ address: e.target.value })} />

      <FormInput label={"Gender"} type={"text"} name={""} required value={gender} onChange={

      } />

    </FormWrapper>
  )
}