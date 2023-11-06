import React from "react";

import "../styles/Form.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="section">
      <div className="form__container container grid">
        <div className="form grid">
          <h3 className="form__title">Entrar na sua conta</h3>

          <div className="form__inputs">
            <div className="form__input">
              <i class="ri-mail-line"></i>
              <input type="text" placeholder="Digite seu email..." />
            </div>

            <div className="form__input">
              <i class="ri-lock-2-line"></i>
              <input type="text" placeholder="Digite sua senha..." />
            </div>
          </div>

          <div className="form__infos">
            <div className="checkbox">
              <input type="checkbox" />
              Você aceita o termos e condições?
            </div>

            <span className="form__error">⚠️ Preencha todos os campos!</span>
          </div>

          <button className="button">Entrar</button>

          <span className="form__link">
            Já possue uma conta?<Link>Registrar</Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Login;