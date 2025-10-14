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
        <div
          className="margin-vert--lg"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src="/img/acorn-social-card.png"
            alt="Acorn Social Card"
            style={{ maxWidth: "800px", width: "100%", height: "auto" }}
          />
        </div>
        <p className="hero__subtitle">
          Write down a theorem and a sketch of a proof. The Acorn AI puts check
          marks by the statements it can verify, and squiggles under the
          statements that need more detail. It's the easiest way to formally
          verify your mathematics.
        </p>
        <div className={`margin-top--lg ${styles.buttons}`}>
          <Link
            className={`button button--secondary margin-horiz--md ${styles.leftButton}`}
            to="/docs/installation/"
          >
            Get Acorn
          </Link>
          <Link
            className={`button button--secondary margin-horiz--md ${styles.rightButton}`}
            to="/docs/tutorial/proving-a-theorem/"
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
      title=""
      description="Perfectly rigorous mathematics, as simple as possible."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
