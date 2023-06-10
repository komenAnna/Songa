import React from 'react'
import FormInput from '../../Elements/Forms/FormInput'
import FormWrapper from '../../Elements/Forms/FormWrapper'

type RiderDetails = {
  bike_type: string;
  plate_no: string;
  insuarance_provider: string;
  insuarance_policy_no: string;
}

type RiderDetailsProps = RiderDetails & {
  updateFields: (fields: Partial<RiderDetails>) => void;
}

export default function BikeDetails({ bike_type, plate_no, insuarance_policy_no, insuarance_provider, updateFields }: RiderDetailsProps) {
  return (
    <FormWrapper title='Bike Details'>
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
        value={insuarance_provider}
        onChange={e => updateFields({ insuarance_provider: e.target.value })}
        name='insuarance_provider'
        type='text'
        required={false}
      />
      <FormInput
        label='Insuarance Policy Number'
        value={insuarance_policy_no}
        onChange={e => updateFields({ insuarance_policy_no: e.target.value })}
        name='insuarance_policy_no'
        type='text'
        required={false}
      />
    </FormWrapper>
  )
}
