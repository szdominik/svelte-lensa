<script>
  import JobDetailsPage from './job-details.svelte';

  export let page;
  export let highlightedJob;
  export let recommendedJobs;
</script>

<svelte:head>
  <meta charSet="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Lensa" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:image" content="https://cdn.lensa.com/fb_g.png" />

  <link href="https://cdn.lensa.com/img/icons/favicon.ico" rel="shortcut icon" />
</svelte:head>

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
    --dark-grey: #313233;
    --dark-grey-1: #787979;
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
