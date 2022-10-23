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


const Mobile = ({ className }) => {
  return (
    <div className={
      className + `
      py-16
      h-full 
      w-full
      `}>
      <div className="flex flex-col space-y-4 px-8">
        <h2 className="text-xl font-extrabold">Hola</h2>
        <p>Próximamente estará disponible la versión móvil de nuestra página. Mientras tanto, podes seguirnos en nuestras redes.</p>
        <p>Que tengas un día <b className="font-extrabold">Pandástico</b>.</p>
        <div className="flex space-x-8">
          {
            data.map(
              (item, i) =>
                <Link key={i} href={item.link}>
                  <Image src={item.img} alt="" className="w-[2rem] hover:cursor-pointer" />
                </Link>
            )
          }
        </div>
      </div>
      <Image
        src="./media/panda-hello.png"
        alt=""
        className="
        w-full
        max-w-[30rem]
      " />
    </div>
  );
}

export default Mobile;