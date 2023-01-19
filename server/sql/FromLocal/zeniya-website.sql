-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2023 at 01:50 PM
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
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `dept_id` int(11) NOT NULL,
  `dept_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`dept_id`, `dept_name`) VALUES
(1, '...'),
(2, '...'),
(3, '...');

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
(5, 'Dacy\'s parade balloon inflation', '2020-06-16', 'Publish', 'At 12th street, Central park west, UK At 12th street, Central park west, UK', 0, 2020, 'fc37faa29dfa5d78b9fb33d9af045960.pdf', 'sample', '2021-01-11 17:12:06'),
(6, 'Dacy\'s parade balloon inflation', '2021-01-23', 'Publish', 'At 12th street, Central park west, UK At 12th street, Central park west, UK', 1, 2021, 'fb0d616177b5eb02ce23dec89f7ee730.pdf', '1form_df2f', '2021-01-23 01:51:49'),
(7, 'Dacy\'s parade balloon inflation', '2021-01-01', 'Publish', 'At 12th street, Central park west, UK At 12th street, Central park west, UK', 2, 2021, 'a34dc175484bc7e0b851ccf03d14fed7.pdf', 'OC_200432_001_ITT', '2021-01-23 02:04:34'),
(8, 'Dacy\'s parade balloon inflation', '2020-12-24', 'Publish', 'At 12th street, Central park west, UK At 12th street, Central park west, UK', 3, 2020, 'a1fe0c530c6842e7361e648bd9d3e497.pdf', '1904-065__sec_01-02CMP (5)', '2021-01-23 02:12:24'),
(9, 'Dacy\'s parade balloon inflation', '2020-12-31', 'Publish', 'At 12th street, Central park west, UK At 12th street, Central park west, UK', 4, 2020, '23d6a97df34a66604e05437a9c65a9ad.pdf', 'Invoice_20200804144039', '2021-01-23 02:12:42'),
(10, 'Dacy\'s parade balloon inflation', '2022-02-10', 'Publish', 'At 13th street, Central park west, UK At 13th street, Central park west, UK', 5, 2022, 'b838bd60f5e50f5e145e165727335bc0.pdf', 'OC_200432_001_ITT', '2021-01-23 03:29:34'),
(11, 'Dacy\'s parade balloon inflation', '2020-12-24', 'Publish', 'At 12th street, Central park west, UK At 12th street, Central park west, UK', 3, 2020, 'a1fe0c530c6842e7361e648bd9d3e497.pdf', '1904-065__sec_01-02CMP (5)', '2021-01-23 02:12:24'),
(12, 'Dacy\'s parade balloon inflation', '2020-12-24', 'Publish', 'At 12th street, Central park west, UK At 12th street, Central park west, UK', 3, 2020, 'a1fe0c530c6842e7361e648bd9d3e497.pdf', '1904-065__sec_01-02CMP (5)', '2021-01-23 02:12:24'),
(13, 'Dacy\'s parade balloon inflation', '2020-12-24', 'Publish', 'At 12th street, Central park west, UK At 12th street, Central park west, UK', 3, 2020, 'a1fe0c530c6842e7361e648bd9d3e497.pdf', '1904-065__sec_01-02CMP (5)', '2021-01-23 02:12:24'),
(14, '12321', '2023-01-17', 'Publish', '<p>123123</p>', 0, 0, '', '', '2023-01-16 17:26:46'),
(15, '12321', '2023-01-17', 'Publish', '<p>123123</p>', 0, 0, '', '', '2023-01-16 17:29:34'),
(16, '12321', '2023-01-17', 'Publish', '<p>123123</p>', 0, 0, '', '', '2023-01-16 17:29:39'),
(17, '123', '2023-01-17', 'Draft', '<p>1312331</p>', 0, 0, '', '', '2023-01-16 17:31:00'),
(18, 'hrtyrt', '2023-01-17', 'Publish', '<p>rtyrytr</p>', 0, 0, '', '', '2023-01-16 17:31:17'),
(19, 'asd', '2023-01-17', 'Publish', '<p>asd</p>', 0, 0, '', '', '2023-01-16 17:32:09'),
(20, 'asd', '2023-01-17', 'Publish', '<p>asd</p>', 0, 0, '', '', '2023-01-16 17:32:10'),
(21, 'sdf', '2023-01-17', 'Publish', '<p>s</p>', 0, 0, '', '', '2023-01-16 17:32:32'),
(22, 'tewrwe', '2023-01-17', 'Publish', '<p>werewrwe</p>', 0, 0, '', '', '2023-01-16 17:40:02'),
(23, 'test', '2023-01-17', 'Publish', '<p>1213</p>', 0, 0, '', '', '2023-01-16 17:40:44'),
(24, '234', '2023-01-17', 'Publish', '<p>32</p>', 0, 0, '', '', '2023-01-16 17:41:40'),
(25, '2131313', '2023-01-17', 'Publish', '<p>21321321</p>', 0, 0, '', '', '2023-01-16 17:42:22'),
(26, 'asdasd', '2023-01-17', 'Publish', '<p>dsadas</p>', 0, 0, '', '', '2023-01-16 17:43:36'),
(27, 'TEST With Image', '2023-01-27', 'Publish', '<p>TESDT</p>\r\n<p><img src=\"http://localhost:3001/api/image/tinyupload/1673891146285.png\" alt=\"signature\" width=\"534\" height=\"221\"></p>', 0, 0, '', '', '2023-01-16 17:45:52'),
(28, 'TEST With Image', '2023-01-17', 'Publish', '<p>TEST</p>\r\n<p>&nbsp;</p>\r\n<p><img src=\"http://localhost:3001/api/image/tinyupload/1673891368491.png\" alt=\"signature\" width=\"534\" height=\"221\"></p>', 0, 0, '', '', '2023-01-16 17:49:35'),
(29, 'TEST S3', '2023-01-17', 'Publish', '<p><img src=\"https://suphavit-web.s3.ap-southeast-1.amazonaws.com/product/1673959289800___signature.png\" alt=\"signature\" width=\"534\" height=\"221\"></p>', 0, 0, '', '', '2023-01-17 12:41:38');

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
(1, 1, 'Administrator', 'admin', '$2a$08$GhH73/ADG5hqdVdxhBQyJupH2Ys8Q.MlIAO6qwjZ1B0IEnc.15UVG', 'admin@itp.co.th', 'active', 'Administrator', '2022-05-16 13:23:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`dept_id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
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
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `dept_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
