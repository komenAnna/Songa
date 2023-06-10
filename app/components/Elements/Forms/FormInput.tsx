import React from 'react'

type FormInputProps ={
    label: string
    type: string
    name: string
}

export default function FormInput({label, type, name}: FormInputProps) {
    return (
        <div className='flex flex-col space-y-3'>
            <label htmlFor={label}>{label}</label>
            <input type={type} name={name} className='bg-transparent border h-12 rounded-lg' />
        </div>
    )
}
