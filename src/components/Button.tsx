import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => (
    <div>
        <button
            type="submit"
            className={classNames(
                className,
                "flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                {
                    'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600': !className
                }
            )}
            onClick={onClick}
        >
            {text}
        </button>
    </div>
);

export default Button;
