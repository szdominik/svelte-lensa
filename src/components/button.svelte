<script>
  import classNames from 'classnames';
  import Header from '../components/header';
  import Button from '../components/button';

  export let text;
  export let url;
  export let callback;
  export let subText = null;
  export let uppercase = false;
</script>

<style>
  .blue-button {
    cursor: pointer;
    display: inline-block;
    border-radius: 5px;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    position: relative;
    color: white;
    background-color: #3da4ed;
    min-width: 153px;
    min-height: 38px;
    padding: 10px 24px 9px 24px;
    box-shadow: 0 2px #1383d2;
  }

  @media (min-width: 992px) {
    .blue-button:hover {
      background-color: #1383d2;
    }
  }

  .blue-button:active {
    background-color: #1383d2;
    transform: translateY(1px);
  }

  .blue-button.uppercase {
    text-transform: uppercase;
  }

  .button-text {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .multi-line {
    flex-direction: column;
  }
</style>

<a
  class='blue-button'
  href={ !callback ? url : null}
  on:click={ callback }
>
  <div class={ classNames('button-text', uppercase, { 'multi-line': subText }) }>
    <span>
      { text }
    </span>
    {#if subText}
      <span>
        { subText }
      </span>
    {/if}
  </div>
</a>
