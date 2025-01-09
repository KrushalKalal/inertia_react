import { useForm, Head, usePage, Link } from "@inertiajs/react";
import React from "react";

const Show = ({ post }) => {
    const { delete: destroy } = useForm();
    const { component } = usePage();

    function Submit(e) {
        e.preventDefault();
        destroy(`/posts/${post.id}`);
    }
    return (
        <>
            <Head title={component} />
            <div className="p-4 border-b">
                <div className="text-sm text-slate-600">
                    <span>Posted On:</span>
                    <span>
                        {new Date(post.created_at).toLocaleTimeString()}
                    </span>
                </div>
                <p className="title">{post.body}</p>
                <div className="flx item-center justify-end gap-2">
                    <form onSubmit={Submit}>
                        <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white">
                            Delete
                        </button>
                    </form>
                    <Link href={`/posts/${post.id}/edit`}>Update</Link>
                </div>
            </div>
        </>
    );
};

export default Show;
