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
        <h1>Connect With Us</h1>
      </ColorWrapper>

      <ColorWrapper blue={true}> 
        <div className="connect-message">
          <h2>Get in touch!</h2>
          <div>For any additional questions or concerns, please contact us by email, at <a href="mailto:teachchildrenstem@gmail.com">teachchildrenstem@gmail.com</a>, or through social media (can be found at the footer of this page). If you are interested in partnering with us, please view the partnership information in on <Link href="/our-partners">Our Partners</Link> page.</div>
        </div>
      </ColorWrapper>

      <ColorWrapper blue={false}>
        <div className="faq">
          <h2>FAQ</h2>
          
        </div>
      </ColorWrapper>

      <ColorWrapper blue={true}><Socials/></ColorWrapper>
      <ColorWrapper blue={false}><Footer/></ColorWrapper>
    </main>
  )
}