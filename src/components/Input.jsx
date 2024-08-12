import { useId, forwardRef } from "react"

const Input = forwardRef(({ type = "text", label, className, ...props }, ref) => {
    const id = useId();
    return (
        <div className="w-100">
            {label && <label className="d-inline-block mb-1 ps-1" htmlFor={id} >{label}</label>}

            <input type={type}
                style={{ outline: 'none', transition: 'background-color 0.2s' }}
                onFocus={(e) => e.target.style.backgroundColor = '#f9fafb'}
                onBlur={(e) => e.target.style.backgroundColor = ''}
                className={`form-control px-3 py-2 rounded bg-white text-dark border border-secondary w-100 ${className}`}
                {...props} name="" id={id}
                ref={ref}
            />

        </div>

    )
})

export default Input