import { Head } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    title: string;
}

function AppLayout({ title, children }: Props) {
    return (
        <>
            <Head title={title}></Head>
            <main className="flex h-full w-full flex-col items-center">
                <div className="container">{children}</div>
            </main>
        </>
    );
}

export { AppLayout };
