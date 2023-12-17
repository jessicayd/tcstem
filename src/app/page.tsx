import Navbar from '../../components/Frame/Navbar'
import Socials from '../../components/Frame/Socials'
import Footer from '../../components/Frame/Footer'
import ColorWrapper from '../../components/Wrapper/ColorWrapper'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="navbar-padding"></div>
      <ColorWrapper children=<div>homeeee</div> blue={false}/>
      <ColorWrapper children=<Socials /> blue={true}/>
      <ColorWrapper children=<Footer /> blue={false}/>
    </main>
  )
}
