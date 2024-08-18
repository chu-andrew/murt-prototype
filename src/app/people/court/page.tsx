import { Box, Title, SimpleGrid } from "@mantine/core";
import { PlainContactCard } from "@/components/people-cards/PeopleCards";
import PageLayout from "@/components/page-layout/PageLayout";
import { title, description, chiefs, associates } from "./data";
import classes from "./styles.module.css";

export default function Court() {
  return (
    <PageLayout title={title} description={description}>
      <Box className={classes.organization}>
        <Title order={2} className={classes.title}>
          Chief Justices
        </Title>
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 2, lg: 2 }}
          spacing="xs"
          verticalSpacing="xs"
        >
          {/* TODO add chief bios */}
          {chiefs.map((member, i) => (
            <PlainContactCard
              name={member.name}
              email={member.email}
              phone={member.phone}
              shaded={member.position === "President"}
              key={i}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Box className={classes.organization}>
        <Title order={2} className={classes.title}>
          Associate Justices
        </Title>
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing="xs"
          verticalSpacing="xs"
        >
          {associates.map((member, i) => (
            <PlainContactCard
              name={member.name}
              email={member.email}
              shaded={member.position === "President"}
              key={i}
            />
          ))}
        </SimpleGrid>
      </Box>
    </PageLayout>
  );
}
