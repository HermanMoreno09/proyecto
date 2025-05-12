-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-05-2025 a las 23:43:20
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crm_servicios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `nit_cedula` varchar(100) NOT NULL,
  `direccion` text DEFAULT NULL,
  `departamento` varchar(100) DEFAULT NULL,
  `ciudad` varchar(100) DEFAULT NULL,
  `barrio` varchar(100) DEFAULT NULL,
  `creado_por` int(11) DEFAULT NULL,
  `creado_en` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `nit_cedula`, `direccion`, `departamento`, `ciudad`, `barrio`, `creado_por`, `creado_en`, `createdAt`, `updatedAt`) VALUES
(1, 'Empresa XYZ', '900123456-7', 'Calle 45 #12-34', 'Risaralda', 'Pereira', 'Centro', NULL, '2025-05-06 16:03:20', '2025-05-06 16:03:20', '2025-05-06 16:03:20'),
(2, '', '', NULL, NULL, NULL, NULL, NULL, '2025-05-06 16:03:31', '2025-05-06 16:03:31', '2025-05-06 16:03:31'),
(3, 'Tecnologías ABC S.A.S', '901234567-8', 'Carrera 8 #23-45', 'Antioquia', 'Medellín', 'El Poblado', NULL, '2025-05-06 16:09:41', '2025-05-06 16:09:41', '2025-05-06 16:09:41'),
(4, 'Empresa XYZ', '900123456-7', 'Cra 15 #45-32', 'Antioquia', 'Medellín', 'El Poblado', NULL, '2025-05-06 19:55:10', '2025-05-06 19:55:10', '2025-05-06 19:55:10'),
(6, 'EXYZ', '900123456-7', 'Cra 15 #45-32', 'Antioquia', 'Medellín', 'El Poblado', NULL, '2025-05-06 20:36:18', '2025-05-06 20:36:18', '2025-05-06 20:36:18'),
(7, 'E', '900', 'Cra', 'Ant', 'Me', 'El', NULL, '2025-05-06 20:37:18', '2025-05-06 20:37:18', '2025-05-06 20:37:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cotizaciones`
--

CREATE TABLE `cotizaciones` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cliente_id` int(11) DEFAULT NULL,
  `orden_id` int(11) DEFAULT NULL,
  `fecha` date NOT NULL,
  `codigo_cotizacion` varchar(100) NOT NULL,
  `subtotal` decimal(10,0) DEFAULT NULL,
  `descuento_porcentaje` decimal(10,0) DEFAULT NULL,
  `subtotal_descuento` decimal(10,0) DEFAULT NULL,
  `impuesto` decimal(10,0) DEFAULT NULL,
  `total` decimal(10,0) DEFAULT NULL,
  `terminos` text DEFAULT NULL,
  `representante_legal` varchar(255) DEFAULT NULL,
  `tipo_documento` varchar(50) DEFAULT NULL,
  `numero_documento` varchar(100) DEFAULT NULL,
  `creado_por` int(11) DEFAULT NULL,
  `creado_en` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cotizaciones`
--

INSERT INTO `cotizaciones` (`id`, `cliente_id`, `orden_id`, `fecha`, `codigo_cotizacion`, `subtotal`, `descuento_porcentaje`, `subtotal_descuento`, `impuesto`, `total`, `terminos`, `representante_legal`, `tipo_documento`, `numero_documento`, `creado_por`, `creado_en`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1002, '2025-01-01', '25-02', 10, 10, 90000, 17100, 107100, 'Pago contra entrega pruebabaaaa', 'Juan Pérez', 'CC', '1234567890', NULL, '2025-05-06 16:04:04', '2025-05-06 16:04:03', '2025-05-06 20:18:56'),
(2, NULL, NULL, '2025-05-06', 'COT-2025-001', 100000, 10, 90000, 17100, 107100, 'El pago debe realizarse dentro de los 15 días hábiles.', 'Laura Gómez', 'CC', '1098765432', NULL, '2025-05-06 16:36:10', '2025-05-06 16:36:10', '2025-05-06 16:36:10'),
(4, 1, 1002, '2025-05-06', 'COT-2025-02', 100000, 10, 90000, 17100, 107100, 'Pago contra entrega', 'Juan Pérez', 'CC', '1234567890', NULL, '2025-05-06 20:15:25', '2025-05-06 20:15:25', '2025-05-06 20:15:25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cotizacion_items`
--

CREATE TABLE `cotizacion_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cotizacion_id` int(11) DEFAULT NULL,
  `item_numero` int(11) DEFAULT NULL,
  `actividad` text DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `unidad` varchar(50) DEFAULT NULL,
  `cantidad` decimal(10,0) DEFAULT NULL,
  `valor_unitario` decimal(10,0) DEFAULT NULL,
  `subtotal` decimal(10,0) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cotizacion_items`
--

INSERT INTO `cotizacion_items` (`id`, `cotizacion_id`, `item_numero`, `actividad`, `descripcion`, `unidad`, `cantidad`, `valor_unitario`, `subtotal`, `createdAt`, `updatedAt`) VALUES
(10, 1, 1, 'Pintura de paredes', 'Pintura en paredes interiores con pintura lavable', 'm2', 150, 4000, 600000, '2025-05-06 16:51:03', '2025-05-06 18:28:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cotizacion_suministros`
--

CREATE TABLE `cotizacion_suministros` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `item_id` int(11) DEFAULT NULL,
  `nombre_item` text DEFAULT NULL,
  `unidad` text DEFAULT NULL,
  `cantidad` decimal(10,0) DEFAULT NULL,
  `valor_unitario` decimal(10,0) DEFAULT NULL,
  `costo_total` decimal(10,0) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cotizacion_suministros`
--

INSERT INTO `cotizacion_suministros` (`id`, `item_id`, `nombre_item`, `unidad`, `cantidad`, `valor_unitario`, `costo_total`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Cable UTP', 'Metro', 100, 2000, NULL, '2025-05-06 16:05:55', '2025-05-06 16:05:55'),
(2, 1, NULL, NULL, 100, NULL, NULL, '2025-05-06 20:31:32', '2025-05-06 20:31:52'),
(3, 1, NULL, NULL, 100, NULL, NULL, '2025-05-06 20:32:03', '2025-05-06 20:32:03'),
(5, 1, ' acero inoxidable', 'Caja', 5, 12000, 60000, '2025-05-06 20:33:56', '2025-05-06 20:34:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordenes_servicio`
--

CREATE TABLE `ordenes_servicio` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `codigo_orden` varchar(100) NOT NULL,
  `cliente_id` int(11) DEFAULT NULL,
  `estado` varchar(50) DEFAULT 'pendiente',
  `creado_en` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seguimiento_servicio`
--

CREATE TABLE `seguimiento_servicio` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `orden_id` int(11) DEFAULT NULL,
  `estado` varchar(100) DEFAULT NULL,
  `comentario` text DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `contraseña` text NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `rol` varchar(50) DEFAULT NULL,
  `acepto_habeas_data` tinyint(1) DEFAULT 0,
  `creado_en` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visitas_programadas`
--

CREATE TABLE `visitas_programadas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cliente_id` int(11) DEFAULT NULL,
  `orden_id` int(11) DEFAULT NULL,
  `fecha_visita` date NOT NULL,
  `jornada` varchar(50) DEFAULT NULL,
  `creado_por` int(11) DEFAULT NULL,
  `creado_en` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cotizaciones`
--
ALTER TABLE `cotizaciones`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codigo_cotizacion` (`codigo_cotizacion`);

--
-- Indices de la tabla `cotizacion_items`
--
ALTER TABLE `cotizacion_items`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cotizacion_suministros`
--
ALTER TABLE `cotizacion_suministros`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ordenes_servicio`
--
ALTER TABLE `ordenes_servicio`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codigo_orden` (`codigo_orden`);

--
-- Indices de la tabla `seguimiento_servicio`
--
ALTER TABLE `seguimiento_servicio`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `visitas_programadas`
--
ALTER TABLE `visitas_programadas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `cotizaciones`
--
ALTER TABLE `cotizaciones`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `cotizacion_items`
--
ALTER TABLE `cotizacion_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `cotizacion_suministros`
--
ALTER TABLE `cotizacion_suministros`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `ordenes_servicio`
--
ALTER TABLE `ordenes_servicio`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `seguimiento_servicio`
--
ALTER TABLE `seguimiento_servicio`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `visitas_programadas`
--
ALTER TABLE `visitas_programadas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
