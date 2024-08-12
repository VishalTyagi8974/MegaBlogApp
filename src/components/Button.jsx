export default function Button({
    children,
    type = "button",
    bgColor = "btn-primary",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            className={`btn ${bgColor} ${textColor} ${className}`}
            {...props}>
            {children}
        </button>
    )
}
