<script>
  import Header from '../components/header';
  import JobCard from '../components/job-card';
  import JobDetailsHeader from '../components/job-details-header';

  export let highlightedJob;
  export let recommendedJobs;
</script>

<svelte:head>
  <title
    >{highlightedJob.title} job in {highlightedJob.city} at {highlightedJob.company}
    | Lensa`</title
  >
</svelte:head>

<Header />
<div class="job-details">
  <div class="job-details-main">
    <JobDetailsHeader job={highlightedJob} />
    <div class="similar-jobs">Similar jobs in the area</div>
    <div class="recommended-jobs">
      {#each recommendedJobs as job}
        <JobCard {job} />
      {/each}
    </div>
  </div>
  <div class="job-details-sidebar">
    {#each recommendedJobs.slice(0, 10) as job}
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
    color: #4a4a4a;
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
