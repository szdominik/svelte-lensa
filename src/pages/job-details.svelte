<script>
  import Header from '../components/header';

  export let highlightedJob;
</script>

<svelte:head>
  <title>{ highlightedJob.title } job in { highlightedJob.city } at { highlightedJob.company } | Lensa`</title>
</svelte:head>

<style>
  .job-details {
    max-width: 1354px;
    padding: 80px 15px 0;
  }

  @media (min-width: 992px) {
    .job-details {
      padding: 100px 0 0 140px;
    }
  }
</style>

<Header />
<div class='job-details'>
</div>
