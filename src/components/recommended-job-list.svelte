<script>
  import JobCard from '../components/job-card';

  export let recommendedJobs;

  let loading = false;

  const loadMoreJobs = async () => {
    if (!loading) {
      loading = true;

      const result = await fetch('/get-more-jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const jobs = await result.json();
      recommendedJobs = recommendedJobs.concat(jobs);

      loading = false;
    }
  };
</script>

{#each recommendedJobs as job}
  <JobCard {job} />
{/each}
<div class="load-more-jobs-button">
  <button type="button" on:click={loadMoreJobs}> Show more jobs </button>
  <span class="more-jobs-recommended-jobs-count"> 500 more jobs </span>
</div>

<style>
  .load-more-jobs-button {
    text-align: center;
    margin: 24px auto 60px;
  }
  button {
    width: 200px;
    min-height: 40px;
    padding-top: 4px;
    outline: none;
    cursor: pointer;
    background-color: var(--green-1);
    border-radius: 5px;
    border: 0;
    border-bottom: 3px solid var(--green-2);
    color: white;
    font-size: 16px;
    text-transform: uppercase;
  }

  button:active {
    background-color: var(--green-2);
    transform: translateY(1px);
  }

  .more-jobs-recommended-jobs-count {
    width: 100%;
    display: inline-block;
    text-align: center;
    margin-top: 8px;
    color: var(--dark-grey-1);
    font-size: 16px;
    font-weight: 700;
  }

  @media (min-width: 992px) {
    button:hover {
      background-color: #6daf70;
    }
  }
</style>
