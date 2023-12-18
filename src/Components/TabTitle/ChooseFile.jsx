import React, { useState } from "react";
import styles from "../TabTitle/ChooseFile.module.scss"; // Stil dosyanızı ekleyin

export default function FileInputWithPreview() {
  const [selectedFiles, setSelectedFiles] = useState([null, null, null]);
  const [previewURLs, setPreviewURLs] = useState([null, null, null]);
  const titles = ["FavIcon", "Logo (Light)", "Logo (Dark)"];
  const handleFileChange = (e, index) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedFiles((prevSelectedFiles) => {
          const updatedFiles = [...prevSelectedFiles];
          updatedFiles[index] = file;
          return updatedFiles;
        });

        setPreviewURLs((prevPreviewURLs) => {
          const updatedURLs = [...prevPreviewURLs];
          updatedURLs[index] = reader.result;
          return updatedURLs;
        });
      };

      reader.readAsDataURL(file);
    } else {
      setSelectedFiles((prevSelectedFiles) => {
        const updatedFiles = [...prevSelectedFiles];
        updatedFiles[index] = null;
        return updatedFiles;
      });

      setPreviewURLs((prevPreviewURLs) => {
        const updatedURLs = [...prevPreviewURLs];
        updatedURLs[index] = null;
        return updatedURLs;
      });
    }
  };

  const handleCustomButtonClick = (index) => {
    document.getElementById(`fileInput${index}`).click();
  };

  return (
    <section className={styles.chooseFileSection}>
      {[0, 1, 2].map((index) => (
        <div key={index} className={styles["file-input-container"]}>
          <label htmlFor={`fileInput${index}`}>{titles[index]}</label>
          <input
            type="file"
            id={`fileInput${index}`}
            onChange={(e) => handleFileChange(e, index)}
          />

          <button onClick={() => handleCustomButtonClick(index)}>
            Choose File
          </button>

          {selectedFiles[index] && (
            <div>
              <p>Selected File: {selectedFiles[index].name}</p>
              <img src={previewURLs[index]} alt="Dosya Önizleme" />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
