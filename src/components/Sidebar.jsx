import {
  UsersIcon,
  Cog6ToothIcon,
  Squares2X2Icon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";

import { NavLink } from "react-router-dom";

const sidebarLinks = [
  {
    name: "Dashboard",
    href: "/",
    icon: Squares2X2Icon,
  },
  {
    name: "Anyalytics",
    href: "/analytics",
    icon: DocumentCheckIcon,
  },
  {
    name: "Logout",
    href: "/logout",
    icon: Cog6ToothIcon,
  },
];

function Sidebar() {
  return (
    <div className="sticky top-0 flex h-screen w-full flex-col justify-between  bg-white px-1 py-5 xl:py-12 xl:px-2">
      <div className="ie-logo px-3 py-0 text-center xl:text-left">
        <div className="text-xl font-medium text-gray-900 xl:px-3 xl:text-2xl">
          <span className="hidden xl:block text-blue-600 text-[25px] font-medium">
            Nykaa Dashboard
          </span>
        </div>
      </div>
      <div className="ie-menu mt-8 h-full">
        <div className="flex flex-col items-center gap-3 p-1 xl:items-stretch xl:px-3">
          {sidebarLinks.map((item) => {
            return (
              <NavLink to={item.href} key={item.name} className="group">
                {({ isActive }) => {
                  return (
                    <span
                      className={`flex items-center gap-3 rounded-md px-3 py-2 transition-all ${
                        isActive ? "bg-gray-100" : "group-hover:bg-gray-50"
                      }`}
                    >
                      <item.icon
                        className={`h-5 stroke-2 ${
                          isActive
                            ? "stroke-blue-700 text-blue-700"
                            : "stroke-gray-500 group-hover:stroke-blue-700 group-hover:text-blue-700"
                        }`}
                      />
                      <span
                        className={`hidden text-base font-semibold xl:block ${
                          isActive
                            ? "text-blue-700"
                            : "text-gray-500 group-hover:text-blue-700"
                        }`}
                      >
                        {item.name}
                      </span>
                    </span>
                  );
                }}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
