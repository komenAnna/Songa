import React from 'react'
import FormWrapper from '../Elements/Forms/FormWrapper'

export default function Preview() {
  return (
    <FormWrapper title="Preview">
      <div className='h-96 '>
        <div>
          <h1>First Name</h1>
          <h1>Last Name</h1>
        </div>
        <div>
          <h1>ID</h1>
        </div>
      </div>
    </FormWrapper>
  )
}
