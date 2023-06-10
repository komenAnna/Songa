import React from 'react';
import FormWrapper from '../Elements/Forms/FormWrapper';

type RiderDetails = {
  first_name: string;
  last_name: string;
  password: string;
  confirmPassword: string;
  phone_no: string;
  id_photo: string;
  dl_photo: string;
  bike_type: string;
  plate_no: string;
  insurance_provider: string;
  insurance_policy_no: string;
};

type RiderDetailsProps = RiderDetails & {
  updateFields: (fields: Partial<RiderDetails>) => void;
};

export default function Preview({ ...riderDetails }: RiderDetailsProps) {
  return (
    <FormWrapper title="">
      <div className="h-96 bg-[#222222] text-white p-6">
        <div className="mb-8">
          <h1 className="mb-2 text-lg font-semibold">Personal Information</h1>
          <div>
            <p className="mb-2">First Name: {riderDetails.first_name}</p>
            <p className="mb-2">Last Name: {riderDetails.last_name}</p>
            <p className="mb-2">Phone Number: {riderDetails.phone_no}</p>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="mb-2 text-lg font-semibold">Bike Information</h1>
          <div>
            <p className="mb-2">Bike Type: {riderDetails.bike_type}</p>
            <p className="mb-2">Plate Number: {riderDetails.plate_no}</p>
          </div>
        </div>

        <div>
          <h1 className="mb-2 text-lg font-semibold">Insurance Information</h1>
          <div>
            <p className="mb-2">Insurance Provider: {riderDetails.insurance_provider}</p>
            <p className="mb-2">Insurance Policy Number: {riderDetails.insurance_policy_no}</p>
          </div>
        </div>
      </div>

      <div className="bg-[#222222] text-white p-6 t-4">
        <h1 className="mb-2 text-lg font-semibold">Uploaded Photos</h1>
        <div>
          <p className="mb-2">ID Photo: {riderDetails.id_photo}</p>
          <p className="mb-2">Driver&apos;s License Photo: {riderDetails.dl_photo}</p>
        </div>
      </div>
    </FormWrapper>
  );
}
