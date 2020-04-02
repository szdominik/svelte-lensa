import App from './app';

const app = new App({
	target: document.body,
	props: {
		page: 'job-details'
	}
});

window.app = app;

export default app;
