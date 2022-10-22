import Section from "./Section";

const queryPorque = {
  title: './media/porque.svg',
  source: '* Datos ofrecidos por la Organización Mundial de la Salud',
  id: 'why',
  listData: [
    {
      img: './media/brain.svg',
      title: '450 Millones',
      text: 'de personas en todo el mundo se ven afectadas por un problema de salud mental que dificulta gravemente su vida.'
    },
    {
      img: './media/head.svg',
      title: '75%',
      text: 'de los problemas de salud mental en adultos comienzan antes de los 18 años.'
    },
    {
      img: './media/plus.svg',
      title: 'Entre 35% y 50%',
      text: 'de las personas no reciben ningún tratamiento o no es el adecuado.'
    }
  ]
}

const Porque = () => {
  return <>
    <Section dark={true} query={queryPorque} />
  </>;
}

export default Porque;