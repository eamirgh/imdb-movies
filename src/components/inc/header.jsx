import React from 'react';
import {
    NavigationMenu,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu.jsx";

const Header = () => {
    return (
        <header>

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                            <NavigationMenuLink href="contact">Another Link</NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
};

export default Header;