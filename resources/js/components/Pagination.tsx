import { cn } from '@/lib/utils';
import { PaginationMetadata } from '@/types';
import { Link } from '@inertiajs/react';

interface Props {
    links: PaginationMetadata['links'];
}

function Pagination({ links }: Props) {
    return (
        <ul className="flex items-center gap-2 self-center select-none">
            {links.map((link, i) => (
                <li key={i}>
                    {link.url ? (
                        <Link
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={cn(
                                'flex min-h-8.5 min-w-8.5 items-center justify-center rounded-sm border border-transparent px-2 py-1 text-center transition duration-300 hover:border-yellow-400 hover:text-yellow-400',
                                link.active && 'text-yellow-500',
                            )}
                        />
                    ) : (
                        <span
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="flex min-h-8.5 min-w-8.5 cursor-default items-center justify-center px-2 py-1 text-center"
                        />
                    )}
                </li>
            ))}
        </ul>
    );
}

export default Pagination;
