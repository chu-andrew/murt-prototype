"use client";
import { useState } from "react";
import { Box, Container, Title, SegmentedControl } from "@mantine/core";
import PageLayout from "@/components/page-layout/PageLayout";
import { title, description, team } from "./data";
import classes from "./styles.module.css";
import { AutoParagraph } from "@/components/text-format/TextFormat";

export default function Team() {
  const [position, setPosition] = useState(team[0]?.position);
  const focusedEntity = team.filter(
    (entity) => entity.position === position
  )[0];

  return (
    <PageLayout title={title} description={description}>
      <Box className={classes.detailWrapper}>
        <SegmentedControl // TODO make responsive
          data={team.map((entity) => entity.position)}
          value={position}
          onChange={setPosition}
          size="md"
          radius="md"
          color="violet.3"
          className={classes.segmentedControl}
        />
        <Title order={2} m="sm">
          {focusedEntity.names}
        </Title>
        {/* TODO add image */}
        <Container>
          <AutoParagraph text={focusedEntity.body} />
        </Container>
      </Box>
    </PageLayout>
  );
}
