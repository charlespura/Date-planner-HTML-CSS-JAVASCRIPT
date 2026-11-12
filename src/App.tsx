import { useState } from 'react';
import { posterUrl } from './posters';
import { ArrowLeft, ArrowRight, CalendarDays, Check, ChevronRight, Clapperboard, Coffee, Download, Heart, Sparkles, Utensils, RotateCcw } from 'lucide-react';

const movies = [
  { title: 'Avengers: Endgame', genre: 'Action · Adventure', year: '2019', color: 'purple', mark: 'A', caption: 'Whatever it takes.' },
  { title: 'Spider-Man 3', genre: 'Action · Superhero', year: '2007', color: 'red', mark: '蛛', caption: 'Your friendly neighborhood date.' },
  { title: 'The Dark Knight', genre: 'Action · Crime', year: '2008', color: 'blue', mark: '◈', caption: 'A night worth remembering.' },
  { title: 'Inception', genre: 'Sci-fi · Thriller', year: '2010', color: 'teal', mark: '↟', caption: 'Dream a little bigger.' },
  { title: 'The Matrix', genre: 'Sci-fi · Action', year: '1999', color: 'green', mark: 'Ⅲ', caption: 'Escape the ordinary.' },
];
const moreMovies = [
  { title: 'About Time', genre: 'Romance · Fantasy', year: '2013', color: 'red', mark: 'AT', caption: 'Every moment matters.' },
  { title: 'La La Land', genre: 'Romance · Musical', year: '2016', color: 'purple', mark: 'LA', caption: 'A little music. A little magic.' },
  { title: 'Pride & Prejudice', genre: 'Romance · Drama', year: '2005', color: 'green', mark: 'P&P', caption: 'Some stories stay with you.' },
  { title: '10 Things I Hate About You', genre: 'Romance · Comedy', year: '1999', color: 'red', mark: '10', caption: 'Fall for something unexpected.' },
  { title: 'Crazy Rich Asians', genre: 'Romance · Comedy', year: '2018', color: 'green', mark: 'CR', caption: 'Love is the adventure.' },
  { title: 'Your Name', genre: 'Anime · Romance', year: '2016', color: 'blue', mark: 'YN', caption: 'A connection across the stars.' },
  { title: 'Spirited Away', genre: 'Animation · Fantasy', year: '2001', color: 'teal', mark: 'SA', caption: 'Get a little lost together.' },
  { title: 'WALL-E', genre: 'Animation · Romance', year: '2008', color: 'blue', mark: 'W', caption: 'Love needs very few words.' },
  { title: 'Interstellar', genre: 'Sci-fi · Adventure', year: '2014', color: 'teal', mark: 'I', caption: 'Love across time and space.' },
  { title: 'Knives Out', genre: 'Mystery · Comedy', year: '2019', color: 'purple', mark: 'KO', caption: 'A little mystery for two.' },
  { title: 'The Grand Budapest Hotel', genre: 'Comedy · Adventure', year: '2014', color: 'red', mark: 'GB', caption: 'Check in for an adventure.' },
  { title: 'Everything Everywhere All at Once', genre: 'Sci-fi · Comedy', year: '2022', color: 'green', mark: '?', caption: 'Find each other in the chaos.' },
];
const steps = ['The movie', 'The moment', 'The menu', 'The mood'];
const foods = [['🍕', 'Pizza'], ['🍣', 'Sushi'], ['🍔', 'Burgers'], ['🍟', 'Fries'], ['🥗', 'Salad']];
const drinks = [['💧', 'Water'], ['🥤', 'Soda'], ['🍊', 'Juice'], ['☕', 'Coffee'], ['🍵', 'Tea']];
const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };

export default function App() {
  const [step, setStep] = useState(0);
  const [movie, setMovie] = useState('');
  const [showMoreMovies, setShowMoreMovies] = useState(false);
  const [failedPosters, setFailedPosters] = useState<Record<string, boolean>>({});
  const visibleMovies = showMoreMovies ? [...movies, ...moreMovies] : movies;
  const [date, setDate] = useState('');
  const [time, setTime] = useState('18:00');
  const [food, setFood] = useState('');
  const [drink, setDrink] = useState('');
  const [excitement, setExcitement] = useState(75);
  const [done, setDone] = useState(false);
  const prettyDate = date ? new Date(`${date}T${time}`).toLocaleString(undefined, { month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' }) : 'A little time for us';
  const valid = [!!movie, !!date && date >= today() && !!time, !!food && !!drink, true][step];
  function reset() { setShowMoreMovies(false); setStep(0); setMovie(''); setDate(''); setTime('18:00'); setFood(''); setDrink(''); setExcitement(75); setDone(false); }
  function download() {
    const content = `OUR LITTLE DATE\n\nMovie: ${movie}\nWhen: ${prettyDate}\nFood: ${food}\nDrinks: ${drink}\nExcitement: ${excitement}%\n\nMade with Little Date`;
    const url = URL.createObjectURL(new Blob([content], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a'); link.href = url; link.download = 'our-little-date.txt'; link.click(); URL.revokeObjectURL(url);
  }
  return <div className="min-h-screen px-5 sm:px-10 lg:px-16">
    <header className="mx-auto flex max-w-7xl items-center justify-between border-b border-stone-300/60 py-7">
      <a href="./" className="flex items-center gap-2 text-xl font-bold tracking-tight"><span className="brand-heart"><Heart size={19} fill="currentColor" /></span>little date<span className="text-coral">.</span></a>
      <span className="hidden text-xs tracking-wide text-stone-500 sm:block">LESS PLANNING. MORE BUTTERFLIES.</span>
      <span className="flex items-center gap-2 text-xs text-stone-500"><span className="h-2 w-2 rounded-full bg-emerald-500" />Made for two</span>
    </header>
    <main className="mx-auto max-w-7xl pb-12 pt-12 sm:pt-16">
      <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
        <div><p className="eyebrow"><Sparkles size={14} /> A LITTLE INTENTION GOES A LONG WAY</p><h1 className="mt-4 text-4xl leading-tight sm:text-6xl">Good company.<br /> <span className="font-serif italic text-coral">Great little plans.</span></h1><p className="mt-5 max-w-lg text-sm leading-7 text-stone-500">A movie, a bite, and your favorite person. Let's turn<br className="hidden sm:block" /> “we should do something” into a date to remember.</p></div>
        <div className="hero-note hidden lg:block"><Heart size={25} strokeWidth={1.3} /><p>It's the little things<br />that become the big things.</p><span>just you + me</span></div>
      </div>
      <div className="grid items-start gap-7 lg:grid-cols-[1fr_330px]">
        <section className="planner overflow-hidden rounded-3xl border border-stone-200 bg-white">
          <nav aria-label="Planning progress" className="grid grid-cols-4 border-b border-stone-100 px-3 py-6 sm:px-7">{steps.map((label, i) => <button key={label} disabled={done || i > step} onClick={() => setStep(i)} aria-current={!done && step === i ? 'step' : undefined} className={`step-button ${step === i && !done ? 'active' : ''}`}><span>{done || i < step ? <Check size={13} /> : `0${i + 1}`}</span><span className="hidden sm:inline">{label}</span></button>)}</nav>
          <div className="p-6 sm:p-9">
            {done ? <div className="enter py-8 text-center" role="status"><div className="celebrate mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-rose-50 text-coral"><Heart size={38} fill="currentColor" /></div><p className="eyebrow justify-center">IT'S A DATE!</p><h2 className="mt-3 font-serif text-4xl">Here's to your next memory.</h2><p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-stone-500">Your little plan is ready. Save the details and share them with your favorite person.</p><button className="primary mx-auto mt-8" onClick={download}><Download size={16} /> Save date plan</button><button className="mx-auto mt-5 flex items-center gap-2 text-sm text-stone-500" onClick={reset}><RotateCcw size={14} /> Plan another date</button></div> : <div key={step} className="enter">
              <p className="eyebrow">CHAPTER 0{step + 1} / 04</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{['First, set the scene.', 'Make a little time.', 'Something delicious, too.', 'Cue the butterflies.'][step]}</h2>
              <p className="mb-7 mt-2 text-sm text-stone-500">{['Pick a movie you’d love to get lost in together.', 'Pick a day and time to look forward to.', 'Choose your perfect movie-night pairing.', 'How excited are you for your time together?'][step]}</p>
              {step === 0 && <div id="movie-options" className="grid grid-cols-2 gap-4 sm:grid-cols-3">{visibleMovies.map((m) => <button key={m.title} onClick={() => setMovie(m.title)} aria-pressed={movie === m.title} className={`movie-card text-left ${movie === m.title ? 'selected' : ''}`}><div className={`poster ${m.color}`}><div className="poster-grain" /><span className="poster-year">{m.year}</span><span className="poster-mark" aria-hidden="true">{m.mark}</span><div className="poster-title">{m.title}<small>{m.caption}</small></div>{!failedPosters[m.title] && <img className="poster-image" src={posterUrl(m.title)} alt={`${m.title} theatrical poster`} loading="lazy" decoding="async" width="500" height="750" onError={() => setFailedPosters(previous => ({ ...previous, [m.title]: true }))} />}<span className="selection-dot">{movie === m.title && <Check size={12} />}</span></div><div className="px-1 pb-2 pt-3"><h3 className="text-xs font-semibold sm:text-sm">{m.title}</h3><p className="mt-1 text-[11px] text-stone-500">{m.genre}</p></div></button>)}<button type="button" aria-expanded={showMoreMovies} aria-controls="movie-options" onClick={() => setShowMoreMovies(!showMoreMovies)} className="group flex min-h-48 flex-col items-center justify-center rounded-xl border border-dashed border-stone-200 p-4 text-center transition-colors hover:border-coral hover:bg-cream"><Clapperboard className="mb-3 text-coral" size={27} strokeWidth={1} /><span className="font-serif text-lg italic text-stone-600">{showMoreMovies ? "Keep it simple?" : "Find your next favorite."}</span><span className="mt-3 flex items-center gap-2 text-xs font-semibold text-coral">{showMoreMovies ? "Show fewer movies" : `More movies (${moreMovies.length})`}<ChevronRight size={14} className={showMoreMovies ? "rotate-90" : ""} /></span><span className="mt-2 text-[11px] leading-5 text-stone-400">{showMoreMovies ? "Back to the original selection." : "Romance, comedy, animation & more."}</span></button></div>}
              {step === 1 && <div className="my-10 grid gap-6 sm:grid-cols-2"><label className="field-label">Your date<input type="date" value={date} min={today()} required onChange={e => setDate(e.target.value)} /></label><label className="field-label">Meet-up time<input type="time" value={time} required onChange={e => setTime(e.target.value)} /></label><div className="rounded-xl bg-cream p-5 text-sm text-stone-500 sm:col-span-2"><CalendarDays size={22} className="mb-3 text-coral" />No reservations here, just a lovely plan. Pick a time that works for both of you.</div></div>}
              {step === 2 && <div className="space-y-7">{[{ title: 'On the menu', options: foods, value: food, setter: setFood }, { title: 'Something to sip', options: drinks, value: drink, setter: setDrink }].map(group => <fieldset key={group.title}><legend className="mb-3 text-sm font-semibold">{group.title}</legend><div className="flex flex-wrap gap-2">{group.options.map(([emoji, name]) => <button key={name} aria-pressed={group.value === name} onClick={() => group.setter(name)} className={`choice ${group.value === name ? 'chosen' : ''}`}><span className="text-xl">{emoji}</span>{name}{group.value === name && <Check size={13} />}</button>)}</div></fieldset>)}</div>}
              {step === 3 && <div className="py-7 text-center"><div className="floating mb-6 text-6xl" aria-hidden="true">{excitement > 80 ? '🥰' : excitement > 40 ? '💗' : '☺️'}</div><label htmlFor="excitement" className="font-serif text-5xl text-coral">{excitement}<span className="text-xl">%</span></label><input id="excitement" aria-label="Excitement percentage" type="range" min="1" max="100" value={excitement} onChange={e => setExcitement(Number(e.target.value))} className="my-8 block w-full accent-coral" /><div className="flex justify-between text-xs text-stone-400"><span>A little spark</span><span>All the butterflies</span></div></div>}
              <div className="mt-8 flex items-center justify-between gap-3 border-t border-stone-100 pt-6"><span className="text-xs text-stone-400">{step === 0 ? 'A good story starts here.' : <button onClick={() => setStep(step - 1)} className="flex items-center gap-2 text-stone-500"><ArrowLeft size={14} /> Go back</button>}</span><button disabled={!valid} onClick={() => step < 3 ? setStep(step + 1) : setDone(true)} className="primary">{step === 3 ? 'Make it a date' : 'Continue'}{step === 3 ? <Heart size={15} /> : <ArrowRight size={16} />}</button></div>
            </div>}
          </div>
        </section>
        <aside className="space-y-5 lg:sticky lg:top-6">
          <div className="date-ticket rounded-3xl border border-stone-200 bg-white p-7"><div className="flex items-center justify-between"><span className="eyebrow">YOUR LITTLE DATE</span><Heart size={18} className="text-coral" /></div><h2 className="mt-5 font-serif text-3xl">A plan for two.</h2><p className="mt-2 text-xs leading-6 text-stone-400">The start of something lovely.</p><div className="my-6 border-t border-dashed border-stone-200" /><div aria-live="polite" className="space-y-6">{[{ Icon: Clapperboard, label: 'THE MOVIE', value: movie || 'Pick your opening scene' }, { Icon: CalendarDays, label: 'THE MOMENT', value: prettyDate }, { Icon: Utensils, label: 'THE MENU', value: food || 'Something delicious' }, { Icon: Coffee, label: 'THE DRINKS', value: drink || 'A toast to us' }].map(({ Icon, label, value }) => <div key={label} className="flex items-start gap-4"><span className="rounded-xl bg-cream p-2.5 text-stone-500"><Icon size={17} strokeWidth={1.5} /></span><div><p className="text-[9px] font-semibold tracking-[.16em] text-stone-400">{label}</p><p className="mt-1 text-sm">{value}</p></div></div>)}</div><div className="my-6 border-t border-dashed border-stone-200" /><div className="flex items-center justify-between text-xs text-stone-400"><span>{done ? 'Ready for a lovely time' : `${step + 1} of 4 chapters`}</span><span className="flex gap-1">{steps.map((_, i) => <span key={i} className={`h-1.5 w-5 rounded-full ${done || i <= step ? 'bg-coral' : 'bg-stone-100'}`} />)}</span></div></div>
          <div className="flex items-start gap-3 rounded-2xl bg-[#eaece3] p-5"><Sparkles size={19} className="mt-1 shrink-0 text-[#747c62]" /><div><h3 className="text-xs font-semibold text-[#59614a]">A little date tip</h3><p className="mt-2 text-xs leading-6 text-[#7a806e]">Put your phones away. Order something to share. Be a little more here.</p></div></div>
          <p className="flex items-center justify-center gap-2 text-[10px] text-stone-400"><Heart size={11} /> No sign-ups. Just quality time. <ChevronRight size={11} /></p>
        </aside>
      </div>
    </main>
    <footer className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 border-t border-stone-300/60 py-6 text-[11px] text-stone-400"><span>little date. &nbsp; A little planning, a lot of heart.</span><span>Make time for each other. ♡</span></footer>
  </div>;
}
