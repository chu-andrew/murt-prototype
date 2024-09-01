import PageLayout from "@/components/page-layout/PageLayout";
import { title, description } from "./data";

export default function SMR() {
  return (
    <PageLayout title={title} description={description}>
      Hello
    </PageLayout>
  );
}
