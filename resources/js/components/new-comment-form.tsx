import ActionButton from '@/components/action-button';
import TextArea from '@/components/text-area';
import { Article } from '@/types';
import { useForm } from '@inertiajs/react';
import { ChangeEvent, FormEventHandler } from 'react';
import { route } from 'ziggy-js';

interface Props {
    articleId: Article['id'];
}

function NewCommentForm({ articleId }: Props) {
    const { data, setData, post, processing, errors } = useForm<Pick<Article, 'content'>>({
        content: '',
    });

    const createComment: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('articles.comments.store', articleId), {
            preserveScroll: true,
            preserveState: true,

            onSuccess: () => setData({ content: '' }),
        });
    };

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const key = e.target.id;
        const value = e.target.value;
        setData({ ...data, [key]: value });
    };

    return (
        <form
            onSubmit={createComment}
            onReset={() => setData({ content: '' })}
            inert={processing}
            className="group flex flex-col gap-2 inert:opacity-50"
        >
            <TextArea label="Написать комментарий:" name="content" error={errors.content} value={data.content} onChange={onChange} className="h-30" />
            <div className="flex items-center gap-2">
                <ActionButton type="submit" disabled={processing} className={'bg-emerald-600 hover:bg-emerald-500'}>
                    Отправить
                </ActionButton>
                <ActionButton type="reset" disabled={processing} className="hover:bg-red-500">
                    Очистить
                </ActionButton>
            </div>
        </form>
    );
}

export default NewCommentForm;
