import Navbar from '../../components/Frame/Navbar'
import Socials from '../../components/Frame/Socials'
import Footer from '../../components/Frame/Footer'
import ColorWrapper from '../../components/Wrapper/ColorWrapper'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="navbar-padding"></div>
      <ColorWrapper blue={false}>
        <div>homeee</div>
      </ColorWrapper>
      <ColorWrapper blue={true}><Socials/></ColorWrapper>
      <ColorWrapper blue={false}><Footer/></ColorWrapper>
    </main>
  )
}
