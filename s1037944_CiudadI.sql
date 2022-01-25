-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 20-11-2021 a las 14:22:29
-- Versión del servidor: 5.7.32
-- Versión de PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `s1037944_CiudadI`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ElementosUrbanos`
--

CREATE TABLE `ElementosUrbanos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(150) NOT NULL,
  `tipo` varchar(15) NOT NULL,
  `latitud` varchar(20) NOT NULL,
  `longitud` varchar(20) NOT NULL,
  `fechaConstruccion` date NOT NULL,
  `fechaMantenimiento` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ElementosUrbanos`
--

INSERT INTO `ElementosUrbanos` (`id`, `nombre`, `descripcion`, `tipo`, `latitud`, `longitud`, `fechaConstruccion`, `fechaMantenimiento`) VALUES
(1, 'qqqqqqqqq', 'qqqqqqqqqqqq', 'Farola', '41.67087091685245', '-3.676887309193262', '1212-12-12', '1212-12-12'),
(2, 'ssssssss', 'ddddddddddddddd', 'Limpia', '41.670902973588994', '-3.6769409533735598', '2020-10-12', '2021-11-23'),
(3, 'Sala de departamento', 'Es unasala que ...', 'Semaforo', '41.67089896649779', '-3.676833036370226', '2021-01-23', '2022-10-15'),
(4, 'eeeeeeeeeeeeeeee', 'eeeee', 'Sucia', '41.67107928535465', '-3.67698860449309', '1212-12-12', '1212-12-12'),
(7, 'Farola calle Mayor', 'Farola comprada por alcalde para el disfrute de los ciudadanos', 'Semaforo', '41.67115985053046', '-3.6765706933303743', '2021-11-11', '2021-11-11'),
(8, 'Banco', 'Bancoverde', 'Alcantarilla', '54', '652', '2021-11-11', '2021-11-11'),
(9, 'Banco', 'Banco color azul', 'Jardin', '68.1', '-3.8', '2020-11-11', '2021-11-11'),
(10, 'Banco de Paseo', 'Banco marrÃ³n de calidad Extra', 'Alcantarilla', '11111', '-111', '1212-12-12', '1212-12-12'),
(11, 'Banco Verde', 'Un banco verde ubicado en huanalulu', 'Sucia', '5', '5', '1945-10-05', '1965-10-05'),
(12, 'farola 1', 'farola de acero ', 'Semaforo', '41.67097948393865', '-3.6769259916763985', '1212-12-12', '1212-12-12'),
(13, 'farola1', 'farola1', 'Farola', '1', '-1', '1111-11-11', '1111-11-11'),
(14, 'a', '1', 'Sucia', '0', '-0', '2021-01-01', '2021-01-01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `IOT_Medidas`
--

CREATE TABLE `IOT_Medidas` (
  `id` int(11) NOT NULL,
  `Tipo` varchar(30) NOT NULL,
  `UltimaMedicion` float NOT NULL,
  `Hora` time NOT NULL,
  `Fecha` date NOT NULL,
  `Latitud` varchar(50) NOT NULL,
  `Longitud` varchar(50) NOT NULL,
  `Direccion` varchar(100) NOT NULL,
  `Descripcion` varchar(300) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `IOT_Medidas`
--

INSERT INTO `IOT_Medidas` (`id`, `Tipo`, `UltimaMedicion`, `Hora`, `Fecha`, `Latitud`, `Longitud`, `Direccion`, `Descripcion`) VALUES
(17, 'Temperatura', 25, '18:01:41', '2021-11-17', '41.67132008537378', '-3.678358291290351', 'C/lasAmapolas', 'IOT '),
(19, 'Temperatura', 32, '18:01:41', '2021-11-17', '41.67147636072323', '-3.677188848159858', 'C/las Acacias', 'IOT '),
(21, 'Velocidad Viento', 35, '18:01:41', '2021-11-17', '41.671604586367636', ' -3.676437829635688', 'C/DOS DE ENERO', 'IOT '),
(22, 'Temperatura', 28, '18:01:41', '2021-11-17', '41.67089934216262', '-3.6770493732910836', 'C/SOlo Siempre', 'IOT ');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ElementosUrbanos`
--
ALTER TABLE `ElementosUrbanos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `IOT_Medidas`
--
ALTER TABLE `IOT_Medidas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ElementosUrbanos`
--
ALTER TABLE `ElementosUrbanos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `IOT_Medidas`
--
ALTER TABLE `IOT_Medidas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
