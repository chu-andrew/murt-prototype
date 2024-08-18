"use client";
import { Text, Container, Stack } from "@mantine/core";
import { IconHexagonLetterM } from "@tabler/icons-react";
import classes from "./Footer.module.css";

const footerInfo = [
  "1605 Rice Blvd, Houston, TX 77005",
  "MS 761 &middot; Rice University",
  "Phone: (713) 348-4583 &middot; Fax: (713) 348-3135",
  "Email: mcmurtry@rice.edu",
];

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <IconHexagonLetterM />
          <Text size="xs" c="dimmed" className={classes.description}>
            Burt and DeeDee McMurtry College <br />
            at Rice University
          </Text>
        </div>
        <Stack className={classes.infoWrapper} gap="xs">
          {footerInfo.map((info, index) => (
            <Text
              key={index}
              className={classes.info}
              dangerouslySetInnerHTML={{ __html: info }} // necessary for &middot; rendering
            />
          ))}
        </Stack>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 McMurtry College
        </Text>
      </Container>
    </footer>
  );
}
