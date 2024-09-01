"use client";
import { useState } from "react";
import { Box, Container, Title, SegmentedControl, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import PageLayout from "@/components/page-layout/PageLayout";
import { title, description, team } from "./data";
import classes from "./styles.module.css";
import { AutoParagraph } from "@/components/text-format/TextFormat";

export default function Team() {
  const isMobile = useMediaQuery("(max-width: 55rem)");
  const [position, setPosition] = useState(team[0]?.position);
  const focusedEntity = team.filter(
    (entity) => entity.position === position
  )[0];

  return (
    <PageLayout title={title} description={description}>
      <Box className={classes.detailWrapper}>
        <SegmentedControl // TODO perhaps change to a more intuitive component for mobile?
          data={team.map((entity) => entity.position)}
          value={position}
          onChange={setPosition}
          orientation={isMobile ? "vertical" : "horizontal"}
          size="md"
          radius="md"
          color="violet.3"
          className={classes.segmentedControl}
        />
        <Title
          order={2}
          m="sm"
          textWrap="balance"
          className={classes.nameTitle}
        >
          {focusedEntity.names}
        </Title>
        {/* TODO add image */}
        <Container>
          <AutoParagraph text={focusedEntity.body} />
          {focusedEntity.position === "College Coordinator" && ( // TODO better way to add the ul
            <>
              <Text fw={600} mt="sm">
                Things you can do in my office:
              </Text>
              <ul>
                {focusedEntity.officeItems?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </Container>
      </Box>
    </PageLayout>
  );
}
