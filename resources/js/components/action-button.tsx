import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

function ActionButton({ children, className, disabled, ...props }: Props) {
    return (
        <button className={cn('cursor-pointer rounded px-2 py-1 transition-all duration-300', className, disabled && 'disabled')} {...props}>
            {children}
        </button>
    );
}

export default ActionButton;
