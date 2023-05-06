import PageLayout from "components/layout/pageLayout";
import Profiles from "features/profiles/screen";

export default function Me({ ...props }: any) {
  return (
    <PageLayout
      title="Me - LzyyyMe"
      navbar={true}
      pagename="about_me"
    >
      <Profiles />
    </PageLayout>
  );
}