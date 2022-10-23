import Image from "next/image";
import Title from "./Title";

const queryQue = {
  title: './media/que.svg',
  img: './media/iphone-panda.png',
  h2: 'Panda',
  p: 'Una app fundada en la terapia cognitivo conductual para lograr que puedas llevar una vida sana mediante la introspección.',
  appStore: './media/appstore.png',
  playStore: './media/playstore.png'
}


const Que = () => {
  return <section id="what" className={`
  h-screen
  g-rid
  bg-purple 
  text-white 
  fill-white 
  bg-dark
  bg-custom
`}>
    <Title img={queryQue.title} />
    <a href="#" className="g-image m-auto hover:transform hover:scale-105 transition-all hover:cursor-pointer">
      <Image src={queryQue.img} alt="" />
    </a>
    <div className="g-info flex flex-col justify-center space-y-4">
      <h2 className="text-xl font-extrabold">{queryQue.h2}</h2>
      <p className="">{queryQue.p}</p>
      <div className="flex mt-16">
        <Image src={queryQue.appStore} alt="" className="w-1/4" />
        <Image src={queryQue.playStore} alt="" className="w-1/4" />
      </div>
    </div>
  </section>;
}

export default Que;