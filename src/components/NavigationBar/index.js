import { Navbar, NavbarGroup } from '@blueprintjs/core';
export const NavigationBar = ({ children, ...props }) => (
    <Navbar>
        <NavbarGroup>{children}</NavbarGroup>
    </Navbar>
);
