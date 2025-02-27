import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introducción</h4>
        <h2 className='text-center text-5xl font-Ovo'>Acerca de mí</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
            </div>
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores debitis quas ratione dolore labore tempore repellendus voluptate a adipisci. Perspiciatis, assumenda enim? Sint fugit voluptates qui iure earum expedita amet.</p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index) =>(
                        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black' key={index}>
                            <Image src={icon} alt={title}/>
                            <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-gray-600'>{description}</p>
                        </li>
                    ))}
                </ul>

                <h4></h4>

            </div>
        </div>
    </div>
  )
}

export default About