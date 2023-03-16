import PageLayout from "components/layout/pageLayout";
import ProjectPage from "features/projects/screen";

export default function Projects({ ...props }: any) {
  return (
    <PageLayout
      title="Projects - LzyyyMe"
      navbar={true}
      pagename="projects"
      page_list={[
        {
          pagename: "“my personal opinion”",
          path: "/blog",
        },
        {
          pagename: "just want to know me",
          path: "/me",
        },
      ]}
    >
      <ProjectPage />
    </PageLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
