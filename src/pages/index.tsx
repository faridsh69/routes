import type { NextPage } from "next";
import Head from "next/head";

import { AppErrorBoundary } from "@components/AppErrorBoundary";
import { RouteDetails } from "@components/RouteDetails";
import { Master } from "@layouts/master";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Route Details</title>
        <meta name="description" content="Test Route Details application" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AppErrorBoundary>
        <Master>
          <RouteDetails />
        </Master>
      </AppErrorBoundary>
    </>
  );
};

export default Home;
