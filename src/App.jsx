// App root — URL-based routing & mount (History API)
const { useState, useEffect } = React;

const PAGES = {
  home: Home,
  about: About,
  times: Times,
  gallery: Gallery,
  parasha: ParashaWeek,
  heritage: Heritage,
  memorial: Memorial,
  donate: Donate,
  contact: Contact,
};

function App() {
  const [route, setRoute] = useState(() => window.AppRouter.parsePath(window.location.pathname));

  // Back / forward buttons
  useEffect(() => {
    const onPop = () => setRoute(window.AppRouter.parsePath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Keep <head> meta in sync on every client-side navigation
  useEffect(() => { window.AppRouter.applyMeta(route); }, [route.page, route.param]);

  const navigate = (page, param = null) => {
    const path = window.AppRouter.buildPath(page, param);
    let current = window.location.pathname;
    try { current = decodeURIComponent(current); } catch (e) {}
    current = current.replace(/\/index\.html$/i, '').replace(/\/+$/, '') || '/';
    if (path !== current) {
      window.history.pushState({ page, param }, '', path);
    }
    setRoute({ page, param });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const Component = PAGES[route.page] || Home;

  return (
    <div data-screen-label={route.page}>
      <Header currentPage={route.page} navigate={navigate} />
      <main>
        <Component navigate={navigate} param={route.param} key={route.page + ':' + (route.param || '')} />
      </main>
      <Footer currentPage={route.page} navigate={navigate} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Hide loader
setTimeout(() => {
  const loader = document.getElementById('app-loader');
  if (loader) {
    loader.classList.add('hidden');
    setTimeout(() => loader.remove(), 500);
  }
}, 200);
