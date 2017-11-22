CREATE TABLE IF NOT EXISTS `question` (`question_id` INTEGER auto_increment , `title` VARCHAR(255), `content` VARCHAR(255), `created_at` DATETIME NOT NULL, `updated_at` DATETIME NOT NULL, PRIMARY KEY (`question_id`)) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS `answer` (`answer_id` INTEGER auto_increment , `content` VARCHAR(255), `created_at` DATETIME NOT NULL, `updated_at` DATETIME NOT NULL, `question_id` INTEGER, PRIMARY KEY (`answer_id`), FOREIGN KEY (`question_id`) REFERENCES `question` (`question_id`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS `keyword` (`keyword_id` INTEGER auto_increment , `content` VARCHAR(255), `created_at` DATETIME NOT NULL, `updated_at` DATETIME NOT NULL, `question_id` INTEGER, PRIMARY KEY (`keyword_id`), FOREIGN KEY (`question_id`) REFERENCES `question` (`question_id`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;

INSERT INTO `kcag`.`question` (`title`, `content`, `created_at`, `updated_at`) VALUES ('질문1제목', '질문1내용', now(), now());
INSERT INTO `kcag`.`question` (`title`, `content`, `created_at`, `updated_at`) VALUES ('질문2제목', '질문2내용', now(), now());
INSERT INTO `kcag`.`question` (`title`, `content`, `created_at`, `updated_at`) VALUES ('질문3제목', '질문3내용', now(), now());

INSERT INTO `kcag`.`answer` (`content`, `created_at`, `updated_at`, `question_id`) VALUES ('질문1번에 대한 답변1번', now(), now(), '1');
INSERT INTO `kcag`.`answer` (`content`, `created_at`, `updated_at`, `question_id`) VALUES ('질문1번에 대한 답변2번', now(), now(), '1');
INSERT INTO `kcag`.`answer` (`content`, `created_at`, `updated_at`, `question_id`) VALUES ('질문1번에 대한 답변3번', now(), now(), '1');
INSERT INTO `kcag`.`answer` (`content`, `created_at`, `updated_at`, `question_id`) VALUES ('질문2번에 대한 답변1번', now(), now(), '2');
INSERT INTO `kcag`.`answer` (`content`, `created_at`, `updated_at`, `question_id`) VALUES ('질문2번에 대한 답변2번', now(), now(), '2');
INSERT INTO `kcag`.`answer` (`content`, `created_at`, `updated_at`, `question_id`) VALUES ('질문3번에 대한 답변1번', now(), now(), '3');

INSERT INTO `kcag`.`keyword` (`content`, `created_at`, `updated_at`, `question_id`) VALUES ('키워드1', now(), now(), '1');
INSERT INTO `kcag`.`keyword` (`content`, `created_at`, `updated_at`, `question_id`) VALUES ('키워드2', now(), now(), '1');
INSERT INTO `kcag`.`keyword` (`content`, `created_at`, `updated_at`, `question_id`) VALUES ('키워드3', now(), now(), '1');
INSERT INTO `kcag`.`keyword` (`content`, `created_at`, `updated_at`, `question_id`) VALUES ('키워드4', now(), now(), '2');
INSERT INTO `kcag`.`keyword` (`content`, `created_at`, `updated_at`, `question_id`) VALUES ('키워드5', now(), now(), '2');
INSERT INTO `kcag`.`keyword` (`content`, `created_at`, `updated_at`, `question_id`) VALUES ('키워드6', now(), now(), '2');
INSERT INTO `kcag`.`keyword` (`content`, `created_at`, `updated_at`, `question_id`) VALUES ('키워드7', now(), now(), '3');
INSERT INTO `kcag`.`keyword` (`content`, `created_at`, `updated_at`, `question_id`) VALUES ('키워드8', now(), now(), '3');
INSERT INTO `kcag`.`keyword` (`content`, `created_at`, `updated_at`, `question_id`) VALUES ('키워드9', now(), now(), '3');