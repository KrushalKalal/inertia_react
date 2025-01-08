import React from "react";
import Layout from "../Layouts/Layout";
import { Link } from "@inertiajs/react";
import "../../css/home.css";

const Home = ({ posts }) => {
    console.log(posts);
    return (
        <>
            <div className="title">Hello</div>
            <div>
                <table>
                    <tr>
                        <th>no</th>
                        <th>content</th>
                        <th>show</th>
                    </tr>
                    {posts.data.map((post) => (
                        <tr>
                            <td>{post.id}</td>
                            <td>{post.body}</td>
                            <td>
                                <Link
                                    href={`/posts/${post.id}`}
                                    className="text-link"
                                >
                                    Show
                                </Link>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
            <div className="py-12 px-4">
                {posts.links.map((link) =>
                    link.url ? (
                        <Link
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`dynamic-class ${
                                link.active ? "dynamic-class-active" : ""
                            }`}
                        />
                    ) : (
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="custom-class"
                        ></span>
                    )
                )}
            </div>
        </>
    );
};

Home.layout = (page) => <Layout children={page} />;
export default Home;
