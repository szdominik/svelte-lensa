class Popup {
  #popupIsReady;

  constructor() {
    this.#popupIsReady = false;
  }

  #getPopup = (onLoadFunc) => {
    if (this.#popupIsReady) {
      onLoadFunc && onLoadFunc();
    } else {
      const lElem = document.getElementsByTagName('head')[0];
      const newLElem = document.createElement('link');

      newLElem.href = 'https://cdn.lensa.com/lensa-site-public/popup/pure-popup.f63c11941b98c2476277.css.gz';
      newLElem.rel = 'stylesheet';
      lElem.appendChild(newLElem, lElem);

      const sElem = document.getElementsByTagName('body')[0];
      const newSElem = document.createElement('script');
      newSElem.async = true;

      sElem.appendChild(newSElem, sElem);
      newSElem.onload = () => {
        this.#popupIsReady = true;
        onLoadFunc && onLoadFunc();
      };
      newSElem.src = 'https://cdn.lensa.com/lensa-site-public/popup/pure-popup.4e3891c3cb0164c21791.js.gz';
    }
  };

  #openPopup = (flowConfigName, ...args) => {
    const cb = () => window.LensaUI.popUpModal(flowConfigName, ...args);
    this.#getPopup(cb);
  };

  openFeedApplyPopup(...args) {
    this.#openPopup('feedApplyJob', ...args);
  }
}

module.exports = new Popup();
