import React, { useEffect, useState } from 'react';
import FormWrapper from '../../Elements/Forms/FormWrapper';
import 'react-phone-number-input/style.css';
import FormInput from '../../Elements/Forms/FormInput';
import OTPInput from '../../Elements/Forms/OTP/OTPInput';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { parsePhoneNumberFromString } from 'libphonenumber-js'

type RiderDetails = {
  first_name: string;
  last_name: string;
  password: string;
  phone_no: string;
  confirmPassword: string;
  // onPhoneChange: (phone: string) => void;
}

type RiderDetailsProps = RiderDetails & {
  updateFields: (fields: Partial<RiderDetails>) => void;
}

export default function RiderDetails({ first_name, last_name, password, phone_no, confirmPassword, updateFields }: RiderDetailsProps) {
  const [phone, setPhone] = useState(phone_no);
  const [isInputEnabled, setIsInputEnabled] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otpCode, setOtpCode] = useState<string>("");
  const [isPinReady, setIsPinReady] = useState(false)
  const maximumCodeLength = 4;

  const handleVerifyClick = () => {
    setShowOTP(true);
  };

  

  const handlePhoneChange = (value: string) => {
    const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
    let formattedValue = '';
    if (numericValue.startsWith('0757')) {
      formattedValue = `+254 ${numericValue.slice(1, 4)} ${numericValue.slice(4)}`;
    } else {
      formattedValue = `+${numericValue}`;
    }
    const phoneNumber = parsePhoneNumberFromString(formattedValue);
    if (phoneNumber) {
      setPhone(phoneNumber.formatInternational());
      updateFields({ phone_no: phoneNumber.formatInternational() })
    } else {
      setPhone('');
      updateFields({ phone_no: '' })
    }
    console.log(phone); // Log the phone number to the console
  };


  return (
    <FormWrapper title="Rider Details">
      <FormInput value={first_name} onChange={(e) => updateFields({ first_name: e.target.value })} label="First Name" type="text" name="f_name" required />
      <FormInput value={last_name} onChange={(e) => updateFields({ last_name: e.target.value })} label="Last Name" name="l_name" type="text" required />
      <FormInput value={password} onChange={(e) => updateFields({ password: e.target.value })} label="Password" name="l_name" type="password" required />
      <FormInput value={confirmPassword} onChange={(e) => updateFields({ confirmPassword: e.target.value })} label="Confirm Password" name="l_name" type="password" required />

      <div className="flex flex-col space-y-3">
        {/* <label htmlFor="phone">Phone</label> */}
        <PhoneInput
          country={'ke'}
          value={phone}
          onChange={handlePhoneChange}
          inputClass='h-12'
          inputStyle={{
            width: '100%',
            borderWidth: 0,
            backgroundColor: '#222222',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          containerStyle={{
            backgroundColor: '#222222',
          }}
          dropdownStyle={{
            backgroundColor: '#222222',
          }}
          containerClass='border-2 bg-primary w-full h-12 rounded-lg'
        />

        {/* <div className='flex justify-between items-center'>
          {showOTP && (
            <>
              <OTPInput
                code={otpCode}
                setCode={setOtpCode}
                maximumLength={maximumCodeLength}
                setIsPinReady={setIsPinReady}
              />
            </>
          )}
          <div>
            <button
              type="button"
              className="rounded-lg border-[#FB4552] w-28 h-12 border-2 flex items-center justify-center space-x-3 hover:bg-[#FB4552]"
              onClick={handleVerifyClick}
            >
              Verify
            </button>
          </div>
        </div> */}
      </div>
    </FormWrapper>
  );
}
