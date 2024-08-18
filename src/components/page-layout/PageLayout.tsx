import { Container, Title, Text, Group } from "@mantine/core";
import { ReactNode } from "react";
import { AutoParagraph } from "@/components/text-format/TextFormat";
import classes from "./PageLayout.module.css";

interface LayoutProps {
  children?: ReactNode;
  title: string;
  description?: string | string[];
}

const PageLayout = ({ children, title, description }: LayoutProps) => {
  return (
    <Container fluid className={classes.frame}>
      <Container className={classes.titleWrapper}>
        <Title order={1}>{title}</Title>
      </Container>

      {description && (
        <Container size="sm">
          <AutoParagraph text={description} />
        </Container>
      )}

      {children}
    </Container>
  );
};

export default PageLayout;
