import Navbar from '../../../components/Frame/Navbar'
import MobileNavbar from '../../../components/Frame/MobileNavbar'
import Socials from '../../../components/Frame/Socials'
import ColorWrapper from '../../../components/Wrapper/ColorWrapper'

export default function Partners() {
  return (
    <main>
      <Navbar />
      <MobileNavbar />
      <div className="navbar-padding"></div>
      <ColorWrapper blue={false}> 
        <h1>Our Partners</h1>
      </ColorWrapper>

      <ColorWrapper blue={true}> 
        <h2>Partnerships</h2>
        <div className="partner-imgs">
          <a target="_blank" href="https://joinjuno.com/"><img src="partner1.png" alt="juno logo"/></a>
          <a target="_blank" href="https://www.wavelf.org/"><img src="partner2.png" alt="wave learning festival logo"/></a>
          <img src="partner3.png" alt="stem power logo" />
        </div>
        <br></br>
        <h2>Sponsors</h2>
        <div className="partner-imgs">
          <img src="sponsor1.png" alt="coco logo" />
          <img src="sponsor2.png" alt="sticker mule logo"/>
        </div>
      </ColorWrapper>

      <ColorWrapper blue={false}>
        <div className="partner-message">
          <h3>Interested in working with us?</h3>
          <div>Email us at <a href="mailto:teachchildrenstem@gmail.com">teachchildrenstem@gmail.com</a> if interested!</div>
          <a target="_blank" href="https://drive.google.com/file/d/1MKFZ1Zpx_InzeiVFtKzYg5EsV51l1GNl/view?usp=sharing" className="default-button">View our Sponsorship Prospectus</a>
        </div>
      </ColorWrapper>

      <ColorWrapper blue={true}><Socials/></ColorWrapper>
    </main>
  )
}
