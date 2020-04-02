import App from 'pages/app';

const app = new App({
  hydrate: true,
	target: document.body,
	props: {
		page: 'job-details'
	}
});

window.app = app;

export default app;
