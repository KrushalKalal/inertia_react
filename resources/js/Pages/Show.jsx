import React from "react";

const Show = ({ post }) => {
    return (
        <>
            <div className="p-4 border-b">
                <div className="text-sm text-slate-600">
                    <span>Posted On:</span>
                    <span>
                        {new Date(post.created_at).toLocaleTimeString()}
                    </span>
                </div>
                <p className="title">{post.body}</p>
            </div>
        </>
    );
};

export default Show;
