<script>
  import DescriptionTab from './description-tab';

  export let job;
</script>

<div class="main-tabs">
  <h2 class="active">Job</h2>
  <h2>Company</h2>
</div>
<div class="sub-tabs">
  <h3 class="active">Description</h3>
  <h3>Salary</h3>
  <h3>Skills</h3>
  <h3>Benefits</h3>
  <h3 class="non-visible">Summary</h3>
  <h3 class="non-visible">Job trends</h3>
  <h3 class="non-visible">Job openings</h3>
  <h3 class="non-visible">Closed jobs</h3>
</div>
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

  .main-tabs {
    display: flex;
    align-items: flex-end;
    margin: 0 -15px -1px;
  }

  .main-tabs h2 {
    display: flex;
    align-items: center;
    height: 38px;
    padding: 0 40px;
    margin: 0;
    border: 1px solid var(--dark-grey-4);
    border-radius: 3px 3px 0 0;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    color: var(--dark-grey);
  }

  .main-tabs h2:not(:first-of-type) {
    margin-left: -1px;
  }

  .main-tabs h2.active {
    height: 40px;
    box-shadow: -1px -2px 4px -1px rgba(12, 0, 51, 0.05), 1px -2px 4px -1px rgba(12, 0, 51, 0.05);
    background-color: white;
    border-bottom: none;
    color: var(--skyblue);
    font-weight: 700;
  }

  .sub-tabs {
    display: flex;
    justify-content: space-between;
    margin: 0 -15px;
    background-color: white;
    border-radius: 0 5px 0 0;
    border: 1px solid var(--dark-grey-4);
  }

  .sub-tabs h3 {
    width: 100%;
    height: 40px;
    margin: 0;
    margin-bottom: -1px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
    color: var(--dark-grey);
  }

  .sub-tabs h3.active {
    color: var(--skyblue);
    font-weight: 700;
    border-bottom: 1px solid var(--skyblue);
  }

  .sub-tabs h3.non-visible {
    display: none;
  }

  @media (min-width: 992px) {
    .job-details-tabs-container {
      margin: 0 0 40px;
    }

    .main-tabs,
    .sub-tabs {
      margin: 0;
    }

    .main-tabs h2 {
      margin-bottom: -1px;
    }

    .sub-tabs {
      justify-content: flex-start;
    }

    .sub-tabs h3 {
      width: auto;
      padding: 0 24px;
      font-size: 14px;
    }
  }
</style>
