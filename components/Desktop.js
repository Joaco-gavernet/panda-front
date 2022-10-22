import { Navbar, Hero, Porque, Como, Que, Footer } from '../components'


const Desktop = ({ className }) => {
  return (
    <div className={className}>
      <Hero />
      <Navbar />
      <Porque />
      <Como />
      <Que />
      <Footer />
    </div>
  );
}

export default Desktop;