import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { MainStyle } from "./styles";
import { GiBeerStein } from "react-icons/gi";
import Header from "../../components/header";

export default function Main() {
  const [cerveja, setCerveja] = useState([]);

  async function loadCerveja() {
    await api.get("/").then((res) => {
      setCerveja(res.data);
    });
  }

  useEffect(() => {
    loadCerveja();
  }, []);

  return (
    <>
      <Header />
      <MainStyle>
        <GiBeerStein />
        <h1>BEER</h1>

        <section>
          {cerveja.map((item, i) => (
            <Link to={`/${item.name}`} key={i}>
              <div>
                <label>{item.name}</label>
                <label>{item.volume}</label>
                <img src={item.image} alt={item.name} />
              </div>
            </Link>
          ))}
        </section>
      </MainStyle>
    </>
  );
}
