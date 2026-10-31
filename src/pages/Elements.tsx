import Page, { Section } from "../components/Page";

const deckCode = `i = 0;

while (!deck.isInOrder()) {
    print 'Iteration ' + i;
    deck.shuffle();
    i++;
}

print 'It took ' + i + ' iterations to sort the deck.';`;

const tableRows = [
  ["Name", "Description", "Price"],
  ["Item One", "Ante turpis integer aliquet porttitor.", "29.99"],
  ["Item Two", "Vis ac commodo adipiscing arcu aliquet.", "19.99"],
  ["Item Three", "Morbi faucibus arcu accumsan lorem.", "29.99"],
  ["Item Four", "Vitae integer tempus condimentum.", "19.99"],
  ["Item Five", "Ante turpis integer aliquet porttitor.", "29.99"],
];

export default function Elements() {
  return (
    <Page title="Elements" intro="A reference for how the building blocks of this site render.">
      <Section title="Text">
        <p>
          This is <strong>bold</strong> and this is <strong>strong</strong>. This is <em>italic</em> and this is{" "}
          <em>emphasized</em>. This is <sup>superscript</sup> text and this is <sub>subscript</sub> text. This is{" "}
          <u>underlined</u> and this is code: <code className="rounded bg-code-bg px-1.5 py-0.5 font-mono text-sm">for (;;) &#123; ... &#125;</code>. Finally, this is{" "}
          <a href="#top" className="text-accent hover:underline">a link</a>.
        </p>
        <p className="text-muted">
          Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non
          faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
          varius montes viverra nibh in adipiscing blandit tempus accumsan.
        </p>
      </Section>

      <Section title="Headings">
        <div className="space-y-2">
          <h2 className="font-serif text-3xl font-bold tracking-tight">Heading Level 2</h2>
          <h3 className="font-serif text-2xl font-semibold tracking-tight">Heading Level 3</h3>
          <h4 className="font-serif text-xl font-semibold tracking-tight">Heading Level 4</h4>
        </div>
      </Section>

      <Section title="Blockquote">
        <blockquote className="border-l-2 border-accent pl-4 italic text-muted">
          Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod.
          Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
          adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet
          nullam adipiscing eu felis.
        </blockquote>
      </Section>

      <Section title="Preformatted">
        <pre className="overflow-x-auto rounded-lg border border-line bg-code-bg p-4 font-mono text-sm leading-relaxed">
          <code>{deckCode}</code>
        </pre>
      </Section>

      <Section title="Lists">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">Unordered</h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>Dolor pulvinar etiam.</li>
              <li>Sagittis adipiscing.</li>
              <li>Felis enim feugiat.</li>
            </ul>
            <h3 className="mb-2 mt-4 text-sm font-semibold uppercase tracking-wide text-muted">Alternate</h3>
            <ul className="space-y-1">
              <li className="border-l-2 border-line pl-3">Dolor pulvinar etiam.</li>
              <li className="border-l-2 border-line pl-3">Sagittis adipiscing.</li>
              <li className="border-l-2 border-line pl-3">Felis enim feugiat.</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">Ordered</h3>
            <ol className="list-decimal space-y-1 pl-5">
              <li>Dolor pulvinar etiam.</li>
              <li>Sagittis adipiscing.</li>
              <li>Felis enim feugiat.</li>
            </ol>
          </div>
        </div>
      </Section>

      <Section title="Table">
        <div className="overflow-x-auto rounded-lg border border-line">
          <table className="w-full text-sm">
            <tbody>
              {tableRows.map(([name, description, price], i) => (
                <tr key={name} className={i > 0 ? "border-t border-line" : ""}>
                  <td className="px-4 py-2 font-medium">{name}</td>
                  <td className="px-4 py-2 text-muted">{description}</td>
                  <td className="px-4 py-2 text-right tabular-nums">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Buttons">
        <div className="flex flex-wrap gap-3">
          <button type="button" className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent-ink">
            Primary
          </button>
          <button type="button" className="rounded-md border border-line px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent">
            Default
          </button>
          <button type="button" className="rounded-md border border-accent px-4 py-2 text-sm text-accent transition-colors hover:bg-accent hover:text-paper">
            Accent
          </button>
        </div>
      </Section>

      <Section title="Form">
        <form
          className="max-w-md space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Name</span>
              <input type="text" className="w-full rounded-md border border-line bg-transparent px-3 py-2 text-ink focus:border-accent focus:outline-none" />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Email</span>
              <input type="email" className="w-full rounded-md border border-line bg-transparent px-3 py-2 text-ink focus:border-accent focus:outline-none" />
            </label>
          </div>
          <label className="block text-sm">
            <span className="mb-1 block font-medium">Message</span>
            <textarea rows={4} className="w-full rounded-md border border-line bg-transparent px-3 py-2 text-ink focus:border-accent focus:outline-none" />
          </label>
          <button type="submit" className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent-ink">
            Send Message
          </button>
        </form>
      </Section>

      <Section title="Note">
        <p className="text-muted">
          This site supports light and dark mode — use the toggle in the header. The preference is remembered
          across visits.
        </p>
      </Section>
    </Page>
  );
}
