import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="pt-8">
        <p className="font-mono text-sm text-accent">Hello, I&apos;m</p>
        <h1 className="mt-2 font-serif text-5xl font-bold tracking-tight sm:text-6xl">Terry Wambolt</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          Welcome to my website. Here you can learn about some of my past projects as well as get to know me a
          little better as a person. I plan on adding quite a bit of material to it in my downtime. Feel free to
          reach out if you have questions or are looking to hire an entry level software engineer.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            to="/projects"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent-ink"
          >
            Explore Projects
          </Link>
          <a
            href="https://www.linkedin.com/in/twambolt/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-line px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/twambolt"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-line px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-serif text-2xl font-semibold tracking-tight">Professional Work</h2>
        <div className="divide-y divide-line">
          <ProjectCard
            to="/projects/asl-classifier"
            image="/images/covid.jpg"
            title="ASL Classifier for Covid-19 Symptoms"
            actionLabel="Learn more"
          >
            Machine learning project built with scikit-learn and Google&apos;s TensorFlow libraries to identify
            Covid-19 symptoms as well as alphabetical letters from American Sign Language (ASL) hand signs and
            gestures. Achieving ~95% accuracy for both alphabet and gesture validation data.
          </ProjectCard>
          <ProjectCard
            to="/projects/brain-blast"
            image="/images/Whale.png"
            title="Brain Blast"
            actionLabel="Learn more"
          >
            Educational game focused on teaching high school students about phylogenies and how they&apos;re made.
            Developed using the Unity game engine for a quarter long project in our Bioinformatics Algorithms
            class.
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
      </section>
    </div>
  );
}
