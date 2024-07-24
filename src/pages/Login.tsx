import FormHeader from "../components/FormHeader";
import LoginForm from "../components/LoginForm";
import Template from "./Template";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <Template>
            <div className="flex min-h-[800px] bg-white rounded-3xl flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <FormHeader text='Login' />
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <LoginForm />

                    <div className="mt-10 space-y-5">
                        <p className="text-center text-sm text-gray-500">
                            Dont't have an account? {' '}
                            <Link 
                                className="font-semibold leading-6 text-blue-600 hover:text-blue-500" 
                                to="/signup">
                                Sign up
                            </Link>
                        </p>

                        <p className="text-center text-sm text-gray-500">
                            By creating or logging into an account you are agreeing with our {''}
                            <a href="#" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
                                Terms and Conditions {''}
                            </a>
                            and {''}
                            <a href="#" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
                            Privacy Statement
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </Template>
    );
}