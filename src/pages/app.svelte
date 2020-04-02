<script>
  import JobDetailsPage from './job-details.svelte';

  export let page;
  export let highlightedJob;
</script>

<style>
  :global(html) {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

    --milkblue: #f8fafb;
    --skyblue: #0073d6;
    --grey-2: #333;
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

{#if page === 'job-details'}
  <JobDetailsPage highlightedJob={ highlightedJob } />
{/if}
