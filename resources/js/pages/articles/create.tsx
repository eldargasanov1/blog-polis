import { AppLayout } from '@/layouts/app-layout';
import { Article } from '@/types';
import { useForm } from '@inertiajs/react';
import { ChangeEvent, FormEventHandler } from 'react';
import { route } from 'ziggy-js';

const Create = () => {
    const { data, setData, post, processing, reset, errors } = useForm<Pick<Article, 'title' | 'content'>>({
        title: '',
        content: '',
    });

    const createArticle: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('articles.store'), {
            preserveScroll: true,
        });
    };

    const onChange = (e: ChangeEvent) => {
        const key = e.target.id;
        const value = e.target.value;
        setData({ ...data, [key]: value });
    };

    return (
        <div>
            <h1>Создать статью</h1>
            <form onSubmit={createArticle} onReset={() => reset()} inert={processing} className="group inert:opacity-50">
                <div>
                    <label htmlFor="title">Название</label>
                    <input type="text" id="title" value={data.title} name="title" onChange={onChange} />
                    {errors.title && <span>{errors.title}</span>}
                </div>
                <div>
                    <label htmlFor="content">Контент</label>
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
        </div>
    );
};

Create.layout = (page) => <AppLayout children={page} title="Создать статью" />;

export default Create;
