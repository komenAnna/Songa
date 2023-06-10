import React from 'react'

type FormInputProps ={
    label: string
    type: string
    name: string
    required: boolean
}

export default function FormInput({label, type, name, required}: FormInputProps) {
    return (
        <div className='flex flex-col space-y-3'>
            <label htmlFor={label}>{label}</label>
            <input type={type} name={name} required={required} className='bg-transparent border h-12 rounded-lg' />
        </div>
    )
}
