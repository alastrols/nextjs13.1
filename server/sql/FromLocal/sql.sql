-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2023 at 12:39 PM
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
(60, 0, 'test', 'test2', '$2a$08$0wu4Kk3h9bDwPGzcYWsRkOU35ancu/dIwh.0/BPCUm0LKnm..GP06', 'suphavit.b@itp.co.th', 'active', 'Normal User', '2023-01-19 11:26:07');

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
