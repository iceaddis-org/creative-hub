import CountdownTimer from '@/components/ui/CountDown'
import AboutHeaderPresentation from '../../hubs/about-header/AboutHeaderPresentation'

const HeaderContainer = () => {
  return (
    <>
      <AboutHeaderPresentation
        imageUrl="/images/launch/hero.png"
        className=""
        rounded={false}
        darkenBg={false}
        videoUrl="/images/launch/hero.webm"
        copyClassName="mt-4 p-4 bg-white/80 text-black rounded-lg"
        title={'A New Era of Innovation, Creativity, and Entrepreneurship'}
        copy="We are excited to announce the official re-launch of Creative Hub Ethiopia with a new location, a dynamic space dedicated to empowering Ethiopia’s creative economy through innovation, design, and entrepreneurship."
      />
      {/* Grey card */}
      <div className="grid justify-center gap-4 w-full grid-cols-12 z-10 relative  text-gray-600">
        <div className=" bg-gray-200 col-span-10 col-start-2 rounded p-8 -mt-[5%] flex flex-wrap justify-between items-center gap-2">
          <div>
            <h1 className="text-xl mb-2 font-semibold flex justify-between items-center leading-tight">
              Inauguration Day!
              <span className="w-1/3  border-t-orange-500 border-solid border-t inline-flex"></span>
            </h1>
            <div>The highlight of this initiative is the official inauguration ceremony.</div>
            <div className="flex gap-4 my-4">
              <a
                href="/launch"
                rel="noopener noreferrer"
                className="bg-orange-500 text-black px-4 py-2 rounded-lg hover:bg-gray-500 hover:text-white transition-colors inline-block text-center"
              >
                You&apos;re invted
              </a>
            </div>
          </div>
          <div>
            <CountdownTimer />
          </div>
        </div>
      </div>
    </>
    // <HeaderPresentation
    //   imgUrl="https://images.unsplash.com/photo-1501471984908-815b996862f4?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //   title="Imagine. Create. Grow."
    //   highlightWord="Create."
    //   copy="Culture-driven, creative and competitive. An impact creating environment for young minds."
    // />
  )
}

export default HeaderContainer
