import { Article } from '@/types';
import { Link } from '@inertiajs/react';
import { BsEmojiSunglasses } from 'react-icons/bs';
import { route } from 'ziggy-js';

interface Props {
    article: Article;
}

function ArticleCard({ article }: Props) {
    return (
        <li className="rounded-lg bg-emerald-700 p-6 transition duration-300 hover:scale-105 hover:bg-emerald-600 hover:text-yellow-400">
            <Link href={route('articles.show', article.id)} className="flex h-full w-full flex-col gap-10">
                <div className="flex flex-1 flex-col gap-4">
                    <span className="text-3xl">{article.title}</span>
                    <p className="flex-1" title={article.content}>
                        {article.content.length >= 150 ? article.content.slice(0, 150) + '...' : article.content}
                    </p>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                        <BsEmojiSunglasses size={25} />
                        <span className="px-1 py-1">Guest</span>
                    </div>
                    <span>{article.created_at}</span>
                </div>
            </Link>
        </li>
    );
}

export default ArticleCard;
