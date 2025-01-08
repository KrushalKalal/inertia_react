import { useForm } from "@inertiajs/react";
import React from "react";

const Create = () => {
    console.log(useForm());
    return (
        <>
            <h1 className="title">Create a new post</h1>
            <div className="w-1/2 mx-auto">
                <form>
                    <textarea rows="10  "></textarea>
                    <button className="btn primary-btn mt-4">
                        Create Post
                    </button>
                </form>
            </div>
        </>
    );
};

export default Create;
