import Navbar from '../../../components/Frame/Navbar'
import MobileNavbar from '../../../components/Frame/MobileNavbar'
import Socials from '../../../components/Frame/Socials'
import ColorWrapper from '../../../components/Wrapper/ColorWrapper'

export default function Donate() {
  return (
    <main>
      <Navbar />
      <MobileNavbar />
      <div className="navbar-padding"></div>
      <ColorWrapper blue={false}> 
        <h1>Donate</h1>
      </ColorWrapper>

      <ColorWrapper blue={true}> 
        <div className="donate">
          <h2>Anything can make a difference.</h2>
          <div>We are a high school and college-run organization that aims to provide FREE and engaging STEM education to students, regardless of social and economic backgrounds. This summer, we will be using donations to buy materials for our programs, produce better videos, and build fun and engaging kits to underprivileged students, primarily around NYC and potentially other areas if funding allows. TCSTEM is a nonprofit program that is run by 40+ college and high school students all around the US and fiscally sponsored by Hack+, a 501(c)(3) certified nonprofit organization. <strong>EIN: 92-0332846</strong></div>
          <a target="_blank" href="https://secure.givelively.org/donate/hackplus/teach-children-stem" className="default-button">Donate today!</a>
        </div>
      </ColorWrapper>

      <ColorWrapper blue={false}>
        <iframe className="donate-iframe" src="https://secure.givelively.org/donate/hackplus/teach-children-stem?ref=sd_widget&amp;widget_url=https%3A%2F%2F1472036840-atari-embeds.googleusercontent.com%2Fembeds%2F16cb204cf3a9d4d223a0a3fd8b0eec5d%2Finner-frame-minified.html%3Fjsh%3Dm%253B%252F_%252Fscs%252Fabc-static%252F_%252Fjs%252Fk%253Dgapi.lb.en.y0xCMa4KeeI.O%252Fd%253D1%252Frs%253DAHpOoo8-3MGCaatZB3kdS5TpZdd-gOSBHg%252Fm%253D__features__&amp;referrer_url=https%3A%2F%2F1472036840-atari-embeds.googleusercontent.com%2Fembeds%2F16cb204cf3a9d4d223a0a3fd8b0eec5d%2Finner-frame-minified.html%3Fjsh%3Dm%253B%252F_%252Fscs%252Fabc-static%252F_%252Fjs%252Fk%253Dgapi.lb.en.y0xCMa4KeeI.O%252Fd%253D1%252Frs%253DAHpOoo8-3MGCaatZB3kdS5TpZdd-gOSBHg%252Fm%253D__features__&amp;show_donate_now_button=false&amp;show_v1_form=branded_widget" id="give-lively-widget-inner" allow="payment; clipboard-read self https://1472036840-atari-embeds.googleusercontent.com/embeds/16cb204cf3a9d4d223a0a3fd8b0eec5d/inner-frame-minified.html?jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.en.y0xCMa4KeeI.O%2Fd%3D1%2Frs%3DAHpOoo8-3MGCaatZB3kdS5TpZdd-gOSBHg%2Fm%3D__features__"></iframe>
      </ColorWrapper>

      <ColorWrapper blue={true}><Socials/></ColorWrapper>
    </main>
  )
}