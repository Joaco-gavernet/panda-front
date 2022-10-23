import Image from "next/image";


const items = [
  {
    img: './media/why.svg',
    link: '#why'
  },
  {
    img: './media/how.svg',
    link: '#how'
  },
  {
    img: './media/what.svg',
    link: '#what'
  },
  {
    img: './media/panda-icon.svg',
    link: '#footer'
  },
]

const Navbar = () => {

  return (
    <div className="
    fixed
    top-1/2
    left-[4.15%]
    transform
    -translate-x-1/2
    -translate-y-1/2
    w-[4rem] 
    bg-purple 
    drop-shadow-3xl 
    rounded-xl 
    py-8
    ">
      <ul className="
      flex 
      flex-col 
      space-y-8 
      justify-center 
      items-center">
        {
          items.map(
            (item, i) => <a key={i} href={item.link}>
              <li>
                <img
                  src={item.img}
                  alt=""
                  className="w-[2rem] opacity-50 hover:opacity-100 hover:fill-yellow transition-all hover:cursor-pointer" />
              </li>
            </a>
          )
        }
      </ul>
    </div>
  );
}

export default Navbar;