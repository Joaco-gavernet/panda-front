import Image from "next/image";


const ItemList = ({ img, title, text }) => {
  return (
    <li className="flex space-x-8">
      <Image src={img} alt="" className="w-[8rem]" />
      <div className="">
        <h3 className="text-l font-bold">{title}</h3>
        <p className="text-m">{text}</p>
      </div>
    </li>
  );
}

export default ItemList;