import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div>
        <p>RESPOSTAS EM ATÉ 24H</p>
        <h1>Contato.</h1>
      </div>
      <div>
        <form>
          <div>
            <label>Digite seu nome</label>
            <input type="text" placeholder="EX:Jonas Souza" />
          </div>
          <div>
            <label>Digite seu email</label>
            <input type="email" placeholder="EX:joao@email.com" />
          </div>
          <div>
            <label>Digite o´que deseja</label>
            <textarea placeholder='Digite aqui sua mensagem' />
          </div>
          <div>
            <button>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
