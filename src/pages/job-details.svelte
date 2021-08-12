<script>
  import Header from '../components/header.svelte';
  import JobCard from '../components/job-card.svelte';
  import JobDetailsHeader from '../components/job-details-header.svelte';
  import JobDetailsTabs from '../components/job-details-tabs.svelte';
  import RecommendedJobList from '../components/recommended-job-list.svelte';

  export let highlightedJob;
  export let recommendedJobs;

  const sidebarJobs = recommendedJobs.slice(0, 10);
  const bottomJobs = recommendedJobs.slice(10);

  const jobDetailsTitle = `${highlightedJob.title} job in ${highlightedJob.city} at ${highlightedJob.company} | Lensa`;
  const jobDetailsDescription = `${highlightedJob.company} is currently looking for ${highlightedJob.title} near ${highlightedJob.city}. Full job description and instant apply on Lensa.`;
</script>

<svelte:head>
  <title>{jobDetailsTitle}</title>
  <meta name="title" content={jobDetailsTitle} />
  <meta name="description" content={jobDetailsDescription} />
  <meta property="og:title" content={jobDetailsTitle} />
  <meta property="og:description" content={jobDetailsDescription} />
</svelte:head>

<Header />
<div class="job-details">
  <div class="job-details-main">
    <JobDetailsHeader job={highlightedJob} />
    <JobDetailsTabs job={highlightedJob} />
    <div class="similar-jobs">Similar jobs in the area</div>
    <RecommendedJobList recommendedJobs={bottomJobs} />
  </div>
  <div class="job-details-sidebar">
    {#each sidebarJobs as job}
      <JobCard {job} />
    {/each}
  </div>
</div>

<style>
  .job-details {
    max-width: 1354px;
    padding: 80px 15px 0;
  }

  .job-details-sidebar {
    display: none;
  }

  .similar-jobs {
    margin: 10px 0;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.08;
    color: var(--grey-3);
  }

  @media (min-width: 992px) {
    .job-details {
      padding: 100px 0 0 140px;
    }

    .job-details-main {
      display: inline-block;
      width: 60%;
    }

    .similar-jobs {
      font-size: 24px;
      font-weight: 600;
    }

    .job-details-sidebar {
      display: inline-block;
      width: 300px;
      margin-left: 50px;
      vertical-align: top;
    }
  }
</style>
