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
        <div className="grid-container1">
          <div className="grid-child">
            <div className='h1-title'>Making STEM Education</div> <div className="h1_colored">FREE FOR ALL</div> <h3>Since 2019</h3>
          </div>

          <div className="grid-child">
            <div className="home-imgs">
              <img src="hometest.png" />
            </div>
          </div>
        </div>
      </ColorWrapper>
      <ColorWrapper blue={true}>
        <div className="grid-container2">

          

          <div className="grid-child">
            <h1>5</h1>
            <div>Years of Impact</div>

          </div>

          <div className="grid-child">
            <h1>161</h1>
            <div>Students Impacted</div>
          </div>
        </div>

      </ColorWrapper>

      <ColorWrapper blue={false}>
        <div className="home-mission">
          <h2>Our Mission</h2>
          <div>teach. share. empower.</div>
          <div>
          At TCSTEM we just have two goals:
          <ul>
            <li>Combat STEM inequity (supply the needs of underprivileged students and mentor them from education to industry)</li>
            <li>Revolutionize the way STEM education is delivered to students (Lecture-based to Hands-on/Project/Team Oriented Learning). We want our students to have fun learning!</li>
          </ul>
          </div>
        </div>
      </ColorWrapper>
      <ColorWrapper blue={true}> 
        <div className="home-testimonials">
          <h2>Testimonials</h2>
          <div>"TCSTEM impacted me a lot. it was a first step to prepare AP and the tutor explains it easily so I could understand it better. 
            I feel like it’s same as taking a real class. 
            This class was helpful!" ~ Sean Kim/ 9th Grade /Northwest Christian High School </div>
          
          <div>"This class was an amazing experience and opportunity. 
            It helped me get a head start on physics concepts for my 
            AP Physics 1 class that facilitated my understanding of 
            the material. The extra practice from AP question sets 
            also allowed me to clear my doubts and understand a 
            concept better. Definitely recommend to anybody who wishes 
            to get better at physics!" ~ Ana Hernandez/ 12th grade/ Townsend Harris High School</div>
          </div>
      </ColorWrapper>
      <ColorWrapper blue={false}>
        <h2>Featured in</h2>
        <div className="partner-imgs">
          <a href="https://www.google.com/url?q=https%3A%2F%2Fflhsnews.com%2F7495%2Fnews%2Ftcstem-delivers-stem-education-to-underprivileged-students%2F&sa=D&sntz=1&usg=AOvVaw0mu6CImETK0GBAQEi-nLfg">
            <img src="francislewis.png" />
          </a>
          </div>
      </ColorWrapper>
      <ColorWrapper blue={true}><Socials/></ColorWrapper>
      <ColorWrapper blue={false}><Footer/></ColorWrapper>
    </main>
  )
}


// test hehe