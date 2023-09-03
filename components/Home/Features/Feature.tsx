import React from 'react';
import clsx from 'clsx';
interface FeatureProps {
    id: number;
    name: string;
    icon: React.ElementType;
    description: string;
}

const colors = [
    'bg-amber-500',
    'bg-red-500',
    'bg-cyan-500',
    'bg-accent-500',

    'bg-lime-500',
    'bg-emerald-500',

]

const Feature: React.FC<FeatureProps> = ({ id, name, icon, description }) => {
    return (
        <div key={name} className="flex flex-col">
            <div className="flex flex-col items-center gap-8 leading-7 text-gray-900">
                <div
                    className={
                        clsx(
                            'p-4 rounded-xl',
                            colors[id - 1 % colors.length]
                        )
                    }


                >{React.createElement(icon, { className: "h-8 w-8 flex-none text-white", 'aria-hidden': true })}</div>
                <hr className='h-px w-full bg-gray-400' />
                <div className="mt-4 text-center space-y-4">
                    <h3 className="text-2xl font-bold text-gray-800 ">{name}</h3>
                    <p className="flex-auto text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;
