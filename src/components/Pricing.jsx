import React from 'react'
import { pricingOptions } from '../constants'
import { CheckCircle2 } from 'lucide-react'
const Pricing = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl my-8 tracking-wide text-center'>Pricing</h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((item)=>(
                <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <div className="p-10 border border-neutral-700 rounded-xl">
                        <p className='text-4xl mb-8 text-start'> { item.title} {item.title === "Pro" && <span className='text-xl text-orange-400 ml-2 mb-4'>(Most Popular)</span>}</p>
                        <p className="text-5xl mb-8 text-start">{item.price} <span className=' text-lg text-neutral-500 tracking-tight'>/Month</span></p>
                        <div>
                            {item.features.map((feature, index)=>(
                                <div key={index} className='flex mb-10'>
                                <span className='pr-4'><CheckCircle2/></span>
                                <p className='text-lg text-start'>{feature}</p>
                                </div> ))}
                        </div>

                        <a className='border border-orange-900 hover:bg-orange-900 tracking-tight w-full text-xl rounded-lg inline-flex justify-center items-center cursor-pointer p-5 h-12 transition duration-200'>Subscribe</a>

                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing