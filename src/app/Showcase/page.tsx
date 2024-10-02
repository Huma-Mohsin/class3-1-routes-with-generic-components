import Button from "../../../components/button";
import NavBar from "../../../components/navbar";
import ShowcaseComponent from "../../../components/showcase";

function Showcase() {
    return (
        <div style={{ textAlign: "center" }}>

            <NavBar/>
            <ShowcaseComponent
                text="Join us for Next.js Conf on Oct 24"
                style={{ color: "black", fontWeight: "bold", margin: "20px", padding: "10px" }}
            />
            <ShowcaseComponent
                text="The web framework for when it matters"
                style={{ color: "grey", fontWeight: "bolder", fontSize: "60px", padding: "10px" }}
            />
            <ShowcaseComponent
                text="Peerless performance, efficiency and developer experience. Next.js is trusted by some of the biggest names of the web."
                style={{ color: "grey" }}
            />
            <br />
            <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
                <Button
                    name="Learn About Managed Next.js"
                    style={{
                        background: "black",
                        color: "white",
                        borderRadius: "20px",
                        margin: "15px",
                        padding: "15px",
                        fontSize: "18px"
                    }}
                />
                <Button
                    name="Contact sales"
                    style={{
                        background: "lightgrey",
                        color: "black",
                        borderRadius: "20px",
                        margin: "15px",
                        padding: "15px",
                        fontSize: "18px"
                    }}
                />
            </div>
        </div>
    );
}

export default Showcase;
