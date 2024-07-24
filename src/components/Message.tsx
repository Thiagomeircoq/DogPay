interface MessageProps {
    type: 'success' | 'error';
    message: string;
}

const Message: React.FC<MessageProps> = ({ type, message }) => {
    const messageStyles = type === 'error' ? 'text-red-600 dark:text-red-500' : 'text-green-600 dark:text-green-500';
    return (
        <p className={`mt-2 text-sm ${messageStyles}`}>
            <span className="font-medium">{type === 'error' ? '' : ''}</span> {message}
        </p>
    );
};

export default Message;