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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <FormInput value={location} type={"text"} label={"Location"}
                 required={false} name="location"
                 onChange={(e) => updateFields({ location: e.target.value })} />
      <FormInput value={stage} type={"text"} label={"Stage"}
        required={false} name="stage"
        onChange={(e) => updateFields({ stage: e.target.value })} />

      <FormInput value={address} type={"text"} label={"Address"}
        name={"address"} required={false}
        onChange={(e) => updateFields({ address: e.target.value })} />

      <FormInput 
        label={"Gender"} 
        type={"text"} 
        name={"gender"} 
        required={false} 
        value={gender}  
        onChange={(e) => updateFields({ gender: e.target.value })}  
      />

    </div>
  )
}
