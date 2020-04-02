<style>
  .lensa-header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 900;
    padding: 0 28px;
    box-shadow: 0 3px 10px 0 rgba(50, 50, 50, 0.3);
    background-color: white;
  }

  .lensa-header .logo,
  .lensa-header .logo img {
    height: 20px;
  }


  @media (min-width: 992px) {
    .lensa-header {
      height: 70px;
    }

    .lensa-header .logo,
    .lensa-header .logo img {
      height: 25px;
    }
  }
</style>

<div class='lensa-header'>
  <a href='/' class='logo'>
    <img src='https://cdn.lensa.com/img/lensa-logos/LENSA_grey_logo.svg' alt='Lensa'>
  </a>
</div>
