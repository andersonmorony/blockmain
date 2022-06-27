import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/Header";

function App() {
  const [results, setResult] = useState([]);
  const [search, setSearch] = useState();
  const [msg, setMsg] = useState(false);

  // setResult(seed);
  const seed = [
    {
      name: "Troca de óleo",
      NFnumber: "33211033041260048604550000067091831120936420",
      chassi: "5jCUH6DkcVfz96755",
      created: "2021-04-20",
    },
    {
      name: "Manuntenção",
      NFnumber: "33211033041260048604550000067091831120936420",
      chassi: "5jCUH6DkcVfz96755",
      created: "2021-02-20",
    },
    {
      name: "Manuntenção",
      NFnumber: "33211033041260048604550000067091831120936420",
      chassi: "5jCUH6DkcVfz96755",
      created: "2021-02-20",
    },
    {
      name: "Manuntenção",
      NFnumber: "33211033041260048604550000067091831120936420",
      chassi: "5jCUH6DkcVfz96755",
      created: "2021-02-20",
    },
    {
      name: "Troca pneu",
      NFnumber: "33211033041260048604550000067091831120936420",
      chassi: "5jCUH6DkcVfz96755",
      created: "2021-07-21",
    },
  ];

  const handleForm = (event) => {
    setSearch(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    var response = seed.filter((res) => {
      return res.chassi === search;
    }).sort();

    console.table(response)

    if (response.length > 1) {
      setMsg(false);
    } else {
      setMsg(true);
    }

    setResult(
      response
    );
  };

  return (
    // <div className="App" style={{ backgroundImage: `url(/image/motor.jpg)`, backgroundSize: 'cover' }}>
    <div className="App">
      <Navbar />
      <Header onSubmitForm={onSubmit} onHandleForm={handleForm} />

      <div className="container">
        <div className="row">
        {results.length > 0 ? (
          <>
            <div class="card col-md-6">
              <div class="card-body">
                <h1>{results.length}</h1>
                <p>Registros encontrado</p>
              </div>
            </div>
            <div class="card col-md-6">
              <div class="card-body">
                <h1>{results[0].created}</h1>
                <p>Último registro</p>
              </div>
            </div>
          </>
        ) : null}
        </div>
      </div>
      <div className="container container-cards mt-4">
       
        {results.map((res) => (
          <div class="card mt-2">
            <div class="card-body">
              <p>
                <strong>Nota Fiscal:</strong> {res.NFnumber.substring(0, 12)}...
                | <strong>Descrição:</strong> {res.name} |{" "}
                <strong>Data:</strong> {res.created}
              </p>

              <a
                target={"_blank"}
                href={
                  `https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=resumo&tipoConteudo=7PhJ+gAVw2g=&nfe=` +
                  res.NFnumber
                }
              >
                Consultar nota
              </a>
              <br />
              <a href="#">Detalhes</a>
            </div>
          </div>
        ))}
        {msg ? (
          <div className="alert alert-info">Nenhum registro encontrado</div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
