-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2023 at 10:26 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zeniya-website`
--

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `banner_id` int(11) NOT NULL,
  `topic` text DEFAULT NULL,
  `file` text DEFAULT NULL,
  `post_date` date DEFAULT NULL,
  `status` enum('active','inactive') NOT NULL DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `arr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`banner_id`, `topic`, `file`, `post_date`, `status`, `created_at`, `arr`) VALUES
(3, '123456', 'https://suphavit-web.s3.ap-southeast-1.amazonaws.com/banner/1674331792341_banner.jpg', '2023-01-22', 'active', '2023-01-21 19:24:14', 0),
(9, 'TEST', 'https://suphavit-web.s3.ap-southeast-1.amazonaws.com/banner/1674331797368_signature.png', '2023-01-22', 'active', '2023-01-21 19:24:14', 1);

-- --------------------------------------------------------

--
-- Table structure for table `banner_en`
--

CREATE TABLE `banner_en` (
  `banner_id` int(11) NOT NULL,
  `topic` text DEFAULT NULL,
  `file` text DEFAULT NULL,
  `post_date` date DEFAULT NULL,
  `status` enum('active','inactive') NOT NULL DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `arr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `banner_en`
--

INSERT INTO `banner_en` (`banner_id`, `topic`, `file`, `post_date`, `status`, `created_at`, `arr`) VALUES
(3, '123456', 'https://suphavit-web.s3.ap-southeast-1.amazonaws.com/banner/1674331792341_banner.jpg', '2023-01-22', 'active', '2023-01-21 19:24:14', 0),
(9, 'TEST', 'https://suphavit-web.s3.ap-southeast-1.amazonaws.com/banner/1674331797368_signature.png', '2023-01-22', 'active', '2023-01-21 19:24:14', 1),
(23, 'TH2', 'https://suphavit-web.s3.ap-southeast-1.amazonaws.com/banner/1674335857484_signature.png', '2023-01-22', 'active', '2023-01-21 21:14:06', 2);

-- --------------------------------------------------------

--
-- Table structure for table `banner_th`
--

CREATE TABLE `banner_th` (
  `banner_id` int(11) NOT NULL,
  `topic` text DEFAULT NULL,
  `file` text DEFAULT NULL,
  `post_date` date DEFAULT NULL,
  `status` enum('active','inactive') NOT NULL DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `arr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `banner_th`
--

INSERT INTO `banner_th` (`banner_id`, `topic`, `file`, `post_date`, `status`, `created_at`, `arr`) VALUES
(3, '123456', 'https://suphavit-web.s3.ap-southeast-1.amazonaws.com/banner/1674331792341_banner.jpg', '2023-01-22', 'active', '2023-01-21 19:24:14', 0),
(9, 'TEST', 'https://suphavit-web.s3.ap-southeast-1.amazonaws.com/banner/1674331797368_signature.png', '2023-01-22', 'active', '2023-01-21 19:24:14', 1),
(23, 'TH2', 'https://suphavit-web.s3.ap-southeast-1.amazonaws.com/banner/1674336346139_signature.png', '2023-01-22', 'active', '2023-01-21 21:23:39', 2);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `contact_id` int(11) NOT NULL,
  `fullname` text DEFAULT NULL,
  `company_name` text DEFAULT NULL,
  `department` text DEFAULT NULL,
  `phone_number` text DEFAULT NULL,
  `fax` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `subject` text DEFAULT NULL,
  `detail` text DEFAULT NULL,
  `file` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `lang` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`contact_id`, `fullname`, `company_name`, `department`, `phone_number`, `fax`, `email`, `subject`, `detail`, `file`, `created_at`, `lang`) VALUES
(1, 'Suphavit', 'ITP', 'LIC', '0923833733', '-', 'suphavit.b@itp.co.th', 'Subject', 'detail', 'https://suphavit-web.s3.ap-southeast-1.amazonaws.com/import/user/1674127576506___userlist+(1).xlsx', '2023-01-20 13:36:47', 'EN'),
(4, 'Suphavit', 'ITP', 'LIC', '0923833733', '-', 'suphavit.b@itp.co.th', 'Subject', 'detail', 'https://suphavit-web.s3.ap-southeast-1.amazonaws.com/import/user/1674127576506___userlist+(1).xlsx', '2023-01-20 13:36:47', 'JP');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `news_id` int(11) NOT NULL,
  `topic` text NOT NULL,
  `post_date` text NOT NULL,
  `status` enum('Publish','Draft') NOT NULL DEFAULT 'Publish',
  `detail` text NOT NULL,
  `arr` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `filename` text NOT NULL,
  `original_name` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`news_id`, `topic`, `post_date`, `status`, `detail`, `arr`, `year`, `filename`, `original_name`, `created_at`) VALUES
