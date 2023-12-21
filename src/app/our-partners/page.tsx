import Navbar from '../../../components/Frame/Navbar'
import Socials from '../../../components/Frame/Socials'
import ColorWrapper from '../../../components/Wrapper/ColorWrapper'
import Footer from '../../../components/Frame/Footer'
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="navbar-padding"></div>
      <ColorWrapper blue={false}> 
        <h1>Our Partners</h1>
      </ColorWrapper>

      <ColorWrapper blue={true}> 
        <h2>Partnerships</h2>
        <div className="partner-imgs">
          <img src="partner1.png" />
          <img src="partner2.png" />
          <img src="partner3.png" />
        </div>
        <br></br>
        <h2>Sponsors</h2>
        <div className="partner-imgs">
          <img src="sponsor1.png" />
          <img src="sponsor2.png" />
        </div>
      </ColorWrapper>

      <ColorWrapper blue={false}>
        <div className="partner-message">
          <h3>Interested in working with us?</h3>
          <div>Email us at <a href="mailto:teachchildrenstem@gmail.com">teachchildrenstem@gmail.com</a> if interested!</div>
          <Link target="_blank" href="https://drive.google.com/file/d/1MKFZ1Zpx_InzeiVFtKzYg5EsV51l1GNl/view?usp=sharing" className="default-button">View our Sponsorship Prospectus</Link>
        </div>
      </ColorWrapper>

      <ColorWrapper blue={true}><Socials/></ColorWrapper>
      <ColorWrapper blue={false}><Footer/></ColorWrapper>
    </main>
  )
}
