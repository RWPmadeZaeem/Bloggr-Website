import React, {useId} from 'react'


const Input = React.forwardRef( function Input({label, type='text',className='',  ...props}, ref){
  const id = useId()
  return (
    
    <div className='w-full'>
      {label && <label htmlFor={id} className='inline-block mb-1 pl-1'>{label}</label>}
        <input
            id={id}
            type={type}
            className={`w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:bg-gray-50 duration-200 outline-none bg-white text-black ${className}`}
            {...props}
            ref={ref} />
    </div>

  )

})
export default Input