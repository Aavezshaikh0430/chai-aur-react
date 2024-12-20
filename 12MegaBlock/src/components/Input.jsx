import React, {useId} from 'react';


// function Input({}) {
//     const id = useId()
//   return (
//     <div>Input</div>
//   )
// }

// arrow fucntion ka use karenge

// const Input = React.forwardRef(function Input() {} )

const Input = React.forwardRef(function Input ({
    label,
    type = "text",
    className = '',
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label
            className='block mb-1'
            htmlFor={id}>
                {label}
                </label>
                }
                <input
                 type={type}
                 className={`px-3 rounded-lg bg-white text-black outline-none
                     focus:bg-gray-50 duration-200 border border-gray-200 w-full
                     ${className}`} 
                     ref={ref}
                     {...props}
                     id={id}
                  />
        </div>
    )
})


export default Input