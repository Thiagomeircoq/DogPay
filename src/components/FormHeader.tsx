interface FormHeaderProps {
    text: string
}

const FormHeader: React.FC<FormHeaderProps> = ({ text }) => (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-blue-600">
            { text }
        </h2>
    </div>
);

export default FormHeader;