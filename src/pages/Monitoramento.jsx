import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Card from "../components/Card/Card";

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

          <h3 className="monitoramento__title">
            Monitoramento macro <br />
            regional
          </h3>
        </div>

        <div className="monitoramento__content">
          <Swiper
            modules={[Pagination]}
            spaceBetween={32}
            slidesPerView={"auto"}
            loop={true}
            grabCursor={true}
            centeredSlides={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Card
                number={"1"}
                icon={"ri-building-line"}
                title={"Gerenciamento Urbano"}
                description={
                  "Um dos maiores desafios enfrentados pelas cidades é a busca por um desenvolvimento sustentável. O gerenciamento urbano eficaz envolve o planejamento cuidadoso do uso da terra, infraestrutura, transporte e para seus habitantes."
                }
                color={"yellow"}
              />
            </SwiperSlide>
      
            <SwiperSlide>
                <Card
                  number={"1"}
                  icon={"ri-building-line"}
                  title={"Gerenciamento Urbano"}
                  description={
                    "Um dos maiores desafios enfrentados pelas cidades é a busca por um desenvolvimento sustentável. O gerenciamento urbano eficaz envolve o planejamento cuidadoso do uso da terra, infraestrutura, transporte e para seus habitantes."
                  }
                  color={"yellow"}
                />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                  number={"1"}
                  icon={"ri-building-line"}
                  title={"Gerenciamento Urbano"}
                  description={
                    "Um dos maiores desafios enfrentados pelas cidades é a busca por um desenvolvimento sustentável. O gerenciamento urbano eficaz envolve o planejamento cuidadoso do uso da terra, infraestrutura, transporte e para seus habitantes."
                  }
                  color={"yellow"}
                />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                  number={"1"}
                  icon={"ri-building-line"}
                  title={"Gerenciamento Urbano"}
                  description={
                    "Um dos maiores desafios enfrentados pelas cidades é a busca por um desenvolvimento sustentável. O gerenciamento urbano eficaz envolve o planejamento cuidadoso do uso da terra, infraestrutura, transporte e para seus habitantes."
                  }
                  color={"yellow"}
                />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                  number={"1"}
                  icon={"ri-building-line"}
                  title={"Gerenciamento Urbano"}
                  description={
                    "Um dos maiores desafios enfrentados pelas cidades é a busca por um desenvolvimento sustentável. O gerenciamento urbano eficaz envolve o planejamento cuidadoso do uso da terra, infraestrutura, transporte e para seus habitantes."
                  }
                  color={"yellow"}
                />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                  number={"1"}
                  icon={"ri-building-line"}
                  title={"Gerenciamento Urbano"}
                  description={
                    "Um dos maiores desafios enfrentados pelas cidades é a busca por um desenvolvimento sustentável. O gerenciamento urbano eficaz envolve o planejamento cuidadoso do uso da terra, infraestrutura, transporte e para seus habitantes."
                  }
                  color={"yellow"}
                />
            </SwiperSlide>
            
            <SwiperSlide>
              <Card
                  number={"1"}
                  icon={"ri-building-line"}
                  title={"Gerenciamento Urbano"}
                  description={
                    "Um dos maiores desafios enfrentados pelas cidades é a busca por um desenvolvimento sustentável. O gerenciamento urbano eficaz envolve o planejamento cuidadoso do uso da terra, infraestrutura, transporte e para seus habitantes."
                  }
                  color={"yellow"}
                />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Monitoramento;
