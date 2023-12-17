import Navbar from '../../../components/Frame/Navbar'
import Socials from '../../../components/Frame/Socials'
import ColorWrapper from '../../../components/Wrapper/ColorWrapper'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="navbar-padding"></div>
      <ColorWrapper blue={false}> 
        <>
          <h1>Our Mission</h1>
          <div>"To revolutionize and break down the social and economic barriers to a FREE STEM education."</div>
        </>
      </ColorWrapper>
      <ColorWrapper blue={true}>
        <>
        <h1>Our Story</h1>
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
        </>
      </ColorWrapper>
      <ColorWrapper children=<Socials /> blue={false}/>
      <ColorWrapper children=<Socials /> blue={true}/>
      <ColorWrapper children=<Socials /> blue={false}/>
      <ColorWrapper children=<Socials /> blue={true}/>
      <ColorWrapper children=<Socials /> blue={false}/>
    </main>
  )
}
