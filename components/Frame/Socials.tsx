'use client'

import Link from "next/link";

export default function Socials() {

    return (
      <div className="socials">
        <div className="socials-title">
            Be the first one to be notified on TCSTEM upcoming services and opportunities!
        </div>
        <button className="default-button">Join our mailing list</button>
        <div className="socials-links">
          <Link href="https://www.instagram.com/teachchildrenstem"><img className="socials-link" src="/instagram.png" alt="instagram icon"/></Link>
          <Link href="https://www.youtube.com/channel/UCN8_zatQIQWUjtW61fGxxdQ"><img className="socials-link" src="/youtube.png" alt="youtube icon"/></Link>
          <Link href="https://www.facebook.com/teachchildrenstem"><img className="socials-link" src="/facebook.png" alt="facebook icon"/></Link>
          <Link href="https://twitter.com/tcstem2020"><img className="socials-link" src="/twitter.png" alt="twitter icon"/></Link>
          {/* <Link href="/connect-with-us"><img className="socials-link" src="/tiktok.png" alt="tiktok icon"/></Link> */}
          <Link href="https://www.linkedin.com/company/teach-children-stem/"><img className="socials-link" src="/linkedin.png" alt="linkedin icon"/></Link>
        </div>
      </div>
    )
}