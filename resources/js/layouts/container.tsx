import { cn } from '@/lib/utils';
import { HTMLAttributes, PropsWithChildren } from 'react';

type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

function Container({ children, className, ...props }: Props) {
    return (
        <div className={cn('container mx-auto my-0 px-6', className)} {...props}>
            {children}
        </div>
    );
}

export default Container;
