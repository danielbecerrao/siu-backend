import type { MigrationInterface, QueryRunner } from 'typeorm';

export class Regions1695871764651 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1, 'Sant Julià de Loria', 1)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2, 'Ordino', 1)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3, 'La Massana', 1)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (4, 'Encamp', 1)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (5, 'Canillo', 1)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (6, 'Andorra la Vella', 1)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (7, 'Escaldes-Engordany', 1)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (8, 'Imārat Umm al Qaywayn', 2)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (9, 'Raʼs al Khaymah', 2)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (10, 'Dubai', 2)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (11, 'Sharjah', 2)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (12, 'Fujairah', 2)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (13, 'Ajman', 2)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (14, 'Abu Dhabi', 2)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (15, 'Zabul', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (16, 'Maidan Wardak Province', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (17, 'Takhar', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (18, 'Sar-e Pol Province', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (19, 'Samangan', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (20, 'Parwan', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (21, 'Paktika', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (22, 'Paktia', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (23, 'Oruzgan', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (24, 'Nimroz', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (25, 'Nangarhar', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (26, 'Logar', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (27, 'Laghman', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (28, 'Kunduz', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (29, 'Kunar', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (30, 'Kapisa', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (31, 'Kandahar', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (32, 'Kabul', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (33, 'Jowzjan', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (34, 'Herat', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (35, 'Helmand', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (36, 'Ghowr', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (37, 'Ghazni', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (38, 'Faryab', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (39, 'Farah', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (40, 'Bamyan', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (41, 'Balkh', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (42, 'Baghlan', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (43, 'Badghis', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (44, 'Badakhshan', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (45, 'Khowst', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (46, 'Nuristan', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (47, 'Daykundi', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (48, 'Panjshir', 3)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (49, 'Saint Philip', 4)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (50, 'Saint Peter', 4)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (51, 'Saint Paul', 4)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (52, 'Saint Mary', 4)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (53, 'Saint John', 4)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (54, 'Saint George', 4)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (55, 'Redonda', 4)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (56, 'Barbuda', 4)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (57, 'Blowing Point', 5)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (58, 'Sandy Ground', 5)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (59, 'Sandy Hill', 5)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (60, 'The Valley', 5)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (61, 'East End', 5)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (62, 'North Hill', 5)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (63, 'West End', 5)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (64, 'South Hill', 5)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (65, 'The Quarter', 5)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (66, 'North Side', 5)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (67, 'Island Harbour', 5)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (68, 'George Hill', 5)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (69, 'Stoney Ground', 5)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (70, 'The Farrington', 5)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (71, 'Berat County', 6)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (72, 'Dibër County', 6)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (73, 'Elbasan County', 6)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (74, 'Gjirokastër County', 6)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (75, 'Korçë County', 6)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (76, 'Kukës County', 6)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (77, 'Durrës County', 6)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (78, 'Fier County', 6)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (79, 'Lezhë County', 6)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (80, 'Shkodër County', 6)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (81, 'Tirana', 6)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (82, 'Vlorë County', 6)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (83, 'Ararat', 7)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (84, 'Syunik', 7)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (85, 'Vayots Dzor', 7)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (86, 'Yerevan', 7)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (87, 'Aragatsotn', 7)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (88, 'Armavir', 7)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (89, 'Gegharkunik', 7)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (90, 'Kotayk', 7)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (91, 'Lori', 7)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (92, 'Shirak', 7)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (93, 'Tavush', 7)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (94, 'Lunda Sul', 8)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (95, 'Luanda Norte', 8)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (96, 'Moxico', 8)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (97, 'Cuando Cobango', 8)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (98, 'Zaire', 8)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (99, 'Uíge', 8)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (100, 'Malanje', 8)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (101, 'Luanda', 8)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (102, 'Cuanza Norte', 8)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (103, 'Cabinda', 8)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (104, 'Bengo', 8)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (105, 'Namibe', 8)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (106, 'Huíla', 8)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (107, 'Huambo', 8)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (108, 'Cunene', 8)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (109, 'Kwanza Sul', 8)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (110, 'Bíe', 8)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (111, 'Benguela', 8)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (112, 'Misiones', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (113, 'Formosa', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (114, 'Buenos Aires F.D.', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (115, 'Entre Rios', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (116, 'Corrientes', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (117, 'Buenos Aires', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (118, 'Tucuman', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (119, 'Tierra del Fuego', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (120, 'Santiago del Estero', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (121, 'Santa Fe', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (122, 'Santa Cruz', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (123, 'San Luis', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (124, 'San Juan', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (125, 'Salta', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (126, 'Rio Negro', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (127, 'Neuquen', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (128, 'Mendoza', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (129, 'La Rioja', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (130, 'La Pampa', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (131, 'Jujuy', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (132, 'Cordoba', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (133, 'Chubut', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (134, 'Chaco', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (135, 'Catamarca', 10)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (136, 'Western District', 11)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (137, 'Swains Island', 11)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (138, 'Eastern District', 11)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (139, 'Manu''a', 11)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (140, 'Rose Island', 11)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (141, 'Vienna', 12)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (142, 'Vorarlberg', 12)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (143, 'Tyrol', 12)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (144, 'Styria', 12)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (145, 'Salzburg', 12)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (146, 'Upper Austria', 12)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (147, 'Lower Austria', 12)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (148, 'Carinthia', 12)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (149, 'Burgenland', 12)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (150, 'Western Australia', 13)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (151, 'South Australia', 13)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (152, 'Northern Territory', 13)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (153, 'Victoria', 13)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (154, 'Tasmania', 13)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (155, 'Queensland', 13)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (156, 'New South Wales', 13)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (157, 'Australian Capital Territory', 13)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (158, 'Mariehamns stad', 15)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (159, 'Ålands landsbygd', 15)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (160, 'Ålands skärgård', 15)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (161, 'Beyləqan', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (162, 'Zǝngilan', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (163, 'Yardımlı', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (164, 'Shusha', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (165, 'Salyan', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (166, 'Sabirabad', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (167, 'Saatlı', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (168, 'Bilǝsuvar', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (169, 'Neftçala', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (170, 'Nakhichevan', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (171, 'Masally', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (172, 'Lerik', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (173, 'Lənkəran', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (174, 'Laçın', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (175, 'Qubadlı', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (176, 'İmişli', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (177, 'Füzuli', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (178, 'Jabrayil', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (179, 'Jalilabad', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (180, 'Astara', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (181, 'Xocalı', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (182, 'Ağcabǝdi', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (183, 'Ağdam', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (184, 'Shirvan', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (185, 'Lankaran Sahari', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (186, 'Shusha City', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (187, 'Tǝrtǝr', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (188, 'Xankǝndi', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (189, 'Khojavend', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (190, 'Zərdab', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (191, 'Zaqatala', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (192, 'Yevlax', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (193, 'Oğuz', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (194, 'Ucar', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (195, 'Tovuz', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (196, 'Şamaxı', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (197, 'Shaki', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (198, 'Şǝmkir', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (199, 'Kürdǝmir', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (200, 'Qǝbǝlǝ', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (201, 'Qusar', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (202, 'Quba', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (203, 'Goygol Rayon', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (204, 'Xaçmaz', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (205, 'Kalbajar', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (206, 'Qazax', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (207, 'Goranboy', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (208, 'Qax', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (209, 'İsmayıllı', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (210, 'Göyçay', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (211, 'Shabran', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (212, 'Daşkǝsǝn', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (213, 'Balakǝn', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (214, 'Barda', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (215, 'Baki', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (216, 'Abşeron', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (217, 'Ağsu', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (218, 'Ağdaş', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (219, 'Gǝdǝbǝy', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (220, 'Ağstafa', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (221, 'Gǝncǝ', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (222, 'Mingǝcevir', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (223, 'Naftalan', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (224, 'Qobustan', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (225, 'Samux', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (226, 'Shaki City', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (227, 'Siyǝzǝn', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (228, 'Sumqayit', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (229, 'Xızı', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (230, 'Yevlax City', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (231, 'Hacıqabul', 16)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (232, 'Federation of B&H', 17)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (233, 'Srpska', 17)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (234, 'Brčko', 17)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (235, 'Saint Thomas', 18)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (236, 'Saint Philip', 18)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (237, 'Saint Peter', 18)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (238, 'Saint Michael', 18)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (239, 'Saint Lucy', 18)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (240, 'Saint Joseph', 18)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (241, 'Saint John', 18)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (242, 'Saint James', 18)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (243, 'Saint George', 18)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (244, 'Saint Andrew', 18)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (245, 'Christ Church', 18)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (246, 'Rajshahi Division', 19)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (247, 'Dhaka', 19)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (248, 'Chittagong', 19)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (249, 'Khulna', 19)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (250, 'Barisāl', 19)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (251, 'Sylhet', 19)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (252, 'Rangpur Division', 19)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (253, 'Mymensingh Division', 19)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (254, 'Brussels Capital', 20)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (255, 'Wallonia', 20)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (256, 'Flanders', 20)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (257, 'Boucle du Mouhoun', 21)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (258, 'Cascades', 21)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (259, 'Centre', 21)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (260, 'Centre-Est', 21)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (261, 'Centre-Nord', 21)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (262, 'Centre-Ouest', 21)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (263, 'Centre-Sud', 21)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (264, 'Est', 21)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (265, 'Hauts-Bassins', 21)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (266, 'Nord', 21)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (267, 'Plateau-Central', 21)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (268, 'Sahel', 21)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (269, 'Sud-Ouest', 21)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (270, 'Razgrad', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (271, 'Montana', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (272, 'Vratsa', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (273, 'Varna', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (274, 'Dobrich', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (275, 'Sofia', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (276, 'Ruse', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (277, 'Plovdiv', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (278, 'Pleven', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (279, 'Pernik', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (280, 'Pazardzhik', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (281, 'Lovech', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (282, 'Haskovo', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (283, 'Sofia-Capital', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (284, 'Burgas', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (285, 'Blagoevgrad', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (286, 'Gabrovo', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (287, 'Kardzhali', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (288, 'Kyustendil', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (289, 'Shumen', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (290, 'Silistra', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (291, 'Sliven', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (292, 'Smolyan', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (293, 'Stara Zagora', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (294, 'Targovishte', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (295, 'Veliko Tarnovo', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (296, 'Vidin', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (297, 'Yambol', 22)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (298, 'Muharraq', 23)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (299, 'Manama', 23)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (300, 'Southern Governorate', 23)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (301, 'Northern', 23)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (302, 'Makamba', 24)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (303, 'Bururi', 24)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (304, 'Muramvya', 24)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (305, 'Gitega', 24)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (306, 'Ruyigi', 24)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (307, 'Cankuzo', 24)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (308, 'Karuzi', 24)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (309, 'Bubanza', 24)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (310, 'Cibitoke', 24)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (311, 'Ngozi', 24)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (312, 'Kayanza', 24)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (313, 'Muyinga', 24)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (314, 'Kirundo', 24)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (315, 'Rutana', 24)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (316, 'Mwaro', 24)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (317, 'Bujumbura Mairie', 24)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (318, 'Bujumbura Rural', 24)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (319, 'Rumonge', 24)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (320, 'Zou', 25)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (321, 'Ouémé', 25)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (322, 'Mono', 25)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (323, 'Borgou', 25)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (324, 'Atlantique', 25)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (325, 'Atakora', 25)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (326, 'Alibori', 25)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (327, 'Collines', 25)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (328, 'Kouffo', 25)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (329, 'Donga', 25)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (330, 'Littoral', 25)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (331, 'Plateau', 25)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (332, 'Warwick', 27)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (333, 'Southampton', 27)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (334, 'Smithʼs', 27)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (335, 'Sandys', 27)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (336, 'Saint Georgeʼs', 27)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (337, 'Saint George', 27)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (338, 'Pembroke', 27)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (339, 'Paget', 27)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (340, 'Hamilton', 27)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (341, 'Hamilton city', 27)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (342, 'Devonshire', 27)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (343, 'Tutong', 28)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (344, 'Temburong', 28)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (345, 'Brunei-Muara District', 28)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (346, 'Belait', 28)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (347, 'Tarija Department', 29)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (348, 'Santa Cruz Department', 29)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (349, 'Potosí Department', 29)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (350, 'Pando', 29)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (351, 'Oruro', 29)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (352, 'La Paz Department', 29)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (353, 'Cochabamba', 29)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (354, 'Chuquisaca Department', 29)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (355, 'Beni Department', 29)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (356, 'Bonaire', 30)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (357, 'Saba', 30)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (358, 'Sint Eustatius', 30)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (359, 'Rio Grande do Norte', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (360, 'Piauí', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (361, 'Pernambuco', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (362, 'Paraíba', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (363, 'Pará', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (364, 'Maranhão', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (365, 'Ceará', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (366, 'Amapá', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (367, 'Alagoas', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (368, 'Sergipe', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (369, 'São Paulo', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (370, 'Santa Catarina', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (371, 'Rio Grande do Sul', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (372, 'Rio de Janeiro', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (373, 'Paraná', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (374, 'Minas Gerais', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (375, 'Mato Grosso do Sul', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (376, 'Mato Grosso', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (377, 'Goiás', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (378, 'Federal District', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (379, 'Espírito Santo', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (380, 'Bahia', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (381, 'Tocantins', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (382, 'Roraima', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (383, 'Amazonas', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (384, 'Acre', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (385, 'Rondônia', 31)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (386, 'San Salvador', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (387, 'Ragged Island', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (388, 'Berry Islands', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (389, 'New Providence', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (390, 'Mayaguana', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (391, 'Long Island', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (392, 'Inagua', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (393, 'Harbour Island', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (394, 'Freeport', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (395, 'Exuma', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (396, 'Cat Island', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (397, 'Bimini', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (398, 'Acklins', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (399, 'Black Point', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (400, 'Central Abaco', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (401, 'Central Andros', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (402, 'Central Eleuthera', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (403, 'Crooked Island and Long Cay', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (404, 'East Grand Bahama', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (405, 'Grand Cay', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (406, 'Hope Town', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (407, 'Mangrove Cay', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (408, 'Moore’s Island', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (409, 'North Abaco', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (410, 'North Andros', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (411, 'North Eleuthera', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (412, 'Rum Cay', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (413, 'South Abaco', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (414, 'South Andros', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (415, 'South Eleuthera', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (416, 'Spanish Wells', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (417, 'West Grand Bahama', 32)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (418, 'Bumthang District', 33)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (419, 'Chukha', 33)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (420, 'Dagana', 33)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (421, 'Tsirang District', 33)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (422, 'Sarpang District', 33)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (423, 'Haa', 33)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (424, 'Lhuntse', 33)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (425, 'Mongar', 33)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (426, 'Paro', 33)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (427, 'Pemagatshel', 33)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (428, 'Punakha', 33)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (429, 'Samtse District', 33)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (430, 'Samdrup Jongkhar', 33)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (431, 'Zhemgang District', 33)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (432, 'Trashigang District', 33)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (433, 'Thimphu District', 33)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (434, 'Tongsa', 33)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (435, 'Wangdi Phodrang', 33)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (436, 'Gasa', 33)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (437, 'Trashi Yangste', 33)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (438, 'Ngwaketsi', 35)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (439, 'South-East', 35)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (440, 'North-East', 35)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (441, 'North-West', 35)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (442, 'Kweneng', 35)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (443, 'Kgatleng', 35)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (444, 'Kgalagadi', 35)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (445, 'Ghanzi', 35)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (446, 'Chobe', 35)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (447, 'Central', 35)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (448, 'City of Francistown', 35)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (449, 'Gaborone', 35)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (450, 'Jwaneng', 35)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (451, 'Lobatse', 35)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (452, 'Selibe Phikwe', 35)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (453, 'Sowa Town', 35)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (454, 'Vitebsk', 36)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (455, 'Mogilev', 36)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (456, 'Minsk', 36)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (457, 'Minsk City', 36)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (458, 'Grodnenskaya', 36)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (459, 'Gomel Oblast', 36)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (460, 'Brest', 36)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (461, 'Toledo', 37)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (462, 'Southern District', 37)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (463, 'Orange Walk District', 37)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (464, 'Corozal', 37)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (465, 'Cayo', 37)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (466, 'Belize', 37)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (467, 'Alberta', 38)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (468, 'British Columbia', 38)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (469, 'Manitoba', 38)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (470, 'New Brunswick', 38)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (471, 'Northwest Territories', 38)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (472, 'Nova Scotia', 38)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (473, 'Nunavut', 38)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (474, 'Ontario', 38)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (475, 'Prince Edward Island', 38)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (476, 'Quebec', 38)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (477, 'Saskatchewan', 38)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (478, 'Yukon', 38)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (479, 'Newfoundland and Labrador', 38)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (480, 'Tshuapa', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (481, 'Tshopo', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (482, 'Tanganyika', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (483, 'South Kivu', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (484, 'Sankuru', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (485, 'Nord Kivu', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (486, 'Mongala', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (487, 'Maniema', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (488, 'Kasai-Central', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (489, 'Kasaï-Oriental', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (490, 'Kasai', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (491, 'Ituri', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (492, 'Haut-Uele', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (493, 'Haut-Lomami', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (494, 'Équateur', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (495, 'Bas-Uele', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (496, 'Lualaba', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (497, 'Mai-Ndombe', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (498, 'Kwilu', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (499, 'Kwango', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (500, 'Kinshasa', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (501, 'Bas-Congo', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (502, 'Haut-Katanga', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (503, 'Lomami', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (504, 'Nord-Ubangi', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (505, 'Sud-Ubangi', 40)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (506, 'Vakaga', 41)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (507, 'Ouaka', 41)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (508, 'Mbomou', 41)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (509, 'Haut-Mbomou', 41)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (510, 'Haute-Kotto', 41)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (511, 'Basse-Kotto', 41)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (512, 'Bamingui-Bangoran', 41)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (513, 'Sangha-Mbaéré', 41)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (514, 'Ouham-Pendé', 41)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (515, 'Ouham', 41)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (516, 'Ombella-M''Poko', 41)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (517, 'Nana-Mambéré', 41)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (518, 'Lobaye', 41)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (519, 'Kémo', 41)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (520, 'Mambéré-Kadéï', 41)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (521, 'Nana-Grébizi', 41)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (522, 'Bangui', 41)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (523, 'Sangha', 42)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (524, 'Pool', 42)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (525, 'Plateaux', 42)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (526, 'Niari', 42)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (527, 'Likouala', 42)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (528, 'Lékoumou', 42)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (529, 'Kouilou', 42)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (530, 'Cuvette', 42)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (531, 'Bouenza', 42)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (532, 'Brazzaville', 42)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (533, 'Cuvette-Ouest', 42)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (534, 'Pointe-Noire', 42)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (535, 'Zurich', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (536, 'Zug', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (537, 'Vaud', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (538, 'Valais', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (539, 'Uri', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (540, 'Ticino', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (541, 'Thurgau', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (542, 'Solothurn', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (543, 'Schwyz', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (544, 'Schaffhausen', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (545, 'Saint Gallen', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (546, 'Obwalden', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (547, 'Nidwalden', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (548, 'Neuchâtel', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (549, 'Lucerne', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (550, 'Jura', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (551, 'Grisons', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (552, 'Glarus', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (553, 'Geneva', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (554, 'Fribourg', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (555, 'Bern', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (556, 'Basel-City', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (557, 'Basel-Landschaft', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (558, 'Appenzell Ausserrhoden', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (559, 'Appenzell Innerrhoden', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (560, 'Aargau', 43)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (561, 'Yamoussoukro', 44)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (562, 'Bas-Sassandra', 44)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (563, 'Comoé', 44)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (564, 'Denguélé', 44)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (565, 'Gôh-Djiboua', 44)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (566, 'Lacs', 44)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (567, 'Lagunes', 44)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (568, 'Montagnes', 44)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (569, 'Sassandra-Marahoué', 44)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (570, 'Savanes', 44)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (571, 'Vallée du Bandama', 44)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (572, 'Woroba', 44)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (573, 'Zanzan', 44)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (574, 'Abidjan', 44)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (575, 'Aitutaki', 45)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (576, 'Atiu', 45)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (577, 'Mangaia', 45)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (578, 'Manihiki', 45)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (579, 'Ma''uke', 45)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (580, 'Mitiaro', 45)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (581, 'Palmerston', 45)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (582, 'Penrhyn', 45)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (583, 'Pukapuka', 45)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (584, 'Rakahanga', 45)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (585, 'Rarotonga', 45)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (586, 'Valparaíso', 46)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (587, 'Tarapacá', 46)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (588, 'Santiago Metropolitan', 46)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (589, 'Maule Region', 46)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (590, 'Los Lagos Region', 46)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (591, 'O''Higgins Region', 46)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (592, 'Coquimbo Region', 46)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (593, 'Biobío', 46)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (594, 'Atacama', 46)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (595, 'Araucanía', 46)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (596, 'Antofagasta', 46)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (597, 'Aysén', 46)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (598, 'Region of Magallanes', 46)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (599, 'Arica y Parinacota', 46)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (600, 'Los Ríos Region', 46)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (601, 'Ñuble', 46)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (602, 'South-West', 47)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (603, 'South', 47)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (604, 'West', 47)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (605, 'North-West', 47)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (606, 'North', 47)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (607, 'Littoral', 47)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (608, 'Far North', 47)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (609, 'East', 47)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (610, 'Centre', 47)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (611, 'Adamaoua', 47)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (612, 'Tibet', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (613, 'Qinghai', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (614, 'Xinjiang', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (615, 'Zhejiang', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (616, 'Yunnan', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (617, 'Tianjin', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (618, 'Sichuan', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (619, 'Shanxi', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (620, 'Shanghai', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (621, 'Shandong', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (622, 'Shaanxi', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (623, 'Ningxia Hui Autonomous Region', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (624, 'Jiangxi', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (625, 'Jiangsu', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (626, 'Hunan', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (627, 'Hubei', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (628, 'Henan', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (629, 'Hebei', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (630, 'Hainan', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (631, 'Guizhou', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (632, 'Guangxi', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (633, 'Guangdong', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (634, 'Gansu', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (635, 'Fujian', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (636, 'Chongqing', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (637, 'Anhui', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (638, 'Inner Mongolia', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (639, 'Liaoning', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (640, 'Jilin', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (641, 'Heilongjiang', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (642, 'Beijing', 48)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (643, 'Vichada', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (644, 'Vaupés', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (645, 'Valle del Cauca', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (646, 'Tolima', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (647, 'Sucre', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (648, 'Santander', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (649, 'San Andres y Providencia', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (650, 'Risaralda', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (651, 'Quindío', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (652, 'Putumayo', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (653, 'Norte de Santander Department', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (654, 'Nariño', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (655, 'Meta', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (656, 'Magdalena', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (657, 'La Guajira Department', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (658, 'Huila', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (659, 'Guaviare', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (660, 'Guainía Department', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (661, 'Cundinamarca', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (662, 'Córdoba', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (663, 'Chocó', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (664, 'Cesar', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (665, 'Cauca', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (666, 'Casanare Department', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (667, 'Caquetá', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (668, 'Caldas Department', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (669, 'Boyacá', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (670, 'Bolívar', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (671, 'Bogota D.C.', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (672, 'Atlántico', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (673, 'Departamento de Arauca', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (674, 'Antioquia', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (675, 'Amazonas', 49)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (676, 'San José', 50)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (677, 'Puntarenas Province', 50)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (678, 'Limón Province', 50)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (679, 'Heredia Province', 50)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (680, 'Guanacaste Province', 50)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (681, 'Cartago Province', 50)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (682, 'Alajuela Province', 50)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (683, 'Villa Clara Province', 51)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (684, 'Santiago de Cuba', 51)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (685, 'Sancti Spíritus Province', 51)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (686, 'Pinar del Río', 51)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (687, 'Matanzas Province', 51)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (688, 'Las Tunas', 51)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (689, 'Isla de la Juventud', 51)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (690, 'Holguín Province', 51)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (691, 'Guantánamo Province', 51)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (692, 'Granma Province', 51)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (693, 'Havana', 51)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (694, 'Cienfuegos Province', 51)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (695, 'Ciego de Ávila Province', 51)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (696, 'Camagüey', 51)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (697, 'Artemisa', 51)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (698, 'Mayabeque', 51)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (699, 'Tarrafal', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (700, 'São Vicente', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (701, 'Santa Catarina', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (702, 'Sal', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (703, 'Ribeira Grande', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (704, 'Praia', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (705, 'Paul', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (706, 'Maio', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (707, 'Brava', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (708, 'Boa Vista', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (709, 'Mosteiros', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (710, 'Santa Cruz', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (711, 'São Domingos', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (712, 'São Filipe', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (713, 'São Miguel', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (714, 'Porto Novo', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (715, 'Ribeira Brava', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (716, 'Santa Catarina do Fogo', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (717, 'São Salvador do Mundo', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (718, 'Tarrafal de São Nicolau', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (719, 'São Lourenço dos Órgãos', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (720, 'Ribeira Grande de Santiago', 52)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (721, 'Pafos', 55)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (722, 'Nicosia', 55)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (723, 'Limassol', 55)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (724, 'Larnaka', 55)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (725, 'Keryneia', 55)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (726, 'Ammochostos', 55)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (727, 'Prague', 56)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (728, 'South Moravian', 56)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (729, 'Jihočeský kraj', 56)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (730, 'Vysočina', 56)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (731, 'Karlovarský kraj', 56)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (732, 'Královéhradecký kraj', 56)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (733, 'Liberecký kraj', 56)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (734, 'Olomoucký', 56)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (735, 'Moravskoslezský', 56)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (736, 'Pardubický', 56)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (737, 'Plzeň Region', 56)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (738, 'Central Bohemia', 56)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (739, 'Ústecký kraj', 56)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (740, 'Zlín', 56)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (741, 'Thuringia', 57)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (742, 'Schleswig-Holstein', 57)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (743, 'Saxony-Anhalt', 57)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (744, 'Saxony', 57)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (745, 'Saarland', 57)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (746, 'Rheinland-Pfalz', 57)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (747, 'North Rhine-Westphalia', 57)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (748, 'Lower Saxony', 57)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (749, 'Mecklenburg-Vorpommern', 57)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (750, 'Hesse', 57)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (751, 'Hamburg', 57)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (752, 'Bremen', 57)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (753, 'Brandenburg', 57)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (754, 'Berlin', 57)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (755, 'Bavaria', 57)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (756, 'Baden-Wurttemberg', 57)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (757, 'Tadjourah', 58)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (758, 'Obock', 58)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (759, 'Djibouti', 58)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (760, 'Dikhil', 58)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (761, 'Ali Sabieh', 58)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (762, 'Arta', 58)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (763, 'Capital Region', 59)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (764, 'Central Jutland', 59)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (765, 'North Denmark', 59)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (766, 'Zealand', 59)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (767, 'South Denmark', 59)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (768, 'Saint Peter', 60)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (769, 'Saint Paul', 60)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (770, 'Saint Patrick', 60)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (771, 'Saint Mark', 60)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (772, 'Saint Luke', 60)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (773, 'Saint Joseph', 60)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (774, 'Saint John', 60)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (775, 'Saint George', 60)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (776, 'Saint David', 60)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (777, 'Saint Andrew', 60)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (778, 'Valverde', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (779, 'Santiago Rodríguez', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (780, 'Santiago', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (781, 'San Pedro de Macorís', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (782, 'San Juan', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (783, 'San Cristóbal', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (784, 'Sánchez Ramírez', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (785, 'Samaná', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (786, 'Hermanas Mirabal', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (787, 'Puerto Plata', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (788, 'Peravia', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (789, 'Pedernales', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (790, 'Nacional', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (791, 'Monte Plata', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (792, 'Monte Cristi', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (793, 'Monseñor Nouel', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (794, 'María Trinidad Sánchez', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (795, 'La Vega', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (796, 'La Romana', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (797, 'La Altagracia', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (798, 'Independencia', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (799, 'Hato Mayor', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (800, 'Espaillat', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (801, 'El Seíbo', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (802, 'Elías Piña', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (803, 'Duarte', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (804, 'Dajabón', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (805, 'Barahona', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (806, 'Baoruco', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (807, 'Azua', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (808, 'San José de Ocoa', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (809, 'Santo Domingo', 61)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (810, 'Tlemcen', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (811, 'Tizi Ouzou', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (812, 'Tissemsilt', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (813, 'Tipaza', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (814, 'Tindouf', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (815, 'Tiaret', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (816, 'Tébessa', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (817, 'Tamanrasset', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (818, 'Souk Ahras', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (819, 'Skikda', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (820, 'Sidi Bel Abbès', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (821, 'Sétif', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (822, 'Saida', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (823, 'Relizane', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (824, 'Oum el Bouaghi', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (825, 'Ouargla', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (826, 'Oran', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (827, 'Naama', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (828, 'M''Sila', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (829, 'Mostaganem', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (830, 'Mila', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (831, 'Medea', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (832, 'Mascara', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (833, 'Laghouat', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (834, 'Khenchela', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (835, 'Jijel', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (836, 'Illizi', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (837, 'Guelma', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (838, 'Ghardaia', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (839, 'El Tarf', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (840, 'El Oued', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (841, 'El Bayadh', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (842, 'Djelfa', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (843, 'Constantine', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (844, 'Chlef', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (845, 'Boumerdes', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (846, 'Bouira', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (847, 'Bordj Bou Arréridj', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (848, 'Blida', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (849, 'Biskra', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (850, 'Béjaïa', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (851, 'Béchar', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (852, 'Batna', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (853, 'Annaba', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (854, 'Algiers', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (855, 'Aïn Témouchent', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (856, 'Aïn Defla', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (857, 'Adrar', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (858, 'Bordj Badji Mokhtar', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (859, 'Timimoun', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (860, 'Beni Abbes', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (861, 'In Guezzam', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (862, 'In Salah', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (863, 'Djanet', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (864, 'El Menia', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (865, 'Touggourt', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (866, 'El Mghair', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (867, 'Ouled Djellal', 62)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (868, 'Zamora-Chinchipe', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (869, 'Tungurahua', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (870, 'Pichincha', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (871, 'Pastaza', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (872, 'Napo', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (873, 'Morona-Santiago', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (874, 'Manabí', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (875, 'Los Ríos', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (876, 'Loja', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (877, 'Imbabura', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (878, 'Guayas', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (879, 'Galápagos', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (880, 'Esmeraldas', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (881, 'El Oro', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (882, 'Cotopaxi', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (883, 'Chimborazo', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (884, 'Carchi', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (885, 'Cañar', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (886, 'Bolívar', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (887, 'Azuay', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (888, 'Sucumbíos', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (889, 'Orellana', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (890, 'Santo Domingo de los Tsáchilas', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (891, 'Santa Elena', 63)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (892, 'Võrumaa', 64)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (893, 'Viljandimaa', 64)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (894, 'Valgamaa', 64)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (895, 'Tartu', 64)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (896, 'Saare', 64)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (897, 'Raplamaa', 64)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (898, 'Põlvamaa', 64)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (899, 'Pärnumaa', 64)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (900, 'Lääne-Virumaa', 64)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (901, 'Lääne', 64)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (902, 'Jõgevamaa', 64)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (903, 'Järvamaa', 64)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (904, 'Ida-Virumaa', 64)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (905, 'Hiiumaa', 64)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (906, 'Harjumaa', 64)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (907, 'Sohag', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (908, 'North Sinai', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (909, 'Qena', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (910, 'Matruh', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (911, 'Kafr el-Sheikh', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (912, 'South Sinai', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (913, 'Damietta', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (914, 'Port Said', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (915, 'Beni Suweif', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (916, 'Asyut', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (917, 'Aswan', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (918, 'Suez', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (919, 'Sharqia', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (920, 'New Valley', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (921, 'Qalyubia', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (922, 'Cairo', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (923, 'Minya', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (924, 'Monufia', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (925, 'Giza', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (926, 'Ismailia', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (927, 'Alexandria', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (928, 'Gharbia', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (929, 'Faiyum', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (930, 'Beheira', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (931, 'Red Sea', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (932, 'Dakahlia', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (933, 'Luxor', 65)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (934, 'Anseba', 67)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (935, 'Debub', 67)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (936, 'Southern Red Sea', 67)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (937, 'Gash-Barka', 67)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (938, 'Maekel', 67)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (939, 'Northern Red Sea', 67)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (940, 'Murcia', 68)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (941, 'Ceuta', 68)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (942, 'Balearic Islands', 68)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (943, 'Andalusia', 68)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (944, 'Canary Islands', 68)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (945, 'Castille-La Mancha', 68)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (946, 'Extremadura', 68)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (947, 'Valencia', 68)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (948, 'Asturias', 68)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (949, 'Navarre', 68)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (950, 'Madrid', 68)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (951, 'La Rioja', 68)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (952, 'Cantabria', 68)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (953, 'Aragon', 68)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (954, 'Castille and León', 68)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (955, 'Catalonia', 68)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (956, 'Galicia', 68)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (957, 'Basque Country', 68)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (958, 'Melilla', 68)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (959, 'Addis Ababa', 69)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (960, 'Āfar', 69)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (961, 'Amhara', 69)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (962, 'Bīnshangul Gumuz', 69)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (963, 'Dire Dawa', 69)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (964, 'Gambela', 69)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (965, 'Harari', 69)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (966, 'Oromiya', 69)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (967, 'Somali', 69)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (968, 'Tigray', 69)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (969, 'SNNPR', 69)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (970, 'Lapland', 70)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (971, 'Kainuu', 70)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (972, 'North Ostrobothnia', 70)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (973, 'Central Ostrobothnia', 70)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (974, 'Ostrobothnia', 70)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (975, 'South Ostrobothnia', 70)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (976, 'Central Finland', 70)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (977, 'North Karelia', 70)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (978, 'North Savo', 70)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (979, 'South Savo', 70)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (980, 'South Karelia', 70)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (981, 'Kymenlaakso', 70)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (982, 'Pirkanmaa', 70)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (983, 'Kanta-Häme', 70)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (984, 'Southwest Finland', 70)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (985, 'Uusimaa', 70)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (986, 'Paijat-Hame', 70)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (987, 'Satakunta', 70)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (988, 'Western', 71)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (989, 'Northern', 71)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (990, 'Central', 71)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (991, 'Eastern', 71)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (992, 'Rotuma', 71)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (993, 'Yap', 73)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (994, 'Pohnpei', 73)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (995, 'Kosrae', 73)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (996, 'Chuuk', 73)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (997, 'Vágar', 74)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (998, 'Suðuroy', 74)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (999, 'Streymoy', 74)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1000, 'Sandoy', 74)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1001, 'Norðoyar', 74)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1002, 'Eysturoy', 74)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1003, 'Provence-Alpes-Côte d''Azur', 75)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1004, 'Pays de la Loire', 75)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1005, 'Île-de-France', 75)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1006, 'Corsica', 75)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1007, 'Centre', 75)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1008, 'Brittany', 75)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1009, 'Bourgogne-Franche-Comté', 75)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1010, 'Nouvelle-Aquitaine', 75)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1011, 'Normandy', 75)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1012, 'Grand Est', 75)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1013, 'Occitanie', 75)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1014, 'Hauts-de-France', 75)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1015, 'Auvergne-Rhône-Alpes', 75)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1016, 'Woleu-Ntem', 76)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1017, 'Ogooué-Maritime', 76)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1018, 'Ogooué-Lolo', 76)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1019, 'Ogooué-Ivindo', 76)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1020, 'Nyanga', 76)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1021, 'Ngouni', 76)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1022, 'Moyen-Ogooué', 76)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1023, 'Haut-Ogooué', 76)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1024, 'Estuaire', 76)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1025, 'Wales', 77)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1026, 'Scotland', 77)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1027, 'Northern Ireland', 77)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1028, 'England', 77)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1029, 'Saint Patrick', 78)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1030, 'Saint Mark', 78)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1031, 'Saint John', 78)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1032, 'Saint George', 78)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1033, 'Saint David', 78)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1034, 'Saint Andrew', 78)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1035, 'Carriacou and Petite Martinique', 78)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1036, 'T''bilisi', 79)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1037, 'Achara', 79)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1038, 'Kvemo Kartli', 79)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1039, 'Kakheti', 79)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1040, 'Guria', 79)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1041, 'Imereti', 79)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1042, 'Shida Kartli', 79)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1043, 'Mtskheta-Mtianeti', 79)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1044, 'Racha-Lechkhumi and Kvemo Svaneti', 79)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1045, 'Samegrelo and Zemo Svaneti', 79)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1046, 'Samtskhe-Javakheti', 79)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1047, 'Abkhazia', 79)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1048, 'Guyane', 80)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1049, 'St Pierre du Bois', 81)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1050, 'Torteval', 81)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1051, 'Saint Saviour', 81)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1052, 'Forest', 81)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1053, 'St Martin', 81)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1054, 'Saint Andrew', 81)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1055, 'St Peter Port', 81)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1056, 'Castel', 81)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1057, 'Vale', 81)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1058, 'St Sampson', 81)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1059, 'Alderney', 81)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1060, 'Western', 82)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1061, 'Volta', 82)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1062, 'Upper West', 82)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1063, 'Upper East', 82)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1064, 'Northern', 82)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1065, 'Greater Accra', 82)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1066, 'Eastern', 82)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1067, 'Central', 82)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1068, 'Ashanti', 82)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1069, 'Bono', 82)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1070, 'Oti', 82)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1071, 'North East', 82)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1072, 'Ahafo', 82)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1073, 'Bono East', 82)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1074, 'Savannah', 82)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1075, 'Western North', 82)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1076, 'Kujalleq', 84)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1077, 'Qeqqata', 84)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1078, 'Sermersooq', 84)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1079, 'Qeqertalik', 84)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1080, 'Avannaata', 84)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1081, 'Western', 85)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1082, 'Upper River', 85)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1083, 'North Bank', 85)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1084, 'Central River', 85)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1085, 'Lower River', 85)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1086, 'Banjul', 85)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1087, 'Conakry', 86)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1088, 'Boke', 86)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1089, 'Faranah', 86)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1090, 'Kankan', 86)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1091, 'Kindia', 86)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1092, 'Labe', 86)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1093, 'Mamou', 86)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1094, 'Nzerekore', 86)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1095, 'Guadeloupe', 87)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1096, 'Annobon', 88)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1097, 'Bioko Norte', 88)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1098, 'Bioko Sur', 88)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1099, 'Centro Sur', 88)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1100, 'Kié-Ntem', 88)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1101, 'Litoral', 88)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1102, 'Wele-Nzas', 88)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1103, 'Djibloho', 88)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1104, 'Mount Athos', 89)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1105, 'Attica', 89)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1106, 'Central Greece', 89)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1107, 'Central Macedonia', 89)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1108, 'Crete', 89)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1109, 'East Macedonia and Thrace', 89)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1110, 'Epirus', 89)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1111, 'Ionian Islands', 89)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1112, 'North Aegean', 89)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1113, 'Peloponnese', 89)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1114, 'South Aegean', 89)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1115, 'Thessaly', 89)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1116, 'West Greece', 89)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1117, 'West Macedonia', 89)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1118, 'Zacapa', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1119, 'Totonicapán', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1120, 'Suchitepeque', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1121, 'Sololá', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1122, 'Santa Rosa Department', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1123, 'San Marcos', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1124, 'Sacatepéquez', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1125, 'Retalhuleu', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1126, 'Quiché', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1127, 'Quetzaltenango', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1128, 'Petén', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1129, 'Jutiapa', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1130, 'Jalapa', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1131, 'Izabal Department', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1132, 'Huehuetenango', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1133, 'Guatemala', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1134, 'Escuintla', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1135, 'El Progreso', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1136, 'Chiquimula', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1137, 'Chimaltenango', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1138, 'Baja Verapaz', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1139, 'Alta Verapaz', 91)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1140, 'Piti', 92)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1141, 'Santa Rita', 92)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1142, 'Sinajana', 92)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1143, 'Talofofo', 92)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1144, 'Tamuning', 92)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1145, 'Umatac', 92)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1146, 'Yigo', 92)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1147, 'Yona', 92)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1148, 'Merizo', 92)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1149, 'Mangilao', 92)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1150, 'Agana Heights', 92)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1151, 'Chalan Pago-Ordot', 92)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1152, 'Asan', 92)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1153, 'Agat', 92)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1154, 'Dededo', 92)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1155, 'Barrigada', 92)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1156, 'Hagatna', 92)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1157, 'Inarajan', 92)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1158, 'Mongmong-Toto-Maite', 92)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1159, 'Tombali', 93)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1160, 'Quinara', 93)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1161, 'Oio', 93)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1162, 'Gabú', 93)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1163, 'Cacheu', 93)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1164, 'Bolama', 93)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1165, 'Bissau', 93)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1166, 'Biombo', 93)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1167, 'Bafatá', 93)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1168, 'Upper Takutu-Upper Essequibo', 94)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1169, 'Upper Demerara-Berbice', 94)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1170, 'Potaro-Siparuni', 94)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1171, 'Pomeroon-Supenaam', 94)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1172, 'Mahaica-Berbice', 94)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1173, 'Essequibo Islands-West Demerara', 94)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1174, 'East Berbice-Corentyne', 94)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1175, 'Demerara-Mahaica', 94)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1176, 'Cuyuni-Mazaruni', 94)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1177, 'Barima-Waini', 94)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1178, 'Yuen Long', 95)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1179, 'Tsuen Wan', 95)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1180, 'Tai Po', 95)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1181, 'Sai Kung', 95)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1182, 'Islands', 95)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1183, 'Central and Western', 95)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1184, 'Wan Chai', 95)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1185, 'Eastern', 95)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1186, 'Southern', 95)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1187, 'Yau Tsim Mong', 95)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1188, 'Sham Shui Po', 95)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1189, 'Kowloon City', 95)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1190, 'Wong Tai Sin', 95)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1191, 'Kwun Tong', 95)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1192, 'Kwai Tsing', 95)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1193, 'Tuen Mun', 95)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1194, 'North', 95)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1195, 'Sha Tin', 95)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1196, 'Yoro Department', 97)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1197, 'Valle Department', 97)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1198, 'Santa Bárbara Department', 97)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1199, 'Olancho Department', 97)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1200, 'Ocotepeque Department', 97)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1201, 'Lempira Department', 97)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1202, 'La Paz Department', 97)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1203, 'Bay Islands', 97)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1204, 'Intibucá Department', 97)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1205, 'Gracias a Dios Department', 97)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1206, 'Francisco Morazán Department', 97)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1207, 'El Paraíso Department', 97)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1208, 'Cortés Department', 97)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1209, 'Copán Department', 97)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1210, 'Comayagua Department', 97)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1211, 'Colón Department', 97)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1212, 'Choluteca Department', 97)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1213, 'Atlántida Department', 97)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1214, 'Bjelovar-Bilogora', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1215, 'Brod-Posavina', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1216, 'Dubrovnik-Neretva', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1217, 'Istria', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1218, 'Karlovac', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1219, 'County of Koprivnica-Križevci', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1220, 'County of Krapina-Zagorje', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1221, 'County of Lika-Senj', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1222, 'County of Međimurje', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1223, 'County of Osijek-Baranja', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1224, 'County of Požega-Slavonia', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1225, 'County of Primorje-Gorski Kotar', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1226, 'Šibenik-Knin', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1227, 'County of Sisak-Moslavina', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1228, 'Split-Dalmatia', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1229, 'County of Varaždin', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1230, 'Vukovar-Sirmium', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1231, 'County of Zadar', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1232, 'County of Zagreb', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1233, 'City of Zagreb', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1234, 'County of Virovitica-Podravina', 98)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1235, 'Sud-Est', 99)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1236, 'Sud', 99)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1237, 'Ouest', 99)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1238, 'Nord-Ouest', 99)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1239, 'Nord-Est', 99)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1240, 'Nord', 99)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1241, 'GrandʼAnse', 99)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1242, 'Centre', 99)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1243, 'Artibonite', 99)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1244, 'Nippes', 99)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1245, 'Szabolcs-Szatmár-Bereg', 100)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1246, 'Jász-Nagykun-Szolnok', 100)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1247, 'Heves', 100)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1248, 'Hajdú-Bihar', 100)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1249, 'Csongrád', 100)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1250, 'Borsod-Abaúj-Zemplén', 100)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1251, 'Bekes County', 100)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1252, 'Zala', 100)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1253, 'Veszprém', 100)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1254, 'Vas', 100)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1255, 'Tolna', 100)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1256, 'Somogy', 100)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1257, 'Pest', 100)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1258, 'Nógrád', 100)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1259, 'Komárom-Esztergom', 100)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1260, 'Győr-Moson-Sopron', 100)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1261, 'Fejér', 100)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1262, 'Budapest', 100)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1263, 'Baranya', 100)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1264, 'Bács-Kiskun', 100)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1265, 'North Sumatra', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1266, 'Aceh', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1267, 'Yogyakarta', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1268, 'South Sumatra', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1269, 'West Sumatra', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1270, 'North Sulawesi', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1271, 'Southeast Sulawesi', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1272, 'Central Sulawesi', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1273, 'South Sulawesi', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1274, 'Riau', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1275, 'East Nusa Tenggara', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1276, 'West Nusa Tenggara', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1277, 'Maluku', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1278, 'Lampung', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1279, 'East Kalimantan', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1280, 'Central Kalimantan', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1281, 'South Kalimantan', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1282, 'West Kalimantan', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1283, 'East Java', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1284, 'Central Java', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1285, 'West Java', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1286, 'Jambi', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1287, 'Jakarta', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1288, 'Papua', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1289, 'Bengkulu', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1290, 'Bali', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1291, 'Banten', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1292, 'Gorontalo', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1293, 'Bangka–Belitung Islands', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1294, 'North Maluku', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1295, 'West Papua', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1296, 'West Sulawesi', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1297, 'Riau Islands', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1298, 'North Kalimantan', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1299, 'Southwest Papua', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1300, 'Central Papua', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1301, 'Highland Papua', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1302, 'South Papua', 101)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1303, 'Connacht', 102)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1304, 'Leinster', 102)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1305, 'Munster', 102)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1306, 'Ulster', 102)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1307, 'Jerusalem', 103)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1308, 'Tel Aviv', 103)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1309, 'Haifa', 103)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1310, 'Northern District', 103)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1311, 'Central District', 103)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1312, 'Southern District', 103)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1313, 'Judea and Samaria Area', 103)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1314, 'Andreas', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1315, 'Arbory', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1316, 'Ballaugh', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1317, 'Braddan', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1318, 'Bride', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1319, 'Castletown', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1320, 'Douglas', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1321, 'German', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1322, 'Jurby', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1323, 'Laxey', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1324, 'Lezayre', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1325, 'Lonan', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1326, 'Malew', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1327, 'Marown', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1328, 'Maughold', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1329, 'Michael', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1330, 'Onchan', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1331, 'Patrick', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1332, 'Peel', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1333, 'Port Erin', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1334, 'Port St Mary', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1335, 'Ramsey', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1336, 'Rushen', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1337, 'Santon', 104)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1338, 'West Bengal', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1339, 'Uttar Pradesh', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1340, 'Tripura', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1341, 'Telangana', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1342, 'Tamil Nadu', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1343, 'Sikkim', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1344, 'Rajasthan', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1345, 'Punjab', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1346, 'Puducherry', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1347, 'Odisha', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1348, 'Nagaland', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1349, 'Mizoram', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1350, 'Meghalaya', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1351, 'Manipur', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1352, 'Maharashtra', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1353, 'Madhya Pradesh', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1354, 'Laccadives', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1355, 'Kerala', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1356, 'Karnataka', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1357, 'Jammu and Kashmir', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1358, 'Himachal Pradesh', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1359, 'Haryana', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1360, 'Gujarat', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1361, 'Goa', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1362, 'Delhi', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1363, 'Chandigarh', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1364, 'Bihar', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1365, 'Assam', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1366, 'Arunachal Pradesh', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1367, 'Andhra Pradesh', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1368, 'Andaman and Nicobar', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1369, 'Chhattisgarh', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1370, 'Jharkhand', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1371, 'Uttarakhand', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1372, 'Ladakh', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1373, 'Dadra and Nagar Haveli and Daman and Diu', 105)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1374, 'Basra', 107)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1375, 'Wāsiţ', 107)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1376, 'Salah ad Din', 107)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1377, 'Nineveh', 107)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1378, 'Maysan', 107)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1379, 'Karbalāʼ', 107)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1380, 'Arbīl', 107)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1381, 'Diyālá', 107)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1382, 'Dhi Qar', 107)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1383, 'Duhok', 107)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1384, 'Baghdad', 107)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1385, 'Bābil', 107)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1386, 'Kirkuk', 107)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1387, 'Sulaymaniyah', 107)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1388, 'An Najaf', 107)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1389, 'Al Qādisīyah', 107)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1390, 'Al Muthanná', 107)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1391, 'Al Anbar', 107)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1392, 'Halabja Governorate', 107)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1393, 'Tehran', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1394, 'Zanjan', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1395, 'Yazd', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1396, 'Semnan', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1397, 'Māzandarān', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1398, 'Markazi', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1399, 'Lorestan Province', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1400, 'Kordestān', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1401, 'Kohgiluyeh and Boyer-Ahmad', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1402, 'Khuzestan', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1403, 'Kermānshāh', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1404, 'Kerman', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1405, 'Ilam Province', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1406, 'Hormozgan', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1407, 'Hamadān', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1408, 'Gīlān', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1409, 'Fars', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1410, 'Chaharmahal and Bakhtiari', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1411, 'Bushehr', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1412, 'East Azerbaijan', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1413, 'West Azerbaijan', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1414, 'Ardabīl', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1415, 'Isfahan', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1416, 'Golestan', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1417, 'Qazvīn', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1418, 'Qom', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1419, 'Sistan and Baluchestan', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1420, 'South Khorasan Province', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1421, 'Razavi Khorasan', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1422, 'North Khorasan', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1423, 'Alborz Province', 108)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1424, 'Northwest', 109)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1425, 'Northeast', 109)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1426, 'East', 109)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1427, 'South', 109)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1428, 'Capital Region', 109)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1429, 'Southern Peninsula', 109)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1430, 'West', 109)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1431, 'Westfjords', 109)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1432, 'Sicily', 110)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1433, 'Sardinia', 110)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1434, 'Calabria', 110)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1435, 'Veneto', 110)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1436, 'Aosta Valley', 110)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1437, 'Umbria', 110)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1438, 'Trentino-Alto Adige', 110)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1439, 'Tuscany', 110)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1440, 'Apulia', 110)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1441, 'Piedmont', 110)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1442, 'Molise', 110)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1443, 'The Marches', 110)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1444, 'Lombardy', 110)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1445, 'Liguria', 110)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1446, 'Lazio', 110)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1447, 'Friuli Venezia Giulia', 110)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1448, 'Emilia-Romagna', 110)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1449, 'Campania', 110)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1450, 'Basilicate', 110)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1451, 'Abruzzo', 110)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1452, 'St Clement', 111)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1453, 'St Saviour', 111)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1454, 'St. Brelade', 111)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1455, 'Grouville', 111)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1456, 'St Mary', 111)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1457, 'St Lawrence', 111)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1458, 'St Peter', 111)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1459, 'St Ouen', 111)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1460, 'St John', 111)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1461, 'Trinity', 111)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1462, 'St Martîn', 111)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1463, 'St Helier', 111)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1464, 'Westmoreland', 112)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1465, 'Trelawny', 112)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1466, 'St. Thomas', 112)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1467, 'St. Mary', 112)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1468, 'St. James', 112)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1469, 'St. Elizabeth', 112)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1470, 'Saint Catherine', 112)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1471, 'St Ann', 112)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1472, 'St. Andrew', 112)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1473, 'Portland', 112)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1474, 'Manchester', 112)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1475, 'Kingston', 112)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1476, 'Hanover', 112)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1477, 'Clarendon', 112)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1478, 'Ma’an', 113)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1479, 'Irbid', 113)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1480, 'Zarqa', 113)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1481, 'Tafielah', 113)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1482, 'Amman', 113)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1483, 'Mafraq', 113)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1484, 'Karak', 113)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1485, 'Balqa', 113)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1486, 'Ajlun', 113)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1487, 'Jerash', 113)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1488, 'Aqaba', 113)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1489, 'Madaba', 113)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1490, 'Yamanashi', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1491, 'Yamaguchi', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1492, 'Wakayama', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1493, 'Toyama', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1494, 'Tottori', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1495, 'Tokyo', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1496, 'Tokushima', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1497, 'Tochigi', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1498, 'Shizuoka', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1499, 'Shimane', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1500, 'Shiga', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1501, 'Saitama', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1502, 'Saga', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1503, 'Ōsaka', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1504, 'Okinawa', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1505, 'Okayama', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1506, 'Oita', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1507, 'Niigata', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1508, 'Nara', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1509, 'Nagasaki', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1510, 'Nagano', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1511, 'Miyazaki', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1512, 'Mie', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1513, 'Kyoto', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1514, 'Kumamoto', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1515, 'Kochi', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1516, 'Kanagawa', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1517, 'Kagoshima', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1518, 'Kagawa', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1519, 'Ishikawa', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1520, 'Hyōgo', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1521, 'Hiroshima', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1522, 'Gunma', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1523, 'Gifu', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1524, 'Fukuoka', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1525, 'Fukui', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1526, 'Ehime', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1527, 'Aichi', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1528, 'Yamagata', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1529, 'Miyagi', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1530, 'Iwate', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1531, 'Ibaraki', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1532, 'Fukushima', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1533, 'Chiba', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1534, 'Akita', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1535, 'Hokkaido', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1536, 'Aomori', 114)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1537, 'West Pokot', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1538, 'Wajir', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1539, 'Uasin Gishu', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1540, 'Turkana', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1541, 'Trans Nzoia', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1542, 'Tharaka - Nithi', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1543, 'Tana River', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1544, 'Siaya', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1545, 'Samburu', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1546, 'Nairobi Area', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1547, 'Murang''A', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1548, 'Mombasa', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1549, 'Meru', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1550, 'Marsabit', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1551, 'Mandera', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1552, 'Laikipia', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1553, 'Kwale', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1554, 'Kitui', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1555, 'Kisumu', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1556, 'Kisii', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1557, 'Kirinyaga', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1558, 'Kilifi', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1559, 'Kiambu', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1560, 'Kericho', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1561, 'Kakamega', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1562, 'Isiolo', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1563, 'Garissa', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1564, 'Embu', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1565, 'Busia', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1566, 'Bungoma', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1567, 'Baringo', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1568, 'Nyandarua', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1569, 'Vihiga', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1570, 'Lamu', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1571, 'Machakos', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1572, 'Makueni', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1573, 'Elegeyo-Marakwet', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1574, 'Taita Taveta', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1575, 'Kajiado', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1576, 'Nyeri', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1577, 'Homa Bay', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1578, 'Bomet', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1579, 'Migori', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1580, 'Nakuru', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1581, 'Narok', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1582, 'Nyamira', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1583, 'Nandi', 115)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1584, 'Osh', 116)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1585, 'Batken', 116)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1586, 'Talas', 116)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1587, 'Naryn', 116)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1588, 'Issyk-Kul', 116)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1589, 'Bishkek', 116)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1590, 'Jalal-Abad', 116)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1591, 'Chüy', 116)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1592, 'Osh City', 116)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1593, 'Pursat', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1594, 'Battambang', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1595, 'Takeo', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1596, 'Svay Rieng', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1597, 'Stung Treng', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1598, 'Ŏtâr Méanchey', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1599, 'Siem Reap', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1600, 'Ratanakiri', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1601, 'Prey Veng', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1602, 'Preah Vihear', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1603, 'Phnom Penh', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1604, 'Pailin', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1605, 'Mondolkiri', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1606, 'Kratie', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1607, 'Kep', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1608, 'Koh Kong', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1609, 'Kandal', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1610, 'Kampot', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1611, 'Kampong Thom', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1612, 'Kampong Speu', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1613, 'Kampong Chhnang', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1614, 'Kampong Cham', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1615, 'Preah Sihanouk', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1616, 'Banteay Meanchey', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1617, 'Tboung Khmum', 117)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1618, 'Gilbert Islands', 118)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1619, 'Line Islands', 118)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1620, 'Phoenix Islands', 118)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1621, 'Mohéli', 119)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1622, 'Grande Comore', 119)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1623, 'Anjouan', 119)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1624, 'Trinity Palmetto Point', 120)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1625, 'Middle Island', 120)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1626, 'Saint Thomas Lowland', 120)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1627, 'Saint Peter Basseterre', 120)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1628, 'Saint Paul Charlestown', 120)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1629, 'Saint Paul Capesterre', 120)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1630, 'Saint Mary Cayon', 120)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1631, 'Saint John Figtree', 120)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1632, 'Saint John Capesterre', 120)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1633, 'Saint James Windwa', 120)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1634, 'Saint George Gingerland', 120)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1635, 'Saint George Basseterre', 120)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1636, 'Saint Anne Sandy Point', 120)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1637, 'Christ Church Nichola Town', 120)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1638, 'Pyongyang', 121)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1639, 'South Pyongan', 121)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1640, 'P''yŏngan-bukto', 121)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1641, 'Kangwŏn-do', 121)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1642, 'Hwanghae-namdo', 121)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1643, 'Hwanghae-bukto', 121)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1644, 'Hamgyŏng-namdo', 121)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1645, 'Yanggang-do', 121)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1646, 'Hambuk', 121)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1647, 'Chagang-do', 121)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1648, 'Rason', 121)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1649, 'Ulsan', 122)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1650, 'Daejeon', 122)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1651, 'Daegu', 122)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1652, 'Seoul', 122)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1653, 'Busan', 122)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1654, 'Gyeongsangbuk-do', 122)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1655, 'Gyeonggi-do', 122)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1656, 'Gwangju', 122)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1657, 'Gangwon-do', 122)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1658, 'Incheon', 122)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1659, 'Chungcheongnam-do', 122)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1660, 'North Chungcheong', 122)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1661, 'Jeollanam-do', 122)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1662, 'Jeollabuk-do', 122)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1663, 'Jeju-do', 122)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1664, 'Gyeongsangnam-do', 122)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1665, 'Sejong-si', 122)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1666, 'Hawalli', 124)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1667, 'Al Asimah', 124)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1668, 'Al Jahrāʼ', 124)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1669, 'Al Farwaniyah', 124)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1670, 'Al Aḩmadī', 124)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1671, 'Mubārak al Kabīr', 124)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1672, 'George Town', 125)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1673, 'West Bay', 125)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1674, 'Bodden Town', 125)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1675, 'North Side', 125)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1676, 'East End', 125)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1677, 'Sister Island', 125)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1678, 'Batys Qazaqstan', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1679, 'Mangghystaū', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1680, 'Atyraū', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1681, 'Aqtöbe', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1682, 'East Kazakhstan', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1683, 'Aqmola', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1684, 'North Kazakhstan', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1685, 'Pavlodar Region', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1686, 'Qyzylorda', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1687, 'Qostanay', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1688, 'Karaganda', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1689, 'Zhambyl', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1690, 'South Kazakhstan', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1691, 'Almaty', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1692, 'Almaty Oblysy', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1693, 'Shymkent', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1694, 'Baikonur', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1695, 'Astana', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1696, 'Abai Region', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1697, 'Jetisu Region', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1698, 'Ulytau Region', 126)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1699, 'Xiangkhoang', 127)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1700, 'Xiagnabouli', 127)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1701, 'Vientiane', 127)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1702, 'Savannahkhét', 127)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1703, 'Salavan', 127)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1704, 'Phôngsali', 127)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1705, 'Oudômxai', 127)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1706, 'Louangphabang', 127)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1707, 'Loungnamtha', 127)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1708, 'Khammouan', 127)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1709, 'Houaphan', 127)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1710, 'Champasak', 127)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1711, 'Attapu', 127)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1712, 'Xékong', 127)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1713, 'Bokeo', 127)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1714, 'Bolikhamsai', 127)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1715, 'Vientiane Prefecture', 127)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1716, 'Xaisomboun', 127)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1717, 'Mont-Liban', 128)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1718, 'Beyrouth', 128)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1719, 'Liban-Nord', 128)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1720, 'South Governorate', 128)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1721, 'Béqaa', 128)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1722, 'Nabatîyé', 128)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1723, 'Aakkâr', 128)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1724, 'Baalbek-Hermel', 128)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1725, 'Vieux-Fort', 129)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1726, 'Soufrière', 129)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1727, 'Micoud', 129)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1728, 'Laborie', 129)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1729, 'Gros-Islet', 129)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1730, 'Dennery', 129)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1731, 'Choiseul', 129)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1732, 'Castries', 129)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1733, 'Anse-la-Raye', 129)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1734, 'Canaries', 129)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1735, 'Vaduz', 130)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1736, 'Triesenberg', 130)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1737, 'Triesen', 130)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1738, 'Schellenberg', 130)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1739, 'Schaan', 130)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1740, 'Ruggell', 130)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1741, 'Planken', 130)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1742, 'Mauren', 130)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1743, 'Gamprin', 130)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1744, 'Eschen', 130)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1745, 'Balzers', 130)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1746, 'Western', 131)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1747, 'Uva', 131)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1748, 'Southern', 131)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1749, 'Sabaragamuwa', 131)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1750, 'North Western', 131)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1751, 'North Central', 131)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1752, 'Central', 131)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1753, 'Northern Province', 131)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1754, 'Eastern Province', 131)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1755, 'Sinoe', 132)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1756, 'Nimba', 132)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1757, 'Montserrado', 132)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1758, 'Maryland', 132)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1759, 'Lofa', 132)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1760, 'Grand Gedeh', 132)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1761, 'Grand Cape Mount', 132)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1762, 'Grand Bassa', 132)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1763, 'Bong', 132)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1764, 'Bomi', 132)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1765, 'Grand Kru', 132)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1766, 'Margibi', 132)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1767, 'River Cess', 132)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1768, 'Gbarpolu', 132)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1769, 'River Gee', 132)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1770, 'Thaba-Tseka', 133)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1771, 'Quthing', 133)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1772, 'Qachaʼs Nek', 133)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1773, 'Mokhotlong', 133)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1774, 'Mohaleʼs Hoek', 133)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1775, 'Maseru', 133)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1776, 'Mafeteng', 133)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1777, 'Leribe', 133)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1778, 'Butha-Buthe', 133)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1779, 'Berea', 133)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1780, 'Alytus', 134)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1781, 'Kaunas', 134)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1782, 'Klaipėda County', 134)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1783, 'Marijampolė County', 134)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1784, 'Panevėžys', 134)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1785, 'Siauliai', 134)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1786, 'Tauragė County', 134)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1787, 'Telsiai', 134)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1788, 'Utena', 134)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1789, 'Vilnius', 134)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1790, 'Wiltz', 135)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1791, 'Vianden', 135)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1792, 'Remich', 135)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1793, 'Redange', 135)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1794, 'Mersch', 135)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1795, 'Luxembourg', 135)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1796, 'Grevenmacher', 135)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1797, 'Esch-sur-Alzette', 135)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1798, 'Echternach', 135)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1799, 'Diekirch', 135)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1800, 'Clervaux', 135)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1801, 'Capellen', 135)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1802, 'Ventspils Rajons', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1803, 'Ventspils', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1804, 'Valmiera', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1805, 'Valka', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1806, 'Tukums Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1807, 'Talsi Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1808, 'Saldus Rajons', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1809, 'Riga', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1810, 'Rēzekne Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1811, 'Rēzekne', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1812, 'Preiļu novads', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1813, 'Ogre', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1814, 'Madona Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1815, 'Ludza Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1816, 'Limbaži Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1817, 'Liepāja', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1818, 'Kuldīga Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1819, 'Krāslava Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1820, 'Jūrmala', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1821, 'Jelgava Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1822, 'Jelgava', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1823, 'Jēkabpils Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1824, 'Gulbene Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1825, 'Dobele Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1826, 'Daugavpils', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1827, 'Cēsis Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1828, 'Bauska Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1829, 'Balvi Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1830, 'Alūksne Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1831, 'Aizkraukle Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1832, 'Mārupe', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1833, 'Olaine', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1834, 'Ķekava', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1835, 'Salaspils Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1836, 'Ādaži', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1837, 'Līvāni', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1838, 'Varakļāni Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1839, 'Ropaži Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1840, 'Sigulda Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1841, 'Saulkrasti Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1842, 'Smiltene Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1843, 'South Kurzeme Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1844, 'Augšdaugava Municipality', 136)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1845, 'Darnah', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1846, 'Banghāzī', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1847, 'Al Marj', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1848, 'Al Kufrah', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1849, 'Al Jabal al Akhḑar', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1850, 'Tripoli', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1851, 'Surt', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1852, 'Sabhā', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1853, 'Nālūt', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1854, 'Murzuq', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1855, 'Mişrātah', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1856, 'Ghāt', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1857, 'Az Zāwiyah', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1858, 'Ash Shāţiʼ', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1859, 'Al Jufrah', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1860, 'An Nuqāţ al Khams', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1861, 'Al Buţnān', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1862, 'Jabal al Gharbi', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1863, 'Al Jafārah', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1864, 'Al Marqab', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1865, 'Al Wāḩāt', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1866, 'Wādī al Ḩayāt', 137)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1867, 'Tanger-Tetouan-Al Hoceima', 138)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1868, 'Oriental', 138)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1869, 'Fès-Meknès', 138)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1870, 'Rabat-Salé-Kénitra', 138)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1871, 'Béni Mellal-Khénifra', 138)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1872, 'Casablanca-Settat', 138)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1873, 'Marrakesh-Safi', 138)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1874, 'Drâa-Tafilalet', 138)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1875, 'Souss-Massa', 138)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1876, 'Guelmim-Oued Noun', 138)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1877, 'Laâyoune-Sakia El Hamra', 138)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1878, 'Dakhla-Oued Ed-Dahab', 138)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1879, 'Municipality of Monaco', 139)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1880, 'Raionul Edineţ', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1881, 'Ungheni', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1882, 'Teleneşti', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1883, 'Taraclia', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1884, 'Ştefan-Vodă', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1885, 'Strășeni', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1886, 'Raionul Soroca', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1887, 'Rîşcani', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1888, 'Rezina', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1889, 'Orhei', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1890, 'Raionul Ocniţa', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1891, 'Anenii Noi', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1892, 'Nisporeni', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1893, 'Leova', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1894, 'Sîngerei', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1895, 'Criuleni', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1896, 'Ialoveni', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1897, 'Chișinău Municipality', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1898, 'Căuşeni', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1899, 'Cantemir', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1900, 'Călăraşi', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1901, 'Cahul', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1902, 'Glodeni', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1903, 'Floreşti', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1904, 'Fălești', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1905, 'Dubăsari', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1906, 'Drochia', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1907, 'Donduşeni', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1908, 'Cimişlia', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1909, 'Briceni', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1910, 'Basarabeasca', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1911, 'Hînceşti', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1912, 'Şoldăneşti', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1913, 'Transnistria', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1914, 'Găgăuzia', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1915, 'Bender Municipality', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1916, 'Bălţi', 140)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1917, 'Rožaje Municipality', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1918, 'Opština Žabljak', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1919, 'Ulcinj', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1920, 'Tivat', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1921, 'Podgorica', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1922, 'Opština Šavnik', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1923, 'Opština Plužine', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1924, 'Pljevlja', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1925, 'Opština Plav', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1926, 'Opština Nikšić', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1927, 'Mojkovac', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1928, 'Kotor', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1929, 'Opština Kolašin', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1930, 'Berane', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1931, 'Herceg Novi', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1932, 'Danilovgrad', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1933, 'Cetinje', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1934, 'Budva', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1935, 'Bijelo Polje', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1936, 'Bar', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1937, 'Andrijevica', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1938, 'Gusinje', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1939, 'Petnjica', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1940, 'Tuzi', 141)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1941, 'Diana', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1942, 'Sava', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1943, 'Sofia', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1944, 'Analanjirofo', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1945, 'Boeny', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1946, 'Betsiboka', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1947, 'Alaotra Mangoro', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1948, 'Melaky', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1949, 'Bongolava', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1950, 'Vakinankaratra', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1951, 'Itasy', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1952, 'Analamanga', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1953, 'Atsinanana', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1954, 'Menabe', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1955, 'Amoron''i Mania', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1956, 'Upper Matsiatra', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1957, 'Ihorombe', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1958, 'Atsimo-Atsinanana', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1959, 'Anosy', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1960, 'Androy', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1961, 'Atsimo-Andrefana', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1962, 'Fitovinany Region', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1963, 'Vatovavy Region', 143)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1964, 'Ailinginae Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1965, 'Ailinglaplap Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1966, 'Ailuk Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1967, 'Arno Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1968, 'Aur Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1969, 'Bikar Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1970, 'Bikini Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1971, 'Ebon Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1972, 'Enewetak Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1973, 'Erikub Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1974, 'Jaluit Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1975, 'Kwajalein Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1976, 'Lae Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1977, 'Likiep Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1978, 'Majuro Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1979, 'Maloelap Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1980, 'Mili Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1981, 'Namdrik Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1982, 'Namu Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1983, 'Rongelap Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1984, 'Rongrik Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1985, 'Taka Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1986, 'Bokak Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1987, 'Ujae Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1988, 'Ujelang', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1989, 'Utrik Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1990, 'Wotho Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1991, 'Wotje Atoll', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1992, 'Jabat Island', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1993, 'Jemo Island', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1994, 'Kili Island', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1995, 'Lib Island', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1996, 'Mejit Island', 144)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1997, 'Valandovo', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1998, 'Resen', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (1999, 'Kratovo', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2000, 'Pehchevo', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2001, 'Novo Selo', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2002, 'Bosilovo', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2003, 'Vasilevo', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2004, 'Dojran', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2005, 'Bogdanci', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2006, 'Konche', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2007, 'Makedonska Kamenica', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2008, 'Zrnovci', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2009, 'Karbinci', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2010, 'Demir Kapija', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2011, 'Rosoman', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2012, 'Gradsko', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2013, 'Lozovo', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2014, 'Češinovo-Obleševo', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2015, 'Novaci', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2016, 'Berovo', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2017, 'Bitola', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2018, 'Mogila', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2019, 'Arachinovo', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2020, 'Bogovinje', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2021, 'Brvenica', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2022, 'Chashka', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2023, 'Centar Zhupa', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2024, 'Chucher Sandevo', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2025, 'Debar', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2026, 'Delchevo', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2027, 'Demir Hisar', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2028, 'Dolneni', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2029, 'Gevgelija', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2030, 'Gostivar', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2031, 'Ilinden', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2032, 'Jegunovce', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2033, 'Kavadarci', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2034, 'Kichevo', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2035, 'Kochani', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2036, 'Kriva Palanka', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2037, 'Krivogashtani', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2038, 'Krushevo', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2039, 'Kumanovo', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2040, 'Lipkovo', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2041, 'Makedonski Brod', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2042, 'Negotino', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2043, 'Ohrid', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2044, 'Petrovec', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2045, 'Plasnica', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2046, 'Prilep', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2047, 'Probishtip', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2048, 'Radovish', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2049, 'Rankovce', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2050, 'Mavrovo and Rostuša', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2051, 'Sopište', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2052, 'Staro Nagorichane', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2053, 'Shtip', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2054, 'Struga', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2055, 'Strumica', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2056, 'Studenichani', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2057, 'Sveti Nikole', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2058, 'Tearce', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2059, 'Tetovo', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2060, 'Veles', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2061, 'Vevchani', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2062, 'Vinica', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2063, 'Vrapchishte', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2064, 'Zelenikovo', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2065, 'Zhelino', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2066, 'Debarca', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2067, 'Grad Skopje', 145)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2068, 'Tombouctou', 146)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2069, 'Sikasso', 146)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2070, 'Ségou', 146)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2071, 'Mopti', 146)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2072, 'Koulikoro', 146)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2073, 'Kayes', 146)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2074, 'Gao', 146)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2075, 'Bamako', 146)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2076, 'Kidal', 146)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2077, 'Taoudénit', 146)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2078, 'Ménaka', 146)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2079, 'Tanintharyi', 147)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2080, 'Shan', 147)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2081, 'Sagain', 147)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2082, 'Yangon', 147)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2083, 'Rakhine', 147)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2084, 'Bago', 147)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2085, 'Mon', 147)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2086, 'Mandalay', 147)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2087, 'Magway', 147)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2088, 'Kayah', 147)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2089, 'Kayin', 147)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2090, 'Kachin', 147)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2091, 'Ayeyarwady', 147)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2092, 'Chin', 147)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2093, 'Nay Pyi Taw', 147)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2094, 'Uvs Province', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2095, 'Hovd', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2096, 'Govi-Altai Province', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2097, 'Dzabkhan', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2098, 'Bayan-Ölgiy', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2099, 'Bayanhongor', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2100, 'Ulaanbaatar', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2101, 'Central Aimak', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2102, 'Sühbaatar', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2103, 'Selenge', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2104, 'Övörhangay', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2105, 'Ömnögovĭ', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2106, 'Khövsgöl Province', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2107, 'Hentiy', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2108, 'Middle Govĭ', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2109, 'East Gobi Aymag', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2110, 'East Aimak', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2111, 'Bulgan', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2112, 'Arkhangai Province', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2113, 'Darhan Uul', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2114, 'Govĭ-Sumber', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2115, 'Orhon', 148)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2116, 'Nossa Senhora de Fátima', 149)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2117, 'Santo António', 149)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2118, 'São Lázaro', 149)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2119, 'Sé', 149)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2120, 'São Lourenço', 149)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2121, 'Nossa Senhora do Carmo', 149)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2122, 'Cotai', 149)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2123, 'São Francisco Xavier', 149)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2124, 'Rota', 150)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2125, 'Saipan', 150)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2126, 'Tinian', 150)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2127, 'Northern Islands', 150)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2128, 'Martinique', 151)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2129, 'Trarza', 152)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2130, 'Tiris Zemmour', 152)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2131, 'Tagant', 152)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2132, 'Inchiri', 152)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2133, 'Hodh El Gharbi', 152)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2134, 'Hodh Ech Chargi', 152)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2135, 'Guidimaka', 152)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2136, 'Gorgol', 152)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2137, 'Dakhlet Nouadhibou', 152)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2138, 'Brakna', 152)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2139, 'Assaba', 152)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2140, 'Adrar', 152)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2141, 'Nouakchott Ouest', 152)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2142, 'Nouakchott Nord', 152)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2143, 'Nouakchott Sud', 152)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2144, 'Saint Peter', 153)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2145, 'Saint Georges', 153)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2146, 'Saint Anthony', 153)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2147, 'Attard', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2148, 'Balzan', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2149, 'Il-Birgu', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2150, 'Birkirkara', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2151, 'Birżebbuġa', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2152, 'Bormla', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2153, 'Dingli', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2154, 'Il-Fgura', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2155, 'Floriana', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2156, 'Il-Fontana', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2157, 'Għajnsielem', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2158, 'L-Għarb', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2159, 'Ħal Għargħur', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2160, 'L-Għasri', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2161, 'Ħal Għaxaq', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2162, 'Il-Gudja', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2163, 'Il-Gżira', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2164, 'Il-Ħamrun', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2165, 'L-Iklin', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2166, 'L-Imdina', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2167, 'L-Imġarr', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2168, 'L-Imqabba', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2169, 'L-Imsida', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2170, 'Mtarfa', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2171, 'Senglea', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2172, 'Il-Kalkara', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2173, 'Ta’ Kerċem', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2174, 'Kirkop', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2175, 'Lija', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2176, 'Luqa', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2177, 'Il-Marsa', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2178, 'Marsaskala', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2179, 'Marsaxlokk', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2180, 'Il-Mellieħa', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2181, 'Il-Mosta', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2182, 'Il-Munxar', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2183, 'In-Nadur', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2184, 'In-Naxxar', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2185, 'Paola', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2186, 'Pembroke', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2187, 'Tal-Pietà', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2188, 'Il-Qala', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2189, 'Qormi', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2190, 'Il-Qrendi', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2191, 'Ir-Rabat', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2192, 'Victoria', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2193, 'Safi', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2194, 'Saint John', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2195, 'Saint Julian', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2196, 'Saint Lawrence', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2197, 'Saint Lucia', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2198, 'Saint Paul’s Bay', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2199, 'Saint Venera', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2200, 'Sannat', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2201, 'Is-Siġġiewi', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2202, 'Tas-Sliema', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2203, 'Is-Swieqi', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2204, 'Tarxien', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2205, 'Ta’ Xbiex', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2206, 'Ix-Xagħra', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2207, 'Ix-Xewkija', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2208, 'Ix-Xgħajra', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2209, 'Ħaż-Żabbar', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2210, 'Ħaż-Żebbuġ', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2211, 'Iż-Żebbuġ', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2212, 'Iż-Żejtun', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2213, 'Iż-Żurrieq', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2214, 'Valletta', 154)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2215, 'Agalega Islands', 155)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2216, 'Savanne', 155)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2217, 'Rivière du Rempart', 155)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2218, 'Port Louis', 155)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2219, 'Plaines Wilhems', 155)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2220, 'Pamplemousses', 155)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2221, 'Moka', 155)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2222, 'Grand Port', 155)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2223, 'Flacq', 155)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2224, 'Black River', 155)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2225, 'Cargados Carajos', 155)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2226, 'Rodrigues', 155)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2227, 'Vaavu Atholhu', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2228, 'Thaa Atholhu', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2229, 'Shaviyani Atholhu', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2230, 'Seenu', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2231, 'Raa Atoll', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2232, 'Noonu Atoll', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2233, 'Gnyaviyani Atoll', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2234, 'Meemu Atholhu', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2235, 'Faadhippolhu Atoll', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2236, 'Laamu', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2237, 'Kaafu Atoll', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2238, 'Haa Dhaalu Atholhu', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2239, 'Haa Alifu Atholhu', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2240, 'Gaafu Dhaalu Atoll', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2241, 'Gaafu Alif Atoll', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2242, 'Faafu Atholhu', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2243, 'Dhaalu Atholhu', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2244, 'Baa Atholhu', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2245, 'Northern Ari Atoll', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2246, 'Male', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2247, 'Southern Ari Atoll', 156)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2248, 'Southern Region', 157)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2249, 'Northern Region', 157)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2250, 'Central Region', 157)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2251, 'Yucatán', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2252, 'Veracruz', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2253, 'Tlaxcala', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2254, 'Tamaulipas', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2255, 'Tabasco', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2256, 'Quintana Roo', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2257, 'Querétaro', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2258, 'Puebla', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2259, 'Oaxaca', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2260, 'Nuevo León', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2261, 'Morelos', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2262, 'México', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2263, 'Hidalgo', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2264, 'Guerrero', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2265, 'Mexico City', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2266, 'Chiapas', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2267, 'Campeche', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2268, 'Zacatecas', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2269, 'Sonora', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2270, 'Sinaloa', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2271, 'San Luis Potosí', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2272, 'Nayarit', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2273, 'Michoacán', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2274, 'Jalisco', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2275, 'Guanajuato', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2276, 'Durango', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2277, 'Colima', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2278, 'Coahuila', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2279, 'Chihuahua', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2280, 'Baja California Sur', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2281, 'Baja California', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2282, 'Aguascalientes', 158)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2283, 'Melaka', 159)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2284, 'Terengganu', 159)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2285, 'Selangor', 159)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2286, 'Sarawak', 159)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2287, 'Sabah', 159)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2288, 'Perlis', 159)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2289, 'Perak', 159)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2290, 'Pahang', 159)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2291, 'Negeri Sembilan', 159)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2292, 'Kelantan', 159)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2293, 'Kuala Lumpur', 159)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2294, 'Penang', 159)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2295, 'Kedah', 159)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2296, 'Johor', 159)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2297, 'Labuan', 159)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2298, 'Putrajaya', 159)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2299, 'Zambézia', 160)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2300, 'Tete', 160)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2301, 'Sofala', 160)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2302, 'Niassa', 160)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2303, 'Nampula', 160)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2304, 'Maputo Province', 160)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2305, 'Manica', 160)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2306, 'Inhambane', 160)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2307, 'Gaza', 160)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2308, 'Cabo Delgado', 160)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2309, 'Maputo City', 160)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2310, 'Zambezi', 161)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2311, 'Khomas', 161)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2312, 'Erongo', 161)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2313, 'Hardap', 161)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2314, 'Karas', 161)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2315, 'Kunene', 161)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2316, 'Ohangwena', 161)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2317, 'Omaheke', 161)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2318, 'Omusati', 161)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2319, 'Oshana', 161)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2320, 'Oshikoto', 161)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2321, 'Otjozondjupa', 161)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2322, 'Kavango East', 161)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2323, 'Kavango West', 161)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2324, 'South Province', 162)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2325, 'North Province', 162)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2326, 'Loyalty Islands', 162)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2327, 'Zinder', 163)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2328, 'Tahoua', 163)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2329, 'Maradi', 163)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2330, 'Dosso', 163)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2331, 'Diffa', 163)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2332, 'Agadez', 163)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2333, 'Tillabéri', 163)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2334, 'Niamey', 163)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2335, 'Sokoto', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2336, 'Rivers', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2337, 'Plateau', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2338, 'Oyo', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2339, 'Ondo', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2340, 'Ogun', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2341, 'Niger', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2342, 'Lagos', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2343, 'Kwara', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2344, 'Katsina', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2345, 'Kano', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2346, 'Kaduna', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2347, 'Imo', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2348, 'Cross River', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2349, 'Borno', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2350, 'Benue', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2351, 'Bauchi', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2352, 'Anambra', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2353, 'Akwa Ibom', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2354, 'FCT', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2355, 'Abia', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2356, 'Delta', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2357, 'Adamawa', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2358, 'Edo', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2359, 'Enugu', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2360, 'Jigawa', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2361, 'Bayelsa', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2362, 'Ebonyi', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2363, 'Ekiti', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2364, 'Gombe', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2365, 'Nassarawa', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2366, 'Zamfara', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2367, 'Kebbi', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2368, 'Kogi', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2369, 'Osun', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2370, 'Taraba', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2371, 'Yobe', 165)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2372, 'Rivas', 166)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2373, 'Río San Juan Department', 166)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2374, 'Nueva Segovia Department', 166)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2375, 'Matagalpa Department', 166)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2376, 'Masaya Department', 166)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2377, 'Managua Department', 166)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2378, 'Madriz Department', 166)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2379, 'León Department', 166)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2380, 'Jinotega Department', 166)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2381, 'Granada Department', 166)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2382, 'Estelí Department', 166)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2383, 'Chontales Department', 166)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2384, 'Chinandega', 166)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2385, 'Carazo Department', 166)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2386, 'Boaco Department', 166)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2387, 'North Caribbean Coast', 166)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2388, 'South Caribbean Coast', 166)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2389, 'South Holland', 167)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2390, 'Zeeland', 167)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2391, 'Utrecht', 167)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2392, 'Overijssel', 167)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2393, 'North Holland', 167)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2394, 'North Brabant', 167)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2395, 'Limburg', 167)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2396, 'Groningen', 167)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2397, 'Gelderland', 167)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2398, 'Friesland', 167)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2399, 'Drenthe', 167)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2400, 'Flevoland', 167)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2401, 'Rogaland', 168)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2402, 'Oslo', 168)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2403, 'Nordland', 168)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2404, 'Møre og Romsdal', 168)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2405, 'Trøndelag', 168)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2406, 'Viken', 168)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2407, 'Agder', 168)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2408, 'Troms og Finnmark', 168)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2409, 'Innlandet', 168)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2410, 'Vestfold og Telemark', 168)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2411, 'Vestland', 168)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2412, 'Province 1', 169)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2413, 'Province 2', 169)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2414, 'Bagmati Province', 169)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2415, 'Province 4', 169)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2416, 'Lumbini Province', 169)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2417, 'Karnali Pradesh', 169)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2418, 'Sudurpashchim Pradesh', 169)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2419, 'Yaren', 170)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2420, 'Uaboe', 170)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2421, 'Nibok', 170)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2422, 'Meneng', 170)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2423, 'Ijuw', 170)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2424, 'Ewa', 170)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2425, 'Denigomodu', 170)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2426, 'Buada', 170)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2427, 'Boe', 170)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2428, 'Baiti', 170)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2429, 'Anibare', 170)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2430, 'Anetan', 170)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2431, 'Anabar', 170)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2432, 'Aiwo', 170)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2433, 'Wellington', 172)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2434, 'Manawatu-Wanganui', 172)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2435, 'Waikato', 172)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2436, 'Tasman', 172)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2437, 'Taranaki', 172)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2438, 'Southland', 172)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2439, 'Bay of Plenty', 172)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2440, 'Northland', 172)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2441, 'Marlborough', 172)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2442, 'Hawke''s Bay', 172)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2443, 'Gisborne', 172)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2444, 'Canterbury', 172)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2445, 'Auckland', 172)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2446, 'Chatham Islands', 172)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2447, 'Nelson', 172)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2448, 'Otago', 172)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2449, 'West Coast', 172)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2450, 'Ad Dakhiliyah', 173)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2451, 'Al Batinah South', 173)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2452, 'Al Wusta Governorate', 173)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2453, 'Southeastern Governorate', 173)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2454, 'Ad Dhahirah', 173)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2455, 'Muscat', 173)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2456, 'Musandam Governorate', 173)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2457, 'Dhofar', 173)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2458, 'Al Buraimi', 173)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2459, 'Northeastern Governorate', 173)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2460, 'Al Batinah North', 173)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2461, 'Veraguas', 174)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2462, 'Guna Yala', 174)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2463, 'Panamá', 174)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2464, 'Los Santos', 174)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2465, 'Herrera', 174)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2466, 'Darién', 174)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2467, 'Colón', 174)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2468, 'Coclé', 174)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2469, 'Chiriquí Province', 174)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2470, 'Bocas del Toro Province', 174)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2471, 'Emberá', 174)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2472, 'Ngöbe-Buglé', 174)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2473, 'Panamá Oeste Province', 174)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2474, 'Naso Tjër Di', 174)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2475, 'Ucayali', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2476, 'Tumbes', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2477, 'San Martín', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2478, 'Piura', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2479, 'Loreto', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2480, 'Lambayeque', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2481, 'La Libertad', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2482, 'Huanuco', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2483, 'Cajamarca', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2484, 'Ancash', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2485, 'Amazonas', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2486, 'Tacna', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2487, 'Puno', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2488, 'Pasco', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2489, 'Moquegua', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2490, 'Madre de Dios', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2491, 'Lima', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2492, 'Lima region', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2493, 'Junin', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2494, 'Ica', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2495, 'Huancavelica', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2496, 'Cusco', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2497, 'Callao', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2498, 'Ayacucho', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2499, 'Arequipa', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2500, 'Apurímac', 175)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2501, 'Îles Marquises', 176)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2502, 'Îles Tuamotu-Gambier', 176)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2503, 'Leeward Islands', 176)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2504, 'Îles du Vent', 176)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2505, 'Îles Australes', 176)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2506, 'West New Britain', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2507, 'Western Province', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2508, 'Western Highlands', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2509, 'Southern Highlands', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2510, 'Sandaun', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2511, 'Bougainville', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2512, 'Northern Province', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2513, 'New Ireland', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2514, 'National Capital', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2515, 'Morobe', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2516, 'Manus', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2517, 'Madang', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2518, 'Gulf', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2519, 'Enga', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2520, 'East Sepik', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2521, 'East New Britain', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2522, 'Eastern Highlands', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2523, 'Chimbu', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2524, 'Milne Bay', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2525, 'Central Province', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2526, 'Hela', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2527, 'Jiwaka', 177)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2528, 'Autonomous Region in Muslim Mindanao', 178)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2529, 'Northern Mindanao', 178)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2530, 'Mimaropa', 178)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2531, 'Cagayan Valley', 178)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2532, 'Soccsksargen', 178)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2533, 'Caraga', 178)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2534, 'Cordillera', 178)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2535, 'Ilocos', 178)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2536, 'Calabarzon', 178)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2537, 'Western Visayas', 178)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2538, 'Central Luzon', 178)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2539, 'Central Visayas', 178)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2540, 'Eastern Visayas', 178)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2541, 'Zamboanga Peninsula', 178)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2542, 'Davao', 178)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2543, 'Bicol', 178)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2544, 'Metro Manila', 178)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2545, 'Islamabad', 179)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2546, 'Sindh', 179)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2547, 'Punjab', 179)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2548, 'Khyber Pakhtunkhwa', 179)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2549, 'Gilgit-Baltistan', 179)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2550, 'Balochistan', 179)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2551, 'Azad Kashmir', 179)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2552, 'Lublin', 180)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2553, 'Lesser Poland', 180)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2554, 'Mazovia', 180)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2555, 'Subcarpathia', 180)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2556, 'Podlasie', 180)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2557, 'Świętokrzyskie', 180)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2558, 'Warmia-Masuria', 180)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2559, 'Lower Silesia', 180)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2560, 'Łódź Voivodeship', 180)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2561, 'Lubusz', 180)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2562, 'Opole Voivodeship', 180)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2563, 'Pomerania', 180)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2564, 'Silesia', 180)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2565, 'Greater Poland', 180)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2566, 'West Pomerania', 180)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2567, 'Kujawsko-Pomorskie', 180)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2568, 'Saint-Pierre', 181)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2569, 'Miquelon-Langlade', 181)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2570, 'Adjuntas', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2571, 'Aguada', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2572, 'Aguadilla', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2573, 'Aguas Buenas', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2574, 'Aibonito', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2575, 'Añasco', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2576, 'Arecibo', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2577, 'Arroyo', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2578, 'Barceloneta', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2579, 'Barranquitas', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2580, 'Bayamón', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2581, 'Cabo Rojo', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2582, 'Caguas', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2583, 'Camuy', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2584, 'Canóvanas', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2585, 'Carolina', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2586, 'Cataño', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2587, 'Cayey', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2588, 'Ceiba', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2589, 'Ciales', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2590, 'Cidra', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2591, 'Coamo', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2592, 'Comerío', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2593, 'Corozal', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2594, 'Culebra', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2595, 'Dorado', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2596, 'Fajardo', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2597, 'Florida', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2598, 'Guánica', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2599, 'Guayama', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2600, 'Guayanilla', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2601, 'Guaynabo', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2602, 'Gurabo', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2603, 'Hatillo', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2604, 'Hormigueros', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2605, 'Humacao', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2606, 'Isabela', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2607, 'Jayuya', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2608, 'Juana Díaz', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2609, 'Juncos', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2610, 'Lajas', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2611, 'Lares', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2612, 'Las Marías', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2613, 'Las Piedras', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2614, 'Loíza', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2615, 'Luquillo', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2616, 'Manatí', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2617, 'Maricao', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2618, 'Maunabo', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2619, 'Mayagüez', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2620, 'Moca', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2621, 'Morovis', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2622, 'Naguabo', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2623, 'Naranjito', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2624, 'Orocovis', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2625, 'Patillas', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2626, 'Peñuelas', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2627, 'Ponce', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2628, 'Rincón', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2629, 'Quebradillas', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2630, 'Río Grande', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2631, 'Sabana Grande', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2632, 'Salinas', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2633, 'San Germán', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2634, 'San Juan', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2635, 'San Lorenzo', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2636, 'San Sebastián', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2637, 'Santa Isabel', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2638, 'Toa Alta', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2639, 'Toa Baja', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2640, 'Trujillo Alto', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2641, 'Utuado', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2642, 'Vega Alta', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2643, 'Vega Baja', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2644, 'Villalba', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2645, 'Yabucoa', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2646, 'Yauco', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2647, 'Vieques', 183)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2648, 'Gaza Strip', 184)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2649, 'West Bank', 184)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2650, 'Setúbal', 185)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2651, 'Santarém', 185)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2652, 'Portalegre', 185)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2653, 'Lisbon', 185)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2654, 'Leiria', 185)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2655, 'Faro', 185)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2656, 'Évora', 185)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2657, 'Castelo Branco', 185)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2658, 'Beja', 185)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2659, 'Madeira', 185)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2660, 'Viseu', 185)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2661, 'Vila Real', 185)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2662, 'Viana do Castelo', 185)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2663, 'Porto', 185)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2664, 'Guarda', 185)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2665, 'Coimbra', 185)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2666, 'Bragança', 185)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2667, 'Braga', 185)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2668, 'Aveiro', 185)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2669, 'Azores', 185)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2670, 'Ngatpang', 186)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2671, 'Sonsorol', 186)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2672, 'Kayangel', 186)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2673, 'Hatohobei', 186)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2674, 'Aimeliik', 186)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2675, 'Airai', 186)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2676, 'Angaur', 186)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2677, 'Koror', 186)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2678, 'Melekeok', 186)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2679, 'Ngaraard', 186)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2680, 'Ngchesar', 186)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2681, 'Ngarchelong', 186)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2682, 'Ngardmau', 186)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2683, 'Ngaremlengui', 186)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2684, 'Ngiwal', 186)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2685, 'Peleliu', 186)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2686, 'San Pedro', 187)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2687, 'Presidente Hayes', 187)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2688, 'Paraguarí', 187)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2689, 'Ñeembucú', 187)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2690, 'Misiones', 187)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2691, 'Itapúa', 187)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2692, 'Guairá', 187)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2693, 'Cordillera', 187)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2694, 'Concepción', 187)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2695, 'Central', 187)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2696, 'Canindeyú', 187)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2697, 'Caazapá', 187)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2698, 'Caaguazú', 187)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2699, 'Amambay', 187)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2700, 'Alto Paraná', 187)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2701, 'Alto Paraguay', 187)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2702, 'Asunción', 187)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2703, 'Boquerón', 187)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2704, 'Madīnat ash Shamāl', 188)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2705, 'Al Khor', 188)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2706, 'Baladīyat Umm Şalāl', 188)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2707, 'Baladīyat ar Rayyān', 188)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2708, 'Baladīyat ad Dawḩah', 188)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2709, 'Al Wakrah', 188)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2710, 'Baladīyat az̧ Z̧a‘āyin', 188)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2711, 'Al-Shahaniya', 188)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2712, 'Réunion', 189)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2713, 'Vrancea', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2714, 'Vâlcea', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2715, 'Vaslui', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2716, 'Tulcea', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2717, 'Timiș', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2718, 'Teleorman', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2719, 'Suceava', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2720, 'Sibiu', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2721, 'Satu Mare', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2722, 'Sălaj', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2723, 'Prahova', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2724, 'Olt', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2725, 'Neamț', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2726, 'Mureș', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2727, 'Mehedinți', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2728, 'Maramureş', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2729, 'Iași', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2730, 'Ialomița', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2731, 'Hunedoara', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2732, 'Harghita', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2733, 'Gorj', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2734, 'Giurgiu', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2735, 'Galați', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2736, 'Dolj', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2737, 'Dâmbovița', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2738, 'Covasna', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2739, 'Constanța', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2740, 'Cluj', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2741, 'Caraș-Severin', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2742, 'Călărași', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2743, 'Buzău', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2744, 'București', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2745, 'Brașov', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2746, 'Brăila', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2747, 'Botoșani', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2748, 'Bistrița-Năsăud', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2749, 'Bihor', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2750, 'Bacău', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2751, 'Arges', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2752, 'Arad', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2753, 'Alba', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2754, 'Ilfov', 190)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2755, 'Vojvodina', 191)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2756, 'Central Serbia', 191)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2757, 'Yaroslavl Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2758, 'Voronezh Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2759, 'Vologda Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2760, 'Volgograd Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2761, 'Ulyanovsk', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2762, 'Udmurtiya Republic', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2763, 'Tver Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2764, 'Tula Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2765, 'Tatarstan Republic', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2766, 'Tambov Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2767, 'Stavropol Kray', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2768, 'Smolensk Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2769, 'Saratov Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2770, 'Samara Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2771, 'Ryazan Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2772, 'Rostov', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2773, 'Pskov Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2774, 'Perm Krai', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2775, 'Penza Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2776, 'Oryol oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2777, 'Orenburg Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2778, 'Novgorod Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2779, 'North Ossetia–Alania', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2780, 'Nenets', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2781, 'Murmansk', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2782, 'Moscow', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2783, 'Moscow Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2784, 'Mordoviya Republic', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2785, 'Mariy-El Republic', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2786, 'Lipetsk Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2787, 'Leningradskaya Oblast''', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2788, 'St.-Petersburg', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2789, 'Kursk Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2790, 'Krasnodar Krai', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2791, 'Kostroma Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2792, 'Komi', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2793, 'Kirov Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2794, 'Karelia', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2795, 'Karachayevo-Cherkesiya Republic', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2796, 'Kaluga Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2797, 'Kalmykiya Republic', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2798, 'Kaliningrad Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2799, 'Kabardino-Balkariya Republic', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2800, 'Ivanovo Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2801, 'Ingushetiya Republic', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2802, 'Nizhny Novgorod Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2803, 'Dagestan', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2804, 'Chuvashia', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2805, 'Chechnya', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2806, 'Bryansk Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2807, 'Belgorod Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2808, 'Bashkortostan Republic', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2809, 'Astrakhan Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2810, 'Arkhangelskaya', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2811, 'Adygeya Republic', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2812, 'Vladimir Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2813, 'Yamalo-Nenets', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2814, 'Tyumen Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2815, 'Republic of Tyva', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2816, 'Tomsk Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2817, 'Sverdlovsk Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2818, 'Omsk Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2819, 'Novosibirsk Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2820, 'Kurgan Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2821, 'Krasnoyarsk Krai', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2822, 'Khanty-Mansia', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2823, 'Khakasiya Republic', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2824, 'Kuzbass', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2825, 'Altai', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2826, 'Chelyabinsk', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2827, 'Altai Krai', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2828, 'Sakha', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2829, 'Primorye', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2830, 'Khabarovsk', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2831, 'Irkutsk Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2832, 'Jewish Autonomous Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2833, 'Amur Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2834, 'Buryatiya Republic', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2835, 'Sakhalin Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2836, 'Magadan Oblast', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2837, 'Kamchatka', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2838, 'Chukotka', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2839, 'Zabaykalskiy (Transbaikal) Kray', 192)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2840, 'Eastern Province', 193)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2841, 'Kigali', 193)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2842, 'Northern Province', 193)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2843, 'Western Province', 193)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2844, 'Southern Province', 193)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2845, 'Tabuk Region', 194)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2846, 'Najran Region', 194)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2847, 'Mecca Region', 194)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2848, 'Jazan Region', 194)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2849, 'Ha''il Region', 194)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2850, '''Asir Region', 194)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2851, 'Eastern Province', 194)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2852, 'Riyadh Region', 194)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2853, 'Al-Qassim Region', 194)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2854, 'Medina Region', 194)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2855, 'Al Jawf Region', 194)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2856, 'Northern Borders Region', 194)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2857, 'Al Bahah Region', 194)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2858, 'Western Province', 195)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2859, 'Malaita', 195)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2860, 'Isabel', 195)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2861, 'Guadalcanal', 195)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2862, 'Central Province', 195)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2863, 'Temotu', 195)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2864, 'Makira', 195)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2865, 'Choiseul', 195)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2866, 'Rennell and Bellona', 195)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2867, 'Honiara', 195)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2868, 'Takamaka', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2869, 'Saint Louis', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2870, 'Port Glaud', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2871, 'Pointe Larue', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2872, 'Plaisance', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2873, 'Mont Fleuri', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2874, 'Mont Buxton', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2875, 'English River', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2876, 'La Digue', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2877, 'Grand Anse Mahe', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2878, 'Grand Anse Praslin', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2879, 'Glacis', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2880, 'Cascade', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2881, 'Bel Ombre', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2882, 'Bel Air', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2883, 'Beau Vallon', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2884, 'Baie Sainte Anne', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2885, 'Baie Lazare', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2886, 'Anse Royale', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2887, 'Anse Etoile', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2888, 'Anse Boileau', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2889, 'Anse-aux-Pins', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2890, 'Les Mamelles', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2891, 'Roche Caiman', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2892, 'Au Cap', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2893, 'Outer Islands', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2894, 'Ile Perseverance I', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2895, 'Ile Perseverance II', 196)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2896, 'Northern State', 197)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2897, 'Khartoum', 197)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2898, 'Red Sea', 197)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2899, 'Al Jazīrah', 197)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2900, 'Al Qaḑārif', 197)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2901, 'White Nile', 197)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2902, 'Blue Nile', 197)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2903, 'Western Darfur', 197)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2904, 'West Kordofan State', 197)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2905, 'Southern Darfur', 197)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2906, 'Southern Kordofan', 197)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2907, 'Kassala', 197)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2908, 'River Nile', 197)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2909, 'Northern Darfur', 197)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2910, 'North Kordofan', 197)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2911, 'Sinnār', 197)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2912, 'Eastern Darfur', 197)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2913, 'Central Darfur', 197)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2914, 'Norrbotten', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2915, 'Västmanland', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2916, 'Västernorrland', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2917, 'Västerbotten', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2918, 'Värmland', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2919, 'Uppsala', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2920, 'Stockholm', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2921, 'Södermanland', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2922, 'Östergötland', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2923, 'Örebro', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2924, 'Kronoberg', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2925, 'Dalarna', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2926, 'Kalmar', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2927, 'Jönköping', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2928, 'Jämtland', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2929, 'Halland', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2930, 'Gotland', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2931, 'Gävleborg', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2932, 'Blekinge', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2933, 'Skåne', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2934, 'Västra Götaland', 199)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2935, 'Ascension', 201)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2936, 'Tristan da Cunha', 201)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2937, 'Saint Helena', 201)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2938, 'Žalec', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2939, 'Zagorje ob Savi', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2940, 'Vrhnika', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2941, 'Tržič', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2942, 'Trebnje', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2943, 'Trbovlje', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2944, 'Tolmin', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2945, 'Velenje', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2946, 'Šmarje pri Jelšah', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2947, 'Slovenska Konjice', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2948, 'Slovenska Bistrica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2949, 'Slovenj Gradec', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2950, 'Škofja Loka', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2951, 'Sežana', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2952, 'Sevnica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2953, 'Sentjur', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2954, 'Ribnica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2955, 'Radovljica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2956, 'Radlje ob Dravi', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2957, 'Ptuj', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2958, 'Postojna', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2959, 'Piran-Pirano', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2960, 'Ormož', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2961, 'Novo Mesto', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2962, 'Nova Gorica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2963, 'Murska Sobota', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2964, 'Mozirje', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2965, 'Metlika', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2966, 'Maribor', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2967, 'Logatec', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2968, 'Ljutomer', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2969, 'Litija', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2970, 'Lenart', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2971, 'Laško', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2972, 'Krško', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2973, 'Kranj', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2974, 'Koper-Capodistria', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2975, 'Kočevje', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2976, 'Kamnik', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2977, 'Jesenice', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2978, 'Izola-Isola', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2979, 'Ilirska Bistrica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2980, 'Idrija', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2981, 'Hrastnik', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2982, 'Grosuplje', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2983, 'Gornja Radgona', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2984, 'Dravograd', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2985, 'Domžale', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2986, 'Črnomelj', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2987, 'Cerknica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2988, 'Celje', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2989, 'Brežice', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2990, 'Ajdovščina', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2991, 'Hrpelje-Kozina', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2992, 'Divača', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2993, 'Pivka', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2994, 'Loška Dolina', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2995, 'Loški Potok', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2996, 'Osilnica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2997, 'Velike Lašče', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2998, 'Škofljica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (2999, 'Ig', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3000, 'Brezovica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3001, 'Borovnica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3002, 'Vipava', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3003, 'Komen', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3004, 'Miren-Kostanjevica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3005, 'Brda', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3006, 'Kanal', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3007, 'Žiri', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3008, 'Cerkno', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3009, 'Železniki', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3010, 'Gorenja Vas-Poljane', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3011, 'Dobrova-Horjul-Polhov Gradec', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3012, 'Kobarid', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3013, 'Bovec', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3014, 'Bohinj', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3015, 'Bled', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3016, 'Naklo', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3017, 'Kranjska Gora', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3018, 'Preddvor', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3019, 'Cerklje na Gorenjskem', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3020, 'Šenčur', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3021, 'Vodice', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3022, 'Medvode', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3023, 'Mengeš', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3024, 'Dol pri Ljubljani', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3025, 'Moravče', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3026, 'Gornji Grad', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3027, 'Luče', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3028, 'Ravne na Koroškem', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3029, 'Mežica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3030, 'Muta', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3031, 'Vuzenica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3032, 'Črna na Koroškem', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3033, 'Ljubno', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3034, 'Šoštanj', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3035, 'Šmartno ob Paki', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3036, 'Lukovica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3037, 'Radeče', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3038, 'Ivančna Gorica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3039, 'Dobrepolje', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3040, 'Semič', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3041, 'Šentjernej', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3042, 'Škocjan', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3043, 'Štore', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3044, 'Vojnik', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3045, 'Vitanje', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3046, 'Zreče', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3047, 'Mislinja', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3048, 'Ruše', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3049, 'Kungota', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3050, 'Šentilj', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3051, 'Pesnica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3052, 'Duplek', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3053, 'Rače-Fram', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3054, 'Starše', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3055, 'Kidričevo', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3056, 'Majšperk', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3057, 'Videm', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3058, 'Rogaška Slatina', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3059, 'Rogatec', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3060, 'Podčetrtek', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3061, 'Kozje', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3062, 'Gorišnica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3063, 'Zavrč', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3064, 'Dornava', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3065, 'Juršinci', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3066, 'Sveti Jurij', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3067, 'Radenci', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3068, 'Puconci', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3069, 'Rogašovci', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3070, 'Kuzma', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3071, 'Gornji Petrovci', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3072, 'Moravske Toplice', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3073, 'Kobilje', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3074, 'Beltinci', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3075, 'Turnišče', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3076, 'Odranci', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3077, 'Črenšovci', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3078, 'Nazarje', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3079, 'Ljubljana', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3080, 'Žirovnica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3081, 'Jezersko', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3082, 'Solčava', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3083, 'Komenda', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3084, 'Horjul', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3085, 'Šempeter-Vrtojba', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3086, 'Bloke', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3087, 'Sodražica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3088, 'Trzin', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3089, 'Prevalje', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3090, 'Vransko', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3091, 'Tabor', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3092, 'Braslovče', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3093, 'Polzela', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3094, 'Prebold', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3095, 'Kostel', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3096, 'Žužemberk', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3097, 'Dolenjske Toplice', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3098, 'Mirna Peč', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3099, 'Bistrica ob Sotli', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3100, 'Dobje', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3101, 'Dobrna', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3102, 'Oplotnica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3103, 'Podvelka', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3104, 'Ribnica na Pohorju', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3105, 'Lovrenc na Pohorju', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3106, 'Selnica ob Dravi', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3107, 'Hoče-Slivnica', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3108, 'Miklavž na Dravskem Polju', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3109, 'Hajdina', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3110, 'Žetale', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3111, 'Podlehnik', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3112, 'Markovci', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3113, 'Destrnik', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3114, 'Trnovska Vas', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3115, 'Sveti Andraž v Slovenskih Goricah', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3116, 'Cerkvenjak', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3117, 'Benedikt', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3118, 'Sveta Ana', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3119, 'Križevci', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3120, 'Veržej', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3121, 'Velika Polana', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3122, 'Lendava-Lendva', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3123, 'Dobrovnik-Dobronak', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3124, 'Tišina', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3125, 'Cankova', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3126, 'Grad', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3127, 'Hodoš-Hodos', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3128, 'Razkrižje', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3129, 'Šmartno pri Litiji', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3130, 'Šalovci', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3131, 'Apače', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3132, 'Cirkulane', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3133, 'Kostanjevica na Krki', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3134, 'Log–Dragomer', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3135, 'Makole', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3136, 'Mokronog-Trebelno', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3137, 'Poljčane', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3138, 'Rečica ob Savinji', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3139, 'Renče-Vogrsko', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3140, 'Središče ob Dravi', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3141, 'Straža', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3142, 'Sv. Trojica v Slov. Goricah', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3143, 'Sveti Tomaž', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3144, 'Šentrupert', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3145, 'Šmarješke Toplice', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3146, 'Sveti Jurij v Slovenskih Goricah', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3147, 'Gorje', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3148, 'Ankaran', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3149, 'Mirna', 202)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3150, 'Jan Mayen', 203)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3151, 'Svalbard', 203)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3152, 'Košický kraj', 204)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3153, 'Prešovský kraj', 204)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3154, 'Žilinský kraj', 204)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3155, 'Banskobystrický kraj', 204)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3156, 'Bratislavský Kraj', 204)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3157, 'Nitriansky kraj', 204)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3158, 'Trenčiansky kraj', 204)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3159, 'Trnava', 204)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3160, 'Western Area', 205)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3161, 'Southern Province', 205)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3162, 'Northern Province', 205)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3163, 'Eastern Province', 205)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3164, 'North West', 205)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3165, 'Serravalle', 206)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3166, 'Chiesanuova', 206)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3167, 'San Marino', 206)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3168, 'Acquaviva', 206)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3169, 'Borgo Maggiore', 206)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3170, 'Domagnano', 206)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3171, 'Faetano', 206)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3172, 'Fiorentino', 206)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3173, 'Montegiardino', 206)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3174, 'Ziguinchor', 207)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3175, 'Thiès', 207)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3176, 'Tambacounda', 207)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3177, 'Saint-Louis', 207)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3178, 'Matam', 207)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3179, 'Louga', 207)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3180, 'Kolda', 207)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3181, 'Kaolack', 207)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3182, 'Fatick', 207)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3183, 'Diourbel', 207)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3184, 'Dakar', 207)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3185, 'Kaffrine', 207)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3186, 'Kédougou', 207)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3187, 'Sédhiou', 207)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3188, 'Woqooyi Galbeed', 208)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3189, 'Togdheer', 208)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3190, 'Lower Shabeelle', 208)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3191, 'Middle Shabele', 208)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3192, 'Sanaag', 208)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3193, 'Nugaal', 208)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3194, 'Mudug', 208)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3195, 'Lower Juba', 208)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3196, 'Middle Juba', 208)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3197, 'Hiiraan', 208)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3198, 'Gedo', 208)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3199, 'Galguduud', 208)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3200, 'Bay', 208)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3201, 'Bari', 208)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3202, 'Banaadir', 208)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3203, 'Bakool', 208)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3204, 'Awdal', 208)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3205, 'Sool', 208)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3206, 'Wanica', 209)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3207, 'Sipaliwini', 209)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3208, 'Saramacca', 209)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3209, 'Paramaribo', 209)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3210, 'Para', 209)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3211, 'Nickerie', 209)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3212, 'Marowijne', 209)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3213, 'Coronie', 209)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3214, 'Commewijne', 209)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3215, 'Brokopondo', 209)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3216, 'Upper Nile', 198)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3217, 'Lakes', 198)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3218, 'Unity', 198)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3219, 'Central Equatoria', 198)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3220, 'Western Equatoria', 198)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3221, 'Western Bahr al Ghazal', 198)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3222, 'Jonglei', 198)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3223, 'Northern Bahr al Ghazal', 198)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3224, 'Eastern Equatoria', 198)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3225, 'Warrap', 198)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3226, 'São Tomé Island', 210)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3227, 'Príncipe', 210)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3228, 'Usulután', 211)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3229, 'Sonsonate', 211)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3230, 'San Vicente', 211)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3231, 'Santa Ana', 211)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3232, 'San Salvador', 211)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3233, 'San Miguel', 211)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3234, 'Morazán', 211)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3235, 'La Unión', 211)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3236, 'La Paz', 211)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3237, 'La Libertad', 211)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3238, 'Cuscatlán', 211)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3239, 'Chalatenango', 211)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3240, 'Cabañas', 211)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3241, 'Ahuachapán', 211)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3242, 'Tartus', 213)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3243, 'Dimashq', 213)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3244, 'Idlib', 213)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3245, 'Homs', 213)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3246, 'Hama', 213)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3247, 'Aleppo', 213)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3248, 'Rif-dimashq', 213)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3249, 'Deir ez-Zor', 213)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3250, 'Daraa', 213)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3251, 'As-Suwayda', 213)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3252, 'Ar-Raqqah', 213)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3253, 'Quneitra', 213)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3254, 'Latakia', 213)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3255, 'Al-Hasakah', 213)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3256, 'Shiselweni', 214)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3257, 'Manzini', 214)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3258, 'Lubombo', 214)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3259, 'Hhohho', 214)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3260, 'Salamat', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3261, 'Ouadaï', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3262, 'Wadi Fira', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3263, 'Tandjilé', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3264, 'Moyen-Chari', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3265, 'Mayo-Kebbi Est', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3266, 'Logone Oriental', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3267, 'Logone Occidental', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3268, 'Lac', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3269, 'Kanem', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3270, 'Guéra', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3271, 'Chari-Baguirmi', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3272, 'Batha', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3273, 'Borkou', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3274, 'Hadjer-Lamis', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3275, 'Mandoul', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3276, 'Mayo-Kebbi Ouest', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3277, 'N’Djaména', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3278, 'Barh el Gazel', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3279, 'Sila', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3280, 'Tibesti', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3281, 'Ennedi-Ouest', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3282, 'Ennedi-Est', 216)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3283, 'Crozet', 217)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3284, 'Kerguelen', 217)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3285, 'Saint-Paul-et-Amsterdam', 217)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3286, 'Îles Éparses', 217)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3287, 'Terre-Adélie', 217)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3288, 'Savanes', 218)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3289, 'Plateaux', 218)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3290, 'Maritime', 218)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3291, 'Centrale', 218)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3292, 'Kara', 218)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3293, 'Uthai Thani', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3294, 'Trang', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3295, 'Tak', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3296, 'Surat Thani', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3297, 'Sukhothai', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3298, 'Ratchaburi', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3299, 'Ranong', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3300, 'Prachuap Khiri Khan', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3301, 'Phuket', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3302, 'Phetchaburi', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3303, 'Phang Nga', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3304, 'Mae Hong Son', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3305, 'Lamphun', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3306, 'Lampang', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3307, 'Krabi', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3308, 'Kanchanaburi', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3309, 'Kamphaeng Phet', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3310, 'Chumphon', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3311, 'Chiang Rai', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3312, 'Chiang Mai', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3313, 'Yasothon', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3314, 'Yala', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3315, 'Uttaradit', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3316, 'Trat', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3317, 'Surin', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3318, 'Suphanburi', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3319, 'Songkhla', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3320, 'Si Sa Ket', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3321, 'Sing Buri', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3322, 'Satun', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3323, 'Saraburi', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3324, 'Samut Songkhram', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3325, 'Samut Sakhon', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3326, 'Samut Prakan', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3327, 'Sakon Nakhon', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3328, 'Roi Et', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3329, 'Rayong', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3330, 'Phra Nakhon Si Ayutthaya', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3331, 'Phrae', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3332, 'Phitsanulok', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3333, 'Phichit', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3334, 'Phetchabun', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3335, 'Phayao', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3336, 'Phatthalung', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3337, 'Pattani', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3338, 'Pathum Thani', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3339, 'Nonthaburi', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3340, 'Nong Khai', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3341, 'Narathiwat', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3342, 'Nan', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3343, 'Nakhon Si Thammarat', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3344, 'Nakhon Sawan', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3345, 'Nakhon Ratchasima', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3346, 'Nakhon Phanom', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3347, 'Nakhon Pathom', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3348, 'Nakhon Nayok', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3349, 'Mukdahan', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3350, 'Maha Sarakham', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3351, 'Lopburi', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3352, 'Loei', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3353, 'Bangkok', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3354, 'Khon Kaen', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3355, 'Kalasin', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3356, 'Chon Buri', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3357, 'Chanthaburi', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3358, 'Chaiyaphum', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3359, 'Chai Nat', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3360, 'Chachoengsao', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3361, 'Buriram', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3362, 'Ang Thong', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3363, 'Udon Thani', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3364, 'Prachin Buri', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3365, 'Ubon Ratchathani', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3366, 'Amnat Charoen', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3367, 'Nong Bua Lam Phu', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3368, 'Sa Kaeo', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3369, 'Bueng Kan', 219)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3370, 'Sughd', 220)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3371, 'Gorno-Badakhshan', 220)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3372, 'Khatlon', 220)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3373, 'Republican Subordination', 220)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3374, 'Dushanbe', 220)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3375, 'Nukunonu', 221)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3376, 'Fakaofo', 221)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3377, 'Atafu', 221)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3378, 'Viqueque', 222)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3379, 'Manufahi', 222)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3380, 'Manatuto', 222)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3381, 'Liquiçá', 222)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3382, 'Lautém', 222)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3383, 'Cova Lima', 222)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3384, 'Ermera', 222)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3385, 'Díli', 222)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3386, 'Bobonaro', 222)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3387, 'Baucau', 222)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3388, 'Oecusse', 222)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3389, 'Ainaro', 222)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3390, 'Aileu', 222)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3391, 'Balkan', 223)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3392, 'Ahal', 223)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3393, 'Ashgabat', 223)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3394, 'Daşoguz', 223)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3395, 'Mary', 223)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3396, 'Lebap', 223)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3397, 'Zaghouan Governorate', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3398, 'Tunis Governorate', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3399, 'Tozeur Governorate', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3400, 'Tataouine', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3401, 'Sousse Governorate', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3402, 'Siliana Governorate', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3403, 'Sidi Bouzid Governorate', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3404, 'Sfax Governorate', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3405, 'Kebili Governorate', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3406, 'Gafsa', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3407, 'Gabès Governorate', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3408, 'Nabeul Governorate', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3409, 'Medenine Governorate', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3410, 'Jendouba Governorate', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3411, 'Ben Arous Governorate', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3412, 'Bizerte Governorate', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3413, 'Béja Governorate', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3414, 'Ariana Governorate', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3415, 'Kairouan', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3416, 'Kasserine Governorate', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3417, 'Monastir Governorate', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3418, 'Mahdia Governorate', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3419, 'Kef Governorate', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3420, 'Manouba', 224)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3421, 'Vava‘u', 225)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3422, 'Tongatapu', 225)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3423, 'Ha‘apai', 225)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3424, 'ʻEua', 225)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3425, 'Niuas', 225)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3426, 'Yozgat', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3427, 'Van', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3428, 'Uşak', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3429, 'Şanlıurfa', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3430, 'Tunceli', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3431, 'Sivas', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3432, 'Siirt', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3433, 'Niğde Province', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3434, 'Nevşehir Province', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3435, 'Muş', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3436, 'Muğla', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3437, 'Mardin', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3438, 'Manisa', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3439, 'Malatya', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3440, 'Kütahya', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3441, 'Konya', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3442, 'Kırşehir', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3443, 'Kayseri', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3444, 'Kahramanmaraş', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3445, 'İzmir Province', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3446, 'Isparta', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3447, 'Mersin', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3448, 'Hatay', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3449, 'Hakkâri', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3450, 'Gaziantep', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3451, 'Eskişehir', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3452, 'Erzurum', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3453, 'Erzincan', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3454, 'Elazığ', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3455, 'Diyarbakır Province', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3456, 'Denizli', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3457, 'Burdur', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3458, 'Bitlis', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3459, 'Bingöl', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3460, 'Bilecik', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3461, 'Balıkesir', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3462, 'Aydın', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3463, 'Antalya', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3464, 'Ankara', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3465, 'Ağrı', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3466, 'Afyonkarahisar Province', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3467, 'Adıyaman Province', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3468, 'Adana', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3469, 'Osmaniye', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3470, 'Iğdır', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3471, 'Aksaray', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3472, 'Batman', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3473, 'Karaman', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3474, 'Kırıkkale', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3475, 'Şırnak', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3476, 'Kilis', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3477, 'Zonguldak', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3478, 'Trabzon', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3479, 'Tokat', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3480, 'Tekirdağ', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3481, 'Sinop', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3482, 'Samsun', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3483, 'Sakarya', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3484, 'Rize Province', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3485, 'Ordu', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3486, 'Kocaeli', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3487, 'Kırklareli', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3488, 'Kastamonu', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3489, 'Kars Province', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3490, 'Istanbul', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3491, 'Gümüşhane Province', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3492, 'Giresun', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3493, 'Edirne', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3494, 'Çorum', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3495, 'Çankırı', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3496, 'Canakkale', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3497, 'Bursa Province', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3498, 'Bolu', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3499, 'Artvin', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3500, 'Amasya', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3501, 'Bartın', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3502, 'Karabük Province', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3503, 'Yalova', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3504, 'Ardahan', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3505, 'Bayburt Province', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3506, 'Düzce', 226)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3507, 'Tobago', 227)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3508, 'San Fernando', 227)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3509, 'Port of Spain', 227)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3510, 'Mayaro', 227)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3511, 'Borough of Arima', 227)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3512, 'Chaguanas', 227)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3513, 'Couva-Tabaquite-Talparo', 227)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3514, 'Diego Martin', 227)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3515, 'Penal/Debe', 227)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3516, 'Princes Town', 227)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3517, 'Point Fortin', 227)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3518, 'Sangre Grande', 227)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3519, 'Siparia', 227)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3520, 'San Juan/Laventille', 227)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3521, 'Tunapuna/Piarco', 227)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3522, 'Nui', 228)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3523, 'Nanumea', 228)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3524, 'Funafuti', 228)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3525, 'Niutao', 228)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3526, 'Nanumanga', 228)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3527, 'Vaitupu', 228)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3528, 'Nukufetau', 228)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3529, 'Nukulaelae', 228)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3530, 'Fukien', 229)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3531, 'Takao', 229)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3532, 'Taipei', 229)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3533, 'Taiwan', 229)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3534, 'Kagera', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3535, 'Zanzibar Urban/West', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3536, 'Zanzibar North', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3537, 'Zanzibar Central/South', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3538, 'Tanga', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3539, 'Tabora', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3540, 'Singida', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3541, 'Shinyanga', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3542, 'Rukwa', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3543, 'Pwani', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3544, 'Pemba South', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3545, 'Pemba North', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3546, 'Mwanza', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3547, 'Morogoro', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3548, 'Mbeya', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3549, 'Mara', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3550, 'Lindi', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3551, 'Kilimanjaro', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3552, 'Kigoma', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3553, 'Iringa', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3554, 'Dodoma', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3555, 'Dar es Salaam', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3556, 'Arusha', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3557, 'Manyara', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3558, 'Ruvuma', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3559, 'Mtwara', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3560, 'Simiyu', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3561, 'Geita', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3562, 'Katavi', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3563, 'Njombe', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3564, 'Songwe', 230)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3565, 'Zhytomyr', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3566, 'Zaporizhzhia', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3567, 'Transcarpathia', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3568, 'Volyn', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3569, 'Vinnytsia', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3570, 'Ternopil', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3571, 'Sumy', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3572, 'Sevastopol City', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3573, 'Rivne', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3574, 'Poltava', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3575, 'Odessa', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3576, 'Mykolaiv', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3577, 'Lviv', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3578, 'Luhansk', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3579, 'Kiev', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3580, 'Kyiv City', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3581, 'Crimea', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3582, 'Kirovohrad', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3583, 'Khmelnytskyi', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3584, 'Kherson', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3585, 'Kharkiv', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3586, 'Ivano-Frankivsk', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3587, 'Donetsk', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3588, 'Dnipropetrovsk', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3589, 'Chernivtsi', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3590, 'Chernihiv', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3591, 'Cherkasy', 231)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3592, 'Central Region', 232)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3593, 'Eastern Region', 232)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3594, 'Northern Region', 232)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3595, 'Western Region', 232)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3596, 'Wake Island', 233)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3597, 'Navassa Island', 233)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3598, 'Baker Island', 233)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3599, 'Howland Island', 233)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3600, 'Jarvis Island', 233)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3601, 'Johnston Atoll', 233)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3602, 'Kingman Reef', 233)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3603, 'Midway Islands', 233)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3604, 'Palmyra Atoll', 233)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3605, 'Arkansas', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3606, 'Washington, D.C.', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3607, 'Delaware', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3608, 'Florida', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3609, 'Georgia', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3610, 'Kansas', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3611, 'Louisiana', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3612, 'Maryland', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3613, 'Missouri', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3614, 'Mississippi', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3615, 'North Carolina', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3616, 'Oklahoma', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3617, 'South Carolina', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3618, 'Tennessee', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3619, 'Texas', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3620, 'West Virginia', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3621, 'Alabama', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3622, 'Connecticut', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3623, 'Iowa', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3624, 'Illinois', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3625, 'Indiana', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3626, 'Maine', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3627, 'Michigan', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3628, 'Minnesota', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3629, 'Nebraska', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3630, 'New Hampshire', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3631, 'New Jersey', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3632, 'New York', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3633, 'Ohio', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3634, 'Rhode Island', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3635, 'Vermont', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3636, 'Wisconsin', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3637, 'California', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3638, 'Colorado', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3639, 'New Mexico', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3640, 'Nevada', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3641, 'Utah', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3642, 'Arizona', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3643, 'Idaho', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3644, 'Montana', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3645, 'North Dakota', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3646, 'Oregon', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3647, 'South Dakota', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3648, 'Washington', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3649, 'Wyoming', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3650, 'Hawaii', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3651, 'Alaska', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3652, 'Kentucky', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3653, 'Massachusetts', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3654, 'Pennsylvania', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3655, 'Virginia', 234)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3656, 'Treinta y Tres Department', 235)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3657, 'Tacuarembó Department', 235)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3658, 'Soriano', 235)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3659, 'San José Department', 235)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3660, 'Salto Department', 235)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3661, 'Rocha Department', 235)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3662, 'Rivera Department', 235)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3663, 'Río Negro Department', 235)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3664, 'Paysandú Department', 235)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3665, 'Montevideo Department', 235)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3666, 'Maldonado', 235)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3667, 'Lavalleja', 235)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3668, 'Florida', 235)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3669, 'Flores Department', 235)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3670, 'Durazno Department', 235)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3671, 'Colonia', 235)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3672, 'Cerro Largo', 235)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3673, 'Canelones', 235)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3674, 'Artigas', 235)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3675, 'Karakalpakstan', 236)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3676, 'Surxondaryo', 236)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3677, 'Samarqand', 236)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3678, 'Qashqadaryo', 236)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3679, 'Bukhara', 236)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3680, 'Toshkent', 236)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3681, 'Tashkent', 236)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3682, 'Sirdaryo Region', 236)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3683, 'Navoiy', 236)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3684, 'Namangan', 236)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3685, 'Xorazm', 236)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3686, 'Jizzax', 236)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3687, 'Fergana', 236)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3688, 'Andijon', 236)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3689, 'Saint Patrick', 238)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3690, 'Saint George', 238)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3691, 'Saint David', 238)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3692, 'Saint Andrew', 238)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3693, 'Grenadines', 238)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3694, 'Charlotte', 238)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3695, 'Zulia', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3696, 'Yaracuy', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3697, 'Trujillo', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3698, 'Táchira', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3699, 'Sucre', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3700, 'Portuguesa', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3701, 'Nueva Esparta', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3702, 'Monagas', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3703, 'Miranda', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3704, 'Mérida', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3705, 'Lara', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3706, 'Guárico', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3707, 'Dependencias Federales', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3708, 'Distrito Federal', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3709, 'Falcón', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3710, 'Delta Amacuro', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3711, 'Cojedes', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3712, 'Carabobo', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3713, 'Bolívar', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3714, 'Barinas', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3715, 'Aragua', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3716, 'Apure', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3717, 'Anzoátegui', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3718, 'Amazonas', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3719, 'Vargas', 239)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3720, 'Saint Croix Island', 241)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3721, 'Saint John Island', 241)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3722, 'Saint Thomas Island', 241)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3723, 'Nghệ An', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3724, 'Ninh Bình', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3725, 'Ninh Thuận', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3726, 'Sóc Trăng', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3727, 'Trà Vinh', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3728, 'Tuyên Quang', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3729, 'Vĩnh Long', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3730, 'Yên Bái', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3731, 'Lào Cai', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3732, 'Tiền Giang', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3733, 'Thừa Thiên-Huế', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3734, 'Kon Tum', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3735, 'Thanh Hóa', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3736, 'Thái Bình', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3737, 'Tây Ninh Province', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3738, 'Sơn La', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3739, 'Quảng Trị', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3740, 'Quảng Ninh', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3741, 'Quảng Ngãi Province', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3742, 'Quảng Bình', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3743, 'Phú Yên', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3744, 'Hòa Bình', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3745, 'Long An', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3746, 'Lạng Sơn', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3747, 'Lâm Đồng', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3748, 'Lai Châu', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3749, 'Kiến Giang', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3750, 'Khánh Hòa', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3751, 'Ho Chi Minh', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3752, 'Hà Tĩnh', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3753, 'Hà Giang', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3754, 'Gia Lai', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3755, 'Hanoi', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3756, 'Can Tho', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3757, 'Haiphong', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3758, 'Bình Thuận', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3759, 'Đồng Tháp', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3760, 'Đồng Nai', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3761, 'Đắk Lắk', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3762, 'Bà Rịa-Vũng Tàu', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3763, 'Cao Bằng', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3764, 'Bình Định', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3765, 'Bến Tre', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3766, 'An Giang', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3767, 'Ðắk Nông', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3768, 'Ðiện Biên', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3769, 'Bắc Ninh', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3770, 'Bắc Giang', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3771, 'Da Nang', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3772, 'Bình Dương', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3773, 'Bình Phước', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3774, 'Thái Nguyên', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3775, 'Quảng Nam', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3776, 'Phú Thọ', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3777, 'Nam Định', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3778, 'Hà Nam', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3779, 'Bắc Kạn', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3780, 'Bạc Liêu', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3781, 'Cà Mau', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3782, 'Hải Dương', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3783, 'Hưng Yên', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3784, 'Vĩnh Phúc', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3785, 'Hậu Giang', 242)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3786, 'Tafea', 243)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3787, 'Sanma', 243)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3788, 'Torba', 243)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3789, 'Malampa', 243)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3790, 'Penama', 243)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3791, 'Shefa', 243)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3792, 'Uvea', 244)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3793, 'Sigave', 244)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3794, 'Alo', 244)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3795, 'Vaisigano', 245)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3796, 'Va‘a-o-Fonoti', 245)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3797, 'Tuamasaga', 245)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3798, 'Satupa‘itea', 245)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3799, 'Palauli', 245)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3800, 'Gagaifomauga', 245)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3801, 'Gaga‘emauga', 245)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3802, 'Fa‘asaleleaga', 245)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3803, 'Atua', 245)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3804, 'Aiga-i-le-Tai', 245)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3805, 'A''ana', 245)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3806, 'Ferizaj', 123)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3807, 'Gjakova', 123)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3808, 'Gjilan', 123)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3809, 'Mitrovica', 123)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3810, 'Pec', 123)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3811, 'Pristina', 123)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3812, 'Prizren', 123)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3813, 'Ta‘izz', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3814, 'Shabwah', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3815, 'Sanaa Governorate', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3816, 'Şa‘dah', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3817, 'Raymah', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3818, 'Ma’rib', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3819, 'Al Mahwit Governorate', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3820, 'Al Jawf', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3821, 'Muhafazat Hadramaout', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3822, 'Dhamār', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3823, 'Al Mahrah Governorate', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3824, 'Al Hudaydah', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3825, 'Al Bayda', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3826, 'Aden', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3827, 'Abyan Governorate', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3828, 'Aḑ Ḑāli‘', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3829, 'Omran', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3830, 'Ḩajjah', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3831, 'Ibb Governorate', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3832, 'Laḩij', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3833, 'Amanat Alasimah', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3834, 'Soqatra', 246)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3835, 'Acoua', 247)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3836, 'Bandraboua', 247)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3837, 'Bandrele', 247)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3838, 'Bouéni', 247)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3839, 'Chiconi', 247)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3840, 'Chirongui', 247)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3841, 'Dembeni', 247)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3842, 'Dzaoudzi', 247)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3843, 'Kani-Kéli', 247)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3844, 'Koungou', 247)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3845, 'Mamoudzou', 247)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3846, 'Mtsamboro', 247)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3847, 'M''Tsangamouji', 247)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3848, 'Ouangani', 247)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3849, 'Pamandzi', 247)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3850, 'Sada', 247)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3851, 'Tsingoni', 247)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3852, 'Orange Free State', 248)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3853, 'KwaZulu-Natal', 248)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3854, 'Eastern Cape', 248)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3855, 'Gauteng', 248)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3856, 'Mpumalanga', 248)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3857, 'Northern Cape', 248)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3858, 'Limpopo', 248)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3859, 'North-West', 248)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3860, 'Western Cape', 248)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3861, 'Western', 249)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3862, 'Southern', 249)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3863, 'North-Western', 249)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3864, 'Northern', 249)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3865, 'Lusaka', 249)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3866, 'Luapula', 249)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3867, 'Eastern', 249)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3868, 'Copperbelt', 249)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3869, 'Central', 249)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3870, 'Muchinga', 249)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3871, 'Midlands', 250)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3872, 'Matabeleland South', 250)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3873, 'Matabeleland North', 250)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3874, 'Masvingo', 250)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3875, 'Mashonaland West', 250)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3876, 'Mashonaland East', 250)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3877, 'Mashonaland Central', 250)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3878, 'Manicaland', 250)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3879, 'Bulawayo', 250)`,
    );
    await queryRunner.query(
      `INSERT INTO regions (id, name, "countryId") VALUES (3880, 'Harare', 250)`,
    );

    await queryRunner.query(`ALTER SEQUENCE regions_id_seq RESTART WITH 3881`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM regions');
  }
}
