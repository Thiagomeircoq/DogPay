import Message from './Message';

interface InputFieldProps {
    id: string;
    label: string;
    type: string;
    autoComplete: string;
    required?: boolean;
    register: any;
    error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, type, autoComplete, required, register, error }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-500">
            {label}
        </label>
        <div className="mt-2">
            <input
                id={id}
                name={id}
                type={type}
                required={required}
                autoComplete={autoComplete}
                className="block w-full rounded-md bg-gray-100 border-0 py-2 px-3 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:outline-none focus:ring-inset sm:text-sm sm:leading-6"
                {...register(id)}
            />
            {error && <Message type="error" message={error} />}
        </div>
    </div>
);

export default InputField;