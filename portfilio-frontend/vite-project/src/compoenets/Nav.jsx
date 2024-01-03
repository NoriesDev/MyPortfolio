import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuItem, NavbarMenuToggle, NavbarMenu, Image } from "@nextui-org/react";
import Logo from '../assets/img/Logo1.png';


function Nav() {


    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [

      "Projects",
      "Contact",
      "Home",
      "About",
    ];
  
    return (
      <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-two/20 text-one  sticky top-0  z-30">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
          <Image  alt="Album cover"
              className="object-cover w-[80px] h-[80px] mb-2 mt-6 mr-12 rounded-none"
              src={Logo} />
            <p className="font-bold text-inherit hidden sm:block hover:text-five">Nora Martiny</p>
          </NavbarBrand>
        </NavbarContent>
  
        <NavbarContent className="hidden sm:flex lg:gap-12 xl:gap-24 " justify="center">
          <NavbarItem>
            <Link color="foreground" href="#" className="text-one hover:text-five">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" className="text-one hover:text-five">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="one" href="#" className="text-one hover:text-five">
            Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} href="#" variant="flat" className="text-one bg-one/20 hover:text-five">
            Contact
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu  className="inline-block flex flex-wrap gap-2 bg-black/20 w-[30%] mb-48">
        {menuItems.map((item, index) => (
    <NavbarMenuItem key={`${item}-${index}`}>
      <Link
        className="text-one px-2 py-2 rounded top-20 hover:text-five"
        href="#"
        size="lg"
      >
        {item}
      </Link>
    </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    );
  
  }
  
  export default Nav
  





