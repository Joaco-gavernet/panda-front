import Link from "next/link";
import Image from "next/image";


const data = [
  {
    link: 'https://www.instagram.com/panda.labs/',
    img: './media/instagram.svg'
  },
  {
    link: 'https://www.linkedin.com/company/pandaapp/',
    img: './media/linkedin.svg'
  },
]


const Footer = () => {
  return <footer id="footer" className={`
    h-[10rem]
    g-rid
    bg-white 
    text-purple 
    fill-purple 
    bg-light
    bg-cover
  `}>
    <div className="g-footer flex flex-col space-y-4 justify-center">
      <h2 className="text-m font-bold">
        infopanda.io@gmail.com
      </h2>
      <div className="flex space-x-8">
        {
          data.map(
            (item, i) =>
              <Link href={item.link} key={i}>
                <Image src={item.img} alt="" className="w-[2rem] hover:cursor-pointer" />
              </Link>
          )
        }
      </div>
    </div>
  </footer>;
}

export default Footer;