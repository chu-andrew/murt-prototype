"use client";
import { Container, Table } from "@mantine/core";
import PageLayout from "@/components/page-layout/PageLayout";
import { title, description, headPAAs, oWeekPAAs, yearLongPAAs } from "./data";

export default function PAA() {
  const rows = [...headPAAs, ...oWeekPAAs, ...yearLongPAAs].map((member) => (
    <Table.Tr key={member.name}>
      <Table.Td>{member.position}</Table.Td>
      <Table.Td>{member.name}</Table.Td>
      <Table.Td>{member.email}</Table.Td>
      <Table.Td>{member.major}</Table.Td>
    </Table.Tr>
  ));

  return (
    <PageLayout title={title} description={description}>
      <Container size="90%" mt="lg" mb="lg">
        <Table.ScrollContainer minWidth={800}>
          <Table striped highlightOnHover highlightOnHoverColor="violet.0">
            <Table.Thead>
              <Table.Tr>
                <Table.Th></Table.Th>
                <Table.Th>Name</Table.Th>
                <Table.Th>Email</Table.Th>
                <Table.Th>Major(s)</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Container>
    </PageLayout>
  );
}
