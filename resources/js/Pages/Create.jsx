import { useForm } from "@inertiajs/react";
import React from "react";

const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        body: "",
    });
    function submit(e) {
        e.preventDefault();
        post("/posts");
    }
    console.log(errors);
    return (
        <>
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
                        Create Post
                    </button>
                </form>
            </div>
        </>
    );
};

export default Create;
