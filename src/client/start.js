import JobDetails from '../pages/job-details';

const app = new JobDetails({
	target: document.body,
	props: {
		name: 'Dominik'
	}
});

window.app = app;

export default app;
