import ArticleCard from '@/components/article-card';
import Pagination from '@/components/pagination';
import { Article, PaginatedData } from '@/types';

interface Props {
    articles: PaginatedData<Article>;
}

function ArticlesList({ articles }: Props) {
    return (
        <div className="flex flex-1 flex-col gap-5 overflow-hidden">
            <ul className="grid flex-1 grid-cols-1 gap-4 overflow-y-auto p-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-600 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                {articles.data.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </ul>
            {articles.meta.per_page < articles.meta.total && <Pagination links={articles.meta.links} />}
        </div>
    );
}

export default ArticlesList;
