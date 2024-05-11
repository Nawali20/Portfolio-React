import { useState } from "react";

import profile from "../assets/background 3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import hr from "../assets/curve-hr.svg";

export default function Hiro() {
  const [loaded, setLoaded] = useState(true);

  return (
    <>
      {loaded ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center">
          Loading..
        </div>
      ) : null}
      <div
        id="home"
        className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative"
      >
        <div className="md:w-3/6 md:p-4">
          {/* <img className="rounded-full w-80 h-80" src="/docs/images/examples/image-4@2x.jpg" alt="image description"/> */}
          {/* <br></br>
                    <br></br>
                    <br></br> */}

          <img
            className="rounded-full h-auto max-h-80 "
            data-aos="flip-right"
            data-aos-duration="1500"
            data-aos-offset="200"
            src={profile}
            alt="profile"
            onLoad={() => setLoaded(false)}
          />
        </div>
        <div
          className="md:w-3/6"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="100"
        >
          <div className="flex flex-col w-full mt-8">
            <h1 className="text-xl text-gray-400">Hi, I'm</h1>
            <h1 className="text-2xl font-bold">Nawal Mughram</h1>
            <p class="text-xl font-bold text-gray-300">programmed under construction</p>
            <p className="text-md font-light text-gray-400 ">
            A university student specializing in information technology and cybersecurity and a lover of programming and website development
            </p>
          </div>
          {/* <a href='http://blog.dama.ink' className='mt-2 block'>Go to My Blog <FontAwesomeIcon className='ml-2' icon={faCircleArrowRight}/> </a> */}

          <ul className="flex mt-2 gap-4 items-center">
            <li>
              <a
                href="https://www.instagram.com/27.iilli?igsh=MWVoYnplbno4azZ5dg%3D%3D&utm_source=qr"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={ faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Nawali27"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={ faTwitter} />
              </a>
            </li>
            {/* <li>
                        <a href='https://instagram.com/damaasth' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
                    </li> */}
            <li>
              <a
                href="https://www.linkedin.com/in/%D9%86%D9%88%D8%A7%D9%84-%D9%85%D8%BA%D8%B1%D9%85-056404300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+966556129483"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faWhatsapp} />
              </a>
            </li>
          </ul>
        </div>
        <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
      </div>
    </>
  );
}
