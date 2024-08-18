import { Text } from "@mantine/core";
import classes from "./TextFormat.module.css";

function Paragraph({ text, indented }: { text: string; indented?: boolean }) {
  return (
    <Text className={classes.paragraph}>
      {indented && <span className={classes.tab} />}
      {text}
    </Text>
  );
}

function AutoParagraph({ text }: { text: string | string[] }) {
  return Array.isArray(text) ? (
    text.map((paragraph, index) => (
      <Paragraph text={paragraph} indented={index > 0} />
    ))
  ) : (
    <Paragraph text={text} />
  );
}

export { Paragraph, AutoParagraph };
