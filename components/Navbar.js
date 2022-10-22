import Link from "next/link";


const items = [
  {
    img: './media/why.svg',
    link: '/why'
  },
  {
    img: './media/what.svg',
    link: '/what'
  },
  {
    img: './media/how.svg',
    link: '/how'
  },
  {
    img: './media/panda-icon.svg',
    link: '/panda'
  },
]

const Navbar = () => {
  return (
    <div className="
    fixed
    top-1/2
    left-[2rem]
    transform
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
            (item) => <Link href={item.link}>
              <li>
                <img
                  src={item.img}
                  alt=""
                  className="w-[2rem] opacity-50 hover:opacity-100 hover:fill-yellow transition-all hover:cursor-pointer" />
              </li>
            </Link>
          )
        }
      </ul>
    </div>
  );
}

export default Navbar;