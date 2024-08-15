"use client";
import Link from "next/link";
import { Menu, Group, Center, Burger, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconHexagonLetterM } from "@tabler/icons-react";
import headerRoutes from "./HeaderRoutes";
import classes from "./Header.module.css";

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = headerRoutes.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>
        <Link href={`${link.link}${item.link}`} className={classes.link}>
          {item.label}
        </Link>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <Link href={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} href={link.link} className={classes.link}>
        {link.label}
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
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