(27, 'TEST With Image', '2023-01-27', 'Publish', '<p>TESDT</p>\r\n<p><img src=\"http://localhost:3001/api/image/tinyupload/1673891146285.png\" alt=\"signature\" width=\"534\" height=\"221\"></p>', 0, 0, '', '', '2023-01-16 17:45:52'),
(28, 'TEST With Image', '2023-01-17', 'Publish', '<p>TEST</p>\r\n<p>&nbsp;</p>\r\n<p><img src=\"http://localhost:3001/api/image/tinyupload/1673891368491.png\" alt=\"signature\" width=\"534\" height=\"221\"></p>', 0, 0, '', '', '2023-01-16 17:49:35'),
(29, 'TEST S3...', '2023-01-17', 'Publish', '<p><img src=\"https://suphavit-web.s3.ap-southeast-1.amazonaws.com/product/1673959289800___signature.png\" alt=\"signature\" width=\"534\" height=\"221\"></p>', 0, 0, '', '', '2023-01-17 12:41:38');

-- --------------------------------------------------------

--
-- Table structure for table `news_en`
--

CREATE TABLE `news_en` (
  `news_id` int(11) NOT NULL,
  `topic` text NOT NULL,
  `post_date` text NOT NULL,
  `status` enum('Publish','Draft') NOT NULL DEFAULT 'Publish',
  `detail` text NOT NULL,
  `arr` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `filename` text NOT NULL,
  `original_name` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `news_en`
--

INSERT INTO `news_en` (`news_id`, `topic`, `post_date`, `status`, `detail`, `arr`, `year`, `filename`, `original_name`, `created_at`) VALUES
(34, 'TEST2222', '2023-01-20', 'Publish', '<p>1234</p>\r\n<p><img src=\"https://suphavit-web.s3.ap-southeast-1.amazonaws.com/product/1674157075061___signature.png\" alt=\"signature\" width=\"534\" height=\"221\"></p>', 0, 0, '', '', '2023-01-19 19:37:59'),
(35, 'AAAA', '2023-01-21', 'Publish', '<p>NNN</p>', 0, 0, '', '', '2023-01-19 19:48:21'),
(36, 'asdsa', '2023-01-20', 'Publish', '<p>asdda</p>', 0, 0, '', '', '2023-01-19 19:51:57');

-- --------------------------------------------------------

--
-- Table structure for table `news_th`
--

CREATE TABLE `news_th` (
  `news_id` int(11) NOT NULL,
  `topic` text NOT NULL,
  `post_date` text NOT NULL,
  `status` enum('Publish','Draft') NOT NULL DEFAULT 'Publish',
  `detail` text NOT NULL,
  `arr` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `filename` text NOT NULL,
  `original_name` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `news_th`
--

INSERT INTO `news_th` (`news_id`, `topic`, `post_date`, `status`, `detail`, `arr`, `year`, `filename`, `original_name`, `created_at`) VALUES
(34, 'NNNN', '2023-01-21', 'Draft', '<p>VV</p>', 0, 0, '', '', '2023-01-19 19:49:30'),
(35, 'fsd', '2023-01-20', 'Publish', '<p>fsfs</p>', 0, 0, '', '', '2023-01-19 19:51:27');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `dept_id` int(11) NOT NULL,
  `fullname` text NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `email` text NOT NULL,
  `status` enum('active','inactive') NOT NULL DEFAULT 'active',
  `level` enum('Normal User','Administrator') NOT NULL DEFAULT 'Normal User',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `dept_id`, `fullname`, `username`, `password`, `email`, `status`, `level`, `created_at`) VALUES
(1, 1, 'Administrator', 'admin', '$2a$08$GhH73/ADG5hqdVdxhBQyJupH2Ys8Q.MlIAO6qwjZ1B0IEnc.15UVG', 'admin@itp.co.th', 'active', 'Administrator', '2022-05-16 13:23:22'),
(62, 0, '123', 'admin2', '$2a$08$Fsx1zWTl5jRiVR/emULCWuU/BZjE.EdB7NU6WF7f5uQQqnrY53uSu', 'suphavit.b2@itp.co.th', 'active', 'Normal User', '2023-01-19 20:24:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`banner_id`);

--
-- Indexes for table `banner_en`
--
ALTER TABLE `banner_en`
  ADD PRIMARY KEY (`banner_id`);

--
-- Indexes for table `banner_th`
--
ALTER TABLE `banner_th`
  ADD PRIMARY KEY (`banner_id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contact_id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `news_en`
--
ALTER TABLE `news_en`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `news_th`
--
ALTER TABLE `news_th`
  ADD PRIMARY KEY (`news_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `banner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `banner_en`
--
ALTER TABLE `banner_en`
  MODIFY `banner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `banner_th`
--
ALTER TABLE `banner_th`
  MODIFY `banner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `news_en`
--
ALTER TABLE `news_en`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `news_th`
--
ALTER TABLE `news_th`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
