

const Hero = () => {
  return <section className={`
    h-screen
    g-rid
    bg-white
    bg-hero
  `}>
    <img src={"./media/panda.svg"} alt="" className="g-hero-logo w-[10rem]" />
    <h1 className="g-hero-title my-auto text-xl font-extrabold">Para mantener <br />tu equilibrio <br />mental</h1>
    <img src={"./media/hero-image.png"} alt="" className="g-hero-image" />
  </section>;
}

export default Hero;