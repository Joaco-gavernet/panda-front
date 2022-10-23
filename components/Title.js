import Image from "next/image";


const Title = ({ img }) => {
  return (
    <Image src={img} alt="" className="g-title ml-[10rem] my-auto w-4/12" />
  );
}

export default Title;