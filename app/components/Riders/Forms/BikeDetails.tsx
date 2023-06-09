import React from 'react'
import FormInput from '../../Elements/Forms/FormInput'
import FormWrapper from '../../Elements/Forms/FormWrapper'

export default function BikeDetails() {
  return (
    <FormWrapper title='Bike Details'>
      <FormInput 
        label='Type of Bike'
        type='text'
        name='bike_type'
      />
      <FormInput 
        label='Plate Number'
        type='text'
        name='plate_no'
      />
      <FormInput 
        label='Insuarance Provider'
        name='insuarance_provider'
        type='text'
      />
      <FormInput
        label='Insuarance Policy Number'
        name='insuarance_policy_no'
        type='text'
      />
    </FormWrapper>
  )
}
