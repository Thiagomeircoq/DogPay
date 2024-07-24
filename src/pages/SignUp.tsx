import FormHeader from "../components/FormHeader";
import SignUpForm from "../components/SignUpForm";
import Template from "./Template";
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <Template>
            <div className="flex min-h-[800px] bg-white rounded-3xl flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <FormHeader text='Sign Up' />
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <SignUpForm />
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account? {' '}
                        <Link to="/login" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">Login</Link>
                    </p>
                </div>
            </div>
        </Template>
    );
}