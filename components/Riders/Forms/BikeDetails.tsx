import React from 'react'
import FormInput from '../../Elements/Forms/FormInput'
import FormWrapper from '../../Elements/Forms/FormWrapper'

type RiderDetails = {
  bike_type: string;
  plate_no: string;
  insurance_provider: string;
  insurance_policy_no: string;
}

type RiderDetailsProps = RiderDetails & {
  updateFields: (fields: Partial<RiderDetails>) => void;
}

export default function BikeDetails({ bike_type, plate_no, insurance_policy_no, insurance_provider, updateFields }: RiderDetailsProps) {
  return (
    <FormWrapper title=''>
      <FormInput
        label='Type of Bike'
        value={bike_type}
        onChange={e => updateFields({ bike_type: e.target.value })}
        type='text'
        name='bike_type'
        required
      />
      <FormInput
        label='Plate Number'
        value={plate_no}
        onChange={e => updateFields({ plate_no: e.target.value })}
        type='text'
        name='plate_no'
        required
      />
      <FormInput
        label='Insuarance Provider'
        value={insurance_provider}
        onChange={e => updateFields({ insurance_provider: e.target.value })}
        name='insuarance_provider'
        type='text'
        required={false}
      />
      <FormInput
        label='Insuarance Policy Number'
        value={insurance_policy_no}
        onChange={e => updateFields({ insurance_policy_no: e.target.value })}
        name='insuarance_policy_no'
        type='text'
        required={false}
      />
    </FormWrapper>
  )
}
