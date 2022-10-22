import { Title, List, Source } from "./";


const Section = ({ dark, query }) => {
  return <section className={`
    h-screen
    g-rid
    ${dark ?
      'bg-purple text-white fill-white bg-dark'
      : 'bg-white purple text-purple fill-purple bg-light'
    }
    bg-custom
  `}>
    <Title img={query.title} />
    <List data={query.listData} />
    <Source content={query.source} />
  </section>;
}

export default Section;