import React from "react";
import { Link } from "react-router";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineFeedback } from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";


const Sidebar: React.FC = () => {

  const menuItems = [
    { name: "Students", icon: <PiStudentFill />, route: "/students" },
    { name: "Teachers", icon: <GiTeacher />, route: "/teachers" },
    { name: "Feedback", icon: <MdOutlineFeedback />, route: "/feedback" },
    { name: "Report", icon: <HiDocumentReport />, route: "/report" },
  ];

  return (
    <div>
  
   <div
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform translate-x-0  sm:translate-x-0 bg-gray-50 dark:bg-gray-800 pt-5`}
        aria-label="Sidebar"
      >
        <div className=" px-3 py-4">
          <ul className="space-y-2 font-medium">
            {menuItems.map(({ name, icon, route }) => (
              <div key={name}>
                <Link
                  to={route}
                  className="flex items-center pl-10 text-gray-900 rounded-lg dark:text-white 
                  hover:bg-gray-100 dark:hover:bg-gray-700 group mt- p-3"
                >
                  <span
                    className="text-2xl text-gray-500 transition duration-75 
                    dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  >
                    {icon}
                  </span>
                  <span className="flex-1 ms-3 whitespace-nowrap">{name}</span>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

