import { Fragment } from "react";
import Link from "next/link";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];
function AboutPage() {
  return (
    <Fragment>
      <ul>
        <li>
          <Link href={`about/${details[0].id}`}>{details[0].name}</Link>
        </li>
        <li>
          <Link href={`about/${details[1].id}`}>{details[1].name}</Link>
        </li>
        <li>
          <Link href={`about/${details[2].id}`}>{details[2].name}</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default AboutPage;
