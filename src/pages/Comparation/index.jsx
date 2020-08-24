import React, { useEffect, useState } from "react";
import api from "../../services/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Header from "../../components/header";
import { Comparar } from "./style";

export default function Comparation() {
  const [cerveja, setCerveja] = useState([]);
  const [cerveja1, setCerveja1] = useState();
  const [cerveja2, setCerveja2] = useState();
  const data = [
    {
      name: "Price",
      Cerveja1: cerveja1?.prices[0].value,
      Cerveja2: cerveja2?.prices[0].value,
    },
    {
      name: "Volume",
      Cerveja1: cerveja1?.volume.split(" ")[0],
      Cerveja2: cerveja2?.volume.split(" ")[0],
    },
    {
      name: "abv",
      Cerveja1: cerveja1?.abv,
      Cerveja2: cerveja2?.abv,
    },
    {
      name: "ibu",
      Cerveja1: cerveja1?.ibu,
      Cerveja2: cerveja2?.ibu,
    },
  ];

  async function loadCerveja1(id) {
    await api.get(`/${id}`).then((res) => {
      setCerveja1(res.data);
    });
  }
  async function loadCerveja2(id) {
    await api.get(`/${id}`).then((res) => {
      setCerveja2(res.data);
    });
  }

  async function loadCerveja() {
    await api.get("/").then((res) => {
      setCerveja(res.data);
      setCerveja1(res.data[0]);
      setCerveja2(res.data[0]);
    });
  }
  useEffect(() => {
    loadCerveja();
  }, []);

  return (
    <>
      <Header />
      <Comparar>
        <h1>Compare as cervejas</h1>
        <section>
          <div>
            <label>Cerveja 1</label>
            <select onChange={(e) => loadCerveja1(e.target.value)}>
              {cerveja.map((v, i) => (
                <option value={v._id} key={i}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Cerveja 2</label>
            <select onChange={(e) => loadCerveja2(e.target.value)}>
              {cerveja.map((v, i) => (
                <option value={v._id} key={i}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>
        </section>
        <BarChart
          width={800}
          height={600}
          data={data}
          margin={{
            top: 40,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Cerveja1" fill="#2C2A2A" />
          <Bar dataKey="Cerveja2" fill="#7A34F5" />
        </BarChart>
      </Comparar>
    </>
  );
}
