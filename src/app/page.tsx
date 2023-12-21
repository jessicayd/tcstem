import Navbar from '../../components/Frame/Navbar'
import Socials from '../../components/Frame/Socials'
import Footer from '../../components/Frame/Footer'
import ColorWrapper from '../../components/Wrapper/ColorWrapper'
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="navbar-padding"></div>
      <ColorWrapper blue={false}>
        <div className="home-banner">
          <div className="home-banner-text">
            <h1>Developing Future Thinkers</h1>
            <div>Volunteer to impact students in STEM</div>
            <div>Founded in NYC 2019</div>
            <Link target="_blank" href="https://discord.com/invite/yCBHy2r7pb" className="default-button">Join our Discord Server</Link>
          </div>
          <div className="home-banner-img">
            <img src="logo.png" alt="tcstem logo" width="300"/>
          </div>
        </div>
      </ColorWrapper>
      <ColorWrapper blue={true}>
        <div className="home-impact">
          <div className="home-years-impact">
            <h1>5</h1>
            <div>years of impact</div>
          </div>
          <div className="home-students-impact">
            <h1>161</h1>
            <div>students impacted</div>
          </div>
        </div>
      </ColorWrapper>
      <ColorWrapper blue={false}>
        <div className="home-mission">
          <h2>Our Mission</h2>
          <div>teach. share. empower. </div>

        </div>
      </ColorWrapper>
      <ColorWrapper blue={true}>
        <h2>Testimonials</h2>
      </ColorWrapper>
      <ColorWrapper blue={false}>
        <h2>Featured in</h2>
      </ColorWrapper>
      <ColorWrapper blue={true}><Socials/></ColorWrapper>
      <ColorWrapper blue={false}><Footer/></ColorWrapper>
    </main>
  )
}
