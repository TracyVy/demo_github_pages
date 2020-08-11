import React, { useState, useEffect } from "react";
import "./App.css";
import TranslationInput from "./components/TranslationInput/TranslationInput";
import TranslationList from "./components/TranslationList/TranslationList";
import axios from "axios";

function App() {
  const [translation, setTranslation] = useState({
    text: "",
    translationList: [],
  });

  const editText = (e) => {
    setTranslation({ ...translation, [e.target.name]: e.target.value });
  };

  const submitText = (e) => {
    e.preventDefault();
    translate(translation.text).then((res) => {
      setTranslation({
        ...translation,
        translationList: [...translation.translationList, res],
      });
    });
  };

  const translate = (originalText) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: "https://yodish.p.rapidapi.com/yoda.json",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "x-rapidapi-host": "yodish.p.rapidapi.com",
          "x-rapidapi-key":
            "b7436eb940msh7eda97d567495aap1562ccjsndf86c1bddee6",
          useQueryString: true,
        },
        params: {
          text: originalText,
        },
        data: {},
      })
        .then((response) => {
          resolve(response.data.contents.translated);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  useEffect(() => {
    axios
      .get("https://quotes.rest/qod")
      .then((res) => translate(res.data.contents.quotes[0].quote))
      .then((yodaTranslated) => console.log(yodaTranslated))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="jumbotron rounded-0">
          <TranslationInput submitText={submitText} editText={editText} />
        </div>
      </div>

      <TranslationList translationList={translation.translationList} />
    </div>
  );
}

export default App;
