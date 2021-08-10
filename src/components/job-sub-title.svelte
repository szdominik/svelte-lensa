<script>
  export let job;
</script>

<div class="job-sub-title">
  <span class="icon-with-text">
    <img
      src="https://cdn.lensa.com/img/icons/jobcard_icon_building.svg"
      alt="company building"
      width="13"
      height="13"
    />
    <span>
      {job.company}
    </span>
  </span>
  <span class="icon-with-text">
    <img src="https://cdn.lensa.com/img/icons/jobcard_icon_location.svg" alt="location" width="13" height="13" />
    <span>
      {job.city}
    </span>
  </span>
</div>

<style>
  .job-sub-title {
    font-size: 13px;
    font-weight: 700;
    line-height: 22px;
    text-transform: uppercase;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .icon-with-text {
    margin-right: 15px;
    display: inline-flex;
    align-items: center;
  }

  .icon-with-text span {
    vertical-align: middle;
  }

  .icon-with-text img {
    width: 13px;
    height: 13px;
    vertical-align: middle;
    margin-right: 4px;
  }

  @media (min-width: 992px) {
    .job-sub-title {
      flex-direction: row;
    }
  }
</style>
