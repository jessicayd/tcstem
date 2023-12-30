import Navbar from '../../../components/Frame/Navbar'
import MobileNavbar from '../../../components/Frame/MobileNavbar'
import Socials from '../../../components/Frame/Socials'
import ColorWrapper from '../../../components/Wrapper/ColorWrapper'
import Accordion from '../../../components/Accordion'

export default function ConnectWithUs() {

  const faq = [
    {
      question: 'Is TCSTEM free?',
      answer: 'Yes, our program is free to all our participants.',
    },
    {
      question: 'How can I sign up for this program?',
      answer: 'Students can sign up on the “Our Services” page on our website. If you are interested in joining our team you can apply, you can find the application on the “Get Involved” page.',
    },
    {
      question: 'What languages are TCSTEM courses available in?',
      answer: 'Currently the courses are only available in English, though some courses can be taught in a different language through multiple requests. However, we are planning to spread our courses to low-income, Spanish-speaking countries. So look forward to courses taught in Spanish.',
    },
    {
      question: 'What do students learn in your program?',
      answer: 'Students of grades K-3 are introduced to general scientific concepts like fluids, chemical reactions, mechanics, and etc. Students of grades 4-7 learn more about hardware and programming. Students will learn how to build projects with Arduinos and basic mechanical skills.',
    },
    {
      question: 'Why was this program created?',
      answer: 'Our founding team recognized the lack of STEM programs outside of schools for low-income families in Flushing, NY. This program’s mission is two-fold: First, we want to break the economic barrier between students and STEM education and secondly we would like to promote a new style of STEM education: team-oriented and hands-on learning.',
    },
    {
      question: 'How is TCSTEM different from other programs?',
      answer: 'Our courses are 100% hands-on! There will never be a class where our students learn in a lecture-based environment. We want our students to have fun and get their hands immersed into STEM.',
    },
    {
      question: 'What are the goals of this program?',
      answer: 'We categorize our goals into short term (4-6 months) and long term goals (2-3 years). Our short term goal for now is to have at least 40 members and 250 students. Some of our long term goals are to establish TCSTEM clubs at colleges and later have a chain location of clubs. Furthermore, develop more advanced content in the future such as college consulting or SAT prep.',
    },
    {
      question: 'How can I get involved?',
      answer: 'Check out our Get Involved page.',
    }
  ];


  return (
    <main>
      <Navbar />
      <MobileNavbar />
      <div className="navbar-padding"></div>
      <ColorWrapper blue={false}> 
        <h1>Connect With Us</h1>
      </ColorWrapper>

      <ColorWrapper blue={true}> 
        <div className="connect-message">
          <h2>Get in touch!</h2>
          <div>For any additional questions or concerns, please contact us by email, at <a href="mailto:teachchildrenstem@gmail.com">teachchildrenstem@gmail.com</a>, or through social media (can be found at the footer of this page). If you are interested in partnering with us, please view the partnership information in on <a href="/our-partners">Our Partners</a> page.</div>
        </div>
      </ColorWrapper>

      <ColorWrapper blue={false}>
        <div className="faq">
          <h2>FAQ</h2>
          <Accordion data={faq} />
        </div>
      </ColorWrapper>

      <ColorWrapper blue={true}><Socials/></ColorWrapper>
    </main>
  )
}