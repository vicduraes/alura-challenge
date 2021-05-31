import React from 'react';

import './CodeEditor.scss';

const CodeEditor = () => {
  return (
    <>
      <section class='code-editor'>
        <div class='code-editor__border'>
          <article class='code-editor__body'>
            <div class='code-editor__balls'>
              <div class='code-editor__balls--red'></div>
              <div class='code-editor__balls--yellow'></div>
              <div class='code-editor__balls--green'></div>
            </div>
            <textarea
              name='code-editor'
              class='code-editor__input'
              placeholder='Digite aqui o seu código...'
            ></textarea>
          </article>
        </div>
        <button class='button code-editor__button'>
          Visualizar com o highlight
        </button>
      </section>
      <section class='form'>
        <form>
          <h3 class='form__subtitle'>Seu Projeto</h3>
          <input
            class='form__project-title'
            type='text'
            placeholder='Nome do seu projeto'
          />
          <textarea
            class='form__description'
            placeholder='Descrição do seu projeto'
          ></textarea>
          <h3 class='form__subtitle'>Personalização</h3>
          <div class='form__personalization'>
            <select name='select-language' class='form__select'>
              <option value='javascript' selected class='form__select--options'>
                Javascript
              </option>
              <option value='java' class='form__select--options'>
                Java
              </option>
              <option value='python' class='form__select--options'>
                Python
              </option>
            </select>
            <input type='color' class='form__color' />
          </div>
          <button type='submit' class='button form__button'>
            Salvar projeto
          </button>
        </form>
      </section>
    </>
  );
};

export default CodeEditor;
