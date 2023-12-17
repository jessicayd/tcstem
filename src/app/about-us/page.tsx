import Navbar from '../../../components/Frame/Navbar'
import Socials from '../../../components/Frame/Socials'
import ColorWrapper from '../../../components/Wrapper/ColorWrapper'
import Footer from '../../../components/Frame/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="navbar-padding"></div>
      <ColorWrapper blue={false}> 
        <div className="aboutus-mission">
          <h1>Our Mission</h1>
          <div>To revolutionize and break down the social and economic barriers to a FREE STEM education.</div>
        </div>
      </ColorWrapper>
      <ColorWrapper blue={true}>
        <div className="aboutus-story">
          <h2>Our Story</h2>
          <div>FOUNDED ON JULY 11 (SUMMER 2019)</div>
          <div>Nowadays, around 72 million children in primary education age are not enrolled in school. 
            Specifically, children in the middle east who are living in dangerous situations, risk their lives 
            traveling miles in war zones just to learn. There was a need for providing the youth in the NYC 
            community with a productive learning experience that would not only teach children how STEM innovations 
            had impacted their lives but also how they could create innovations that could present solutions to modern 
            problems. A indirect goal of our mission is also for these children to innovate and design solutions to the 
            problems they had in their own countries when they grew up. We believe that by providing young children with 
            a hands-on learning experience, they would be able to learn better and find their passion for STEM.</div>
          <div>We are officially certified as a 501(c)(3) nonprofit organization. 
            Please consider donating to our organization to help us continue our efforts! 
            Our Employee Identification Number (EIN) is 92-0332846 for your reference.</div>
        </div>
      </ColorWrapper>
      <ColorWrapper blue={false}>
        <div className="aboutus-imgs">
          <img src="aboutus1.jpg" alt="handbuilt bridge" />
          <img src="aboutus2.jpg" alt="student coloring" />
          <img src="aboutus3.jpg" alt="paper rockets" />
        </div>
      </ColorWrapper>
      <ColorWrapper blue={true}> 
        <div className="aboutus-yearbooks">
          <h2>TCSTEM Yearbooks</h2>
          <iframe src="https://www.youtube.com/embed/38nfrWa3A9I?si=PNQ5nLuaYMp78S6g" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/dX9s5xLOCyk?si=27H3gWzggMmhmvU1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/2OMaHJB9v1E?si=D2BpyfZISZsoIwu-" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe src="https://player.vimeo.com/video/356008057?h=1a61af2158" title="Vimeo video player" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        </div>
      </ColorWrapper>
      <ColorWrapper children=<Socials /> blue={false}/>
      <ColorWrapper children=<Footer /> blue={true}/>
    </main>
  )
}
