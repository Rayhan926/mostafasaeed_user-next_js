import React from 'react';

type TextareaProps = {
    label: string;
    name: string;
} & Omit<React.ComponentProps<'textarea'>, 'name'>;
function Textarea(props: TextareaProps) {
    return (
        <div>
            <label htmlFor={props.name} className='text-white block mb-1 font-semibold'>
                {props.label}
            </label>
            <textarea
                {...props}
                id={props.name}
                className={`py-2.5 px-4 rounded resize-none bg-primary-800 w-full block focus:border-none focus:outline-none focus:bg-primary-700 text-white font-semibold ${
                    props.className || ''
                }`}
            ></textarea>
        </div>
    );
}

export default Textarea;
