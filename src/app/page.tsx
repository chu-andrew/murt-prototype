import cx from "clsx";
import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import classes from "./page.module.css";

export default function Homepage() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.5} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>Welcome to McMurtry College!</Title>

        <Container size={640} className={classes.homeContainer}>
          <Text size="lg" className={classes.description}>
            The tenth and greatest residential college at Rice University
          </Text>
        </Container>
      </div>
    </div>
  );
}
