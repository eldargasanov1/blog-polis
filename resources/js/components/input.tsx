import { cn } from '@/lib/utils';
import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    label: string;
    name: string;
    labelClassname?: string;
    containerClassname?: string;
}

function Input({ label, name, error, value, onChange, labelClassname, containerClassname, className, ...props }: Props) {
    return (
        <div className={cn('flex flex-col', containerClassname)}>
            <label htmlFor={name} className={cn(labelClassname)}>
                {label}
            </label>
            <input
                type="text"
                id={name}
                value={value}
                name={name}
                onChange={onChange}
                className={cn(
                    'rounded border border-transparent bg-emerald-500 p-2 transition-all duration-300 outline-none focus:border-yellow-400',
                    className,
                )}
                {...props}
            />
            {error && <span className="text-red-500">{error}</span>}
        </div>
    );
}

export default Input;
