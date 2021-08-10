<script>
  export let callback;
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
    margin: 26px 32px 50px;
  }

  .apply-button button {
    height: 50px;
    width: 100%;
    max-width: 200px;
    outline: none;
    cursor: pointer;
    background-color: #338539;
    border-radius: 5px;
    border: 0;
    border-bottom: 3px solid #246028;
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
