import React, { useMemo, useRef, useState } from 'react';

const cards = [
  { id: 1, title: 'React', description: 'The library for web and native user interfaces', url: 'https://react.dev' },
  { id: 2, title: 'MDN Web Docs', description: 'Resources for developers, by developers', url: 'https://developer.mozilla.org' },
  { id: 3, title: 'GitHub', description: 'Build software better, together', url: 'https://github.com' },
  { id: 4, title: 'npm', description: 'Node package manager', url: 'https://www.npmjs.com' },
  { id: 5, title: 'Stack Overflow', description: 'Where developers learn and share knowledge', url: 'https://stackoverflow.com' },
  { id: 6, title: 'Vite', description: 'Next Generation Frontend Tooling', url: 'https://vitejs.dev' },
  { id: 7, title: 'Vercel', description: 'Deploy web apps globally', url: 'https://vercel.com' },
  { id: 8, title: 'Netlify', description: 'All-in-one platform for automating modern web projects', url: 'https://www.netlify.com' },
  { id: 9, title: 'Next.js', description: 'The React framework for the web', url: 'https://nextjs.org' },
  { id: 10, title: 'Remix', description: 'Build better websites with web fundamentals', url: 'https://remix.run' },
  { id: 11, title: 'Astro', description: 'Build fast content sites, powerful web applications', url: 'https://astro.build' },
  { id: 12, title: 'Parcel', description: 'Blazing fast, zero configuration web application bundler', url: 'https://parceljs.org' },
  { id: 13, title: 'Webpack', description: 'A bundler for javascript and friends', url: 'https://webpack.js.org' },
  { id: 14, title: 'Node.js', description: 'JavaScript runtime built on Chrome\'s V8 engine', url: 'https://nodejs.org' },
  { id: 15, title: 'Deno', description: 'A modern runtime for JavaScript and TypeScript', url: 'https://deno.com' },
  { id: 16, title: 'TypeScript', description: 'Typed JavaScript at Any Scale', url: 'https://www.typescriptlang.org' },
  { id: 17, title: 'Tailwind CSS', description: 'A utility-first CSS framework', url: 'https://tailwindcss.com' },
  { id: 18, title: 'Python', description: 'Programming language that lets you work quickly', url: 'https://www.python.org' },
  { id: 19, title: 'Go', description: 'An open source programming language that makes it easy to build simple, reliable, and efficient software', url: 'https://go.dev' },
  { id: 20, title: 'Rust', description: 'A language empowering everyone to build reliable and efficient software', url: 'https://www.rust-lang.org' }
];

function SearchPage() {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return cards;
    return cards.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.url.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="SearchPage">
      <h1>Search Cards</h1>
      <div className="SearchBar">
        <input
          ref={inputRef}
          className="SearchInput"
          type="text"
          placeholder="Search by title, description, or URL..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Escape' && query) {
              setQuery('');
              requestAnimationFrame(() => inputRef.current?.focus());
            }
          }}
        />
        {query && (
          <button
            className="CancelButton"
            type="button"
            aria-label="Clear search"
            onClick={() => {
              setQuery('');
              requestAnimationFrame(() => inputRef.current?.focus());
            }}
          >
            Cancel
          </button>
        )}
      </div>
      <div className="CardGrid">
        {filtered.map(card => (
          <div key={card.id} className="Card">
            <h2 className="CardTitle">{card.title}</h2>
            <p className="CardDescription">{card.description}</p>
            <a className="CardLink" href={card.url} target="_blank" rel="noopener noreferrer">Visit site</a>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="EmptyState">No results found.</div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;