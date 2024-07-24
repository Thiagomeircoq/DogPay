import DogPayIconWhite from '../assets/img/dogpay-white-icon.svg';
import Button from '../components/Button';
import Template from './Template';
import { useNavigate } from 'react-router-dom';

export default function IntroScreen() {
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate('/signup');
    };

    return (
        <Template>
            <div className="flex justify-between min-h-[800px] bg-blue-600 rounded-3xl flex-1 flex-col px-6 py-12 lg:px-8">
                <div className='relative w-full h-full flex justify-center items-center mb-8'>
                    <img src={DogPayIconWhite} className='w-52 absolute' alt="DogPay Icon White" />
                </div>

                <div className='flex justify-center space-x-2 mb-12'>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                </div>

                <Button
                    className='bg-white text-blue-600 hover:text-blue-700 text-lg hover:bg-slate-100' 
                    text='Get Started'
                    onClick={handleGetStartedClick}
                />
                    
            </div>
        </Template>
    );
}