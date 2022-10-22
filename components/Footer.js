

const Footer = () => {
  return <footer className={`
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
        <img src={"./media/instagram.svg"} alt="" className="w-[2rem]" />
        <img src={"./media/linkedin.svg"} alt="" className="w-[2rem]" />
      </div>
    </div>
  </footer>;
}

export default Footer;