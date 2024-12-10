import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={`margin-top--lg ${styles.buttons}`}>
          <Link
            className={`button button--secondary margin-horiz--md ${styles.leftButton}`}
            to="/docs/getting-started/"
          >
            Get Started
          </Link>
          <Link
            className={`button button--secondary margin-horiz--md ${styles.rightButton}`}
            to="/docs/category/tutorial/"
          >
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="The Acorn Theorem Prover"
      description="Perfectly rigorous mathematics, as simple as possible."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
