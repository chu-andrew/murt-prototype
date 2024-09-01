import { Box, SimpleGrid } from "@mantine/core";
import PageLayout from "@/components/page-layout/PageLayout";
import { PlainContactCard } from "@/components/people-cards/PeopleCards";
import { title, description, associates } from "./data";
import classes from "./styles.module.css";

export default function Associates() {
  return (
    <PageLayout title={title} description={description}>
      <Box className={classes.organization}>
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 2, lg: 2 }}
          spacing="xs"
          verticalSpacing="xs"
        >
          // TODO switch to contact cards that show image and bio
          {associates.map((member, i) => (
            <PlainContactCard name={member.name} key={i} />
          ))}{" "}
        </SimpleGrid>
      </Box>
    </PageLayout>
  );
}
