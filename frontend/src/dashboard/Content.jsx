import React from 'react';

import { Link } from 'react-router-dom';
import { Routes, Route, Router } from "react-router-dom";
import Dashboard from './Dashboard';
import Tables from './Tables';
import ShowCotizaciones from '../cotizaciones/ShowCotizaciones';
import EditCotizacion from '../cotizaciones/EditCotizaciones';
import CreateCotizacion from '../cotizaciones/CreateCotizaciones';
import ShowCliente from '../cliente/ShowCliente';
import EditCliente from '../Cliente/EditCliente';
import CreateCliente from '../Cliente/CreateCliente';
import ShowCotizacionItems from "../item/ShowCotizacionItems";
import CreateCotizacionItem from "../item/CreateCotizacionItem";
import EditCotizacionItem from "../item/EditCotizacionItem";
import ShowSuministros from "../suministro/ShowSuministros";
import CreateSuministro from "../suministro/CreateSuministro";
import EditSuministro from "../suministro/EditSuministro";
import CreateSeguimiento from '../seguimiento/CreateSeguimiento';
import EditSeguimiento from '../seguimiento/EditSeguimiento';
import ShowSeguimientos from '../seguimiento/ShowSeguimientos';
import ShowVisitas from '../calendario/ShowVisitas';
import CreateVisita from '../calendario/CreateVisita';
import EditVisita from '../calendario/EditVisita';

function Content() {
  return (
   <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Tables" element={<Tables />} />

        {/** Rutas del modulo de Cotizaciones */}
        <Route path="/cotizaciones" element={<ShowCotizaciones />} />
        <Route path="/cotizaciones/edit/:id" element={<EditCotizacion  />} />
        <Route path="/create/cotizaciones" element={<CreateCotizacion />} />

        {/** Rutas del modulo de Clientes */}
        <Route path="/clientes" element={<ShowCliente />} />
        <Route path="/clientes/create" element={<CreateCliente />} />
        <Route path="/clientes/edit/:id" element={<EditCliente />} />

        {/** Rutas del modulo de items */}
        <Route path="/cotizacion_items" element={<ShowCotizacionItems />} />
        <Route path="/cotizacion_items/create" element={<CreateCotizacionItem />} />
        <Route path="/cotizacion_items/edit/:id" element={<EditCotizacionItem />} />

        {/** Rutas del modulo de suministros */}
        <Route path="/suministros" element={<ShowSuministros />} />
        <Route path="/suministros/create" element={<CreateSuministro />} />
        <Route path="/suministros/edit/:id" element={<EditSuministro />} />

        {/** Rutas del modulo de seguimiento */}
        <Route path="/seguimiento/create" element={<CreateSeguimiento />} />
        <Route path="/seguimiento" element={<ShowSeguimientos />} />
        <Route path="/seguimiento/edit/:id" element={<EditSeguimiento />} />

          {/** Rutas del modulo de visitas*/}
        <Route path="/visita/create" element={<CreateVisita />} />
        <Route path="/visita" element={<ShowVisitas />} />
        <Route path="/visita/edit/:id" element={<EditVisita />} />

      </Routes>
   </>
  );
}

export default Content;
