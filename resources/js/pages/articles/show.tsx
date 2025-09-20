import BackgroundImage from '@/components/background-image';
import CommentList from '@/components/comment-list';
import LinkButton from '@/components/link-button';
import NewCommentForm from '@/components/new-comment-form';
import { AppLayout } from '@/layouts/app-layout';
import Container from '@/layouts/container';
import { Article } from '@/types';
import { JSX } from 'react';
import { route } from 'ziggy-js';

interface Props {
    article: Article;
}

const Show = ({ article }: Props) => {
    return (
        <div className="flex flex-1 flex-col gap-10 pb-12">
            <div className="group relative flex min-h-[60vh] flex-col">
                <BackgroundImage className="absolute pb-[55%] sm:pb-[40%] lg:pb-[20%]" />
                <Container className="relative flex h-full max-w-5xl flex-1 flex-col gap-12 py-10">
                    <LinkButton arrowDirection="left" href={route('articles.index')}>
                        Список статей
                    </LinkButton>
                    <div className="flex flex-1 flex-col justify-end gap-3">
                        <span>{article.created_at}</span>
                        <div className="flex flex-col gap-10">
                            <h1 className="text-5xl">{article.title}</h1>
                            <p className="text-2xl">{article.content}</p>
                        </div>
                    </div>
                </Container>
            </div>
            <div>
                <Container className="flex max-w-5xl flex-col gap-5">
                    <h2 className="text-3xl font-bold">Комментарии</h2>
                    <NewCommentForm articleId={article.id} />
                    {article.comments.length > 0 && (
                        <>
                            <hr />
                            <CommentList comments={article.comments} />
                        </>
                    )}
                </Container>
            </div>
        </div>
    );
};

Show.layout = (page: JSX.Element) => <AppLayout children={page} title={page.props.article.title} />;

export default Show;
