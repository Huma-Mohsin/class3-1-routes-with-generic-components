import NavBar from "../../../components/navbar";

function Enterprises() {
    return (
        <div style={{ backgroundColor: "#f9f9f9", padding: "20px" }}>
            <NavBar />
            <h1 style={{
                color: "black",
                fontWeight: "bolder",
                fontSize: "30px",
                padding: "20px",
                textAlign: "center" ,
                textDecoration:"underline"// Centered the heading for better presentation
            }}>
                Learn about Next.js on Vercel
            </h1>
            <br />
            <h2 style={{
                color: "black",
                fontWeight: "bolder",
                fontSize: "25px",
                textAlign: "center"
            }}>
                Get a custom demo.
            </h2>
            <h3 style={{
                color: "grey",
                fontWeight: "lighter",
                fontSize: "20px",
                textAlign: "center"
            }}>
                Discover the value of Vercel for your enterprise and explore our custom plans and pricing.
            </h3>
            <br />

            <h2 style={{
                color: "black",
                fontWeight: "bolder",
                fontSize: "25px",
                textAlign: "center"
            }}>
                Set up your Enterprise trial.
            </h2>
            <h3 style={{
                color: "grey",
                fontWeight: "lighter",
                fontSize: "20px",
                textAlign: "center"
            }}>
                See for yourself how Vercel Enterprise speeds up your workflow & impact.
            </h3>
        </div>
    );
}

export default Enterprises;
