'use client'

import Link from "next/link";

export default function Socials() {

    return (
      <div className="socials">
        <h3 className="socials-title">
            Be the first one to be notified on TCSTEM upcoming services and opportunities!
        </h3>
        <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScGF_u5mbO6y3_hTrXnjekZL7G-i9vLo5jR_6pK4zPywnVlsg/viewform" className="default-button">Join our mailing list</Link>
        <div className="socials-links">
          <Link target="_blank" href="https://www.instagram.com/teachchildrenstem"><img className="socials-link" src="/instagram.png" alt="instagram icon"/></Link>
          <Link target="_blank" href="https://www.youtube.com/channel/UCN8_zatQIQWUjtW61fGxxdQ"><img className="socials-link" src="/youtube.png" alt="youtube icon"/></Link>
          <Link target="_blank" href="https://www.facebook.com/teachchildrenstem"><img className="socials-link" src="/facebook.png" alt="facebook icon"/></Link>
          <Link target="_blank" href="https://twitter.com/tcstem2020"><img className="socials-link" src="/twitter.png" alt="twitter icon"/></Link>
          {/* <Link target="_blank" href="/connect-with-us"><img className="socials-link" src="/tiktok.png" alt="tiktok icon"/></Link> */}
          <Link target="_blank" href="https://www.linkedin.com/company/teach-children-stem/"><img className="socials-link" src="/linkedin.png" alt="linkedin icon"/></Link>
        </div>
      </div>
    )
}