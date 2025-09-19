import { AppLayout } from '@/layouts/app-layout';
import { Article, PaginatedData } from '@/types';
import { route } from 'ziggy-js';

interface Props {
    articles: PaginatedData<Article>;
}

const Index = ({ articles }: Props) => {
    return (
        <div>
            <ul>
                {articles.data.map((article) => (
                    <li key={article.id}>
                        <a href={route('articles.show', article.id)}>
                            {article.id} - {article.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex items-center gap-2">
                <a href={articles.links.first}>First Page</a>
                <a href={articles.links.previous}>Prev</a>
                <a href={articles.links.next}>Next</a>
                <a href={articles.links.last}>Last Page</a>
            </div>
        </div>
    );
};

Index.layout = (page) => <AppLayout children={page} title="Список постов" />;

export default Index;
