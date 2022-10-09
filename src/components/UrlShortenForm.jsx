import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function UrlShortenForm() {
  const [loadingButton, setLoadingButton] = useState(false);
  const [urlCopied, setUrlCopied] = useState(false);

  function buttonClickHandler() {
    setLoadingButton(true);
  }
  return (
    <div className="urlshortener">
      <div className="form-control">
        <label htmlFor="url">Enter the URL you want to shorten</label>
        <input type="text" name="url" placeholder="paste your url here"></input>
        <Popup
          trigger={
            <button
              type="submit"
              className={
                loadingButton ? "submit-btn loading disabled" : "submit-btn"
              }
              onClick={() => {
                buttonClickHandler();
              }}
              disabled={loadingButton}
            >
              Get Simple Url
            </button>
          }
          modal
          position="right center"
        >
          {(close) => (
            <div className="url-modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="modal-content">
                <h1>Congratulations ! Your Simple Url is generated </h1>
                <div>Your url</div>
                <button
                  className="copy-clipboard"
                  onClick={() => {
                    navigator.clipboard.writeText("your shortened url");
                    setUrlCopied(true);
                  }}
                >
                  {urlCopied ? "Copy successful" : "Copy to Clipboard"}
                </button>
                <div className="thankyou-text">
                  {" "}
                  Thankyou for using our service.
                </div>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
}

export default UrlShortenForm;
