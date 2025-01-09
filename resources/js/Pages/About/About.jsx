import React from "react";
import { usePage, Head } from "@inertiajs/react";

const About = () => {
    const { component } = usePage();
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <div>About</div>
        </>
    );
};

export default About;
