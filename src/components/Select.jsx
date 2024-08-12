import { forwardRef, useId } from "react"

function Select({ options, label, className, ...props }, ref) {
    const id = useId();
    return (
        <div className="w-100">
            {label && <label htmlFor={id} className="d-inline-block mb-1 ps-1" >{label}</label>}

            <select
                style={{ outline: 'none', transition: 'background-color 0.2s' }}
                onFocus={(e) => e.target.style.backgroundColor = '#f9fafb'}
                onBlur={(e) => e.target.style.backgroundColor = ''}
                className={`form-control px-3 py-2 rounded bg-white text-dark border border-secondary w-100 ${className}`}
                {...props} name="" id={id}
                ref={ref}>

                {options?.map(opt => (<options value={opt} key={opt}>{opt}</options>))}

            </select>
        </div>
    )
}

export default forwardRef(Select)