import Image from 'next/image'
import eedImg from '@/../public/images/collaboration/ri.png'
import iadcImg from '@/../public/images/collaboration/iadc.png'
import unidoImg from '@/../public/images/collaboration/unido.png'
import ethiopiaImg from '@/../public/images/collaboration/ethiopia.png'
import mlsImg from '@/../public/images/collaboration/mls.png'
import iceAddisImg from '@/../public/images/collaboration/iceaddis.png'

const AboutCollaboratorsPresentation = () => {
  return (
    <section className="px-4 py-8 md:px-8 md:py-16">
      <div className="grid grid-cols-12 items-center gap-6 border-b border-t py-12">
        <h2 className="col-span-full font-display text-lg font-medium uppercase leading-none tracking-tighter md:text-center lg:text-2xl">
          Global Collaborations
        </h2>
        <div className="col-span-6 md:col-span-2 md:w-11/12 lg:w-full ">
          <Image width={200} height={200} src={iadcImg} alt="Italian Development Cooperation" />
        </div>
        <div className="col-span-6 md:col-span-2 md:w-11/12 lg:w-full">
          <Image width={200} height={200} src={eedImg} alt="UNIDO" />
        </div>
        <div className="col-span-6 md:col-span-2  md:w-11/12 lg:w-full">
          <Image width={200} height={200} src={unidoImg} alt="Ethiopian Enterprise Development" />
        </div>
        <div className="col-span-6 md:col-span-2  md:w-11/12 lg:w-full">
          <Image width={200} height={200} src={iceAddisImg} alt="iceaddis" />
        </div>
        <div className="col-span-6 md:col-span-2 md:w-11/12 lg:w-full">
          <Image width={200} height={200} src={ethiopiaImg} alt="Ethiopia" />
        </div>
        <div className="col-span-6 md:col-span-2  md:w-11/12 lg:w-full">
          <Image width={200} height={200} src={mlsImg} alt="Ministry of Labor and Skills" />
        </div>
      </div>
    </section>
  )
}

export default AboutCollaboratorsPresentation
