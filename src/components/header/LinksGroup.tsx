import { useState } from "react";
import Link from "next/link";
import { Group, Box, Collapse, UnstyledButton, rem } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./LinksGroup.module.css";

interface LinksGroupProps {
  label: string;
  link: string;
  links?: { label: string; link: string }[];
  drawerToggle: () => void;
}

export default function LinksGroup({
  label,
  link: route,
  links,
  drawerToggle,
}: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(false);
  const items = (hasLinks ? links : []).map((link) => (
    <Link
      href={`${route}${link.link}`}
      onClick={drawerToggle}
      className={classes.link}
      key={link.label}
    >
      {link.label}
    </Link>
  ));

  if (hasLinks) {
    return (
      <>
        <UnstyledButton
          onClick={() => setOpened((o) => !o)}
          className={classes.control}
        >
          <Group justify="space-between" gap={0}>
            <Box ml="md">{label}</Box>
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? "rotate(-90deg)" : "none",
              }}
            />
          </Group>
        </UnstyledButton>
        <Collapse in={opened}>{items}</Collapse>
      </>
    );
  } else {
    return (
      <Link
        href={route}
        passHref
        onClick={drawerToggle}
        className={classes.topLevelLink}
      >
        <UnstyledButton className={classes.control}>
          <Box ml="md">{label}</Box>
        </UnstyledButton>
      </Link>
    );
  }
}
