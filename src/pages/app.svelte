<script>
  import JobDetailsPage from './job-details.svelte';

  export let page;
  export let highlightedJob;
  export let recommendedJobs;
</script>

{#if page === 'job-details'}
  <JobDetailsPage {highlightedJob} {recommendedJobs} />
{/if}

<style>
  :global(html) {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue',
      sans-serif;

    --milkblue: #f8fafb;
    --skyblue: #0073d6;
    --blue-2: #358cd8;
    --dark-grey-4: #d5d5d5;
    --green-1: #338539;
    --green-2: #246028;
    --grey-1: #d3d3d3;
    --grey-2: #333;
    --grey-3: #4a4a4a;
  }

  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: inherit;
    font-family: inherit;
  }

  :global(body) {
    margin: 0;
    -webkit-text-size-adjust: 100%;
    background-color: var(--milkblue);
    color: var(--grey-2);
  }
</style>
