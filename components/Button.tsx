import React, { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
} & Omit<React.ComponentProps<'button'>, 'children'>;
function Button(props: ButtonProps) {
    return (
        <button
            className={`py-2.5 px-4 rounded bg-primary-300 hover:bg-primary-500 duration-100 w-full block focus:border-none focus:outline-none focus:bg-primary-700 text-white font-semibold ${
                props.className || ''
            }`}
            {...props}
        >
            {props.children}
        </button>
    );
}

export default Button;
