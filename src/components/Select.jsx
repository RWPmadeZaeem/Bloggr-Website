import React from 'react'
import { useId } from 'react-id-generator'

function Select({ options, label, className, ...props}, ref) {
    
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
            id={id}
            className={`w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none  focus:bg-gray-50 duration-200 outline-none bg-white text-black ${className}`}
            {...props}
            ref={ref} >
                {options?.map((option)=>(

                    <option key={option} value={option}>{option}</option>
                ))}

            </select>
    </div>
  )
}

export default React.forwardRef(Select)
