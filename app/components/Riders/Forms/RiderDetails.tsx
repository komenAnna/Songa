import React, { useState } from 'react';
import FormWrapper from '../../Elements/Forms/FormWrapper';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import Input from "react-phone-number-input/input"
import FormInput from '../../Elements/Forms/FormInput';

export default function RiderDetails() {
  const [phone, setPhone] = useState('');
  const [isInputEnabled, setIsInputEnabled] = useState(false);

  const handleInputChange = (value: string) => {
    const phoneNumber = parsePhoneNumberFromString(value);
    if (phoneNumber && phoneNumber.isValid()) {
      setPhone(phoneNumber.formatInternational());
      setIsInputEnabled(true); // Enable the input field for valid phone numbers
    } else {
      setPhone(value);
      setIsInputEnabled(false); // Disable the input field for invalid phone numbers
    }
  };

  const CustomInput = (props: any, ref: any) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPhone(event.target.value);
    };

    return (
      <input
        {...props}
        type="tel"
        // ref={ref}
        onChange={handleInputChange}
        value={phone || ''}
        className="bg-transparent border-0 focus:outline-none h-12 w-full rounded-lg px-3"
        style={{ color: 'red', fontWeight: 'bold' }} // Example inline styles
      />
    );
  };

  return (
    <FormWrapper title="Rider Details">
      <FormInput label='First Name' type='text' name='f_name' />
      <FormInput label='Last Name' name='l_name' type='text' />
      <div className='flex flex-col space-y-3'>
        <label htmlFor="f_name">Phone</label>
        <PhoneInput 
          defaultCountry='KE'
          placeholder="Enter phone number"
          value={phone}
          onChange={handleInputChange}
          inputComponent={CustomInput}
          // numberInputProps={{
          //   readOnly: !isInputEnabled,
          //   disabled: !isInputEnabled
          // }}
          className='bg-transparent border h-12 rounded-lg px-3'
        />
      </div>
    </FormWrapper>
  );
}
