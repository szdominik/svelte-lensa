<script>
  import DescriptionTab from './description-tab';

  export let job;
</script>

<div class="job-details-tabs-container">
  <div class="description-tab">
    <DescriptionTab {job} />
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

  @media (min-width: 992px) {
    .job-details-tabs-container {
      margin: 0 0 40px;
    }
  }
</style>
