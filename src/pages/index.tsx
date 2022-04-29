import type { NextPage } from "next";
import Head from "next/head";
import { AppErrorBoundary } from "@components/AppErrorBoundary";
import { RouteDetails } from "@components/RouteDetails";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Route Details</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AppErrorBoundary>
        <RouteDetails />
      </AppErrorBoundary>
    </>
  );
};

export default Home;