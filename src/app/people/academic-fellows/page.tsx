"use client";
import PageLayout from "@/components/page-layout/PageLayout";
import { Container, Table } from "@mantine/core";
import { title, description, fellows } from "./data";

export default function AcademicFellows() {
  const rows = fellows.map((member) => (
    <Table.Tr key={member.name}>
      <Table.Td>{member.name}</Table.Td>
      <Table.Td>{member.email}</Table.Td>
      <Table.Td>{member.year}</Table.Td>
      <Table.Td>{member.major}</Table.Td>
      <Table.Td>{member.pre_prof_path}</Table.Td>
      <Table.Td>{member.subjects}</Table.Td>
    </Table.Tr>
  ));

  return (
    <PageLayout title={title} description={description}>
      <Container size="90%" mt="lg" mb="lg">
        <Table.ScrollContainer minWidth={800}>
          <Table striped highlightOnHover highlightOnHoverColor="violet.0">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Name</Table.Th>
                <Table.Th>Email</Table.Th>
                <Table.Th>Year</Table.Th>
                <Table.Th>Major(s)</Table.Th>
                <Table.Th>Pre-Professional Path</Table.Th>
                <Table.Th>Subjects</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Container>
    </PageLayout>
  );
}
