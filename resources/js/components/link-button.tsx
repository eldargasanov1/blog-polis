import { InertiaLinkProps, Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

interface Props extends PropsWithChildren<InertiaLinkProps> {
    arrowDirection: 'left' | 'right';
}

function LinkButton({ children, href, arrowDirection, ...props }: Props) {
    return (
        <Link href={href} className="group/link flex items-center gap-2 transition-all duration-300 hover:text-yellow-400" {...props}>
            {arrowDirection === 'left' && <BsArrowLeft className="transition-all duration-300 group-hover/link:-translate-x-1" />}
            <span className="uppercase">{children}</span>
            {arrowDirection === 'right' && <BsArrowRight className="transition-all duration-300 group-hover/link:translate-x-1" />}
        </Link>
    );
}

export default LinkButton;
