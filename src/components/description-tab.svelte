<script>
  import ApplyButton from './apply-button';

  export let job;
</script>

<h4>Company Description</h4>
<div class="company-description description">
  {@html job.company_description}
</div>
<h4>Job Description</h4>
<div class="description">
  {@html job.description}
</div>
<ApplyButton
  text="Apply"
  callback={() => {
    console.log(job.apply_url);
  }}
/>

<style>
  h4 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.56;
    text-transform: uppercase;
    color: var(--grey-3);
    margin: 15px 0 10px 0;
  }

  .company-description {
    margin-bottom: 45px;
  }

  .description {
    font-size: 18px;
    font-weight: 300;
    word-wrap: break-word;
    line-height: 1.56;
  }
</style>
