import { Card, Text, Stack, Badge } from "@mantine/core";
import clsx from "clsx";
import classes from "./PeopleCards.module.css";

interface PlainContactCardProps {
  name: string;
  position?: string;
  year?: string;
  email?: string;
  phone?: string;
  shaded?: boolean;
  children?: React.ReactNode;
}

function PlainContactCard({
  position,
  name,
  year,
  email,
  phone,
  shaded,
  children,
}: PlainContactCardProps) {
  const isPlaceholder = name === "TBD";

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className={clsx(classes.card, { [classes.highlight]: shaded })}
    >
      <Stack align="center" gap={1}>
        {position && (
          <Badge size="lg" color="violet" variant="light" mb="sm">
            {position}
          </Badge>
        )}
        <Text size="lg">{name}</Text>
        {!isPlaceholder && (
          <>
            {year && (
              <Text size="sm" c="dimmed">
                Class of {year}
              </Text>
            )}
            {email && (
              <Text size="sm" c="dimmed">
                {email}
              </Text>
            )}
            {phone && (
              <Text size="sm" c="dimmed">
                {phone}
              </Text>
            )}
            {children}
          </>
        )}
      </Stack>
    </Card>
  );
}

export { PlainContactCard };
