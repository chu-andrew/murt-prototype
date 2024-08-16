import { Drawer, ScrollArea } from "@mantine/core";
import LinksGroup from "./LinksGroup";
import headerRoutes from "./HeaderRoutes";
import classes from "./HeaderMobileDrawer.module.css";

interface HeaderMobileDrawerProps {
  opened: boolean;
  toggle: () => void;
}

function HeaderMobileDrawer({ opened, toggle }: HeaderMobileDrawerProps) {
  return (
    <Drawer
      opened={opened}
      onClose={toggle}
      size="auto"
      position="right"
      overlayProps={{ backgroundOpacity: 0.15, blur: 1.5 }}
    >
      <ScrollArea>
        <nav className={classes.navbar}>
          <ScrollArea className={classes.links}>
            {headerRoutes.map((item) => (
              <LinksGroup {...item} drawerToggle={toggle} key={item.label} />
            ))}
          </ScrollArea>
        </nav>
      </ScrollArea>
    </Drawer>
  );
}

export default HeaderMobileDrawer;
