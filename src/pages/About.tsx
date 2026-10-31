import Page, { Section } from "../components/Page";

export default function About() {
  return (
    <Page title="About Me" intro="A little about who I am and where I'm headed.">
      <Section title="Personal Story">
        <p>
          Personal story. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum nam doloribus
          enim facilis fugit odit iste minus et placeat, cum nihil, illum quidem provident porro delectus! Id,
          voluptate tenetur.
        </p>
        <p className="text-sm text-muted">
          (This page is a work in progress — more to come.)
        </p>
      </Section>
      <Section title="Professional Story and Aspirations">
        <p>
          Professional story and aspirations. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          sit consectetur repudiandae, sapiente iste corporis assumenda ex sint vero!
        </p>
      </Section>
    </Page>
  );
}
