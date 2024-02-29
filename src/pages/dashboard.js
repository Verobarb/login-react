/* eslint-disable jsx-a11y/anchor-is-valid */
// import "./Dash.css";
import { useLocation, useHistory } from "react-router-dom";
import "../Dashboard.css";

function Dashboard() {
  const navigate = useHistory();
  const location = useLocation();
  const user = location.state;

  function logout() {
    navigate.replace("/");
  }

  return (
    <div className="main-dashboard">
      <div className="app">
        <header className="app-header">
          <div className="app-header-logo">
            <div className="logo">
              <span className="logo-icon">
              </span>
              <h1 className="logo-title">
                <span>{user.nombre}</span>
                <span>{user.apellidos}</span>
              </h1>
            </div>
          </div>
          <div className="app-header-navigation">
            <div className="tabs">
              <a href="#">Movimientos en rack</a>
              <a href="#" className="active">
                Movimientos en cedi
              </a>
              <a href="#">ABC inventario</a>
            </div>
          </div>
          <div className="app-header-actions">
            <button className="user-profile">
              <span>
                {user.nombre} {user.apellidos}
              </span>
              <span>
              </span>
            </button>
            <div className="app-header-actions-buttons">
              <button onClick={logout} className="icon-button large">
                <span class="material-icons">logout</span>
              </button>
            </div>
          </div>
          <div className="app-header-mobile">
            <button className="icon-button large">
              <i className="ph-list"></i>
            </button>
          </div>
        </header>
        <div className="app-body">
          <div className="app-body-navigation">
            <nav className="navigation">
              <a href="#">
                <i className="ph-browsers"></i>
                <span>Stock</span>
              </a>
              <a href="#">
                <i className="ph-check-square"></i>
                <span>Inventario General</span>
              </a>
              <a href="#">
                <i className="ph-swap"></i>
                <span>Devoluciones</span>
              </a>
              <a href="#">
                <i className="ph-file-text"></i>
                <span>Pedidos</span>
              </a>
              <a href="#">
                <i className="ph-globe"></i>
                <span>Despachos</span>
              </a>
              <a href="#">
                <i className="ph-clipboard-text"></i>
                <span>Picking y packing</span>
              </a>
            </nav>
            <footer className="footer">
              <h1>
                SM<small>©</small>
              </h1>
              <div>
                Software Master ©<br />
                All Rights Reserved 2024
              </div>
            </footer>
          </div>
          <div className="app-body-main-content">
            <section className="service-section">
              <h2>Servicios</h2>
              <button className="flat-button">Search</button>
              <div className="mobile-only">
                <button className="flat-button">Toggle search</button>
              </div>
              <div className="tiles">
                <article className="tile">
                  <div className="tile-header">
                    <i className="ph-lightning-light"></i>
                    <h3>
                      <span>Entrada de mercancia</span>
                      <span>Saqr</span>
                    </h3>
                  </div>
                  <a href="#">
                    <span>Ir al servicio</span>
                    <span className="icon-button">
                      <i className="ph-caret-right-bold"></i>
                    </span>
                  </a>
                </article>
                <article className="tile">
                  <div className="tile-header">
                    <i className="ph-fire-simple-light"></i>
                    <h3>
                      <span>Salida de mercancia</span>
                      <span></span>
                    </h3>
                  </div>
                  <a href="#">
                    <span>Ir al servicio</span>
                    <span className="icon-button">
                      <i className="ph-caret-right-bold"></i>
                    </span>
                  </a>
                </article>
                <article className="tile">
                  <div className="tile-header">
                    <i className="ph-file-light"></i>
                    <h3>
                      <span>Despachos</span>
                      <span></span>
                    </h3>
                  </div>
                  <a href="#">
                    <span>Ir a los despachos</span>
                    <span className="icon-button">
                      <i className="ph-caret-right-bold"></i>
                    </span>
                  </a>
                </article>
              </div>
              <div className="service-section-footer">
                <p>
                  Services are paid according to the current state of the
                  currency and tariff.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
