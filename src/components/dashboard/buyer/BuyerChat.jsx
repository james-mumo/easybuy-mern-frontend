import React from "react"
import { FiSearch, FiMenu, FiMoreVertical } from "react-icons/fi"
import { FaRegCommentDots, FaRegCalendarAlt } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { TiContacts } from "react-icons/ti"
import { BiPlus } from "react-icons/bi"

const Gmail = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-white w-64 pb-6 hidden sm:block">
        <div className="mt-8">
          <h3 className="text-xs uppercase font-semibold text-gray-500 mb-2">
            Inbox
          </h3>
          <ul className="flex flex-col">
            <li className="pl-4 py-2 nav-item">
              <a href="#" className="text-gray-700">
                <span className="mr-3">
                  <FaRegCommentDots />
                </span>
                Primary
              </a>
            </li>
            <li className="pl-4 py-2 nav-item">
              <a href="#" className="text-gray-700">
                <span className="mr-3">
                  <FaRegCalendarAlt />
                </span>
                Social
              </a>
            </li>
            <li className="pl-4 py-2 nav-item">
              <a href="#" className="text-gray-700">
                <span className="mr-3">
                  <IoMdMail />
                </span>
                Promotions
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <h3 className="text-xs uppercase font-semibold text-gray-500 mb-2">
            Contacts
          </h3>
          <ul className="flex flex-col">
            <li className="pl-4 py-2 nav-item">
              <a href="#" className="text-gray-700">
                <span className="mr-3">
                  <TiContacts />
                </span>
                Team
              </a>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-0 my-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
            <span className="mr-2">
              <BiPlus />
            </span>
            Compose
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        <div className="relative shadow-md bg-white p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button className="hidden sm:block mr-3">
                <FiMenu />
              </button>
              <h1 className="text-lg font-semibold text-gray-700">Chats</h1>
            </div>
            <div className="flex items-center">
              <button>
                <FiSearch />
              </button>
              <button className="ml-4">
                <FiMoreVertical />
              </button>
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div className="flex-1 overflow-y-scroll">
          <div className="bg-white px-4 py-3">
            <div className="flex items-start">
              <img
                src="https://i.pravatar.cc/40?img=7"
                alt="avatar"
                className="rounded-full w-8 h-8 mr-3"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-700">
                    John Doe
                  </h3>
                  <span className="text-sm text-gray-500">2h</span>
                </div>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam in hendrerit elit, ac commodo eros.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white px-4 py-3">
            <div className="flex items-start">
              <img
                src="https://i.pravatar.cc/40?img=8"
                alt="avatar"
                className="rounded-full w-8 h-8 mr-3"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-700">
                    Jane Smith
                  </h3>
                  <span className="text-sm text-gray-500">4h</span>
                </div>
                <p className="text-sm text-gray-600">
                  Sed et erat risus. Integer feugiat velit arcu, vitae imperdiet
                  massa scelerisque sed.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white px-4 py-3">
            <div className="flex items-start">
              <img
                src="https://i.pravatar.cc/40?img=9"
                alt="avatar"
                className="rounded-full w-8 h-8 mr-3"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-700">
                    Mark Johnson
                  </h3>
                  <span className="text-sm text-gray-500">6h</span>
                </div>
                <p className="text-sm text-gray-600">
                  Quisque sagittis est in est egestas, non bibendum elit
                  gravida. Sed suscipit nibh ac neque.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white px-4 py-3">
            <div className="flex items-start">
              <img
                src="https://i.pravatar.cc/40?img=10"
                alt="avatar"
                className="rounded-full w-8 h-8 mr-3"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-700">
                    Maria Rodriguez
                  </h3>
                  <span className="text-sm text-gray-500">8h</span>
                </div>
                <p className="text-sm text-gray-600">
                  Proin vestibulum orci eget ex posuere aliquam. Nulla vel
                  lacinia turpis, vel facilisis nibh.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white">hjhjh</div>
          <div className="flex-1 bg-gray-100 p-6">
            <h1 className="text-2xl font-semibold mb-6">Chats</h1>

            <div className="flex items-center mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search chats"
                  className="w-full bg-gray-200 rounded-full py-2 pl-4 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:bg-white focus:placeholder-gray-400"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                  <svg
                    className="h-4 w-4 fill-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M9 17a8 8 0 100-16 8 8 0 000 16zm6.32-1.5a6 6 0 11-2.83-2.83L15.17 13a4 4 0 104.24 0l-1.58-1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <button className="ml-4 py-2 px-6 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition duration-200">
                New Chat
              </button>
            </div>

            <div className="flex items-center mb-4 cursor-pointer">
              <div className="flex-shrink-0">
                <img
                  src="https://i.pravatar.cc/40?img=11"
                  alt="avatar"
                  className="rounded-full w-8 h-8"
                />
              </div>
              <div className="flex-1 ml-4">
                <h3 className="text-sm font-semibold text-gray-700">
                  John Doe
                </h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>

            <div className="flex items-center mb-4 cursor-pointer">
              <div className="flex-shrink-0">
                <img
                  src="https://i.pravatar.cc/40?img=12"
                  alt="avatar"
                  className="rounded-full w-8 h-8"
                />
              </div>
              <div className="flex-1 ml-4">
                <h3 className="text-sm font-semibold text-gray-700">
                  Jane Smith
                </h3>
                <p className="text-sm text-gray-600">
                  Sed et erat risus. Integer feugiat.
                </p>
              </div>
            </div>

            <div className="flex items-center mb-4 cursor-pointer">
              <div className="flex-shrink-0">
                <img
                  src="https://i.pravatar.cc/40?img=13"
                  alt="avatar"
                  className="rounded-full w-8 h-8"
                />
              </div>
              <div className="flex-1 ml-4">
                <h3 className="text-sm font-semibold text-gray-700">
                  Mark Johnson
                </h3>
                <p className="text-sm text-gray-600">
                  Quisque sagittis est in est egestas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gmail
