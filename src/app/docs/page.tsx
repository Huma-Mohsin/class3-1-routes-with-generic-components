import Introdoc from "../../../components/intro"; // Importing the Introdoc component
import NavBar from "../../../components/navbar";

function Docs() {
    return (
        <div style={{ padding: "10px" }}> 
        <NavBar/>
            <h1 style={{ color: "blue", textAlign: "center", fontSize: "30px" }}></h1>
            <Introdoc />
        </div>
    );
}

export default Docs;
