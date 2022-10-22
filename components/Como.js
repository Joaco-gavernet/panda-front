import Section from "./Section";

const queryComo = {
  title: './media/como.svg',
  source: '*Basados en métodos de la Terapia Cognitivo Conductual. La TCC busca entender cómo piensa uno acerca de sí mismo, de otras personas y del mundo que le rodea. Está basada en ciencia.',
  id: 'how',
  listData: [
    {
      img: './media/loupe.svg',
      title: 'Identificar',
      text: 'los problemas temprano provoca que se puedan abordar antes de volverse graves.'
    },
    {
      img: './media/graph.svg',
      title: 'Asociar',
      text: 'pensamiento con conducta para mejorar la regulación emocional y el desarrollo de estrategias para afrontar problemas'
    },
    {
      img: './media/spiral.svg',
      title: 'Proponer',
      text: 'objetivos alcanzables dentro de un plan de acción para progresar en cada área en la cual se identificó malestar.'
    }
  ]
}


const Como = () => {
  return <>
    <Section dark={false} query={queryComo} />
  </>;
}

export default Como;