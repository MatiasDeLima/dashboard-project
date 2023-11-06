import React from "react";

import "../styles/Form.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="section">
      <div className="form__container container grid">
        <div className="form grid">
          <h3 className="form__title">Criar Uma Conta</h3>

          <div className="form__inputs">
            <div className="form__input">
              <i class="ri-user-3-line"></i>
              <input type="text" placeholder="Digite seu nome..." />
            </div>

            <div className="form__input">
              <i class="ri-mail-line"></i>
              <input type="text" placeholder="Digite seu email..." />
            </div>

            <div className="form__input">
              <i class="ri-lock-2-line"></i>
              <input type="text" placeholder="Digite sua senha..." />
            </div>

            <div className="form__input">
              <i class="ri-smartphone-line"></i>
              <input type="text" placeholder="Digite seu número..." />
            </div>
          </div>

          <div className="form__infos">
            <div className="checkbox">
              <input type="checkbox" />
              Você aceita o termos e condições?
            </div>

            <span className="form__error">⚠️ Preencha todos os campos!</span>
          </div>

          <button className="button">Registrar</button>

          <span className="form__link">
            Já possue uma conta?<Link>Entrar</Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Register;
