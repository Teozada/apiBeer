import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { BeerStyle, BeerContainer } from "./styles";
import Header from "../../components/header";

export default function Beer({ match }) {
  const [cerveja, setCerveja] = useState([]);
  const [mostrada, setMostrada] = useState();

  async function loadCerveja() {
    await api.get("/").then((res) => {
      setCerveja(res.data);
    });
  }

  useEffect(() => {
    loadCerveja();
  }, []);

  useEffect(() => {
    if (cerveja.length > 0) {
      const filtrada = cerveja.filter((item) => {
        if (item.name === match.params.beer) {
          return item;
        }
      });
      setMostrada(filtrada[0]);
    }
  }, [cerveja]);

  return (
    <>
      <Header />
      <BeerStyle>
        {mostrada !== undefined && (
          <BeerContainer>
            <div>
              <img src={mostrada.image} />
              <section>
                <label>
                  <span>Nome:</span>
                  {mostrada.name}
                </label>
                <label>
                  <span>Volume:</span>
                  {mostrada.volume}
                </label>
                <label>
                  <span>Fabricante:</span>
                  {mostrada.style}
                </label>
                <label>
                  <span>Descrição:</span>
                  {mostrada.description}
                </label>
              </section>
            </div>
          </BeerContainer>
        )}
      </BeerStyle>
    </>
  );
}
