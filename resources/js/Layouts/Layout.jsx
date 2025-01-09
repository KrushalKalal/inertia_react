import { Link, Head } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <main>
            <Head>
                <meta
                    head-key="description"
                    name="description"
                    content="This is the default description"
                />
            </Head>
            <header>
                <nav>
                    <Link className="nav-link" href="/">
                        Home
                    </Link>
                    <Link className="nav-link" href="/about">
                        About
                    </Link>
                    <Link className="nav-link" href="posts/create">
                        create
                    </Link>
                </nav>
            </header>
            <main>{children}</main>
        </main>
    );
}
