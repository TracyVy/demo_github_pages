import React from "react";

const TranslationInput = (props) => {
  return (
    <form onSubmit={props.submitText}>
      <h1>Welcome to Yoda Translator</h1>
      <div className="input-group mb-3">
        <input
          name="text"
          type="text"
          className="form-control"
          placeholder="Enter Text"
          onChange={props.editText}
        />
        <div className="input-group-append">
          <button
            type="submit"
            className="btn btn-outline-secondary"
            id="button-addon2"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default TranslationInput;
