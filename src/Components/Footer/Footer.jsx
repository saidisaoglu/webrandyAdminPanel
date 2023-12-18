import { useState } from "react";
import stylesFooter from "../Footer/Footer.module.scss";
import styles from "../TabTitle/ChooseFile.module.scss";
import AllInformationsJs from "../../../informations";

export default function Footer() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedFile(file);
        setPreviewURL(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setSelectedFile(null);
      setPreviewURL(null);
    }
  };

  const handleCustomButtonClick = () => {
    document.getElementById("fileInput").click();
  };
  return (
    <section className={stylesFooter.FooterSection}>
      <h3>Footer</h3>
      <form>
        <div>
          <div className={styles["file-input-container"]}>
            <label htmlFor="fileInput">Footer Video</label>
            <input type="file" id="fileInput" onChange={handleFileChange} />

            <button onClick={handleCustomButtonClick}>Choose File</button>

            {selectedFile && (
              <div>
                <p>Selected File</p>
                <img src={previewURL} alt="Dosya Önizleme" />
              </div>
            )}
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="Mail1">Mail1 </label>
            <input
              type="text"
              id="Mail1"
              placeholder={AllInformationsJs.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="Mail2">Mail2 </label>
            <input
              type="text"
              id="Mail2"
              placeholder={AllInformationsJs.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="PhoneNumber1">Phone Number 1 </label>
            <input
              type="text"
              id="PhoneNumber1"
              placeholder={AllInformationsJs.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="PhoneNumber2">Phone Number 2 </label>
            <input
              type="text"
              id="PhoneNumber2"
              placeholder={AllInformationsJs.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="PhoneNumber3">Phone Number 3 </label>
            <input
              type="text"
              id="PhoneNumber3"
              placeholder={AllInformationsJs.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="Adress">Adress </label>
            <input
              type="text"
              id="Adress"
              placeholder={AllInformationsJs.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="Instagramlink">Instagram link </label>
            <input
              type="text"
              id="Instagramlink"
              placeholder={AllInformationsJs.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="Facebooklink">Facebook link </label>
            <input
              type="text"
              id="Facebook link"
              placeholder={AllInformationsJs.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="Linkedinlink">Linkedin link </label>
            <input
              type="text"
              id="Linkedinlink"
              placeholder={AllInformationsJs.Navbar.WebrandyTitle}
            />
          </div>
          <div>
            <label htmlFor="Youtubelink">Youtube link </label>
            <input
              type="text"
              id="Youtubelink"
              placeholder={AllInformationsJs.Navbar.WebrandyTitle}
            />
          </div>
        </div>
      </form>
    </section>
  );
}
