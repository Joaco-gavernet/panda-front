import Link from "next/link";


const Hero = () => {
  return <section id="" className={`
    h-screen
    g-rid
    bg-white
    bg-hero
  `}>
    <Link href="#">
      <img src={"./media/panda.svg"} alt="" className="g-hero-logo w-[10rem] hover:cursor-pointer" />
    </Link>
    <h1 className="g-hero-title my-auto text-xl font-extrabold">Para mantener <br />tu equilibrio <br />mental</h1>
    <img src={"./media/hero-image.png"} alt="" className="g-hero-image" />
  </section>;
}

export default Hero;