<script>
  import Header from '../components/header';
  import Button from '../components/button';

  export let highlightedJob;
</script>

<svelte:head>
  <title
    >{highlightedJob.title} job in {highlightedJob.city} at {highlightedJob.company}
    | Lensa`</title
  >
</svelte:head>

<Header />
<div class="job-details">
  <Button
    text="Apply"
    callback={() => {
      console.log(highlightedJob.url);
    }}
  />
</div>

<style>
  .job-details {
    max-width: 1354px;
    padding: 80px 15px 0;
    text-align: center;
  }

  @media (min-width: 992px) {
    .job-details {
      padding: 100px 0 0 140px;
    }
  }
</style>
