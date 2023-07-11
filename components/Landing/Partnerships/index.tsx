import React from 'react'
import Image from 'next/image'

const Partnerships = () => {
  return (
    <div className="w-screen h-auto md:h-[470px] bg-stone-100">
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <div className='mt-20 mx-12 md:px-12'>
                <div className="text-black text-6xl font-bold leading-[91px]">
                    <h1>Partnerships</h1>
                </div>
                <div className="text-justify text-black text-sm font-semibold leading-[18.20px]">SONGA is an ecosystem that works closely with enterprise players in order to ensure that the rides we offer are convenient.<br/><br/>This involves working together to collaboratively empower the rider. To partner with us in this journey , kindly reach us through partnerships@songa.app and we will get in touch in the shortest time possible.<br/></div>
            </div>
            <div className='m-20 flex space-x-4'>
                <div className="w-[153px] h-[77.30px] bg-stone-50 rounded-[30px] shadow-lg flex justify-center items-center">
                    <div className="w-[107.39px] h-[107.39px] relative ">
                        <Image
                        src='/assets/images/SONGA-small-logo.png'
                        alt=''
                        fill={true}
                        className=''
                        />
                    </div>
                </div>
                <div className="w-[239px] h-[120.81px] bg-stone-50 rounded-[30px] shadow-lg flex justify-center items-center">
                    <div className="w-[207px] h-[207px] relative">
                    <Image
                        src='/assets/images/SONGA-small-red-logo.png'
                        alt=''
                        fill={true}
                        className=''
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partnerships