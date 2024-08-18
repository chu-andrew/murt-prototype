import { Box, SimpleGrid, Title } from "@mantine/core";
import { PlainContactCard } from "@/components/people-cards/PeopleCards";
import PageLayout from "@/components/page-layout/PageLayout";
import {
  title,
  description,
  executiveCouncil,
  peoplesCouncil,
  cabinet,
} from "./data";
import classes from "./styles.module.css";

export default function Ministry() {
  return (
    <PageLayout title={title} description={description}>
      <Box className={classes.organization}>
        <Title order={2} className={classes.title}>
          Executive Council
        </Title>
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing="xs"
          verticalSpacing="xs"
        >
          {executiveCouncil.map((member, i) => (
            <PlainContactCard
              {...member}
              shaded={member.position === "President"}
              key={i}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Box className={classes.organization}>
        <Title order={2} className={classes.title}>
          People's Council
        </Title>
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing="xs"
          verticalSpacing="xs"
        >
          {peoplesCouncil.map((member, i) => (
            <PlainContactCard
              {...member}
              shaded={member.position === "At-Large Rep"}
              key={i}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Box className={classes.organization}>
        <Title order={2} className={classes.title}>
          McCabinet
        </Title>
        <SimpleGrid
          cols={{ base: 1, sm: 1, md: 1, lg: 1 }} // assumes only 1 member in McCabinet
          spacing="xs"
          verticalSpacing="xs"
        >
          {cabinet.map((member, i) => (
            <PlainContactCard {...member} key={i} />
          ))}
        </SimpleGrid>
      </Box>
    </PageLayout>
  );
}
