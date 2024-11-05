import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Integrated AI",
    img: require("@site/static/img/desk-small.png").default,
    description: (
      <>
        Acorn's built-in AI assistant handles the details of formalization for
        you.
      </>
    ),
  },
  {
    title: "Easy To Use",
    img: require("@site/static/img/monk-small.png").default,
    description: <>Skip the trivial details. Focus on the mathematics.</>,
  },
  {
    title: "Completely Open Source",
    img: require("@site/static/img/library-small.png").default,
    description: (
      <>
        Acorn has an ever-growing math library. The more we contribute, the
        smarter the AI gets.
      </>
    ),
  },
];

function Feature({ title, img, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center margin--lg">
        <div className={styles.featureImageContainer}>
          <img src={img} alt={title} role="img" />
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
