import Navbar from '../../components/Frame/Navbar'
import MobileNavbar from '../../components/Frame/MobileNavbar'
import Socials from '../../components/Frame/Socials'
import ColorWrapper from '../../components/Wrapper/ColorWrapper'
import Slideshow from '../../components/Slideshow'
import Counter from '../../components/Counter'

export default function Home() {

  const slideshowImgs = [
    'home1.png',
    'home2.jpg',
    'home3.jpg',
    'home4.jpg'
  ];

  return (
    <main>
      <Navbar />
      <MobileNavbar />
      <div className="navbar-padding"></div>
      <ColorWrapper blue={false}>
        <div className="grid-container1">
          <div>
            <h1>Making STEM Education<div className="h1_colored">FREE FOR ALL</div></h1>
            <div >Since 2019</div>
            <a target="_blank" href="https://discord.com/invite/yCBHy2r7pb" className="default-button">Join our Discord server!</a>
          </div>
          <Slideshow photos={slideshowImgs} />
        </div>
      </ColorWrapper>


      <ColorWrapper blue={true}>
        <div className="grid-container2">
          <div className="grid-child">
          <Counter targetNumber={5} />
            <div>Years of Impact</div>
          </div>
          <div className="grid-child">
          <Counter targetNumber={161} />
            <div>Students Impacted</div>
          </div>
        </div>

      </ColorWrapper>

      <ColorWrapper blue={false}>
        <div className="home-mission">
          <h2>Our Goals</h2>
          <div>teach. share. empower.</div>
          <ol>
            <li>Combat STEM inequity (supply the needs of underprivileged students and mentor them from education to industry)</li>
            <li>Revolutionize the way STEM education is delivered to students (Lecture-based to Hands-on/Project/Team Oriented Learning). We want our students to have fun learning!</li>
          </ol>
        </div>
      </ColorWrapper>
      <ColorWrapper blue={true}> 
        <div className="home-testimonials">
          <h2>Testimonials</h2>
          <div>
            <div>“TCSTEM impacted me a lot. it was a first step to prepare AP and the tutor explains it easily so I could understand it better. 
              I feel like it&apos;s same as taking a real class. 
              This class was helpful!”</div> 
            <div>- Sean Kim / 9th Grade / Northwest Christian High School </div>
          </div>
          <div>
            <div>“This class was an amazing experience and opportunity. 
              It helped me get a head start on physics concepts for my 
              AP Physics 1 class that facilitated my understanding of 
              the material. The extra practice from AP question sets 
              also allowed me to clear my doubts and understand a 
              concept better. Definitely recommend to anybody who wishes 
              to get better at physics!”</div> 
              <div>- Ana Hernandez / 12th grade / Townsend Harris High School</div>
            </div>
          </div>
      </ColorWrapper>
      <ColorWrapper blue={false}>
        <h2>Featured in</h2>
        <div className="feature-img">
          <a className="large-feature" target="_blank" href="https://flhsnews.com/7495/news/tcstem-delivers-stem-education-to-underprivileged-students/">
            <img src="francislewis.jpeg" alt="francis lewis logo"/>
          </a>
          <a className="small-feature" target="_blank" href="https://flhsnews.com/7495/news/tcstem-delivers-stem-education-to-underprivileged-students/">
            <img src="francislewis_small.jpeg" alt="francis lewis logo"/>
          </a>
          </div>
      </ColorWrapper>
      <ColorWrapper blue={true}><Socials/></ColorWrapper>
    </main>
  )
}

