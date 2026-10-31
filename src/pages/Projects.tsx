import Page from "../components/Page";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <Page title="Projects" intro="Things I've built — for class, for curiosity, and for fun.">
      <div className="divide-y divide-line">
        <ProjectCard
          to="/projects/asl-classifier"
          image="/images/aslC19.jpg"
          title="ASL Classifier for Covid-19 Symptoms"
          actionLabel="Learn more"
        >
          Machine learning project built with scikit-learn and Google&apos;s TensorFlow libraries to identify
          Covid-19 symptoms as well as alphabetical letters from American Sign Language (ASL) hand signs and
          gestures. Achieving ~95% accuracy for both alphabet and gesture validation data.
        </ProjectCard>
        <ProjectCard
          to="/projects/brain-blast"
          image="/images/WhaleStoryIcon.png"
          title="Brain Blast"
          actionLabel="Learn more"
        >
          Educational game designed to teach high school students about phylogenetic trees and how they are
          created. Built by an interdisciplinary team of computer science, computer engineering, and biology
          students for our Bioinformatics Algorithms class at Cal Poly.
        </ProjectCard>
        <ProjectCard
          href="https://github.com/twambolt"
          image="/images/posterboard.jpg"
          title="Other Projects"
          actionLabel="View on GitHub"
        >
          See my current projects including other programs I wrote while working for my degree.
        </ProjectCard>
      </div>
    </Page>
  );
}
