import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import mtcna from "../assets/certs/mtcna.jpg"
import certificateHtml from "../assets/certificate/certificate-html.png"
import certificatecss from "../assets/certificate/certificate-css.png"
import certificateBootstrap from "../assets/certificate/certificate-bootstrap.png"
import javascript101 from "../assets/certificate/certificate-javascript-101.png"
import javascript102 from "../assets/certificate/certificate-javascript-102.png"
import domJs from "../assets/certificate/certificate-dom.png"

import nodejs101 from "../assets/certificate/certificate-node.js.png"
import react101 from "../assets/certificate/certificate-react101.png"
import react102 from "../assets/certificate/certificate-react102.png"
import swift101 from "../assets/certificate/certificate-swift-101.png"
import swift102 from "../assets/certificate/certificate-swift-102.png"
import swift103 from "../assets/certificate/certificate-swift-103.png"
import frontEndFramework from "../assets/certificate/front-end-framework.png"
import softSkills from "../assets/certificate/05-Soft Skills-RUH-093.png"
import basicPython from "../assets/certificate/besic-python.png"
import certificateEng from "../assets/certificate/certificate-Eng.png"

// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                
                
                
                
                <CertCard name="professional Accreditation" img={certificateEng} issued="Saudi Council Of Engineers" date="Nov 2022" />
                
                <CertCard name="Swift103" img={swift103} issued="Tuwiaq Academy" date="sep 2022" />
                
                <CertCard name="Swift102" img={swift102} issued="Tuwiaq Academy" date="sep 2022" />
                <CertCard name="Swift101" img={swift101} issued="Tuwiaq Academy" date="sep 2022" />

                <CertCard name="react102" img={react102} issued="Tuwiaq Academy" date="Aug 2022" />
                <CertCard name="react101" img={react101} issued="Tuwiaq Academy" date="Aug 2022" />
                

                <CertCard name="node.js" img={nodejs101} issued="Tuwiaq Academy" date="Aug 2022" />

                <CertCard name="dom" img={domJs} issued="Tuwiaq Academy" date="Aug 2022" />
                <CertCard name="javascript101" img={javascript101} issued="Tuwiaq Academy" date="Aug 2022" />
                <CertCard name="javascript-102" img={javascript102} issued="Tuwiaq Academy" date="Aug 2022" />
                
                <CertCard name="Bootstrap" img={certificateBootstrap} issued="Tuwiaq Academy" date="Jul 2022" />
                <CertCard name="css" img={certificatecss} issued="Tuwiaq Academy" date="Jul 2022" />
                <CertCard name="HTML" img={certificateHtml} issued="Tuwiaq Academy" date="Jul 2022" />

                <CertCard name="Front-End Framework" img={frontEndFramework} issued="Ministry Of Communications And Information Technology" date="Jul 21" />
                <CertCard name="Soft Skills" img={softSkills} issued="Ministry Of Communications And Information Technology" date="Jul 21" />
                <CertCard name="basic Python" img={basicPython} issued="Ministry Of Communications And Information Technology" date="Apr 21" />


            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
