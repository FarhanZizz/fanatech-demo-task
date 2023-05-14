import React from "react"

const Navbar = () => {
  const menu = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>About us</a>
      </li>
      <li tabIndex={0}>
        <a className="justify-between gap-0">
          EN
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            transform="rotate(90)"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </a>
        <ul className="p-2">
          <li>
            <a>BN</a>
          </li>
        </ul>
      </li>
    </>
  )
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <a
          href="/"
          className="btn btn-ghost normal-case text-2xl font-semibold text-primary merienda"
        >
          FoodTime
        </a>
      </div>
      <div className="navbar-end w-full hidden lg:flex">
        <ul className="menu menu-horizontal ml-36 px-1 gap-[70px] ">{menu}</ul>
      </div>
      <div className="navbar-end gap-x-4">
        <button className="btn btn-primary lg:px-12 lg:py-3 rounded-full text-white">
          Login
        </button>
        <button className="btn btn-primary rounded-full text-white">
          <svg
            width="22"
            height="22"
            viewBox="0 0 29 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.32635 0C1.86221 0 1.41707 0.185924 1.08887 0.51687C0.760675 0.847817 0.576294 1.29668 0.576294 1.76471C0.576294 2.23273 0.760675 2.6816 1.08887 3.01254C1.41707 3.34349 1.86221 3.52941 2.32635 3.52941H4.46142L4.99519 5.68588C5.00049 5.71071 5.00633 5.73542 5.01269 5.76L7.38927 15.3424L5.82647 16.9165C3.6214 19.14 5.18245 22.9412 8.30105 22.9412H23.3271C23.7912 22.9412 24.2363 22.7553 24.5645 22.4243C24.8927 22.0934 25.0771 21.6445 25.0771 21.1765C25.0771 20.7084 24.8927 20.2596 24.5645 19.9286C24.2363 19.5977 23.7912 19.4118 23.3271 19.4118H8.30105L10.0511 17.6471H21.577C21.9019 17.6469 22.2204 17.5555 22.4967 17.3831C22.773 17.2108 22.9963 16.9643 23.1415 16.6712L28.3917 6.08294C28.525 5.81396 28.5879 5.5151 28.5745 5.21472C28.5611 4.91433 28.4718 4.62238 28.3151 4.36658C28.1583 4.11077 27.9394 3.89959 27.679 3.75308C27.4186 3.60656 27.1254 3.52957 26.8272 3.52941H8.06654L7.52403 1.33588C7.42922 0.954271 7.21068 0.615545 6.90312 0.373509C6.59556 0.131474 6.21661 1.03419e-05 5.82647 0H2.32635ZM25.0771 27.3529C25.0771 28.055 24.8005 28.7283 24.3082 29.2247C23.8159 29.7211 23.1482 30 22.452 30C21.7558 30 21.0881 29.7211 20.5958 29.2247C20.1035 28.7283 19.8269 28.055 19.8269 27.3529C19.8269 26.6509 20.1035 25.9776 20.5958 25.4812C21.0881 24.9848 21.7558 24.7059 22.452 24.7059C23.1482 24.7059 23.8159 24.9848 24.3082 25.4812C24.8005 25.9776 25.0771 26.6509 25.0771 27.3529ZM8.45156 30C9.14777 30 9.81548 29.7211 10.3078 29.2247C10.8001 28.7283 11.0766 28.055 11.0766 27.3529C11.0766 26.6509 10.8001 25.9776 10.3078 25.4812C9.81548 24.9848 9.14777 24.7059 8.45156 24.7059C7.75534 24.7059 7.08764 24.9848 6.59534 25.4812C6.10304 25.9776 5.82647 26.6509 5.82647 27.3529C5.82647 28.055 6.10304 28.7283 6.59534 29.2247C7.08764 29.7211 7.75534 30 8.45156 30Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Navbar