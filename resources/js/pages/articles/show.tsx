import { AppLayout } from '@/layouts/app-layout';
import { Article } from '@/types';
import { useForm } from '@inertiajs/react';
import { ChangeEvent, FormEventHandler } from 'react';
import { route } from 'ziggy-js';

interface Props {
    article: Article;
}

const Show = ({ article }: Props) => {
    const { data, setData, post, processing, reset, errors } = useForm<Pick<Article, 'content'>>({
        content: '',
    });

    const createComment: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('articles.comments.store', article.id), {
            preserveScroll: true,

            onSuccess: () => reset(),
        });
    };

    const onChange = (e: ChangeEvent) => {
        const key = e.target.id;
        const value = e.target.value;
        setData({ ...data, [key]: value });
    };

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>

            <div>
                <h2 className="font-bold">Comments</h2>
                <form onSubmit={createComment} onReset={() => reset()} inert={processing} className="group inert:opacity-50">
                    <div>
                        <label htmlFor="content">Комментарий:</label>
                        <input type="text" id="content" value={data.content} name="content" onChange={onChange} />
                        {errors.content && <span>{errors.content}</span>}
                    </div>
                    <div className="flex items-center gap-2">
                        <button type="submit" disabled={processing}>
                            Создать
                        </button>
                        <button type="reset" disabled={processing}>
                            Очистить
                        </button>
                    </div>
                </form>
                {article.comments.length > 0 && (
                    <ul>
                        {article.comments.map((comment) => (
                            <li key={comment.id}>
                                {comment.id} - {comment.content}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

Show.layout = (page) => <AppLayout children={page} title={page.props.article.title} />;

export default Show;
