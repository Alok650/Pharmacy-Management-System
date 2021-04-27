-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2021 at 08:29 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pharmacy`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `calc_total` (IN `billnum` INT)  BEGIN
    update transaction set totalcost=
		(select sum(subtotal) from 
			( select quantity*med_cost as subtotal from med,items where med.sr_no=items.sr_no and billno=billnum) totalbill) where billno=billnum;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `customerCount` ()  NO SQL
SELECT pincode,COUNT(1) as Frequency FROM customer GROUP BY pincode ORDER BY Frequency DESC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getCovidvaccine` ()  NO SQL
SELECT fname, lname,age,pincode,email,username FROM customer where age >=45$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getCustomerlist` ()  NO SQL
SELECT fname, lname, age, pincode, email, username FROM customer$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getRecentcustomers` ()  NO SQL
SELECT * FROM userlogs$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `transaction_print_all` ()  NO SQL
SELECT * FROM transaction$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `transaction_print_today` ()  NO SQL
SELECT billno,billdate,totalcost,C_ID FROM transaction where billdate>curdate()$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `transaction_print_tot_today` ()  NO SQL
SELECT sum(totalcost) as tot FROM (select totalcost from transaction where billdate>=curdate()) AS T$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `transaction_sort_date` ()  NO SQL
SELECT billno,billdate,totalcost,C_ID
FROM transaction
ORDER BY billdate DESC$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `transaction_sort_totalcost` ()  NO SQL
SELECT billno,billdate,totalcost,C_ID FROM transaction ORDER BY totalcost DESC$$

--
-- Functions
--
CREATE DEFINER=`root`@`localhost` FUNCTION `shelf_life_month` (`date1` DATE, `date2` DATE) RETURNS INT(11) BEGIN
   RETURN month(date2)-month(date1);
END$$

CREATE DEFINER=`root`@`localhost` FUNCTION `shelf_life_year` (`date1` DATE, `date2` DATE) RETURNS INT(11) BEGIN
   RETURN year(date2)-year(date1);
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `fname` varchar(40) NOT NULL,
  `lname` varchar(40) NOT NULL,
  `age` int(40) NOT NULL,
  `pincode` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `username` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`fname`, `lname`, `age`, `pincode`, `email`, `username`, `password`) VALUES
('Jignesh', 'Agarwal', 20, '110023', 'fdsf@gmail.com', 'Google', 'god'),
('Eshan', 'Agarwal', 68, '120043', 'eshan@gmail.com', 'u19cs103', 'eshan'),
('Keshav', 'Gautam', 19, '110001', 'keshav@gmail.com', 'u19cs115', 'keshav'),
('Alok', 'Prasad', 19, '801108', 'alokp650@gmail.com', 'u19cs119', 'alok'),
('Raghav', 'maeshwari', 69, '110001', 'raghav@gmail.com', 'u19cs130', 'raghav');

--
-- Triggers `customer`
--
DELIMITER $$
CREATE TRIGGER `insertlog` AFTER INSERT ON `customer` FOR EACH ROW INSERT INTO userlogs values(NEW.username, NEW.email, NOW())
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `sr_no` int(11) NOT NULL,
  `billno` int(11) NOT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`sr_no`, `billno`, `quantity`) VALUES
(3, 11, 100),
(3, 12, 30),
(4, 12, 30),
(5, 12, 30);

--
-- Triggers `items`
--
DELIMITER $$
CREATE TRIGGER `update_qty` AFTER INSERT ON `items` FOR EACH ROW BEGIN
        Declare x int;
        select qty_left into x from med where med.sr_no = NEW.sr_no;
        if (new.quantity < x) then 
			update med set qty_left = qty_left- NEW.quantity where med.sr_no = NEW.sr_no;
		else 
			 SIGNAL SQLSTATE '45000'
			 SET MESSAGE_TEXT = 'You can not insert record';
        end if;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `med`
--

