import { Portal, Slide } from "@chakra-ui/react";
import { FC } from "react";
import { MenuList } from "./MenuList";
import { Overlay } from "./Overlay";

type Props = {
  isOpen:boolean;
  toggleMenu():void;
};
export const MobileMenu:FC<Props> = ({toggleMenu, isOpen}) => {
  return (
    <Portal>
    {isOpen && <Overlay toggleMenu={toggleMenu}/>}
    <Slide direction="bottom" in={isOpen} style={{ zIndex: 100 }}>
      <MenuList toggleMenu={toggleMenu} />
    </Slide>
  </Portal>
  );
};