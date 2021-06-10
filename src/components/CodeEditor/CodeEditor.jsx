import React, { useState, useEffect } from 'react';
import hljs from 'highlight.js';

import './CodeEditor.scss';
import '../../assets/stylesheets/dracula-highlight-theme.css';

const CodeEditor = () => {
  const [bgColor, setBgColor] = useState('');

  const [language, setLanguage] = useState('javascript');

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const handleBgColor = (event) => {
    setBgColor(event.target.value);
  };

  const handleSelectLanguage = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>
      <section className='code-editor'>
        <div
          className='code-editor__border'
          style={{ backgroundColor: bgColor }}
        >
          <article className='code-editor__body'>
            <div className='code-editor__balls'>
              <div className='code-editor__balls--red'></div>
              <div className='code-editor__balls--yellow'></div>
              <div className='code-editor__balls--green'></div>
            </div>
            <pre>
              <code
                className={`${language} code-editor__input`}
                contentEditable
                aria-label='editor de codigo'
                spellCheck='false'
              ></code>
            </pre>
          </article>
        </div>
        <button
          className='button code-editor__button'
          onClick={() => hljs.highlightAll()}
        >
          Visualizar com o highlight
        </button>
      </section>
      <section className='form'>
        <form>
          <h3 className='form__subtitle'>Seu Projeto</h3>
          <input
            className='form__project-title'
            type='text'
            placeholder='Nome do seu projeto'
          />
          <textarea
            className='form__description'
            placeholder='Descrição do seu projeto'
          ></textarea>
          <h3 className='form__subtitle'>Personalização</h3>
          <div className='form__personalization'>
            <select
              className='form__select'
              onChange={handleSelectLanguage}
              value={language}
            >
              <option value='javascript' className='form__select--options'>
                Javascript
              </option>
              <option value='java' className='form__select--options'>
                Java
              </option>
              <option value='python' className='form__select--options'>
                Python
              </option>
            </select>
            <input
              type='color'
              className='form__color'
              onChange={handleBgColor}
            />
          </div>
          <button type='submit' className='button form__button'>
            Salvar projeto
          </button>
        </form>
      </section>
    </>
  );
};

export default CodeEditor;
