<script>
  import JobSubTitle from './job-sub-title';
  import ApplyButton from '../components/apply-button';

  export let job;
</script>

<h1 class="job-title">{job.title} job</h1>
<JobSubTitle {job} />
<ApplyButton {job} />

<style>
  h1.job-title {
    font-size: 26px;
    font-weight: 700;
    line-height: 36px;
    margin: 10px 0;
  }

  @media (min-width: 992px) {
    h1.job-title {
      font-size: 32px;
    }
  }
</style>
