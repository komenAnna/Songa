import React from 'react'
import FormWrapper from '../../Elements/Forms/FormWrapper'
import ImageUploader from '../../Elements/Forms/ImageUploader'

export default function Upload() {
  return (
    <FormWrapper title='Documents Upload'>
      <ImageUploader />
    </FormWrapper>
  )
}
