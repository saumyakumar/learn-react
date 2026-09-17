const Button = ({text, handleClick, ...props}) => {
    return (
        <div className="button">
            <button onClick={handleClick} {...props}>{text}</button>
        </div>
    )
}

export default Button;