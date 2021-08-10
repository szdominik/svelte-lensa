<script>
  import classNames from 'classnames';

  export let className;
  export let job;
</script>

<div class={classNames('job-card', className)}>
  <a class="job-card-title" href={job.url} target="_blank" rel="nofollow noopener">
    {job.title}
  </a>
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
  <div class="job-card-body">
    {job.description}
    <a class="read-more" href={job.url} target="_blank" rel="nofollow noopener"> Read more </a>
  </div>
</div>

<style>
  .job-card {
    position: relative;
    margin-bottom: 15px;
    padding: 15px 20px 20px;
    background-color: white;
    border: 1px solid #d3d3d3;
    border-radius: 6px;
  }

  .job-card-title {
    display: block;
    padding-bottom: 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
    color: #0073d6;
    text-decoration: none;
    cursor: pointer;
  }

  .job-card-title:hover {
    color: #358cd8;
    text-decoration: underline;
  }

  .job-card-body {
    position: relative;
    margin-top: 15px;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.56;
    max-height: 84px;
    overflow: hidden;
    color: #333;
  }

  .job-sub-title {
    font-size: 13px;
    font-weight: 700;
    line-height: 22px;
    text-transform: uppercase;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .read-more {
    position: absolute;
    left: 0;
    bottom: 0;
    display: inline-block;
    width: 100%;
    padding-left: 30%;
    white-space: nowrap;
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0, hsla(0, 0%, 100%, 0) 10%, #fff 28%, #fff);
    font-size: 18px;
    font-weight: 600;
    line-height: 1.56;
    text-decoration: underline;
    color: #0073d6;
    cursor: pointer;
  }

  .read-more:hover {
    color: #358cd8;
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
