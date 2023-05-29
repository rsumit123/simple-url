import { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function UrlShortenForm() {
  const [loadingButton, setLoadingButton] = useState(false);
  const [urlCopied, setUrlCopied] = useState(false);
  const [shortUrl, setShortUrl] = useState(null);
  const [longUrl, setLongUrl] = useState('');

  const fetchData = async () => {
    try {
      setLoadingButton(true);
      console.log("Calling API....., longUrl: ", longUrl);
      const response = await fetch(`${import.meta.env.VITE_SHORT_URL}?long_url=${longUrl}`); 
      const json = await response.json();
      console.log("Success:", JSON.stringify(json));
      setShortUrl(`${import.meta.env.VITE_FRONTEND_URL}/${json.short_url}`);
      setLoadingButton(false);
    } catch (error) {
      console.error('Error:', error);
      setLoadingButton(false);
    }
    
  }

 

  const handleInputChange = (event) => {
    console.log("Url is ", event.target.value)
    setLongUrl(event.target.value);
  };

  return (
    <div className="urlshortener">
      <div className="form-control">
        <label htmlFor="url">Enter the URL you want to shorten</label>
        <input type="text" name="url" value={longUrl}
          onChange={handleInputChange} placeholder="paste your url here"></input>
          <button
              type="submit"
              className={
                loadingButton ? "submit-btn loading disabled" : "submit-btn"
              }
              onClick={() => {
                fetchData();
                console.log("Button clicked");
              }}
              disabled={loadingButton}
            >
              Get Simple Url
            </button>


        {shortUrl && loadingButton === false ? (<Popup
          // trigger={
          //   <button>Click to view url</button>
          // }
          open={!loadingButton}
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
                <div>{shortUrl}</div>
                <button
                  className="copy-clipboard"
                  onClick={() => {
                    navigator.clipboard.writeText(shortUrl);
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
        </Popup>):(null)}
        
      </div>
    </div>
  );
}

export default UrlShortenForm;
