import Head from "next/head";
import styles from "styles/Home.module.css";
import PageLayout from "components/layout/pageLayout";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const DynamicMain = dynamic(() => import("../components/main"), {
  suspense: true,
});

export default function Home({ ...props }: any) {
  return (
    <PageLayout>
      <Suspense fallback={"Loading . . ."}>
        <DynamicMain />
      </Suspense>
    </PageLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