CREATE TABLE `med` (
  `sr_no` int(11) NOT NULL,
  `med_name` varchar(150) DEFAULT NULL,
  `qty_left` int(11) DEFAULT NULL,
  `med_cost` int(11) DEFAULT NULL,
  `exp_date` date DEFAULT NULL,
  `med_mfg` varchar(145) DEFAULT NULL,
  `rac_loc` varchar(45) DEFAULT NULL,
  `mfg_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `med`
--

INSERT INTO `med` (`sr_no`, `med_name`, `qty_left`, `med_cost`, `exp_date`, `med_mfg`, `rac_loc`, `mfg_date`) VALUES
(3, 'MultiVitamine', 8, 600, '2023-06-30', 'MedicineExpress', '19', '2020-06-01'),
(4, 'Painkiller', 10, 200, '2024-04-30', 'MedTech', '12', '2021-04-01'),
(5, 'Lipitor', 20, 700, '2022-10-30', 'BioLife', '13', '2018-10-01'),
(8, 'covishield', 985, 1000, '2021-03-02', 'serum institute', '30', '2021-04-29');

-- --------------------------------------------------------

--
-- Stand-in structure for view `qty_sort`
-- (See below for the actual view)
--
CREATE TABLE `qty_sort` (
`sr_no` int(11)
,`med_name` varchar(150)
,`qty_left` int(11)
);

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `billno` int(11) NOT NULL,
  `totalcost` int(11) DEFAULT NULL,
  `billdate` datetime DEFAULT current_timestamp(),
  `C_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`billno`, `totalcost`, `billdate`, `C_ID`) VALUES
(2, 300, '2021-04-16 21:29:53', 103),
(3, 2000, '2021-04-20 23:25:48', 119),
(4, 500, '2021-04-20 23:25:48', 115),
(5, 350, '2021-04-21 23:25:48', 9),
(7, 1800, '2021-04-22 20:11:17', 119),
(8, 2070, '2021-04-22 20:11:59', 119),
(10, 5000, '2021-04-23 15:18:24', 119),
(11, 60000, '2021-04-23 15:26:34', 119),
(12, 45000, '2021-04-23 15:52:48', 103);

-- --------------------------------------------------------

--
-- Table structure for table `userlogs`
--

CREATE TABLE `userlogs` (
  `username` varchar(50) NOT NULL,
  `email` text NOT NULL,
  `Date_of_joining` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userlogs`
--

INSERT INTO `userlogs` (`username`, `email`, `Date_of_joining`) VALUES
('Facebook', 'fdsf@gmail.com', '2021-04-23 18:00:41'),
('Google', 'fdsf@gmail.com', '2021-04-23 18:00:25'),
('Jignesh', 'jignesh@gmail.com', '2021-04-23 17:37:49'),
('u19cs100', 'AMAN@GMAIL.COM', '2021-04-23 18:13:35'),
('u19cs103', 'eshan@gmail.com', '2021-04-23 17:56:00'),
('u19cs115', 'keshav@gmail.com', '2021-04-23 17:57:00'),
('u19cs119', 'alokp650@gmail.com', '2021-04-23 17:56:29'),
('u19cs130', 'raghav@gmail.com', '2021-04-23 18:22:44'),
('u19cs131', 'rajesh@gmail.com', '2021-04-23 18:27:04');

-- --------------------------------------------------------

--
-- Structure for view `qty_sort`
--
DROP TABLE IF EXISTS `qty_sort`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `qty_sort`  AS SELECT `med`.`sr_no` AS `sr_no`, `med`.`med_name` AS `med_name`, `med`.`qty_left` AS `qty_left` FROM `med` ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`sr_no`,`billno`),
  ADD KEY `billno_idx` (`billno`);

--
-- Indexes for table `med`
--
ALTER TABLE `med`
  ADD PRIMARY KEY (`sr_no`),
  ADD UNIQUE KEY `med_name_UNIQUE` (`med_name`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`billno`);

--
-- Indexes for table `userlogs`
--
ALTER TABLE `userlogs`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `med`
--
ALTER TABLE `med`
  MODIFY `sr_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `billno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `billno` FOREIGN KEY (`billno`) REFERENCES `transaction` (`billno`) ON DELETE CASCADE,
  ADD CONSTRAINT `sr_no` FOREIGN KEY (`sr_no`) REFERENCES `med` (`sr_no`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
