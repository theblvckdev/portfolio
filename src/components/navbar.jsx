import { Link } from "react-router-dom"
import DropDownMenuWidget from "../utils/dropdown-menu"

const NavbarComponent = () => {
  return (
    <>
      <nav className="py-4 xl:px-0 px-5 fixed top-0 right-0 left-0 w-full max-w-6xl mx-auto">
        <div className="flex flex-row">
          <Link data-aos="fade-down"
            data-aos-duration="1000"
            ata-aos-easing="ease-in" to={'/'} className="no-underline outline-none">
            <h1 className="text-indigo-500 text-3xl font-bold">Nathan</h1>
          </Link>

          <div className="ml-auto">
            <DropDownMenuWidget />
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavbarComponent