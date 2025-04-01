import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image';


const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Qué ofrezco</h4>
        <h2 className='text-center text-5xl font-Ovo'>Mis Servicios</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
            Soy una frontend developer, con 3 años aproximadamente de experiencia</p>

            <div className='grid grid-cols-4 gap-6 my-10'>
                {serviceData.map(({icon, title, description, link}, index) => (
                    <div key={index}>
                        <Image src={icon} alt='icon' className='w-10'/>
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>{description}</p>
                        <a href={link} className='felex items-center gap-2 text-sm mt-5'>
                            Leer más <Image src={assets.right_arrow} alt='arrow' className='w-4' />
                        </a>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Services