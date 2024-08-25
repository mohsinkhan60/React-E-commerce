import Button from "./Button";
import { HamburgerMenu } from "./design/Header";
import MenuSvg from "../assets/svg/MenuSvg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { brainwave } from "../assets";
import { navigation } from "../constant";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if(isMenuOpen){
      setIsMenuOpen(false);
      enablePageScroll();
      }else{
        setIsMenuOpen(true);
        disablePageScroll();
      }
    }

    const handlleClick = () => {
      if(!isMenuOpen) return
      enablePageScroll();
      setIsMenuOpen(false);
    }
  const pathname = useLocation();
  // console.log(pathname);
  return (
    <div
      className={`fixed top-0  left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90
     lg:backdrop-blur-sm ${
       isMenuOpen ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
     } `}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} alt="img" width={190} height={40} />
        </a>

        <nav className={` ${isMenuOpen ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent `}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                onClick={handlleClick}
                href={item.url}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 
              ${
                item.onlyMobile ? "lg:hidden" : ""
              } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold
              ${
                item.url === pathname.hash
                  ? "z-2 lg:text-n-1"
                  : "lg:text-n-1/50"
              } lg:leading-5 lg:hover:text-n-1 px-12
              `}
              >
                {item.title}
              </a>
            ))}

            
          </div>
          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        <Button className="ml-auto lg:hidden px-3" onClick={toggleMenu}>
          <MenuSvg isMenuOpen={isMenuOpen} />
        </Button>
      </div>
    </div>
  );
};
export default Header;
