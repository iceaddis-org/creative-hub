import italyImg from '@/../public/images/collaboration/Emblem_of_Italy.svg'
import ethiopiaImg from '@/../public/images/collaboration/Flag_of_Ethiopia.svg'

import iadcImg from '@/../public/images/collaboration/iadc.webp'
import iceAddisImg from '@/../public/images/collaboration/iceaddis.png'
import mlsImg from '@/../public/images/collaboration/mls.png'
import unidoImg from '@/../public/images/collaboration/unido.png'

import Image from 'next/image'

const PartnersPresentation = () => {
  return (
    <section className="px-8 py-8 md:py-16">
      <div className="grid grid-cols-12 items-center justify-between  gap-4 gap-y-16 border-b border-t py-12 md:gap-6">
        <h2 className="col-span-full font-display text-2xl font-medium uppercase leading-none tracking-tighter md:text-center ">
          Empowering creativity through global partnerships
        </h2>
        <div className="col-span-full  sm:col-span-6 md:col-span-2 justify-center flex">
          <Image
            className="max-h-[150px] object-contain"
            width={250}
            height={150}
            src={iadcImg}
            alt="Italian Development Cooperation"
          />
        </div>
        <div className="col-span-full sm:col-span-6 md:col-span-2 justify-center flex">
          <Image
            className="max-h-[150px] object-contain"
            width={250}
            height={150}
            src={italyImg}
            alt="Italy"
          />
        </div>
        <div className="col-span-full  sm:col-span-6 md:col-span-2 justify-center flex ">
          <Image
            className="max-h-[150px] object-contain"
            width={250}
            height={150}
            src={mlsImg}
            alt="Ministry of Labor and Skills"
          />
        </div>
        <div className="col-span-full  sm:col-span-6 md:col-span-2 justify-center flex">
          <Image
            className="max-h-[150px] object-contain"
            width={250}
            height={150}
            src={ethiopiaImg}
            alt="Ethiopia"
          />
        </div>
        <div className="col-span-full  sm:col-span-6 md:col-span-2 justify-center flex">
          <Image
            className="max-h-[150px] object-contain"
            width={250}
            height={150}
            src={unidoImg}
            alt="UNIDO"
          />
        </div>
        <div className="col-span-full  sm:col-span-6 md:col-span-2 justify-center flex">
          <Image
            className="max-h-[150px] object-contain"
            width={250}
            height={150}
            src={iceAddisImg}
            alt="iceaddis"
          />
        </div>
      </div>
    </section>
  )
}

export default PartnersPresentation
