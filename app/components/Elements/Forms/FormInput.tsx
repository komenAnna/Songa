import React from 'react'

type FormInputProps = {
    label: string
    type: string
    name: string
    required: boolean
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormInput({ label, type, name, required, value, onChange }: FormInputProps) {
    return (
        <div className='flex flex-col space-y-3'>
            <label htmlFor={label}>{label}</label>
            <input autoComplete='off' value={value} type={type} name={name} required={required} onChange={onChange} className='bg-transparent border h-12 rounded-lg' />
        </div>
    )
}
