import FormHeader from "../components/FormHeader";
import SignUpForm from "../components/SingUpForm";

export default function SignUp() {
    return (
        <div className="flex min-h-[800px] bg-white rounded-3xl flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <FormHeader text='Sing Up' />
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <SignUpForm />
                <p className="mt-10 text-center text-sm text-gray-500">
                    Already have an account? {' '}
                    <a href="#" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}