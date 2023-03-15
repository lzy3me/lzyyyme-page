import Head from "next/head";
import styles from "styles/Home.module.css";
import PageLayout from "components/layout/pageLayout";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Homepage from 'features/homepage/screen';

export default function Home({ ...props }: any) {
  return (
    <PageLayout>
      <Homepage />
    </PageLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
