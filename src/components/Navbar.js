import logo1 from "../assets/free-logo.png";
import resume from "../assets/eCv2023.pdf";

export default function Navbar() {
  return (
    <div className="fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36">
      <div className="flex justify-between items-center text-white">
        <img className="App-logo w-10 "  />
        {/* <h1>E7k</h1> */}
        <ul className="hidden md:flex">
          <li className="p-4">
            <a href="#home" className="hover:underline">
              About
            </a>
          </li>
          <li className="p-4">
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </li>
          {/* <li className="p-4"><a href="#honors" className="hover:underline">Honor & Awards</a></li> */}
          <li className="p-4">
            <a href="#certs" className="hover:underline">
              Certfications
            </a>
          </li>
        </ul>
        <a
         
          rel="noreferrer"
          target="_blank"
          className=" "
        >
          
        </a>
      </div>
    </div>
  );
}
