import { Box, SimpleGrid, Text } from "@mantine/core";
import { PlainContactCard } from "@/components/people-cards/PeopleCards";
import PageLayout from "@/components/page-layout/PageLayout";
import { title, advisors } from "./data";
import classes from "./styles.module.css";

export default function DivisionalAdvisors() {
  return (
    <PageLayout title={title}>
      <Box className={classes.organization}>
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3, lg: 3 }}
          spacing="xs"
          verticalSpacing="xs"
        >
          {advisors.map((member, i) => (
            <PlainContactCard
              position={member.school}
              name={member.name}
              email={member.email}
              key={i}
            >
              <Text size="sm" c="dimmed" mt="sm">
                {member.department}
              </Text>
              <Text size="sm" c="dimmed">
                {member.office}
              </Text>
            </PlainContactCard>
          ))}
        </SimpleGrid>
      </Box>
    </PageLayout>
  );
}
