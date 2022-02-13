import React from 'react';

type InputProps = {
    label: string;
    name: string;
} & Omit<React.ComponentProps<'input'>, 'name'>;
function Input(props: InputProps) {
    return (
        <div>
            <label htmlFor={props.name} className='text-white block mb-1 font-semibold'>
                {props.label}
            </label>
            <input
                {...props}
                id={props.name}
                className={`py-2.5 px-4 rounded bg-primary-800 w-full block focus:border-none focus:outline-none focus:bg-primary-700 text-white font-semibold ${
                    props.className || ''
                }`}
            />
        </div>
    );
}

export default Input;
