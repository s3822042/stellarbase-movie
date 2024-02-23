import React from "react";

import { Disclosure } from "@headlessui/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { classNames } from "@/app/utils";
import { APP_NAVIGATION } from "@/app/utils/constants";

interface NavigationBarProps {
  navigation?: any[];
}

export const Header: NextPage<NavigationBarProps> = ({
  navigation = APP_NAVIGATION,
}) => {
  const pathname = usePathname();

  return (
    <header>
      <Disclosure as="nav" className="bg-gray-900 py-6">
        {({ open }) => (
          <>
            <nav className="mx-auto max-w-7xl px-8" aria-label="Global">
              <div className="flex flex-1 items-center">
                <div className="flex w-full items-center justify-between md:w-auto">
                  <a href="/">
                    <span className="sr-only">StellarbaseM</span>
                    <div className="size-10 rounded bg-indigo-500"></div>
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <IconX className="block size-6" aria-hidden="true" />
                      ) : (
                        <IconMenu2
                          className="block size-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
                <div className="hidden space-x-4 md:ml-10 md:flex md:flex-1">
                  {navigation.map((item) => (
                    <Link
                      legacyBehavior={true}
                      key={item.name}
                      href={item.path}
                    >
                      <a
                        className={classNames(
                          item.path == pathname
                            ? "bg-gray-700 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "transition px-4 py-2 rounded-md text-sm font-medium",
                        )}
                        aria-current={
                          item.path == pathname ? "page" : undefined
                        }
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-2 px-0 py-3 lg:px-3">
                  {navigation.map((item) => (
                    <Link
                      legacyBehavior={true}
                      key={item.name}
                      href={item.path}
                    >
                      <a
                        className={classNames(
                          item.path == pathname
                            ? "bg-gray-700 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium",
                        )}
                        aria-current={
                          item.path == pathname ? "page" : undefined
                        }
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </nav>
          </>
        )}
      </Disclosure>
    </header>
  );
};
