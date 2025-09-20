import { cn } from '@/lib/utils';
import { TextareaHTMLAttributes } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string;
    label: string;
    name: string;
    labelClassname?: string;
    containerClassname?: string;
}

function TextArea({ label, name, error, value, onChange, labelClassname, containerClassname, className, ...props }: Props) {
    return (
        <div className={cn('flex flex-col', containerClassname)}>
            <label htmlFor={name} className={cn(labelClassname)}>
                {label}
            </label>
            <textarea
                id={name}
                value={value}
                name={name}
                onChange={onChange}
                className={cn(
                    'resize-none rounded border-2 border-transparent bg-emerald-500 p-2 transition-all duration-300 outline-none focus:border-yellow-400',
                    className,
                )}
                {...props}
            />
            {error && <span className="text-red-500">{error}</span>}
        </div>
    );
}

export default TextArea;
