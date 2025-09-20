import { Head } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    title: string;
}

function AppLayout({ title, children }: Props) {
    return (
        <>
            <Head title={title}></Head>
            <main className="flex min-h-screen flex-col bg-emerald-800 text-white">
                <div className="flex flex-1 flex-col">{children}</div>
            </main>
        </>
    );
}

export { AppLayout };
