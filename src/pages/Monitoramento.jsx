import React from "react";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
import "../styles/Monitoramento.css";

const Monitoramento = () => {
  return (
    <section className="section">
      <div className="monitoramento__container container">
        <div className="monitoramento__data">
          <div className="monitoramento__images">
            <img src="src/assets/logo-icon.svg" />

            <img src="src/assets/logo-icon-2.svg" />
          </div>

          <h3 className="monitoramento__title">Monitoramento macro regional</h3>
        </div>

        <div className="monitoramento__content">
          <Swiper
            modules={[Pagination]}
            spaceBetween={32}
            slidesPerView={"auto"}
            centeredSlides={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <article className="monitoramento__card">
                <div className="monitoramento__number">1</div>
                <div className="monitoramento__icon">
                  <i class="ri-registered-line"></i>
                </div>

                <div className="monitoramento__name">Gerenciamento Urbano</div>

                <p className="gerenciamento__description">
                  Um dos maiores desafios enfrentados pelas cidades é a busca
                  por um desenvolvimento sustentável. O gerenciamento urbano
                  eficaz envolve o planejamento cuidadoso do uso da terra,
                  infraestrutura, transporte e para seus habitantes.
                </p>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article className="monitoramento__card">
                <div className="monitoramento__number">2</div>
                <div className="monitoramento__icon">
                  <i class="ri-registered-line"></i>
                </div>

                <div className="monitoramento__name">Gerenciamento Urbano</div>

                <p className="gerenciamento__description">
                  Um dos maiores desafios enfrentados pelas cidades é a busca
                  por um desenvolvimento sustentável. O gerenciamento urbano
                  eficaz envolve o planejamento cuidadoso do uso da terra,
                  infraestrutura, transporte e para seus habitantes.
                </p>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article className="monitoramento__card">
                <div className="monitoramento__number">3</div>
                <div className="monitoramento__icon">
                  <i class="ri-registered-line"></i>
                </div>

                <div className="monitoramento__name">Gerenciamento Urbano</div>

                <p className="gerenciamento__description">
                  Um dos maiores desafios enfrentados pelas cidades é a busca
                  por um desenvolvimento sustentável. O gerenciamento urbano
                  eficaz envolve o planejamento cuidadoso do uso da terra,
                  infraestrutura, transporte e para seus habitantes.
                </p>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article className="monitoramento__card">
                <div className="monitoramento__number">4</div>
                <div className="monitoramento__icon">
                  <i class="ri-registered-line"></i>
                </div>

                <div className="monitoramento__name">Gerenciamento Urbano</div>

                <p className="gerenciamento__description">
                  Um dos maiores desafios enfrentados pelas cidades é a busca
                  por um desenvolvimento sustentável. O gerenciamento urbano
                  eficaz envolve o planejamento cuidadoso do uso da terra,
                  infraestrutura, transporte e para seus habitantes.
                </p>
              </article>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Monitoramento;
