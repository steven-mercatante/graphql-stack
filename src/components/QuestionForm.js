import React, { Component } from "react";
import "../forms-min.css";

const QuestionForm = () => (
  <div className="questionForm">
    <h3>Got a question about GraphQL?</h3>
    <p>Submit your question via this form and I'll do my best to answer it.</p>
    <form
      name="question"
      method="POST"
      className="pure-form pure-form-stacked"
      netlify
    >
      <label htmlFor="email">Your email:</label>
      <input type="email" name="email" />

      <label htmlFor="email">Your question:</label>
      <textarea name="question" cols="30" rows="10" />

      <button type="submit" className="pure-button pure-button-primary">
        Send
      </button>
    </form>
  </div>
);

export default QuestionForm;
