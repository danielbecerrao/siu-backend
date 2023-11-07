import type { MigrationInterface, QueryRunner } from 'typeorm';

export class Countries1695869891506 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `insert into countries (id, name) values (1, 'Andorra')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (2, 'United Arab Emirates')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (3, 'Afghanistan')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (4, 'Antigua and Barbuda')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (5, 'Anguilla')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (6, 'Albania')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (7, 'Armenia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (8, 'Angola')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (9, 'Antarctica')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (10, 'Argentina')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (11, 'American Samoa')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (12, 'Austria')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (13, 'Australia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (14, 'Aruba')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (15, 'Aland Islands')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (16, 'Azerbaijan')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (17, 'Bosnia and Herzegovina')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (18, 'Barbados')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (19, 'Bangladesh')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (20, 'Belgium')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (21, 'Burkina Faso')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (22, 'Bulgaria')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (23, 'Bahrain')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (24, 'Burundi')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (25, 'Benin')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (26, 'Saint Barthelemy')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (27, 'Bermuda')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (28, 'Brunei')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (29, 'Bolivia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (30, 'Bonaire, Saint Eustatius and Saba')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (31, 'Brazil')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (32, 'Bahamas')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (33, 'Bhutan')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (34, 'Bouvet Island')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (35, 'Botswana')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (36, 'Belarus')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (37, 'Belize')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (38, 'Canada')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (39, 'Cocos Islands')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (40, 'Democratic Republic of the Congo')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (41, 'Central African Republic')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (42, 'Republic of the Congo')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (43, 'Switzerland')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (44, 'Ivory Coast')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (45, 'Cook Islands')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (46, 'Chile')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (47, 'Cameroon')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (48, 'China')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (49, 'Colombia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (50, 'Costa Rica')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (51, 'Cuba')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (52, 'Cabo Verde')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (53, 'Curacao')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (54, 'Christmas Island')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (55, 'Cyprus')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (56, 'Czechia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (57, 'Germany')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (58, 'Djibouti')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (59, 'Denmark')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (60, 'Dominica')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (61, 'Dominican Republic')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (62, 'Algeria')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (63, 'Ecuador')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (64, 'Estonia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (65, 'Egypt')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (66, 'Western Sahara')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (67, 'Eritrea')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (68, 'Spain')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (69, 'Ethiopia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (70, 'Finland')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (71, 'Fiji')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (72, 'Falkland Islands')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (73, 'Micronesia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (74, 'Faroe Islands')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (75, 'France')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (76, 'Gabon')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (77, 'United Kingdom')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (78, 'Grenada')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (79, 'Georgia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (80, 'French Guiana')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (81, 'Guernsey')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (82, 'Ghana')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (83, 'Gibraltar')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (84, 'Greenland')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (85, 'Gambia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (86, 'Guinea')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (87, 'Guadeloupe')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (88, 'Equatorial Guinea')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (89, 'Greece')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (90, 'South Georgia and the South Sandwich Islands')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (91, 'Guatemala')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (92, 'Guam')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (93, 'Guinea-Bissau')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (94, 'Guyana')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (95, 'Hong Kong')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (96, 'Heard Island and McDonald Islands')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (97, 'Honduras')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (98, 'Croatia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (99, 'Haiti')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (100, 'Hungary')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (101, 'Indonesia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (102, 'Ireland')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (103, 'Israel')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (104, 'Isle of Man')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (105, 'India')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (106, 'British Indian Ocean Territory')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (107, 'Iraq')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (108, 'Iran')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (109, 'Iceland')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (110, 'Italy')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (111, 'Jersey')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (112, 'Jamaica')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (113, 'Jordan')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (114, 'Japan')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (115, 'Kenya')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (116, 'Kyrgyzstan')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (117, 'Cambodia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (118, 'Kiribati')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (119, 'Comoros')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (120, 'Saint Kitts and Nevis')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (121, 'North Korea')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (122, 'South Korea')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (123, 'Kosovo')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (124, 'Kuwait')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (125, 'Cayman Islands')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (126, 'Kazakhstan')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (127, 'Laos')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (128, 'Lebanon')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (129, 'Saint Lucia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (130, 'Liechtenstein')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (131, 'Sri Lanka')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (132, 'Liberia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (133, 'Lesotho')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (134, 'Lithuania')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (135, 'Luxembourg')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (136, 'Latvia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (137, 'Libya')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (138, 'Morocco')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (139, 'Monaco')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (140, 'Moldova')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (141, 'Montenegro')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (142, 'Saint Martin')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (143, 'Madagascar')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (144, 'Marshall Islands')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (145, 'North Macedonia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (146, 'Mali')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (147, 'Myanmar')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (148, 'Mongolia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (149, 'Macao')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (150, 'Northern Mariana Islands')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (151, 'Martinique')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (152, 'Mauritania')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (153, 'Montserrat')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (154, 'Malta')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (155, 'Mauritius')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (156, 'Maldives')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (157, 'Malawi')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (158, 'Mexico')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (159, 'Malaysia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (160, 'Mozambique')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (161, 'Namibia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (162, 'New Caledonia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (163, 'Niger')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (164, 'Norfolk Island')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (165, 'Nigeria')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (166, 'Nicaragua')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (167, 'Netherlands')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (168, 'Norway')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (169, 'Nepal')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (170, 'Nauru')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (171, 'Niue')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (172, 'New Zealand')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (173, 'Oman')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (174, 'Panama')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (175, 'Peru')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (176, 'French Polynesia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (177, 'Papua New Guinea')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (178, 'Philippines')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (179, 'Pakistan')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (180, 'Poland')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (181, 'Saint Pierre and Miquelon')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (182, 'Pitcairn')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (183, 'Puerto Rico')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (184, 'Palestinian Territory')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (185, 'Portugal')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (186, 'Palau')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (187, 'Paraguay')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (188, 'Qatar')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (189, 'Reunion')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (190, 'Romania')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (191, 'Serbia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (192, 'Russia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (193, 'Rwanda')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (194, 'Saudi Arabia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (195, 'Solomon Islands')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (196, 'Seychelles')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (197, 'Sudan')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (198, 'South Sudan')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (199, 'Sweden')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (200, 'Singapore')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (201, 'Saint Helena')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (202, 'Slovenia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (203, 'Svalbard and Jan Mayen')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (204, 'Slovakia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (205, 'Sierra Leone')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (206, 'San Marino')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (207, 'Senegal')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (208, 'Somalia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (209, 'Suriname')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (210, 'Sao Tome and Principe')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (211, 'El Salvador')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (212, 'Sint Maarten')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (213, 'Syria')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (214, 'Eswatini')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (215, 'Turks and Caicos Islands')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (216, 'Chad')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (217, 'French Southern Territories')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (218, 'Togo')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (219, 'Thailand')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (220, 'Tajikistan')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (221, 'Tokelau')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (222, 'Timor Leste')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (223, 'Turkmenistan')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (224, 'Tunisia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (225, 'Tonga')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (226, 'Turkey')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (227, 'Trinidad and Tobago')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (228, 'Tuvalu')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (229, 'Taiwan')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (230, 'Tanzania')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (231, 'Ukraine')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (232, 'Uganda')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (233, 'United States Minor Outlying Islands')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (234, 'United States')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (235, 'Uruguay')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (236, 'Uzbekistan')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (237, 'Vatican')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (238, 'Saint Vincent and the Grenadines')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (239, 'Venezuela')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (240, 'British Virgin Islands')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (241, 'U.S. Virgin Islands')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (242, 'Vietnam')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (243, 'Vanuatu')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (244, 'Wallis and Futuna')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (245, 'Samoa')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (246, 'Yemen')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (247, 'Mayotte')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (248, 'South Africa')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (249, 'Zambia')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (250, 'Zimbabwe')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (251, 'Serbia and Montenegro')`,
    );
    await queryRunner.query(
      `insert into countries (id, name) values (252, 'Netherlands Antilles')`,
    );

    await queryRunner.query(`ALTER SEQUENCE countries_id_seq RESTART WITH 253`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM countries');
  }
}
