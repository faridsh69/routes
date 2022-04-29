import type { NextPage } from "next";
import Head from "next/head";

import { Master } from "@layouts/master";
import { AppErrorBoundary } from "@components/AppErrorBoundary";
import { RouteDetails } from "@components/RouteDetails";
import { HomePropsType } from "@interfaces/HomePropsType";

const Home: NextPage<HomePropsType> = (props) => {
  const { stops } = props;

  return (
    <>
      <Head>
        <title>Route Details</title>
        <meta name="description" content="Test Route Details application" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <AppErrorBoundary>
        <Master>
          <RouteDetails stops={stops} />
        </Master>
      </AppErrorBoundary>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/api/stops`);
  const stops = await res.json();

  return {
    props: {
      stops,
    },
  };
}

export default Home;
