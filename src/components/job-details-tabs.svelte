<script>
  export let job;
</script>

<div class="job-details-tabs-container">
  <div class="description-tab">
    <h4>Job Description</h4>
    <div class="description">
      {@html job.description}
    </div>
  </div>
</div>

<style>
  .job-details-tabs-container {
    margin: 0 -15px 68px;
    padding: 18px 16px 28px;
    box-shadow: 0 2px 4px 0 rgba(12, 0, 51, 0.1);
    background-color: white;
    border: 1px solid var(--dark-grey-4);
    border-top: none;
    border-radius: 0 0 5px 5px;
  }

  .description {
    font-size: 18px;
    font-weight: 300;
    word-wrap: break-word;
    line-height: 1.56;
  }

  .description-tab h4 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.56;
    text-transform: uppercase;
    color: var(--grey-3);
    margin: 15px 0 10px 0;
  }

  @media (min-width: 992px) {
    .job-details-tabs-container {
      margin: 0 0 40px;
    }
  }
</style>
