import { Container, Box, Flex, Stack, Title } from "@mantine/core";
import PageLayout from "@/components/page-layout/PageLayout";
import { PlainContactCard } from "@/components/people-cards/PeopleCards";
import { title, description, affinityGroups } from "./data";
import classes from "./styles.module.css";

export default function AffinityGroups() {
  return (
    <PageLayout title={title} description={description}>
      <Container size="lg">
        <Flex
          direction={{ base: "column", sm: "row" }}
          gap="md"
          wrap="wrap"
          className={classes.flexbox}
        >
          {affinityGroups.map((group, i) => {
            return (
              <Stack
                gap="xs"
                align="center"
                className={classes.affinityGroup}
                key={i}
              >
                <Title order={3}>{group.title}</Title>
                {group.heads.map((member, j) => (
                  <PlainContactCard
                    name={member.name}
                    email={member.email}
                    key={j}
                  />
                ))}
              </Stack>
            );
          })}
        </Flex>
      </Container>
    </PageLayout>
  );
}
