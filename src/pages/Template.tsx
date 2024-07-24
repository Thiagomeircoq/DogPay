import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export default function Template({ children }: Props) {
    return (
        <div className="max-w-md h-screen flex flex-col justify-center border mx-auto overflow-auto">
            {children}
        </div>
    )
}