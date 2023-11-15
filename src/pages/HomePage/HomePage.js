import React from 'react'
import Navbar from '../../components/shared/Navbar'
import "./style.css";

export const HomePage = () => {
    return (
        <body>
        <div className="page">
            <Navbar/>
          <div className="section">
            <div className="container">
              <p className="title">Conectando a Pequeños Negocios Locales y su Comunidad</p>
              <p className="description">
                Un lugar donde los negocios locales pueden promocionarse y vender sus productos a la comunidad
              </p>
              <button className="button">
                <div className="primary">
                  <div className="text-wrapper">Explora Negocios Locales</div>
                </div>
              </button>
            </div>
            <img className="vector" alt="Vector" src="image.svg" />
          </div>
          <div className="div">
            <div className="container">
              <div className="title-2">Beneficios de usar CommUnityLink</div>
              <div className="list">
                <div className="card">
                  <div className="image-container">
                    <div className="image">
                      <p className="p">Promociona tu Negocio en Línea</p>
                      <div className="tag">
                        <div className="text">⭐ Destacado</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-content">
                    <div className="title-3">Promoción</div>
                    <p className="subtitle">Alcance a una amplia audiencia en línea</p>
                  </div>
                </div>
                <div className="card">
                  <div className="image-container">
                    <div className="image">
                      <p className="p">Descubre Productos y Servicios Locales</p>
                      <div className="tag">
                        <div className="text">⭐ Destacado</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-content">
                    <div className="title-3">Descubrimiento</div>
                    <p className="subtitle">Encuentra productos y servicios de calidad de negocios locales</p>
                  </div>
                </div>
                <div className="card">
                  <div className="image-container">
                    <div className="image">
                      <p className="p">Apoya a Emprendedores de tu Comunidad</p>
                    </div>
                  </div>
                  <div className="text-content">
                    <div className="title-3">Apoyo</div>
                    <p className="subtitle">Contribuye al crecimiento de emprendedores locales</p>
                  </div>
                </div>
              </div>
            </div>
            <img className="img" alt="Vector" src="vector-200-2.svg" />
          </div>
          <div className="div">
            <div className="container">
              <div className="title-2">¿Cómo Funciona CommUnityLink?</div>
              <div className="list-2">
                <div className="row">
                  <div className="article">
                    <div className="image-wrapper">
                      <div className="image-2" />
                    </div>
                    <div className="frame">
                      <div className="title-4">Registra tu Negocio</div>
                      <p className="subtitle-2">Crea una cuenta y registra tu negocio en CommUnityLink</p>
                    </div>
                  </div>
                  <div className="article">
                    <div className="image-wrapper">
                      <div className="image-2" />
                    </div>
                    <div className="frame">
                      <div className="title-4">Explora Productos y Servicios</div>
                      <p className="subtitle-2">
                        Descubre una amplia variedad de productos y servicios ofrecidos por negocios locales
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="article">
                    <div className="image-wrapper">
                      <div className="image-2" />
                    </div>
                    <div className="frame">
                      <div className="title-4">Realiza Compras en Línea</div>
                      <p className="subtitle-2">Compra productos directamente desde la plataforma en línea</p>
                    </div>
                  </div>
                  <div className="article">
                    <div className="image-wrapper">
                      <div className="image-2" />
                    </div>
                    <div className="frame">
                      <div className="title-4">Apoya a Negocios Locales</div>
                      <p className="subtitle-2">
                        Ayuda a impulsar la economía local comprando productos de los negocios locales
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="vector-2" alt="Vector" src="vector-200-3.svg" />
          </div>
          <div className="div">
            <div className="title-wrapper">
              <p className="title-5">Lo que nuestros usuarios dicen</p>
            </div>
            <div className="list-3">
              <div className="card-2">
                <div className="user">
                  <div className="avatar">
                    <div className="avatar-2" />
                    <div className="div-wrapper">
                      <div className="title-6">Maria Gómez</div>
                    </div>
                  </div>
                </div>
                <p className="title-7">
                  CommUnityLink ha sido una excelente herramienta para promocionar mi negocio y llegar a más clientes
                </p>
              </div>
              <div className="card-2">
                <div className="user">
                  <div className="avatar">
                    <div className="avatar-2" />
                    <div className="div-wrapper">
                      <div className="title-6">Luis Rodríguez</div>
                    </div>
                  </div>
                </div>
                <p className="title-7">
                  Gracias a CommUnityLink, pude descubrir nuevos productos y servicios locales que no conocía antes
                </p>
              </div>
            </div>
            <img className="vector-3" alt="Vector" src="vector-200-4.svg" />
          </div>
          <div className="div">
            <div className="container">
              <div className="title-2">Contáctanos</div>
              <div className="input">
                <div className="title-8">Nombre</div>
                <div className="textfield">
                  <div className="text-2">Ingresa tu nombre</div>
                </div>
              </div>
              <div className="input">
                <div className="title-8">Email</div>
                <div className="textfield">
                  <div className="text-2">Ingresa tu correo electrónico</div>
                </div>
              </div>
              <div className="input">
                <div className="title-8">Mensaje</div>
                <div className="textfield">
                  <div className="text-2">Escribe tu mensaje</div>
                </div>
                <div className="info">Máximo 500 caracteres</div>
              </div>
              <button className="button">
                <div className="primary-2">
                  <div className="text-wrapper">Enviar</div>
                </div>
              </button>
            </div>
            <img className="vector-4" alt="Vector" src="vector-200.svg" />
          </div>
          <div className="container-wrapper">
            <div className="container-2">
              <div className="title-9">Acerca de CommUnityLink</div>
              <div className="title-10">Términos de Uso</div>
              <div className="title-11">Política de Privacidad</div>
              <div className="title-12">Contáctanos</div>
            </div>
          </div>
        </div>
        </body>
      );
}
