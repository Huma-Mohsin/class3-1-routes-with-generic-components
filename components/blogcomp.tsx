interface BlogComponentProps {
    text: string;  // Define the type of the text prop
}

const BlogComponent: React.FC<BlogComponentProps> = ({ text }) => {
    return (

        
        <div style={{
            border: "1px solid #ccc",  // Light gray border
            borderRadius: "5px",       // Rounded corners
            padding: "20px",           // Padding for spacing
            margin: "20px ",          // Margin for spacing between blog entries
            backgroundColor: "#f9f9f9", // Light background color
            maxHeight: "100vh",        // Limit height to viewport height
            maxWidth: "50vh",          // Limit width to 50vh
            overflowY: "auto",         // Allow scrolling if content exceeds max height
            display:"inline-block",    // display multiple divs in a single line
            
        }}>
           
            <br/>

           
            <p style={{ fontSize: "16px", lineHeight: "1.5", color: "#333" }}>
                {text}
            </p>
        </div>
    );
};

export default BlogComponent;
