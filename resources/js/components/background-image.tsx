import { cn } from '@/lib/utils';
import { HTMLAttributes, useEffect, useState } from 'react';

type Props = HTMLAttributes<HTMLDivElement>;

function BackgroundImage({ className }: Props) {
    const [imageLink, setImageLink] = useState<string>('#');

    useEffect(() => {
        setImageLink(`https://picsum.photos/seed/${Math.random() * 100000}/3840/2160`);
    }, [setImageLink]);

    return (
        <div className={cn('top-0 left-0 z-0 h-full w-full overflow-hidden', className)}>
            <div className="absolute top-0 left-0 z-20 h-[25%] w-full bg-linear-to-b from-black/50 to-transparent opacity-80"></div>
            <img
                src={imageLink}
                alt="Article Detail Page Image"
                className="absolute top-0 left-0 h-full w-full object-cover transition-all duration-600 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 z-20 h-[85%] w-full bg-linear-to-t from-black to-transparent opacity-80"></div>
        </div>
    );
}

export default BackgroundImage;
