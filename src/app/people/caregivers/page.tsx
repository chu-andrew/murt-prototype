import { Box, SimpleGrid } from "@mantine/core";
import { PlainContactCard } from "@/components/people-cards/PeopleCards";
import PageLayout from "@/components/page-layout/PageLayout";
import { title, caregivers } from "./data";
import classes from "./styles.module.css";

export default function Caregivers() {
  return (
    <PageLayout title={title}>
      <Box className={classes.organization}>
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 2, lg: 2 }}
          spacing="xs"
          verticalSpacing="xs"
        >
          {caregivers.map((member, i) => (
            <PlainContactCard
              position="Head Caregiver"
              name={member.name}
              email={member.email}
              phone={member.phone}
              key={i}
            />
          ))}
        </SimpleGrid>
      </Box>
    </PageLayout>
  );
}
