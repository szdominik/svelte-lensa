<script>
  import Popup from '../utils/popup-connector';

  export let job;

  const jobData = {
    company: {
      logo_url: job.company_logo,
      name: job.company,
      description: job.company_description,
    },
    jobadvert: {
      job_category: job.category,
      cleaned_title: job.predicted_title.value,
      location: job.city,
      title: job.title,
      jobadvertTitleFullOrig: job.title,
      description: job.short_description,
      url: job.apply_url,
    },
    isExpired: new Date(job.expire_at) < new Date(),
  };

  let callback = () => {
    Popup.openFeedApplyPopup({ jobData });
  };
</script>

<div class="row-for-buttons">
  <div class="apply-button" on:click={callback}>
    <button type="button"> Apply </button>
  </div>
</div>

<style>
  .row-for-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 26px 32px 50px;
  }

  .apply-button button {
    height: 50px;
    width: 100%;
    max-width: 200px;
    outline: none;
    cursor: pointer;
    background-color: var(--green-1);
    border-radius: 5px;
    border: 0;
    border-bottom: 3px solid var(--green-2);
    color: white;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
  }

  @media (min-width: 992px) {
    .apply-button {
      width: 200px;
    }

    .row-for-buttons {
      flex-direction: row;
      margin-bottom: 70px;
    }
  }
</style>
