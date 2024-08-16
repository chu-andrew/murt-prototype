"use client";
import Link from "next/link";
import { Box, Menu, Group, Center, Burger, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconHexagonLetterM } from "@tabler/icons-react";
import headerRoutes from "./HeaderRoutes";
import classes from "./Header.module.css";
import HeaderMobileDrawer from "./HeaderMobileDrawer";

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = headerRoutes.map((route) => {
    const menuItems = route.links?.map((item) => (
      <Menu.Item key={item.link}>
        <Link href={`${route.link}${item.link}`} className={classes.link}>
          {item.label}
        </Link>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={route.label}
          trigger="click-hover"
          transitionProps={{ exitDuration: 0 }}
          trapFocus={false} // necessary for accessibility https://mantine.dev/core/menu/#navigation
          withinPortal={false}
        >
          <Menu.Target>
            <Box className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{route.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </Box>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={route.label} href={route.link} className={classes.link}>
        {route.label}
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <IconHexagonLetterM size={28} />
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger
            // This burger does not receive the "opened" state because
            // the opening HeaderMobileDrawer obscures its transition
            // into an X. Functionally equal to an ActionIcon component.
            onClick={toggle}
            size="sm"
            hiddenFrom="sm"
            aria-label="Toggle navigation"
          />
        </div>
      </Container>
      <HeaderMobileDrawer opened={opened} toggle={toggle} />
    </header>
  );
}
