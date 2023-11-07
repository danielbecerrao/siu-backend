import type { MigrationInterface, QueryRunner } from 'typeorm';

export class Subregions11695873608650 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1, 'Abu Dhabi Municipality', 2, 14)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2, 'Al Ain Municipality', 2, 14)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3, 'Al Dhafra', 2, 14)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4, 'Al Fujairah Municipality', 2, 12)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5, 'Dibba Al Fujairah Municipality', 2, 12)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6, 'Dhaid', 2, 11)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7, 'Ajman', 2, 13)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8, 'Khor Fakkan', 2, 11)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9, 'Dibba Al Hesn', 2, 11)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10, 'Kalba', 2, 11)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11, 'Ras Al Khaimah', 2, 9)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12, 'Umm AL Quwain', 2, 8)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13, 'Milehah', 2, 11)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14, 'Al Madam', 2, 11)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (15, 'Sharjah', 2, 11)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (16, 'Al Hamriyah', 2, 11)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (17, 'Manama', 2, 13)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (18, 'Masfout', 2, 13)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (19, 'Al Batayih', 2, 11)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20, 'Dubai', 2, 10)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21, 'Shighnan District', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22, 'Gēlān', 3, 37)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23, 'Arghanj Khwāh', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24, 'Argō', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (25, 'Bahārak', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (26, 'Darāyim', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (27, 'Darwāz-e Bālā', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (28, 'Darwāz-e Pā’īn', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (29, 'Faīẕābād', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30, 'Ishkāshim', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31, 'Jurm', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32, 'Khāsh', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33, 'Khwāhān', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34, 'Kishim', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35, 'Kōhistān', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36, 'Kūf Āb', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37, 'Rāghistān', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38, 'Shahr-e Buzurg', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39, 'Shikī', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (40, 'Shuhadā', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (41, 'Tagāb', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (42, 'Tashkān', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (43, 'Wākhān', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (44, 'Wardūj', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (45, 'Yaftal-e Suflá', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (46, 'Yamgān', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (47, 'Yāwān', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (48, 'Zaybāk', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (49, 'Āb-e Kamarī', 3, 43)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (50, 'Ghōrmāch', 3, 43)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (51, 'Jowand', 3, 43)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (52, 'Muqur', 3, 43)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (53, 'Murghāb', 3, 43)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (54, 'Qādis', 3, 43)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (55, 'Qal‘ah-ye Now', 3, 43)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (56, 'Andarāb', 3, 42)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (57, 'Baghlān-e Jadīd', 3, 42)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (58, 'Būrkah', 3, 42)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (59, 'Dahanah-ye Ghōrī', 3, 42)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (60, 'Deh-e Şalāḩ', 3, 42)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (61, 'Dōshī', 3, 42)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (62, 'Firing wa Ghārū', 3, 42)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (63, 'Guz̄argāh-e Nūr', 3, 42)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (64, 'Khinjān', 3, 42)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (65, 'Khōst wa Firing', 3, 42)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (66, 'Khwājah Hijrān', 3, 42)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (67, 'Nahrīn', 3, 42)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (68, 'Pul-e Ḩişār', 3, 42)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (69, 'Tālah wa Barfak', 3, 42)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (70, 'Kahmard', 3, 40)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (71, 'Panjāb', 3, 40)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (72, 'Sayghān', 3, 40)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (73, 'Waras̄', 3, 40)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (74, 'Yakāwlang', 3, 40)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (75, 'Anār Darah', 3, 39)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (76, 'Bakwāh', 3, 39)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (77, 'Bālā Bulūk', 3, 39)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (78, 'Gulistān', 3, 39)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (79, 'Khāk-e Safēd', 3, 39)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (80, 'Lāsh-e Juwayn', 3, 39)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (81, 'Pur Chaman', 3, 39)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (82, 'Pusht-e Rōd', 3, 39)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (83, 'Qal‘ah-ye Kāh', 3, 39)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (84, 'Shayb Kōh', 3, 39)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (85, 'Khān-e Chahār Bāgh', 3, 38)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (86, 'Almār', 3, 38)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (87, 'Andkhōy', 3, 38)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (88, 'Bal Chirāgh', 3, 38)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (89, 'Dowlatābād', 3, 38)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (90, 'Gurzīwān', 3, 38)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (91, 'Khwājah Sabz Pōsh', 3, 38)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (92, 'Kōhistān', 3, 38)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (93, 'Maīmanah', 3, 38)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (94, 'Pas̲h̲tūn Kōṯ', 3, 38)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (95, 'Qaīşār', 3, 38)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (96, 'Qaram Qōl', 3, 38)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (97, 'Qurghān', 3, 38)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (98, 'Shīrīn Tagāb', 3, 38)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (99, 'Āb Band', 3, 37)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (100, 'Ajristān', 3, 37)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (101, 'Andaṟ', 3, 37)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (102, 'Bahrām-e Shahīd', 3, 37)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (103, 'Deh Yak', 3, 37)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (104, 'Ghaznī', 3, 37)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (105, 'Gīrō', 3, 37)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (106, 'Jāghūrī', 3, 37)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (107, 'Khwājah ‘Omarī', 3, 37)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (108, 'Mālistān', 3, 37)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (109, 'Muqêr', 3, 37)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (110, 'Nāwah', 3, 37)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (111, 'Nāwur', 3, 37)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (112, 'Qarah Bāgh', 3, 37)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (113, 'Rashīdān', 3, 37)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (114, 'Wāghaz̧', 3, 37)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (115, 'Walī Muḩammad Shahīd Khūgyāṉī', 3, 37)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (116, 'Zanakhān', 3, 37)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (117, 'Chaghcharān', 3, 36)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (118, 'Chahār Şadah', 3, 36)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (119, 'Dū Laīnah', 3, 36)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (120, 'Dowlatyār', 3, 36)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (121, 'La‘l wa Sar Jangal', 3, 36)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (122, 'Pasāband', 3, 36)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (123, 'Sāghar', 3, 36)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (124, 'Shahrak', 3, 36)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (125, 'Taywarah', 3, 36)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (126, 'Tūlak', 3, 36)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (127, 'Bāghrān', 3, 35)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (128, 'Dīshū', 3, 35)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (129, 'Kajakī', 3, 35)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (130, 'Lashkar Gāh', 3, 35)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (131, 'Mūsá Qal‘ah', 3, 35)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (132, 'Nād ‘Alī', 3, 35)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (133, 'Nahr-e Sarāj', 3, 35)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (134, 'Nāwah-ye Bārakzaī', 3, 35)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (135, 'Rēg-e Khān Neshīn', 3, 35)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (136, 'Sangīn', 3, 35)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (137, 'Wāshēr', 3, 35)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (138, 'Adraskan', 3, 34)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (139, 'Chisht-e Sharīf', 3, 34)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (140, 'Farsī', 3, 34)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (141, 'Ghōriyān', 3, 34)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (142, 'Gulrān', 3, 34)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (143, 'Injīl', 3, 34)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (144, 'Karukh', 3, 34)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (145, 'Kuhsān', 3, 34)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (146, 'Kushk', 3, 34)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (147, 'Kushk-e Kuhnah', 3, 34)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (148, 'Guz̄arah', 3, 34)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (149, 'Ōbêh', 3, 34)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (150, 'Pas̲h̲tūn Zarghūn', 3, 34)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (151, 'Shīnḏanḏ', 3, 34)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (152, 'Zindah Jān', 3, 34)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (153, 'Bagrāmī', 3, 32)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (154, 'Chahār Āsyāb', 3, 32)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (155, 'Deh-e Sabz', 3, 32)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (156, 'Farzah', 3, 32)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (157, 'Gul Darah', 3, 32)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (158, 'Istālif', 3, 32)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (159, 'Kalakān', 3, 32)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (160, 'Khāk-e Jabār', 3, 32)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (161, 'Mīr Bachah Kōṯ', 3, 32)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (162, 'Mūsahī', 3, 32)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (163, 'Paghmān', 3, 32)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (164, 'Qarah Bāgh', 3, 32)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (165, 'Shakar Darah', 3, 32)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (166, 'Alah Sāy', 3, 30)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (167, 'Ḩişah-ye Awal-e Kōhistān', 3, 30)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (168, 'Ḩişah-ye Duwum-e Kōhistān', 3, 30)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (169, 'Kōh Band', 3, 30)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (170, 'Maḩmūd-e Rāqī', 3, 30)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (171, 'Nijrāb', 3, 30)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (172, 'Tagāb', 3, 30)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (173, 'Shāh Walī Kōṯ', 3, 31)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (174, 'Azrah', 3, 26)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (175, 'Barakī Barak', 3, 26)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (176, 'Charkh', 3, 26)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (177, 'Kharwār', 3, 26)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (178, 'Khōshī', 3, 26)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (179, 'Muḩammad Āghah', 3, 26)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (180, 'Pul-e ‘Alam', 3, 26)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (181, 'Achīn', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (182, 'Batī Kōṯ', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (183, 'Bihsūd', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (184, 'Chaparhār', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (185, 'Darah-ye Nūr', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (186, 'Deh Bālā', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (187, 'Dur Bābā', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (188, 'Gōshtah', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (189, 'Ḩişārak', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (190, 'Jalālābād', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (191, 'Kāmah', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (192, 'Khūgyāṉī', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (193, 'Kōṯ', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (194, 'Kūz Kunaṟ', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (195, 'La‘lpūr', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (196, 'Mohmand Darah', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (197, 'Nāziyān', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (198, 'Pachīr wa Āgām', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (199, 'Rōdāt', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (200, 'Shērzād', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (201, 'Shīnwār', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (202, 'Surkh Rōd', 3, 25)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (203, 'Chahār Burjak', 3, 24)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (204, 'Kang', 3, 24)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (205, 'Khāsh Rōd', 3, 24)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (206, 'Zaranj', 3, 24)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (207, 'Arghandāb', 3, 31)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (208, 'Arghistān', 3, 31)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (209, 'Dāmān', 3, 31)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (210, 'Ghōrak', 3, 31)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (211, 'Khākrēz', 3, 31)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (212, 'Ma‘rūf', 3, 31)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (213, 'Maywand', 3, 31)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (214, 'Myā Neshīn', 3, 31)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (215, 'Nēsh', 3, 31)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (216, 'Panjwā’ī', 3, 31)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (217, 'Rēgistān', 3, 31)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (218, 'Shōrābak', 3, 31)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (219, 'Spīn Bōldak', 3, 31)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (220, 'Zhaṟêy', 3, 31)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (221, '‘Alīābād', 3, 28)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (222, 'Dasht-e Archī', 3, 28)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (223, 'Imām Şāḩib', 3, 28)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (224, 'Khānābād', 3, 28)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (225, 'Qal‘ah-ye Zāl', 3, 28)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (226, 'Bahārak', 3, 17)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (227, 'Bangī', 3, 17)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (228, 'Chāh Āb', 3, 17)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (229, 'Chāl', 3, 17)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (230, 'Darqad', 3, 17)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (231, 'Dasht-e Qal‘ah', 3, 17)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (232, 'Farkhār', 3, 17)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (233, 'Hazār Sumūch', 3, 17)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (234, 'Ishkamish', 3, 17)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (235, 'Kalafgān', 3, 17)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (236, 'Khwājah Bahāwuddīn', 3, 17)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (237, 'Khwājah Ghār', 3, 17)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (238, 'Namak Āb', 3, 17)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (239, 'Rustāq', 3, 17)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (240, 'Tāluqān', 3, 17)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (241, 'Warsaj', 3, 17)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (242, 'Yangī Qal‘ah', 3, 17)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (243, 'Chak-e Wardak', 3, 16)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (244, 'Ḩişah-ye Awal-e Bihsūd', 3, 16)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (245, 'Jaghatū', 3, 16)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (246, 'Jalrayz', 3, 16)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (247, 'Maīdān Shahr', 3, 16)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (248, 'Sayyidābād', 3, 16)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (249, 'Arghandāb', 3, 15)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (250, 'Aṯghar', 3, 15)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (251, 'Dāychōpān', 3, 15)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (252, 'Kākar', 3, 15)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (253, 'Mīzān', 3, 15)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (254, 'Now Bahār', 3, 15)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (255, 'Shāh Jōy', 3, 15)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (256, 'Shamulzaī', 3, 15)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (257, 'Shīnkaī', 3, 15)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (258, 'Tarnêk wa Jaldak', 3, 15)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (259, 'Bêrmal', 3, 21)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (260, 'Ḏīlah', 3, 21)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (261, 'Giyān', 3, 21)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (262, 'Gōmal', 3, 21)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (263, 'Jānī Khēl', 3, 21)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (264, 'Mutā Khān', 3, 21)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (265, 'Nīkêh', 3, 21)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (266, 'Ōmnah', 3, 21)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (267, 'Urgun District', 3, 21)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (268, 'Sar Rowẕah', 3, 21)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (269, 'Saṟōbī', 3, 21)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (270, 'Sharan', 3, 21)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (271, 'Têrwō', 3, 21)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (272, 'Wāzah Khwāh', 3, 21)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (273, 'Wuṟ Mamay', 3, 21)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (274, 'Yaḩyá Khēl', 3, 21)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (275, 'Yōsuf Khēl', 3, 21)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (276, 'Zarghūn Shahr', 3, 21)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (277, 'Zīṟūk', 3, 21)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (278, 'Chahār Bōlak', 3, 41)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (279, 'Chahār Kent', 3, 41)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (280, 'Chimtāl', 3, 41)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (281, 'Dehdādī', 3, 41)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (282, 'Dowlatābād', 3, 41)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (283, 'Kaldār', 3, 41)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (284, 'Khulm', 3, 41)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (285, 'Kishindeh', 3, 41)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (286, 'Mārmul', 3, 41)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (287, 'Shōr Tepah', 3, 41)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (288, 'Zārī', 3, 41)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (289, 'Āqchah', 3, 33)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (290, 'Darzāb', 3, 33)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (291, 'Faīẕābād', 3, 33)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (292, 'Khamyāb', 3, 33)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (293, 'Khānaqāh', 3, 33)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (294, 'Khwājah Dū Kōh', 3, 33)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (295, 'Mardīān', 3, 33)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (296, 'Mingajik', 3, 33)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (297, 'Qarqīn', 3, 33)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (298, 'Qūsh Tepah', 3, 33)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (299, 'Shibirghān', 3, 33)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (300, 'Aībak', 3, 19)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (301, 'Darah-ye Şūf-e Bālā', 3, 19)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (302, 'Darah-ye Şūf-e Pā’īn', 3, 19)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (303, 'Fayrōz Nakhchīr', 3, 19)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (304, 'Ḩaẕrat-e Sulţān', 3, 19)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (305, 'Khuram wa Sār Bāgh', 3, 19)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (306, 'Rūy Dūāb', 3, 19)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (307, 'Balkhāb', 3, 18)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (308, 'Gōsfandī', 3, 18)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (309, 'Kōhistānāt', 3, 18)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (310, 'Sangchārak', 3, 18)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (311, 'Sar-e Pul', 3, 18)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (312, 'Şayād', 3, 18)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (313, 'Sōzmah Qal‘ah', 3, 18)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (314, 'Asadābād', 3, 29)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (315, 'Bar Kunaṟ', 3, 29)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (316, 'Chapah Darah', 3, 29)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (317, 'Tsowkêy', 3, 29)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (318, 'Dāngām', 3, 29)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (319, 'Darah-ye Pēch', 3, 29)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (320, 'Ghāzīābād', 3, 29)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (321, 'Khāş Kunaṟ', 3, 29)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (322, 'Marawarah', 3, 29)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (323, 'Narang', 3, 29)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (324, 'Nāṟay', 3, 29)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (325, 'Nūrgal', 3, 29)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (326, 'Shīgal wa Shêltan', 3, 29)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (327, 'Wuṯahpūr', 3, 29)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (328, '‘Alīngār', 3, 27)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (329, '‘Alīsheng', 3, 27)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (330, 'Dowlat Shāh', 3, 27)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (331, 'Mehtar Lām', 3, 27)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (332, 'Qarghah’ī', 3, 27)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (333, 'Aḩmadābād', 3, 22)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (334, 'Tsamkanī', 3, 22)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (335, 'Ḏanḏ Paṯān', 3, 22)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (336, 'Gardez', 3, 22)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (337, 'Jājī', 3, 22)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (338, 'Jānī Khēl', 3, 22)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (339, 'Lajah Aḩmad Khēl', 3, 22)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (340, 'Sayyid Karam', 3, 22)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (341, 'Shwāk', 3, 22)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (342, 'Dzadrān', 3, 22)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (343, 'Zurmat', 3, 22)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (344, 'Bāk', 3, 45)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (345, 'Gurbuz', 3, 45)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (346, 'Jājī Maīdān', 3, 45)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (347, 'Khōst', 3, 45)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (348, 'Mandūzaī', 3, 45)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (349, 'Mūsá Khēl', 3, 45)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (350, 'Nādir Shāh Kōṯ', 3, 45)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (351, 'Qalandar', 3, 45)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (352, 'Şabarī', 3, 45)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (353, 'Shamul', 3, 45)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (354, 'Spērah', 3, 45)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (355, 'Têrayzaī', 3, 45)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (356, 'Barg-e Matāl', 3, 46)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (357, 'Dū Āb', 3, 46)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (358, 'Kāmdēsh', 3, 46)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (359, 'Mandōl', 3, 46)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (360, 'Nūrgarām', 3, 46)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (361, 'Pārūn', 3, 46)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (362, 'Wāmā', 3, 46)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (363, 'Wāygal', 3, 46)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (364, 'Chōrah', 3, 23)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (365, 'Deh Rāwud', 3, 23)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (366, 'Khāş Uruzgān', 3, 23)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (367, 'Shahīd-e Ḩasās', 3, 23)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (368, 'Tarīn Kōṯ', 3, 23)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (369, 'Bagrām', 3, 20)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (370, 'Chārīkār', 3, 20)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (371, 'Jabal us Sarāj', 3, 20)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (372, 'Kōh-e Şāfī', 3, 20)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (373, 'Sālang', 3, 20)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (374, 'Sayyid Khēl', 3, 20)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (375, 'Shaykh ‘Alī', 3, 20)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (376, 'Shīnwārī', 3, 20)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (377, 'Siyāhgird Ghōrband', 3, 20)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (378, 'Gaytī', 3, 47)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (379, 'Gīzāb', 3, 47)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (380, 'Ishtarlay', 3, 47)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (381, 'Kajrān', 3, 47)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (382, 'Khadīr', 3, 47)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (383, 'Mīr Āmōr', 3, 47)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (384, 'Nīlī', 3, 47)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (385, 'Sang-e Takht', 3, 47)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (386, 'Shahristān', 3, 47)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (387, '‘Unābah', 3, 48)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (388, 'Bāzārak', 3, 48)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (389, 'Darah', 3, 48)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (390, 'Khinj', 3, 48)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (391, 'Parīān', 3, 48)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (392, 'Rukhah', 3, 48)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (393, 'Shutul', 3, 48)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (394, 'Kabul', 3, 32)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (395, 'Kunduz', 3, 28)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (396, 'Chakhansur', 3, 24)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (397, 'Farah', 3, 39)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (398, 'Bamyan', 3, 40)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (399, 'Puli Khumri', 3, 42)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (400, 'Surobi', 3, 32)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (401, 'Qalāt', 3, 15)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (402, 'Kuran Wa Munjan', 3, 44)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (403, 'Shibar', 3, 40)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (404, 'Surkhi Parsa', 3, 20)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (405, 'Garmsīr', 3, 35)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (406, 'Nahri Shahi', 3, 41)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (407, 'Sholgara', 3, 41)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (408, 'Day Mirdad', 3, 16)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (409, 'Chahar Dara', 3, 28)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (410, 'Tani', 3, 45)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (411, 'Sirkanay', 3, 29)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (412, 'Markazi Bihsud', 3, 16)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (413, 'Nirkh', 3, 16)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (414, 'Mazār-e Sharīf', 3, 41)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (415, 'Herat District', 3, 34)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (416, 'Naw Zad', 3, 35)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (417, 'Kandahar District', 3, 31)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (418, 'Balkh District', 3, 41)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (419, 'Bashkia Berat', 6, 71)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (420, 'Bashkia Kuçovë', 6, 71)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (421, 'Bashkia Poliçan', 6, 71)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (422, 'Bashkia Skrapar', 6, 71)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (423, 'Bashkia Ura Vajgurore', 6, 71)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (424, 'Bashkia Bulqizë', 6, 72)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (425, 'Bashkia Dibër', 6, 72)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (426, 'Bashkia Klos', 6, 72)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (427, 'Bashkia Mat', 6, 72)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (428, 'Bashkia Durrës', 6, 77)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (429, 'Bashkia Krujë', 6, 77)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (430, 'Bashkia Shijak', 6, 77)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (431, 'Bashkia Elbasan', 6, 73)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (432, 'Bashkia Belsh', 6, 73)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (433, 'Bashkia Cërrik', 6, 73)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (434, 'Bashkia Gramsh', 6, 73)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (435, 'Bashkia Librazhd', 6, 73)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (436, 'Bashkia Peqin', 6, 73)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (437, 'Bashkia Prrenjas', 6, 73)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (438, 'Bashkia Divjakë', 6, 78)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (439, 'Bashkia Fier', 6, 78)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (440, 'Bashkia Lushnje', 6, 78)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (441, 'Bashkia Mallakastër', 6, 78)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (442, 'Bashkia Patos', 6, 78)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (443, 'Bashkia Roskovec', 6, 78)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (444, 'Bashkia Dropull', 6, 74)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (445, 'Bashkia Gjirokastër', 6, 74)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (446, 'Bashkia Kelcyrë', 6, 74)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (447, 'Bashkia Libohovë', 6, 74)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (448, 'Bashkia Memaliaj', 6, 74)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (449, 'Bashkia Përmet', 6, 74)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (450, 'Bashkia Tepelenë', 6, 74)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (451, 'Bashkia Devoll', 6, 75)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (452, 'Bashkia Kolonjë', 6, 75)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (453, 'Bashkia Korçë', 6, 75)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (454, 'Bashkia Maliq', 6, 75)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (455, 'Bashkia Pogradec', 6, 75)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (456, 'Bashkia Pustec', 6, 75)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (457, 'Bashkia Has', 6, 76)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (458, 'Bashkia Kukës', 6, 76)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (459, 'Bashkia Tropojë', 6, 76)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (460, 'Bashkia Kurbin', 6, 79)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (461, 'Bashkia Lezhë', 6, 79)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (462, 'Bashkia Mirditë', 6, 79)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (463, 'Bashkia Fushë Arrës', 6, 80)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (464, 'Bashkia Malësi e Madhe', 6, 80)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (465, 'Bashkia Pukë', 6, 80)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (466, 'Bashkia Shkodër', 6, 80)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (467, 'Bashkia Vau i Dejës', 6, 80)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (468, 'Bashkia Kamëz', 6, 81)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (469, 'Bashkia Kavajë', 6, 81)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (470, 'Bashkia Rrogozhinë', 6, 81)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (471, 'Bashkia Tiranë', 6, 81)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (472, 'Bashkia Vorë', 6, 81)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (473, 'Bashkia Delvinë', 6, 82)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (474, 'Bashkia Finiq', 6, 82)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (475, 'Bashkia Himarë', 6, 82)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (476, 'Bashkia Konispol', 6, 82)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (477, 'Bashkia Sarandë', 6, 82)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (478, 'Bashkia Selenicë', 6, 82)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (479, 'Bashkia Vlorë', 6, 82)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (480, 'Sisian', 7, 84)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (481, 'Vayk''i Shrjan', 7, 85)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (482, 'Spandaryanskiy Rayon', 7, 86)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (483, 'Arabkir', 7, 86)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (484, 'Shaumyanskiy Rayon', 7, 86)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (485, 'Ordzhonikidzevskiy Rayon', 7, 86)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (486, 'Martuni', 7, 89)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (487, 'Leninskiy Rayon', 7, 86)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (488, 'Imeni Dvadtsati Shesti Komissarov Rayon', 7, 86)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (489, 'Achtarak', 7, 87)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (490, 'Saurimo', 8, 94)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (491, 'Lucapa', 8, 95)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (492, 'Chitato', 8, 95)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (493, 'Cambulo', 8, 95)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (494, 'Rivungo', 8, 97)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (495, 'Muconda', 8, 94)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (496, 'Luena', 8, 96)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (497, 'Mavinga', 8, 97)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (498, 'Cameia', 8, 96)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (499, 'Bundas', 8, 96)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (500, 'Luau', 8, 96)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (501, 'Luacano', 8, 96)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (502, 'Léua', 8, 96)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (503, 'Dirico', 8, 97)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (504, 'Dala', 8, 94)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (505, 'Camanongue', 8, 96)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (506, 'Alto Zambeze', 8, 96)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (507, 'Xá-Muteba', 8, 95)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (508, 'Viana', 8, 101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (509, 'Uige Municipality', 8, 99)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (510, 'Tomboco', 8, 98)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (511, 'Soyo', 8, 98)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (512, 'Songo', 8, 99)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (513, 'Sanza Pombo', 8, 99)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (514, 'Santa Cruz', 8, 99)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (515, 'Quitexe Municipality', 8, 99)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (516, 'Quimbele', 8, 99)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (517, 'Quiculungo', 8, 102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (518, 'Quissama', 8, 101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (519, 'Quela', 8, 100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (520, 'Puri', 8, 99)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (521, 'Município Pango Aluquém', 8, 104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (522, 'Nzeto', 8, 98)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (523, 'Nóqui', 8, 98)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (524, 'Negage Municipality', 8, 99)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (525, 'Nambuangongo Municipality', 8, 104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (526, 'Caculama', 8, 100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (527, 'Mucaba', 8, 99)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (528, 'Mbanza Congo', 8, 98)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (529, 'Massango', 8, 100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (530, 'Marimba', 8, 100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (531, 'Maquela do Zombo', 8, 99)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (532, 'Malanje Municipality', 8, 100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (533, 'Lucala', 8, 102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (534, 'Lubalo', 8, 95)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (535, 'Luanda Municipality', 8, 101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (536, 'Cacongo', 8, 103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (537, 'Cunda-Dia-Baze', 8, 100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (538, 'Kiwaba Nzoji', 8, 100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (539, 'Icolo e Bengo', 8, 101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (540, 'Ngonguembo', 8, 102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (541, 'Golungo Alto', 8, 102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (542, 'Dembos', 8, 104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (543, 'Dande Municipality', 8, 104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (544, 'Damba', 8, 99)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (545, 'Cuimba', 8, 98)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (546, 'Cuilo', 8, 95)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (547, 'Cuango', 8, 95)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (548, 'Cazengo Municipality', 8, 102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (549, 'Caungula', 8, 95)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (550, 'Capenda Camulemba', 8, 95)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (551, 'Cahombo', 8, 100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (552, 'Cambambe', 8, 102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (553, 'Calandula', 8, 100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (554, 'Cacuso', 8, 100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (555, 'Cacuaco Municipality', 8, 101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (556, 'Cabinda', 8, 103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (557, 'Bungo', 8, 99)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (558, 'Bula Atumba', 8, 104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (559, 'Buengas', 8, 99)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (560, 'Buco Zau', 8, 103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (561, 'Bolongongo', 8, 102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (562, 'Município Bembe', 8, 99)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (563, 'Belize', 8, 103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (564, 'Banga', 8, 102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (565, 'Ambuila Municipality', 8, 99)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (566, 'Ambriz', 8, 104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (567, 'Ambaca', 8, 102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (568, 'Cangola', 8, 99)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (569, 'Cela', 8, 109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (570, 'Virei', 8, 105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (571, 'Ucuma', 8, 107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (572, 'Tômbwa', 8, 105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (573, 'Chinjenje', 8, 107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (574, 'Chicala Cholohanga', 8, 107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (575, 'Sumbe', 8, 109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (576, 'Seles', 8, 109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (577, 'Quirima', 8, 100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (578, 'Quipungo', 8, 106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (579, 'Quilengues', 8, 106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (580, 'Quilenda', 8, 109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (581, 'Quibala', 8, 109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (582, 'Porto Amboim', 8, 109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (583, 'Ombadja', 8, 108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (584, 'Nharea', 8, 110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (585, 'Nancova', 8, 97)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (586, 'Namibe', 8, 105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (587, 'Namacunde', 8, 108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (588, 'Mussende', 8, 109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (589, 'Mungo', 8, 107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (590, 'Menongue', 8, 97)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (591, 'Matala', 8, 106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (592, 'Luquembo', 8, 100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (593, 'Luchazes', 8, 96)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (594, 'Lubango', 8, 106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (595, 'Longonjo', 8, 107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (596, 'Londuimbali', 8, 107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (597, 'Lobito', 8, 111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (598, 'Libolo', 8, 109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (599, 'Cuvango', 8, 106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (600, 'Cuito', 8, 110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (601, 'Cachiungo', 8, 107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (602, 'Jamba', 8, 106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (603, 'Humpata', 8, 106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (604, 'Huambo', 8, 107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (605, 'Ganda', 8, 111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (606, 'Ecunha', 8, 107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (607, 'Ebo', 8, 109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (608, 'Cuvelai', 8, 108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (609, 'Curoca', 8, 108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (610, 'Cunhinga', 8, 110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (611, 'Cuito Cuanavale', 8, 97)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (612, 'Cuemba', 8, 110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (613, 'Cuchi', 8, 97)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (614, 'Cubal', 8, 111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (615, 'Cuanhama', 8, 108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (616, 'Cuangar', 8, 97)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (617, 'Conda', 8, 109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (618, 'Chongoroi', 8, 111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (619, 'Chitembo', 8, 110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (620, 'Chipindo', 8, 106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (621, 'Chinguar', 8, 110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (622, 'Chicomba', 8, 106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (623, 'Chibia', 8, 106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (624, 'Gambos', 8, 106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (625, 'Catabola', 8, 110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (626, 'Cassongue', 8, 109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (627, 'Cangandala', 8, 100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (628, 'Cambundi-Catembo', 8, 100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (629, 'Município Camacupa', 8, 110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (630, 'Camacupa', 8, 110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (631, 'Camucuio', 8, 105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (632, 'Caluquembe', 8, 106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (633, 'Calai', 8, 97)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (634, 'Caimbambo', 8, 111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (635, 'Cahama', 8, 108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (636, 'Caconda', 8, 106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (637, 'Cacolo', 8, 94)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (638, 'Caála', 8, 107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (639, 'Bocoio', 8, 111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (640, 'Bibala', 8, 105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (641, 'Benguela', 8, 111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (642, 'Município Balombo', 8, 111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (643, 'Bailundo', 8, 107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (644, 'Baía Farta', 8, 111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (645, 'Andulo', 8, 110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (646, 'Amboim', 8, 109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (647, 'Barkeol', 8, 110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (648, 'Município Cazenga', 8, 101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (649, 'Catumbela', 8, 111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (650, 'Belas', 8, 101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (651, 'Cacula', 8, 106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (652, 'Samba Cajú', 8, 102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (653, 'Partido de Zárate', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (654, 'Departamento de Villaguay', 10, 115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (655, 'Partido de Vicente López', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (656, 'Veinticinco de Mayo', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (657, 'Departamento de Veinticinco de Mayo', 10, 112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (658, 'Departamento de Uruguay', 10, 115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (659, 'Partido de Tres de Febrero', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (660, 'Partido de Tordillo', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (661, 'Partido de Tigre', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (662, 'Departamento de Tapenagá', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (663, 'Partido de Tandil', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (664, 'Departamento de Tala', 10, 115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (665, 'Partido de Suipacha', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (666, 'Departamento de Sauce', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (667, 'Departamento de Sargento Cabral', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (668, 'Partido de San Vicente', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (669, 'Departamento de Santo Tomé', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (670, 'Departamento de San Roque', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (671, 'Partido de San Pedro', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (672, 'Departamento de San Pedro', 10, 112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (673, 'Departamento de San Miguel', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (674, 'Departamento de San Martín', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (675, 'Departamento de San Luis del Palmar', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (676, 'Departamento de San Javier', 10, 121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (677, 'Departamento de San Javier', 10, 112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (678, 'Partido de San Isidro', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (679, 'Departamento de San Ignacio', 10, 112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (680, 'Partido de San Fernando', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (681, 'Departamento de San Fernando', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (682, 'Departamento de San Cosme', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (683, 'Partido de San Cayetano', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (684, 'San Antonio de Areco', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (685, 'Partido de San Andrés de Giles', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (686, 'Partido de Saladillo', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (687, 'Departamento de Saladas', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (688, 'Partido de Roque Pérez', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (689, 'Partido de Rauch', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (690, 'Partido de Quilmes', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (691, 'Departamento del Primero de Mayo', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (692, 'Departamento de Presidencia de la Plaza', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (693, 'Departamento de Pirané', 10, 113)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (694, 'Departamento de Pilcomayo', 10, 113)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (695, 'Partido de Pilar', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (696, 'Departamento de Pilagás', 10, 113)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (697, 'Partido de Pila', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (698, 'Departamento de Patiño', 10, 113)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (699, 'Departamento de Paso de los Libres', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (700, 'Departamento de Paraná', 10, 115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (701, 'Departamento de Oberá', 10, 112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (702, 'Departamento de Nogoyá', 10, 115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (703, 'Partido de Necochea', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (704, 'Partido de Navarro', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (705, 'Partido de Morón', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (706, 'Partido de Moreno', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (707, 'Departamento de Monte Caseros', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (708, 'Departamento de Montecarlo', 10, 112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (709, 'Partido de Monte', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (710, 'Partido de Merlo', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (711, 'Partido de Mercedes', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (712, 'Departamento de Mercedes', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (713, 'Departamento de Mburucuyá', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (714, 'Partido de La Matanza', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (715, 'Partido de Presidente Perón', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (716, 'Partido de Pinamar', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (717, 'Partido de Marcos Paz', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (718, 'Partido de Mar Chiquita', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (719, 'Partido de Maipú', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (720, 'Partido de Magdalena', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (721, 'Partido de Luján', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (722, 'Partido de Lomas de Zamora', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (723, 'Partido de Lobos', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (724, 'Partido de Lobería', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (725, 'Departamento de Libertador General San Martín', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (726, 'Departamento de Libertador General San Martín', 10, 112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (727, 'Departamento de Libertad', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (728, 'Departamento de Leandro N. Alem', 10, 112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (729, 'Departamento de Lavalle', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (730, 'Partido de Las Flores', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (731, 'Partido de La Plata', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (732, 'Departamento de La Paz', 10, 115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (733, 'Partido de Lanús', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (734, 'Departamento de Laishí', 10, 113)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (735, 'Partido de Benito Juárez', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (736, 'Partido de José C. Paz', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (737, 'Departamento de Ituzaingó', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (738, 'Departamento de Itatí', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (739, 'Partido de Punta Indio', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (740, 'Departamento de Iguazú', 10, 112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (741, 'Departamento de Guaraní', 10, 112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (742, 'Departamento de Gualeguaychú', 10, 115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (743, 'Departamento de Gualeguay', 10, 115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (744, 'Departamento de Goya', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (745, 'Partido de General San Martín', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (746, 'Partido de General Rodríguez', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (747, 'Partido de General Pueyrredón', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (748, 'Partido de General Paz', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (749, 'Departamento de General Paz', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (750, 'General Obligado Department', 10, 121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (751, 'Departamento de General Manuel Belgrano', 10, 112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (752, 'Partido de General Lavalle', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (753, 'Partido de General Las Heras', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (754, 'Partido de General Madariaga', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (755, 'Partido de General Guido', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (756, 'Departamento de General Donovan', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (757, 'Partido de General Belgrano', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (758, 'Departamento de General Alvear', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (759, 'Partido de General Alvarado', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (760, 'Departamento de Formosa', 10, 113)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (761, 'Partido de Florencio Varela', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (762, 'Departamento de Feliciano', 10, 115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (763, 'Departamento de Federación', 10, 115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (764, 'Partido de Exaltación de la Cruz', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (765, 'Partido de Esteban Echeverría', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (766, 'Departamento de Esquina', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (767, 'Partido de Escobar', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (768, 'Partido de Ensenada', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (769, 'Departamento de Empedrado', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (770, 'Departamento de Eldorado', 10, 112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (771, 'Partido de Dolores', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (772, 'Departamento de Curuzú Cuatiá', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (773, 'Departamento de Concordia', 10, 115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (774, 'Departamento de Concepción', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (775, 'Departamento de Concepción de la Sierra', 10, 112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (776, 'Departamento de Colón', 10, 115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (777, 'Partido de Chivilcoy', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (778, 'Partido de Chascomús', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (779, 'Partido de Castelli', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (780, 'Partido de Carmen de Areco', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (781, 'Partido de Capitán Sarmiento', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (782, 'Departamento de Capital', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (783, 'Departamento de Capital', 10, 112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (784, 'Partido de Canuelas', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (785, 'Departamento de Candelaria', 10, 112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (786, 'Partido de Campana', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (787, 'Departamento de Cainguás', 10, 112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (788, 'Partido de Brandsen', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (789, 'Departamento de Berón de Astrada', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (790, 'Departamento de Bermejo', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (791, 'Partido de Berisso', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (792, 'Partido de Berazategui', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (793, 'Departamento de Bella Vista', 10, 116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (794, 'Partido de Arrecifes', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (795, 'Partido de Baradero', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (796, 'Partido de Balcarce', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (797, 'Partido de Azul', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (798, 'Partido de Ayacucho', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (799, 'Partido de Avellaneda', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (800, 'Departamento de Apóstoles', 10, 112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (801, 'Partido de Almirante Brown', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (802, 'Departamento de Zonda', 10, 124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (803, 'Departamento de Zapala', 10, 127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (804, 'Departamento de Yaví', 10, 131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (805, 'Partido de Villarino', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (806, 'Departamento de Victoria', 10, 115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (807, 'Departamento de Vera', 10, 121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (808, 'Departamento de General Angel Peñaloza', 10, 129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (809, 'Partido de Veinticinco de Mayo', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (810, 'Departamento de Veinticinco de Mayo', 10, 126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (811, 'Departamento de Veinticinco de Mayo', 10, 124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (812, 'Departamento de Valle Viejo', 10, 135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (813, 'Departamento de Valle Grande', 10, 131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (814, 'Departamento de Valle Fértil', 10, 124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (815, 'Departamento de Valcheta', 10, 126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (816, 'Departamento de Utracán', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (817, 'Departamento de Ushuaia', 10, 119)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (818, 'Departamento de Unión', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (819, 'Departamento de Ullúm', 10, 124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (820, 'Departamento de Tupungato', 10, 128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (821, 'Departamento de Tunuyán', 10, 128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (822, 'Departamento de Tumbaya', 10, 131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (823, 'Departamento de Tulumba', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (824, 'Partido de Tres Arroyos', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (825, 'Partido de Trenque Lauquen', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (826, 'Departamento de Trenel', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (827, 'Departamento de Trancas', 10, 118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (828, 'Departamento de Totoral', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (829, 'Partido de Tornquist', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (830, 'Departamento de Toay', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (831, 'Departamento de Tinogasta', 10, 135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (832, 'Departamento de Tilcara', 10, 131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (833, 'Departamento de Tercero Arriba', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (834, 'Departamento de Telsen', 10, 133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (835, 'Departamento de Tehuelches', 10, 133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (836, 'Partido de Tapalqué', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (837, 'Departamento de Susques', 10, 131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (838, 'Departamento de Sobremonte', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (839, 'Departamento de Silípica', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (840, 'Departamento de Sarmiento', 10, 133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (841, 'Departamento de Sarmiento', 10, 124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (842, 'Departamento de Sarmiento', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (843, 'Departamento de Santa Victoria', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (844, 'Departamento de Santa Rosa', 10, 128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (845, 'Departamento de Santa Rosa', 10, 135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (846, 'Departamento de Santa María', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (847, 'Departamento de Santa María', 10, 135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (848, 'Departamento de Santa Lucía', 10, 124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (849, 'Departamento de Santa Catalina', 10, 131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (850, 'Departamento de Santa Bárbara', 10, 131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (851, 'Departamento de Río Grande', 10, 119)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (852, 'Departamento de San Rafael', 10, 128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (853, 'Departamento de San Pedro', 10, 131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (854, 'Partido de San Nicolás', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (855, 'Departamento de San Martín', 10, 128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (856, 'Departamento de Libertador General San Martín', 10, 123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (857, 'Departamento de San Martín', 10, 121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (858, 'Departamento de San Martín', 10, 124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (859, 'Departamento de San Martín', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (860, 'Departamento de San Lorenzo', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (861, 'Departamento de San Lorenzo', 10, 121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (862, 'Departamento de San Justo', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (863, 'Departamento de San Justo', 10, 121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (864, 'San Jerónimo Department', 10, 121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (865, 'Departamento de San Javier', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (866, 'Departamento de San Cristóbal', 10, 121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (867, 'Departamento de San Carlos', 10, 128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (868, 'Departamento de San Carlos', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (869, 'Departamento de San Blas de los Sauces', 10, 129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (870, 'Departamento de San Antonio', 10, 126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (871, 'Departamento de San Antonio', 10, 131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (872, 'Departamento de San Alberto', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (873, 'Departamento de Sanagasta', 10, 129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (874, 'Partido de Salto', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (875, 'Partido de Salliqueló', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (876, 'Departamento de Salavina', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (877, 'Partido de Saavedra', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (878, 'Departamento de Rosario de Lerma', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (879, 'Departamento de Rosario de la Frontera', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (880, 'Rosario Department', 10, 121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (881, 'Partido de Rojas', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (882, 'Departamento de Robles', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (883, 'Partido de Rivadavia', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (884, 'Departamento de General Juan F. Quiroga', 10, 129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (885, 'Departamento de Rivadavia', 10, 124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (886, 'Departamento de Rivadavia', 10, 128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (887, 'Departamento de Rivadavia', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (888, 'Departamento de Rivadavia', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (889, 'Departamento de Río Senguerr', 10, 133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (890, 'Departamento de Río Segundo', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (891, 'Departamento de Río Seco', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (892, 'Departamento de Río Primero', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (893, 'Departamento de Río Hondo', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (894, 'Departamento de Río Cuarto', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (895, 'Departamento de Río Chico', 10, 122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (896, 'Departamento de Río Chico', 10, 118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (897, 'Departamento de Rinconada', 10, 131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (898, 'Departamento de Realicó', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (899, 'Departamento de Rawson', 10, 133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (900, 'Departamento de Rawson', 10, 124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (901, 'Departamento de Rancul', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (902, 'Departamento de Ramón Lista', 10, 113)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (903, 'Partido de Ramallo', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (904, 'Departamento de Quitilipi', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (905, 'Departamento de Quemú Quemú', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (906, 'Departamento de Quebrachos', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (907, 'Departamento de Punilla', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (908, 'Departamento de Puelén', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (909, 'Partido de Puan', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (910, 'Coronel Pringles', 10, 123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (911, 'Departamento de Presidente Roque Sáenz Peña', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (912, 'Departamento de Pomán', 10, 135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (913, 'Departamento de Pocito', 10, 124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (914, 'Departamento de Pocho', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (915, 'Departamento de Pilcaniyeu', 10, 126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (916, 'Departamento de Picún Leufú', 10, 127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (917, 'Departamento de Picunches', 10, 127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (918, 'Departamento de Pichi Mahuida', 10, 126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (919, 'Partido de Pergamino', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (920, 'Partido de Pellegrini', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (921, 'Departamento de Pellegrini', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (922, 'Departamento de Pehuenches', 10, 127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (923, 'Partido de Pehuajó', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (924, 'Partido de Patagones', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (925, 'Departamento de Paso de Indios', 10, 133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (926, 'Departamento de Paclín', 10, 135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (927, 'Departamento de Orán', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (928, 'Partido de Olavarría', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (929, 'Departamento de Ojo de Agua', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (930, 'Departamento de O’Higgins', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (931, 'Partido de Nueve de Julio', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (932, 'Departamento de Nueve de Julio', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (933, 'Departamento de Nueve de Julio', 10, 126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (934, 'Departamento de Nueve de Julio', 10, 124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (935, 'Departamento de Nueve de Julio', 10, 121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (936, 'Departamento de Ñorquincó', 10, 126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (937, 'Departamento de Ñorquín', 10, 127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (938, 'Departamento de Moreno', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (939, 'Departamento de Monteros', 10, 118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (940, 'Departamento de Molinos', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (941, 'Departamento de Mitre', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (942, 'Departamento de Minas', 10, 127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (943, 'Departamento de Minas', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (944, 'Departamento de Metán', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (945, 'Departamento de Mayor Luis J. Fontana', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (946, 'Departamento de Juan F. Ibarra', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (947, 'Departamento de Matacos', 10, 113)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (948, 'Departamento de Mártires', 10, 133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (949, 'Departamento de Marcos Juárez', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (950, 'Departamento de Maracó', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (951, 'Departamento de Malargüe', 10, 128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (952, 'Departamento de Maipú', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (953, 'Departamento de Maipú', 10, 128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (954, 'Departamento de Magallanes', 10, 122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (955, 'Departamento de Luján', 10, 128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (956, 'Departamento de Los Lagos', 10, 127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (957, 'Departamento de Los Andes', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (958, 'Departamento de Loreto', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (959, 'Departamento de Loncopué', 10, 127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (960, 'Partido de Lincoln', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (961, 'Departamento de Limay Mahuida', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (962, 'Departamento de Lihuel-Calel', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (963, 'Departamento de Loventué', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (964, 'Departamento de Ledesma', 10, 131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (965, 'Partido de Leandro N. Alem', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (966, 'Departamento de Leales', 10, 118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (967, 'Departamento de La Viña', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (968, 'Departamento de Lavalle', 10, 128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (969, 'Departamento de Las Heras', 10, 128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (970, 'Las Colonias Department', 10, 121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (971, 'Partido de Laprida', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (972, 'Departamento de La Poma', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (973, 'Departamento de La Paz', 10, 128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (974, 'Departamento de La Paz', 10, 135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (975, 'Departamento de Languiñeo', 10, 133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (976, 'Departamento de Lago Buenos Aires', 10, 122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (977, 'Departamento de Lago Argentino', 10, 122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (978, 'Departamento de Lácar', 10, 127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (979, 'Departamento de La Capital', 10, 121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (980, 'Partido de Junín', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (981, 'Departamento de Junín', 10, 128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (982, 'Departamento de Junín', 10, 123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (983, 'Departamento de Juárez Celman', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (984, 'Departamento de Jiménez', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (985, 'Departamento de Jáchal', 10, 124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (986, 'Departamento de Ischilín', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (987, 'Departamento de Iruya', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (988, 'Iriondo Department', 10, 121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (989, 'Departamento de Independencia', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (990, 'Departamento de Independencia', 10, 129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (991, 'Departamento de Iglesia', 10, 124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (992, 'Departamento de Humahuaca', 10, 131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (993, 'Departamento de Huiliches', 10, 127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (994, 'Departamento de Hucal', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (995, 'Partido de Hipólito Yrigoyen', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (996, 'Departamento de Güer Aike', 10, 122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (997, 'Departamento de Guaymallén', 10, 128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (998, 'Departamento de Guatraché', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (999, 'Departamento de Guasayán', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1000, 'Partido de Guaminí', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1001, 'Departamento de Guachipas', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1002, 'Departamento de Graneros', 10, 118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1003, 'Partido de Adolfo González Chaves', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1004, 'Departamento de Godoy Cruz', 10, 128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1005, 'Departamento de Gobernador Vicente Dupuy', 10, 123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1006, 'Departamento de Chamical', 10, 129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1007, 'Partido de General Villegas', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1008, 'Partido de General Viamonte', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1009, 'Departamento de General Taboada', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1010, 'Departamento de Vinchina', 10, 129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1011, 'Departamento de General San Martín', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1012, 'Departamento de General San Martín', 10, 129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1013, 'Departamento de General Roca', 10, 126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1014, 'Departamento de General Roca', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1015, 'Departamento de Rosario Vera Peñaloza', 10, 129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1016, 'Partido de General Pinto', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1017, 'Departamento de General Pedernera', 10, 123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1018, 'Departamento de General Ocampo', 10, 129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1019, 'Departamento de General Güemes', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1020, 'General López Department', 10, 121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1021, 'Departamento de Coronel Felipe Varela', 10, 129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1022, 'Partido de General La Madrid', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1023, 'Departamento de General Lamadrid', 10, 129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1024, 'Departamento de General José de San Martín', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1025, 'Departamento de General Güemes', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1026, 'Departamento de General Belgrano', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1027, 'Departamento de General Belgrano', 10, 129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1028, 'Partido de General Arenales', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1029, 'Partido de General Alvear', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1030, 'Departamento de General Alvear', 10, 128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1031, 'Departamento de Gastre', 10, 133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1032, 'Garay Department', 10, 121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1033, 'Departamento de Gaimán', 10, 133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1034, 'Departamento de Futaleufú', 10, 133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1035, 'Departamento de Fray Mamerto Esquiú', 10, 135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1036, 'Fray Justo Santa María de Oro', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1037, 'Departamento de Florentino Ameghino', 10, 133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1038, 'Departamento de Figueroa', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1039, 'Departamento de Famatina', 10, 129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1040, 'Departamento de Famaillá', 10, 118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1041, 'Departamento de Escalante', 10, 133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1042, 'Departamento de El Cuy', 10, 126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1043, 'Departamento de El Carmen', 10, 131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1044, 'Departamento de El Alto', 10, 135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1045, 'Departamento de Doce de Octubre', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1046, 'Departamento de Diamante', 10, 115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1047, 'Departamento de Deseado', 10, 122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1048, 'Departamento de Cushamen', 10, 133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1049, 'Departamento de Curacó', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1050, 'Departamento de Cruz del Eje', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1051, 'Departamento de Cruz Alta', 10, 118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1052, 'Departamento de Corpen Aike', 10, 122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1053, 'Partido de Coronel Suárez', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1054, 'Partido de Coronel Pringles', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1055, 'Partido de Coronel Dorrego', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1056, 'Partido de Coronel Rosales', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1057, 'Departamento de Copo', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1058, 'Departamento de Constitución', 10, 121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1059, 'Departamento de Conhelo', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1060, 'Departamento de Confluencia', 10, 127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1061, 'Departamento de Conesa', 10, 126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1062, 'Departamento de Comandante Fernández', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1063, 'Partido de Colón', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1064, 'Departamento de Colón', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1065, 'Departamento de Collón-Curá', 10, 127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1066, 'Departamento de Cochinoca', 10, 131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1067, 'Departamento de Choya', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1068, 'Departamento de Chos-Malal', 10, 127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1069, 'Departamento de Chimbas', 10, 124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1070, 'Departamento de Chilecito', 10, 129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1071, 'Departamento de Chicoana', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1072, 'Departamento de Chicligasta', 10, 118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1073, 'Departamento de Chical-Có', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1074, 'Departamento de Chapaleufú', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1075, 'Departamento de Chalileo', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1076, 'Partido de Chacabuco', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1077, 'Chacabuco', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1078, 'Departamento de Chacabuco', 10, 123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1079, 'Departamento de Cerrillos', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1080, 'Departamento de Caucete', 10, 124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1081, 'Departamento de Catriló', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1082, 'Departamento de Catán-Lil', 10, 127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1083, 'Departamento de Castro Barros', 10, 129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1084, 'Departamento de Castellanos', 10, 121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1085, 'Partido de Daireaux', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1086, 'Departamento de Caseros', 10, 121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1087, 'Partido de Carlos Tejedor', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1088, 'Partido de Carlos Casares', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1089, 'Departamento de Capital', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1090, 'Departamento de Capital', 10, 128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1091, 'Departamento de Capital', 10, 124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1092, 'Departamento de Capital', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1093, 'Departamento de Capital', 10, 129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1094, 'Departamento de Capital', 10, 135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1095, 'Departamento de Capital', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1096, 'Departamento de Capital', 10, 118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1097, 'Departamento Capital', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1098, 'Departamento de Doctor Manuel Belgrano', 10, 131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1099, 'Departamento de Capayán', 10, 135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1100, 'Departamento de Calingasta', 10, 124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1101, 'Departamento de Caleu-Caleu', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1102, 'La Caldera', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1103, 'Departamento de Calamuchita', 10, 132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1104, 'Cafayate', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1105, 'Departamento de Cachí', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1106, 'Departamento de Burruyacú', 10, 118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1107, 'Partido de Bragado', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1108, 'Partido de Bolívar', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1109, 'Departamento de Biedma', 10, 133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1110, 'Departamento de Bermejo', 10, 113)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1111, 'Departamento de Belgrano', 10, 123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1112, 'Departamento de Belgrano', 10, 121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1113, 'Departamento de Belgrano', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1114, 'Departamento de Belén', 10, 135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1115, 'Departamento de Bariloche', 10, 126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1116, 'Departamento de Banda', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1117, 'Partido de Monte Hermoso', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1118, 'Partido de Bahía Blanca', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1119, 'Departamento de Ayacucho', 10, 123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1120, 'Departamento de Avellaneda', 10, 126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1121, 'Departamento de Avellaneda', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1122, 'Departamento de Atreucó', 10, 130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1123, 'Departamento de Atamisqui', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1124, 'Departamento de Arauco', 10, 129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1125, 'Departamento de Antofagasta de la Sierra', 10, 135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1126, 'Departamento de Anta', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1127, 'Departamento de Angaco', 10, 124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1128, 'Departamento de Añelo', 10, 127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1129, 'Departamento de Andalgalá', 10, 135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1130, 'Departamento de Ancasti', 10, 135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1131, 'Departamento de Ambato', 10, 135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1132, 'Departamento de Aluminé', 10, 127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1133, 'Departamento de Almirante Brown', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1134, 'Partido de Alberti', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1135, 'Departamento de Alberdi', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1136, 'Departamento de Albardón', 10, 124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1137, 'Departamento de Aguirre', 10, 120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1138, 'Partido de Adolfo Alsina', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1139, 'Departamento de Adolfo Alsina', 10, 126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1140, 'Partido de San Miguel', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1141, 'Partido de La Costa', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1142, 'Partido de Ezeiza', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1143, 'Partido de Florentino Ameghino', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1144, 'Partido de Hurlingham', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1145, 'Partido de Ituzaingó', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1146, 'Partido de Tres Lomas', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1147, 'Partido de Villa Gesell', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1148, 'Departamento de Tafí del Valle', 10, 118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1149, 'Departamento de La Cocha', 10, 118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1150, 'Departamento de Simoca', 10, 118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1151, 'Departamento de Tafí Viejo', 10, 118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1152, 'Departamento de Yerba Buena', 10, 118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1153, 'Departamento de Lules', 10, 118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1154, 'Departamento de Dos de Abril', 10, 134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1155, 'Departamento de Federal', 10, 115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1156, 'Departamento de Islas del Ibicuy', 10, 115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1157, 'Departamento de San Salvador', 10, 115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1158, 'Departamento de Palpalá', 10, 131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1159, 'Departamento de Juan B. Alberdi', 10, 118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1160, 'Partido de Malvinas Argentinas', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1161, 'Partido de Lezama', 10, 117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1162, 'La Candelaria', 10, 125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1163, 'Juan Martín de Pueyrredón', 10, 123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1164, 'Comuna 12', 10, 114)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1165, 'Comuna 3', 10, 114)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1166, 'Comuna 8', 10, 114)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1167, 'Comuna 4', 10, 114)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1168, 'Comuna 5', 10, 114)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1169, 'Antártida Argentina', 10, 119)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1170, 'Islas del Atlántico Sur', 10, 119)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1171, 'Comuna 13', 10, 114)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1172, 'Comuna 14', 10, 114)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1173, 'Comuna 1', 10, 114)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1174, 'Comuna 6', 10, 114)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1175, 'Comuna 2', 10, 114)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1176, 'Comuna 9', 10, 114)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1177, 'Comuna 7', 10, 114)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1178, 'Comuna 10', 10, 114)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1179, 'Comuna 11', 10, 114)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1180, 'Comuna 15', 10, 114)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1181, 'Tolhuin', 10, 119)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1182, 'Tuālāuta County', 11, 136)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1183, 'Tūalātai County', 11, 136)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1184, 'Sā‘ole County', 11, 138)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1185, 'Sua County', 11, 138)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1186, 'Itu‘aū County', 11, 138)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1187, 'Leālātaua County', 11, 136)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1188, 'Leāsina County', 11, 136)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1189, 'Mauputasi County', 11, 138)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1190, 'Faleasao County', 11, 139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1191, 'Vaifanua County', 11, 138)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1192, 'Fitiuta County', 11, 139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1193, 'Ta''u County', 11, 139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1194, 'Olosega County', 11, 139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1195, 'Ofu County', 11, 139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1196, 'Politischer Bezirk Zwettl', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1197, 'Politischer Bezirk Zell am See', 12, 145)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1198, 'Politischer Bezirk Wolfsberg', 12, 148)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1199, 'Wien Stadt', 12, 141)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1200, 'Wiener Neustadt Stadt', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1201, 'Politischer Bezirk Wiener Neustadt', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1202, 'Wels-Land', 12, 146)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1203, 'Politischer Bezirk Weiz', 12, 144)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1204, 'Politischer Bezirk Waidhofen an der Thaya', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1205, 'Politischer Bezirk Völkermarkt', 12, 148)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1206, 'Politischer Bezirk Voitsberg', 12, 144)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1207, 'Politischer Bezirk Vöcklabruck', 12, 146)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1208, 'Villach Stadt', 12, 148)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1209, 'Politischer Bezirk Villach Land', 12, 148)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1210, 'Politischer Bezirk Urfahr-Umgebung', 12, 146)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1211, 'Politischer Bezirk Tulln', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1212, 'Politischer Bezirk Tamsweg', 12, 145)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1213, 'Steyr Stadt', 12, 146)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1214, 'Politischer Bezirk Steyr-Land', 12, 146)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1215, 'Politischer Bezirk Spittal an der Drau', 12, 148)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1216, 'Politischer Bezirk Schwaz', 12, 143)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1217, 'Politischer Bezirk Scheibbs', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1218, 'Politischer Bezirk Schärding', 12, 146)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1219, 'Politischer Bezirk Sankt Veit an der Glan', 12, 148)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1220, 'Sankt Pölten Stadt', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1221, 'Politischer Bezirk Sankt Pölten', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1222, 'Politischer Bezirk Sankt Johann im Pongau', 12, 145)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1223, 'Politischer Bezirk Salzburg-Umgebung', 12, 145)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1224, 'Salzburg Stadt', 12, 145)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1225, 'Rust', 12, 149)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1226, 'Politischer Bezirk Rohrbach', 12, 146)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1227, 'Politischer Bezirk Ried im Innkreis', 12, 146)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1228, 'Politischer Bezirk Reutte', 12, 143)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1229, 'Politischer Bezirk Perg', 12, 146)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1230, 'Politischer Bezirk Oberwart', 12, 149)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1231, 'Politischer Bezirk Oberpullendorf', 12, 149)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1232, 'Politischer Bezirk Neusiedl am See', 12, 149)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1233, 'Politischer Bezirk Neunkirchen', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1234, 'Politischer Bezirk Murau', 12, 144)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1235, 'Politischer Bezirk Mödling', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1236, 'Politischer Bezirk Mistelbach', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1237, 'Politischer Bezirk Melk', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1238, 'Politischer Bezirk Mattersburg', 12, 149)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1239, 'Linz Stadt', 12, 146)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1240, 'Politischer Bezirk Linz-Land', 12, 146)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1241, 'Politischer Bezirk Lilienfeld', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1242, 'Politischer Bezirk Liezen', 12, 144)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1243, 'Politischer Bezirk Lienz', 12, 143)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1244, 'Politischer Bezirk Leoben', 12, 144)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1245, 'Politischer Bezirk Leibnitz', 12, 144)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1246, 'Politischer Bezirk Landeck', 12, 143)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1247, 'Politischer Bezirk Kufstein', 12, 143)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1248, 'Krems an der Donau', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1249, 'Politischer Bezirk Krems', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1250, 'Politischer Bezirk Korneuburg', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1251, 'Klagenfurt am Wörthersee', 12, 148)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1252, 'Politischer Bezirk Klagenfurt Land', 12, 148)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1253, 'Politischer Bezirk Kitzbühel', 12, 143)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1254, 'Politischer Bezirk Kirchdorf an der Krems', 12, 146)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1255, 'Politischer Bezirk Jennersdorf', 12, 149)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1256, 'Innsbruck Stadt', 12, 143)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1257, 'Politischer Bezirk Innsbruck Land', 12, 143)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1258, 'Politischer Bezirk Imst', 12, 143)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1259, 'Politischer Bezirk Horn', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1260, 'Politischer Bezirk Hollabrunn', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1261, 'Politischer Bezirk Hermagor', 12, 148)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1262, 'Politischer Bezirk Hallein', 12, 145)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1263, 'Politischer Bezirk Güssing', 12, 149)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1264, 'Politischer Bezirk Grieskirchen', 12, 146)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1265, 'Politischer Bezirk Graz-Umgebung', 12, 144)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1266, 'Graz Stadt', 12, 144)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1267, 'Politischer Bezirk Gmunden', 12, 146)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1268, 'Politischer Bezirk Gmünd', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1269, 'Politischer Bezirk Gänserndorf', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1270, 'Politischer Bezirk Freistadt', 12, 146)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1271, 'Politischer Bezirk Feldkirch', 12, 142)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1272, 'Eisenstadt', 12, 149)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1273, 'Eisenstadt-Umgebung', 12, 149)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1274, 'Politischer Bezirk Eferding', 12, 146)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1275, 'Politischer Bezirk Dornbirn', 12, 142)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1276, 'Politischer Bezirk Deutschlandsberg', 12, 144)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1277, 'Politischer Bezirk Bruck an der Leitha', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1278, 'Politischer Bezirk Bregenz', 12, 142)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1279, 'Politischer Bezirk Braunau am Inn', 12, 146)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1280, 'Politischer Bezirk Bludenz', 12, 142)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1281, 'Politischer Bezirk Baden', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1282, 'Politischer Bezirk Amstetten', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1283, 'Politischer Bezirk Feldkirchen', 12, 148)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1284, 'Waidhofen an der Ybbs Stadt', 12, 147)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1285, 'Wels Stadt', 12, 146)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1286, 'Politischer Bezirk Murtal', 12, 144)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1287, 'Politischer Bezirk Bruck-Mürzzuschlag', 12, 144)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1288, 'Politischer Bezirk Hartberg-Fürstenfeld', 12, 144)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1289, 'Politischer Bezirk Südoststeiermark', 12, 144)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1290, 'City of West Torrens', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1291, 'Plantagenet Shire', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1292, 'City of Perth', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1293, 'Kent Shire', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1294, 'Esperance Shire', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1295, 'Dumbleyung Shire', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1296, 'Burnside', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1297, 'Augusta-Margaret River Shire', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1298, 'Yarra', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1299, 'Warren Shire', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1300, 'Tenterfield Municipality', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1301, 'Temora Municipality', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1302, 'Tamworth Municipality', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1303, 'Shoalhaven Shire', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1304, 'Randwick', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1305, 'Port Stephens Shire', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1306, 'Penrith Municipality', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1307, 'Orange Municipality', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1308, 'Nambucca Shire', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1309, 'Mildura', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1310, 'Maitland Municipality', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1311, 'Lismore Municipality', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1312, 'Lake Macquarie Shire', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1313, 'Hornsby Shire', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1314, 'Darebin', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1315, 'Campbelltown Municipality', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1316, 'Byron Shire', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1317, 'Broken Hill Municipality', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1318, 'Blue Mountains Municipality', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1319, 'Balonne Shire', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1320, 'Ballarat', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1321, 'Albury Municipality', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1322, 'City of Sydney', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1323, 'Maranoa', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1324, 'Broome', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1325, 'Broomehill-Tambellup', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1326, 'Bruce Rock', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1327, 'Cassowary Coast', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1328, 'Brighton', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1329, 'Burnie', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1330, 'Central Coast', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1331, 'Central Highlands', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1332, 'Circular Head', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1333, 'Clarence', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1334, 'Derwent Valley', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1335, 'Dungog', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1336, 'Eurobodalla', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1337, 'Fairfield', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1338, 'Forbes', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1339, 'Gilgandra', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1340, 'Glen Innes Severn', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1341, 'Goulburn Mulwaree', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1342, 'Greater Hume Shire', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1343, 'Tweed', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1344, 'Upper Hunter Shire', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1345, 'Waratah/Wynyard', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1346, 'West Coast', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1347, 'West Tamar', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1348, 'Belyuen', 13, 152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1349, 'Coomalie', 13, 152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1350, 'Moreton Bay', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1351, 'Mornington', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1352, 'Mount Isa', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1353, 'Murweh', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1354, 'Napranum', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1355, 'North Burnett', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1356, 'Northern Peninsula Area', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1357, 'Palm Island', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1358, 'Paroo', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1359, 'Pormpuraaw', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1360, 'Quilpie', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1361, 'Redland', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1362, 'Richmond', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1363, 'Scenic Rim', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1364, 'Somerset', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1365, 'South Burnett', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1366, 'Southern Downs', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1367, 'Sunshine Coast', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1368, 'Toowoomba', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1369, 'Torres', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1370, 'Torres Strait Island Region', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1371, 'Townsville', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1372, 'Weipa', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1373, 'Western Downs', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1374, 'Darwin', 13, 152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1375, 'East Arnhem', 13, 152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1376, 'Katherine', 13, 152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1377, 'Litchfield', 13, 152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1378, 'MacDonnell', 13, 152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1379, 'Palmerston', 13, 152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1380, 'Roper Gulf', 13, 152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1381, 'Tiwi Islands', 13, 152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1382, 'Victoria Daly', 13, 152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1383, 'Wagait', 13, 152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1384, 'West Arnhem', 13, 152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1385, 'Whitsunday', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1386, 'Winton', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1387, 'Woorabinda', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1388, 'Wujal Wujal', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1389, 'Yarrabah', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1390, 'Coober Pedy', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1391, 'Elliston', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1392, 'Flinders Ranges', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1393, 'Franklin Harbour', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1394, 'Gawler', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1395, 'Goyder', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1396, 'Grant', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1397, 'Holdfast Bay', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1398, 'Kangaroo Island', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1399, 'Karoonda East Murray', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1400, 'Kimba', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1401, 'Kingston', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1402, 'Wudinna', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1403, 'Light', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1404, 'Lower Eyre Peninsula', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1405, 'Loxton Waikerie', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1406, 'Mallala', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1407, 'Maralinga Tjarutja', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1408, 'Marion', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1409, 'Mid Murray', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1410, 'Mitcham', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1411, 'Mount Barker', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1412, 'Mount Gambier', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1413, 'Mount Remarkable', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1414, 'Murray Bridge', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1415, 'Naracoorte and Lucindale', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1416, 'Northern Areas', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1417, 'Norwood Payneham St Peters', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1418, 'Onkaparinga', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1419, 'Orroroo/Carrieton', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1420, 'Peterborough', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1421, 'Playford', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1422, 'Port Adelaide Enfield', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1423, 'Port Augusta', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1424, 'Port Lincoln', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1425, 'Port Pirie City and Dists', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1426, 'Prospect', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1427, 'Renmark Paringa', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1428, 'Robe', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1429, 'Roxby Downs', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1430, 'Salisbury', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1431, 'Southern Mallee', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1432, 'Streaky Bay', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1433, 'Tatiara', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1434, 'Tea Tree Gully', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1435, 'The Coorong', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1436, 'Tumby Bay', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1437, 'Unley', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1438, 'Victor Harbor', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1439, 'Wakefield', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1440, 'Walkerville', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1441, 'Wattle Range', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1442, 'Whyalla', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1443, 'Yankalilla', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1444, 'Yorke Peninsula', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1445, 'Boyup Brook', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1446, 'Bridgetown-Greenbushes', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1447, 'Brookton', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1448, 'Bunbury', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1449, 'Busselton', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1450, 'Cambridge', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1451, 'Canning', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1452, 'Capel', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1453, 'Carnamah', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1454, 'Carnarvon', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1455, 'Chapman Valley', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1456, 'Chittering', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1457, 'Claremont', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1458, 'City of Cockburn', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1459, 'Collie', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1460, 'Coolgardie', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1461, 'Coorow', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1462, 'Corrigin', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1463, 'Cottesloe', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1464, 'Cranbrook', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1465, 'Cuballing', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1466, 'Cue', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1467, 'Cunderdin', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1468, 'Dalwallinu', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1469, 'Dandaragan', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1470, 'Dardanup', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1471, 'Denmark', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1472, 'Derby-West Kimberley', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1473, 'Donnybrook-Balingup', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1474, 'Dowerin', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1475, 'Dundas', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1476, 'East Fremantle', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1477, 'East Pilbara', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1478, 'Exmouth', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1479, 'Fremantle', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1480, 'Gingin', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1481, 'Gnowangerup', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1482, 'Goomalling', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1483, 'Gosnells', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1484, 'Halls Creek', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1485, 'Harvey', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1486, 'Irwin', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1487, 'Jerramungup', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1488, 'Joondalup', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1489, 'Kalamunda', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1490, 'Kalgoorlie/Boulder', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1491, 'Katanning', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1492, 'Kellerberrin', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1493, 'Kojonup', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1494, 'Kondinin', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1495, 'Koorda', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1496, 'Alpine', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1497, 'Ararat', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1498, 'Banyule', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1499, 'Bass Coast', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1500, 'Baw Baw', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1501, 'Bayside', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1502, 'Benalla', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1503, 'Boroondara', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1504, 'Brimbank', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1505, 'Buloke', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1506, 'Campaspe', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1507, 'Cardinia', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1508, 'Casey', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1509, 'Central Goldfields', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1510, 'Colac Otway', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1511, 'Corangamite', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1512, 'East Gippsland', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1513, 'Frankston', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1514, 'Gannawarra', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1515, 'Glen Eira', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1516, 'Glenelg', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1517, 'Golden Plains', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1518, 'Greater Bendigo', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1519, 'Greater Dandenong', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1520, 'Greater Geelong', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1521, 'Greater Shepparton', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1522, 'Hepburn', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1523, 'Hindmarsh', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1524, 'Hobsons Bay', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1525, 'Horsham', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1526, 'Hume', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1527, 'Aurukun', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1528, 'Banana', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1529, 'Barcaldine', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1530, 'Barcoo', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1531, 'Blackall Tambo', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1532, 'Boulia', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1533, 'Brisbane', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1534, 'Bulloo', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1535, 'Bundaberg', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1536, 'Burdekin', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1537, 'Burke', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1538, 'Cairns', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1539, 'Carpentaria', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1540, 'Central Highlands', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1541, 'Charters Towers', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1542, 'Cherbourg', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1543, 'Cloncurry', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1544, 'Cook Shire', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1545, 'Croydon', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1546, 'Diamantina', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1547, 'Doomadgee', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1548, 'Etheridge', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1549, 'Flinders', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1550, 'Fraser Coast', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1551, 'Gladstone', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1552, 'Gold Coast', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1553, 'Goondiwindi', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1554, 'Gympie Regional Council', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1555, 'Hinchinbrook', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1556, 'Hope Vale', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1557, 'Ipswich', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1558, 'Isaac', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1559, 'Kowanyama', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1560, 'Lockhart River', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1561, 'Lockyer Valley', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1562, 'Logan', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1563, 'Longreach', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1564, 'Mackay', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1565, 'McKinlay', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1566, 'Mapoon', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1567, 'Kulin', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1568, 'Kwinana', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1569, 'Lake Grace', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1570, 'Laverton', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1571, 'Leonora', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1572, 'Mandurah', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1573, 'Manjimup', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1574, 'Meekatharra', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1575, 'Melville', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1576, 'Menzies', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1577, 'Merredin', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1578, 'Mingenew', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1579, 'Moora', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1580, 'Morawa', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1581, 'Mosman Park', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1582, 'Mount Magnet', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1583, 'Mount Marshall', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1584, 'Mukinbudin', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1585, 'Mundaring', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1586, 'Murchison', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1587, 'Murray', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1588, 'Nannup', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1589, 'Narembeen', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1590, 'Narrogin', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1591, 'Nedlands', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1592, 'Ngaanyatjarraku', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1593, 'Northam', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1594, 'Northampton Shire', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1595, 'Nungarin', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1596, 'Peppermint Grove', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1597, 'Perenjori', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1598, 'Pingelly', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1599, 'Port Hedland', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1600, 'Quairading', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1601, 'Ravensthorpe', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1602, 'Rockingham', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1603, 'Sandstone', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1604, 'Serpentine-Jarrahdale', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1605, 'Shark Bay', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1606, 'South Perth', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1607, 'Stirling', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1608, 'Subiaco', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1609, 'Swan', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1610, 'Tammin', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1611, 'Three Springs', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1612, 'Adelaide', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1613, 'Adelaide Hills', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1614, 'Alexandrina', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1615, 'Anangu Pitjantjatjara', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1616, 'Barossa', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1617, 'Barunga West', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1618, 'Berri and Barmera', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1619, 'Campbelltown', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1620, 'Ceduna', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1621, 'Charles Sturt', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1622, 'Clare and Gilbert Valleys', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1623, 'Cleve', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1624, 'Copper Coast', 13, 151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1625, 'Albany', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1626, 'Armadale', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1627, 'Ashburton', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1628, 'Bassendean', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1629, 'Bayswater', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1630, 'Belmont', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1631, 'Beverley', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1632, 'Boddington', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1633, 'Break O''Day', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1634, 'Devonport', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1635, 'Dorset', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1636, 'Flinders', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1637, 'George Town', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1638, 'Glamorgan/Spring Bay', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1639, 'Glenorchy', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1640, 'Hobart', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1641, 'Huon Valley', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1642, 'Kentish', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1643, 'King Island', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1644, 'Kingborough', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1645, 'Latrobe', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1646, 'Launceston', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1647, 'Meander Valley', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1648, 'Northern Midlands', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1649, 'Alice Springs', 13, 152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1650, 'Barkly', 13, 152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1651, 'Central Desert', 13, 152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1652, 'Ballina', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1653, 'Balranald', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1654, 'Bathurst Regional', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1655, 'The Hills Shire', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1656, 'Bega Valley', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1657, 'Bellingen', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1658, 'Berrigan', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1659, 'Blacktown', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1660, 'Bland', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1661, 'Blayney', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1662, 'Bogan', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1663, 'Botany Bay', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1664, 'Bourke', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1665, 'Brewarrina', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1666, 'Burwood', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1667, 'Cabonne', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1668, 'Camden', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1669, 'Canada Bay', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1670, 'Carrathool', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1671, 'Central Darling', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1672, 'Cessnock', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1673, 'Clarence Valley', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1674, 'Cobar', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1675, 'Coffs Harbour', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1676, 'Coolamon', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1677, 'Coonamble', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1678, 'Cowra', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1679, 'Griffith', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1680, 'Gundagai', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1681, 'Gunnedah', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1682, 'Gwydir', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1683, 'Hawkesbury', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1684, 'Hay', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1685, 'Hunters Hill', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1686, 'Inverell', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1687, 'Junee', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1688, 'Kempsey', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1689, 'Kiama', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1690, 'Ku-ring-gai', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1691, 'Kyogle', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1692, 'Lachlan', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1693, 'Lane Cove', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1694, 'Leeton', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1695, 'Lithgow', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1696, 'Liverpool', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1697, 'Liverpool Plains', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1698, 'Lockhart', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1699, 'Mid-Western Regional', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1700, 'Moree Plains', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1701, 'Mosman', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1702, 'Muswellbrook', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1703, 'Narrabri', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1704, 'Narrandera', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1705, 'Narromine', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1706, 'Newcastle', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1707, 'North Sydney', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1708, 'Oberon', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1709, 'Parkes', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1710, 'Parramatta', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1711, 'Port Macquarie-Hastings', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1712, 'Richmond Valley', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1713, 'City of Rockdale', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1714, 'Ryde', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1715, 'Shellharbour', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1716, 'Singleton', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1717, 'Strathfield', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1718, 'Sutherland Shire', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1719, 'Upper Lachlan Shire', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1720, 'Uralla', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1721, 'Wagga Wagga', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1722, 'Walcha', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1723, 'Walgett', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1724, 'Warrumbungle Shire', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1725, 'Waverley', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1726, 'Weddin', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1727, 'Wentworth', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1728, 'Willoughby', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1729, 'Wingecarribee', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1730, 'Wollondilly', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1731, 'Wollongong', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1732, 'Woollahra', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1733, 'Yass Valley', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1734, 'Indigo', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1735, 'Kingston', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1736, 'Knox', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1737, 'Latrobe', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1738, 'Loddon', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1739, 'Macedon Ranges', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1740, 'Manningham', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1741, 'Mansfield', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1742, 'Maribyrnong', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1743, 'Maroondah', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1744, 'Melbourne', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1745, 'Melton', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1746, 'Mitchell', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1747, 'Moira', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1748, 'Monash', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1749, 'Moonee Valley', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1750, 'Moorabool', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1751, 'Moreland', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1752, 'Mornington Peninsula', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1753, 'Mount Alexander', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1754, 'Moyne', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1755, 'Murrindindi', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1756, 'Nillumbik', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1757, 'Northern Grampians', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1758, 'Port Phillip', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1759, 'Pyrenees', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1760, 'Queenscliffe', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1761, 'South Gippsland', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1762, 'Southern Grampians', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1763, 'Stonnington', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1764, 'Strathbogie', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1765, 'Surf Coast', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1766, 'Swan Hill', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1767, 'Towong', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1768, 'Wangaratta', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1769, 'Warrnambool', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1770, 'Wellington', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1771, 'West Wimmera', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1772, 'Whitehorse', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1773, 'Whittlesea', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1774, 'Wodonga', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1775, 'Wyndham', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1776, 'Yarra Ranges', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1777, 'Yarriambiack', 13, 153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1778, 'Toodyay', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1779, 'Trayning', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1780, 'Upper Gascoyne', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1781, 'Victoria Park', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1782, 'Victoria Plains', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1783, 'Vincent', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1784, 'Wagin', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1785, 'Wandering', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1786, 'Wanneroo', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1787, 'Waroona', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1788, 'West Arthur', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1789, 'Westonia', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1790, 'Wickepin', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1791, 'Williams', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1792, 'Wiluna', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1793, 'Wongan-Ballidu', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1794, 'Woodanilling', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1795, 'Wyalkatchem', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1796, 'Wyndham-East Kimberley', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1797, 'Yalgoo', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1798, 'Yilgarn', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1799, 'York', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1800, 'Sorell', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1801, 'Southern Midlands', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1802, 'Tasman Peninsula', 13, 154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1803, 'Snowy Monaro Regional', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1804, 'Douglas', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1805, 'Karratha', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1806, 'Queanbeyan-Palerang Regional', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1807, 'Mareeba', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1808, 'Noosa', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1809, 'Rockhampton', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1810, 'Tablelands', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1811, 'Armidale Regional', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1812, 'Snowy Valleys', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1813, 'Western Plains Regional', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1814, 'Greater Geraldton', 13, 150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1815, 'Hilltops', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1816, 'Inner West', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1817, 'Mid-Coast', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1818, 'Murray River', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1819, 'Murrumbidgee', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1820, 'Northern Beaches', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1821, 'Canterbury-Bankstown', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1822, 'Central Coast', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1823, 'Cumberland', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1824, 'Edward River', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1825, 'Federation', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1826, 'Georges River', 13, 156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1827, 'Livingstone', 13, 155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1828, 'West Daly', 13, 152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1829, 'Vårdö', 15, 160)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1830, 'Sund', 15, 159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1831, 'Sottunga', 15, 160)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1832, 'Saltvik', 15, 159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1833, 'Lumparland', 15, 159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1834, 'Lemland', 15, 159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1835, 'Kumlinge', 15, 160)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1836, 'Kökar', 15, 160)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1837, 'Föglö', 15, 160)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1838, 'Brändö', 15, 160)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1839, 'Mariehamn', 15, 158)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1840, 'Jomala', 15, 159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1841, 'Hammarland', 15, 159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1842, 'Geta', 15, 159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1843, 'Finström', 15, 159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1844, 'Eckerö', 15, 159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1845, 'Shahbuz Rayon', 16, 170)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1846, 'Ordubad Rayon', 16, 170)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1847, 'Sharur Rayon', 16, 170)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1848, 'Julfa Rayon', 16, 170)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1849, 'Nakhchivan City', 16, 170)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1850, 'Sadarak Rayon', 16, 170)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1851, 'Shaumyan Rayon', 16, 207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1852, 'Shaumyanovskiy Rayon', 16, 215)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1853, 'Ordzhonikidzevskiy Rayon))', 16, 215)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1854, 'Oktyabr''skiy Rayon', 16, 215)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1855, 'Nizaminskiy Rayon', 16, 215)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1856, 'Mirbǝşir Rayonu', 16, 187)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1857, 'Leninskiy Rayon', 16, 216)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1858, 'Kirovskiy Rayon', 16, 216)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1859, 'Garadagh region', 16, 215)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1860, 'Imeni Dvadtsati Shesti Bakinskikh Komissarov Rayon', 16, 215)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1861, 'Babek Rayon', 16, 170)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1862, 'Khatai raion', 16, 215)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1863, 'Kangarli Rayon', 16, 170)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1864, 'Nakhchivan', 16, 170)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1865, 'Nizami Rayonu', 16, 215)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1866, 'Opština Modriča', 17, 233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1867, 'Opština Novi Grad', 17, 233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1868, 'Unsko-Sanski Kanton', 17, 232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1869, 'Posavski Kanton', 17, 232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1870, 'Tuzlanski Kanton', 17, 232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1871, 'Zeničko-Dobojski Kanton', 17, 232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1872, 'Bosansko-Podrinjski Kanton Goražde', 17, 232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1873, 'Srednjobosanski Kanton', 17, 232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1874, 'Hercegovačko-Neretvanski Kanton', 17, 232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1875, 'Zapadnohercegovački Kanton', 17, 232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1876, 'Canton of Sarajevo', 17, 232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1877, 'Kanton 10', 17, 232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1878, 'Opština Krupa na Uni', 17, 233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1879, 'Opština Vukosavlje', 17, 233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1880, 'Mrkonjic Grad Jug Opcina', 17, 233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1881, 'Skelani Opština', 17, 233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1882, 'Grad Istočno Sarajevo', 17, 233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1883, 'Stanari', 17, 233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1884, 'Kushtia', 19, 249)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1885, 'Barisal', 19, 250)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1886, 'Panchagarh', 19, 252)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1887, 'Thakurgaon', 19, 252)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1888, 'Dinajpur', 19, 252)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1889, 'Nilphamari Zila', 19, 252)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1890, 'Lalmonirhat District', 19, 252)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1891, 'Kurigram', 19, 252)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1892, 'Rangpur', 19, 252)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1893, 'Gaibandha', 19, 252)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1894, 'Naogaon', 19, 246)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1895, 'Joypurhat', 19, 246)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1896, 'Bogra', 19, 246)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1897, 'Chapai Nababganj', 19, 246)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1898, 'Rajshahi', 19, 246)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1899, 'Natore', 19, 246)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1900, 'Sirajganj', 19, 246)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1901, 'Pabna', 19, 246)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1902, 'Sherpur', 19, 253)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1903, 'Netrakona', 19, 253)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1904, 'Jamalpur', 19, 253)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1905, 'Mymensingh', 19, 253)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1906, 'Tangail', 19, 247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1907, 'Gazipur', 19, 247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1908, 'Kishoregonj', 19, 247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1909, 'Narsingdi', 19, 247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1910, 'Dhaka', 19, 247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1911, 'Rajbari', 19, 247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1912, 'Faridpur', 19, 247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1913, 'Narayanganj', 19, 247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1914, 'Munshiganj', 19, 247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1915, 'Gopalganj', 19, 247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1916, 'Shariatpur', 19, 247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1917, 'Madaripur', 19, 247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1918, 'Sunamganj', 19, 251)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1919, 'Sylhet', 19, 251)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1920, 'Maulvibazar', 19, 251)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1921, 'Habiganj', 19, 251)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1922, 'Brahmanbaria', 19, 248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1923, 'Cumilla', 19, 248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1924, 'Chandpur', 19, 248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1925, 'Lakshmipur', 19, 248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1926, 'Noakhali', 19, 248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1927, 'Feni', 19, 248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1928, 'Khagrachhari', 19, 248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1929, 'Chittagong', 19, 248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1930, 'Bandarban', 19, 248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1931, 'Cox''s Bazar', 19, 248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1932, 'Meherpur', 19, 249)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1933, 'Jhenaidah', 19, 249)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1934, 'Chuadanga', 19, 249)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1935, 'Magura', 19, 249)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1936, 'Jessore', 19, 249)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1937, 'Narail', 19, 249)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1938, 'Bagerhat', 19, 249)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1939, 'Khulna', 19, 249)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1940, 'Satkhira', 19, 249)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1941, 'Jhalokati', 19, 250)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1942, 'Bhola', 19, 250)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1943, 'Patuakhali', 19, 250)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1944, 'Barguna', 19, 250)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1945, 'Manikganj', 19, 247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1946, 'Pirojpur', 19, 250)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1947, 'Rangamati', 19, 248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1948, 'Provincie West-Vlaanderen', 20, 256)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1949, 'Provincie Oost-Vlaanderen', 20, 256)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1950, 'Province de Namur', 20, 255)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1951, 'Province du Luxembourg', 20, 255)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1952, 'Provincie Limburg', 20, 256)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1953, 'Province de Liège', 20, 255)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1954, 'Province du Hainaut', 20, 255)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1955, 'Provincie Antwerpen', 20, 256)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1956, 'Provincie Vlaams-Brabant', 20, 256)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1957, 'Province du Brabant Wallon', 20, 255)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1958, 'Bruxelles-Capitale', 20, 254)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1959, 'Zoundweogo Province', 21, 263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1960, 'Province du Yatenga', 21, 266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1961, 'Province de la Tapoa', 21, 264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1962, 'Province du Sourou', 21, 257)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1963, 'Province du Soum', 21, 268)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1964, 'Province de la Sissili', 21, 262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1965, 'Province du Séno', 21, 268)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1966, 'Province du Sanmatenga', 21, 261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1967, 'Province du Sanguié', 21, 262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1968, 'Province du Poni', 21, 269)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1969, 'Province du Passoré', 21, 266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1970, 'Oudalan', 21, 268)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1971, 'Oubritenga', 21, 267)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1972, 'Nahouri Province', 21, 263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1973, 'Province du Namentenga', 21, 261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1974, 'Province du Mouhoun', 21, 257)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1975, 'Kouritenga Province', 21, 260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1976, 'Province de la Kossi', 21, 257)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1977, 'Province de la Comoé', 21, 258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1978, 'Province du Kénédougou', 21, 265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1979, 'Kadiogo Province', 21, 259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1980, 'Province du Houet', 21, 265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1981, 'Province du Gourma', 21, 264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1982, 'Gnagna Province', 21, 264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1983, 'Province du Ganzourgou', 21, 267)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1984, 'Province du Boulkiemdé', 21, 262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1985, 'Province du Boulgou', 21, 260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1986, 'Province de la Bougouriba', 21, 269)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1987, 'Bazega Province', 21, 263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1988, 'Province du Bam', 21, 261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1989, 'Province des Balé', 21, 257)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1990, 'Province des Banwa', 21, 257)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1991, 'Province du Ioba', 21, 269)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1992, 'Province de la Komandjoari', 21, 264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1993, 'Province de la Kompienga', 21, 264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1994, 'Province du Koulpélogo', 21, 260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1995, 'Province du Kourwéogo', 21, 267)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1996, 'Province de la Léraba', 21, 258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1997, 'Province du Loroum', 21, 266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1998, 'Province du Nayala', 21, 257)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (1999, 'Province du Noumbièl', 21, 269)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2000, 'Province du Tuy', 21, 265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2001, 'Province du Yagha', 21, 268)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2002, 'Province du Ziro', 21, 262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2003, 'Province du Zondoma', 21, 266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2004, 'Obshtina Zlatograd', 22, 292)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2005, 'Obshtina Zlataritsa', 22, 295)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2006, 'Obshtina Zemen', 22, 279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2007, 'Obshtina Zavet', 22, 270)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2008, 'Obshtina Yambol', 22, 297)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2009, 'Obshtina Yakoruda', 22, 285)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2010, 'Obshtina Yakimovo', 22, 271)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2011, 'Obshtina Yablanitsa', 22, 281)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2012, 'Obshtina Varshets', 22, 271)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2013, 'Obshtina Varbitsa', 22, 289)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2014, 'Obshtina Valchidol', 22, 273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2015, 'Obshtina Valchedram', 22, 271)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2016, 'Obshtina Vratsa', 22, 272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2017, 'Obshtina Vidin', 22, 296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2018, 'Obshtina Vetrino', 22, 273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2019, 'Obshtina Vetovo', 22, 276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2020, 'Obshtina Venets', 22, 289)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2021, 'Obshtina Velingrad', 22, 280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2022, 'Obshtina Veliko Tŭrnovo', 22, 295)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2023, 'Obshtina Varna', 22, 273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2024, 'Obshtina Ugarchin', 22, 281)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2025, 'Obshtina Tvarditsa', 22, 291)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2026, 'Obshtina Tutrakan', 22, 290)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2027, 'Obshtina Targovishte', 22, 294)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2028, 'Obshtina Tsenovo', 22, 276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2029, 'Obshtina Tryavna', 22, 286)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2030, 'Tran', 22, 279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2031, 'Obshtina Troyan', 22, 281)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2032, 'Obshtina Treklyano', 22, 288)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2033, 'Obshtina Topolovgrad', 22, 282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2034, 'Obshtina Dobrich', 22, 274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2035, 'Obshtina Teteven', 22, 281)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2036, 'Obshtina Tervel', 22, 274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2037, 'Obshtina Svoge', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2038, 'Obshtina Svishtov', 22, 295)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2039, 'Obshtina Svilengrad', 22, 282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2040, 'Obshtina Suvorovo', 22, 273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2041, 'Sarnitsa Obshtina', 22, 280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2042, 'Obshtina Sungurlare', 22, 284)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2043, 'Obshtina Suhindol', 22, 295)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2044, 'Obshtina Saedinenie', 22, 277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2045, 'Obshtina Strumyani', 22, 285)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2046, 'Obshtina Strelcha', 22, 280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2047, 'Obshtina Strazhitsa', 22, 295)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2048, 'Obshtina Straldzha', 22, 297)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2049, 'Obshtina Stara Zagora', 22, 293)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2050, 'Obshtina Dupnitsa', 22, 288)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2051, 'Obshtina Stambolovo', 22, 282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2052, 'Obshtina Zlatitsa', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2053, 'Obshtina Sozopol', 22, 284)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2054, 'Obshtina Smyadovo', 22, 289)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2055, 'Obshtina Smolyan', 22, 292)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2056, 'Obshtina Slivo Pole', 22, 276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2057, 'Obshtina Slivnitsa', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2058, 'Obshtina Sliven', 22, 291)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2059, 'Obshtina Sitovo', 22, 290)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2060, 'Obshtina Simitli', 22, 285)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2061, 'Obshtina Simeonovgrad', 22, 282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2062, 'Obshtina Silistra', 22, 290)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2063, 'Obshtina Shumen', 22, 289)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2064, 'Obshtina Shabla', 22, 274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2065, 'Obshtina Sevlievo', 22, 286)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2066, 'Obshtina Septemvri', 22, 280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2067, 'Obshtina Satovcha', 22, 285)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2068, 'Obshtina Sapareva Banya', 22, 288)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2069, 'Obshtina Sandanski', 22, 285)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2070, 'Obshtina Samuil', 22, 270)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2071, 'Obshtina Samokov', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2072, 'Obshtina Sadovo', 22, 277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2073, 'Obshtina Ruzhintsi', 22, 296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2074, 'Obshtina Ruse', 22, 276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2075, 'Obshtina Ruen', 22, 284)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2076, 'Obshtina Rudozem', 22, 292)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2077, 'Obshtina Roman', 22, 272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2078, 'Obshtina Rila', 22, 288)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2079, 'Obshtina Razlog', 22, 285)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2080, 'Obshtina Razgrad', 22, 270)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2081, 'Obshtina Rakovski', 22, 277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2082, 'Obshtina Rakitovo', 22, 280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2083, 'Obshtina Radomir', 22, 279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2084, 'Obshtina Radnevo', 22, 293)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2085, 'Obshtina Parvomay', 22, 277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2086, 'Obshtina Provadia', 22, 273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2087, 'Obshtina Veliki Preslav', 22, 289)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2088, 'Obshtina Pordim', 22, 278)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2089, 'Obshtina Popovo', 22, 294)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2090, 'Obshtina Pomorie', 22, 284)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2091, 'Obshtina Polski Trambesh', 22, 295)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2092, 'Obshtina Plovdiv', 22, 277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2093, 'Obshtina Pleven', 22, 278)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2094, 'Obshtina Petrich', 22, 285)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2095, 'Obshtina Peshtera', 22, 280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2096, 'Obshtina Pernik', 22, 279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2097, 'Obshtina Iskar', 22, 278)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2098, 'Obshtina Pazardzhik', 22, 280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2099, 'Obshtina Pavlikeni', 22, 295)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2100, 'Obshtina Pavel Banya', 22, 293)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2101, 'Obshtina Panagyurishte', 22, 280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2102, 'Obshtina Oryahovo', 22, 272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2103, 'Obshtina Opan', 22, 293)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2104, 'Obshtina Opaka', 22, 294)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2105, 'Obshtina Omurtag', 22, 294)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2106, 'Obshtina Novo Selo', 22, 296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2107, 'Obshtina Novi Pazar', 22, 289)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2108, 'Obshtina Nova Zagora', 22, 291)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2109, 'Obshtina Nikopol', 22, 278)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2110, 'Obshtina Nikola-Kozlevo', 22, 289)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2111, 'Obshtina Nevestino', 22, 288)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2112, 'Obshtina Nesebar', 22, 284)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2113, 'Obshtina Nedelino', 22, 292)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2114, 'Obshtina Maglizh', 22, 293)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2115, 'Obshtina Momchilgrad', 22, 287)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2116, 'Obshtina Mizia', 22, 272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2117, 'Obshtina Mineralni Bani', 22, 282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2118, 'Obshtina Montana', 22, 271)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2119, 'Obshtina Tsarevo', 22, 284)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2120, 'Obshtina Mezdra', 22, 272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2121, 'Obshtina Medkovets', 22, 271)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2122, 'Obshtina Malko Tarnovo', 22, 284)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2123, 'Obshtina Makresh', 22, 296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2124, 'Obshtina Madan', 22, 292)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2125, 'Obshtina Lyubimets', 22, 282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2126, 'Obshtina Lyaskovets', 22, 295)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2127, 'Obshtina Lukovit', 22, 281)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2128, 'Obshtina Laki', 22, 277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2129, 'Obshtina Loznitsa', 22, 270)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2130, 'Obshtina Lovech', 22, 281)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2131, 'Obshtina Lom', 22, 271)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2132, 'Obshtina Levski', 22, 278)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2133, 'Obshtina Letnitsa', 22, 281)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2134, 'Obshtina Lesichovo', 22, 280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2135, 'Obshtina Kyustendil', 22, 288)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2136, 'Obshtina Kardzhali', 22, 287)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2137, 'Obshtina Kula', 22, 296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2138, 'Obshtina Kubrat', 22, 270)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2139, 'Obshtina Krushari', 22, 274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2140, 'Obshtina Krumovgrad', 22, 287)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2141, 'Obshtina Krivodol', 22, 272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2142, 'Obshtina Kresna', 22, 285)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2143, 'Obshtina Kozloduy', 22, 272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2144, 'Obshtina Kovachevtsi', 22, 279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2145, 'Obshtina Kotel', 22, 291)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2146, 'Obshtina Kostinbrod', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2147, 'Obshtina Kostenets', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2148, 'Obshtina Koprivshtitsa', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2149, 'Obshtina Kocherinovo', 22, 288)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2150, 'Obshtina Knezha', 22, 278)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2151, 'Obshtina Kirkovo', 22, 287)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2152, 'Obshtina Tsar Kaloyan', 22, 270)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2153, 'Obshtina Hisarya', 22, 277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2154, 'Obshtina Haskovo', 22, 282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2155, 'Obshtina Harmanli', 22, 282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2156, 'Hadzhidimovo', 22, 285)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2157, 'Obshtina Kazanlŭk', 22, 293)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2158, 'Obshtina Kaynardzha', 22, 290)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2159, 'Obshtina Kavarna', 22, 274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2160, 'Obshtina Kaspichan', 22, 289)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2161, 'Obshtina Karnobat', 22, 284)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2162, 'Obshtina Karlovo', 22, 277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2163, 'Obshtina Kaolinovo', 22, 289)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2164, 'Obshtina Kameno', 22, 284)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2165, 'Obshtina Kaloyanovo', 22, 277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2166, 'Obshtina Ivaylovgrad', 22, 282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2167, 'Obshtina Ivanovo', 22, 276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2168, 'Obshtina Isperih', 22, 270)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2169, 'Ihtiman', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2170, 'Obshtina Garmen', 22, 285)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2171, 'Obshtina Gurkovo', 22, 293)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2172, 'Obshtina Gulyantsi', 22, 278)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2173, 'Obshtina Galabovo', 22, 293)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2174, 'Obshtina Sredets', 22, 284)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2175, 'Obshtina Gramada', 22, 296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2176, 'Obshtina Gotse Delchev', 22, 285)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2177, 'Obshtina Gorna Oryahovitsa', 22, 295)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2178, 'Obshtina Gorna Malina', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2179, 'Obshtina Godech', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2180, 'Obshtina Glavinitsa', 22, 290)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2181, 'Obshtina Dolni Chiflik', 22, 273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2182, 'Obshtina Georgi Damyanovo', 22, 271)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2183, 'Obshtina General Toshevo', 22, 274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2184, 'Obshtina Hitrino', 22, 289)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2185, 'Obshtina Gabrovo', 22, 286)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2186, 'Obshtina Etropole', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2187, 'Obshtina Elhovo', 22, 297)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2188, 'Obshtina Elin Pelin', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2189, 'Obshtina Elena', 22, 295)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2190, 'Obshtina Dzhebel', 22, 287)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2191, 'Obshtina Dve Mogili', 22, 276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2192, 'Obshtina Dulovo', 22, 290)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2193, 'Obshtina Dalgopol', 22, 273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2194, 'Obshtina Dryanovo', 22, 286)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2195, 'Obshtina Dragoman', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2196, 'Obshtina Dospat', 22, 292)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2197, 'Obshtina Dolni Dabnik', 22, 278)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2198, 'Obshtina Dolna Mitropolia', 22, 278)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2199, 'Obshtina Dolna Banya', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2200, 'Obshtina Dimovo', 22, 296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2201, 'Obshtina Dimitrovgrad', 22, 282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2202, 'Obshtina Devnya', 22, 273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2203, 'Obshtina Devin', 22, 292)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2204, 'Obshtina Chuprene', 22, 296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2205, 'Obshtina Chirpan', 22, 293)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2206, 'Obshtina Chiprovtsi', 22, 271)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2207, 'Obshtina Cherven Bryag', 22, 278)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2208, 'Obshtina Chernoochene', 22, 287)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2209, 'Obshtina Chepelare', 22, 292)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2210, 'Obshtina Byala Slatina', 22, 272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2211, 'Obshtina Byala', 22, 273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2212, 'Obshtina Byala', 22, 276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2213, 'Obshtina Burgas', 22, 284)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2214, 'Obshtina Brusartsi', 22, 271)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2215, 'Obshtina Brezovo', 22, 277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2216, 'Obshtina Breznik', 22, 279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2217, 'Obshtina Bregovo', 22, 296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2218, 'Obshtina Bratya Daskalovi', 22, 293)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2219, 'Obshtina Bratsigovo', 22, 280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2220, 'Obshtina Bozhurishte', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2221, 'Obshtina Boynitsa', 22, 296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2222, 'Obshtina Boychinovtsi', 22, 271)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2223, 'Obshtina Botevgrad', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2224, 'Obshtina Borovo', 22, 276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2225, 'Obshtina Borovan', 22, 272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2226, 'Obshtina Borino', 22, 292)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2227, 'Obshtina Bolyarovo', 22, 297)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2228, 'Obshtina Bobov Dol', 22, 288)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2229, 'Obshtina Boboshevo', 22, 288)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2230, 'Obshtina Blagoevgrad', 22, 285)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2231, 'Obshtina Berkovitsa', 22, 271)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2232, 'Obshtina Belovo', 22, 280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2233, 'Obshtina Beloslav', 22, 273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2234, 'Obshtina Belogradchik', 22, 296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2235, 'Obshtina Belitsa', 22, 285)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2236, 'Obshtina Belene', 22, 278)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2237, 'Obshtina Batak', 22, 280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2238, 'Obshtina Bansko', 22, 285)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2239, 'Obshtina Banite', 22, 292)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2240, 'Obshtina Balchik', 22, 274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2241, 'Obshtina Aytos', 22, 284)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2242, 'Obshtina Avren', 22, 273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2243, 'Obshtina Asenovgrad', 22, 277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2244, 'Obshtina Ardino', 22, 287)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2245, 'Obshtina Apriltsi', 22, 281)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2246, 'Obshtina Antonovo', 22, 294)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2247, 'Obshtina Alfatar', 22, 290)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2248, 'Obshtina Aksakovo', 22, 273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2249, 'Obshtina Primorsko', 22, 284)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2250, 'Obshtina Dobrich-Selska', 22, 274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2251, 'Obshtina Hayredin', 22, 272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2252, 'Obshtina Rodopi', 22, 277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2253, 'Obshtina Perushtitsa', 22, 277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2254, 'Obshtina Krichim', 22, 277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2255, 'Obshtina Stamboliyski', 22, 277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2256, 'Obshtina Maritsa', 22, 277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2257, 'Obshtina Mirkovo', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2258, 'Obshtina Chavdar', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2259, 'Obshtina Chelopech', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2260, 'Obshtina Pirdop', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2261, 'Obshtina Anton', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2262, 'Obshtina Pravets', 22, 275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2263, 'Obshtina Nikolaevo', 22, 293)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2264, 'Obshtina Madzharovo', 22, 282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2265, 'Obshtina Tundzha', 22, 297)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2266, 'Obshtina Sopot', 22, 277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2267, 'Obshtina Kuklen', 22, 277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2268, 'Stolichna Obshtina', 22, 283)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2269, 'Makebuko', 24, 305)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2270, 'Bubanza', 24, 309)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2271, 'Bukinanyana', 24, 310)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2272, 'Buraza', 24, 305)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2273, 'Busiga', 24, 311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2274, 'Busoni', 24, 314)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2275, 'Buyengero', 24, 319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2276, 'Cendajuru', 24, 307)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2277, 'Gashikanwa', 24, 311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2278, 'Gashoho', 24, 313)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2279, 'Gisozi', 24, 316)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2280, 'Gitega', 24, 305)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2281, 'Giteranyi', 24, 313)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2282, 'Kabarore', 24, 312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2283, 'Kayanza', 24, 312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2284, 'Kayokwe', 24, 316)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2285, 'Kiganda', 24, 304)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2286, 'Mabanda', 24, 302)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2287, 'Mabayi', 24, 310)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2288, 'Mugamba', 24, 303)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2289, 'Muhuta', 24, 319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2290, 'Murwi', 24, 310)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2291, 'Commune of Mutimbuzi', 24, 318)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2292, 'Muyinga', 24, 313)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2293, 'Nyabihanga', 24, 316)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2294, 'Nyabikere', 24, 308)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2295, 'Commune of Rugombo', 24, 310)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2296, 'Ruhororo', 24, 311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2297, 'Rutegama', 24, 304)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2298, 'Ruyigi', 24, 306)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2299, 'Tangara', 24, 311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2300, 'Vumbi', 24, 314)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2301, 'Ngozi', 24, 311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2302, 'Mutaho', 24, 305)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2303, 'Giheta', 24, 305)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2304, 'Bugendana', 24, 305)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2305, 'Muruta', 24, 312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2306, 'Ryansoro', 24, 305)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2307, 'Commune of Gihanga', 24, 309)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2308, 'Commune of Buganda', 24, 310)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2309, 'Butaganzwa', 24, 312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2310, 'Commune of Itaba', 24, 305)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2311, 'Commune of Matongo', 24, 312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2312, 'Commune of Kirundo', 24, 314)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2313, 'Commune of Mpanda', 24, 309)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2314, 'Commune of Musigati', 24, 309)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2315, 'Commune of Mugina', 24, 310)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2316, 'Commune of Bwambarangwe', 24, 314)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2317, 'Commune of Makamba', 24, 302)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2318, 'Commune of Rutana', 24, 315)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2319, 'Commune of Cankuzo', 24, 307)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2320, 'Commune of Matana', 24, 303)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2321, 'Commune of Rumonge', 24, 319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2322, 'Ndava', 24, 316)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2323, 'Bugarama', 24, 319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2324, 'Bururi', 24, 303)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2325, 'Kanyosha1', 24, 318)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2326, 'Kabezi', 24, 318)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2327, 'Mukike', 24, 318)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2328, 'Mutambu', 24, 318)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2329, 'Nyabiraba', 24, 318)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2330, 'Vugizo', 24, 302)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2331, 'Vyanda', 24, 303)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2332, 'Songa', 24, 303)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2333, 'Rusaka', 24, 316)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2334, 'Bisoro', 24, 316)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2335, 'Mugongomanga', 24, 318)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2336, 'Mishiha', 24, 307)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2337, 'Rango', 24, 312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2338, 'Bukeye', 24, 304)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2339, 'Bukemba', 24, 315)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2340, 'Kayogoro', 24, 302)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2341, 'Isale', 24, 318)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2342, 'Rugazi', 24, 309)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2343, 'Kibago', 24, 302)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2344, 'Mubimbi', 24, 318)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2345, 'Mbuye', 24, 304)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2346, 'Bugabira', 24, 314)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2347, 'Butihinda', 24, 313)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2348, 'Gatara', 24, 312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2349, 'Gahombo', 24, 312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2350, 'Buhinyuza', 24, 313)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2351, 'Musongati', 24, 315)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2352, 'Kigamba', 24, 307)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2353, 'Gitanga', 24, 315)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2354, 'Gisagara', 24, 307)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2355, 'Rutovu', 24, 303)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2356, 'Gisuru', 24, 306)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2357, 'Nyarusange', 24, 305)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2358, 'Gishubi', 24, 305)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2359, 'Kinyinya', 24, 306)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2360, 'Bukirasazi', 24, 305)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2361, 'Mpinga-Kayove', 24, 315)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2362, 'Giharo', 24, 315)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2363, 'Nyabitsinda', 24, 306)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2364, 'Shombo', 24, 308)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2365, 'Nyanza-Lac', 24, 302)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2366, 'Butezi', 24, 306)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2367, 'Mwumba', 24, 311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2368, 'Bweru', 24, 306)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2369, 'Gitaramuka', 24, 308)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2370, 'Nyamurenza', 24, 311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2371, 'Bugenyuzi', 24, 308)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2372, 'Marangara', 24, 311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2373, 'Muhanga', 24, 312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2374, 'Ntega', 24, 314)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2375, 'Gihogazi', 24, 308)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2376, 'Kiremba', 24, 311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2377, 'Mutumba', 24, 308)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2378, 'Buhiga', 24, 308)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2379, 'Mwakiro', 24, 313)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2380, 'Gasorwe', 24, 313)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2381, 'Gitobe', 24, 314)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2382, 'Muramvya', 24, 304)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2383, 'Commune of Burambi', 24, 319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2384, 'Butaganzwa', 24, 306)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2385, 'Muha', 24, 317)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2386, 'Mukaza', 24, 317)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2387, 'Ntahangwa', 24, 317)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2388, 'Dogbo Tota', 25, 328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2389, 'Commune of Adjohoun', 25, 321)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2390, 'Bonou', 25, 321)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2391, 'Dangbo', 25, 321)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2392, 'Commune of Cove', 25, 320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2393, 'Commune of Ouinhi', 25, 320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2394, 'Commune of Zangnanado', 25, 320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2395, 'Kouande', 25, 325)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2396, 'Pehonko', 25, 325)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2397, 'Kerou', 25, 325)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2398, 'Lokossa', 25, 322)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2399, 'Commune of Athieme', 25, 322)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2400, 'Commune of Bohicon', 25, 320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2401, 'Commune of Za-Kpota', 25, 320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2402, 'Commune of Zogbodome', 25, 320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2403, 'Commune of Banikoara', 25, 326)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2404, 'Commune of Ouidah', 25, 324)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2405, 'Commune of Kpomasse', 25, 324)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2406, 'Commune of Tori-Bossito', 25, 324)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2407, 'Porto-Novo', 25, 321)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2408, 'Aguégués', 25, 321)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2409, 'Seme-Kpodji', 25, 321)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2410, 'Ouake', 25, 329)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2411, 'Commune of Tchaourou', 25, 323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2412, 'Commune of Parakou', 25, 323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2413, 'Ndali', 25, 323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2414, 'Bembereke', 25, 323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2415, 'Natitingou', 25, 325)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2416, 'Copargo', 25, 329)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2417, 'Kalalè', 25, 323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2418, 'Pèrèrè', 25, 323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2419, 'Nikki', 25, 323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2420, 'Sinendé', 25, 323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2421, 'Commune of Ketou', 25, 331)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2422, 'Commune of Pobe', 25, 331)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2423, 'Cotonou', 25, 330)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2424, 'Commune of Abomey-Calavi', 25, 324)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2425, 'Commune of So-Ava', 25, 324)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2426, 'Karimama', 25, 326)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2427, 'Tanguieta', 25, 325)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2428, 'Toucountouna', 25, 325)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2429, 'Materi', 25, 325)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2430, 'Commune of Glazoue', 25, 327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2431, 'Malanville', 25, 326)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2432, 'Kandi', 25, 326)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2433, 'Commune of Bante', 25, 327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2434, 'Commune of Dassa-Zoume', 25, 327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2435, 'Commune of Ouesse', 25, 327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2436, 'Commune of Savalou', 25, 327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2437, 'Commune of Save', 25, 327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2438, 'Commune of Abomey', 25, 320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2439, 'Commune of Agbangnizoun', 25, 320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2440, 'Commune of Djidja', 25, 320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2441, 'Commune of Allada', 25, 324)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2442, 'Commune of Toffo', 25, 324)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2443, 'Commune of Ze', 25, 324)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2444, 'Commune of Djougou', 25, 329)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2445, 'Commune of Sakete', 25, 331)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2446, 'Commune of Houeyogbe', 25, 322)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2447, 'Commune of Bopa', 25, 322)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2448, 'Adjaouere', 25, 331)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2449, 'Adjara', 25, 321)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2450, 'Akpro-Misserete', 25, 321)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2451, 'Avrankou', 25, 321)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2452, 'Ifangni', 25, 331)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2453, 'Grand-Popo', 25, 322)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2454, 'Comé', 25, 322)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2455, 'Cobly', 25, 325)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2456, 'Boukoumbé', 25, 325)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2457, 'Ségbana', 25, 326)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2458, 'Gogounou', 25, 326)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2459, 'Bassila', 25, 329)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2460, 'Aplahoué', 25, 328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2461, 'Djakotomey', 25, 328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2462, 'Klouékanmè', 25, 328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2463, 'Lalo', 25, 328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2464, 'Toviklin', 25, 328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2465, 'Kiudang', 28, 343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2466, 'Gadong A', 28, 345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2467, 'Gadong B', 28, 345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2468, 'Berakas A', 28, 345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2469, 'Berakas B', 28, 345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2470, 'Serasa', 28, 345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2471, 'Mentiri', 28, 345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2472, 'Kota Batu', 28, 345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2473, 'Lumapas', 28, 345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2474, 'Sengkurong', 28, 345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2475, 'Pengkalan Batu', 28, 345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2476, 'Kianggeh', 28, 345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2477, 'Tamoi', 28, 345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2478, 'Burong Pingai Ayer', 28, 345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2479, 'Peramu', 28, 345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2480, 'Saba', 28, 345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2481, 'Sungai Kedayan', 28, 345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2482, 'Sungai Kebun', 28, 345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2483, 'Provincia Chiquitos', 29, 348)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2484, 'Provincia Ángel Sandoval', 29, 348)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2485, 'Provincia Zudáñez', 29, 354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2486, 'Provincia Yamparáez', 29, 354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2487, 'Provincia Yacuma', 29, 355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2488, 'Provincia Warnes', 29, 348)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2489, 'Provincia Velasco', 29, 348)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2490, 'Provincia Vallegrande', 29, 348)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2491, 'Provincia Vaca Diez', 29, 355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2492, 'Provincia Tomina', 29, 354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2493, 'Provincia Tomás Frías', 29, 349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2494, 'Tomás Barrón', 29, 351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2495, 'Provincia Tapacarí', 29, 353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2496, 'Provincia Sud Yungas', 29, 352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2497, 'Sur Lípez', 29, 349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2498, 'Sur Cinti', 29, 354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2499, 'Sur Chichas', 29, 349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2500, 'Saucarí', 29, 351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2501, 'Provincia Sara', 29, 348)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2502, 'Provincia Obispo Santistevan', 29, 348)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2503, 'Provincia San Pedro de Totora', 29, 351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2504, 'Provincia Sajama', 29, 351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2505, 'Provincia Cornelio Saavedra', 29, 349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2506, 'Provincia Rafael Bustillo', 29, 349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2507, 'Provincia Quillacollo', 29, 353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2508, 'Provincia Antonio Quijarro', 29, 349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2509, 'Provincia Punata', 29, 353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2510, 'Provincia Poopó', 29, 351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2511, 'Provincia Pantaleón Dalence', 29, 351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2512, 'Provincia Pacajes', 29, 352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2513, 'Provincia Oropeza', 29, 354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2514, 'Provincia Omasuyos', 29, 352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2515, 'Provincia O’Connor', 29, 347)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2516, 'Provincia Ñuflo de Chávez', 29, 348)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2517, 'Provincia Nor Yungas', 29, 352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2518, 'Provincia Nor Lípez', 29, 349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2519, 'Provincia Nor Cinti', 29, 354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2520, 'Provincia Nor Chichas', 29, 349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2521, 'Provincia Nicolás Suárez', 29, 350)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2522, 'Provincia Murillo', 29, 352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2523, 'Provincia Muñecas', 29, 352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2524, 'Provincia Moxos', 29, 355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2525, 'Provincia Modesto Omiste', 29, 349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2526, 'Provincia Mizque', 29, 353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2527, 'Provincia Méndez', 29, 347)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2528, 'Provincia Marbán', 29, 355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2529, 'Provincia Manuripi', 29, 350)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2530, 'Provincia Manuel María Caballero', 29, 348)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2531, 'Provincia Manco Kapac', 29, 352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2532, 'Provincia Mamoré', 29, 355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2533, 'Provincia Madre de Dios', 29, 350)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2534, 'Provincia Luis Calvo', 29, 354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2535, 'Provincia Los Andes', 29, 352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2536, 'Provincia Loayza', 29, 352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2537, 'Sud Carangas Province', 29, 351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2538, 'José María Linares', 29, 349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2539, 'Provincia Larecaja', 29, 352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2540, 'Provincia Ladislao Cabrera', 29, 351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2541, 'Provincia Abel Iturralde', 29, 352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2542, 'Provincia Iténez', 29, 355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2543, 'Provincia Inquisivi', 29, 352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2544, 'Provincia Ingavi', 29, 352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2545, 'Provincia Ichilo', 29, 348)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2546, 'Provincia Hernando Siles', 29, 354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2547, 'Provincia Gualberto Villarroel', 29, 352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2548, 'Provincia Gran Chaco', 29, 347)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2549, 'Provincia Germán Jordán', 29, 353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2550, 'Provincia General José Ballivián', 29, 355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2551, 'Federico Román', 29, 350)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2552, 'Provincia General Bilbao', 29, 349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2553, 'Provincia Franz Tamayo', 29, 352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2554, 'Provincia Florida', 29, 348)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2555, 'Provincia Esteban Arze', 29, 353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2556, 'Provincia Daniel Campos', 29, 349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2557, 'Provincia Cordillera', 29, 348)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2558, 'Provincia Chayanta', 29, 349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2559, 'Provincia Charcas', 29, 349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2560, 'Chapare', 29, 353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2561, 'Cercado', 29, 347)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2562, 'Provincia Cercado', 29, 351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2563, 'Provincia Cercado', 29, 353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2564, 'Provincia Cercado', 29, 355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2565, 'Provincia Carrasco', 29, 353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2566, 'Provincia Carangas', 29, 351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2567, 'Provincia Capinota', 29, 353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2568, 'Provincia Campero', 29, 353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2569, 'Provincia Camacho', 29, 352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2570, 'Provincia Belisario Boeto', 29, 354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2571, 'Provincia Bautista Saavedra', 29, 352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2572, 'Provincia Azurduy', 29, 354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2573, 'Provincia Ayopaya', 29, 353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2574, 'Provincia Avilés', 29, 347)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2575, 'Provincia Abaroa', 29, 351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2576, 'Provincia Sabaya', 29, 351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2577, 'Provincia Arque', 29, 353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2578, 'Provincia Aroma', 29, 352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2579, 'Provincia Arce', 29, 347)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2580, 'Provincia Arani', 29, 353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2581, 'Provincia Andrés Ibáñez', 29, 348)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2582, 'Alonso de Ibáñez', 29, 349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2583, 'Provincia Abuná', 29, 350)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2584, 'Bolivar', 29, 353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2585, 'Tiraque Province', 29, 353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2586, 'Nor Carangas Province', 29, 351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2587, 'Sebastian Pagador Province', 29, 351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2588, 'Caranavi', 29, 352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2589, 'José Manuel Pando', 29, 352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2590, 'Puerto de Mejillones', 29, 351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2591, 'Litoral de Atacama', 29, 351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2592, 'Enrique Baldivieso', 29, 349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2593, 'German Busch', 29, 348)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2594, 'Guarayos', 29, 348)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2595, 'Viçosa do Ceará', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2596, 'Várzea Alegre', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2597, 'Umari', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2598, 'Ubajara', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2599, 'Tutóia', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2600, 'Traipu', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2601, 'Timbaúba', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2602, 'Tianguá', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2603, 'Tauá', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2604, 'Tamboril', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2605, 'Solonópole', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2606, 'Sobral', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2607, 'Senador Pompeu', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2608, 'São Benedito', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2609, 'Santa Quitéria', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2610, 'Santana do Ipanema', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2611, 'Santana do Cariri', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2612, 'Saboeiro', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2613, 'Russas', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2614, 'Reriutaba', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2615, 'Quixeramobim', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2616, 'Quixadá', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2617, 'Porto da Folha', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2618, 'Porteiras', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2619, 'Poço Redondo', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2620, 'Piranhas', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2621, 'Pereiro', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2622, 'Pentecoste', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2623, 'Pedra Branca', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2624, 'Parambu', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2625, 'Pão de Açúcar', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2626, 'Palmeira dos Índios', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2627, 'Pacoti', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2628, 'Pacatuba', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2629, 'Olho d''Água das Flores', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2630, 'Nova Russas', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2631, 'Neópolis', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2632, 'Mucambo', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2633, 'Monteiro', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2634, 'Monsenhor Tabosa', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2635, 'Mombaça', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2636, 'Missão Velha', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2637, 'Milagres', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2638, 'Meruoca', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2639, 'Mauriti', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2640, 'Mata Grande', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2641, 'Massapê', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2642, 'Maranguape', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2643, 'Major Isidoro', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2644, 'Limoeiro do Norte', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2645, 'Limoeiro de Anadia', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2646, 'Lavras da Mangabeira', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2647, 'Junqueiro', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2648, 'Jucás', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2649, 'Juazeiro do Norte', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2650, 'Jati', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2651, 'Jardim', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2652, 'Jaguaruana', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2653, 'Jaguaribe', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2654, 'Jaguaretama', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2655, 'Itatira', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2656, 'Itapajé', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2657, 'Itaituba', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2658, 'Itaiçaba', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2659, 'Iracema', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2660, 'Ipueiras', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2661, 'Ipu', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2662, 'Ipaumirim', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2663, 'Independência', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2664, 'Iguatu', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2665, 'Icó', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2666, 'Ibiapina', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2667, 'Guaraí', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2668, 'Guaraciaba do Norte', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2669, 'Frecheirinha', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2670, 'Fernando de Noronha', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2671, 'Feira Grande', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2672, 'Farias Brito', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2673, 'Delmiro Gouveia', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2674, 'Crato', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2675, 'Crateús', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2676, 'Coreaú', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2677, 'Cedro', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2678, 'Castanhal', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2679, 'Cariús', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2680, 'Caririaçu', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2681, 'Cariré', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2682, 'Capistrano', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2683, 'Canindé', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2684, 'Campos Sales', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2685, 'Brejo Santo', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2686, 'Bragança', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2687, 'Boa Viagem', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2688, 'Baturité', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2689, 'Batalha', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2690, 'Barro', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2691, 'Barbalha', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2692, 'Baixio', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2693, 'Aurora', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2694, 'Assaré', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2695, 'Areia', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2696, 'Araripe', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2697, 'Arapiraca', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2698, 'Aracoiaba', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2699, 'Anadia', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2700, 'Aiuaba', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2701, 'Água Branca', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2702, 'Tomar do Geru', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2703, 'Tobias Barreto', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2704, 'Tejupá', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2705, 'Soledade', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2706, 'Simão Dias', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2707, 'Sertãozinho', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2708, 'São Vicente', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2709, 'São Pedro', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2710, 'São Francisco de Paula', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2711, 'São Brás', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2712, 'Rio Grande', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2713, 'Ribeirópolis', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2714, 'Riachão do Dantas', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2715, 'Realeza', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2716, 'Propriá', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2717, 'Porto Real do Colégio', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2718, 'Poço Verde', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2719, 'Pinhão', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2720, 'Penedo', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2721, 'Pelotas', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2722, 'Patrocínio Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2723, 'Ouro Fino', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2724, 'Nossa Senhora das Dores', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2725, 'Nossa Senhora da Glória', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2726, 'Monte Alegre de Sergipe', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2727, 'Matias Barbosa', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2728, 'Mar de Espanha', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2729, 'Macambira', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2730, 'Luciara', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2731, 'Lindóia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2732, 'Lagoa Vermelha', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2733, 'Lagarto', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2734, 'Juiz de Fora', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2735, 'Itirapuã', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2736, 'Itapema', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2737, 'Itabi', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2738, 'Itabaianinha', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2739, 'Igreja Nova', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2740, 'Herval', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2741, 'Gararu', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2742, 'Frei Paulo', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2743, 'Curimatá', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2744, 'Cumbe', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2745, 'Concórdia', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2746, 'Conceição do Mato Dentro', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2747, 'Charqueada', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2748, 'Cedro de São João', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2749, 'Carira', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2750, 'Carazinho', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2751, 'Canhoba', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2752, 'Candeias', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2753, 'Campo Limpo Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2754, 'Campo do Brito', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2755, 'Campo Bom', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2756, 'Barreiras', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2757, 'Aquidabã', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2758, 'Antônio Prado', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2759, 'Analândia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2760, 'Amparo de São Francisco', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2761, 'Amparo', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2762, 'Américo de Campos', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2763, 'Americana', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2764, 'Álvaro de Carvalho', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2765, 'Álvares Machado', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2766, 'Álvares Florence', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2767, 'Alto Alegre', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2768, 'Altinópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2769, 'Alfredo Marcondes', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2770, 'Alagoinhas', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2771, 'Agudos', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2772, 'Águas de São Pedro', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2773, 'Águas da Prata', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2774, 'Aguaí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2775, 'Adamantina', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2776, 'Lábrea', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2777, 'Guajará-Mirim', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2778, 'Figueirão', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2779, 'São José do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2780, 'Capão do Cipó', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2781, 'Santo Antônio do Içá', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2782, 'Redenção', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2783, 'Santa Cruz do Arari', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2784, 'Santa Luzia do Pará', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2785, 'São Miguel do Guamá', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2786, 'Pau d''Arco', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2787, 'Santa Fé do Araguaia', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2788, 'Santa Maria do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2789, 'Açailândia', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2790, 'Alto Alegre do Pindaré', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2791, 'Barão de Grajaú', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2792, 'Chapadinha', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2793, 'Conceição do Lago-Açu', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2794, 'Governador Archer', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2795, 'Monção', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2796, 'Nina Rodrigues', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2797, 'Santa Luzia', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2798, 'Santa Luzia do Paruá', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2799, 'Santa Rita', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2800, 'São João do Paraíso', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2801, 'Beneditinos', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2802, 'Caridade do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2803, 'Curral Novo do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2804, 'Dirceu Arcoverde', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2805, 'Fronteiras', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2806, 'Jatobá do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2807, 'Jerumenha', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2808, 'Parnaguá', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2809, 'Pedro Laurentino', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2810, 'Santa Cruz dos Milagres', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2811, 'São Félix do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2812, 'São José do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2813, 'Simões', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2814, 'Alexandria', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2815, 'Angicos', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2816, 'Bom Jesus', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2817, 'Carnaúba dos Dantas', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2818, 'Equador', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2819, 'Jaçanã', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2820, 'Jucurutu', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2821, 'Maxaranguape', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2822, 'Mossoró', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2823, 'Nísia Floresta', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2824, 'Paraú', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2825, 'Patu', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2826, 'Pureza', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2827, 'São Tomé', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2828, 'Touros', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2829, 'Alhandra', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2830, 'Aparecida', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2831, 'Boqueirão', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2832, 'Cachoeira dos Índios', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2833, 'Cajazeiras', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2834, 'Conceição', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2835, 'Cruz do Espírito Santo', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2836, 'Curral de Cima', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2837, 'Frei Martinho', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2838, 'Ibiara', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2839, 'Lagoa', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2840, 'Lagoa Seca', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2841, 'Mamanguape', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2842, 'Mataraca', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2843, 'Pocinhos', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2844, 'Pombal', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2845, 'Rio Tinto', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2846, 'Santa Rita', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2847, 'São José do Bonfim', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2848, 'Sousa', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2849, 'Triunfo', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2850, 'Zabelê', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2851, 'Araripina', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2852, 'Correntes', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2853, 'São Benedito do Sul', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2854, 'Barra de Santo Antônio', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2855, 'Canapi', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2856, 'São Sebastião', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2857, 'Belmonte', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2858, 'Brejões', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2859, 'Dias d''Ávila', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2860, 'Dom Basílio', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2861, 'Iaçu', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2862, 'Ituberá', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2863, 'Lagoa Real', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2864, 'Muquém do São Francisco', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2865, 'Nilo Peçanha', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2866, 'Nordestina', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2867, 'Nova Viçosa', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2868, 'Oliveira dos Brejinhos', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2869, 'Poções', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2870, 'Presidente Tancredo Neves', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2871, 'Santa Maria da Vitória', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2872, 'Santana', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2873, 'Tremedal', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2874, 'Umburanas', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2875, 'Una', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2876, 'Além Paraíba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2877, 'Araçaí', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2878, 'Consolação', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2879, 'Guidoval', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2880, 'Guimarânia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2881, 'Patrocínio do Muriaé', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2882, 'Santa Bárbara do Tugúrio', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2883, 'São Brás do Suaçuí', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2884, 'São José do Calçado', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2885, 'Areal', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2886, 'Armação dos Búzios', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2887, 'Conceição de Macabu', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2888, 'Assis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2889, 'Divinolândia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2890, 'Guaraçaí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2891, 'Igarapava', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2892, 'José Bonifácio', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2893, 'Luís Antônio', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2894, 'Lupércio', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2895, 'Lutécia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2896, 'Nova Canaã Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2897, 'Nova Castilho', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2898, 'Saltinho', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2899, 'Ivaí', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2900, 'Ivaiporã', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2901, 'Lupionópolis', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2902, 'Planaltina do Paraná', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2903, 'Santa Cecília do Pavão', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2904, 'Santa Cruz de Monte Castelo', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2905, 'Santa Fé', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2906, 'Santana do Itararé', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2907, 'Santo Antônio do Paraíso', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2908, 'São José da Boa Vista', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2909, 'São José das Palmeiras', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2910, 'Serranópolis do Iguaçu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2911, 'Três Barras do Paraná', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2912, 'Campo Erê', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2913, 'Correia Pinto', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2914, 'Criciúma', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2915, 'Paraíso', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2916, 'Passos Maia', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2917, 'São Lourenço do Oeste', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2918, 'Barros Cassal', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2919, 'Boqueirão do Leão', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2920, 'Cerro Grande', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2921, 'David Canabarro', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2922, 'Derrubadas', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2923, 'Jaguari', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2924, 'Marques de Souza', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2925, 'Monte Belo do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2926, 'Mormaço', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2927, 'Nova Boa Vista', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2928, 'Nova Candelária', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2929, 'São José do Povo', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2930, 'Nova Marilândia', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2931, 'Nova Maringá', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2932, 'Água Fria de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2933, 'Alto Paraíso de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2934, 'Aurilândia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2935, 'Baliza', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2936, 'Chapadão do Céu', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2937, 'Divinópolis de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2938, 'Santa Bárbara de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2939, 'Santo Antônio do Descoberto', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2940, 'São Domingos', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2941, 'São Francisco de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2942, 'Senador Canedo', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2943, 'Serranópolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2944, 'Simolândia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2945, 'São José do Xingu', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2946, 'Gameleira de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2947, 'Coruripe', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2948, 'Paulista', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2949, 'São João', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2950, 'Apuiarés', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2951, 'Quixelô', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2952, 'Redenção', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2953, 'Canindé de São Francisco', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2954, 'São Luiz Gonzaga', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2955, 'Caibaté', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2956, 'Rolador', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2957, 'Mato Queimado', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2958, 'Westfália', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2959, 'Teutônia', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2960, 'Terra de Areia', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2961, 'Sobradinho', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2962, 'Serrinha', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2963, 'Serra Nova Dourada', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2964, 'São Pedro das Missões', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2965, 'São Miguel das Missões', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2966, 'São Félix do Araguaia', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2967, 'Santiago', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2968, 'Santa Margarida do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2969, 'Salvador do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2970, 'Roca Sales', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2971, 'Ribeirão Cascalheira', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2972, 'Relvado', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2973, 'Quatro Irmãos', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2974, 'Progresso', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2975, 'Ponte Preta', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2976, 'Paulo Bento', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2977, 'Pau D''arco do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2978, 'Palmeira das Missões', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2979, 'Novo Santo Antônio', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2980, 'Nova Nazaré', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2981, 'Nova Iguaçu', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2982, 'Nova Bréscia', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2983, 'Montenegro', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2984, 'Mesquita', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2985, 'Maratá', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2986, 'Lajeado', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2987, 'Lagoa Bonita do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2988, 'Jequiá da Praia', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2989, 'Jacutinga', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2990, 'Itati', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2991, 'Imigrante', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2992, 'Garibaldi', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2993, 'Forquetinha', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2994, 'Erechim', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2995, 'Cruzaltense', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2996, 'Coronel Pilar', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2997, 'Coqueiro Baixo', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2998, 'Cocalinho', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (2999, 'Canudos do Vale', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3000, 'Campinas do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3001, 'Bom Jesus do Araguaia', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3002, 'Bento Gonçalves', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3003, 'Barrocas', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3004, 'Altos', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3005, 'Alto Boa Vista', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3006, 'Água Boa', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3007, 'Aceguá', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3008, 'Mirassol d''Oeste', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3009, 'Lambari d''Oeste', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3010, 'Curvelândia', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3011, 'Cáceres', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3012, 'Alta Floresta d''Oeste', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3013, 'Ariquemes', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3014, 'Cabixi', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3015, 'Cacoal', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3016, 'Cerejeiras', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3017, 'Colorado do Oeste', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3018, 'Corumbiara', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3019, 'Costa Marques', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3020, 'Espigão d''Oeste', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3021, 'Ji-Paraná', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3022, 'Machadinho d''Oeste', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3023, 'Nova Brasilândia d''Oeste', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3024, 'Ouro Preto do Oeste', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3025, 'Pimenta Bueno', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3026, 'Porto Velho', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3027, 'Presidente Médici', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3028, 'Rio Crespo', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3029, 'Rolim de Moura', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3030, 'Santa Luzia d''Oeste', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3031, 'Vilhena', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3032, 'São Miguel do Guaporé', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3033, 'Alvorada d''Oeste', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3034, 'Alto Alegre dos Parecis', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3035, 'Alto Paraíso', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3036, 'Buritis', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3037, 'Novo Horizonte do Oeste', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3038, 'Cacaulândia', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3039, 'Campo Novo de Rondônia', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3040, 'Candeias do Jamari', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3041, 'Castanheiras', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3042, 'Chupinguaia', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3043, 'Cujubim', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3044, 'Itapuã do Oeste', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3045, 'Ministro Andreazza', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3046, 'Monte Negro', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3047, 'Nova União', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3048, 'Parecis', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3049, 'Pimenteiras do Oeste', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3050, 'Primavera de Rondônia', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3051, 'São Felipe d''Oeste', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3052, 'São Francisco do Guaporé', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3053, 'Seringueiras', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3054, 'Teixeirópolis', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3055, 'Theobroma', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3056, 'Urupá', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3057, 'Vale do Anari', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3058, 'Vale do Paraíso', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3059, 'Acrelândia', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3060, 'Assis Brasil', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3061, 'Brasiléia', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3062, 'Bujari', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3063, 'Capixaba', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3064, 'Cruzeiro do Sul', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3065, 'Epitaciolândia', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3066, 'Jordão', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3067, 'Mâncio Lima', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3068, 'Marechal Thaumaturgo', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3069, 'Plácido de Castro', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3070, 'Porto Walter', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3071, 'Rio Branco', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3072, 'Rodrigues Alves', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3073, 'Senador Guiomard', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3074, 'Tarauacá', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3075, 'Xapuri', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3076, 'Porto Acre', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3077, 'Alvarães', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3078, 'Amaturá', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3079, 'Anamã', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3080, 'Anori', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3081, 'Apuí', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3082, 'Atalaia do Norte', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3083, 'Autazes', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3084, 'Barcelos', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3085, 'Barreirinha', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3086, 'Benjamin Constant', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3087, 'Beruri', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3088, 'Boa Vista do Ramos', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3089, 'Boca do Acre', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3090, 'Borba', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3091, 'Caapiranga', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3092, 'Carauari', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3093, 'Careiro', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3094, 'Careiro da Várzea', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3095, 'Codajás', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3096, 'Eirunepé', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3097, 'Envira', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3098, 'Fonte Boa', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3099, 'Guajará', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3100, 'Humaitá', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3101, 'Ipixuna', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3102, 'Iranduba', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3103, 'Itacoatiara', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3104, 'Itamarati', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3105, 'Itapiranga', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3106, 'Japurá', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3107, 'Juruá', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3108, 'Jutaí', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3109, 'Manacapuru', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3110, 'Manaquiri', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3111, 'Manaus', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3112, 'Manicoré', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3113, 'Maraã', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3114, 'Maués', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3115, 'Nhamundá', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3116, 'Nova Olinda do Norte', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3117, 'Novo Airão', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3118, 'Novo Aripuanã', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3119, 'Parintins', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3120, 'Pauini', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3121, 'Presidente Figueiredo', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3122, 'Rio Preto da Eva', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3123, 'Santa Isabel do Rio Negro', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3124, 'São Gabriel da Cachoeira', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3125, 'São Paulo de Olivença', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3126, 'São Sebastião do Uatumã', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3127, 'Silves', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3128, 'Tabatinga', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3129, 'Tefé', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3130, 'Tonantins', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3131, 'Uarini', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3132, 'Urucará', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3133, 'Urucurituba', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3134, 'Amajari', 31, 382)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3135, 'Boa Vista', 31, 382)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3136, 'Bonfim', 31, 382)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3137, 'Cantá', 31, 382)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3138, 'Caroebe', 31, 382)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3139, 'Mucajaí', 31, 382)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3140, 'Normandia', 31, 382)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3141, 'Pacaraima', 31, 382)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3142, 'São João da Baliza', 31, 382)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3143, 'São Luiz', 31, 382)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3144, 'Uiramutã', 31, 382)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3145, 'Abaetetuba', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3146, 'Abel Figueiredo', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3147, 'Acará', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3148, 'Afuá', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3149, 'Água Azul do Norte', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3150, 'Alenquer', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3151, 'Anajás', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3152, 'Ananindeua', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3153, 'Anapu', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3154, 'Augusto Corrêa', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3155, 'Aurora do Pará', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3156, 'Bagre', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3157, 'Baião', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3158, 'Bannach', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3159, 'Barcarena', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3160, 'Belém', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3161, 'Belterra', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3162, 'Benevides', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3163, 'Bom Jesus do Tocantins', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3164, 'Bonito', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3165, 'Brasil Novo', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3166, 'Brejo Grande do Araguaia', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3167, 'Breu Branco', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3168, 'Breves', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3169, 'Bujaru', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3170, 'Cachoeira do Piriá', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3171, 'Cachoeira do Arari', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3172, 'Cametá', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3173, 'Canaã dos Carajás', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3174, 'Capanema', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3175, 'Capitão Poço', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3176, 'Chaves', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3177, 'Colares', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3178, 'Conceição do Araguaia', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3179, 'Concórdia do Pará', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3180, 'Cumaru do Norte', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3181, 'Curionópolis', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3182, 'Curralinho', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3183, 'Curuá', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3184, 'Curuçá', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3185, 'Dom Eliseu', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3186, 'Eldorado do Carajás', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3187, 'Faro', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3188, 'Floresta do Araguaia', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3189, 'Garrafão do Norte', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3190, 'Goianésia do Pará', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3191, 'Gurupá', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3192, 'Igarapé-Açu', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3193, 'Igarapé-Miri', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3194, 'Ipixuna do Pará', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3195, 'Irituia', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3196, 'Itupiranga', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3197, 'Jacareacanga', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3198, 'Jacundá', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3199, 'Juruti', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3200, 'Limoeiro do Ajuru', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3201, 'Mãe do Rio', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3202, 'Magalhães Barata', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3203, 'Marabá', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3204, 'Maracanã', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3205, 'Marapanim', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3206, 'Marituba', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3207, 'Medicilândia', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3208, 'Melgaço', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3209, 'Mocajuba', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3210, 'Moju', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3211, 'Monte Alegre', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3212, 'Muaná', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3213, 'Nova Esperança do Piriá', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3214, 'Nova Ipixuna', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3215, 'Nova Timboteua', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3216, 'Novo Progresso', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3217, 'Novo Repartimento', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3218, 'Óbidos', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3219, 'Oeiras do Pará', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3220, 'Oriximiná', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3221, 'Ourém', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3222, 'Ourilândia do Norte', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3223, 'Pacajá', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3224, 'Palestina do Pará', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3225, 'Paragominas', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3226, 'Parauapebas', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3227, 'Pau d''Arco', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3228, 'Peixe-Boi', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3229, 'Piçarra', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3230, 'Placas', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3231, 'Ponta de Pedras', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3232, 'Portel', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3233, 'Porto de Moz', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3234, 'Prainha', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3235, 'Primavera', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3236, 'Quatipuru', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3237, 'Rio Maria', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3238, 'Rondon do Pará', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3239, 'Rurópolis', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3240, 'Salinópolis', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3241, 'Salvaterra', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3242, 'Santa Bárbara do Pará', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3243, 'Santa Izabel do Pará', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3244, 'Santa Maria das Barreiras', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3245, 'Santa Maria do Pará', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3246, 'Santana do Araguaia', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3247, 'Santarém', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3248, 'Santarém Novo', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3249, 'Santo Antônio do Tauá', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3250, 'São Caetano de Odivelas', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3251, 'São Domingos do Araguaia', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3252, 'São Domingos do Capim', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3253, 'São Félix do Xingu', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3254, 'São Francisco do Pará', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3255, 'São Geraldo do Araguaia', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3256, 'São João da Ponta', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3257, 'São João de Pirabas', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3258, 'São João do Araguaia', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3259, 'São Sebastião da Boa Vista', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3260, 'Sapucaia', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3261, 'Senador José Porfírio', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3262, 'Soure', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3263, 'Tailândia', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3264, 'Terra Alta', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3265, 'Terra Santa', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3266, 'Tomé-Açu', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3267, 'Tracuateua', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3268, 'Trairão', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3269, 'Tucumã', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3270, 'Tucuruí', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3271, 'Ulianópolis', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3272, 'Uruará', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3273, 'Vigia', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3274, 'Vitória do Xingu', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3275, 'Xinguara', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3276, 'Amapá', 31, 366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3277, 'Calçoene', 31, 366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3278, 'Cutias', 31, 366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3279, 'Itaubal', 31, 366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3280, 'Vitória do Jari', 31, 366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3281, 'Macapá', 31, 366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3282, 'Mazagão', 31, 366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3283, 'Oiapoque', 31, 366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3284, 'Pracuúba', 31, 366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3285, 'Santana', 31, 366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3286, 'Tartarugalzinho', 31, 366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3287, 'Abreulândia', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3288, 'Aguiarnópolis', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3289, 'Aliança do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3290, 'Almas', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3291, 'Alvorada', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3292, 'Ananás', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3293, 'Angico', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3294, 'Aparecida do Rio Negro', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3295, 'Aragominas', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3296, 'Araguacema', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3297, 'Araguaçu', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3298, 'Araguaína', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3299, 'Araguanã', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3300, 'Araguatins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3301, 'Arapoema', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3302, 'Arraias', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3303, 'Augustinópolis', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3304, 'Aurora do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3305, 'Axixá do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3306, 'Babaçulândia', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3307, 'Bandeirantes do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3308, 'Barra do Ouro', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3309, 'Barrolândia', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3310, 'Bernardo Sayão', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3311, 'Bom Jesus do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3312, 'Brasilândia do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3313, 'Brejinho de Nazaré', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3314, 'Buriti do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3315, 'Cachoeirinha', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3316, 'Campos Lindos', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3317, 'Cariri do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3318, 'Carmolândia', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3319, 'Carrasco Bonito', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3320, 'Caseara', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3321, 'Centenário', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3322, 'Chapada de Areia', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3323, 'Chapada da Natividade', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3324, 'Colinas do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3325, 'Combinado', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3326, 'Conceição do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3327, 'Couto Magalhães', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3328, 'Cristalândia', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3329, 'Crixás do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3330, 'Darcinópolis', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3331, 'Dianópolis', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3332, 'Divinópolis do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3333, 'Dois Irmãos do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3334, 'Dueré', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3335, 'Esperantina', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3336, 'Fátima', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3337, 'Figueirópolis', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3338, 'Filadélfia', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3339, 'Formoso do Araguaia', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3340, 'Fortaleza do Tabocão', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3341, 'Goianorte', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3342, 'Goiatins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3343, 'Gurupi', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3344, 'Itacajá', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3345, 'Itaguatins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3346, 'Itapiratins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3347, 'Itaporã do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3348, 'Jaú do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3349, 'Juarina', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3350, 'Lagoa do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3351, 'Lajeado', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3352, 'Lavandeira', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3353, 'Lizarda', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3354, 'Luzinópolis', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3355, 'Marianópolis do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3356, 'Mateiros', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3357, 'Maurilândia do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3358, 'Miracema do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3359, 'Miranorte', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3360, 'Monte Santo do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3361, 'Palmeiras do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3362, 'Muricilândia', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3363, 'Nazaré', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3364, 'Nova Olinda', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3365, 'Nova Rosalândia', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3366, 'Novo Acordo', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3367, 'Novo Alegre', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3368, 'Novo Jardim', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3369, 'Oliveira de Fátima', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3370, 'Palmeirante', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3371, 'Palmeirópolis', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3372, 'Paraíso do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3373, 'Paranã', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3374, 'Pedro Afonso', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3375, 'Peixe', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3376, 'Pequizeiro', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3377, 'Colméia', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3378, 'Pindorama do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3379, 'Piraquê', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3380, 'Pium', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3381, 'Ponte Alta do Bom Jesus', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3382, 'Ponte Alta do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3383, 'Porto Alegre do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3384, 'Porto Nacional', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3385, 'Praia Norte', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3386, 'Pugmil', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3387, 'Recursolândia', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3388, 'Riachinho', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3389, 'Rio da Conceição', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3390, 'Rio dos Bois', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3391, 'Rio Sono', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3392, 'Sampaio', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3393, 'Sandolândia', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3394, 'Santa Rita do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3395, 'Santa Rosa do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3396, 'Santa Tereza do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3397, 'Santa Terezinha do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3398, 'São Bento do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3399, 'São Félix do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3400, 'São Miguel do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3401, 'São Salvador do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3402, 'São Sebastião do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3403, 'Silvanópolis', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3404, 'Sítio Novo do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3405, 'Sucupira', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3406, 'Taguatinga', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3407, 'Taipas do Tocantins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3408, 'Talismã', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3409, 'Palmas', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3410, 'Tocantínia', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3411, 'Tocantinópolis', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3412, 'Tupirama', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3413, 'Wanderlândia', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3414, 'Xambioá', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3415, 'Afonso Cunha', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3416, 'Água Doce do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3417, 'Alcântara', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3418, 'Aldeias Altas', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3419, 'Altamira do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3420, 'Alto Alegre do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3421, 'Alto Parnaíba', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3422, 'Amapá do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3423, 'Amarante do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3424, 'Anajatuba', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3425, 'Anapurus', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3426, 'Apicum-Açu', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3427, 'Araguanã', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3428, 'Araioses', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3429, 'Arame', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3430, 'Arari', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3431, 'Axixá', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3432, 'Bacabal', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3433, 'Bacabeira', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3434, 'Bacuri', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3435, 'Bacurituba', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3436, 'Balsas', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3437, 'Barra do Corda', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3438, 'Barreirinhas', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3439, 'Belágua', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3440, 'Bela Vista do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3441, 'Benedito Leite', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3442, 'Bequimão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3443, 'Bernardo do Mearim', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3444, 'Boa Vista do Gurupi', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3445, 'Bom Jardim', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3446, 'Bom Jesus das Selvas', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3447, 'Bom Lugar', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3448, 'Brejo', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3449, 'Brejo de Areia', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3450, 'Buriti', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3451, 'Buriti Bravo', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3452, 'Buriticupu', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3453, 'Buritirana', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3454, 'Cachoeira Grande', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3455, 'Cajapió', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3456, 'Cajari', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3457, 'Campestre do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3458, 'Cândido Mendes', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3459, 'Cantanhede', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3460, 'Capinzal do Norte', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3461, 'Carolina', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3462, 'Carutapera', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3463, 'Caxias', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3464, 'Cedral', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3465, 'Central do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3466, 'Centro do Guilherme', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3467, 'Centro Novo do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3468, 'Cidelândia', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3469, 'Codó', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3470, 'Coelho Neto', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3471, 'Colinas', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3472, 'Coroatá', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3473, 'Cururupu', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3474, 'Davinópolis', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3475, 'Dom Pedro', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3476, 'Duque Bacelar', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3477, 'Esperantinópolis', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3478, 'Estreito', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3479, 'Feira Nova do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3480, 'Fernando Falcão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3481, 'Formosa da Serra Negra', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3482, 'Fortaleza dos Nogueiras', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3483, 'Fortuna', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3484, 'Godofredo Viana', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3485, 'Gonçalves Dias', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3486, 'Governador Edison Lobão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3487, 'Governador Eugênio Barros', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3488, 'Governador Luiz Rocha', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3489, 'Governador Newton Bello', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3490, 'Governador Nunes Freire', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3491, 'Graça Aranha', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3492, 'Grajaú', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3493, 'Guimarães', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3494, 'Humberto de Campos', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3495, 'Icatu', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3496, 'Igarapé do Meio', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3497, 'Igarapé Grande', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3498, 'Imperatriz', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3499, 'Itaipava do Grajaú', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3500, 'Itapecuru Mirim', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3501, 'Itinga do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3502, 'Jatobá', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3503, 'Jenipapo dos Vieiras', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3504, 'João Lisboa', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3505, 'Joselândia', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3506, 'Junco do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3507, 'Lago da Pedra', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3508, 'Lago do Junco', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3509, 'Lago Verde', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3510, 'Lagoa do Mato', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3511, 'Lago dos Rodrigues', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3512, 'Lagoa Grande do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3513, 'Lajeado Novo', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3514, 'Lima Campos', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3515, 'Loreto', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3516, 'Luís Domingues', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3517, 'Magalhães de Almeida', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3518, 'Maracaçumé', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3519, 'Marajá do Sena', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3520, 'Maranhãozinho', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3521, 'Mata Roma', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3522, 'Matinha', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3523, 'Matões', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3524, 'Matões do Norte', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3525, 'Milagres do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3526, 'Mirador', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3527, 'Miranda do Norte', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3528, 'Mirinzal', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3529, 'Montes Altos', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3530, 'Morros', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3531, 'Nova Colinas', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3532, 'Nova Iorque', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3533, 'Nova Olinda do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3534, 'Olho d''Água das Cunhãs', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3535, 'Olinda Nova do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3536, 'Paço do Lumiar', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3537, 'Palmeirândia', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3538, 'Paraibano', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3539, 'Parnarama', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3540, 'Passagem Franca', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3541, 'Pastos Bons', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3542, 'Paulino Neves', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3543, 'Paulo Ramos', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3544, 'Pedreiras', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3545, 'Pedro do Rosário', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3546, 'Penalva', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3547, 'Peri Mirim', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3548, 'Peritoró', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3549, 'Pindaré-Mirim', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3550, 'Pinheiro', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3551, 'Pio XII', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3552, 'Pirapemas', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3553, 'Poção de Pedras', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3554, 'Porto Franco', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3555, 'Porto Rico do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3556, 'Presidente Dutra', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3557, 'Presidente Juscelino', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3558, 'Presidente Médici', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3559, 'Presidente Sarney', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3560, 'Presidente Vargas', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3561, 'Primeira Cruz', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3562, 'Raposa', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3563, 'Riachão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3564, 'Ribamar Fiquene', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3565, 'Rosário', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3566, 'Sambaíba', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3567, 'Santa Filomena do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3568, 'Santa Helena', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3569, 'Santa Inês', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3570, 'Santa Quitéria do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3571, 'Santana do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3572, 'Santo Amaro do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3573, 'Santo Antônio dos Lopes', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3574, 'São Benedito do Rio Preto', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3575, 'São Bento', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3576, 'São Bernardo', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3577, 'São Domingos do Azeitão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3578, 'São Domingos do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3579, 'São Félix de Balsas', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3580, 'São Francisco do Brejão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3581, 'São Francisco do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3582, 'São João Batista', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3583, 'São João do Carú', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3584, 'São João do Soter', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3585, 'São João dos Patos', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3586, 'São José de Ribamar', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3587, 'São José dos Basílios', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3588, 'São Luís', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3589, 'São Luís Gonzaga do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3590, 'São Mateus do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3591, 'São Pedro da Água Branca', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3592, 'São Pedro dos Crentes', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3593, 'São Raimundo das Mangabeiras', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3594, 'São Vicente Ferrer', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3595, 'Satubinha', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3596, 'Senador Alexandre Costa', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3597, 'Senador La Rocque', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3598, 'Serrano do Maranhão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3599, 'Sítio Novo', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3600, 'Sucupira do Norte', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3601, 'Sucupira do Riachão', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3602, 'Tasso Fragoso', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3603, 'Timbiras', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3604, 'Timon', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3605, 'Trizidela do Vale', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3606, 'Tufilândia', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3607, 'Tuntum', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3608, 'Turiaçu', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3609, 'Turilândia', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3610, 'Urbano Santos', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3611, 'Vargem Grande', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3612, 'Viana', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3613, 'Vila Nova dos Martírios', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3614, 'Vitória do Mearim', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3615, 'Vitorino Freire', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3616, 'Zé Doca', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3617, 'Acauã', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3618, 'Agricolândia', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3619, 'Alagoinha do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3620, 'Alegrete do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3621, 'Alto Longá', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3622, 'Alvorada do Gurguéia', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3623, 'Amarante', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3624, 'Angical do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3625, 'Anísio de Abreu', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3626, 'Antônio Almeida', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3627, 'Aroazes', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3628, 'Arraial', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3629, 'Assunção do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3630, 'Baixa Grande do Ribeiro', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3631, 'Barra d''Alcântara', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3632, 'Barras', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3633, 'Barreiras do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3634, 'Barro Duro', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3635, 'Bela Vista do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3636, 'Belém do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3637, 'Bertolínia', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3638, 'Betânia do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3639, 'Boa Hora', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3640, 'Bocaina', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3641, 'Bom Jesus', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3642, 'Bom Princípio do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3643, 'Bonfim do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3644, 'Boqueirão do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3645, 'Brasileira', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3646, 'Brejo do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3647, 'Buriti dos Lopes', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3648, 'Buriti dos Montes', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3649, 'Cabeceiras do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3650, 'Cajazeiras do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3651, 'Cajueiro da Praia', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3652, 'Caldeirão Grande do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3653, 'Campinas do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3654, 'Campo Alegre do Fidalgo', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3655, 'Campo Grande do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3656, 'Campo Largo do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3657, 'Campo Maior', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3658, 'Canavieira', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3659, 'Canto do Buriti', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3660, 'Capitão de Campos', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3661, 'Capitão Gervásio Oliveira', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3662, 'Caracol', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3663, 'Caraúbas do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3664, 'Castelo do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3665, 'Caxingó', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3666, 'Cocal', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3667, 'Cocal de Telha', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3668, 'Cocal dos Alves', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3669, 'Coivaras', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3670, 'Colônia do Gurguéia', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3671, 'Colônia do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3672, 'Conceição do Canindé', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3673, 'Coronel José Dias', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3674, 'Corrente', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3675, 'Cristalândia do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3676, 'Cristino Castro', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3677, 'Currais', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3678, 'Curralinhos', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3679, 'Demerval Lobão', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3680, 'Dom Expedito Lopes', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3681, 'Domingos Mourão', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3682, 'Dom Inocêncio', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3683, 'Elesbão Veloso', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3684, 'Eliseu Martins', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3685, 'Esperantina', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3686, 'Fartura do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3687, 'Flores do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3688, 'Floresta do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3689, 'Francinópolis', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3690, 'Francisco Ayres', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3691, 'Francisco Macedo', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3692, 'Francisco Santos', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3693, 'Geminiano', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3694, 'Gilbués', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3695, 'Guadalupe', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3696, 'Guaribas', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3697, 'Hugo Napoleão', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3698, 'Ilha Grande', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3699, 'Inhuma', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3700, 'Ipiranga do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3701, 'Isaías Coelho', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3702, 'Itainópolis', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3703, 'Itaueira', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3704, 'Jacobina do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3705, 'Jaicós', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3706, 'Jardim do Mulato', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3707, 'João Costa', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3708, 'Joaquim Pires', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3709, 'Joca Marques', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3710, 'José de Freitas', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3711, 'Juazeiro do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3712, 'Júlio Borges', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3713, 'Jurema', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3714, 'Lagoinha do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3715, 'Lagoa Alegre', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3716, 'Lagoa do Barro do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3717, 'Lagoa de São Francisco', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3718, 'Lagoa do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3719, 'Lagoa do Sítio', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3720, 'Landri Sales', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3721, 'Luís Correia', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3722, 'Luzilândia', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3723, 'Madeiro', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3724, 'Manoel Emídio', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3725, 'Marcolândia', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3726, 'Marcos Parente', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3727, 'Massapê do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3728, 'Matias Olímpio', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3729, 'Miguel Alves', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3730, 'Miguel Leão', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3731, 'Milton Brandão', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3732, 'Monsenhor Gil', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3733, 'Monsenhor Hipólito', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3734, 'Monte Alegre do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3735, 'Morro do Chapéu do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3736, 'Murici dos Portelas', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3737, 'Nazaré do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3738, 'Nossa Senhora de Nazaré', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3739, 'Nossa Senhora dos Remédios', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3740, 'Novo Oriente do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3741, 'Novo Santo Antônio', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3742, 'Oeiras', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3743, 'Olho d''Água do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3744, 'Padre Marcos', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3745, 'Paes Landim', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3746, 'Pajeú do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3747, 'Palmeira do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3748, 'Palmeirais', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3749, 'Paquetá', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3750, 'Parnaíba', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3751, 'Passagem Franca do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3752, 'Patos do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3753, 'Paulistana', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3754, 'Pavussu', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3755, 'Pedro II', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3756, 'Nova Santa Rita', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3757, 'Picos', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3758, 'Pimenteiras', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3759, 'Pio IX', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3760, 'Piracuruca', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3761, 'Piripiri', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3762, 'Porto', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3763, 'Porto Alegre do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3764, 'Prata do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3765, 'Queimada Nova', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3766, 'Redenção do Gurguéia', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3767, 'Regeneração', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3768, 'Riacho Frio', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3769, 'Ribeira do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3770, 'Ribeiro Gonçalves', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3771, 'Rio Grande do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3772, 'Santa Cruz do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3773, 'Santa Filomena', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3774, 'Santa Luz', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3775, 'Santana do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3776, 'Santa Rosa do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3777, 'Santo Antônio de Lisboa', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3778, 'Santo Antônio dos Milagres', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3779, 'Santo Inácio do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3780, 'São Braz do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3781, 'São Francisco de Assis do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3782, 'São Francisco do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3783, 'São Gonçalo do Gurguéia', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3784, 'São Gonçalo do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3785, 'São João da Canabrava', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3786, 'São João da Serra', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3787, 'São João da Varjota', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3788, 'São João do Arraial', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3789, 'São João do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3790, 'São José do Divino', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3791, 'São José do Peixe', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3792, 'São Julião', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3793, 'São Lourenço do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3794, 'São Luis do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3795, 'São Miguel da Baixa Grande', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3796, 'São Miguel do Fidalgo', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3797, 'São Miguel do Tapuio', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3798, 'São Pedro do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3799, 'São Raimundo Nonato', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3800, 'Sebastião Barros', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3801, 'Sebastião Leal', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3802, 'Sigefredo Pacheco', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3803, 'Simplício Mendes', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3804, 'Socorro do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3805, 'Sussuapara', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3806, 'Tamboril do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3807, 'Tanque do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3808, 'Teresina', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3809, 'União', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3810, 'Uruçuí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3811, 'Valença do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3812, 'Várzea Branca', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3813, 'Várzea Grande', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3814, 'Vera Mendes', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3815, 'Vila Nova do Piauí', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3816, 'Wall Ferraz', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3817, 'Abaiara', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3818, 'Acarape', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3819, 'Acaraú', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3820, 'Alcântaras', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3821, 'Altaneira', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3822, 'Alto Santo', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3823, 'Itapipoca', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3824, 'Antonina do Norte', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3825, 'Aquiraz', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3826, 'Aratuba', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3827, 'Arneiroz', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3828, 'Barreira', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3829, 'Barroquinha', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3830, 'Beberibe', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3831, 'Bela Cruz', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3832, 'Camocim', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3833, 'Caridade', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3834, 'Carnaubal', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3835, 'Cascavel', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3836, 'Catarina', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3837, 'Catunda', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3838, 'Caucaia', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3839, 'Chaval', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3840, 'Choró', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3841, 'Chorozinho', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3842, 'Cruz', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3843, 'Deputado Irapuan Pinheiro', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3844, 'Eusébio', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3845, 'Fortaleza', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3846, 'Fortim', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3847, 'General Sampaio', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3848, 'Granjeiro', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3849, 'Groaíras', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3850, 'Guaiúba', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3851, 'Guaramiranga', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3852, 'Horizonte', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3853, 'Ibaretama', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3854, 'Ibicuitinga', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3855, 'Icapuí', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3856, 'Ipaporanga', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3857, 'Amontada', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3858, 'Itarema', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3859, 'Jijoca de Jericoacoara', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3860, 'Maracanaú', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3861, 'Marco', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3862, 'Martinópole', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3863, 'Miraíma', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3864, 'Morada Nova', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3865, 'Moraújo', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3866, 'Morrinhos', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3867, 'Mulungu', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3868, 'Novo Oriente', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3869, 'Orós', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3870, 'Pacajus', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3871, 'Pacujá', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3872, 'Palmácia', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3873, 'Paracuru', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3874, 'Paraipaba', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3875, 'Paramoti', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3876, 'Penaforte', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3877, 'Pindoretama', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3878, 'Piquet Carneiro', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3879, 'Pires Ferreira', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3880, 'Poranga', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3881, 'Potengi', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3882, 'Quiterianópolis', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3883, 'Quixeré', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3884, 'Salitre', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3885, 'Santana do Acaraú', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3886, 'São Gonçalo do Amarante', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3887, 'São João do Jaguaribe', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3888, 'São Luís do Curu', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3889, 'Tarrafas', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3890, 'Tejuçuoca', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3891, 'Trairi', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3892, 'Tururu', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3893, 'Umirim', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3894, 'Uruburetama', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3895, 'Uruoca', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3896, 'Acari', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3897, 'Açu', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3898, 'Afonso Bezerra', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3899, 'Água Nova', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3900, 'Almino Afonso', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3901, 'Alto do Rodrigues', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3902, 'Antônio Martins', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3903, 'Apodi', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3904, 'Areia Branca', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3905, 'Arês', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3906, 'Augusto Severo', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3907, 'Baía Formosa', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3908, 'Baraúna', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3909, 'Barcelona', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3910, 'Bento Fernandes', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3911, 'Bodó', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3912, 'Brejinho', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3913, 'Caiçara do Norte', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3914, 'Caicó', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3915, 'Campo Redondo', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3916, 'Canguaretama', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3917, 'Caraúbas', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3918, 'Carnaubais', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3919, 'Ceará-Mirim', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3920, 'Cerro Corá', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3921, 'Coronel Ezequiel', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3922, 'Coronel João Pessoa', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3923, 'Cruzeta', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3924, 'Currais Novos', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3925, 'Doutor Severiano', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3926, 'Parnamirim', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3927, 'Encanto', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3928, 'Extremoz', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3929, 'Felipe Guerra', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3930, 'Fernando Pedroza', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3931, 'Florânia', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3932, 'Francisco Dantas', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3933, 'Frutuoso Gomes', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3934, 'Galinhos', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3935, 'Goianinha', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3936, 'Governador Dix-Sept Rosado', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3937, 'Grossos', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3938, 'Guamaré', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3939, 'Ielmo Marinho', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3940, 'Ipanguaçu', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3941, 'Ipueira', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3942, 'Itajá', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3943, 'Itaú', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3944, 'Jandaíra', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3945, 'Janduís', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3946, 'Januário Cicco', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3947, 'Japi', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3948, 'Jardim de Angicos', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3949, 'Jardim de Piranhas', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3950, 'Jardim do Seridó', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3951, 'João Câmara', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3952, 'João Dias', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3953, 'José da Penha', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3954, 'Lagoa d''Anta', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3955, 'Lagoa de Pedras', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3956, 'Lagoa de Velhos', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3957, 'Lagoa Nova', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3958, 'Lagoa Salgada', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3959, 'Lajes', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3960, 'Lajes Pintadas', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3961, 'Lucrécia', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3962, 'Luís Gomes', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3963, 'Macaíba', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3964, 'Macau', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3965, 'Major Sales', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3966, 'Marcelino Vieira', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3967, 'Martins', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3968, 'Messias Targino', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3969, 'Montanhas', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3970, 'Monte Alegre', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3971, 'Monte das Gameleiras', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3972, 'Natal', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3973, 'Nova Cruz', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3974, 'Olho-d''Água do Borges', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3975, 'Ouro Branco', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3976, 'Paraná', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3977, 'Parazinho', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3978, 'Parelhas', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3979, 'Rio do Fogo', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3980, 'Passa e Fica', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3981, 'Passagem', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3982, 'Santa Maria', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3983, 'Pau dos Ferros', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3984, 'Pedra Grande', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3985, 'Pedra Preta', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3986, 'Pedro Avelino', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3987, 'Pedro Velho', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3988, 'Pendências', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3989, 'Pilões', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3990, 'Poço Branco', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3991, 'Portalegre', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3992, 'Porto do Mangue', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3993, 'Serra Caiada', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3994, 'Rafael Fernandes', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3995, 'Rafael Godeiro', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3996, 'Riacho da Cruz', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3997, 'Riacho de Santana', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3998, 'Riachuelo', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (3999, 'Rodolfo Fernandes', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4000, 'Tibau', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4001, 'Ruy Barbosa', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4002, 'Santa Cruz', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4003, 'Santana do Matos', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4004, 'Santana do Seridó', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4005, 'Santo Antônio', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4006, 'São Bento do Norte', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4007, 'São Bento do Trairí', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4008, 'São Fernando', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4009, 'São Francisco do Oeste', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4010, 'São Gonçalo do Amarante', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4011, 'São João do Sabugi', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4012, 'São José de Mipibu', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4013, 'São José do Campestre', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4014, 'São José do Seridó', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4015, 'São Miguel', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4016, 'São Miguel do Gostoso', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4017, 'São Paulo do Potengi', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4018, 'São Rafael', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4019, 'Senador Elói de Souza', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4020, 'Senador Georgino Avelino', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4021, 'Serra de São Bento', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4022, 'Serra do Mel', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4023, 'Serra Negra do Norte', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4024, 'Serrinha', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4025, 'Serrinha dos Pintos', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4026, 'Severiano Melo', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4027, 'Sítio Novo', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4028, 'Taboleiro Grande', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4029, 'Taipu', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4030, 'Tangará', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4031, 'Tenente Ananias', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4032, 'Tenente Laurentino Cruz', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4033, 'Tibau do Sul', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4034, 'Timbaúba dos Batistas', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4035, 'Triunfo Potiguar', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4036, 'Umarizal', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4037, 'Upanema', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4038, 'Venha-Ver', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4039, 'Vera Cruz', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4040, 'Viçosa', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4041, 'Vila Flor', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4042, 'Aguiar', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4043, 'Alagoa Grande', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4044, 'Alagoa Nova', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4045, 'Alagoinha', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4046, 'Alcantil', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4047, 'Algodão de Jandaíra', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4048, 'São João do Rio do Peixe', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4049, 'Araçagi', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4050, 'Arara', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4051, 'Araruna', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4052, 'Areia de Baraúnas', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4053, 'Areial', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4054, 'Aroeiras', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4055, 'Assunção', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4056, 'Baía da Traição', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4057, 'Bananeiras', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4058, 'Baraúna', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4059, 'Barra de Santana', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4060, 'Barra de Santa Rosa', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4061, 'Barra de São Miguel', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4062, 'Bayeux', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4063, 'Belém', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4064, 'Belém do Brejo do Cruz', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4065, 'Bernardino Batista', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4066, 'Boa Ventura', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4067, 'Boa Vista', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4068, 'Bom Jesus', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4069, 'Bom Sucesso', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4070, 'Bonito de Santa Fé', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4071, 'Igaracy', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4072, 'Borborema', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4073, 'Brejo do Cruz', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4074, 'Brejo dos Santos', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4075, 'Caaporã', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4076, 'Cabaceiras', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4077, 'Cabedelo', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4078, 'Cacimba de Areia', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4079, 'Cacimba de Dentro', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4080, 'Cacimbas', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4081, 'Caiçara', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4082, 'Cajazeirinhas', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4083, 'Caldas Brandão', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4084, 'Camalaú', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4085, 'Campina Grande', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4086, 'Capim', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4087, 'Caraúbas', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4088, 'Carrapateira', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4089, 'Casserengue', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4090, 'Catingueira', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4091, 'Catolé do Rocha', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4092, 'Caturité', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4093, 'Condado', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4094, 'Conde', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4095, 'Congo', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4096, 'Coremas', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4097, 'Coxixola', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4098, 'Cubati', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4099, 'Cuité', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4100, 'Cuitegi', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4101, 'Cuité de Mamanguape', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4102, 'Curral Velho', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4103, 'Damião', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4104, 'Desterro', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4105, 'Vista Serrana', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4106, 'Diamante', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4107, 'Dona Inês', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4108, 'Duas Estradas', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4109, 'Emas', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4110, 'Esperança', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4111, 'Fagundes', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4112, 'Gado Bravo', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4113, 'Guarabira', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4114, 'Gurinhém', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4115, 'Imaculada', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4116, 'Ingá', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4117, 'Itabaiana', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4118, 'Itaporanga', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4119, 'Itapororoca', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4120, 'Itatuba', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4121, 'Jacaraú', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4122, 'Jericó', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4123, 'João Pessoa', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4124, 'Juarez Távora', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4125, 'Juazeirinho', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4126, 'Junco do Seridó', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4127, 'Juripiranga', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4128, 'Juru', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4129, 'Lagoa de Dentro', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4130, 'Lastro', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4131, 'Livramento', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4132, 'Logradouro', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4133, 'Lucena', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4134, 'Mãe d''Água', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4135, 'Malta', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4136, 'Manaíra', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4137, 'Marcação', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4138, 'Mari', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4139, 'Marizópolis', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4140, 'Massaranduba', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4141, 'Matinhas', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4142, 'Mato Grosso', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4143, 'Maturéia', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4144, 'Mogeiro', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4145, 'Montadas', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4146, 'Monte Horebe', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4147, 'Mulungu', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4148, 'Natuba', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4149, 'Nazarezinho', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4150, 'Nova Floresta', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4151, 'Nova Olinda', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4152, 'Nova Palmeira', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4153, 'Olho d''Água', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4154, 'Olivedos', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4155, 'Ouro Velho', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4156, 'Parari', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4157, 'Passagem', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4158, 'Patos', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4159, 'Pedra Lavrada', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4160, 'Pedras de Fogo', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4161, 'Picuí', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4162, 'Pilar', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4163, 'Pilões', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4164, 'Pilõezinhos', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4165, 'Pirpirituba', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4166, 'Pitimbu', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4167, 'Poço Dantas', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4168, 'Poço de José de Moura', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4169, 'Princesa Isabel', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4170, 'Puxinanã', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4171, 'Queimadas', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4172, 'Quixaba', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4173, 'Remígio', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4174, 'Pedro Régis', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4175, 'Riachão', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4176, 'Riachão do Bacamarte', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4177, 'Riachão do Poço', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4178, 'Riacho de Santo Antônio', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4179, 'Riacho dos Cavalos', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4180, 'Salgadinho', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4181, 'Salgado de São Félix', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4182, 'Santa Cecília', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4183, 'Santa Cruz', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4184, 'Santa Helena', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4185, 'Santa Inês', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4186, 'Santa Luzia', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4187, 'Santana de Mangueira', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4188, 'Santana dos Garrotes', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4189, 'Joca Claudino', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4190, 'Santa Teresinha', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4191, 'Santo André', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4192, 'São Bento', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4193, 'São Bentinho', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4194, 'São Domingos do Cariri', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4195, 'São Domingos', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4196, 'São João do Cariri', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4197, 'São João do Tigre', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4198, 'São José da Lagoa Tapada', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4199, 'São José de Caiana', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4200, 'São José de Espinharas', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4201, 'São José dos Ramos', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4202, 'São José de Piranhas', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4203, 'São José de Princesa', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4204, 'São José do Brejo do Cruz', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4205, 'São José do Sabugi', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4206, 'São José dos Cordeiros', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4207, 'São Mamede', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4208, 'São Miguel de Taipu', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4209, 'São Sebastião de Lagoa de Roça', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4210, 'São Sebastião do Umbuzeiro', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4211, 'Sapé', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4212, 'São Vicente do Seridó', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4213, 'Serra Branca', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4214, 'Serra da Raiz', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4215, 'Serra Grande', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4216, 'Serra Redonda', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4217, 'Serraria', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4218, 'Sobrado', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4219, 'Solânea', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4220, 'Sossêgo', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4221, 'Sumé', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4222, 'Tacima', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4223, 'Taperoá', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4224, 'Tavares', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4225, 'Teixeira', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4226, 'Tenório', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4227, 'Uiraúna', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4228, 'Umbuzeiro', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4229, 'Várzea', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4230, 'Vieirópolis', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4231, 'Abreu e Lima', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4232, 'Afogados da Ingazeira', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4233, 'Afrânio', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4234, 'Agrestina', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4235, 'Água Preta', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4236, 'Águas Belas', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4237, 'Alagoinha', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4238, 'Aliança', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4239, 'Altinho', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4240, 'Amaraji', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4241, 'Angelim', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4242, 'Arcoverde', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4243, 'Barra de Guabiraba', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4244, 'Barreiros', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4245, 'Belém de Maria', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4246, 'Belém do São Francisco', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4247, 'Belo Jardim', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4248, 'Betânia', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4249, 'Bezerros', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4250, 'Bodocó', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4251, 'Bom Conselho', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4252, 'Bom Jardim', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4253, 'Bonito', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4254, 'Brejão', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4255, 'Brejinho', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4256, 'Brejo da Madre de Deus', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4257, 'Buíque', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4258, 'Cabo de Santo Agostinho', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4259, 'Cabrobó', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4260, 'Cachoeirinha', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4261, 'Caetés', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4262, 'Calçado', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4263, 'Calumbi', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4264, 'Camaragibe', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4265, 'Camocim de São Félix', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4266, 'Camutanga', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4267, 'Canhotinho', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4268, 'Capoeiras', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4269, 'Carnaíba', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4270, 'Carnaubeira da Penha', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4271, 'Carpina', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4272, 'Caruaru', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4273, 'Casinhas', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4274, 'Catende', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4275, 'Chã de Alegria', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4276, 'Chã Grande', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4277, 'Condado', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4278, 'Cortês', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4279, 'Cumaru', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4280, 'Cupira', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4281, 'Custódia', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4282, 'Dormentes', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4283, 'Escada', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4284, 'Exu', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4285, 'Feira Nova', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4286, 'Floresta', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4287, 'Frei Miguelinho', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4288, 'Gameleira', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4289, 'Garanhuns', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4290, 'Glória do Goitá', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4291, 'Goiana', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4292, 'Granito', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4293, 'Gravatá', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4294, 'Iati', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4295, 'Ibimirim', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4296, 'Ibirajuba', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4297, 'Igarassu', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4298, 'Iguaracy', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4299, 'Inajá', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4300, 'Ingazeira', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4301, 'Ipojuca', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4302, 'Ipubi', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4303, 'Itacuruba', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4304, 'Itaíba', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4305, 'Ilha de Itamaracá', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4306, 'Itapetim', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4307, 'Itapissuma', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4308, 'Itaquitinga', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4309, 'Jaboatão dos Guararapes', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4310, 'Jaqueira', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4311, 'Jataúba', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4312, 'Jatobá', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4313, 'João Alfredo', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4314, 'Joaquim Nabuco', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4315, 'Jucati', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4316, 'Jupi', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4317, 'Jurema', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4318, 'Lagoa do Carro', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4319, 'Lagoa de Itaenga', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4320, 'Lagoa do Ouro', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4321, 'Lagoa dos Gatos', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4322, 'Lagoa Grande', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4323, 'Lajedo', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4324, 'Limoeiro', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4325, 'Macaparana', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4326, 'Machados', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4327, 'Manari', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4328, 'Maraial', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4329, 'Mirandiba', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4330, 'Moreno', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4331, 'Nazaré da Mata', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4332, 'Olinda', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4333, 'Orobó', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4334, 'Orocó', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4335, 'Ouricuri', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4336, 'Palmares', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4337, 'Palmeirina', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4338, 'Panelas', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4339, 'Paranatama', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4340, 'Parnamirim', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4341, 'Passira', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4342, 'Paudalho', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4343, 'Pedra', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4344, 'Pesqueira', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4345, 'Petrolândia', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4346, 'Petrolina', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4347, 'Poção', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4348, 'Pombos', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4349, 'Primavera', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4350, 'Quipapá', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4351, 'Quixaba', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4352, 'Recife', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4353, 'Riacho das Almas', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4354, 'Ribeirão', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4355, 'Rio Formoso', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4356, 'Sairé', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4357, 'Salgadinho', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4358, 'Salgueiro', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4359, 'Saloá', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4360, 'Sanharó', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4361, 'Santa Cruz', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4362, 'Santa Cruz da Baixa Verde', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4363, 'Santa Cruz do Capibaribe', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4364, 'Santa Filomena', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4365, 'Santa Maria da Boa Vista', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4366, 'Santa Maria do Cambucá', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4367, 'Santa Terezinha', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4368, 'São Bento do Una', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4369, 'São Caitano', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4370, 'São Joaquim do Monte', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4371, 'São José da Coroa Grande', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4372, 'São José do Belmonte', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4373, 'São José do Egito', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4374, 'São Lourenço da Mata', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4375, 'São Vicente Férrer', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4376, 'Serra Talhada', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4377, 'Sertânia', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4378, 'Sirinhaém', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4379, 'Moreilândia', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4380, 'Solidão', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4381, 'Surubim', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4382, 'Tabira', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4383, 'Tacaimbó', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4384, 'Tacaratu', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4385, 'Tamandaré', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4386, 'Taquaritinga do Norte', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4387, 'Terezinha', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4388, 'Terra Nova', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4389, 'Toritama', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4390, 'Tracunhaém', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4391, 'Trindade', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4392, 'Triunfo', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4393, 'Tupanatinga', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4394, 'Tuparetama', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4395, 'Venturosa', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4396, 'Verdejante', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4397, 'Vertente do Lério', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4398, 'Vertentes', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4399, 'Vicência', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4400, 'Vitória de Santo Antão', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4401, 'Xexéu', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4402, 'Atalaia', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4403, 'Barra de São Miguel', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4404, 'Belém', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4405, 'Boca da Mata', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4406, 'Branquinha', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4407, 'Cajueiro', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4408, 'Campestre', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4409, 'Campo Alegre', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4410, 'Capela', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4411, 'Carneiros', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4412, 'Chã Preta', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4413, 'Coité do Nóia', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4414, 'Colônia Leopoldina', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4415, 'Coqueiro Seco', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4416, 'Dois Riachos', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4417, 'Feliz Deserto', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4418, 'Flexeiras', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4419, 'Ibateguara', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4420, 'Inhapi', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4421, 'Jacuípe', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4422, 'Japaratinga', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4423, 'Jaramataia', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4424, 'Joaquim Gomes', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4425, 'Jundiá', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4426, 'Lagoa da Canoa', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4427, 'Maceió', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4428, 'Maragogi', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4429, 'Maravilha', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4430, 'Marechal Deodoro', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4431, 'Mar Vermelho', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4432, 'Matriz de Camaragibe', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4433, 'Messias', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4434, 'Minador do Negrão', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4435, 'Monteirópolis', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4436, 'Murici', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4437, 'Novo Lino', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4438, 'Olho d''Água Grande', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4439, 'Olivença', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4440, 'Ouro Branco', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4441, 'Palestina', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4442, 'Pariconha', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4443, 'Paripueira', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4444, 'Passo de Camaragibe', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4445, 'Paulo Jacinto', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4446, 'Piaçabuçu', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4447, 'Pilar', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4448, 'Pindoba', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4449, 'Porto Calvo', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4450, 'Porto de Pedras', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4451, 'Quebrangulo', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4452, 'Rio Largo', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4453, 'Roteiro', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4454, 'Santa Luzia do Norte', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4455, 'Santana do Mundaú', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4456, 'São Luís do Quitunde', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4457, 'São Miguel dos Milagres', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4458, 'Satuba', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4459, 'Tanque d''Arca', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4460, 'Taquarana', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4461, 'Teotônio Vilela', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4462, 'União dos Palmares', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4463, 'Viçosa', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4464, 'Aracaju', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4465, 'Arauá', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4466, 'Areia Branca', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4467, 'Barra dos Coqueiros', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4468, 'Boquim', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4469, 'Brejo Grande', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4470, 'Capela', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4471, 'Carmópolis', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4472, 'Cristinápolis', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4473, 'Divina Pastora', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4474, 'Estância', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4475, 'General Maynard', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4476, 'Ilha das Flores', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4477, 'Indiaroba', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4478, 'Itabaiana', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4479, 'Itaporanga d''Ajuda', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4480, 'Japaratuba', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4481, 'Laranjeiras', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4482, 'Malhada dos Bois', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4483, 'Malhador', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4484, 'Maruim', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4485, 'Moita Bonita', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4486, 'Muribeca', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4487, 'Nossa Senhora Aparecida', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4488, 'Nossa Senhora de Lourdes', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4489, 'Nossa Senhora do Socorro', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4490, 'Pedrinhas', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4491, 'Pirambu', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4492, 'Riachuelo', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4493, 'Rosário do Catete', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4494, 'Salgado', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4495, 'Santa Luzia do Itanhy', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4496, 'Santana do São Francisco', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4497, 'Santa Rosa de Lima', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4498, 'Santo Amaro das Brotas', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4499, 'São Cristóvão', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4500, 'Siriri', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4501, 'Telha', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4502, 'Umbaúba', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4503, 'Abaíra', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4504, 'Abaré', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4505, 'Acajutiba', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4506, 'Adustina', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4507, 'Água Fria', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4508, 'Érico Cardoso', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4509, 'Aiquara', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4510, 'Alcobaça', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4511, 'Almadina', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4512, 'Amargosa', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4513, 'Amélia Rodrigues', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4514, 'América Dourada', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4515, 'Anagé', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4516, 'Andaraí', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4517, 'Andorinha', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4518, 'Angical', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4519, 'Anguera', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4520, 'Antas', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4521, 'Antônio Cardoso', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4522, 'Antônio Gonçalves', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4523, 'Aporá', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4524, 'Apuarema', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4525, 'Aracatu', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4526, 'Araçás', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4527, 'Araci', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4528, 'Arataca', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4529, 'Aratuípe', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4530, 'Aurelino Leal', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4531, 'Baianópolis', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4532, 'Baixa Grande', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4533, 'Banzaê', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4534, 'Barra', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4535, 'Barra da Estiva', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4536, 'Barra do Choça', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4537, 'Barra do Rocha', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4538, 'Barro Alto', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4539, 'Barro Preto', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4540, 'Belo Campo', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4541, 'Biritinga', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4542, 'Boa Nova', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4543, 'Boa Vista do Tupim', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4544, 'Bom Jesus da Lapa', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4545, 'Bom Jesus da Serra', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4546, 'Boninal', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4547, 'Bonito', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4548, 'Boquira', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4549, 'Botuporã', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4550, 'Brejolândia', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4551, 'Brotas de Macaúbas', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4552, 'Brumado', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4553, 'Buerarema', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4554, 'Buritirama', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4555, 'Caatiba', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4556, 'Cabaceiras do Paraguaçu', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4557, 'Cachoeira', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4558, 'Caculé', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4559, 'Caém', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4560, 'Caetanos', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4561, 'Caetité', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4562, 'Cafarnaum', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4563, 'Cairu', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4564, 'Caldeirão Grande', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4565, 'Camacan', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4566, 'Camaçari', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4567, 'Camamu', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4568, 'Campo Alegre de Lourdes', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4569, 'Campo Formoso', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4570, 'Canápolis', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4571, 'Canarana', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4572, 'Canavieiras', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4573, 'Candeal', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4574, 'Candiba', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4575, 'Cândido Sales', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4576, 'Cansanção', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4577, 'Canudos', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4578, 'Capela do Alto Alegre', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4579, 'Capim Grosso', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4580, 'Caraíbas', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4581, 'Caravelas', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4582, 'Cardeal da Silva', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4583, 'Carinhanha', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4584, 'Casa Nova', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4585, 'Castro Alves', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4586, 'Catolândia', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4587, 'Catu', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4588, 'Caturama', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4589, 'Central', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4590, 'Cícero Dantas', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4591, 'Cipó', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4592, 'Coaraci', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4593, 'Cocos', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4594, 'Conceição da Feira', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4595, 'Conceição do Almeida', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4596, 'Conceição do Coité', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4597, 'Conceição do Jacuípe', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4598, 'Conde', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4599, 'Condeúba', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4600, 'Contendas do Sincorá', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4601, 'Coração de Maria', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4602, 'Cordeiros', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4603, 'Coribe', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4604, 'Coronel João Sá', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4605, 'Correntina', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4606, 'Cotegipe', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4607, 'Cravolândia', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4608, 'Crisópolis', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4609, 'Cristópolis', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4610, 'Cruz das Almas', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4611, 'Curaçá', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4612, 'Dário Meira', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4613, 'Dom Macedo Costa', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4614, 'Elísio Medrado', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4615, 'Encruzilhada', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4616, 'Entre Rios', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4617, 'Esplanada', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4618, 'Euclides da Cunha', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4619, 'Eunápolis', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4620, 'Fátima', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4621, 'Feira da Mata', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4622, 'Feira de Santana', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4623, 'Filadélfia', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4624, 'Firmino Alves', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4625, 'Floresta Azul', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4626, 'Formosa do Rio Preto', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4627, 'Gandu', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4628, 'Gavião', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4629, 'Gentio do Ouro', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4630, 'Gongogi', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4631, 'Governador Mangabeira', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4632, 'Guajeru', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4633, 'Guanambi', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4634, 'Guaratinga', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4635, 'Heliópolis', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4636, 'Ibiassucê', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4637, 'Ibicaraí', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4638, 'Ibicoara', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4639, 'Ibicuí', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4640, 'Ibipeba', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4641, 'Ibipitanga', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4642, 'Ibiquera', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4643, 'Ibirapitanga', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4644, 'Ibirapuã', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4645, 'Ibirataia', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4646, 'Ibitiara', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4647, 'Ibititá', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4648, 'Ibotirama', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4649, 'Ichu', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4650, 'Igaporã', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4651, 'Igrapiúna', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4652, 'Iguaí', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4653, 'Ilhéus', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4654, 'Inhambupe', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4655, 'Ipecaetá', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4656, 'Ipiaú', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4657, 'Ipirá', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4658, 'Ipupiara', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4659, 'Irajuba', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4660, 'Iramaia', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4661, 'Iraquara', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4662, 'Irará', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4663, 'Irecê', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4664, 'Itabela', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4665, 'Itaberaba', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4666, 'Itabuna', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4667, 'Itacaré', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4668, 'Itaeté', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4669, 'Itagi', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4670, 'Itagibá', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4671, 'Itagimirim', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4672, 'Itaguaçu da Bahia', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4673, 'Itaju do Colônia', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4674, 'Itajuípe', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4675, 'Itamaraju', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4676, 'Itamari', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4677, 'Itambé', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4678, 'Itanagra', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4679, 'Itanhém', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4680, 'Itaparica', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4681, 'Itapé', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4682, 'Itapebi', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4683, 'Itapetinga', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4684, 'Itapitanga', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4685, 'Itaquara', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4686, 'Itarantim', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4687, 'Itatim', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4688, 'Itiruçu', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4689, 'Itiúba', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4690, 'Itororó', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4691, 'Ituaçu', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4692, 'Iuiu', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4693, 'Jaborandi', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4694, 'Jacaraci', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4695, 'Jacobina', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4696, 'Jaguaquara', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4697, 'Jaguarari', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4698, 'Jaguaripe', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4699, 'Jandaíra', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4700, 'Jequié', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4701, 'Jeremoabo', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4702, 'Jiquiriçá', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4703, 'Jitaúna', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4704, 'João Dourado', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4705, 'Juazeiro', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4706, 'Jucuruçu', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4707, 'Jussara', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4708, 'Jussari', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4709, 'Jussiape', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4710, 'Lafaiete Coutinho', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4711, 'Laje', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4712, 'Lajedão', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4713, 'Lajedinho', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4714, 'Lajedo do Tabocal', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4715, 'Lamarão', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4716, 'Lapão', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4717, 'Lauro de Freitas', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4718, 'Lençóis', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4719, 'Licínio de Almeida', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4720, 'Livramento de Nossa Senhora', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4721, 'Macajuba', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4722, 'Macarani', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4723, 'Macaúbas', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4724, 'Madre de Deus', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4725, 'Maetinga', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4726, 'Maiquinique', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4727, 'Mairi', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4728, 'Malhada', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4729, 'Malhada de Pedras', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4730, 'Manoel Vitorino', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4731, 'Mansidão', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4732, 'Maracás', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4733, 'Maragogipe', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4734, 'Maraú', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4735, 'Marcionílio Souza', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4736, 'Mascote', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4737, 'Mata de São João', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4738, 'Matina', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4739, 'Medeiros Neto', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4740, 'Miguel Calmon', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4741, 'Mirangaba', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4742, 'Mirante', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4743, 'Monte Santo', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4744, 'Morpará', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4745, 'Morro do Chapéu', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4746, 'Mortugaba', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4747, 'Mucugê', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4748, 'Mucuri', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4749, 'Mulungu do Morro', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4750, 'Mundo Novo', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4751, 'Muniz Ferreira', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4752, 'Muritiba', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4753, 'Mutuípe', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4754, 'Nazaré', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4755, 'Nova Canaã', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4756, 'Nova Fátima', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4757, 'Nova Ibiá', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4758, 'Nova Itarana', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4759, 'Nova Redenção', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4760, 'Nova Soure', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4761, 'Novo Horizonte', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4762, 'Novo Triunfo', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4763, 'Olindina', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4764, 'Ouriçangas', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4765, 'Ourolândia', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4766, 'Palmas de Monte Alto', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4767, 'Palmeiras', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4768, 'Paramirim', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4769, 'Paratinga', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4770, 'Paripiranga', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4771, 'Pau Brasil', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4772, 'Pé de Serra', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4773, 'Pedrão', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4774, 'Pedro Alexandre', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4775, 'Piatã', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4776, 'Pilão Arcado', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4777, 'Pindaí', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4778, 'Pindobaçu', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4779, 'Pintadas', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4780, 'Piraí do Norte', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4781, 'Piripá', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4782, 'Piritiba', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4783, 'Planaltino', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4784, 'Planalto', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4785, 'Pojuca', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4786, 'Ponto Novo', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4787, 'Porto Seguro', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4788, 'Potiraguá', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4789, 'Presidente Dutra', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4790, 'Presidente Jânio Quadros', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4791, 'Queimadas', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4792, 'Quijingue', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4793, 'Quixabeira', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4794, 'Rafael Jambeiro', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4795, 'Remanso', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4796, 'Retirolândia', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4797, 'Riachão das Neves', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4798, 'Riachão do Jacuípe', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4799, 'Riacho de Santana', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4800, 'Ribeira do Amparo', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4801, 'Ribeira do Pombal', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4802, 'Ribeirão do Largo', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4803, 'Rio de Contas', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4804, 'Rio do Antônio', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4805, 'Rio do Pires', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4806, 'Ruy Barbosa', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4807, 'Salinas da Margarida', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4808, 'Salvador', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4809, 'Santa Bárbara', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4810, 'Santa Brígida', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4811, 'Santa Cruz Cabrália', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4812, 'Santa Cruz da Vitória', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4813, 'Santa Inês', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4814, 'Santaluz', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4815, 'Santa Luzia', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4816, 'Santanópolis', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4817, 'Santa Rita de Cássia', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4818, 'Santa Terezinha', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4819, 'Santo Amaro', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4820, 'Santo Antônio de Jesus', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4821, 'Santo Estêvão', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4822, 'São Desidério', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4823, 'São Domingos', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4824, 'São Félix', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4825, 'São Félix do Coribe', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4826, 'São Felipe', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4827, 'São Francisco do Conde', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4828, 'São Gabriel', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4829, 'São Gonçalo dos Campos', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4830, 'São José da Vitória', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4831, 'São José do Jacuípe', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4832, 'São Miguel das Matas', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4833, 'São Sebastião do Passé', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4834, 'Sapeaçu', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4835, 'Sátiro Dias', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4836, 'Saubara', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4837, 'Saúde', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4838, 'Seabra', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4839, 'Sebastião Laranjeiras', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4840, 'Senhor do Bonfim', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4841, 'Serra do Ramalho', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4842, 'Sento Sé', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4843, 'Serra Dourada', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4844, 'Serra Preta', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4845, 'Serrolândia', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4846, 'Simões Filho', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4847, 'Sítio do Mato', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4848, 'Sítio do Quinto', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4849, 'Sobradinho', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4850, 'Tabocas do Brejo Velho', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4851, 'Tanhaçu', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4852, 'Tanque Novo', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4853, 'Tanquinho', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4854, 'Taperoá', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4855, 'Tapiramutá', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4856, 'Teixeira de Freitas', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4857, 'Teodoro Sampaio', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4858, 'Teofilândia', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4859, 'Teolândia', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4860, 'Terra Nova', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4861, 'Tucano', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4862, 'Uauá', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4863, 'Ubaíra', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4864, 'Ubaitaba', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4865, 'Ubatã', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4866, 'Uibaí', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4867, 'Urandi', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4868, 'Uruçuca', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4869, 'Utinga', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4870, 'Valença', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4871, 'Valente', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4872, 'Várzea da Roça', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4873, 'Várzea do Poço', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4874, 'Várzea Nova', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4875, 'Varzedo', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4876, 'Vera Cruz', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4877, 'Vereda', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4878, 'Vitória da Conquista', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4879, 'Wagner', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4880, 'Wanderley', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4881, 'Wenceslau Guimarães', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4882, 'Xique-Xique', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4883, 'Abadia dos Dourados', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4884, 'Abaeté', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4885, 'Abre Campo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4886, 'Acaiaca', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4887, 'Açucena', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4888, 'Água Boa', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4889, 'Água Comprida', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4890, 'Aguanil', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4891, 'Águas Formosas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4892, 'Águas Vermelhas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4893, 'Aimorés', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4894, 'Aiuruoca', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4895, 'Alagoa', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4896, 'Albertina', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4897, 'Alfenas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4898, 'Alfredo Vasconcelos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4899, 'Almenara', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4900, 'Alpercata', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4901, 'Alpinópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4902, 'Alterosa', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4903, 'Alto Caparaó', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4904, 'Alto Rio Doce', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4905, 'Alvarenga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4906, 'Alvinópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4907, 'Alvorada de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4908, 'Amparo da Serra', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4909, 'Andradas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4910, 'Cachoeira de Pajeú', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4911, 'Andrelândia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4912, 'Angelândia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4913, 'Antônio Carlos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4914, 'Antônio Dias', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4915, 'Antônio Prado de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4916, 'Aracitaba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4917, 'Araçuaí', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4918, 'Araguari', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4919, 'Arantina', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4920, 'Araponga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4921, 'Araporã', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4922, 'Arapuá', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4923, 'Araújos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4924, 'Araxá', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4925, 'Arceburgo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4926, 'Arcos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4927, 'Areado', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4928, 'Argirita', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4929, 'Aricanduva', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4930, 'Arinos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4931, 'Astolfo Dutra', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4932, 'Ataléia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4933, 'Baependi', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4934, 'Baldim', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4935, 'Bambuí', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4936, 'Bandeira', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4937, 'Bandeira do Sul', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4938, 'Barão de Cocais', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4939, 'Barão de Monte Alto', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4940, 'Barbacena', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4941, 'Barra Longa', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4942, 'Barroso', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4943, 'Bela Vista de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4944, 'Belo Horizonte', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4945, 'Belo Oriente', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4946, 'Belo Vale', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4947, 'Berilo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4948, 'Bertópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4949, 'Berizal', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4950, 'Betim', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4951, 'Bias Fortes', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4952, 'Bicas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4953, 'Biquinhas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4954, 'Boa Esperança', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4955, 'Bocaina de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4956, 'Bocaiúva', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4957, 'Bom Despacho', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4958, 'Bom Jardim de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4959, 'Bom Jesus da Penha', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4960, 'Bom Jesus do Amparo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4961, 'Bom Jesus do Galho', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4962, 'Bom Repouso', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4963, 'Bom Sucesso', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4964, 'Bonfim', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4965, 'Bonfinópolis de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4966, 'Bonito de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4967, 'Borda da Mata', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4968, 'Botelhos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4969, 'Botumirim', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4970, 'Brasilândia de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4971, 'Brasília de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4972, 'Brás Pires', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4973, 'Braúnas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4974, 'Brazópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4975, 'Brumadinho', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4976, 'Bueno Brandão', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4977, 'Bugre', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4978, 'Buritis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4979, 'Buritizeiro', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4980, 'Cabeceira Grande', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4981, 'Cabo Verde', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4982, 'Cachoeira da Prata', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4983, 'Cachoeira de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4984, 'Cachoeira Dourada', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4985, 'Caetanópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4986, 'Caeté', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4987, 'Caiana', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4988, 'Cajuri', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4989, 'Caldas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4990, 'Camacho', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4991, 'Camanducaia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4992, 'Cambuí', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4993, 'Cambuquira', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4994, 'Campanário', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4995, 'Campanha', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4996, 'Campestre', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4997, 'Campina Verde', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4998, 'Campo Azul', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (4999, 'Campo Belo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5000, 'Campo do Meio', 31, 374)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM subregions');
  }
}
