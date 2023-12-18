import inputButton from "../../assets/inputButton.svg";
import addInputButton from "../../assets/addInputButton.svg";

import { useState } from "react";
import AllInformationsJs from "../../../informations";
import styles from "../TabTitle/TabTitle.module.scss";
import FileInputWithPreview from "./ChooseFile";
export default function TabTitle() {
  const [keywords, setKeywords] = useState([{ id: 1, value: "" }]);
  const handleAddInput = (e) => {
    e.preventDefault();
    setKeywords((prevKeywords) => [
      ...prevKeywords,
      { id: prevKeywords.length + 1, value: "" },
    ]);
  };
  const handleRemoveInput = (id) => {
    setKeywords((prevKeywords) =>
      prevKeywords.filter((keyword) => keyword.id !== id)
    );
  };
  return (
    <section className={styles.informations}>
      <form className={styles.form}>
        <div>
          <label htmlFor="tabTitle">Tab title</label>
          <input
            className={styles.TabTitle}
            type="text"
            id="tabTitle"
            placeholder={AllInformationsJs.Navbar.WebrandyTitle}
          />
        </div>
        <div>
          <label htmlFor="metaTagKeywords">Meta tag Keywords</label>
          {keywords.map((keyword) => (
            <div key={keyword.id} className={styles.TagInput}>
              <input
                placeholder={AllInformationsJs.Navbar.WebrandyTitle}
                type="text"
                id={`metaTagKeywords${keyword.id}`}
                value={keyword.value}
                onChange={(e) => {
                  const updatedKeywords = keywords.map((k) =>
                    k.id === keyword.id ? { ...k, value: e.target.value } : k
                  );
                  setKeywords(updatedKeywords);
                }}
              />
              <button onClick={() => handleRemoveInput(keyword.id)}>
                <img src={inputButton} />
              </button>
            </div>
          ))}
        </div>
        <button onClick={handleAddInput} className={styles.addInputButton}>
          <img src={addInputButton} alt="" />
        </button>
      </form>
      <div>
        <FileInputWithPreview />
      </div>
    </section>
  );
}
