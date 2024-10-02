interface ButtonProps {
    name: string;        // Name of the button
    style?: React.CSSProperties;  // Optional style prop
}

function Button(props: ButtonProps) {
    return (
        <div>
            <input 
                type="button" 
                value={props.name}  // Set button text
                style={props.style}  // Apply style from props
            />
        </div>
    );
}

export default Button;
