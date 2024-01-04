import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsHouse, BsPerson, BsTools, BsBriefcase } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const DropDownMenuWidget = () => {
  const dropdownLinks = [
    { name: "Home", path: "/", icon: <BsHouse /> },
    { name: "About", path: "/about", icon: <BsPerson /> },
    { name: "Services", path: "/services", icon: <BsTools /> },
    { name: "Projects", path: "/projects", icon: <BsBriefcase /> },
  ]

  return (
    <Popover className="relative">
      <Popover.Button data-aos="zoom-in"
        data-aos-duration="1000"
        ata-aos-easing="ease-in" className="h-[50px] w-[50px] rounded-full outline-none text-white text-2xl bg-indigo-500 grid place-items-center">
        <AiOutlineMenu />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute xl:-right-5 right-0 z-10 mt-3 flex w-full min-w-[200px]">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-md bg-indigo-500 text-sm leading-6 shadow-lg">
            <div className="flex flex-col ">
              {dropdownLinks.map((data, index) => {
                const { name, path, icon } = data;

                return (
                  <Link key={index} to={path} className='outline-none no-underline py-3 px-4'>
                    <div className="w-full flex items-center text-base gap-2 text-white">
                      {icon}
                      <div>
                        {name}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default DropDownMenuWidget
