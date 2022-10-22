import Section from "./Section";

const queryComo = {
  title: './media/porque.svg',
  source: '*Basados en métodos de la Terapia Cognitivo Conductual. La TCC busca entender cómo piensa uno acerca de sí mismo, de otras personas y del mundo que le rodea. Está basada en ciencia.',
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


const Como = () => {
  return <>
    <Section dark={false} query={queryComo} />
  </>;
}

export default Como;