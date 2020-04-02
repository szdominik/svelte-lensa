import App from 'pages/app';

const app = new App({
  hydrate: true,
	target: document.body,
	props: window.__INITIAL_STATE__,
});

window.app = app;

export default app;
