import LinkButton from '@/components/link-button';
import NewArticleForm from '@/components/new-article-form';
import { AppLayout } from '@/layouts/app-layout';
import Container from '@/layouts/container';
import { JSX } from 'react';
import { route } from 'ziggy-js';

const Create = () => {
    return (
        <div className="flex h-screen flex-col gap-4 py-12">
            <Container>
                <LinkButton arrowDirection="left" href={route('articles.index')}>
                    Список статей
                </LinkButton>
            </Container>
            <div className="px-4">
                <Container className="flex max-w-2xl flex-1 flex-col gap-8 rounded-lg border border-emerald-500 bg-emerald-600 py-12">
                    <h1 className="text-center text-5xl">Создать статью</h1>
                    <NewArticleForm />
                </Container>
            </div>
        </div>
    );
};

Create.layout = (page: JSX.Element) => <AppLayout children={page} title="Создать статью" />;

export default Create;
