import ActionButton from '@/components/action-button';
import Input from '@/components/input';
import TextArea from '@/components/text-area';
import { Article } from '@/types';
import { useForm } from '@inertiajs/react';
import { ChangeEvent, FormEventHandler } from 'react';
import { route } from 'ziggy-js';

function NewArticleForm() {
    const { data, setData, post, processing, errors } = useForm<Pick<Article, 'title' | 'content'>>({
        title: '',
        content: '',
    });

    const createArticle: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('articles.store'), {
            preserveScroll: true,
            preserveState: true,

            onSuccess: () => setData({ title: '', content: '' }),
        });
    };

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const key = e.target.id;
        const value = e.target.value;
        setData({ ...data, [key]: value });
    };

    return (
        <form
            onSubmit={createArticle}
            onReset={() => setData({ title: '', content: '' })}
            inert={processing}
            className="group flex flex-col gap-4 inert:opacity-50"
        >
            <Input
                label="Название"
                name="title"
                value={data.title}
                onChange={onChange}
                error={errors.title}
                containerClassname="gap-2"
                labelClassname="text-xl"
            />
            <TextArea
                label="Контент"
                name="content"
                value={data.content}
                onChange={onChange}
                error={errors.content}
                className="h-45"
                labelClassname="text-xl"
                containerClassname="gap-2"
            />
            <div className="flex items-center gap-2">
                <ActionButton type="submit" disabled={processing} className={'bg-emerald-600 hover:bg-emerald-500'}>
                    Создать
                </ActionButton>
                <ActionButton type="reset" disabled={processing} className="hover:bg-red-500">
                    Очистить
                </ActionButton>
            </div>
        </form>
    );
}

export default NewArticleForm;
