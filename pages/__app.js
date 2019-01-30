import App from "next/app";
import Head from "next/head";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/styles.css";

class Dashboard extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Product Recommendations Dashboard</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </React.Fragment>
    );
  }
}

export default Dashboard;
