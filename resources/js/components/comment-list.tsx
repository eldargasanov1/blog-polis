import { Article } from '@/types';

interface Props {
    comments: Article['comments'];
}

function CommentList({ comments }: Props) {
    return (
        <ul className="flex flex-col">
            {comments.map((comment) => (
                <li key={comment.id} className="flex flex-col gap-2 border-white/20 py-4 [&:not(:last-child)]:border-b">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 text-xl">
                            <span>{comment.id}</span> - <span className="text-3xl">{comment.user_name}</span>
                        </div>
                        <span className="text-md">{comment.created_at}</span>
                    </div>
                    <p className="text-xl">{comment.content}</p>
                </li>
            ))}
        </ul>
    );
}

export default CommentList;
