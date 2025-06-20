import ethioPostImg from '@/../public/images/collaboration/ethiopost.png'
import iadcImg from '@/../public/images/collaboration/iadc.webp'
import iceAddisImg from '@/../public/images/collaboration/iceaddis.png'
import mlsImg from '@/../public/images/collaboration/mls.png'
import unidoImg from '@/../public/images/collaboration/unido.png'

import Image from 'next/image'

const PartnersPresentation = () => {
  return (
    <section className="px-8 py-8 md:py-16">
      <div className="grid grid-cols-10 items-center justify-between  gap-4 gap-y-16 border-b border-t py-12 md:gap-6">
        <h2 className="col-span-full font-display text-2xl font-medium uppercase leading-none tracking-tighter md:text-center ">
          Empowering creativity through global partnerships
        </h2>
        <div className="col-span-5 md:col-span-2 md:w-11/12 lg:w-full ">
          <Image width={200} height={200} src={iadcImg} alt="Italian Development Cooperation" />
        </div>
        <div className="col-span-5 md:col-span-2  md:w-11/12 lg:w-full">
          <Image width={200} height={200} src={mlsImg} alt="Ministry of Labor and Skills" />
        </div>
        <div className="col-span-5 md:col-span-2 md:w-11/12 lg:w-full">
          <Image width={200} height={200} src={unidoImg} alt="UNIDO" />
        </div>
        <div className="col-span-5 md:col-span-2  md:w-11/12 lg:w-full">
          <Image width={200} height={200} src={ethioPostImg} alt="ethiopost" />
        </div>
        <div className="col-span-5 md:col-span-2  md:w-11/12 lg:w-full">
          <Image width={200} height={200} src={iceAddisImg} alt="iceaddis" />
        </div>
        {/* <div className="col-span-5 md:col-span-2  md:w-11/12 lg:w-full">
          <Image width={200} height={200} src={unidoImg} alt="Ethiopian Enterprise Development" />
        </div>

        <div className="col-span-5 md:col-span-2 md:w-11/12 lg:w-full">
          <Image width={200} height={200} src={ethiopiaImg} alt="Ethiopia" />
        </div> */}
      </div>
    </section>
  )
}

export default PartnersPresentation
