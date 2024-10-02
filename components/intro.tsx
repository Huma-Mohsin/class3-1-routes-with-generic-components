function Introdoc() {
    return (
        <div style={{ padding: "20px" }}> {/* Add padding for overall spacing */}
            <h1 style={{
                color: "blue",
                textAlign: "left",
                textDecoration: "underline",
                fontSize: "50px",
                fontWeight: "bolder"
            }}>
                Introduction
            </h1>
            <br/>

            <h4 style={{ color: "green", fontSize: "20px" }}>
                Welcome to the Next.js documentation!
            </h4>

            <br />

            <h1 style={{
                color: "black",
                textAlign: "left",
                textDecoration: "underline",
                fontSize: "50px",
                fontWeight: "bolder"
            }}>
                What is Next.js?
            </h1>

            <br />

            <h4 style={{
                color: "black",
                fontSize: "18px"
            }}>
                Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
                <br />
                <br/>
                Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.
                <br />
                <br/>
                Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.
            </h4>
        </div>
    );
}

export default Introdoc;
