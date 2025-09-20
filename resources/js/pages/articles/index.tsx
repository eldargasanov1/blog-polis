import ArticlesList from '@/components/articles-list';
import LinkButton from '@/components/link-button';
import { AppLayout } from '@/layouts/app-layout';
import Container from '@/layouts/container';
import { Article, PaginatedData } from '@/types';
import { JSX } from 'react';
import { route } from 'ziggy-js';

interface Props {
    articles: PaginatedData<Article>;
}

const Index = ({ articles }: Props) => {
    return (
        <div className="h-screen gap-5 py-12">
            <Container className="flex h-full flex-1 flex-col gap-5">
                <div className="flex items-center justify-between gap-3">
                    <h1 className="text-5xl">Список новостей</h1>
                    <LinkButton href={route('articles.create')} arrowDirection="right">
                        Добавить статью
                    </LinkButton>
                </div>
                <ArticlesList articles={articles} />
            </Container>
        </div>
    );
};

Index.layout = (page: JSX.Element) => <AppLayout children={page} title="Список постов" />;

export default Index;
