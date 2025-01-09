import React, { useState } from "react";
import Layout from "../Layouts/Layout";
import { Link, usePage, Head } from "@inertiajs/react";
import "../../css/home.css";

const Home = ({ posts }) => {
    console.log(posts);
    //console.log(usePage());

    const { flash } = usePage().props;
    const { component } = usePage();

    const [flashMsg, setFlash] = useState(flash.message);

    setTimeout(() => {
        setFlash(null);
    }, 2000);

    return (
        <>
            <Head title={component}>
                <meta
                    head-key="description"
                    name="description"
                    content="This is the default description"
                />
            </Head>
            <div className="title">Hello</div>
            {flashMsg && <div>{flashMsg}</div>}
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
