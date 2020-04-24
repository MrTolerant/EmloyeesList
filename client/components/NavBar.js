import React from 'react'

const NavBar = () => {
  return (
    <nav className="relative select-none bg-white lg:flex lg:items-stretch w-full shadow-2xl ">
      <div className="flex flex-no-shrink items-stretch h-12 ">
        <span className=" ml-6 my-auto text-indigo-500 text-center text-2xl font-extrabold">
          Employees List
        </span>
      </div>
      <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
        <div className="lg:flex lg:items-stretch lg:justify-end ml-auto" />
      </div>
    </nav>
  )
}

NavBar.propTypes = {}

export default NavBar
