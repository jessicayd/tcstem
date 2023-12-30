import Navbar from '../../../components/Frame/Navbar'
import MobileNavbar from '../../../components/Frame/MobileNavbar'
import Socials from '../../../components/Frame/Socials'
import ColorWrapper from '../../../components/Wrapper/ColorWrapper'

export default function GetInvolved() {
  return (
    <main>
      <Navbar />
      <MobileNavbar />
      <div className="navbar-padding"></div>
      <ColorWrapper blue={false}> 
        <h1>Get Involved</h1>
      </ColorWrapper>

      <ColorWrapper blue={true}> 
        <div className="involved-steps">
          <h2>How it works</h2>
          <ol>
            <li>Schedule a 5-10 minute interview with us.</li>
            <li>Wait for a reply!</li>
          </ol>
          <iframe src="https://calendly.com/tcstemjc/tcstemintviews?embed_domain=778962526-atari-embeds.googleusercontent.com&amp;embed_type=Inline" title="Select a Date &amp; Time - Calendly"></iframe>
        </div>
      </ColorWrapper>

      <ColorWrapper blue={false}> 
        <div className="involved-steps">
          <h2>What we look for</h2>
          <ul>
            <li>Nice people</li>
            <li>People who will have the time to commit</li>
            <li>No background in teaching is necessary — we&apos;ll teach you the rest!</li>
          </ul>
        </div>
      </ColorWrapper>

      <ColorWrapper blue={true}> 
        <div className="involved-steps">
          <h2>Benefits</h2>
          <ul>
            <li>Receive verified volunteer hours</li>
            <li>Meet new and talented individuals from other high schools and colleges all across the nation</li>
            <li>Most importantly, make a difference in your community and be a part of solving the global education crisis</li>
          </ul>
        </div>
      </ColorWrapper>

      <ColorWrapper blue={false}>
        <div className="partner-message">
          <h3>Interested in learning more?</h3>
          <div>If you have any questions, please email us at <a href="mailto:teachchildrenstem@gmail.com">teachchildrenstem@gmail.com</a> or DM us at <a target="_blank" href="https://www.instagram.com/teachchildrenstem">@teachchildrenstem</a> on Instagram.</div>
        </div>
      </ColorWrapper>

      <ColorWrapper blue={true}><Socials/></ColorWrapper>
    </main>
  )
}