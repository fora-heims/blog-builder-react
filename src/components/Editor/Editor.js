import React from 'react';

import './Editor.css';

export default function Editor(props) {
  return (
    <div className="editor">
      <div className="form-control">
        <input
          name="title"
          type="text"
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)}
        />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-control">
        <input
          type="text"
          value={props.subtitle}
          onChange={(e) => props.setSubtitle(e.target.value)}
        />
        <label>Subtitle</label>
      </div>
      <div className="form-control">
        <select value={props.font} onChange={(e) => props.setFont(e.target.value)}>
          <option value="architect">{"Architect's Daughter"}</option>
          <option value="comforter">Comforter</option>
          <option value="fredoka">Fredoka</option>
          <option value="indie-flower">Indie Flower</option>
          <option value="monteserrat">Monteserrat</option>
          <option value="roboto">Roboto</option>
          <option value="roboto-mono">Roboto Mono</option>
          <option value="titillium">Titillium</option>
        </select>
        <label>Font</label>
      </div>
      <div className="form-control">
        <label>Alignment</label>
        <div
          className="radio-group"
          value={props.align}
          onChange={(e) => props.setAlign(e.target.value)}
        >
          <label>
            <input name="align" type="radio" value="left" />
            <i className="ri-align-left"></i>
          </label>
          <label>
            <input name="align" type="radio" value="center" />
            <i className="ri-align-center"></i>
          </label>
          <label>
            <input name="align" type="radio" value="right" />
            <i className="ri-align-right"></i>
          </label>
        </div>
      </div>
      <div className="form-control">
        <textarea
          style={{ height: '250px' }}
          value={props.text}
          onChange={(e) => props.setText(e.target.value)}
        />
        <label>Text</label>
      </div>
    </div>
  );
}
