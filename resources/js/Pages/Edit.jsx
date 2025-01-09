import { useForm, Head, usePage } from "@inertiajs/react";
import React from "react";

const Edit = ({ post }) => {
    const { data, setData, put, processing, errors } = useForm({
        body: post.body,
    });
    const { component } = usePage();
    function submit(e) {
        e.preventDefault();
        put(`/posts/${post.id}`);
    }
    console.log(errors);
    return (
        <>
            <Head title={component}>
                <meta
                    head-key="description"
                    name="description"
                    content="This is the Create description"
                />
            </Head>
            <h1 className="title">Create a new post</h1>
            {data.body}
            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea
                        rows="10"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                    ></textarea>

                    {errors.body && <p className="error">{errors.body}</p>}
                    <button
                        className="btn primary-btn mt-4"
                        disabled={processing}
                    >
                        Update Post
                    </button>
                </form>
            </div>
        </>
    );
};

export default Edit;
