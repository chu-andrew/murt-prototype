import { Card, Text, Stack, Badge } from "@mantine/core";
import clsx from "clsx";
import classes from "./PeopleCards.module.css";

interface PlainContactCardProps {
  position: string;
  name: string;
  year: string;
  email: string;
  shaded?: boolean;
}

function PlainContactCard({
  position,
  name,
  year,
  email,
  shaded,
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
        <Badge size="lg" color="violet" variant="light" mb="sm">
          {position}
        </Badge>
        <Text size="lg">{name}</Text>
        {!isPlaceholder && (
          <>
            <Text size="sm" c="dimmed">
              Class of {year}
            </Text>
            <Text size="sm" c="dimmed">
              {email}
            </Text>
          </>
        )}
      </Stack>
    </Card>
  );
}

export { PlainContactCard };
