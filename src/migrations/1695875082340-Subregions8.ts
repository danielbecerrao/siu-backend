import type { MigrationInterface, QueryRunner } from 'typeorm';

export class Subregions81695875082340 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35001, 'Kazachinskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35002, 'Katayskiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35003, 'Kaslinskiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35004, 'Kartalinskiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35005, 'Kargatskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35006, 'Kargapol’skiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35007, 'Karatuzskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35008, 'Karasukskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35009, 'Kanskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35010, 'Kamenskiy Rayon', 192, 2817)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35011, 'Kamenskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35012, 'Kalmanskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35013, 'Kalachinskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35014, 'Izhmorskiy Rayon', 192, 2824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35015, 'Iskitimskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35016, 'Isil’kul’skiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35017, 'Ishimskiy Rayon', 192, 2814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35018, 'Isetskiy Rayon', 192, 2814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35019, 'Irbeyskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35020, 'Ilanskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35021, 'Idrinskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35022, 'Gor’kovskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35023, 'Golyshmanovskiy Rayon', 192, 2814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35024, 'Evenkiyskiy District', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35025, 'Dzerzhinskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35026, 'Dovolenskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35027, 'Dalmatovskiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35028, 'Chunskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35029, 'Chulymskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35030, 'Choyskiy Rayon', 192, 2825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35031, 'Chistoozernyy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35032, 'Chesmenskiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35033, 'Cherlakskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35034, 'Cherepanovskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35035, 'Chebulinskiy Rayon', 192, 2824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35036, 'Chebarkul’skiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35037, 'Chastoozerskiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35038, 'Charyshskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35039, 'Chanovskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35040, 'Chainskiy Rayon', 192, 2816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35041, 'Bystroistokskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35042, 'Burlinskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35043, 'Bredinskiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35044, 'Bol’sheuluyskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35045, 'Bol’sheukovskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35046, 'Bol’sherechenskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35047, 'Bol’shemurtinskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35048, 'Bolotninskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35049, 'Boguchanskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35050, 'Bogradskiy Rayon', 192, 2823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35051, 'Bogotol’skiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35052, 'Bogdanovichskiy Rayon', 192, 2817)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35053, 'Blagoveshchenskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35054, 'Biyskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35055, 'Birilyusskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35056, 'Beyskiy Rayon', 192, 2823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35057, 'Berdyuzhskiy Rayon', 192, 2814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35058, 'Belozërskiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35059, 'Beloyarskiy Rayon', 192, 2817)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35060, 'Belovskiy Rayon', 192, 2824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35061, 'Bayevskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35062, 'Barabinskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35063, 'Balakhtinskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35064, 'Bakcharskiy Rayon', 192, 2816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35065, 'Baganskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35066, 'Askizskiy Rayon', 192, 2823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35067, 'Asinovkiy Rayon', 192, 2816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35068, 'Armizonskiy Rayon', 192, 2814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35069, 'Argayashskiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35070, 'Altayskiy Rayon', 192, 2823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35071, 'Altayskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35072, 'Al’menevskiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35073, 'Aleyskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35074, 'Achinskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35075, 'Abanskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35076, 'Chemal’skiy Rayon', 192, 2825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35077, 'Natsional’nyy Rayon Nemetskiy', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35078, 'Suyetskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35079, 'Shelabolikhinskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35080, 'Barnaul Urban Okrug', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35081, 'Gorod Chelyabinsk', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35082, 'Gorod Verkhniy Ufaley', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35083, 'Yemanzhelinskiy rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35084, 'Gorod Karabash', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35085, 'Gorod Kopeysk', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35086, 'Korkinskij rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35087, 'Gorod Kyshtym', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35088, 'Gorod Miass', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35089, 'Plastovskij rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35090, 'Gorod Yuzhnoural’sk', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35091, 'Polevskoy Gorod', 192, 2817)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35092, 'Chernogorsk Gorod', 192, 2823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35093, 'Abakan Gorod', 192, 2823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35094, 'Sayanogorsk Gorod', 192, 2823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35095, 'Ziminskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35096, 'Zhigansky District', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35097, 'Zhigalovskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35098, 'Zeyskiy Rayon', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35099, 'Zavitinskiy Rayon', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35100, 'Zalarinskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35101, 'Zakamenskiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35102, 'Zaigrayevskiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35103, 'Zabaykal’skiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35104, 'Yeravninskiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35105, 'Yakovlevskiy Rayon', 192, 2829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35106, 'Vyazemskiy Rayon', 192, 2830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35107, 'Verkhoyansky District', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35108, 'Verkhnevilyuysky District', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35109, 'Verkhnebureinskiy Rayon', 192, 2830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35110, 'Ust’-Yanskiy Rayon', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35111, 'Ust’-Udinskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35112, 'Ust’-Kutskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35113, 'Ust’-Ilimskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35114, 'Ust-Aldansky District', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35115, 'Ussuriyskiy Rayon', 192, 2829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35116, 'Usol’skiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35117, 'Uletovskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35118, 'Ul’chskiy Rayon', 192, 2830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35119, 'Tyndinskiy Rayon', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35120, 'Tunkinskiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35121, 'Tungokochenskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35122, 'Tungiro-Olëkminskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35123, 'Tulunskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35124, 'Tuguro-Chumikanskiy Rayon', 192, 2830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35125, 'Tomponskiy District', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35126, 'Terneyskiy Rayon', 192, 2829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35127, 'Tambovskiy Rayon', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35128, 'Svobodnenskiy Rayon', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35129, 'Suntarskiy District', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35130, 'Sretenskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35131, 'Spasskiy Rayon', 192, 2829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35132, 'Smidovichskiy Rayon', 192, 2832)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35133, 'Slyudyanskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35134, 'Skovorodinskiy Rayon', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35135, 'Shkotovskiy Rayon', 192, 2829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35136, 'Shimanovskiy Rayon', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35137, 'Shilkinskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35138, 'Shelopuginskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35139, 'Severo-Baykal’skiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35140, 'Seryshevskiy Rayon', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35141, 'Selenginskiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35142, 'Selemdzhinskiy Rayon', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35143, 'Romnenskiy Rayon', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35144, 'Pribaykal’skiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35145, 'Priargunskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35146, 'Petrovsk-Zabaykal’skiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35147, 'Osinskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35148, 'Ononskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35149, 'Olovyanninskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35150, 'Ol’khonskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35151, 'Olenyoksky District', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35152, 'Olyokminsky District', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35153, 'Oktyabr’skiy Rayon', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35154, 'Oktyabr’skiy Rayon', 192, 2832)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35155, 'Okinskiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35156, 'Obluchenskiy Rayon', 192, 2832)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35157, 'Nukutskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35158, 'Nizhneilimskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35159, 'Nerchinsko-Zavodskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35160, 'Nerchinskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35161, 'Namskiy Rayon', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35162, 'Nadezhdinskiy Rayon', 192, 2829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35163, 'Mukhorshibirskiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35164, 'Mogochinskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35165, 'Mirninskiy Rayon', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35166, 'Mikhaylovskiy Rayon', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35167, 'Mikhaylovskiy Rayon', 192, 2829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35168, 'Megino-Kangalasskiy Rayon', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35169, 'Mazanovskiy Rayon', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35170, 'Mamsko-Chuyskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35171, 'Magdagachinskiy Rayon', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35172, 'Leninskiy Rayon', 192, 2832)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35173, 'Nyurbinsky District', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35174, 'Lazovskiy Rayon', 192, 2829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35175, 'Kyrinskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35176, 'Kyakhtinskiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35177, 'Kuytunskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35178, 'Kurumkanskiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35179, 'Krasnokamenskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35180, 'Konstantinovskiy Rayon', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35181, 'Kobyayskiy Rayon', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35182, 'Kizhinginskiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35183, 'Kirovskiy Rayon', 192, 2829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35184, 'Kirenskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35185, 'Khorol’skiy Rayon', 192, 2829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35186, 'Khorinskiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35187, 'Khilokskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35188, 'Khatangskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35189, 'Khasanskiy Rayon', 192, 2829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35190, 'Khabarovskiy Rayon', 192, 2830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35191, 'Kezhemskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35192, 'Kazachinsko-Lenskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35193, 'Katangskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35194, 'Karymskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35195, 'Kalganskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35196, 'Kalarskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35197, 'Kachugskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35198, 'Kabanskiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35199, 'Ivanovskiy Rayon', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35200, 'Irkutskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35201, 'Gornyy Rayon', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35202, 'Gazimuro-Zavodskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35203, 'Ekhirit-Bulagatskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35204, 'Dzhidinskiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35205, 'Churapchinskiy Rayon', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35206, 'Chitinskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35207, 'Chernyshevskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35208, 'Chernigovskiy Rayon', 192, 2829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35209, 'Cheremkhovskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35210, 'Bureyskiy Rayon', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35211, 'Bulunskiy Rayon', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35212, 'Bratskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35213, 'Borzinskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35214, 'Bokhanskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35215, 'Bodaybinskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35216, 'Blagoveshchenskiy Rayon', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35217, 'Birobidzhanskiy Rayon', 192, 2832)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35218, 'Bikinskiy Rayon', 192, 2830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35219, 'Bichurskiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35220, 'Belogorskiy Rayon', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35221, 'Bayandayevskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35222, 'Bauntovskiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35223, 'Barguzinskiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35224, 'Baleyskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35225, 'Arkharinskiy Rayon', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35226, 'Anuchinskiy Rayon', 192, 2829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35227, 'Anabarskiy Rayon', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35228, 'Amurskiy Rayon', 192, 2830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35229, 'Aleksandrovo-Zavodskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35230, 'Aldansky District', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35231, 'Alarskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35232, 'Akshinskiy Rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35233, 'Aginskiy Buryatskiy Okrug', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35234, 'Ivolginskiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35235, 'Tarbagatayskiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35236, 'Muyskiy Rayon', 192, 2834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35237, 'Gorod Blagoveshchensk', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35238, 'Gorod Raychikhinsk', 192, 2833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35239, 'Angarskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35240, 'Balaganskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35241, 'Shelekhovskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35242, 'Yuzhno-Kurilsky District', 192, 2835)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35243, 'Yelizovskiy Rayon', 192, 2837)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35244, 'Yagodninskiy Rayon', 192, 2836)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35245, 'Verkhnekolymsky District', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35246, 'Vaninskiy Rayon', 192, 2830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35247, 'Ust’-Kamchatskiy Rayon', 192, 2837)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35248, 'Ust’-Bol’sheretskiy Rayon', 192, 2837)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35249, 'Uglegorskiy Rayon', 192, 2835)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35250, 'Tomarinskiy Rayon', 192, 2835)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35251, 'Tigil’skiy Rayon', 192, 2837)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35252, 'Ten’kinskiy Rayon', 192, 2836)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35253, 'Susumanskiy Rayon', 192, 2836)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35254, 'Srednekolymsky District', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35255, 'Srednekanskiy Rayon', 192, 2836)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35256, 'Sobolevskiy Rayon', 192, 2837)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35257, 'Smirnykhovskiy Rayon', 192, 2835)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35258, 'Severo-Evenskiy Rayon', 192, 2836)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35259, 'Poronayskiy Rayon', 192, 2835)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35260, 'Penzhinskiy Rayon', 192, 2837)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35261, 'Oymyakonskiy District', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35262, 'Omsukchanskiy Rayon', 192, 2836)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35263, 'Olyutorskiy Rayon', 192, 2837)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35264, 'Ol’skiy Rayon', 192, 2836)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35265, 'Okhinskiy Rayon', 192, 2835)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35266, 'Nevel’skiy Rayon', 192, 2835)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35267, 'Momsky District', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35268, 'Mil’kovskiy Rayon', 192, 2837)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35269, 'Kurilsky District', 192, 2835)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35270, 'Korsakovskiy Rayon', 192, 2835)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35271, 'Khasynskiy Rayon', 192, 2836)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35272, 'Karaginsky District', 192, 2837)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35273, 'Chaunskiy Rayon', 192, 2838)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35274, 'Bystrinskiy Rayon', 192, 2837)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35275, 'Bilibinskiy Rayon', 192, 2838)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35276, 'Anivskiy Rayon', 192, 2835)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35277, 'Anadyrskiy Rayon', 192, 2838)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35278, 'Allaikhovskiy Rayon', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35279, 'Aleutskiy Rayon', 192, 2837)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35280, 'Aleksandrovsk-Sakhalinskiy Rayon', 192, 2835)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35281, 'Abyysky District', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35282, 'Gorod Magadan', 192, 2836)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35283, 'Gorod Baltiysk', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35284, 'Providenskiy Rayon', 192, 2838)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35285, 'Iul’tinskiy Rayon', 192, 2838)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35286, 'Chukotskiy Rayon', 192, 2838)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35287, 'Malopurginskiy Rayon', 192, 2762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35288, 'Priozersky', 192, 2787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35289, 'Sochi City', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35290, 'Dzhayrakhskiy Rayon', 192, 2801)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35291, 'Zelenogradsky Administrative Okrug', 192, 2782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35292, 'Eastern Administrative Okrug', 192, 2782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35293, 'Novomoskovsky Administrative Okrug', 192, 2782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35294, 'Troitsky Administrative Okrug', 192, 2782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35295, 'Admiralteysky Rayon', 192, 2788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35296, 'Kolpinskiy Rayon', 192, 2788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35297, 'Kronshtadtskiy Rayon', 192, 2788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35298, 'Kurortnyy Rayon', 192, 2788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35299, 'Petrodvortsovyy Rayon', 192, 2788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35300, 'Pushkinskiy Rayon', 192, 2788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35301, 'Tsentralniy Rayon', 192, 2788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35302, 'Korolyov', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35303, 'Yakutsk', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35304, 'Eveno-Bytantaysky National District', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35305, 'Vilyuysky District', 192, 2828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35306, 'Sosnovoborsky Urban Okrug', 192, 2787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35307, 'Baltachevskiy rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35308, 'Krasnochikoyskiy rayon', 192, 2839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35309, 'Leskenskiy rayon', 192, 2799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35310, 'Elista Urban Okrug', 192, 2797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35311, 'Iznoskovskiy rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35312, 'Maykop Republican Urban Okrug', 192, 2811)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35313, 'Adygeysk Republican Urban Okrug', 192, 2811)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35314, 'Gorno-Altaysk Urban Okrug', 192, 2825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35315, 'Guryevskiy rayon', 192, 2824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35316, 'Nogayskiy rayon', 192, 2795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35317, 'Berezovskiy rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35318, 'Kadoshkinskiy rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35319, 'Kandalakshskiy rayon', 192, 2781)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35320, 'Kurchaloyevskiy rayon', 192, 2805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35321, 'Grozny Urban Okrug', 192, 2805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35322, 'Bratsk Urban Okrug', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35323, 'Krasnosulinskiy Rayon', 192, 2772)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35324, 'Rayon Aksayskiy', 192, 2772)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35325, 'Arzamas Urban Okrug', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35326, 'Vyksa Urban Okrug', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35327, 'Dzerzhinsk Urban Okrug', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35328, 'Kulebaksky Urban Okrug', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35329, 'Navashinsky Urban Okrug', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35330, 'Pervomaysky Urban Okrug', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35331, 'Sarov Urban Okrug', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35332, 'Perevozsky Urban Okrug', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35333, 'Chkalovsky Urban Okrug', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35334, 'Shakhunya Urban Okrug', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35335, 'Sokolsky Urban Okrug', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35336, 'Bor Urban Okrug', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35337, 'Nizhny Novgorod Urban Okrug', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35338, 'Mamonovskiy Gorodskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35339, 'Yantarnyy Gorodskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35340, 'Ladushkinskiy Gorodskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35341, 'Gorodskoy Okrug Fokino', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35342, 'Gorodskoy Okrug Sel''tso', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35343, 'Gorodskoy Okrug Klintsy', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35344, 'Gorodskoy Okrug Livny', 192, 2776)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35345, 'Gorodskoy Okrug Mtsensk', 192, 2776)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35346, 'Gorodskoy Okrug Orël', 192, 2776)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35347, 'Korsakovskiy Rayon', 192, 2776)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35348, 'Krasnozorenskiy Rayon', 192, 2776)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35349, 'Znamenskiy Rayon', 192, 2776)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35350, 'Soskovskiy Rayon', 192, 2776)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35351, 'Trosnyanskiy Rayon', 192, 2776)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35352, 'Gorodskoy Okrug Torzhok', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35353, 'Gorodskoy Okrug Tver''', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35354, 'Gorodskoy Okrug Donskoy', 192, 2764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35355, 'Gorodskoy Okrug Novomoskovsk', 192, 2764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35356, 'Gorodskoy Okrug Novogurovskiy', 192, 2764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35357, 'Gorodskoy Okrug Tula', 192, 2764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35358, 'Gorodskoy Okrug Slavniy', 192, 2764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35359, 'Gorodskoy Okrug Yefremov', 192, 2764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35360, 'Gorodskoy Okrug Aleksin', 192, 2764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35361, 'Gorodskoy Okrug Gorod Kaluga', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35362, 'Gorodskoy Okrug Obninsk', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35363, 'Gorodskoy Okrug Ryazan''', 192, 2771)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35364, 'Gorodskoy Okrug Kasimov', 192, 2771)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35365, 'Gorodskoy Okrug Sasovo', 192, 2771)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35366, 'Gorodskoy Okrug Skopin', 192, 2771)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35367, 'Plyusskiy Rayon', 192, 2773)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35368, 'Gorodskoy Okrug Pskov', 192, 2773)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35369, 'Gorodskoy Okrug Velikiye Luki', 192, 2773)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35370, 'Gorodskoy Okrug Kizilyurt', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35371, 'Gorodskoy Okrug Khasavyurt', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35372, 'Gorodskoy Okrug Yuzhno-Sukhokumsk', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35373, 'Gorodskoy Okrug Kaspiysk', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35374, 'Losino-Petrovskiy Gorodskoy Okrug', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35375, 'Gorodskoy Okrug Fryazino', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35376, 'Gorodskoy Okrug Chernogolovka', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35377, 'Gorodskoy Okrug Elektrostal''', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35378, 'Gorodskoy Okrug Dolgoprudnyy', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35379, 'Gorodskoy Okrug Voskhod', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35380, 'Gorodskoy Okrug Zvëzdnyy Gorok', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35381, 'Gorodskoy Okrug Molodëzhnyy', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35382, 'Gorodskoy Okrug Dzerzhinskiy', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35383, 'Gorodskoy Okrug Dubna', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35384, 'Gorodskoy Okrug Zhukovskiy', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35385, 'Gorodskoy Okrug Korolëv', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35386, 'Gorodskoy Okrug Kotel''niki', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35387, 'Gorodskoy Okrug Lytkarino', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35388, 'Gorodskoy Okrug Reutov', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35389, 'Gorodskoy Okrug Vlasikha', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35390, 'Gorodskoy Okrug Krasnoznamensk', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35391, 'Gorodskoy Okrug Bronnitsy', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35392, 'Gorodskoy Okrug Lobnya', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35393, 'Gorodskoy Okrug Shchigry', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35394, 'Gorodskoy Okrug Zheleznogorsk', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35395, 'Gorodskoy Okrug L''gov', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35396, 'Gorodskoy Okrug Kurchatov', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35397, 'Gorodskoy Okrug Gus''-Khrustal''nyy', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35398, 'Gorodskoy Okrug Murom', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35399, 'Gorodskoy Okrug Vladimir', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35400, 'Gorodskoy Okrug Kovrov', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35401, 'ZATO Raduzhnyy', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35402, 'Gorodskoy Okrug Borovichi', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35403, 'Gorodskoy Okrug Staraya Russa', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35404, 'Gorodskoy Okrug Velikiy Novgorod', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35405, 'Nyagatare District', 193, 2840)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35406, 'Gatsibo District', 193, 2840)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35407, 'Kayonza District', 193, 2840)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35408, 'Rwamagana District', 193, 2840)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35409, 'Bugesera District', 193, 2840)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35410, 'Ngoma District', 193, 2840)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35411, 'Kirehe District', 193, 2840)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35412, 'Gicumbi District', 193, 2842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35413, 'Rulindo District', 193, 2842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35414, 'Burera District', 193, 2842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35415, 'Musanze District', 193, 2842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35416, 'Gakenke District', 193, 2842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35417, 'Gasabo District', 193, 2841)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35418, 'Nyarugenge District', 193, 2841)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35419, 'Kicukiro District', 193, 2841)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35420, 'Nyabihu District', 193, 2843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35421, 'Ngororero District', 193, 2843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35422, 'Rubavu District', 193, 2843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35423, 'Rutsiro District', 193, 2843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35424, 'Karongi District', 193, 2843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35425, 'Nyamasheke District', 193, 2843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35426, 'Rusizi District', 193, 2843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35427, 'Muhanga District', 193, 2844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35428, 'Kamonyi District', 193, 2844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35429, 'Ruhango District', 193, 2844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35430, 'Nyanza District', 193, 2844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35431, 'Nyamagabe District', 193, 2844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35432, 'Huye District', 193, 2844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35433, 'Gisagara District', 193, 2844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35434, 'Nyaruguru District', 193, 2844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35435, 'Abhā', 194, 2850)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35436, 'Aḩad Rufaydah', 194, 2850)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35437, 'Al Majāridah', 194, 2850)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35438, 'An Nimas', 194, 2850)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35439, 'Sabt Al Alayah', 194, 2850)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35440, 'Bīshah', 194, 2850)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35441, 'Khamīs Mushayţ', 194, 2850)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35442, 'Muḩā’il', 194, 2850)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35443, 'Rijāl Alma‘', 194, 2850)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35444, 'Sarāt ‘Abīdah', 194, 2850)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35445, 'Tathlīth', 194, 2850)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35446, 'Z̧ahrān al Janūb', 194, 2850)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35447, 'Al ‘Aqīq', 194, 2857)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35448, 'Al Bāḩah', 194, 2857)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35449, 'Al Mandaq', 194, 2857)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35450, 'Al Mikhwāh', 194, 2857)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35451, 'Al Qurá', 194, 2857)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35452, 'Baljurashī', 194, 2857)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35453, 'Qilwah', 194, 2857)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35454, '‘Ar‘ar', 194, 2856)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35455, 'Rafha', 194, 2856)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35456, 'Ţurayf', 194, 2856)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35457, 'Al Qurayyāt', 194, 2855)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35458, 'Dawmat al Jandal', 194, 2855)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35459, 'Sakākā', 194, 2855)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35460, 'Al Ḩinākīyah', 194, 2854)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35461, 'Al Madīnah al Munawwarah', 194, 2854)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35462, 'Al Mahd', 194, 2854)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35463, 'Al ‘Ulā', 194, 2854)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35464, 'Badr', 194, 2854)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35465, 'Khaybar', 194, 2854)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35466, 'Yanbu‘ al Baḩr', 194, 2854)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35467, 'Al Asyāḩ', 194, 2853)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35468, 'Al Badā’i‘', 194, 2853)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35469, 'Al Bukayrīyah', 194, 2853)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35470, 'Al Midhnab', 194, 2853)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35471, 'An Nabhānīyah', 194, 2853)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35472, 'Ar Rass', 194, 2853)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35473, 'Ash Shimāsīyah', 194, 2853)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35474, 'Buraydah', 194, 2853)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35475, 'Riyāḑ al Khabrā’', 194, 2853)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35476, 'Governorate of Unaizah', 194, 2853)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35477, '‘Uyūn al Jiwā’', 194, 2853)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35478, 'Ad Dawādimī', 194, 2852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35479, 'Ad Dir‘īyah', 194, 2852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35480, '‘Afīf', 194, 2852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35481, 'Al Aflāj', 194, 2852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35482, 'Al Ghāţ', 194, 2852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35483, 'Al Ḩarīq', 194, 2852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35484, 'Al Kharj', 194, 2852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35485, 'Al Majma‘ah', 194, 2852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35486, 'Al Muzāḩimīyah', 194, 2852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35487, 'Al Quway‘īyah', 194, 2852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35488, 'Ar Riyāḑ', 194, 2852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35489, 'As Sulayyil', 194, 2852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35490, 'Az Zulfī', 194, 2852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35491, 'Ḑurumā', 194, 2852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35492, 'Ḩawţat Banī Tamīm', 194, 2852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35493, 'Ḩuraymilā’', 194, 2852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35494, 'Rumāḩ', 194, 2852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35495, 'Shaqrā’', 194, 2852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35496, 'Thādiq', 194, 2852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35497, 'Wādī ad Dawāsir', 194, 2852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35498, 'Ad Dammām', 194, 2851)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35499, 'Al Aḩsā’', 194, 2851)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35500, 'Al Jubayl', 194, 2851)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35501, 'Al Khafjī', 194, 2851)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35502, 'Al Khubar', 194, 2851)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35503, 'An Nu‘ayrīyah', 194, 2851)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35504, 'Al Qaţīf', 194, 2851)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35505, 'Buqayq', 194, 2851)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35506, 'Ḩafr al Bāţin', 194, 2851)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35507, 'Qaryah al ‘Ulyā', 194, 2851)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35508, 'Ra’s Tannūrah', 194, 2851)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35509, 'Al Ghazālah', 194, 2849)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35510, 'Ash Shinān', 194, 2849)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35511, 'Baq‘ā’', 194, 2849)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35512, 'Ḩā’il', 194, 2849)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35513, 'Abū ‘Arīsh', 194, 2848)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35514, 'Ad Dā’ir', 194, 2848)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35515, 'Ad Darb', 194, 2848)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35516, 'Aḩad al Musāriḩah', 194, 2848)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35517, 'Al ‘Āriḑah', 194, 2848)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35518, 'Al Ḩarth', 194, 2848)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35519, 'Al ‘Īdābī', 194, 2848)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35520, 'Ar Rayth', 194, 2848)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35521, 'Baysh', 194, 2848)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35522, 'Ḑamad', 194, 2848)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35523, 'Farasān', 194, 2848)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35524, 'Jāzān', 194, 2848)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35525, 'Şabyā’', 194, 2848)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35526, 'Şāmiţah', 194, 2848)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35527, 'Al Jumūm', 194, 2847)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35528, 'Al Kāmil', 194, 2847)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35529, 'Al Khurmah', 194, 2847)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35530, 'Al Līth', 194, 2847)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35531, 'Al Qunfudhah', 194, 2847)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35532, 'Aţ Ţā’if', 194, 2847)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35533, 'Jiddah', 194, 2847)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35534, 'Khulayş', 194, 2847)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35535, 'Makkah al Mukarramah', 194, 2847)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35536, 'Rābigh', 194, 2847)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35537, 'Ranyah', 194, 2847)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35538, 'Turubah', 194, 2847)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35539, 'Al Kharkhīr', 194, 2846)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35540, 'Badr al Janūb', 194, 2846)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35541, 'Ḩubūnā', 194, 2846)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35542, 'Khubāsh', 194, 2846)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35543, 'Najrān', 194, 2846)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35544, 'Sharūrah', 194, 2846)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35545, 'Thār', 194, 2846)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35546, 'Yadamah', 194, 2846)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35547, 'Al Wajh', 194, 2845)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35548, 'Ḑubā’', 194, 2845)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35549, 'Ḩaql', 194, 2845)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35550, 'Tabūk', 194, 2845)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35551, 'Taymā’', 194, 2845)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35552, 'Umluj', 194, 2845)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35553, 'Ghran', 194, 2847)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35554, 'Munda', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35555, 'Noro', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35556, 'Nggosi', 195, 2867)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35557, 'Waghina', 195, 2865)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35558, 'Mbumburu', 195, 2867)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35559, 'Rove - Lengakiki', 195, 2867)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35560, 'Cruz', 195, 2867)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35561, 'Katupika', 195, 2865)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35562, 'Vasiduki', 195, 2865)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35563, 'Kukum', 195, 2867)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35564, 'Naha', 195, 2867)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35565, 'Batava', 195, 2865)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35566, 'Tavula', 195, 2865)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35567, 'Susuka', 195, 2865)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35568, 'Senga', 195, 2865)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35569, 'Kirugela', 195, 2865)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35570, 'Outer Shortlands', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35571, 'Inner Shortlands', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35572, 'Simbo', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35573, 'Central Ranongga', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35574, 'South Ranongga', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35575, 'Vonunu', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35576, 'Bilua', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35577, 'North Kolombangara', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35578, 'Malango', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35579, 'Roviana Lagoon', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35580, 'South Rendova', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35581, 'North Rendova', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35582, 'Kolombaghea', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35583, 'Buini Tusu', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35584, 'Nono', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35585, 'Nggatokae', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35586, 'North Vangunu', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35587, 'Kokota', 195, 2860)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35588, 'Nipua-Nopoli', 195, 2863)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35589, 'Vavaea', 195, 2867)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35590, 'Vuhokesa', 195, 2867)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35591, 'East Te Nggano', 195, 2866)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35592, 'Tatamba', 195, 2860)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35593, 'Sigana', 195, 2860)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35594, 'Japuana', 195, 2860)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35595, 'Kolomola', 195, 2860)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35596, 'Kolotubi', 195, 2860)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35597, 'Susubona', 195, 2860)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35598, 'Samasodu', 195, 2860)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35599, 'Sandfly-Buenavista', 195, 2862)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35600, 'West Gela', 195, 2862)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35601, 'East Gela', 195, 2862)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35602, 'South West Gela', 195, 2862)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35603, 'South East Gela', 195, 2862)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35604, 'North East Gela', 195, 2862)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35605, 'North West Gela', 195, 2862)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35606, 'Mbanika', 195, 2862)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35607, 'Pavuvu', 195, 2862)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35608, 'Lovukol', 195, 2862)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35609, 'Tirotonga', 195, 2860)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35610, 'Lughu', 195, 2866)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35611, 'Kangava', 195, 2866)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35612, 'West Ghongau', 195, 2866)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35613, 'Tandai', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35614, 'Mataniko', 195, 2867)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35615, 'Kola''A', 195, 2867)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35616, 'Tangarare', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35617, 'Vura', 195, 2867)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35618, 'Paripao', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35619, 'Sulufou - Kwarande', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35620, 'Fenualoa', 195, 2863)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35621, 'East Ghaobata', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35622, 'Takwa', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35623, 'East Baegu', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35624, 'Fouenda', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35625, 'Sububenu- Burianias', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35626, 'Nafinua', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35627, 'Gulalafou', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35628, 'Waneagu - Taelanasin', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35629, 'Siesie', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35630, 'Kwaimela - Radefasu', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35631, 'Langalanga', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35632, 'Luaniua', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35633, 'Pelau', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35634, 'North Ulawa', 195, 2864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35635, 'South Ulawa', 195, 2864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35636, 'Ugi And Pio', 195, 2864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35637, 'Arosi South', 195, 2864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35638, 'Bauro West', 195, 2864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35639, 'Bauro Central', 195, 2864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35640, 'Panatina', 195, 2867)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35641, 'Star Harbour South', 195, 2864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35642, 'Rawo', 195, 2864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35643, 'Weather Coast', 195, 2864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35644, 'Star Harbour North', 195, 2864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35645, 'North East Santa Cruz', 195, 2863)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35646, 'Dovele', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35647, 'Iringgila', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35648, 'Gizo', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35649, 'South Kolombangara', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35650, 'Vonavona', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35651, 'Kusaghe', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35652, 'Nusa Roviana', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35653, 'Kia', 195, 2860)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35654, 'Havulei', 195, 2860)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35655, 'Matangi', 195, 2866)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35656, 'East Ghongau', 195, 2866)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35657, 'Mareho', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35658, 'Tai', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35659, 'Aiaisi', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35660, 'Areare', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35661, 'Raroisuu', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35662, 'Aba - Asimeuru', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35663, 'Asimae', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35664, 'Sikaiana', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35665, 'Santa Catalina', 195, 2864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35666, 'Haununu', 195, 2864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35667, 'Faumamanu - Kwai', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35668, 'Nanggu-Lord Howe', 195, 2863)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35669, 'Duff Islands', 195, 2863)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35670, 'Utupua', 195, 2863)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35671, 'Vanikoro', 195, 2863)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35672, 'West Ulawa', 195, 2864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35673, 'Graciosa Bay', 195, 2863)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35674, 'Nevenema', 195, 2863)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35675, 'Viviru', 195, 2865)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35676, 'Tetau Nangoto', 195, 2866)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35677, 'Babatana', 195, 2865)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35678, 'Sa''Aiho', 195, 2866)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35679, 'Tepakaza', 195, 2865)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35680, 'Polo', 195, 2865)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35681, 'Bangara', 195, 2865)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35682, 'Koviloko', 195, 2860)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35683, 'Kerepangara', 195, 2865)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35684, 'North Savo', 195, 2862)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35685, 'Aimela', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35686, 'North Ranongga', 195, 2858)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35687, 'Hovukoilo', 195, 2860)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35688, 'Vulolo', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35689, 'Buala', 195, 2860)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35690, 'Auki', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35691, 'Kmaga', 195, 2860)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35692, 'South Savo', 195, 2862)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35693, 'Nenumpo', 195, 2863)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35694, 'Luva Station', 195, 2863)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35695, 'Kaloka', 195, 2860)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35696, 'Polynesian Outer Islands', 195, 2863)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35697, 'Wainoni West', 195, 2864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35698, 'Vatukulau', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35699, 'Tulagi', 195, 2862)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35700, 'Birao', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35701, 'West Te Nggano', 195, 2866)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35702, 'Arosi West', 195, 2864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35703, 'Arosi North', 195, 2864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35704, 'Arosi East', 195, 2864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35705, 'Santa Ana', 195, 2864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35706, 'Bauro East', 195, 2864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35707, 'Manuopo', 195, 2863)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35708, 'Wainoni East', 195, 2864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35709, 'Nea-Noole', 195, 2863)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35710, 'Tikopia', 195, 2863)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35711, 'Mugihenua', 195, 2866)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35712, 'Saghalu', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35713, 'Savulei', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35714, 'Wanderer Bay', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35715, 'Valasi', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35716, 'Kolokarako', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35717, 'Duidui', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35718, 'Lipe-Temua', 195, 2863)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35719, 'Aola', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35720, 'Buma', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35721, 'Talise', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35722, 'Avuavu', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35723, 'Moli', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35724, 'Tetekanji', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35725, 'Longgu', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35726, 'East Tasimboko', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35727, 'West Ghaobata', 195, 2861)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35728, 'Fauabu', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35729, 'Foondo - Gwaiau', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35730, 'Kwarekwareo', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35731, 'Malu''U', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35732, 'Mandalua - Folotana', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35733, 'Matakwalao', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35734, 'Neo', 195, 2863)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35735, 'Weagu Silana Sina', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35736, 'West Baegu - Fatale', 195, 2859)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35737, 'Al Mudīrīyah ash Shamālīyah', 197, 2896)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35738, 'Omdurman', 197, 2897)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35739, 'Mudīrīyat Kurdufān ash Shamālīyah', 197, 2910)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35740, 'Karary', 197, 2897)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35741, 'Khartoum', 197, 2897)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35742, 'Mudīrīyat Kassalā', 197, 2907)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35743, 'Gedaref North Rural Council', 197, 2900)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35744, 'El Meilig Rural Council', 197, 2899)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35745, 'Mudīrīyat Dārfūr ash Shamālīyah', 197, 2909)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35746, 'Mudīrīyat Dārfūr al Janūbīyah', 197, 2905)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35747, 'Blue Nile Province', 197, 2911)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35748, 'Mudīrīyat al Jazīrah', 197, 2899)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35749, 'Mudīrīyat al Baḩr al Abyaḑ', 197, 2901)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35750, 'Ghebeish', 197, 2910)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35751, 'En Nuhud', 197, 2910)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35752, 'Khartoum North', 197, 2897)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35753, 'Shendi', 197, 2908)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35754, 'Ad Damer', 197, 2908)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35755, 'Atbara', 197, 2908)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35756, 'Sinkat', 197, 2898)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35757, 'Port Sudan', 197, 2898)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35758, 'Merawi', 197, 2896)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35759, 'Sheikan', 197, 2910)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35760, 'Um Rawaba', 197, 2910)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35761, 'Kosti', 197, 2901)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35762, 'Al Jabalian', 197, 2901)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35763, 'Sharg En Nile', 197, 2897)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35764, 'Al Fushqa', 197, 2900)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35765, 'Seteet', 197, 2900)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35766, 'Baw', 197, 2902)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35767, 'Kas District', 197, 2905)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35768, 'Nyala District', 197, 2905)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35769, 'Kutum District', 197, 2909)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35770, 'Um Al Gura', 197, 2899)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35771, 'Bara', 197, 2910)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35772, 'Singa Locality', 197, 2911)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35773, 'Sennar Locality', 197, 2911)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35774, 'East Sennar Locality', 197, 2911)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35775, 'Ed Dinder Locality', 197, 2911)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35776, 'Es Suki Locality', 197, 2911)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35777, 'Abu Hujar Locality', 197, 2911)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35778, 'El Dali Locality', 197, 2911)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35779, 'Umeå Kommun', 199, 2917)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35780, 'Skellefteå Kommun', 199, 2917)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35781, 'Robertsfors Kommun', 199, 2917)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35782, 'Piteå Kommun', 199, 2914)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35783, 'Pajala Kommun', 199, 2914)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35784, 'Övertorneå Kommun', 199, 2914)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35785, 'Överkalix Kommun', 199, 2914)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35786, 'Luleå kommun', 199, 2914)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35787, 'Kalix Kommun', 199, 2914)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35788, 'Haparanda Kommun', 199, 2914)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35789, 'Gällivare kommun', 199, 2914)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35790, 'Bodens Kommun', 199, 2914)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35791, 'Älvsbyns Kommun', 199, 2914)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35792, 'Ystads Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35793, 'Ydre Kommun', 199, 2922)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35794, 'Vingåkers Kommun', 199, 2921)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35795, 'Vindelns Kommun', 199, 2917)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35796, 'Vimmerby Kommun', 199, 2926)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35797, 'Vilhelmina Kommun', 199, 2917)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35798, 'Vetlanda kommun', 199, 2927)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35799, 'Vellinge Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35800, 'Växjö Kommun', 199, 2924)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35801, 'Vaxholms Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35802, 'Västerviks Kommun', 199, 2926)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35803, 'Västerås', 199, 2915)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35804, 'Värnamo Kommun', 199, 2927)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35805, 'Värmdö Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35806, 'Vårgårda Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35807, 'Varbergs Kommun', 199, 2929)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35808, 'Vara Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35809, 'Vansbro Kommun', 199, 2925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35810, 'Vännäs Kommun', 199, 2917)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35811, 'Vänersborgs Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35812, 'Vallentuna Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35813, 'Valdemarsviks Kommun', 199, 2922)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35814, 'Vaggeryds Kommun', 199, 2927)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35815, 'Vadstena Kommun', 199, 2922)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35816, 'Uppvidinge Kommun', 199, 2924)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35817, 'Uppsala Kommun', 199, 2919)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35818, 'Upplands Väsby kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35819, 'Upplands-Bro Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35820, 'Ulricehamns Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35821, 'Uddevalla Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35822, 'Tyresö Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35823, 'Trollhättan', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35824, 'Trelleborgs Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35825, 'Tranemo Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35826, 'Tranås Kommun', 199, 2927)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35827, 'Torsby Kommun', 199, 2918)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35828, 'Torsås Kommun', 199, 2926)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35829, 'Töreboda Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35830, 'Tomelilla Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35831, 'Tjörns Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35832, 'Tingsryds Kommun', 199, 2924)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35833, 'Timrå Kommun', 199, 2916)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35834, 'Tierps kommun', 199, 2919)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35835, 'Tidaholms kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35836, 'Tibro Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35837, 'Tanums Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35838, 'Täby Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35839, 'Svenljunga Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35840, 'Svedala Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35841, 'Svalövs Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35842, 'Surahammars Kommun', 199, 2915)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35843, 'Sunne Kommun', 199, 2918)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35844, 'Sundsvalls Kommun', 199, 2916)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35845, 'Sundbybergs Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35846, 'Strömsunds kommun', 199, 2928)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35847, 'Strömstads Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35848, 'Strängnäs Kommun', 199, 2921)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35849, 'Storumans kommun', 199, 2917)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35850, 'Storfors Kommun', 199, 2918)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35851, 'Stockholms Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35852, 'Stenungsunds Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35853, 'Staffanstorps Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35854, 'Sotenäs Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35855, 'Sorsele kommun', 199, 2917)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35856, 'Sölvesborgs kommun', 199, 2932)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35857, 'Solna Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35858, 'Sollentuna Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35859, 'Sollefteå Kommun', 199, 2916)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35860, 'Södertälje Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35861, 'Söderköpings Kommun', 199, 2922)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35862, 'Söderhamns Kommun', 199, 2931)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35863, 'Smedjebackens Kommun', 199, 2925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35864, 'Skurups Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35865, 'Skövde Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35866, 'Skinnskattebergs Kommun', 199, 2915)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35867, 'Skara Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35868, 'Sjöbo Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35869, 'Simrishamns kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35870, 'Sigtuna Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35871, 'Sävsjö Kommun', 199, 2927)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35872, 'Säters Kommun', 199, 2925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35873, 'Sandvikens Kommun', 199, 2931)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35874, 'Salems Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35875, 'Sala kommun', 199, 2915)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35876, 'Säffle Kommun', 199, 2918)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35877, 'Ronneby Kommun', 199, 2932)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35878, 'Rättviks Kommun', 199, 2925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35879, 'Ragunda Kommun', 199, 2928)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35880, 'Perstorps Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35881, 'Partille Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35882, 'Oxelösunds Kommun', 199, 2921)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35883, 'Ovanåkers Kommun', 199, 2931)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35884, 'Östra Göinge Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35885, 'Östhammars Kommun', 199, 2919)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35886, 'Östersunds Kommun', 199, 2928)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35887, 'Österåkers Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35888, 'Oskarshamns Kommun', 199, 2926)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35889, 'Osby kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35890, 'Orust', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35891, 'Orsa Kommun', 199, 2925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35892, 'Örnsköldsviks Kommun', 199, 2916)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35893, 'Örkelljunga Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35894, 'Örebro Kommun', 199, 2923)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35895, 'Olofströms Kommun', 199, 2932)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35896, 'Ödeshögs Kommun', 199, 2922)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35897, 'Öckerö Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35898, 'Ockelbo Kommun', 199, 2931)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35899, 'Nynäshamns kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35900, 'Nyköpings Kommun', 199, 2921)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35901, 'Nybro Kommun', 199, 2926)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35902, 'Norsjö Kommun', 199, 2917)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35903, 'Norrtälje Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35904, 'Norrköpings Kommun', 199, 2922)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35905, 'Nordmalings Kommun', 199, 2917)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35906, 'Nordanstigs kommun', 199, 2931)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35907, 'Norbergs Kommun', 199, 2915)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35908, 'Nora Kommun', 199, 2923)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35909, 'Nässjö Kommun', 199, 2927)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35910, 'Nacka Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35911, 'Munkfors Kommun', 199, 2918)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35912, 'Munkedals Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35913, 'Mullsjö kommun', 199, 2927)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35914, 'Motala Kommun', 199, 2922)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35915, 'Mörbylånga Kommun', 199, 2926)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35916, 'Mora Kommun', 199, 2925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35917, 'Mönsterås Kommun', 199, 2926)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35918, 'Mölndals kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35919, 'Mjölby Kommun', 199, 2922)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35920, 'Melleruds Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35921, 'Marks Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35922, 'Markaryds Kommun', 199, 2924)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35923, 'Mariestads Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35924, 'Malung-Sälens kommun', 199, 2925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35925, 'Malmö', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35926, 'Malå Kommun', 199, 2917)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35927, 'Lysekils Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35928, 'Lycksele kommun', 199, 2917)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35929, 'Lunds Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35930, 'Ludvika Kommun', 199, 2925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35931, 'Lomma Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35932, 'Ljusnarsbergs Kommun', 199, 2923)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35933, 'Ljusdals Kommun', 199, 2931)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35934, 'Ljungby Kommun', 199, 2924)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35935, 'Linköpings Kommun', 199, 2922)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35936, 'Lindesbergs Kommun', 199, 2923)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35937, 'Lilla Edets Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35938, 'Lidköpings Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35939, 'Lidingö', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35940, 'Lessebo Kommun', 199, 2924)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35941, 'Lerums Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35942, 'Leksands kommun', 199, 2925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35943, 'Laxå Kommun', 199, 2923)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35944, 'Landskrona', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35945, 'Laholms Kommun', 199, 2929)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35946, 'Kungsörs kommun', 199, 2915)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35947, 'Kungsbacka Kommun', 199, 2929)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35948, 'Kungälvs Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35949, 'Kumla Kommun', 199, 2923)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35950, 'Krokoms Kommun', 199, 2928)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35951, 'Kristinehamns Kommun', 199, 2918)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35952, 'Kristianstads kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35953, 'Kramfors Kommun', 199, 2916)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35954, 'Köpings Kommun', 199, 2915)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35955, 'Klippans Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35956, 'Kiruna Kommun', 199, 2914)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35957, 'Kinda Kommun', 199, 2922)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35958, 'Kils Kommun', 199, 2918)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35959, 'Kävlinge Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35960, 'Katrineholms Kommun', 199, 2921)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35961, 'Karlstads Kommun', 199, 2918)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35962, 'Karlskrona Kommun', 199, 2932)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35963, 'Karlskoga Kommun', 199, 2923)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35964, 'Karlshamns kommun', 199, 2932)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35965, 'Karlsborgs Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35966, 'Kalmar Kommun', 199, 2926)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35967, 'Jönköpings Kommun', 199, 2927)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35968, 'Jokkmokks Kommun', 199, 2914)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35969, 'Järfälla kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35970, 'Hylte Kommun', 199, 2929)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35971, 'Hultsfreds Kommun', 199, 2926)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35972, 'Hudiksvalls Kommun', 199, 2931)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35973, 'Huddinge Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35974, 'Hörby Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35975, 'Höörs Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35976, 'Högsby Kommun', 199, 2926)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35977, 'Höganäs Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35978, 'Hofors Kommun', 199, 2931)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35979, 'Hjo Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35980, 'Herrljunga Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35981, 'Helsingborg', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35982, 'Hedemora Kommun', 199, 2925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35983, 'Heby kommun', 199, 2919)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35984, 'Hässleholms Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35985, 'Härryda Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35986, 'Härnösands Kommun', 199, 2916)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35987, 'Härjedalens kommun', 199, 2928)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35988, 'Haninge Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35989, 'Hammarö Kommun', 199, 2918)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35990, 'Halmstads Kommun', 199, 2929)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35991, 'Hallstahammars Kommun', 199, 2915)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35992, 'Hallsbergs Kommun', 199, 2923)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35993, 'Hällefors Kommun', 199, 2923)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35994, 'Hagfors Kommun', 199, 2918)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35995, 'Håbo kommun', 199, 2919)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35996, 'Habo Kommun', 199, 2927)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35997, 'Gullspångs Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35998, 'Grums Kommun', 199, 2918)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35999, 'Grästorps Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36000, 'Gotland', 199, 2930)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36001, 'Götene Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36002, 'Göteborgs stad', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36003, 'Gnosjö Kommun', 199, 2927)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36004, 'Gislaveds Kommun', 199, 2927)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36005, 'Gävle Kommun', 199, 2931)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36006, 'Gagnefs Kommun', 199, 2925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36007, 'Forshaga Kommun', 199, 2918)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36008, 'Flens Kommun', 199, 2921)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36009, 'Finspångs Kommun', 199, 2922)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36010, 'Filipstads Kommun', 199, 2918)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36011, 'Färgelanda Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36012, 'Falu kommun', 199, 2925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36013, 'Falköpings Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36014, 'Falkenbergs Kommun', 199, 2929)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36015, 'Fagersta Kommun', 199, 2915)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36016, 'Essunga Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36017, 'Eslövs Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36018, 'Eskilstuna Kommun', 199, 2921)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36019, 'Enköpings Kommun', 199, 2919)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36020, 'Emmaboda Kommun', 199, 2926)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36021, 'Eksjö Kommun', 199, 2927)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36022, 'Ekerö Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36023, 'Eda kommun', 199, 2918)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36024, 'Dorotea Kommun', 199, 2917)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36025, 'Degerfors Kommun', 199, 2923)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36026, 'Danderyds Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36027, 'Dals-Ed Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36028, 'Burlövs Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36029, 'Bromölla Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36030, 'Bräcke Kommun', 199, 2928)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36031, 'Boxholms Kommun', 199, 2922)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36032, 'Botkyrka Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36033, 'Borlänge Kommun', 199, 2925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36034, 'Borgholms Kommun', 199, 2926)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36035, 'Borås', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36036, 'Bollnäs Kommun', 199, 2931)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36037, 'Bjuvs Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36038, 'Bjurholms Kommun', 199, 2917)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36039, 'Bergs Kommun', 199, 2928)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36040, 'Bengtsfors Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36041, 'Båstads Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36042, 'Avesta Kommun', 199, 2925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36043, 'Åtvidabergs Kommun', 199, 2922)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36044, 'Åstorps Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36045, 'Askersunds Kommun', 199, 2923)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36046, 'Åsele Kommun', 199, 2917)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36047, 'Arvika Kommun', 199, 2918)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36048, 'Arvidsjaurs Kommun', 199, 2914)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36049, 'Arjeplogs Kommun', 199, 2914)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36050, 'Årjängs Kommun', 199, 2918)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36051, 'Åre kommun', 199, 2928)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36052, 'Arboga Kommun', 199, 2915)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36053, 'Ängelholms Kommun', 199, 2933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36054, 'Ånge kommun', 199, 2916)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36055, 'Aneby Kommun', 199, 2927)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36056, 'Åmåls Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36057, 'Älvkarleby Kommun', 199, 2919)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36058, 'Alvesta Kommun', 199, 2924)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36059, 'Älvdalens kommun', 199, 2925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36060, 'Älmhults Kommun', 199, 2924)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36061, 'Alingsås Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36062, 'Ale Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36063, 'Gnesta Kommun', 199, 2921)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36064, 'Trosa Kommun', 199, 2921)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36065, 'Knivsta muncipality', 199, 2919)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36066, 'Bollebygds Kommun', 199, 2934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36067, 'Lekebergs Kommun', 199, 2923)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36068, 'Nykvarns Kommun', 199, 2920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36069, 'Opština Ljubljana-Vič-Rudnik', 202, 3000)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36070, 'Opština [historical] Ljubljana-Šiška', 202, 3022)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36071, 'Opština Ljubljana-Moste-Polje', 202, 3079)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36072, 'Opština Ljubljana-Center', 202, 3079)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36073, 'Opčina Ljubljana-Bežigrad', 202, 3079)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36074, 'Črnuče District', 202, 3088)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36075, 'Dravlje District', 202, 3079)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36076, 'Golovec District', 202, 3079)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36077, 'Jarše District', 202, 3079)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36078, 'Posavje District', 202, 3079)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36079, 'Rožnik District', 202, 3079)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36080, 'Sostro District', 202, 3079)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36081, 'Šentvid District', 202, 3079)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36082, 'Šmarna Gora District', 202, 3079)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36083, 'Trnovo District', 202, 3079)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36084, 'Vič District', 202, 3079)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36085, 'Jan Mayen', 203, 3150)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36086, 'Spitsbergen', 203, 3151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36087, 'Hopen', 203, 3151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36088, 'Bjørnøya', 203, 3151)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36089, 'Okres Vranov nad Topľou', 204, 3153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36090, 'Okres Trebišov', 204, 3152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36091, 'Okres Svidník', 204, 3153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36092, 'Okres Stará Ĺubovňa', 204, 3153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36093, 'Okres Spišská Nová Ves', 204, 3152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36094, 'Okres Rožňava', 204, 3152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36095, 'Okres Rimavská Sobota', 204, 3155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36096, 'Okres Prešov', 204, 3153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36097, 'Okres Poprad', 204, 3153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36098, 'Okres Michalovce', 204, 3152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36099, 'Okres Humenné', 204, 3153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36100, 'Okres Bardejov', 204, 3153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36101, 'Okres Zvolen', 204, 3155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36102, 'Okres Žilina', 204, 3154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36103, 'Okres Žiar nad Hronom', 204, 3155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36104, 'Okres Veľký Krtíš', 204, 3155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36105, 'Okres Trnava', 204, 3159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36106, 'Okres Trenčín', 204, 3158)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36107, 'Okres Topoľčany', 204, 3157)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36108, 'Okres Skalica', 204, 3159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36109, 'Okres Senica', 204, 3159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36110, 'Okres Prievidza', 204, 3158)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36111, 'Okres Považská Bystrica', 204, 3158)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36112, 'Okres Nové Zámky', 204, 3157)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36113, 'Okres Nové Mesto nad Váhom', 204, 3158)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36114, 'Okres Nitra', 204, 3157)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36115, 'Okres Myjava', 204, 3158)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36116, 'Okres Martin', 204, 3154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36117, 'Okres Lučenec', 204, 3155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36118, 'Okres Liptovský Mikuláš', 204, 3154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36119, 'Okres Levice', 204, 3157)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36120, 'Okres Komárno', 204, 3157)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36121, 'Okres Hlohovec', 204, 3159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36122, 'Okres Galanta', 204, 3159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36123, 'Okres Dunajská Streda', 204, 3159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36124, 'Okres Dolný Kubín', 204, 3154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36125, 'Okres Čadca', 204, 3154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36126, 'Okres Brezno', 204, 3155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36127, 'Okres Banská Bystrica', 204, 3155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36128, 'Okres Namestovo', 204, 3154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36129, 'Okres Banská Štiavnica', 204, 3155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36130, 'Okres Bánovce nad Bebravou', 204, 3158)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36131, 'Okres Bratislava I', 204, 3156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36132, 'Okres Bytča', 204, 3154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36133, 'Okres Detva', 204, 3155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36134, 'Okres Gelnica', 204, 3152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36135, 'Okres Ilava', 204, 3158)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36136, 'Okres Kežmarok', 204, 3153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36137, 'Okres Krupina', 204, 3155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36138, 'Okres Kysucké Nové Mesto', 204, 3154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36139, 'Okres Malacky', 204, 3156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36140, 'Okres Medzilaborce', 204, 3153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36141, 'Okres Partizánske', 204, 3158)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36142, 'Okres Pezinok', 204, 3156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36143, 'Okres Piešťany', 204, 3159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36144, 'Okres Poltár', 204, 3155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36145, 'Okres Púchov', 204, 3158)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36146, 'Okres Revúca', 204, 3155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36147, 'Okres Ružomberok', 204, 3154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36148, 'Okres Sabinov', 204, 3153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36149, 'Okres Senec', 204, 3156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36150, 'Okres Snina', 204, 3153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36151, 'Okres Sobrance', 204, 3152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36152, 'Okres Stropkov', 204, 3153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36153, 'Okres Šaľa', 204, 3157)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36154, 'Okres Turčianske Teplice', 204, 3154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36155, 'Okres Tvrdošín', 204, 3154)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36156, 'Okres Zlaté Moravce', 204, 3157)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36157, 'Okres Žarnovica', 204, 3155)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36158, 'Košice I', 204, 3152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36159, 'Košice II', 204, 3152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36160, 'Košice III', 204, 3152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36161, 'Košice IV', 204, 3152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36162, 'Okres Bratislava II', 204, 3156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36163, 'Okres Bratislava III', 204, 3156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36164, 'Okres Bratislava IV', 204, 3156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36165, 'Okres Bratislava V', 204, 3156)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36166, 'Okres Kosice-okolie', 204, 3152)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36167, 'Okres Levoča', 204, 3153)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36168, 'Tonkolili District', 205, 3162)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36169, 'Pujehun District', 205, 3161)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36170, 'Port Loko District', 205, 3164)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36171, 'Moyamba District', 205, 3161)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36172, 'Kono District', 205, 3163)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36173, 'Koinadugu District', 205, 3162)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36174, 'Kenema District', 205, 3163)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36175, 'Kambia District', 205, 3164)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36176, 'Kailahun District', 205, 3163)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36177, 'Bonthe District', 205, 3161)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36178, 'Bombali District', 205, 3162)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36179, 'Bo District', 205, 3161)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36180, 'Western Area Urban', 205, 3160)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36181, 'Western Area Rural', 205, 3160)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36182, 'Karene District', 205, 3164)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36183, 'Falaba District', 205, 3162)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36184, 'Ziguinchor', 207, 3174)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36185, 'Velingara Department', 207, 3180)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36186, 'Tivaouane', 207, 3175)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36187, 'Thiès', 207, 3175)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36188, 'Tambacounda Department', 207, 3176)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36189, 'Sédhiou', 207, 3187)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36190, 'Podor', 207, 3177)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36191, 'Oussouye', 207, 3174)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36192, 'Nioro du Rip', 207, 3181)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36193, 'Mbour', 207, 3175)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36194, 'Mbacké', 207, 3183)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36195, 'Louga Department', 207, 3179)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36196, 'Linguere Department', 207, 3179)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36197, 'Kédougou Department', 207, 3186)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36198, 'Kebemer Department', 207, 3179)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36199, 'Kaolack', 207, 3181)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36200, 'Kaffrine Department', 207, 3185)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36201, 'Gossas', 207, 3182)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36202, 'Foundiougne', 207, 3182)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36203, 'Diourbel', 207, 3183)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36204, 'Dagana Department', 207, 3177)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36205, 'Bignona', 207, 3174)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36206, 'Bambey', 207, 3183)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36207, 'Bakel', 207, 3176)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36208, 'Kolda Department', 207, 3180)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36209, 'Fatick Department', 207, 3182)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36210, 'Matam Department', 207, 3178)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36211, 'Dakar Department', 207, 3184)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36212, 'Pikine Department', 207, 3184)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36213, 'Rufisque Department', 207, 3184)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36214, 'Kanel Department', 207, 3178)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36215, 'Guédiawaye Department', 207, 3184)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36216, 'Goudomp Department', 207, 3187)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36217, 'Département de Ranérou Ferlo', 207, 3178)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36218, 'Département de Guinguinéo', 207, 3181)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36219, 'Birkelane', 207, 3185)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36220, 'Malem Hoddar', 207, 3185)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36221, 'Koungheul', 207, 3185)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36222, 'Koumpentoum', 207, 3176)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36223, 'Goudiry', 207, 3176)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36224, 'Département de Salémata', 207, 3186)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36225, 'Saraya', 207, 3186)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36226, 'Département de Médina Yoro Foulah', 207, 3180)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36227, 'Bounkiling', 207, 3187)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36228, 'Saint-Louis Department', 207, 3177)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36229, 'Degmada Badhaadhe', 208, 3195)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36230, 'El Wak District', 208, 3198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36231, 'Xarardheere', 208, 3194)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36232, 'Baki', 208, 3204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36233, 'Qansax Dheere', 208, 3200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36234, 'Borama District', 208, 3204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36235, 'Burtinle', 208, 3193)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36236, 'Baraawe', 208, 3190)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36237, 'Lughaya District', 208, 3204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36238, 'Eyl', 208, 3193)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36239, 'Banadir', 208, 3202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36240, 'Kurtunwaarey', 208, 3190)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36241, 'Zeila District', 208, 3204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36242, 'Garoowe', 208, 3193)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36243, 'Marka', 208, 3190)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36244, 'Cabudwaaq', 208, 3199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36245, 'Ceel Barde', 208, 3203)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36246, 'Laasqoray', 208, 3192)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36247, 'Qoryooley', 208, 3190)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36248, 'Rab Dhuure', 208, 3203)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36249, 'Cadaado', 208, 3194)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36250, 'Ceel Afweyn', 208, 3192)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36251, 'Sablaale', 208, 3190)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36252, 'Tayeeglow', 208, 3203)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36253, 'Wanla Weyn', 208, 3190)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36254, 'Ceerigaabo', 208, 3192)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36255, 'Waajid', 208, 3203)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36256, 'Bu''aale', 208, 3196)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36257, 'Caynabo', 208, 3205)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36258, 'Xudur', 208, 3203)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36259, 'Ceel Buur', 208, 3199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36260, 'Jilib', 208, 3196)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36261, 'Laas Caanood', 208, 3205)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36262, 'Bandarbeyla', 208, 3201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36263, 'Saakow', 208, 3196)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36264, 'Ceel Dheer', 208, 3199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36265, 'Taleh District', 208, 3205)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36266, 'Adan Yabaal', 208, 3191)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36267, 'Dhuusamarreeb', 208, 3199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36268, 'Balcad', 208, 3191)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36269, 'Xudun District', 208, 3205)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36270, 'Caluula', 208, 3201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36271, 'Cadale', 208, 3191)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36272, 'Baardheere', 208, 3196)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36273, 'Burao', 208, 3189)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36274, 'Iskushuban', 208, 3201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36275, 'Jowhar', 208, 3191)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36276, 'Buuhoodle', 208, 3189)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36277, 'Belet Xaawo', 208, 3198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36278, 'Gaalkacyo', 208, 3194)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36279, 'Qandala', 208, 3201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36280, 'Owdweyne', 208, 3189)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36281, 'Doolow', 208, 3198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36282, 'Sheikh', 208, 3189)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36283, 'Qardho', 208, 3201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36284, 'Galdogob', 208, 3194)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36285, 'Garbahaarey', 208, 3198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36286, 'Berbera', 208, 3188)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36287, 'Hobyo', 208, 3194)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36288, 'Baydhaba', 208, 3200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36289, 'Gebiley', 208, 3188)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36290, 'Luuq', 208, 3198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36291, 'Jariiban', 208, 3194)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36292, 'Hargeysa', 208, 3188)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36293, 'Buur Hakaba', 208, 3200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36294, 'Diinsoor', 208, 3200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36295, 'Belet Weyne', 208, 3197)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36296, 'Bulo Burto', 208, 3197)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36297, 'Jalalaqsi', 208, 3197)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36298, 'Afmadow', 208, 3195)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36299, 'Jamaame', 208, 3195)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36300, 'Kismaayo', 208, 3195)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36301, 'Afgooye', 208, 3190)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36302, 'Armo', 208, 3201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36303, 'Adado', 208, 3199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36304, 'Darkenley', 208, 3190)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36305, 'Jamame', 208, 3195)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36306, 'Baidoa', 208, 3200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36307, 'Hudur', 208, 3203)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36308, 'Elafweyn', 208, 3192)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36309, 'Xarfo District', 208, 3194)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36310, 'Badhan District', 208, 3192)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36311, 'Ceelbuur', 208, 3199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36312, 'Hodan', 208, 3202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36313, 'Bossaso', 208, 3201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36314, 'Burdhubo', 208, 3200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36315, 'Daynile', 208, 3202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36316, 'Diila District', 208, 3204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36317, 'Kwakoegron', 209, 3215)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36318, 'Marshallkreek', 209, 3215)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36319, 'Klaaskreek', 209, 3215)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36320, 'Centrum', 209, 3215)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36321, 'Brownsweg', 209, 3215)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36322, 'Sarakreek', 209, 3215)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36323, 'Bakkie', 209, 3214)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36324, 'Margaretha', 209, 3214)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36325, 'Nieuw Amsterdam', 209, 3214)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36326, 'Alkmaar', 209, 3214)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36327, 'Tamanredjo', 209, 3214)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36328, 'Johanna Maria', 209, 3213)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36329, 'Moengo', 209, 3212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36330, 'Wanhatti', 209, 3212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36331, 'Galibi', 209, 3212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36332, 'Moengo Tapoe', 209, 3212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36333, 'Albina', 209, 3212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36334, 'Patamacca', 209, 3212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36335, 'Wageningen', 209, 3211)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36336, 'Groot Henar', 209, 3211)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36337, 'Nieuw Nickerie', 209, 3211)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36338, 'Westelijke Polders', 209, 3211)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36339, 'Bigi Poika', 209, 3210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36340, 'Zuid', 209, 3210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36341, 'Noord', 209, 3210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36342, 'Oost', 209, 3210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36343, 'Carolina', 209, 3210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36344, 'Rainville', 209, 3209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36345, 'Blauwgrond', 209, 3209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36346, 'Munder', 209, 3209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36347, 'Beekhuizen', 209, 3209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36348, 'Weg naar Zee', 209, 3209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36349, 'Welgelegen', 209, 3209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36350, 'Tammenga', 209, 3209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36351, 'Flora', 209, 3209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36352, 'Latour', 209, 3209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36353, 'Pontbuiten', 209, 3206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36354, 'Livorno', 209, 3209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36355, 'Calcutta', 209, 3208)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36356, 'Tijgerkreek', 209, 3208)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36357, 'Groningen', 209, 3208)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36358, 'Kampong Baroe', 209, 3208)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36359, 'Wayambo', 209, 3208)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36360, 'Jarikaba', 209, 3208)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36361, 'Tapanahony', 209, 3207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36362, 'Boven Suriname', 209, 3207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36363, 'Boven Saramacca', 209, 3207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36364, 'Boven Coppename', 209, 3207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36365, 'Kabalebo', 209, 3207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36366, 'Coeroeni', 209, 3207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36367, 'Domburg', 209, 3210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36368, 'Houttuin', 209, 3206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36369, 'Lelydorp', 209, 3206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36370, 'De Nieuwe Grond', 209, 3206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36371, 'Koewarasan', 209, 3206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36372, 'Saramacca Polder', 209, 3206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36373, 'Kwatta', 209, 3208)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36374, 'Province of West Equatoria', 198, 3220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36375, 'Junqal', 198, 3222)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36376, 'Mudīrīyat Baḩr al Ghazāl ash Sharqīyah', 198, 3223)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36377, 'Al Mudīrīyah al Istiwā’īyah ash Sharqīyah', 198, 3224)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36378, 'Mudīrīyat A‘ālī an Nīl', 198, 3216)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36379, 'Shobet', 198, 3217)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36380, 'Terkaka', 198, 3219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36381, 'Magwi County', 198, 3224)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36382, 'Juba County', 198, 3219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36383, 'Budi', 198, 3224)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36384, 'Ikotos', 198, 3224)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36385, 'Aweil East', 198, 3223)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36386, 'Rubkona', 198, 3218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36387, 'Torit County', 198, 3224)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36388, 'Yei County', 198, 3219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36389, 'Lafon County', 198, 3224)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36390, 'Maban County', 198, 3216)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36391, 'Melut County', 198, 3216)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36392, 'Pochalla County', 198, 3222)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36393, 'Twic County', 198, 3225)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36394, 'Malakal County', 198, 3216)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36395, 'Guit County', 198, 3218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36396, 'Lainya County', 198, 3219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36397, 'Morobo County', 198, 3219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36398, 'Kajo Keji County', 198, 3219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36399, 'Renk County', 198, 3216)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36400, 'Jur River County', 198, 3221)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36401, 'Uror County', 198, 3222)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36402, 'Lemba District', 210, 3226)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36403, 'Lobata District', 210, 3226)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36404, 'Mé-Zóchi District', 210, 3226)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36405, 'Água Grande District', 210, 3226)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36406, 'Cantagalo District', 210, 3226)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36407, 'Caué District', 210, 3226)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36408, 'Pagué', 210, 3227)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36409, 'Zacatecoluca', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36410, 'Usulután', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36411, 'Tonacatepeque', 211, 3232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36412, 'Tejutla', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36413, 'Suchitoto', 211, 3238)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36414, 'Sonsonate', 211, 3229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36415, 'Sesori', 211, 3233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36416, 'Sensuntepeque', 211, 3240)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36417, 'San Vicente', 211, 3230)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36418, 'Santo Tomás', 211, 3232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36419, 'Santiago de María', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36420, 'Santa Rosa de Lima', 211, 3235)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36421, 'Santa Ana', 211, 3231)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36422, 'San Sebastián', 211, 3230)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36423, 'San Salvador', 211, 3232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36424, 'San Pedro Nonualco', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36425, 'San Pedro Masahuat', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36426, 'San Miguel', 211, 3233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36427, 'San Juan Opico', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36428, 'San Cristóbal', 211, 3238)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36429, 'San Antonio', 211, 3233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36430, 'Quezaltepeque', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36431, 'Osicala', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36432, 'Olocuilta', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36433, 'Santa Tecla', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36434, 'Metapán', 211, 3231)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36435, 'Masahuat', 211, 3231)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36436, 'La Unión', 211, 3235)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36437, 'La Libertad', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36438, 'Jucuapa', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36439, 'Juayúa', 211, 3229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36440, 'Jocoaitique', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36441, 'Izalco', 211, 3229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36442, 'Ilobasco', 211, 3240)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36443, 'Dulce Nombre de María', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36444, 'Cojutepeque', 211, 3238)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36445, 'Chinameca', 211, 3233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36446, 'Chalchuapa', 211, 3231)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36447, 'Chalatenango', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36448, 'Berlín', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36449, 'Atiquizaya', 211, 3241)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36450, 'Ahuachapán', 211, 3241)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36451, 'San Lorenzo', 211, 3241)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36452, 'San Luis la  Herradura', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36453, 'San Luis Talpa', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36454, 'San Francisco Gotera', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36455, 'Guadalupe', 211, 3230)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36456, 'Bolivar', 211, 3235)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36457, 'San Francisco Menéndez', 211, 3241)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36458, 'Jujutla', 211, 3241)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36459, 'Guaymango', 211, 3241)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36460, 'Concepción de Ataco', 211, 3241)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36461, 'Apaneca', 211, 3241)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36462, 'San Pedro Puxtla', 211, 3241)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36463, 'Tacuba', 211, 3241)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36464, 'Turín', 211, 3241)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36465, 'El Refugio', 211, 3241)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36466, 'Victoria', 211, 3240)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36467, 'Dolores', 211, 3240)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36468, 'Guacotecti', 211, 3240)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36469, 'San Isidro', 211, 3240)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36470, 'Jutiapa', 211, 3240)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36471, 'Tejutepeque', 211, 3240)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36472, 'Cinquera', 211, 3240)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36473, 'Nueva Concepción', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36474, 'Agua Caliente', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36475, 'La Reina', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36476, 'El Paraíso', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36477, 'San Rafael', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36478, 'Santa Rita', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36479, 'San Francisco Morazán', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36480, 'La Palma', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36481, 'San Fernando', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36482, 'San Ignacio', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36483, 'Citalá', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36484, 'Comalapa', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36485, 'La Laguna', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36486, 'Ojos de Agua', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36487, 'El Carrizal', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36488, 'Las Vueltas', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36489, 'Concepción Quezaltepeque', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36490, 'San Antonio los Ranchos', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36491, 'San Miguel de Mercedes', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36492, 'Potonico', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36493, 'Cancasque', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36494, 'San Isidro Labrador', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36495, 'Las Flores', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36496, 'San Antonio de la Cruz', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36497, 'Nueva Trinidad', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36498, 'Arcatao', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36499, 'Nombre de Jesús', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36500, 'San Luis del Carmen', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36501, 'San Francisco Lempa', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36502, 'Azacualpa', 211, 3239)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36503, 'Santa Cruz Analquito', 211, 3238)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36504, 'San Ramón', 211, 3238)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36505, 'Candelaria', 211, 3238)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36506, 'El Carmen', 211, 3238)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36507, 'San Rafael Cedros', 211, 3238)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36508, 'El Rosario', 211, 3238)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36509, 'Monte San Juan', 211, 3238)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36510, 'Santa Cruz Michapa', 211, 3238)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36511, 'San Pedro Perulapán', 211, 3238)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36512, 'San Bartolomé Perulapía', 211, 3238)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36513, 'Tenancingo', 211, 3238)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36514, 'Oratorio de Concepción', 211, 3238)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36515, 'San José Guayabal', 211, 3238)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36516, 'Ciudad Arce', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36517, 'San Matías', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36518, 'San Pablo Tacachico', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36519, 'Colón', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36520, 'Sacacoyo', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36521, 'Tepecoyo', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36522, 'Talnique', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36523, 'Jayaque', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36524, 'Comasagua', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36525, 'Zaragoza', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36526, 'San José Villanueva', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36527, 'Tamanique', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36528, 'Chiltiupán', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36529, 'Jicalapa', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36530, 'Teotepeque', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36531, 'Huizúcar', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36532, 'Nuevo Cuscatlán', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36533, 'Antiguo Cuscatlán', 211, 3237)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36534, 'El Rosario', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36535, 'San Rafael Obrajuelo', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36536, 'Santiago Nonualco', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36537, 'San Juan Nonualco', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36538, 'Santa María Ostuma', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36539, 'Mercedes la Ceiba', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36540, 'Jerusalén', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36541, 'Paraíso de Osorio', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36542, 'San Emigdio', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36543, 'San Juan Tepezontes', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36544, 'San Miguel Tepezontes', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36545, 'San Antonio Masahuat', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36546, 'San Francisco Chinameca', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36547, 'Tapalhuaca', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36548, 'Cuyultitán', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36549, 'San Juan Talpa', 211, 3236)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36550, 'El Divisadero', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36551, 'Jocoro', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36552, 'Sociedad', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36553, 'San Carlos', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36554, 'Guatajiagua', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36555, 'Sensembra', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36556, 'Yamabal', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36557, 'Chilanga', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36558, 'Lolotiquillo', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36559, 'Yoloaiquín', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36560, 'Delicias de Concepción', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36561, 'San Simón', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36562, 'Gualococti', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36563, 'El Rosario', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36564, 'San Isidro', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36565, 'Meanguera', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36566, 'Joateca', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36567, 'Torola', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36568, 'Arambala', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36569, 'Perquín', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36570, 'San Fernando', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36571, 'Cacaopera', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36572, 'Corinto', 211, 3234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36573, 'El Tránsito', 211, 3233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36574, 'Chirilagua', 211, 3233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36575, 'Uluazapa', 211, 3233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36576, 'Comacarán', 211, 3233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36577, 'San Rafael Oriente', 211, 3233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36578, 'San Jorge', 211, 3233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36579, 'Quelepa', 211, 3233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36580, 'Moncagua', 211, 3233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36581, 'Nueva Guadalupe', 211, 3233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36582, 'Lolotique', 211, 3233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36583, 'Chapeltique', 211, 3233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36584, 'Ciudad Barrios', 211, 3233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36585, 'San Luis de la Reina', 211, 3233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36586, 'Carolina', 211, 3233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36587, 'San Gerardo', 211, 3233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36588, 'Nuevo Edén de San Juan', 211, 3233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36589, 'Municipio de El Paisnal', 211, 3232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36590, 'Aguilares', 211, 3232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36591, 'Guazapa', 211, 3232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36592, 'Nejapa', 211, 3232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36593, 'Apopa', 211, 3232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36594, 'Mejicanos', 211, 3232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36595, 'Ayutuxtepeque', 211, 3232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36596, 'San Martín', 211, 3232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36597, 'Ilopango', 211, 3232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36598, 'Soyapango', 211, 3232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36599, 'Cuscatancingo', 211, 3232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36600, 'Ciudad Delgado', 211, 3232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36601, 'San Marcos', 211, 3232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36602, 'Santiago Texacuangos', 211, 3232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36603, 'Panchimalco', 211, 3232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36604, 'Rosario de Mora', 211, 3232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36605, 'El Congo', 211, 3231)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36606, 'Coatepeque', 211, 3231)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36607, 'San Sebastián Salitrillo', 211, 3231)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36608, 'El Porvenir', 211, 3231)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36609, 'Candelaria de la Frontera', 211, 3231)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36610, 'Texistepeque', 211, 3231)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36611, 'Santiago de la Frontera', 211, 3231)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36612, 'San Antonio Pajonal', 211, 3231)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36613, 'Santa Rosa Guachipilín', 211, 3231)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36614, 'San Ildefonso', 211, 3230)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36615, 'Santa Clara', 211, 3230)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36616, 'Apastepeque', 211, 3230)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36617, 'San Esteban Catarina', 211, 3230)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36618, 'San Lorenzo', 211, 3230)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36619, 'Santo Domingo', 211, 3230)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36620, 'Verapaz', 211, 3230)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36621, 'Tepetitán', 211, 3230)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36622, 'San Cayetano Istepeque', 211, 3230)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36623, 'Tecoluca', 211, 3230)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36624, 'San Julián', 211, 3229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36625, 'Armenia', 211, 3229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36626, 'Caluco', 211, 3229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36627, 'Cuisnahuat', 211, 3229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36628, 'Santa Isabel Ishuatán', 211, 3229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36629, 'Acajutla', 211, 3229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36630, 'Nahulingo', 211, 3229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36631, 'San Antonio del Monte', 211, 3229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36632, 'Santo Domingo de Guzmán', 211, 3229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36633, 'Sonzacate', 211, 3229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36634, 'Santa Catarina Masahuat', 211, 3229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36635, 'Nahuizalco', 211, 3229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36636, 'Salcoatitán', 211, 3229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36637, 'Jiquilisco', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36638, 'Puerto El Triunfo', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36639, 'San Dionisio', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36640, 'Concepción Batres', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36641, 'Santa María', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36642, 'Ereguayquín', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36643, 'Santa Elena', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36644, 'Ozatlán', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36645, 'Tecapán', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36646, 'California', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36647, 'San Francisco Javier', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36648, 'San Agustín', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36649, 'Alegría', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36650, 'Mercedes Umaña', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36651, 'San Buenaventura', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36652, 'El Triunfo', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36653, 'Nueva Granada', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36654, 'Estanzuelas', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36655, 'Jucuarán', 211, 3228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36656, 'Meanguera del Golfo', 211, 3235)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36657, 'Conchagua', 211, 3235)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36658, 'El Carmen', 211, 3235)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36659, 'Intipucá', 211, 3235)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36660, 'San Alejo', 211, 3235)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36661, 'Yayantique', 211, 3235)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36662, 'Pasaquina', 211, 3235)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36663, 'San José', 211, 3235)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36664, 'Yucuaiquín', 211, 3235)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36665, 'El Sauce', 211, 3235)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36666, 'Anamorós', 211, 3235)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36667, 'Lislique', 211, 3235)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36668, 'Nueva Esparta', 211, 3235)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36669, 'Polorós', 211, 3235)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36670, 'Concepción de Oriente', 211, 3235)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36671, 'Tartus District', 213, 3242)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36672, 'Talkalakh District', 213, 3245)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36673, 'Shahba District', 213, 3251)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36674, 'Salkhad District', 213, 3251)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36675, 'Al-Salamiyah District', 213, 3246)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36676, 'Safita District', 213, 3242)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36677, 'Qatana District', 213, 3248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36678, 'Masyaf District', 213, 3246)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36679, 'Manbij District', 213, 3247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36680, 'Maarrat al-Nu''man District', 213, 3244)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36681, 'Jisr al-Shughur District', 213, 3244)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36682, 'Jarabulus District', 213, 3247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36683, 'Jableh District', 213, 3254)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36684, 'Mount Simeon District', 213, 3247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36685, 'Izra District', 213, 3250)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36686, 'Idlib District', 213, 3244)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36687, 'Homs District', 213, 3245)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36688, 'Harem District', 213, 3244)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36689, 'Hama District', 213, 3246)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36690, 'Douma District', 213, 3248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36691, 'Damascus', 213, 3243)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36692, 'Al-Malikiyah District', 213, 3255)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36693, 'Deir ez-Zor District', 213, 3249)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36694, 'Daraa District', 213, 3250)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36695, 'Baniyas District', 213, 3242)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36696, 'Fiq District', 213, 3253)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36697, 'Al-Zabadani District', 213, 3248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36698, 'Azaz District', 213, 3247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36699, 'Ayn al-Arab District', 213, 3247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36700, 'Al-Tall District', 213, 3248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36701, 'As-Suwayda District', 213, 3251)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36702, 'Al-Rastan District', 213, 3245)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36703, 'Ar-Raqqah District', 213, 3252)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36704, 'Al-Nabk District', 213, 3248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36705, 'Al-Qutayfah District', 213, 3248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36706, 'Al-Qusayr District', 213, 3245)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36707, 'Quneitra District', 213, 3253)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36708, 'Qardaha District', 213, 3254)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36709, 'Al-Qamishli District', 213, 3255)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36710, 'Al-Mukharram District', 213, 3245)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36711, 'Mayadin District', 213, 3249)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36712, 'Latakia District', 213, 3254)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36713, 'Al-Hasakah District', 213, 3255)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36714, 'Al-Haffah District', 213, 3254)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36715, 'Al-Suqaylabiyah District', 213, 3246)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36716, 'Al-Bab District', 213, 3247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36717, 'Afrin District', 213, 3247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36718, 'Abu Kamal District', 213, 3249)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36719, 'Tadmur District', 213, 3245)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36720, 'Ras al-Ayn District', 213, 3255)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36721, 'Yabrud District', 213, 3248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36722, 'Tell Abyad District', 213, 3252)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36723, 'Duraykish District', 213, 3242)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36724, 'Al-Shaykh Badr District', 213, 3242)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36725, 'Mhardeh District', 213, 3246)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36726, 'Al-Safira District', 213, 3247)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36727, 'Darayya District', 213, 3248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36728, 'Al-Sanamayn District', 213, 3250)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36729, 'Al-Thawrah District', 213, 3252)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36730, 'Ariha District', 213, 3244)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36731, 'Markaz Rif Dimashq District', 213, 3248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36732, 'Manzini North', 214, 3257)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36733, 'Siphofaneni', 214, 3258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36734, 'Motjane', 214, 3259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36735, 'Mkhiweni', 214, 3257)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36736, 'Matsanjeni', 214, 3256)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36737, 'Mayiwane', 214, 3259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36738, 'Lomashasha', 214, 3258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36739, 'Maseyisini', 214, 3256)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36740, 'Emkhuzweni Mission', 214, 3259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36741, 'Nkhaba', 214, 3259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36742, 'Ngudzeni', 214, 3256)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36743, 'Mhlangatane', 214, 3259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36744, 'Nhlambeni', 214, 3257)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36745, 'Ekukhanyeni', 214, 3257)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36746, 'Ngwempisi', 214, 3257)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36747, 'Hhukwini', 214, 3259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36748, 'Manzini South', 214, 3257)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36749, 'Mtsambama', 214, 3256)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36750, 'Hlane', 214, 3258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36751, 'Ntondozi', 214, 3257)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36752, 'Mpholonjeni', 214, 3258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36753, 'Mahlangatsha', 214, 3257)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36754, 'Nkwene', 214, 3256)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36755, 'Mafutseni', 214, 3257)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36756, 'Dvokodvweni Inkhundla', 214, 3258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36757, 'Ludzeludze Inkhundla', 214, 3257)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36758, 'Sigwe Inkhundla', 214, 3256)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36759, 'Zombodze Ikhundla', 214, 3256)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36760, 'Inkhundla Sithobela', 214, 3258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36761, 'Lamgabhi', 214, 3257)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36762, 'Madlangempisi', 214, 3259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36763, 'Kwaluseni', 214, 3257)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36764, 'Hosea', 214, 3256)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36765, 'Shiselweni I', 214, 3256)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36766, 'Ntfonjeni', 214, 3259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36767, 'Maphalaleni', 214, 3259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36768, 'Matsanjeni North', 214, 3256)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36769, 'Mangcongco', 214, 3257)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36770, 'Harazé Mangueigne', 216, 3260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36771, 'Baguirmi', 216, 3271)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36772, 'Dababa', 216, 3271)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36773, 'Mayo-Boneye', 216, 3265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36774, 'Tandjilé Est', 216, 3263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36775, 'Barh Köh', 216, 3264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36776, 'Monts de Lam', 216, 3266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36777, 'Nya Pendé', 216, 3266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36778, 'Lanya', 216, 3266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36779, 'Pendé', 216, 3266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36780, 'Mandoul Oriental', 216, 3264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36781, 'Koumra', 216, 3264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36782, 'Bessada', 216, 3264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36783, 'Bedaya', 216, 3264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36784, 'Djoli', 216, 3264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36785, 'Balimba', 216, 3264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36786, 'Sarh', 216, 3264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36787, 'Doba', 216, 3266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36788, 'Lac Wey', 216, 3267)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36789, 'Dodje', 216, 3267)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36790, 'Ngourkosso', 216, 3267)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36791, 'La Nya Pende', 216, 3266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36792, 'Lac Iro', 216, 3264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36793, 'Grande Sido', 216, 3264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36794, 'Mandoul Occidental', 216, 3264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36795, 'Barh Sara', 216, 3264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36796, 'Tandjile Ouest', 216, 3263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36797, 'Mansaba', 216, 3271)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36798, 'Batha', 216, 3272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36799, 'Ouara', 216, 3261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36800, 'Dagana District', 216, 3271)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36801, 'Rig-Rig', 216, 3269)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36802, 'Mamdi Department', 216, 3266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36803, 'Loug Chari', 216, 3271)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36804, 'Barh Signaka', 216, 3270)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36805, 'Fitri', 216, 3272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36806, 'Chari', 216, 3271)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36807, 'Kobé', 216, 3262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36808, 'Assoungha Department', 216, 3261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36809, 'Barh Azoum', 216, 3260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36810, 'Wayi', 216, 3268)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36811, 'Abtouyour', 216, 3270)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36812, 'Septième Arrondissement', 216, 3277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36813, 'Huitième Arrondissement', 216, 3277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36814, 'Premier Arrondissement', 216, 3277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36815, 'Deuxième Arrondissement', 216, 3277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36816, 'Troisième Arrondissement', 216, 3277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36817, 'Quatrième Arrondissement', 216, 3277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36818, 'Cinquième Arrondissement', 216, 3277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36819, 'Sixième Arrondissement', 216, 3277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36820, 'Neuvième Arrondissement', 216, 3277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36821, 'Dixième Arrondissement', 216, 3277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36822, 'El Ouaya', 216, 3276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36823, 'Kimiti', 216, 3279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36824, 'Tissi', 216, 3279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36825, 'Lac Léré', 216, 3276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36826, 'Adé', 216, 3279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36827, 'Koukou-Angarana', 216, 3279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36828, 'Mayo-Dallah', 216, 3276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36829, 'Mayo-Binder', 216, 3276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36830, 'Gagal', 216, 3276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36831, 'Guéni', 216, 3267)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36832, 'Kouh-Est', 216, 3266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36833, 'Kouh-Ouest', 216, 3266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36834, 'La Pendé', 216, 3266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36835, 'Tandjilé-Centre', 216, 3263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36836, 'Manga', 216, 3263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36837, 'Manbagué', 216, 3263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36838, 'Goundi', 216, 3275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36839, 'Taralnass', 216, 3275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36840, 'La Moula', 216, 3275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36841, 'Kabia', 216, 3265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36842, 'Mayo-Lemié', 216, 3265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36843, 'Mont-Illi', 216, 3265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36844, 'Dourbali', 216, 3271)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36845, 'Korbol', 216, 3264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36846, 'Mangalmé', 216, 3270)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36847, 'Garada', 216, 3270)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36848, 'Aboudeia', 216, 3260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36849, 'Abdi', 216, 3261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36850, 'Djourf-Al-Ahmar', 216, 3279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36851, 'Abougoudam', 216, 3261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36852, 'Biltine', 216, 3262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36853, 'Dar-Tama', 216, 3262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36854, 'Mégri', 216, 3262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36855, 'Iriba', 216, 3262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36856, 'Al-Biher', 216, 3262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36857, 'Dar-Alfawakih', 216, 3262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36858, 'Amdjarass', 216, 3282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36859, 'Wadi-Hawar', 216, 3262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36860, 'Itou', 216, 3282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36861, 'Bao', 216, 3282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36862, 'Mourdi', 216, 3282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36863, 'Fada', 216, 3281)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36864, 'Mourtcha', 216, 3281)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36865, 'Lac-Ounianga', 216, 3281)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36866, 'Gouro', 216, 3273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36867, 'Tebi', 216, 3281)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36868, 'Torbol', 216, 3281)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36869, 'Borkou', 216, 3273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36870, 'Borkou-Yala', 216, 3273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36871, 'Kouba', 216, 3273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36872, 'Emi-Koussi', 216, 3273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36873, 'Tibesti-Est', 216, 3280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36874, 'Tibesti-Ouest', 216, 3280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36875, 'Wour', 216, 3280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36876, 'Aouzou', 216, 3280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36877, 'Batha-Est', 216, 3272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36878, 'Batha-Ouest', 216, 3272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36879, 'Ouadi Rimé', 216, 3272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36880, 'Assinet', 216, 3272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36881, 'Haraze', 216, 3272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36882, 'Barh-El-Gazel Nord', 216, 3278)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36883, 'Barh-El-Gazel Sud', 216, 3278)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36884, 'Barh-El-Gazel Ouest', 216, 3278)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36885, 'Kléta', 216, 3278)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36886, 'Nord-Kanem', 216, 3269)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36887, 'Sud-Kanem', 216, 3269)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36888, 'Kouloudia', 216, 3268)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36889, 'Kaya', 216, 3268)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36890, 'Fouli', 216, 3268)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36891, 'Dababa', 216, 3274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36892, 'Ngoura', 216, 3274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36893, 'Haraz-Al-Biar', 216, 3274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36894, 'Tromelin Island', 217, 3286)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36895, 'Europa Island', 217, 3286)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36896, 'Bassas da India', 217, 3286)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36897, 'Juan de Nova Island', 217, 3286)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36898, 'Glorioso Islands', 217, 3286)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36899, 'Vo Prefecture', 218, 3290)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36900, 'Zio Prefecture', 218, 3290)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36901, 'Tchaoudjo', 218, 3291)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36902, 'Tchamba', 218, 3291)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36903, 'Yoto', 218, 3290)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36904, 'Sotouboua', 218, 3291)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36905, 'Haho', 218, 3289)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36906, 'Doufelgou', 218, 3292)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36907, 'Oti', 218, 3288)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36908, 'Golfe Prefecture', 218, 3290)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36909, 'Kozah', 218, 3292)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36910, 'Binah', 218, 3292)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36911, 'Kloto', 218, 3289)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36912, 'Préfecture de Kéran', 218, 3292)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36913, 'Tone', 218, 3288)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36914, 'Bassar', 218, 3292)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36915, 'Assoli', 218, 3292)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36916, 'Wawa', 218, 3289)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36917, 'Ogou', 218, 3289)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36918, 'Lacs Prefecture', 218, 3290)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36919, 'Amou', 218, 3289)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36920, 'Ave Prefecture', 218, 3290)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36921, 'Agou', 218, 3289)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36922, 'Est-Mono', 218, 3289)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36923, 'Moyen-Mono', 218, 3289)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36924, 'Danyi', 218, 3289)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36925, 'Blitta', 218, 3291)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36926, 'Dankpen', 218, 3292)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36927, 'Kpendjal', 218, 3288)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36928, 'Préfecture de Tandjouaré', 218, 3288)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36929, 'Amphoe Pa Daet', 219, 3311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36930, 'Amphoe Yan Ta Khao', 219, 3294)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36931, 'Amphoe Wiang Pa Pao', 219, 3311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36932, 'Amphoe Wat Phleng', 219, 3298)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36933, 'Amphoe Wang Nuea', 219, 3306)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36934, 'Amphoe Wang Chin', 219, 3331)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36935, 'Amphoe U Thong', 219, 3318)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36936, 'Amphoe Umphang', 219, 3295)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36937, 'Amphoe Thung Yai', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36938, 'Amphoe Thung Wa', 219, 3322)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36939, 'Amphoe Thung Song', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36940, 'Amphoe Thung Saliam', 219, 3297)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36941, 'Amphoe Thong Pha Phum', 219, 3308)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36942, 'Amphoe Thoen', 219, 3306)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36943, 'Amphoe Tha Yang', 219, 3302)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36944, 'Amphoe Tha Song Yang', 219, 3295)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36945, 'Amphoe Tha Sala', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36946, 'Amphoe Tha Sae', 219, 3310)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36947, 'Amphoe Thap Than', 219, 3293)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36948, 'Amphoe Thap Sakae', 219, 3300)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36949, 'Amphoe Thap Put', 219, 3303)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36950, 'Amphoe Tha Muang', 219, 3308)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36951, 'Amphoe Tha Maka', 219, 3308)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36952, 'Amphoe Thalang', 219, 3301)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36953, 'Amphoe Thai Mueang', 219, 3303)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36954, 'Amphoe Tha Chang', 219, 3296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36955, 'Amphoe Tha Chana', 219, 3296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36956, 'Amphoe Takua Thung', 219, 3303)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36957, 'Amphoe Sop Prap', 219, 3306)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36958, 'Amphoe Sop Moei', 219, 3304)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36959, 'Amphoe Si Sawat', 219, 3308)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36960, 'Amphoe Si Satchanalai', 219, 3297)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36961, 'Amphoe Si Samrong', 219, 3297)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36962, 'Amphoe Wang Wiset', 219, 3294)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36963, 'Amphoe Sichon', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36964, 'Amphoe Sawi', 219, 3310)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36965, 'Amphoe Sawankhalok', 219, 3297)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36966, 'Amphoe Sawang Arom', 219, 3293)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36967, 'Amphoe Saraphi', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36968, 'Amphoe San Sai', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36969, 'Amphoe San Pa Tong', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36970, 'Amphoe San Kamphaeng', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36971, 'Amphoe Sangkhla Buri', 219, 3308)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36972, 'Amphoe Samoeng', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36973, 'Amphoe Sam Ngao', 219, 3295)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36974, 'Amphoe Sam Chuk', 219, 3318)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36975, 'Amphoe Sai Yok', 219, 3308)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36976, 'Amphoe Ron Phibun', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36977, 'Amphoe Pran Buri', 219, 3300)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36978, 'Amphoe Phunphin', 219, 3296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36979, 'Amphoe Phrasaeng', 219, 3296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36980, 'Amphoe Phrao', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36981, 'Amphoe Phran Kratai', 219, 3309)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36982, 'Amphoe Photharam', 219, 3298)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36983, 'Amphoe Mueang Phayao', 219, 3335)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36984, 'Amphoe Phato', 219, 3310)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36985, 'Amphoe Phanom Thuan', 219, 3308)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36986, 'Amphoe Phanom', 219, 3296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36987, 'Amphoe Phan', 219, 3311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36988, 'Amphoe Pathio', 219, 3310)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36989, 'Amphoe Pa Sang', 219, 3305)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36990, 'Amphoe Palian', 219, 3294)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36991, 'Amphoe Pak Tho', 219, 3298)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36992, 'Amphoe Pai', 219, 3304)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36993, 'Amphoe Om Koi', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36994, 'Amphoe Nong Khayang', 219, 3293)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36995, 'Amphoe Nong Chang', 219, 3293)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36996, 'Amphoe Ngao', 219, 3306)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36997, 'Amphoe Mueang Trang', 219, 3294)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36998, 'Amphoe Mueang Tak', 219, 3295)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (36999, 'Amphoe Mueang Surat Thani', 219, 3296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37000, 'Amphoe Mueang Sukhothai', 219, 3297)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37001, 'Amphoe Mueang Ratchaburi', 219, 3298)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37002, 'Amphoe Mueang Ranong', 219, 3299)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37003, 'Amphoe Mueang Prachuap Khiri Khan', 219, 3300)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37004, 'Amphoe Mueang Phuket', 219, 3301)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37005, 'Amphoe Mueang Phetchaburi', 219, 3302)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37006, 'Amphoe Mueang Phangnga', 219, 3303)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37007, 'Amphoe Mueang Mae Hong Son', 219, 3304)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37008, 'Amphoe Mueang Lamphun', 219, 3305)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37009, 'Amphoe Mueang Lampang', 219, 3306)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37010, 'Amphoe Mueang Krabi', 219, 3307)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37011, 'Amphoe Mueang Kanchanaburi', 219, 3308)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37012, 'Amphoe Mueang Kamphaeng Phet', 219, 3309)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37013, 'Amphoe Mueang Chumphon', 219, 3310)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37014, 'Amphoe Mueang Chiang Rai', 219, 3311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37015, 'Amphoe Mueang Chiang Mai', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37016, 'Amphoe Mae Tha', 219, 3305)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37017, 'Amphoe Mae Tha', 219, 3306)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37018, 'Amphoe Mae Taeng', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37019, 'Amphoe Mae Suai', 219, 3311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37020, 'Amphoe Mae Sot', 219, 3295)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37021, 'Amphoe Mae Sariang', 219, 3304)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37022, 'Amphoe Mae Sai', 219, 3311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37023, 'Amphoe Mae Rim', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37024, 'Amphoe Mae Ramat', 219, 3295)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37025, 'Amphoe Mae Phrik', 219, 3306)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37026, 'Amphoe Mae Chan', 219, 3311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37027, 'Amphoe Mae Chai', 219, 3335)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37028, 'Amphoe Mae Chaem', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37029, 'Amphoe Mae Ai', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37030, 'Amphoe Long', 219, 3331)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37031, 'Amphoe Li', 219, 3305)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37032, 'Amphoe La-un', 219, 3299)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37033, 'Amphoe Lat Yao', 219, 3344)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37034, 'Amphoe Lan Saka', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37035, 'Amphoe La-Ngu', 219, 3322)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37036, 'Amphoe Lang Suan', 219, 3310)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37037, 'Amphoe Kui Buri', 219, 3300)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37038, 'Amphoe Kra Buri', 219, 3299)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37039, 'Amphoe Ko Yao', 219, 3303)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37040, 'Amphoe Ko Samui', 219, 3296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37041, 'Amphoe Ko Lanta', 219, 3307)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37042, 'Amphoe Ko Kha', 219, 3306)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37043, 'Amphoe Khun Yuam', 219, 3304)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37044, 'Amphoe Khlong Thom', 219, 3307)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37045, 'Amphoe Khlong Khlung', 219, 3309)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37046, 'Amphoe Khiri Rat Nikhom', 219, 3296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37047, 'Amphoe Khiri Mat', 219, 3297)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37048, 'Amphoe Khao Yoi', 219, 3302)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37049, 'Amphoe Khanu Woralaksaburi', 219, 3309)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37050, 'Amphoe Khanom', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37051, 'Amphoe Kathu', 219, 3301)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37052, 'Amphoe Kapong', 219, 3303)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37053, 'Amphoe Kapoe', 219, 3299)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37054, 'Amphoe Kantang', 219, 3294)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37055, 'Amphoe Kanchanadit', 219, 3296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37056, 'Amphoe Huai Yot', 219, 3294)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37057, 'Amphoe Hua Hin', 219, 3300)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37058, 'Amphoe Hot', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37059, 'Amphoe Hankha', 219, 3359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37060, 'Amphoe Hang Dong', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37061, 'Amphoe Hang Chat', 219, 3306)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37062, 'Amphoe Fang', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37063, 'Amphoe Doi Saket', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37064, 'Amphoe Chom Thong', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37065, 'Amphoe Chom Bueng', 219, 3298)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37066, 'Amphoe Chiang Dao', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37067, 'Amphoe Chawang', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37068, 'Amphoe Chaiya', 219, 3296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37069, 'Amphoe Chae Hom', 219, 3306)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37070, 'Amphoe Cha-am', 219, 3302)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37071, 'Amphoe Bo Phloi', 219, 3308)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37072, 'Amphoe Ban Tak', 219, 3295)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37073, 'Amphoe Ban Rai', 219, 3293)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37074, 'Amphoe Ban Pong', 219, 3298)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37075, 'Amphoe Ban Na San', 219, 3296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37076, 'Amphoe Ban Lat', 219, 3302)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37077, 'Amphoe Ban Hong', 219, 3305)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37078, 'Amphoe Bang Saphan', 219, 3300)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37079, 'Amphoe Bang Phae', 219, 3298)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37080, 'Amphoe Bang Khonthi', 219, 3324)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37081, 'Amphoe Ban Dan Lan Hoi', 219, 3297)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37082, 'Amphoe Amphawa', 219, 3324)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37083, 'Amphoe Mae Charim', 219, 3342)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37084, 'Amphoe Yi-ngo', 219, 3341)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37085, 'Amphoe Mueang Yasothon', 219, 3313)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37086, 'Amphoe Yaring', 219, 3337)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37087, 'Amphoe Yarang', 219, 3337)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37088, 'Amphoe Yang Talat', 219, 3355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37089, 'Amphoe Yaha', 219, 3314)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37090, 'Amphoe Wiset Chai Chan', 219, 3362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37091, 'Amphoe Wihan Daeng', 219, 3323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37092, 'Amphoe Wichian Buri', 219, 3334)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37093, 'Amphoe Watthana Nakhon', 219, 3368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37094, 'Amphoe Wat Sing', 219, 3359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37095, 'Amphoe Wat Bot', 219, 3332)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37096, 'Amphoe Waritchaphum', 219, 3327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37097, 'Amphoe Warin Chamrap', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37098, 'Amphoe Wapi Pathum', 219, 3350)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37099, 'Amphoe Wanon Niwat', 219, 3327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37100, 'Amphoe Wang Thong', 219, 3332)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37101, 'Amphoe Wang Saphung', 219, 3352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37102, 'Amphoe Wang Noi', 219, 3330)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37103, 'Amphoe Waeng', 219, 3341)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37104, 'Amphoe Uthumphon Phisai', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37105, 'Amphoe Uthai', 219, 3330)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37106, 'Amphoe Tron', 219, 3315)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37107, 'Amphoe Trakan Phuet Phon', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37108, 'Amphoe Thung Chang', 219, 3342)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37109, 'Thon buri', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37110, 'Amphoe Thoeng', 219, 3311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37111, 'Amphoe Thepha', 219, 3319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37112, 'Amphoe Tha Wung', 219, 3351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37113, 'Amphoe Thawatchaburi', 219, 3328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37114, 'Amphoe Tha Wang Pha', 219, 3342)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37115, 'Amphoe Tha Uthen', 219, 3346)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37116, 'Amphoe Tha Tum', 219, 3317)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37117, 'Amphoe That Phanom', 219, 3346)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37118, 'Amphoe Tha Tako', 219, 3344)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37119, 'Amphoe Tha Ruea', 219, 3330)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37120, 'Amphoe Tha Pla', 219, 3315)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37121, 'Amphoe Thanyaburi', 219, 3338)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37122, 'Amphoe Tha Mai', 219, 3357)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37123, 'Amphoe Tha Li', 219, 3352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37124, 'Amphoe Tha Khantho', 219, 3355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37125, 'Amphoe Tha Chang', 219, 3321)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37126, 'Amphoe Tha Bo', 219, 3340)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37127, 'Amphoe Ta Phraya', 219, 3368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37128, 'Amphoe Taphan Hin', 219, 3333)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37129, 'Taling Chan', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37130, 'Amphoe Takhli', 219, 3344)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37131, 'Amphoe Tak Bai', 219, 3341)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37132, 'Amphoe Suwannaphum', 219, 3328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37133, 'Amphoe Sung Noen', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37134, 'Amphoe Sung Men', 219, 3331)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37135, 'Amphoe Su-ngai Padi', 219, 3341)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37136, 'Amphoe Su-ngai Kolok', 219, 3341)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37137, 'Amphoe Song Phi Nong', 219, 3318)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37138, 'Amphoe Song', 219, 3331)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37139, 'Amphoe Somdet', 219, 3355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37140, 'Amphoe Si Songkhram', 219, 3346)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37141, 'Amphoe Si Racha', 219, 3356)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37142, 'Amphoe Si Prachan', 219, 3318)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37143, 'Amphoe Si Maha Phot', 219, 3364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37144, 'Amphoe Si Khoraphum', 219, 3317)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37145, 'Amphoe Sikhio', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37146, 'Amphoe Si Chiang Mai', 219, 3340)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37147, 'Amphoe Si Bun Rueang', 219, 3367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37148, 'Amphoe Sena', 219, 3330)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37149, 'Amphoe Selaphum', 219, 3328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37150, 'Amphoe Seka', 219, 3369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37151, 'Amphoe Sawang Daen Din', 219, 3327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37152, 'Amphoe Sawaeng Ha', 219, 3362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37153, 'Amphoe Satuek', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37154, 'Amphoe Sattahip', 219, 3356)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37155, 'Amphoe Sathing Phra', 219, 3319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37156, 'Amphoe Sao Hai', 219, 3323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37157, 'Amphoe Sapphaya', 219, 3359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37158, 'Amphoe Sankhaburi', 219, 3359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37159, 'Amphoe Sangkhom', 219, 3340)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37160, 'Amphoe Sangkha', 219, 3317)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37161, 'Amphoe Sanam Chai Khet', 219, 3360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37162, 'Amphoe Samrong Thap', 219, 3317)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37163, 'Amphoe Sam Phran', 219, 3347)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37164, 'Samphanthawong', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37165, 'Amphoe Sam Ngam', 219, 3333)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37166, 'Amphoe Sam Ko', 219, 3362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37167, 'Amphoe Sam Khok', 219, 3338)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37168, 'Amphoe Mueang Sa Kaeo', 219, 3368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37169, 'Amphoe Sai Noi', 219, 3339)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37170, 'Amphoe Sai Buri', 219, 3337)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37171, 'Amphoe Sahatsakhan', 219, 3355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37172, 'Amphoe Sadao', 219, 3319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37173, 'Amphoe Saba Yoi', 219, 3319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37174, 'Amphoe Wiang Sa', 219, 3342)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37175, 'Amphoe Rueso', 219, 3341)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37176, 'Amphoe Rong Kwang', 219, 3331)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37177, 'Amphoe Rattaphum', 219, 3319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37178, 'Amphoe Rattanaburi', 219, 3317)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37179, 'Rat Burana', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37180, 'Amphoe Rasi Salai', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37181, 'Amphoe Ranot', 219, 3319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37182, 'Amphoe Ra-ngae', 219, 3341)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37183, 'Amphoe Raman', 219, 3314)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37184, 'Amphoe Pua', 219, 3342)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37185, 'Amphoe Prathai', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37186, 'Amphoe Prasat', 219, 3317)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37187, 'Amphoe Prang Ku', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37188, 'Amphoe Prakhon Chai', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37189, 'Amphoe Prachantakham', 219, 3364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37190, 'Amphoe Pathum Rat', 219, 3328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37191, 'Amphoe Pong Nam Ron', 219, 3357)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37192, 'Amphoe Pong', 219, 3335)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37193, 'Pom Prap Sattru Phai', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37194, 'Amphoe Pla Pak', 219, 3346)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37195, 'Amphoe Phu Wiang', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37196, 'Amphoe Phutthaisong', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37197, 'Amphoe Phu Kradueng', 219, 3352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37198, 'Amphoe Phu Khiao', 219, 3358)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37199, 'Amphoe Phrom Phiram', 219, 3332)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37200, 'Amphoe Phrom Buri', 219, 3321)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37201, 'Amphoe Phra Pradaeng', 219, 3326)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37202, 'Amphoe Phra Phutthabat', 219, 3323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37203, 'Amphoe Phra Nakhon Si Ayutthaya', 219, 3330)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37204, 'Phra Nakhon', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37205, 'Phra Khanong', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37206, 'Amphoe Pho Thong', 219, 3362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37207, 'Amphoe Pho Thale', 219, 3333)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37208, 'Amphoe Phon Thong', 219, 3328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37209, 'Amphoe Phonphisai', 219, 3340)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37210, 'Amphoe Phon', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37211, 'Amphoe Phimai', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37212, 'Amphoe Phichai', 219, 3315)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37213, 'Amphoe Phibun Mangsahan', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37214, 'Amphoe Phen', 219, 3363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37215, 'Amphoe Phayuha Khiri', 219, 3344)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37216, 'Phaya Thai', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37217, 'Amphoe Phayakkhaphum Phisai', 219, 3350)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37218, 'Amphoe Phatthana Nikhom', 219, 3351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37219, 'Phasi Charoen', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37220, 'Amphoe Phan Thong', 219, 3356)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37221, 'Amphoe Phanom Sarakham', 219, 3360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37222, 'Amphoe Phanom Phrai', 219, 3328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37223, 'Amphoe Phanna Nikhom', 219, 3327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37224, 'Amphoe Phanat Nikhom', 219, 3356)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37225, 'Amphoe Phana', 219, 3366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37226, 'Amphoe Phak Hai', 219, 3330)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37227, 'Amphoe Phai Sali', 219, 3344)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37228, 'Amphoe Phachi', 219, 3330)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37229, 'Parthum Wan', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37230, 'Amphoe Panare', 219, 3337)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37231, 'Amphoe Pa Mok', 219, 3362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37232, 'Amphoe Pak Thong Chai', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37233, 'Amphoe Pak Phli', 219, 3348)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37234, 'Amphoe Pak Phayun', 219, 3336)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37235, 'Amphoe Pak Phanang', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37236, 'Amphoe Pak Kret', 219, 3339)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37237, 'Amphoe Pak Chong', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37238, 'Amphoe Ongkharak', 219, 3348)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37239, 'Amphoe Non Thai', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37240, 'Amphoe Non Sung', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37241, 'Amphoe Non Sang', 219, 3367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37242, 'Amphoe Nong Suea', 219, 3338)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37243, 'Amphoe Nong Song Hong', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37244, 'Amphoe Nong Saeng', 219, 3323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37245, 'Amphoe Nong Ruea', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37246, 'Amphoe Nong Phok', 219, 3328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37247, 'Amphoe Nong Phai', 219, 3334)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37248, 'Nong Khaem', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37249, 'Amphoe Nong Khae', 219, 3323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37250, 'Amphoe Nong Han', 219, 3363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37251, 'Nong Chok', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37252, 'Amphoe Nong Chik', 219, 3337)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37253, 'Amphoe Mueang Nong Bua Lamphu', 219, 3367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37254, 'Amphoe Nong Bua Daeng', 219, 3358)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37255, 'Amphoe Nong Bua', 219, 3344)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37256, 'Amphoe Na Thawi', 219, 3319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37257, 'Amphoe Na Noi', 219, 3342)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37258, 'Amphoe Nang Rong', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37259, 'Amphoe Nam Phong', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37260, 'Amphoe Nam Pat', 219, 3315)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37261, 'Amphoe Na Klang', 219, 3367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37262, 'Amphoe Nakhon Thai', 219, 3332)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37263, 'Amphoe Nakhon Luang', 219, 3330)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37264, 'Amphoe Nakhon Chai Si', 219, 3347)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37265, 'Amphoe Na Kae', 219, 3346)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37266, 'Amphoe Na Chueak', 219, 3350)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37267, 'Amphoe Mueang Mukdahan', 219, 3349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37268, 'Amphoe Mueang Yala', 219, 3314)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37269, 'Amphoe Mueang Uttaradit', 219, 3315)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37270, 'Amphoe Mueang Uthai Thani', 219, 3293)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37271, 'Amphoe Mueang Udon Thani', 219, 3363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37272, 'Amphoe Mueang Ubon Ratchathani', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37273, 'Amphoe Mueang Trat', 219, 3316)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37274, 'Amphoe Mueang Surin', 219, 3317)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37275, 'Amphoe Mueang Suphan Buri', 219, 3318)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37276, 'Amphoe Mueang Songkhla', 219, 3319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37277, 'Amphoe Mueang Sisaket', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37278, 'Amphoe Mueang Sing Buri', 219, 3321)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37279, 'Amphoe Mueang Sara Buri', 219, 3323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37280, 'Amphoe Mueang Samut Songkhram', 219, 3324)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37281, 'Amphoe Mueang Samut Sakhon', 219, 3325)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37282, 'Amphoe Mueang Samut Prakan', 219, 3326)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37283, 'Amphoe Muang Sam Sip', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37284, 'Amphoe Mueang Sakon Nakhon', 219, 3327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37285, 'Amphoe Mueang Roi Et', 219, 3328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37286, 'Amphoe Mueang Rayong', 219, 3329)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37287, 'Amphoe Mueang Prachin Buri', 219, 3364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37288, 'Amphoe Mueang Phrae', 219, 3331)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37289, 'Amphoe Mueang Phitsanulok', 219, 3332)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37290, 'Amphoe Mueang Phichit', 219, 3333)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37291, 'Amphoe Mueang Phetchabun', 219, 3334)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37292, 'Amphoe Mueang Phatthalung', 219, 3336)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37293, 'Amphoe Mueang Pattani', 219, 3337)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37294, 'Amphoe Mueang Pathum Thani', 219, 3338)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37295, 'Amphoe Mueang Nonthaburi', 219, 3339)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37296, 'Amphoe Mueang Nong Khai', 219, 3340)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37297, 'Amphoe Mueang Narathiwat', 219, 3341)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37298, 'Amphoe Mueang Nan', 219, 3342)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37299, 'Amphoe Mueang Nakhon Si Thammarat', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37300, 'Amphoe Mueang Nakhon Sawan', 219, 3344)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37301, 'Amphoe Mueang Nakhon Ratchasima', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37302, 'Amphoe Mueang Nakhon Phanom', 219, 3346)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37303, 'Amphoe Mueang Nakhon Pathom', 219, 3347)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37304, 'Amphoe Mueang Nakhon Nayok', 219, 3348)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37305, 'Amphoe Mueang Maha Sarakham', 219, 3350)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37306, 'Muang Lop Buri District', 219, 3351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37307, 'Amphoe Mueang Loei', 219, 3352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37308, 'Amphoe Mueang Khon Kaen', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37309, 'Amphoe Mueang Kalasin', 219, 3355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37310, 'Mueang Chonburi District', 219, 3356)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37311, 'Amphoe Mueang Chanthaburi', 219, 3357)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37312, 'Amphoe Mueang Chaiyaphum', 219, 3358)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37313, 'Amphoe Mueang Chainat', 219, 3359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37314, 'Amphoe Mueang Chachoengsao', 219, 3360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37315, 'Amphoe Mueang Buriram', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37316, 'Amphoe Mueang Ang Thong', 219, 3362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37317, 'Min Buri', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37318, 'Amphoe Mayo', 219, 3337)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37319, 'Amphoe Manorom', 219, 3359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37320, 'Amphoe Mancha Khiri', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37321, 'Amphoe Makham', 219, 3357)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37322, 'Amphoe Maha Rat', 219, 3330)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37323, 'Amphoe Maha Chana Chai', 219, 3313)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37324, 'Amphoe Lom Sak', 219, 3334)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37325, 'Amphoe Lom Kao', 219, 3334)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37326, 'Amphoe Loeng Nok Tha', 219, 3313)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37327, 'Amphoe Lat Lum Kaeo', 219, 3338)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37328, 'Lat Krabang', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37329, 'Amphoe Lat Bua Luang', 219, 3330)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37330, 'Amphoe Lap Lae', 219, 3315)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37331, 'Amphoe Lam Plai Mat', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37332, 'Amphoe Lam Luk Ka', 219, 3338)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37333, 'Amphoe Lahan Sai', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37334, 'Amphoe Laem Sing', 219, 3357)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37335, 'Amphoe Laem Ngop', 219, 3316)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37336, 'Amphoe Kut Chum', 219, 3313)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37337, 'Amphoe Kut Bak', 219, 3327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37338, 'Amphoe Kusuman', 219, 3327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37339, 'Amphoe Kumphawapi', 219, 3363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37340, 'Amphoe Kuchinarai', 219, 3355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37341, 'Amphoe Krok Phra', 219, 3344)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37342, 'Amphoe Krathum Baen', 219, 3325)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37343, 'Amphoe Krasang', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37344, 'Amphoe Kranuan', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37345, 'Amphoe Kosum Phisai', 219, 3350)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37346, 'Amphoe Ko Si Chang', 219, 3356)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37347, 'Amphoe Kong Krailat', 219, 3297)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37348, 'Amphoe Klaeng', 219, 3329)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37349, 'Amphoe Khun Han', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37350, 'Amphoe Khukhan', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37351, 'Amphoe Khuan Khanun', 219, 3336)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37352, 'Amphoe Khueang Nai', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37353, 'Amphoe Khon Sawan', 219, 3358)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37354, 'Amphoe Khon San', 219, 3358)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37355, 'Amphoe Si Mueang Mai', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37356, 'Amphoe Khong', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37357, 'Amphoe Khon Buri', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37358, 'Amphoe Khok Samrong', 219, 3351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37359, 'Amphoe Khok Pho', 219, 3337)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37360, 'Amphoe Khlung', 219, 3357)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37361, 'Amphoe Khlong Yai', 219, 3316)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37362, 'Khlong Toei', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37363, 'Khlong San', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37364, 'Amphoe Khlong Luang', 219, 3338)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37365, 'Amphoe Khemmarat', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37366, 'Amphoe Khao Saming', 219, 3316)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37367, 'Amphoe Khao Chaison', 219, 3336)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37368, 'Amphoe Kham Thale So', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37369, 'Amphoe Kham Khuan Kaeo', 219, 3313)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37370, 'Amphoe Khamcha-i', 219, 3349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37371, 'Amphoe Kaset Wisai', 219, 3328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37372, 'Amphoe Kaset Sombun', 219, 3358)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37373, 'Amphoe Kap Choeng', 219, 3317)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37374, 'Amphoe Kantharawichai', 219, 3350)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37375, 'Amphoe Kanthararom', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37376, 'Amphoe Kantharalak', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37377, 'Kamphaeng Saen District', 219, 3347)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37378, 'Amphoe Kamalasai', 219, 3355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37379, 'Amphoe Kaeng Khoi', 219, 3323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37380, 'Amphoe Kaeng Khro', 219, 3358)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37381, 'Amphoe Kabin Buri', 219, 3364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37382, 'Amphoe In Buri', 219, 3321)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37383, 'Amphoe Hua Sai', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37384, 'Amphoe Huai Thalaeng', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37385, 'Amphoe Hat Yai', 219, 3319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37386, 'Amphoe Fak Tha', 219, 3315)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37387, 'Dusit', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37388, 'Amphoe Don Tum', 219, 3347)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37389, 'Amphoe Don Tan', 219, 3349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37390, 'Amphoe Don Chedi', 219, 3318)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37391, 'Amphoe Dok Kham Tai', 219, 3335)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37392, 'Amphoe Doembang Nangbuat', 219, 3318)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37393, 'Amphoe Det Udom', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37394, 'Amphoe Den Chai', 219, 3331)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37395, 'Amphoe Dan Sai', 219, 3352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37396, 'Amphoe Dan Khun Thot', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37397, 'Amphoe Damnoen Saduak', 219, 3298)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37398, 'Amphoe Chun', 219, 3335)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37399, 'Amphoe Chumsaeng', 219, 3344)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37400, 'Amphoe Chum Phuang', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37401, 'Amphoe Chumphon Buri', 219, 3317)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37402, 'Amphoe Chum Phae', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37403, 'Amphoe Chonnabot', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37404, 'Amphoe Chon Daen', 219, 3334)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37405, 'Amphoe Chom Phra', 219, 3317)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37406, 'Amphoe Chok Chai', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37407, 'Amphoe Chian Yai', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37408, 'Amphoe Chiang Yuen', 219, 3350)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37409, 'Amphoe Chiang Saen', 219, 3311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37410, 'Amphoe Chiang Khong', 219, 3311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37411, 'Amphoe Chiang Khan', 219, 3352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37412, 'Amphoe Chiang Kham', 219, 3335)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37413, 'Amphoe Cha-uat', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37414, 'Amphoe Chaturaphak Phiman', 219, 3328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37415, 'Amphoe Chanuman', 219, 3366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37416, 'Amphoe Chana', 219, 3319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37417, 'Amphoe Chakkarat', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37418, 'Amphoe Chaiyo', 219, 3362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37419, 'Amphoe Chai Badan', 219, 3351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37420, 'Amphoe Buntharik', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37421, 'Amphoe Mueang Bueng Kan', 219, 3369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37422, 'Amphoe Bua Yai', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37423, 'Amphoe Borabue', 219, 3350)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37424, 'Amphoe Ban Thaen', 219, 3358)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37425, 'Bang Khae', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37426, 'Amphoe Ban Sang', 219, 3364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37427, 'Amphoe Ban Phue', 219, 3363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37428, 'Amphoe Ban Phraek', 219, 3330)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37429, 'Amphoe Banphot Phisai', 219, 3344)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37430, 'Amphoe Ban Pho', 219, 3360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37431, 'Amphoe Ban Phai', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37432, 'Amphoe Ban Phaeo', 219, 3325)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37433, 'Amphoe Ban Phaeng', 219, 3346)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37434, 'Amphoe Bannang Sata', 219, 3314)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37435, 'Amphoe Ban Na', 219, 3348)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37436, 'Amphoe Ban Mo', 219, 3323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37437, 'Amphoe Ban Mi', 219, 3351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37438, 'Amphoe Ban Laem', 219, 3302)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37439, 'Amphoe Ban Kruat', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37440, 'Amphoe Ban Khwao', 219, 3358)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37441, 'Amphoe Ban Khai', 219, 3329)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37442, 'Amphoe Bang Yai', 219, 3339)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37443, 'Bang Sue', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37444, 'Amphoe Bang Sai', 219, 3330)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37445, 'Amphoe Bang Rakam', 219, 3332)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37446, 'Bang Rak', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37447, 'Amphoe Bang Rachan', 219, 3321)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37448, 'Amphoe Bang Pla Ma', 219, 3318)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37449, 'Amphoe Bang Phli', 219, 3326)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37450, 'Amphoe Bang Pakong', 219, 3360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37451, 'Amphoe Bang Pa-in', 219, 3330)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37452, 'Amphoe Bang Pahan', 219, 3330)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37453, 'Amphoe Bang Nam Priao', 219, 3360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37454, 'Amphoe Bang Mun Nak', 219, 3333)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37455, 'Amphoe Bang Len', 219, 3347)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37456, 'Bang Lamung District', 219, 3356)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37457, 'Amphoe Bang Kruai', 219, 3339)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37458, 'Amphoe Bang Krathum', 219, 3332)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37459, 'Bangkok Yai', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37460, 'Bangkok Noi', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37461, 'Bang Khun thain', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37462, 'Amphoe Bang Khla', 219, 3360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37463, 'Bang Khen', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37464, 'Bang Kapi', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37465, 'Amphoe Bang Bua Thong', 219, 3339)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37466, 'Amphoe Bang Bo', 219, 3326)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37467, 'Amphoe Bang Ban', 219, 3330)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37468, 'Amphoe Ban Dung', 219, 3363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37469, 'Don Mueang', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37470, 'Amphoe Khong Chiam', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37471, 'Amphoe Ban Bueng', 219, 3356)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37472, 'Amphoe Bamnet Narong', 219, 3358)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37473, 'Amphoe Ba Cho', 219, 3341)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37474, 'Amphoe At Samat', 219, 3328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37475, 'Amphoe Aranyaprathet', 219, 3368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37476, 'Amphoe Mueang Amnat Charoen', 219, 3366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37477, 'Amphoe Akat Amnuai', 219, 3327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37478, 'Amphoe Bo Rai', 219, 3316)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37479, 'Amphoe Ko Chang', 219, 3316)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37480, 'Yan na wa', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37481, 'Amphoe Singhanakhon', 219, 3319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37482, 'Ratchathewi', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37483, 'Din Daeng', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37484, 'Saphan Sung', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37485, 'Huai Khwang', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37486, 'Bueng Kum', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37487, 'Wang Thong Lang', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37488, 'Bang Phlat', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37489, 'Lat Phrao', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37490, 'Khan Na Yao', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37491, 'Khlong Sam Wa', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37492, 'Lak Si', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37493, 'Chatu Chak', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37494, 'Sai Mai', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37495, 'Thawi Watthana', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37496, 'Amphoe Phutthamonthon', 219, 3347)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37497, 'Amphoe Phra Samut Chedi', 219, 3326)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37498, 'Thung khru', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37499, 'Bang Na', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37500, 'Bang Kho laen', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37501, 'Sathon', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37502, 'Pra Wet', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37503, 'Vadhana', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37504, 'Suanluang', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37505, 'Amphoe Ao Luek', 219, 3307)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37506, 'Chom Thong', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37507, 'Amphoe Mueang Satun', 219, 3322)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37508, 'Amphoe Than To', 219, 3314)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37509, 'Amphoe Kabang', 219, 3314)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37510, 'Amphoe Sukhirin', 219, 3341)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37511, 'Amphoe Chanae', 219, 3341)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37512, 'Amphoe Cho-airong', 219, 3341)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37513, 'Amphoe Si Sakhon', 219, 3341)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37514, 'Amphoe Krong Pinang', 219, 3314)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37515, 'Bang Bon', 219, 3353)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37516, 'Amphoe Na Mom', 219, 3319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37517, 'Amphoe Bang Sao Thong', 219, 3326)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37518, 'Amphoe Mae Fa Luang', 219, 3311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37519, 'Amphoe Wiang Chiang Rung', 219, 3311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37520, 'Amphoe Doi Luang', 219, 3311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37521, 'Amphoe Wiang Kaen', 219, 3311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37522, 'Amphoe Khun Tan', 219, 3311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37523, 'Amphoe Phu Sang', 219, 3335)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37524, 'Amphoe Phaya Mengrai', 219, 3311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37525, 'Amphoe Chaloem Phra Kiat', 219, 3342)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37526, 'Amphoe Wiang Chai', 219, 3311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37527, 'Amphoe Mae On', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37528, 'Amphoe Mae Lao', 219, 3311)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37529, 'Amphoe Phanom Dong Rak', 219, 3317)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37530, 'Amphoe Bua Chet', 219, 3317)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37531, 'Amphoe Khlong Hoi Khong', 219, 3319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37532, 'Amphoe Khuan Don', 219, 3322)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37533, 'Amphoe Khuan Kalong', 219, 3322)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37534, 'Amphoe Chai Prakan', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37535, 'Amphoe Wiang Haeng', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37536, 'Amphoe Suk Samran', 219, 3299)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37537, 'Amphoe Ban Takhun', 219, 3296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37538, 'Amphoe Plai Phraya', 219, 3307)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37539, 'Amphoe Wiphawadi', 219, 3296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37540, 'Amphoe Phop Phra', 219, 3295)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37541, 'Amphoe Doi Tao', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37542, 'Amphoe Doi Lo', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37543, 'Amphoe Wiang Nong Long', 219, 3305)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37544, 'Amphoe Tham Phannara', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37545, 'Amphoe Bang Khan', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37546, 'Amphoe Lam Thap', 219, 3307)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37547, 'Amphoe Chai Buri', 219, 3296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37548, 'Amphoe Ban Na Doem', 219, 3296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37549, 'Amphoe Lamae', 219, 3310)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37550, 'Amphoe Thung Tako', 219, 3310)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37551, 'Amphoe Ban Kha', 219, 3298)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37552, 'Amphoe Dan Makham Tia', 219, 3308)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37553, 'Amphoe Suan Phueng', 219, 3298)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37554, 'Amphoe Nong Prue', 219, 3308)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37555, 'Amphoe Mae Poen', 219, 3344)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37556, 'Amphoe Khlong Lan', 219, 3309)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37557, 'Amphoe Pang Sila Thong', 219, 3309)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37558, 'Amphoe Kosamphi Nakhon', 219, 3309)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37559, 'Amphoe Wang Chao', 219, 3295)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37560, 'Amphoe Thung Hua Chang', 219, 3305)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37561, 'Amphoe Mae Wang', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37562, 'Amphoe Ban Thi', 219, 3305)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37563, 'Amphoe Tha Phae', 219, 3322)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37564, 'Amphoe Manang', 219, 3322)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37565, 'Amphoe Pa Phayom', 219, 3336)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37566, 'Amphoe Na Yong', 219, 3294)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37567, 'Amphoe Ratsada', 219, 3294)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37568, 'Amphoe Phra Phrom', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37569, 'Amphoe Chulabhorn', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37570, 'Amphoe Na Bon', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37571, 'Amphoe Chang Klang', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37572, 'Amphoe Phrom Khiri', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37573, 'Amphoe Nopphitam', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37574, 'Amphoe Phipun', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37575, 'Amphoe Don Sak', 219, 3296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37576, 'Amphoe Sam Roi Yot', 219, 3300)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37577, 'Amphoe Kaeng Krachan', 219, 3302)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37578, 'Amphoe Nong Ya Plong', 219, 3302)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37579, 'Amphoe Huai Krachao', 219, 3308)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37580, 'Amphoe Nong Yasai', 219, 3318)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37581, 'Amphoe Noen Kham', 219, 3359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37582, 'Amphoe Lao Khwan', 219, 3308)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37583, 'Amphoe Dan Chang', 219, 3318)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37584, 'Amphoe Nong Mamong', 219, 3359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37585, 'Amphoe Huai Khot', 219, 3293)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37586, 'Amphoe Lan Sak', 219, 3293)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37587, 'Amphoe Chum Ta Bong', 219, 3344)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37588, 'Amphoe Mae Wong', 219, 3344)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37589, 'Amphoe Sai Thong Watthana', 219, 3309)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37590, 'Amphoe Bueng Samakkhi', 219, 3309)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37591, 'Amphoe Lan Krabue', 219, 3309)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37592, 'Amphoe Si Nakhon', 219, 3297)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37593, 'Amphoe Mae Mo', 219, 3306)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37594, 'Amphoe Phu Kam Yao', 219, 3335)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37595, 'Amphoe Khuan Niang', 219, 3319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37596, 'Amphoe Bang Klam', 219, 3319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37597, 'Amphoe Tamot', 219, 3336)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37598, 'Amphoe Bang Kaeo', 219, 3336)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37599, 'Amphoe Pa Bon', 219, 3336)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37600, 'Amphoe Chaloem Phra Kiat', 219, 3343)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37601, 'Amphoe Tak Fa', 219, 3344)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37602, 'Amphoe Kao Liao', 219, 3344)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37603, 'Amphoe Bueng Na Rang', 219, 3333)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37604, 'Amphoe Sak Lek', 219, 3333)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37605, 'Amphoe Wachira Barami', 219, 3333)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37606, 'Amphoe Thong Saen Khan', 219, 3315)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37607, 'Amphoe Nong Muang Khai', 219, 3331)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37608, 'Amphoe Ban Luang', 219, 3342)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37609, 'Amphoe Chaloem Phra Kiat', 219, 3323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37610, 'Amphoe Nong Don', 219, 3323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37611, 'Amphoe Don Phut', 219, 3323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37612, 'Amphoe Khok Charoen', 219, 3351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37613, 'Amphoe Sa Bot', 219, 3351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37614, 'Amphoe Nong Muang', 219, 3351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37615, 'Amphoe Wang Pong', 219, 3334)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37616, 'Amphoe Thap Khlo', 219, 3333)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37617, 'Amphoe Noen Maprang', 219, 3332)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37618, 'Amphoe Chat Trakan', 219, 3332)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37619, 'Amphoe Na Muen', 219, 3342)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37620, 'Amphoe Santi Suk', 219, 3342)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37621, 'Amphoe Phu Phiang', 219, 3342)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37622, 'Amphoe Chiang Klang', 219, 3342)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37623, 'Amphoe Song Khwae', 219, 3342)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37624, 'Amphoe Ban Chang', 219, 3329)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37625, 'Amphoe Pluak Daeng', 219, 3329)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37626, 'Amphoe Nikhom Phattana', 219, 3329)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37627, 'Amphoe Bo Thong', 219, 3356)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37628, 'Amphoe Ko Chan', 219, 3356)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37629, 'Amphoe Nong Yai', 219, 3356)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37630, 'Amphoe Si Mahosot', 219, 3364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37631, 'Amphoe Ratchasan', 219, 3360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37632, 'Amphoe Plaeng Yao', 219, 3360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37633, 'Amphoe Khlong Khuean', 219, 3360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37634, 'Amphoe Muak Lek', 219, 3323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37635, 'Amphoe Wang Muang', 219, 3323)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37636, 'Amphoe Thep Sathit', 219, 3358)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37637, 'Amphoe Lam Sonthi', 219, 3351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37638, 'Amphoe Tha Luang', 219, 3351)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37639, 'Amphoe Phakdi Chumphon', 219, 3358)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37640, 'Amphoe Bueng Sam Phan', 219, 3334)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37641, 'Amphoe Na Haeo', 219, 3352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37642, 'Amphoe Ban Khok', 219, 3315)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37643, 'Amphoe Kapho', 219, 3337)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37644, 'Amphoe Na Yai Am', 219, 3357)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37645, 'Amphoe Wang Chan', 219, 3329)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37646, 'Amphoe Khao Chamao', 219, 3329)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37647, 'Amphoe Kaeng Hang Maeo', 219, 3357)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37648, 'Amphoe Tha Takiap', 219, 3360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37649, 'Amphoe Wang Nam Khiao', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37650, 'Amphoe Na Di', 219, 3364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37651, 'Amphoe Nong Bua Rawe', 219, 3358)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37652, 'Amphoe Sap Yai', 219, 3358)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37653, 'Amphoe Phu Pha Man', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37654, 'Amphoe Nam Nao', 219, 3334)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37655, 'Amphoe Na Duang', 219, 3352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37656, 'Amphoe Nong Hin', 219, 3352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37657, 'Amphoe Phu Luang', 219, 3352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37658, 'Amphoe Khao Khitchakut', 219, 3357)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37659, 'Amphoe Soi Dao', 219, 3357)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37660, 'Amphoe Wang Nam Yen', 219, 3368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37661, 'Amphoe Wang Sombun', 219, 3368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37662, 'Amphoe Khao Chakan', 219, 3368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37663, 'Amphoe Soeng Sang', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37664, 'Amphoe Nong Bun Mak', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37665, 'Amphoe Chaloem Phra Kiat', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37666, 'Amphoe Waeng Noi', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37667, 'Amphoe Kaeng Sanam Nang', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37668, 'Amphoe Ban Lueam', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37669, 'Amphoe Noen Sa-nga', 219, 3358)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37670, 'Amphoe Khok Pho Chai', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37671, 'Amphoe Nong Na Kham', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37672, 'Amphoe Si Chom Phu', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37673, 'Amphoe Pha Khao', 219, 3352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37674, 'Amphoe Erawan', 219, 3352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37675, 'Amphoe Na Wang', 219, 3367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37676, 'Amphoe Pho Tak', 219, 3340)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37677, 'Amphoe Suwannakhuha', 219, 3367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37678, 'Amphoe Na Yung', 219, 3363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37679, 'Amphoe Khok Sung', 219, 3368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37680, 'Amphoe Non Din Daeng', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37681, 'Amphoe Pa Kham', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37682, 'Amphoe Chamni', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37683, 'Amphoe Chaloem Phra Kiat', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37684, 'Amphoe Nong Ki', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37685, 'Amphoe Non Suwan', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37686, 'Amphoe Nong Hong', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37687, 'Amphoe Lam Thamen Chai', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37688, 'Amphoe Mueang Yang', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37689, 'Amphoe Pueai Noi', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37690, 'Amphoe Na Pho', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37691, 'Amphoe Ban Mai Chaiyaphot', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37692, 'Amphoe Waeng Yai', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37693, 'Amphoe Non Sila', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37694, 'Amphoe Ban Haet', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37695, 'Amphoe Kut Rang', 219, 3350)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37696, 'Amphoe Phra Yuen', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37697, 'Amphoe Ban Fang', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37698, 'Amphoe Non Sa-at', 219, 3363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37699, 'Amphoe Khao Suan Kwang', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37700, 'Amphoe Ubolratana', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37701, 'Amphoe Prachak Sinlapakhom', 219, 3363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37702, 'Amphoe Nong Saeng', 219, 3363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37703, 'Amphoe Nong Wua So', 219, 3363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37704, 'Amphoe Sa Khrai', 219, 3340)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37705, 'Amphoe Phlapphla Chai', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37706, 'Amphoe Huai Rat', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37707, 'Amphoe Ban Dan', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37708, 'Amphoe Khu Mueang', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37709, 'Amphoe Si Somdet', 219, 3328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37710, 'Amphoe Yang Si Surat', 219, 3350)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37711, 'Amphoe Na Dun', 219, 3350)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37712, 'Amphoe Khong Chai', 219, 3355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37713, 'Amphoe Kae Dam', 219, 3350)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37714, 'Amphoe Wang Sam Mo', 219, 3363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37715, 'Amphoe Nong Kung Si', 219, 3355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37716, 'Amphoe Huai Mek', 219, 3355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37717, 'Amphoe Chuen Chom', 219, 3350)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37718, 'Amphoe Sam Sung', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37719, 'Amphoe Si That', 219, 3363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37720, 'Amphoe Thung Fon', 219, 3363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37721, 'Amphoe Ku Kaeo', 219, 3363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37722, 'Amphoe Chai Wan', 219, 3363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37723, 'Amphoe Phibun Rak', 219, 3363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37724, 'Amphoe Pak Khat', 219, 3369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37725, 'Amphoe So Phisai', 219, 3369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37726, 'Amphoe Fao Rai', 219, 3340)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37727, 'Amphoe Rattanawapi', 219, 3340)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37728, 'Amphoe Si Narong', 219, 3317)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37729, 'Amphoe Lamduan', 219, 3317)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37730, 'Amphoe Phon Sai', 219, 3328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37731, 'Amphoe Non Narai', 219, 3317)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37732, 'Amphoe Khwao Sinarin', 219, 3317)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37733, 'Amphoe Thung Khao Luang', 219, 3328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37734, 'Amphoe Nong Hi', 219, 3328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37735, 'Amphoe Pho Chai', 219, 3328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37736, 'Amphoe Chiang Khwan', 219, 3328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37737, 'Amphoe Changhan', 219, 3328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37738, 'Amphoe Rong Kham', 219, 3355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37739, 'Amphoe Don Chan', 219, 3355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37740, 'Amphoe Phu Phan', 219, 3327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37741, 'Amphoe Huai Phueng', 219, 3355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37742, 'Amphoe Nikhom Nam Un', 219, 3327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37743, 'Amphoe Kham Ta Kla', 219, 3327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37744, 'Amphoe Charoen Sin', 219, 3327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37745, 'Amphoe Bung Khla', 219, 3369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37746, 'Amphoe Si Wilai', 219, 3369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37747, 'Amphoe Phayu', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37748, 'Amphoe Si Rattana', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37749, 'Amphoe Phrai Bueng', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37750, 'Amphoe Phu Sing', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37751, 'Amphoe Wang Hin', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37752, 'Amphoe Huai Thap Than', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37753, 'Amphoe Mueang Chan', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37754, 'Amphoe Pho Si Suwan', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37755, 'Amphoe Bueng Bun', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37756, 'Amphoe Sila Lat', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37757, 'Amphoe Pa Tio', 219, 3313)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37758, 'Amphoe Hua Taphan', 219, 3366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37759, 'Amphoe Nong Sung', 219, 3349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37760, 'Amphoe Thai Charoen', 219, 3313)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37761, 'Amphoe Moeiwadi', 219, 3328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37762, 'Amphoe Khao Wong', 219, 3355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37763, 'Amphoe Tao Ngoi', 219, 3327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37764, 'Amphoe Na Khu', 219, 3355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37765, 'Amphoe Phon Sawan', 219, 3346)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37766, 'Amphoe Phon Na Kaeo', 219, 3327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37767, 'Amphoe Khok Si Suphan', 219, 3327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37768, 'Amphoe Wangyang', 219, 3346)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37769, 'Amphoe Bueng Khong Long', 219, 3369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37770, 'Amphoe Na Thom', 219, 3346)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37771, 'Amphoe Thung Si Udom', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37772, 'Amphoe Nam Khun', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37773, 'Amphoe Non Khun', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37774, 'Amphoe Benchalak', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37775, 'Amphoe Nam Kliang', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37776, 'Amphoe Lao Suea Kok', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37777, 'Amphoe Samrong', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37778, 'Amphoe Pathum Ratchawongsa', 219, 3366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37779, 'Amphoe Kut Khaopun', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37780, 'Amphoe Lue Amnat', 219, 3366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37781, 'Amphoe Senangkhanikhom', 219, 3366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37782, 'Amphoe Nikhom Kham Soi', 219, 3349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37783, 'Amphoe Dong Luang', 219, 3349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37784, 'Amphoe Renu Nakhon', 219, 3346)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37785, 'Amphoe Sawang Wirawong', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37786, 'Amphoe Na Yia', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37787, 'Amphoe Don Mot Daeng', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37788, 'Amphoe Tan Sum', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37789, 'Amphoe Pho Sai', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37790, 'Amphoe Na Tan', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37791, 'Amphoe Thepharak', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37792, 'Amphoe Khao Kho', 219, 3334)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37793, 'Amphoe Khao Phanom', 219, 3307)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37794, 'Amphoe Nuea Khlong', 219, 3307)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37795, 'Amphoe Wiang Sa', 219, 3296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37796, 'Amphoe Phra Thong Kham', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37797, 'Amphoe Srinagarindra', 219, 3336)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37798, 'Amphoe Kong Ra', 219, 3336)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37799, 'Amphoe Wiang Kao', 219, 3354)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37800, 'Amphoe Khaen Dong', 219, 3361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37801, 'Amphoe Soem Ngam', 219, 3306)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37802, 'Amphoe Na Mon', 219, 3355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37803, 'Amphoe Sirindhorn', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37804, 'Amphoe Kham Muang', 219, 3355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37805, 'Amphoe Sida', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37806, 'Amphoe Khian Sa', 219, 3296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37807, 'Amphoe Sam Chai', 219, 3355)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37808, 'Amphoe Si Banphot', 219, 3336)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37809, 'Amphoe Dong Charoen', 219, 3333)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37810, 'Amphoe Wang Sai Phun', 219, 3333)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37811, 'Amphoe Bo Kluea', 219, 3342)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37812, 'Amphoe Mueang Pan', 219, 3306)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37813, 'Amphoe Galyani Vadhana', 219, 3312)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37814, 'Amphoe Ko Kut', 219, 3316)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37815, 'Amphoe Ko Pha-ngan', 219, 3296)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37816, 'Amphoe Hat Samran', 219, 3294)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37817, 'Amphoe Krasae Sin', 219, 3319)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37818, 'Amphoe Wan Yai', 219, 3349)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37819, 'Amphoe Khlong Hat', 219, 3368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37820, 'Amphoe Chiang Muan', 219, 3335)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37821, 'Amphoe Chatturat', 219, 3358)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37822, 'Amphoe Phon Charoen', 219, 3369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37823, 'Amphoe Pang Mapha', 219, 3304)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37824, 'Amphoe Thung Yang Daeng', 219, 3337)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37825, 'Amphoe Mae Lan', 219, 3337)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37826, 'Amphoe Si Thep', 219, 3334)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37827, 'Amphoe Phu Ruea', 219, 3352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37828, 'Amphoe Mai Kaen', 219, 3337)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37829, 'Amphoe Pak Chom', 219, 3352)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37830, 'Amphoe Kham Sakae Saeng', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37831, 'Amphoe Nam Som', 219, 3363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37832, 'Amphoe Non Daeng', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37833, 'Amphoe Kut Chap', 219, 3363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37834, 'Amphoe Song Dao', 219, 3327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37835, 'Amphoe Sanom', 219, 3317)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37836, 'Amphoe Phang Khon', 219, 3327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37837, 'Amphoe Kho Wang', 219, 3313)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37838, 'Amphoe Yang Chum Noi', 219, 3320)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37839, 'Amphoe Sai Mun', 219, 3313)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37840, 'Amphoe Pho Prathap Chang', 219, 3333)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37841, 'Amphoe Na Chaluai', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37842, 'Amphoe Betong', 219, 3314)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37843, 'Amphoe Mae La Noi', 219, 3304)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37844, 'Amphoe Sai Ngam', 219, 3309)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37845, 'Amphoe Sang Khom', 219, 3363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37846, 'Amphoe Mueang Suang', 219, 3328)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37847, 'Amphoe Ban Muang', 219, 3327)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37848, 'Amphoe Na Wa', 219, 3346)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37849, 'Amphoe Bang Saphan Noi', 219, 3300)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37850, 'Amphoe Bua Lai', 219, 3345)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37851, 'Amphoe Khai Bang Rachan', 219, 3321)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37852, 'Amphoe Bang Sai', 219, 3330)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37853, 'Amphoe Takua Pa', 219, 3303)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37854, 'Amphoe Khura Buri', 219, 3303)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37855, 'Amphoe Nam Yuen', 219, 3365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37856, 'Amphoe Sikao', 219, 3294)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37857, 'Tursunzoda District', 220, 3373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37858, 'Zheleznodorozhnyy Rayon', 220, 3374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37859, 'Yavanskiy Rayon', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37860, 'Vanchskiy Rayon', 220, 3371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37861, 'Tsentral’nyy Rayon', 220, 3374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37862, 'Sovetskiy Rayon', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37863, 'Pendzhikentskiy Rayon', 220, 3370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37864, 'Vahdat District', 220, 3373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37865, 'Oktyabr’skiy Rayon', 220, 3374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37866, 'Rudaki District', 220, 3373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37867, 'Muminobodskiy Rayon', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37868, 'Nurobod District', 220, 3373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37869, 'Bokhtarskiy Rayon', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37870, 'Khovalingskiy Rayon', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37871, 'Darvozskiy Rayon', 220, 3371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37872, 'Gozimalikskiy Rayon', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37873, 'Dushanbe', 220, 3374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37874, 'Ayninskiy Rayon', 220, 3370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37875, 'Nohiyai Zafarobod', 220, 3370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37876, 'Khodzhentskiy Rayon', 220, 3370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37877, 'Tojikobod District', 220, 3373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37878, 'Kuhistoni Mastchohskiy', 220, 3370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37879, 'Shahrinaw District', 220, 3373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37880, 'Rogunsky rayon', 220, 3373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37881, 'Varzob District', 220, 3373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37882, 'Tavildara', 220, 3373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37883, 'Shuro-obod District', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37884, 'Shahriston District', 220, 3370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37885, 'Roshtqal''a District', 220, 3371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37886, 'Norak', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37887, 'Qumsangir District', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37888, 'Nohiyai Mastchoh', 220, 3370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37889, 'Nohiyai Bobojon Ghafurov', 220, 3370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37890, 'Nohiyai Asht', 220, 3370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37891, 'Nohiyai Konibodom', 220, 3370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37892, 'Nohiyai Isfara', 220, 3370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37893, 'Nohiyai Jabbor Rasulov', 220, 3370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37894, 'Nohiyai Spitamen', 220, 3370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37895, 'Istaravshan District', 220, 3370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37896, 'Nohiyai Ghonchí', 220, 3370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37897, 'Nohiyai Ayni', 220, 3370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37898, 'Nohiyai Panjakent', 220, 3370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37899, 'Nohiyai Vanj', 220, 3371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37900, 'Nohiyai Darvoz', 220, 3371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37901, 'Nohiyai Ishqoshim', 220, 3371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37902, 'Nohiyai Murghob', 220, 3371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37903, 'Nohiyai Rŭshon', 220, 3371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37904, 'Nohiyai Shughnon', 220, 3371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37905, 'Nohiyai Abdurahmoni Jomí', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37906, 'Nohiyai Baljuvon', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37907, 'Nohiyai Kushoniyon', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37908, 'Nohiyai Vakhsh', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37909, 'Nohiyai Vose’', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37910, 'Nohiyai Danghara', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37911, 'Nohiyai Yovon', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37912, 'Nohiyai Kolkhozobod', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37913, 'Nohiyai Qubodiyon', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37914, 'Nohiyai Kŭlob', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37915, 'Nohiyai Mŭ’minobod', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37916, 'Nohiyai Nosiri Khusrav', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37917, 'Nohiyai Panj', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37918, 'Nohiyai Sarband', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37919, 'Nohiyai Temurmalik', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37920, 'Nohiyai Farkhor', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37921, 'Nohiyai Khovaling', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37922, 'Nohiyai Khuroson', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37923, 'Nohiyai Hamadoní', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37924, 'Nohiyai Jilikŭl', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37925, 'Nohiyai Shahritus', 220, 3372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37926, 'Nohiyai Rasht', 220, 3373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37927, 'Nohiyai Hisor', 220, 3373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37928, 'Jirgatol', 220, 3373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37929, 'Nohiyai Rūdakí', 220, 3373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37930, 'Faizobod District', 220, 3373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37931, 'Fatululik', 222, 3383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37932, 'Vera Cruz', 222, 3385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37933, 'Laulara', 222, 3390)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37934, 'Aileu Villa', 222, 3390)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37935, 'Maubisse', 222, 3389)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37936, 'Hatobuilico', 222, 3389)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37937, 'Ainaro', 222, 3389)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37938, 'Cristo Rei', 222, 3385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37939, 'Maliana', 222, 3386)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37940, 'Dom Aleixo', 222, 3385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37941, 'Atabae', 222, 3386)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37942, 'Balibo', 222, 3386)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37943, 'Bobonaro', 222, 3386)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37944, 'Cailaco', 222, 3386)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37945, 'Lolotoe', 222, 3386)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37946, 'Zumalai', 222, 3383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37947, 'Liquiçá', 222, 3381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37948, 'Maubara', 222, 3381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37949, 'Atsabe', 222, 3384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37950, 'Barique', 222, 3380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37951, 'Lequidoe', 222, 3390)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37952, 'Remexio', 222, 3390)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37953, 'Hato-Udo', 222, 3389)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37954, 'Baucau', 222, 3387)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37955, 'Baguia', 222, 3387)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37956, 'Laga', 222, 3387)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37957, 'Quelicai', 222, 3387)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37958, 'Vemasse', 222, 3387)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37959, 'Venilale', 222, 3387)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37960, 'Railaco', 222, 3384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37961, 'Lautem', 222, 3382)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37962, 'Iliomar', 222, 3382)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37963, 'Bazartete', 222, 3381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37964, 'Ermera Villa', 222, 3384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37965, 'Manatuto', 222, 3380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37966, 'Laclubar', 222, 3380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37967, 'Alas', 222, 3379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37968, 'Tutuala', 222, 3382)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37969, 'Ossu', 222, 3378)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37970, 'Laleia', 222, 3380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37971, 'Same', 222, 3379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37972, 'Suai', 222, 3383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37973, 'Lacluta', 222, 3378)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37974, 'Letefoho', 222, 3384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37975, 'Soibada', 222, 3380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37976, 'Fatumean', 222, 3383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37977, 'Nitibe', 222, 3388)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37978, 'Passabe', 222, 3388)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37979, 'Oesilo', 222, 3388)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37980, 'Hatulia', 222, 3384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37981, 'Laclo', 222, 3380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37982, 'Maucatar', 222, 3383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37983, 'Tilomar', 222, 3383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37984, 'Atauro Island', 222, 3385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37985, 'Metinaro', 222, 3385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37986, 'Lospalos', 222, 3382)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37987, 'Luro', 222, 3382)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37988, 'Fatuberliu', 222, 3379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37989, 'Turiscai', 222, 3379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37990, 'Pante Makasar', 222, 3388)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37991, 'Viqueque', 222, 3378)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37992, 'Uatolari', 222, 3378)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37993, 'Uatocarabau', 222, 3378)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37994, 'Nain Feto', 222, 3385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37995, 'Fohorem', 222, 3383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37996, 'Tagtabazar Etrap', 223, 3395)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37997, 'Guşgy Etrap', 223, 3395)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37998, 'Baharly District', 223, 3392)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (37999, 'Akdepe District', 223, 3394)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38000, 'Zaghouan', 224, 3397)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38001, 'Délégation de la Médina', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38002, 'Tozeur', 224, 3399)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38003, 'Tataouine Nord', 224, 3400)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38004, 'Testour', 224, 3413)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38005, 'Thala', 224, 3416)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38006, 'Tajerouine', 224, 3419)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38007, 'Teboursouk', 224, 3413)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38008, 'Tebourba', 224, 3420)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38009, 'Tabarka', 224, 3410)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38010, 'Sousse Médina', 224, 3401)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38011, 'Soliman', 224, 3408)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38012, 'Sbeitla', 224, 3416)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38013, 'Sbikha', 224, 3415)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38014, 'Siliana Sud', 224, 3402)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38015, 'Bouhajla', 224, 3415)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38016, 'Sidi Bouzid Ouest', 224, 3403)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38017, 'Nasrallah', 224, 3415)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38018, 'Chorbane', 224, 3418)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38019, 'Souassi', 224, 3418)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38020, 'Sakiet Sidi Youssef', 224, 3419)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38021, 'Sfax Ville', 224, 3404)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38022, 'Mu‘tamadīyat ar Rudayyif', 224, 3406)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38023, 'Regueb', 224, 3403)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38024, 'Mu‘tamadīyat Ra’s al Jabal', 224, 3412)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38025, 'Remada', 224, 3400)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38026, 'Ksour Essaf', 224, 3418)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38027, 'Grombalia', 224, 3408)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38028, 'Korba', 224, 3408)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38029, 'Mu‘tamadīyat Qulaybīyah', 224, 3408)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38030, 'Délégation de Kébili Sud', 224, 3405)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38031, 'El Guetar', 224, 3406)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38032, 'Kerkennah', 224, 3404)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38033, 'El Fahs', 224, 3397)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38034, 'Kalaa Kebira', 224, 3401)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38035, 'Gaafour', 224, 3402)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38036, 'Délégation de Gabès Ville', 224, 3407)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38037, 'Nefta', 224, 3399)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38038, 'Mu‘tamadīyat an Nafīḑah', 224, 3401)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38039, 'Nabeul', 224, 3408)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38040, 'Moknine', 224, 3417)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38041, 'Meknassy', 224, 3403)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38042, 'Metlaoui', 224, 3406)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38043, 'Mezzouna', 224, 3403)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38044, 'Matmata', 224, 3407)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38045, 'Mateur', 224, 3412)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38046, 'Délégation de M’saken', 224, 3401)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38047, 'Mareth', 224, 3407)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38048, 'Menzel Temime', 224, 3408)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38049, 'Mu‘tamadīyat Manzil Bū Ruqaybah', 224, 3412)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38050, 'Menzel Chaker', 224, 3404)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38051, 'Mu‘tamadīyat Manūbah', 224, 3420)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38052, 'Mu‘tamadīyat Makthar', 224, 3402)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38053, 'Medjez El Bab', 224, 3413)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38054, 'Délégation de Médenine Sud', 224, 3409)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38055, 'Jendouba', 224, 3410)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38056, 'Zarzis', 224, 3409)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38057, 'Jemmal', 224, 3417)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38058, 'Djebeniana', 224, 3404)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38059, 'Mu‘tamadīyat Ḩawmat as Sūq', 224, 3409)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38060, 'Hammam Lif', 224, 3411)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38061, 'El Hamma', 224, 3407)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38062, 'Hajeb El Ayoun', 224, 3415)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38063, 'Haffouz', 224, 3415)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38064, 'Ghomrassen', 224, 3400)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38065, 'Ghardimaou', 224, 3410)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38066, 'Feriana', 224, 3416)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38067, 'Bou Arada', 224, 3402)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38068, 'Bir Ali Ben Khalifa', 224, 3404)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38069, 'Bizerte Sud', 224, 3412)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38070, 'Délégation de Béja Nord', 224, 3413)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38071, 'Ain Draham', 224, 3410)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38072, 'Amdoun', 224, 3413)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38073, 'Oueslatia', 224, 3415)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38074, 'Kairouan Sud', 224, 3415)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38075, 'Kasserine Sud', 224, 3416)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38076, 'Monastir', 224, 3417)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38077, 'Metouia', 224, 3407)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38078, 'Mu‘tamadīyat al Maḩras', 224, 3404)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38079, 'Mahdia', 224, 3418)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38080, 'Kef Est', 224, 3419)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38081, 'El Jem', 224, 3418)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38082, 'Nefza', 224, 3413)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38083, 'Hammamet', 224, 3408)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38084, 'El Ksour', 224, 3419)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38085, 'Balta Bou Aouane', 224, 3410)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38086, 'Bou Salem', 224, 3410)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38087, 'Jendouba Nord', 224, 3410)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38088, 'Oued Meliz', 224, 3410)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38089, 'Beni Khedeche', 224, 3409)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38090, 'Medenine Nord', 224, 3409)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38091, 'Sidi Makhlouf', 224, 3409)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38092, 'Ben Guerdane', 224, 3409)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38093, 'Djedliane', 224, 3416)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38094, 'Ayoun', 224, 3416)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38095, 'Sbiba', 224, 3416)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38096, 'Hidra', 224, 3416)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38097, 'Foussana', 224, 3416)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38098, 'Chebba', 224, 3418)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38099, 'Sijoumi', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38100, 'Sidi Hassine', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38101, 'Nadhour', 224, 3397)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38102, 'Sejnane', 224, 3412)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38103, 'Joumine', 224, 3412)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38104, 'Ghazala', 224, 3412)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38105, 'Beja Sud', 224, 3413)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38106, 'Goubellat', 224, 3413)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38107, 'Fernana', 224, 3410)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38108, 'Kef Quest', 224, 3419)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38109, 'Es Sers', 224, 3419)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38110, 'Nebeur', 224, 3419)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38111, 'Elkrib', 224, 3402)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38112, 'Bourouis', 224, 3402)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38113, 'Siliana Nord', 224, 3402)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38114, 'Raoued', 224, 3414)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38115, 'Jerba Midoun', 224, 3409)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38116, 'Jerba Ajim', 224, 3409)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38117, 'Menzel Habib', 224, 3407)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38118, 'El Haouaria', 224, 3408)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38119, 'Hammam El Guezaz', 224, 3408)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38120, 'Takelsa', 224, 3408)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38121, 'El Mida', 224, 3408)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38122, 'Menzel Bouzelfa', 224, 3408)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38123, 'Bou Argoub', 224, 3408)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38124, 'Dar Chaabane El Fehri', 224, 3408)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38125, 'Beni Khalled', 224, 3408)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38126, 'Beni Khiar', 224, 3408)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38127, 'Bouficha', 224, 3401)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38128, 'Ksibet El Mediouni', 224, 3417)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38129, 'Hergla', 224, 3401)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38130, 'Sidi Bou Ali', 224, 3401)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38131, 'Kondar', 224, 3401)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38132, 'Sidi El Hani', 224, 3401)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38133, 'Akouda', 224, 3401)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38134, 'Kalaa Sghira', 224, 3401)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38135, 'Hammam Sousse', 224, 3401)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38136, 'Sousse Jawhara', 224, 3401)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38137, 'Sousse Sidi Abdelhamid', 224, 3401)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38138, 'Sousse Riadh', 224, 3401)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38139, 'Zaouia-Ksiba-Thrayet', 224, 3401)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38140, 'Bekalta', 224, 3417)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38141, 'Délégation de Téboulba', 224, 3417)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38142, 'Sayada Lamta Bouhjar', 224, 3417)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38143, 'Sfax Ouest', 224, 3404)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38144, 'Thyna', 224, 3404)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38145, 'Sfax Sud', 224, 3404)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38146, 'Sakiet Ezzit', 224, 3404)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38147, 'Sakiet Eddaier', 224, 3404)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38148, 'Ksar Helal', 224, 3417)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38149, 'Sahline', 224, 3417)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38150, 'Ouerdanine', 224, 3417)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38151, 'Bembla', 224, 3417)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38152, 'Zeramdine', 224, 3417)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38153, 'Beni Hassen', 224, 3417)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38154, 'Ouled Chamekh', 224, 3418)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38155, 'Délégation de Bou Merdès', 224, 3418)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38156, 'Hbira', 224, 3418)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38157, 'Sidi Alouane', 224, 3418)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38158, 'Melloulech', 224, 3418)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38159, 'El Amra', 224, 3404)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38160, 'El Hencha', 224, 3404)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38161, 'Agareb', 224, 3404)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38162, 'Ghraiba', 224, 3404)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38163, 'Skhira', 224, 3404)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38164, 'Nouvelle Matmata', 224, 3407)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38165, 'Ghannouch', 224, 3407)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38166, 'Smar', 224, 3400)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38167, 'Bir Lahmar', 224, 3400)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38168, 'Tataouine Sud', 224, 3400)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38169, 'Dhehiba', 224, 3400)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38170, 'Délégation de Kébili Nord', 224, 3405)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38171, 'El Faouar', 224, 3405)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38172, 'Souk Lahad', 224, 3405)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38173, 'Douz Sud', 224, 3405)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38174, 'Hazoua', 224, 3399)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38175, 'Degache', 224, 3399)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38176, 'Tamaghza', 224, 3399)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38177, 'Mdhila', 224, 3406)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38178, 'Délégation d’ Om El Araïes', 224, 3406)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38179, 'El Ksar', 224, 3406)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38180, 'Belkhir', 224, 3406)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38181, 'Sned', 224, 3406)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38182, 'Gafsa Nord', 224, 3406)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38183, 'Délégation de Sidi Aïch', 224, 3406)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38184, 'Menzel Bouzaiene', 224, 3403)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38185, 'Sidi Ali Ben Aoun', 224, 3403)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38186, 'Bir El Hafey', 224, 3403)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38187, 'Souk Jedid', 224, 3403)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38188, 'Ouled Haffouz', 224, 3403)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38189, 'Sidi Bouzid Est', 224, 3403)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38190, 'Jelma', 224, 3403)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38191, 'Cebalet Ouled Asker', 224, 3403)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38192, 'Ezzouhour', 224, 3416)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38193, 'Kasserine Nord', 224, 3416)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38194, 'Délégation de Mejel Bel Abbès', 224, 3416)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38195, 'Hassi El Ferid', 224, 3416)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38196, 'El Ala', 224, 3415)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38197, 'Kairouan Nord', 224, 3415)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38198, 'Cherarda', 224, 3415)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38199, 'Chebika', 224, 3415)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38200, 'Dahmani', 224, 3419)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38201, 'Jerissa', 224, 3419)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38202, 'Kalaa Khasba', 224, 3419)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38203, 'Kalaat Senan', 224, 3419)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38204, 'El Aroussa', 224, 3402)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38205, 'Bargou', 224, 3402)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38206, 'Kesra', 224, 3402)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38207, 'Rouhia', 224, 3402)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38208, 'Tibar', 224, 3413)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38209, 'Bir Mcherga', 224, 3397)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38210, 'Zriba', 224, 3397)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38211, 'Saouaf', 224, 3397)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38212, 'Tinja', 224, 3412)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38213, 'Utique', 224, 3412)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38214, 'Bizerte Nord', 224, 3412)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38215, 'Zarzouna', 224, 3412)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38216, 'Menzel Jemil', 224, 3412)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38217, 'El Alia', 224, 3412)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38218, 'Ghar El Melh', 224, 3412)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38219, 'El Battane', 224, 3420)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38220, 'Borj El Amri', 224, 3420)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38221, 'Mornaguia', 224, 3420)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38222, 'Douar Hicher', 224, 3420)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38223, 'Oued Ellil', 224, 3420)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38224, 'Délégation de Jedaïda', 224, 3420)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38225, 'Mornag', 224, 3411)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38226, 'Hammam Chott', 224, 3411)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38227, 'Délégation de Radès', 224, 3411)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38228, 'Ezzahra', 224, 3411)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38229, 'Mohamedia', 224, 3411)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38230, 'Fouchana', 224, 3411)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38231, 'El Mourouj', 224, 3411)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38232, 'Délégation de la Nouvelle Médina', 224, 3411)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38233, 'Délégation de Mégrine', 224, 3411)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38234, 'Bou Mhel El Bassatine', 224, 3411)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38235, 'Ariana Ville', 224, 3414)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38236, 'Soukra', 224, 3414)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38237, 'Délégation de Cité Ettadhamen', 224, 3414)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38238, 'El Mnihla', 224, 3414)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38239, 'Sidi Thabet', 224, 3414)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38240, 'Kalaat El Andalous', 224, 3414)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38241, 'El Hrairia', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38242, 'El Kabaria', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38243, 'Jebel Jelloud', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38244, 'El Ouardia', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38245, 'Délégation de Sidi El Béchir', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38246, 'Bab Souika', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38247, 'Ezzouhour', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38248, 'Le Bardo', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38249, 'Ettahrir', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38250, 'Délégation d’El Omrane Supérieur', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38251, 'El Omrane', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38252, 'El Menzah', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38253, 'Bab El Bhar', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38254, 'Délégation de Cité El Khadra', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38255, 'La Goulette', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38256, 'Le Kram', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38257, 'Carthage', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38258, 'La Marsa', 224, 3398)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38259, 'Délégation de Gabès Ouest', 224, 3407)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38260, 'Délégation de Gabès Sud', 224, 3407)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38261, 'Gafsa Sud', 224, 3406)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38262, 'Ben Arous', 224, 3411)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38263, 'Douz Nord', 224, 3405)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38264, 'Niuatoputapu', 225, 3425)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38265, 'Niuafo''ou', 225, 3425)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38266, '''Eua fo''ou', 225, 3424)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38267, '''Eua Prope', 225, 3424)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38268, 'Foa', 225, 3423)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38269, 'Ha''ano', 225, 3423)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38270, 'Hahake', 225, 3421)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38271, 'Hihifo', 225, 3421)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38272, 'Kolofo''ou', 225, 3422)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38273, 'Kolomotu''a', 225, 3422)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38274, 'Kolovai', 225, 3422)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38275, 'Lapaha', 225, 3422)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38276, 'Leimatu''a', 225, 3421)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38277, 'Lulunga', 225, 3423)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38278, 'Motu', 225, 3421)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38279, 'Mu''omu''a', 225, 3423)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38280, 'Neiafu', 225, 3421)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38281, 'Nukunuku', 225, 3422)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38282, 'Pangai', 225, 3423)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38283, 'Pangaimotu', 225, 3421)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38284, 'Tatakamotonga', 225, 3422)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38285, '''Uiha', 225, 3423)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38286, 'Vaini', 225, 3422)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38287, 'Karkamış İlçesi', 226, 3450)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38288, 'Oğuzeli İlçesi', 226, 3450)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38289, 'Akçakale İlçesi', 226, 3429)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38290, 'Erzin İlçesi', 226, 3448)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38291, 'Dörtyol İlçesi', 226, 3448)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38292, 'Hassa İlçesi', 226, 3448)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38293, 'Kumlu İlçesi', 226, 3448)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38294, 'Musabeyli İlçesi', 226, 3476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38295, 'İslahiye İlçesi', 226, 3450)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38296, 'Polateli İlçesi', 226, 3476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38297, 'Kilis Merkez', 226, 3476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38298, 'Elbeyli İlçesi', 226, 3476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38299, 'Şahinbey İlçesi', 226, 3450)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38300, 'İskenderun İlçesi', 226, 3448)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38301, 'Kırıkhan İlçesi', 226, 3448)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38302, 'Belen İlçesi', 226, 3448)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38303, 'Antakya İlçesi', 226, 3448)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38304, 'Altınözü İlçesi', 226, 3448)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38305, 'Yayladağı İlçesi', 226, 3448)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38306, 'Reyhanlı İlçesi', 226, 3448)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38307, 'Tillo İlçesi', 226, 3432)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38308, 'Pervari İlçesi', 226, 3432)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38309, 'Çatak İlçesi', 226, 3427)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38310, 'Şırnak İlçesi', 226, 3475)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38311, 'Cizre İlçesi', 226, 3475)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38312, 'Uludere İlçesi', 226, 3475)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38313, 'Beytüşşebap', 226, 3475)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38314, 'Silopi İlçesi', 226, 3475)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38315, 'Harran İlçesi', 226, 3429)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38316, 'Ceylanpınar İlçesi', 226, 3429)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38317, 'Bismil İlçesi', 226, 3455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38318, 'Beşiri İlçesi', 226, 3472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38319, 'Hasankeyf İlçesi', 226, 3472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38320, 'Kurtalan İlçesi', 226, 3432)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38321, 'Siirt Merkez', 226, 3432)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38322, 'Savur İlçesi', 226, 3437)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38323, 'Yeşilli İlçesi', 226, 3437)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38324, 'Ömerli İlçesi', 226, 3437)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38325, 'Gercüş İlçesi', 226, 3472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38326, 'Midyat İlçesi', 226, 3437)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38327, 'Güçlükonak İlçesi', 226, 3475)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38328, 'Dargeçit İlçesi', 226, 3437)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38329, 'Mardin Merkez', 226, 3437)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38330, 'Nusaybin İlçesi', 226, 3437)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38331, 'İdil İlçesi', 226, 3475)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38332, 'Karakoçan / Elazığ', 226, 3454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38333, 'Ceyhan', 226, 3468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38334, 'Seyhan', 226, 3468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38335, 'Yüreğir', 226, 3468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38336, 'Merkez', 226, 3467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38337, 'Merkez', 226, 3466)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38338, 'İscehisar', 226, 3466)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38339, 'Merkez', 226, 3471)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38340, 'Merkez', 226, 3500)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38341, 'Altındağ', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38342, 'Çankaya', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38343, 'Gölbaşı', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38344, 'Kahramankazan', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38345, 'Polatlı', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38346, 'Sincan İlçesi', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38347, 'Yenimahalle', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38348, 'Alanya', 226, 3463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38349, 'Finike', 226, 3463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38350, 'Kemer İlçesi', 226, 3463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38351, 'Manavgat İlçesi', 226, 3463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38352, 'Merkez', 226, 3463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38353, 'Serik', 226, 3463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38354, 'Hopa İlçesi', 226, 3499)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38355, 'Merkez', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38356, 'Bandırma İlçesi', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38357, 'Merkez', 226, 3472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38358, 'Merkez', 226, 3459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38359, 'Merkez', 226, 3458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38360, 'Merkez', 226, 3457)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38361, 'Gemlik', 226, 3497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38362, 'Gürsu', 226, 3497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38363, 'İnegöl', 226, 3497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38364, 'Kestel İlçesi', 226, 3497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38365, 'Mudanya', 226, 3497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38366, 'Nilüfer', 226, 3497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38367, 'Osmangazi', 226, 3497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38368, 'Yıldırım İlçesi', 226, 3497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38369, 'Biga', 226, 3496)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38370, 'Merkez', 226, 3496)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38371, 'Merkez', 226, 3494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38372, 'Osmancık', 226, 3494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38373, 'Sungurlu', 226, 3494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38374, 'Çardak', 226, 3456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38375, 'Honaz', 226, 3456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38376, 'Merkez', 226, 3456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38377, 'Merkez', 226, 3455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38378, 'Merkez', 226, 3454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38379, 'Merkez', 226, 3451)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38380, 'Şehitkamil', 226, 3450)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38381, 'Merkez', 226, 3492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38382, 'Merkez', 226, 3491)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38383, 'Avcılar', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38384, 'Büyükçekmece', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38385, 'Bahçelievler', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38386, 'Bayrampaşa', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38387, 'Bağcılar', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38388, 'Bakırköy', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38389, 'Beyoğlu', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38390, 'Çatalca', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38391, 'Esenler', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38392, 'Eyüpsultan', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38393, 'Gaziosmanpaşa', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38394, 'Güngören', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38395, 'Kadıköy', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38396, 'Kâğıthane', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38397, 'Kartal', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38398, 'Küçükçekmece', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38399, 'Pendik', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38400, 'Silivri', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38401, 'Sultanbeyli', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38402, 'Tuzla', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38403, 'Ümraniye', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38404, 'Üsküdar', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38405, 'Zeytinburnu', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38406, 'Çorlu', 226, 3480)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38407, 'Gebze', 226, 3486)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38408, 'Gerede', 226, 3498)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38409, 'Sarayköy', 226, 3456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38410, 'Merkez', 226, 3503)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38411, 'Bornova', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38412, 'Aliağa', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38413, 'Çiğli', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38414, 'Bayraklı', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38415, 'Bergama', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38416, 'Buca', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38417, 'Gaziemir', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38418, 'Kemalpaşa', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38419, 'Konak', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38420, 'Menderes', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38421, 'Menemen', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38422, 'Merkez', 226, 3438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38423, 'Seferihisar', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38424, 'Tire', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38425, 'Torbalı', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38426, 'Merkez', 226, 3444)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38427, 'Cide', 226, 3488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38428, 'Develi', 226, 3443)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38429, 'Melikgazi', 226, 3443)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38430, 'Kocasinan', 226, 3443)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38431, 'Dilovası', 226, 3486)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38432, 'Selcuklu', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38433, 'Karatay', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38434, 'Battalgazi', 226, 3439)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38435, 'Merkez', 226, 3439)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38436, 'Saruhanlı', 226, 3438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38437, 'Tarsus', 226, 3447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38438, 'Fethiye', 226, 3436)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38439, 'Kavaklıdere', 226, 3436)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38440, 'Marmaris', 226, 3436)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38441, 'Yatağan', 226, 3436)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38442, 'Merkez', 226, 3435)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38443, 'Merkez', 226, 3434)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38444, 'Ürgüp', 226, 3434)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38445, 'Merkez', 226, 3433)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38446, 'Merkez', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38447, 'Merkez', 226, 3483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38448, 'Bafra', 226, 3482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38449, 'Merkez', 226, 3482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38450, 'Merkez', 226, 3429)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38451, 'Merkez', 226, 3431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38452, 'Zara', 226, 3431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38453, 'Çerkezköy', 226, 3480)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38454, 'Erbaa', 226, 3479)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38455, 'Arsin', 226, 3478)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38456, 'Çarşıbaşı', 226, 3478)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38457, 'Merkez', 226, 3478)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38458, 'Vakfıkebir', 226, 3478)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38459, 'Merkez', 226, 3430)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38460, 'Merkez', 226, 3428)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38461, 'Edremit', 226, 3427)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38462, 'Erciş', 226, 3427)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38463, 'Merkez', 226, 3427)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38464, 'Sarıkaya', 226, 3426)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38465, 'Ereğli', 226, 3477)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38466, 'Merkez', 226, 3481)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38467, 'Keçiören', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38468, 'Marmara İlçesi', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38469, 'Şabanözü', 226, 3495)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38470, 'Ağın', 226, 3454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38471, 'Araban', 226, 3450)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38472, 'Yüksekova', 226, 3449)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38473, 'Beşiktaş', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38474, 'Beykoz', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38475, 'Fatih', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38476, 'Maltepe', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38477, 'Beydağ', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38478, 'Merkez', 226, 3486)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38479, 'Bodrum', 226, 3436)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38480, 'Tekkeköy', 226, 3482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38481, 'Toprakkale', 226, 3469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38482, 'Ulukisla', 226, 3433)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38483, 'Bor', 226, 3433)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38484, 'Yesilhisar', 226, 3443)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38485, 'Incesu', 226, 3443)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38486, 'Kula', 226, 3438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38487, 'Dursunbey İlçesi', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38488, 'Mut', 226, 3447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38489, 'Beypazari', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38490, 'Bozcaada', 226, 3496)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38491, 'Gökçeada', 226, 3496)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38492, 'Araklı', 226, 3478)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38493, 'Çanakçı', 226, 3492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38494, 'Kalkandere', 226, 3484)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38495, 'Maçka', 226, 3478)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38496, 'Akkuş', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38497, 'Niksar', 226, 3479)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38498, 'Reşadiye', 226, 3479)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38499, 'Dereli', 226, 3492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38500, 'Kumluca', 226, 3463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38501, 'Muradiye / Berkri', 226, 3427)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38502, 'Ayancık', 226, 3481)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38503, 'Kozan', 226, 3468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38504, 'Cihanbeyli District', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38505, 'Yahyali', 226, 3443)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38506, 'Adalar', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38507, 'Arnavutköy', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38508, 'Ataşehir', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38509, 'Başakşehir', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38510, 'Beylikdüzü', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38511, 'Çekmeköy', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38512, 'Esenyurt', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38513, 'Sancaktepe', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38514, 'Sarıyer', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38515, 'Sultangazi', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38516, 'Şile', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38517, 'Şişli', 226, 3490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38518, 'Nizip İlçesi', 226, 3450)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38519, 'Yavuzeli İlçesi', 226, 3450)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38520, 'Nurdağı İlçesi', 226, 3450)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38521, 'Viranşehir İlçesi', 226, 3429)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38522, 'Suruç İlçesi', 226, 3429)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38523, 'Siverek İlçesi', 226, 3429)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38524, 'Hilvan İlçesi', 226, 3429)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38525, 'Birecik İlçesi', 226, 3429)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38526, 'Bozova İlçesi', 226, 3429)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38527, 'Halfeti İlçesi', 226, 3429)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38528, 'Kızıltepe İlçesi', 226, 3437)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38529, 'Mazıdağı İlçesi', 226, 3437)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38530, 'Derik İlçesi', 226, 3437)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38531, 'Sason İlçesi', 226, 3472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38532, 'Kozluk İlçesi', 226, 3472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38533, 'Çınar İlçesi', 226, 3455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38534, 'Hazro İlçesi', 226, 3455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38535, 'Dicle İlçesi', 226, 3455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38536, 'Çermik İlçesi', 226, 3455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38537, 'Ergani İlçesi', 226, 3455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38538, 'Silvan İlçesi', 226, 3455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38539, 'Lice İlçesi', 226, 3455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38540, 'Kocaköy İlçesi', 226, 3455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38541, 'Hani İlçesi', 226, 3455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38542, 'Eğil İlçesi', 226, 3455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38543, 'Çüngüş İlçesi', 226, 3455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38544, 'Kulp İlçesi', 226, 3455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38545, 'Eruh İlçesi', 226, 3432)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38546, 'Baykan İlçesi', 226, 3432)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38547, 'Şirvan İlçesi', 226, 3432)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38548, 'Başkale İlçesi', 226, 3427)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38549, 'Çaldıran İlçesi', 226, 3427)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38550, 'Bahçesaray İlçesi', 226, 3427)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38551, 'Gevaş İlçesi', 226, 3427)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38552, 'Gürpınar İlçesi', 226, 3427)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38553, 'Saray İlçesi', 226, 3427)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38554, 'Özalp İlçesi', 226, 3427)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38555, 'Şemdinni İlçesi', 226, 3449)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38556, 'Çukurca İlçesi', 226, 3449)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38557, 'Güroymak İlçesi', 226, 3458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38558, 'Hizan İlçesi', 226, 3458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38559, 'Tatvan İlçesi', 226, 3458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38560, 'Ahlat İlçesi', 226, 3458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38561, 'Adilcevaz İlçesi', 226, 3458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38562, 'Mutki İlçesi', 226, 3458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38563, 'Malazgirt İlçesi', 226, 3435)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38564, 'Bulanık İlçesi', 226, 3435)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38565, 'Varto İlçesi', 226, 3435)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38566, 'Korkut İlçesi', 226, 3435)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38567, 'Hasköy İlçesi', 226, 3435)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38568, 'Doğubayazıt İlçesi', 226, 3465)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38569, 'Diyadin İlçesi', 226, 3465)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38570, 'Eleşkirt İlçesi', 226, 3465)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38571, 'Taşlıçay İlçesi', 226, 3465)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38572, 'Patnos İlçesi', 226, 3465)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38573, 'Tutak İlçesi', 226, 3465)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38574, 'Hamur İlçesi', 226, 3465)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38575, 'Aralık İlçesi', 226, 3467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38576, 'Tuzluca İlçesi', 226, 3470)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38577, 'Karakoyunlu İlçesi', 226, 3470)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38578, 'Digor İlçesi', 226, 3489)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38579, 'Kağızman İlçesi', 226, 3489)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38580, 'Akyaka İlçesi', 226, 3489)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38581, 'Arpaçay İlçesi', 226, 3489)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38582, 'Susuz İlçesi', 226, 3489)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38583, 'Selim İlçesi', 226, 3489)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38584, 'Sarıkamış İlçesi', 226, 3489)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38585, 'Şenkaya İlçesi', 226, 3452)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38586, 'Olur İlçesi', 226, 3452)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38587, 'Horasan İlçesi', 226, 3452)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38588, 'Narman İlçesi', 226, 3452)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38589, 'Uzundere İlçesi', 226, 3452)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38590, 'Köprüköy İlçesi', 226, 3452)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38591, 'Tortum İlçesi', 226, 3452)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38592, 'Oltu İlçesi', 226, 3452)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38593, 'Pasinler İlçesi', 226, 3452)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38594, 'Tekman İlçesi', 226, 3452)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38595, 'Karayazı İlçesi', 226, 3452)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38596, 'Hınıs İlçesi', 226, 3452)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38597, 'Karaçoban İlçesi', 226, 3452)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38598, 'Çat İlçesi', 226, 3452)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38599, 'Aşkale İlçesi', 226, 3452)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38600, 'Pazaryolu İlçesi', 226, 3452)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38601, 'İspir İlçesi', 226, 3452)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38602, 'Çıldır İlçesi', 226, 3504)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38603, 'Göle İlçesi', 226, 3504)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38604, 'Damal İlçesi', 226, 3504)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38605, 'Hanak İlçesi', 226, 3504)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38606, 'Posof İlçesi', 226, 3504)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38607, 'Şavşat İlçesi', 226, 3499)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38608, 'Ardanuç İlçesi', 226, 3499)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38609, 'Yusufeli İlçesi', 226, 3499)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38610, 'Murgul İlçesi', 226, 3499)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38611, 'Borçka İlçesi', 226, 3499)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38612, 'Arhavi İlçesi', 226, 3499)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38613, 'İkizdere İlçesi', 226, 3484)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38614, 'Güneysu İlçesi', 226, 3484)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38615, 'Hemşin İlçesi', 226, 3484)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38616, 'Pazar İlçesi', 226, 3484)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38617, 'Çamlıhemşin İlçesi', 226, 3484)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38618, 'Derepazarı İlçesi', 226, 3484)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38619, 'Çaykara İlçesi', 226, 3478)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38620, 'Hayrat İlçesi', 226, 3478)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38621, 'Of İlçesi', 226, 3478)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38622, 'Dernekpazarı İlçesi', 226, 3478)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38623, 'Köprübaşı İlçesi', 226, 3478)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38624, 'Sürmene İlçesi', 226, 3478)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38625, 'Şalpazarı İlçesi', 226, 3478)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38626, 'Tonya İlçesi', 226, 3478)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38627, 'Düzköy İlçesi', 226, 3478)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38628, 'Yomra İlçesi', 226, 3478)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38629, 'Düziçi İlçesi', 226, 3469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38630, 'Bahçe İlçesi', 226, 3469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38631, 'Hasanbeyli İlçesi', 226, 3469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38632, 'Kadirli İlçesi', 226, 3469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38633, 'Sumbas İlçesi', 226, 3469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38634, 'Pazarcık İlçesi', 226, 3444)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38635, 'Nurhak İlçesi', 226, 3444)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38636, 'Çağlayancerit İlçesi', 226, 3444)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38637, 'Türkoğlu İlçesi', 226, 3444)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38638, 'Elbistan İlçesi', 226, 3444)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38639, 'Ekinözü İlçesi', 226, 3444)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38640, 'Andırın İlçesi', 226, 3444)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38641, 'Göksun İlçesi', 226, 3444)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38642, 'Afşin İlçesi', 226, 3444)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38643, 'Yayladere İlçesi', 226, 3459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38644, 'Yedisu İlçesi', 226, 3459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38645, 'Adaklı İlçesi', 226, 3459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38646, 'Solhan İlçesi', 226, 3459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38647, 'Karlıova İlçesi', 226, 3459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38648, 'Genç İlçesi', 226, 3459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38649, 'Kiğı İlçesi', 226, 3459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38650, 'Baskil İlçesi', 226, 3454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38651, 'Kovancılar İlçesi', 226, 3454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38652, 'Sivrice İlçesi', 226, 3454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38653, 'Maden İlçesi', 226, 3454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38654, 'Arıcak İlçesi', 226, 3454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38655, 'Alacakaya İlçesi', 226, 3455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38656, 'Palu İlçesi', 226, 3454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38657, 'Keban İlçesi', 226, 3454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38658, 'Ovacık İlçesi', 226, 3430)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38659, 'Hozat İlçesi', 226, 3430)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38660, 'Pertek İlçesi', 226, 3430)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38661, 'Pülümür İlçesi', 226, 3430)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38662, 'Nazımiye İlçesi', 226, 3430)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38663, 'Mazgirt İlçesi', 226, 3430)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38664, 'Çemişgezek İlçesi', 226, 3430)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38665, 'Çayırlı İlçesi', 226, 3453)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38666, 'Otlukbeli İlçesi', 226, 3453)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38667, 'Tercan İlçesi', 226, 3453)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38668, 'Üzümlü İlçesi', 226, 3453)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38669, 'Kemaliye İlçesi', 226, 3453)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38670, 'İliç İlçesi', 226, 3453)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38671, 'Refahiye İlçesi', 226, 3453)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38672, 'Kemah İlçesi', 226, 3453)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38673, 'Demirözü İlçesi', 226, 3505)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38674, 'Aydıntepe İlçesi', 226, 3505)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38675, 'Köse İlçesi', 226, 3491)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38676, 'Torul İlçesi', 226, 3491)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38677, 'Kürtün İlçesi', 226, 3491)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38678, 'Şiran İlçesi', 226, 3491)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38679, 'Kelkit İlçesi', 226, 3491)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38680, 'Güce İlçesi', 226, 3492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38681, 'Doğankent İlçesi', 226, 3492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38682, 'Görele İlçesi', 226, 3492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38683, 'Eynesil İlçesi', 226, 3492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38684, 'Espiye İlçesi', 226, 3492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38685, 'Yağlıdere İlçesi', 226, 3492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38686, 'Şebin Karahisar İlçesi', 226, 3492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38687, 'Bulancak İlçesi', 226, 3492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38688, 'Piraziz İlçesi', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38689, 'Alucra İlçesi', 226, 3492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38690, 'Çamoluk İlçesi', 226, 3492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38691, 'Kabadüz İlçesi', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38692, 'Gülyalı İlçesi', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38693, 'Gölköy İlçesi', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38694, 'Ulubey İlçesi', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38695, 'Gürgentepe İlçesi', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38696, 'Perşembe İlçesi', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38697, 'Çamaş İlçesi', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38698, 'Fatsa İlçesi', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38699, 'Çatalpınar İlçesi', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38700, 'Kumru İlçesi', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38701, 'Mesudiye İlçesi', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38702, 'Korgan İlçesi', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38703, 'Aybastı İlçesi', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38704, 'Kabataş İlçesi', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38705, 'Ünye İlçesi', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38706, 'İkizce İlçesi', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38707, 'Çaybaşı İlçesi', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38708, 'Gürün İlçesi', 226, 3431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38709, 'Suşehri İlçesi', 226, 3431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38710, 'Koyulhisar İlçesi', 226, 3431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38711, 'Doğanşar İlçesi', 226, 3431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38712, 'Altınyayla İlçesi', 226, 3431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38713, 'Şarkışla İlçesi', 226, 3431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38714, 'Gemerek İlçesi', 226, 3431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38715, 'Yıldızeli İlçesi', 226, 3431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38716, 'Gölova İlçesi', 226, 3431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38717, 'Akıncılar İlçesi', 226, 3431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38718, 'İmranlı İlçesi', 226, 3431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38719, 'Kangal İlçesi', 226, 3431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38720, 'Divriği İlçesi', 226, 3431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38721, 'Ulaş İlçesi', 226, 3431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38722, 'Hafik İlçesi', 226, 3431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38723, 'Yeşilyurt İlçesi', 226, 3439)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38724, 'Kale İlçesi', 226, 3439)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38725, 'Arapgir İlçesi', 226, 3439)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38726, 'Yazıhan İlçesi', 226, 3439)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38727, 'Hekimhan İlçesi', 226, 3439)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38728, 'Akçadağ İlçesi', 226, 3439)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38729, 'Doğanşehir İlçesi', 226, 3439)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38730, 'Darende İlçesi', 226, 3439)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38731, 'Kuluncak İlçesi', 226, 3439)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38732, 'Gerger İlçesi', 226, 3467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38733, 'Samsat İlçesi', 226, 3467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38734, 'Kâhta İlçesi', 226, 3467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38735, 'Çelikhan İlçesi', 226, 3467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38736, 'Besni İlçesi', 226, 3467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38737, 'Tut İlçesi', 226, 3467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38738, 'Sincik İlçesi', 226, 3467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38739, 'Gölbaşı İlçesi', 226, 3467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38740, 'Vezirköprü İlçesi', 226, 3482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38741, 'Havza İlçesi', 226, 3482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38742, 'Ladik İlçesi', 226, 3482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38743, 'Kavak İlçesi', 226, 3482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38744, 'Asarcık İlçesi', 226, 3482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38745, 'Alaçam İlçesi', 226, 3482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38746, 'Yakakent İlçesi', 226, 3482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38747, 'Terme İlçesi', 226, 3482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38748, 'Salıpazarı İlçesi', 226, 3482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38749, 'Ayvacık İlçesi', 226, 3482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38750, 'Çarşamba İlçesi', 226, 3482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38751, 'Ondokuzmayıs İlçesi', 226, 3482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38752, 'Taşova İlçesi', 226, 3500)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38753, 'Göynücek İlçesi', 226, 3500)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38754, 'Gümüşhacıköy İlçesi', 226, 3500)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38755, 'Suluova İlçesi', 226, 3500)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38756, 'Merzifon İlçesi', 226, 3500)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38757, 'Hamamözü İlçesi', 226, 3500)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38758, 'Başçiftlik İlçesi', 226, 3479)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38759, 'Kadışehri İlçesi', 226, 3426)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38760, 'Sulusaray İlçesi', 226, 3479)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38761, 'Yeşilyurt İlçesi', 226, 3479)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38762, 'Artova İlçesi', 226, 3479)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38763, 'Pazar İlçesi', 226, 3479)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38764, 'Turhal İlçesi', 226, 3479)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38765, 'Almus İlçesi', 226, 3479)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38766, 'Zile İlçesi', 226, 3479)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38767, 'Çekerek İlçesi', 226, 3426)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38768, 'Saraykent İlçesi', 226, 3426)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38769, 'Akdağmadeni İlçesi', 226, 3426)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38770, 'Aydıncık İlçesi', 226, 3426)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38771, 'Sorgun İlçesi', 226, 3426)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38772, 'Şefaatli İlçesi', 226, 3426)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38773, 'Çandır İlçesi', 226, 3426)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38774, 'Çayıralan İlçesi', 226, 3426)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38775, 'Yenifakılı İlçesi', 226, 3426)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38776, 'Boğazlıyan İlçesi', 226, 3426)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38777, 'Yerköy İlçesi', 226, 3426)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38778, 'Akkışla İlçesi', 226, 3443)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38779, 'Sarız İlçesi', 226, 3443)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38780, 'Tomarza İlçesi', 226, 3443)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38781, 'Pınarbaşı İlçesi', 226, 3443)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38782, 'Bünyan İlçesi', 226, 3443)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38783, 'Sarıoğlan İlçesi', 226, 3443)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38784, 'Talas İlçesi', 226, 3443)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38785, 'Hacılar İlçesi', 226, 3443)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38786, 'Felahiye İlçesi', 226, 3443)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38787, 'Özvatan İlçesi', 226, 3443)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38788, 'Yumurtalık', 226, 3468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38789, 'Saimbeyli', 226, 3468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38790, 'Tufanbeyli', 226, 3468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38791, 'Feke', 226, 3468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38792, 'Aladağ', 226, 3468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38793, 'Pozantı', 226, 3468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38794, 'İmamoğlu', 226, 3468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38795, 'Karaisalı', 226, 3468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38796, 'Karataş', 226, 3468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38797, 'Altunhisar İlçesi', 226, 3433)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38798, 'Çamardı İlçesi', 226, 3433)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38799, 'Çiftlik İlçesi', 226, 3433)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38800, 'Eskil İlçesi', 226, 3471)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38801, 'Sarıyahşi İlçesi', 226, 3471)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38802, 'Ağaçören İlçesi', 226, 3471)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38803, 'Ortaköy İlçesi', 226, 3471)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38804, 'Gülağaç İlçesi', 226, 3471)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38805, 'Güzelyurt İlçesi', 226, 3471)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38806, 'Acıgöl İlçesi', 226, 3434)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38807, 'Gülşehir İlçesi', 226, 3434)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38808, 'Avanos İlçesi', 226, 3434)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38809, 'Derinkuyu İlçesi', 226, 3434)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38810, 'Kozaklı İlçesi', 226, 3434)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38811, 'Hacıbektaş İlçesi', 226, 3434)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38812, 'Akçakent İlçesi', 226, 3442)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38813, 'Çiçekdağı İlçesi', 226, 3442)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38814, 'Akpınar İlçesi', 226, 3442)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38815, 'Kaman İlçesi', 226, 3442)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38816, 'Boztepe İlçesi', 226, 3442)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38817, 'Mucur İlçesi', 226, 3442)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38818, 'Yahşihan İlçesi', 226, 3474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38819, 'Bahşılı İlçesi', 226, 3474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38820, 'Balışeyh İlçesi', 226, 3474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38821, 'Delice İlçesi', 226, 3474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38822, 'Sulakyurt İlçesi', 226, 3474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38823, 'Keskin İlçesi', 226, 3474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38824, 'Bucak İlçesi', 226, 3457)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38825, 'Çeltikçi İlçesi', 226, 3457)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38826, 'Ağlasun İlçesi', 226, 3457)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38827, 'Kemer İlçesi', 226, 3457)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38828, 'Çavdır İlçesi', 226, 3457)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38829, 'Tefenni İlçesi', 226, 3457)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38830, 'Karamanlı İlçesi', 226, 3457)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38831, 'Gölhisar İlçesi', 226, 3457)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38832, 'Altınyayla İlçesi', 226, 3457)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38833, 'Yeşilova İlçesi', 226, 3457)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38834, 'Dalaman', 226, 3436)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38835, 'Ortaca İlçesi', 226, 3436)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38836, 'Köyceğiz İlçesi', 226, 3436)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38837, 'Ula İlçesi', 226, 3436)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38838, 'Datça İlçesi', 226, 3436)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38839, 'Karakeçili İlçesi', 226, 3474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38840, 'Çelebi İlçesi', 226, 3474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38841, 'Eldivan İlçesi', 226, 3495)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38842, 'Kızılırmak İlçesi', 226, 3495)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38843, 'Çerkeş İlçesi', 226, 3495)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38844, 'Atkaracalar İlçesi', 226, 3495)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38845, 'Orta İlçesi', 226, 3495)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38846, 'Korgun İlçesi', 226, 3495)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38847, 'Bayramören İlçesi', 226, 3495)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38848, 'Ilgaz İlçesi', 226, 3495)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38849, 'Kurşunlu İlçesi', 226, 3495)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38850, 'Yapraklı İlçesi', 226, 3495)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38851, 'Taşköprü İlçesi', 226, 3488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38852, 'Hanönü İlçesi', 226, 3488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38853, 'Tosya İlçesi', 226, 3488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38854, 'Araç İlçesi', 226, 3488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38855, 'İhsangazi İlçesi', 226, 3488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38856, 'Pınarbaşı İlçesi', 226, 3488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38857, 'Daday İlçesi', 226, 3488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38858, 'Azdavay İlçesi', 226, 3488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38859, 'Şenpazar İlçesi', 226, 3488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38860, 'Doğanyurt İlçesi', 226, 3488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38861, 'Devrekani İlçesi', 226, 3488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38862, 'Seydiler İlçesi', 226, 3488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38863, 'Ağlı İlçesi', 226, 3488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38864, 'İnebolu İlçesi', 226, 3488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38865, 'Küre İlçesi', 226, 3488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38866, 'Abana İlçesi', 226, 3488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38867, 'Bozkurt İlçesi', 226, 3488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38868, 'Çatalzeytin İlçesi', 226, 3488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38869, 'Dodurga İlçesi', 226, 3494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38870, 'Ortaköy İlçesi', 226, 3494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38871, 'Mecitözü İlçesi', 226, 3494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38872, 'Laçin İlçesi', 226, 3494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38873, 'Oğuzlar İlçesi', 226, 3494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38874, 'Kargı İlçesi', 226, 3494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38875, 'Boğazkale İlçesi', 226, 3494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38876, 'Alaca İlçesi', 226, 3494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38877, 'Uğurludağ İlçesi', 226, 3494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38878, 'Bayat İlçesi', 226, 3494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38879, 'İskilip İlçesi', 226, 3494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38880, 'Gerze İlçesi', 226, 3481)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38881, 'Dikmen İlçesi', 226, 3481)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38882, 'Durağan İlçesi', 226, 3481)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38883, 'Saraydüzü İlçesi', 226, 3481)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38884, 'Erfelek İlçesi', 226, 3481)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38885, 'Boyabat İlçesi', 226, 3481)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38886, 'Türkeli İlçesi', 226, 3481)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38887, 'Evren İlçesi', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38888, 'Elmadağ İlçesi', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38889, 'Kalecik İlçesi', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38890, 'Akyurt İlçesi', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38891, 'Çubuk İlçesi', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38892, 'Mamak İlçesi', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38893, 'Bala İlçesi', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38894, 'Şereflikoçhisar İlçesi', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38895, 'Nallıhan İlçesi', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38896, 'Güdül İlçesi', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38897, 'Haymana İlçesi', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38898, 'Etimesgut İlçesi', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38899, 'Ayaş İlçesi', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38900, 'Çamlıdere İlçesi', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38901, 'Kızılcahamam İlçesi', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38902, 'Hadim İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38903, 'Ereğli İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38904, 'Halkapınar İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38905, 'Emirgazi İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38906, 'Karapınar İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38907, 'Kulu İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38908, 'Sarayönü İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38909, 'Altınekin İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38910, 'Kadınhanı İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38911, 'Derbent İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38912, 'Beyşehir İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38913, 'Seydişehir İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38914, 'Yalıhüyük İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38915, 'Ahırlı İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38916, 'Akören İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38917, 'Bozkır İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38918, 'Taşkent İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38919, 'Ilgın İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38920, 'Derebucak İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38921, 'Tuzlukçu İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38922, 'Yunak İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38923, 'Çeltik İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38924, 'Doğanhisar İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38925, 'Güneysınır İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38926, 'Meram İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38927, 'Çumra İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38928, 'Hüyük İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38929, 'Akşehir İlçesi', 226, 3441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38930, 'Sarıveliler İlçesi', 226, 3473)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38931, 'Başyayla İlçesi', 226, 3473)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38932, 'Kazımkarabekir İlçesi', 226, 3473)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38933, 'Ayrancı İlçesi', 226, 3473)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38934, 'Ermenek İlçesi', 226, 3473)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38935, 'Bozyazı İlçesi', 226, 3447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38936, 'Çamlıyayla İlçesi', 226, 3447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38937, 'Mezitli İlçesi', 226, 3447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38938, 'Gülnar İlçesi', 226, 3447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38939, 'Aydıncık İlçesi', 226, 3447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38940, 'Anamur İlçesi', 226, 3447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38941, 'Silifke İlçesi', 226, 3447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38942, 'Erdemli İlçesi', 226, 3447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38943, 'Gazipaşa İlçesi', 226, 3463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38944, 'Gündoğmuş İlçesi', 226, 3463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38945, 'Akseki İlçesi', 226, 3463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38946, 'İbradı İlçesi', 226, 3463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38947, 'Demre İlçesi', 226, 3463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38948, 'Korkuteli İlçesi', 226, 3463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38949, 'Elmalı İlçesi', 226, 3463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38950, 'Kaş İlçesi', 226, 3463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38951, 'Yenişarbademli İlçesi', 226, 3446)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38952, 'Şarkîkaraağaç İlçesi', 226, 3446)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38953, 'Sütçüler İlçesi', 226, 3446)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38954, 'Aksu İlçesi', 226, 3446)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38955, 'Keçiborlu İlçesi', 226, 3446)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38956, 'Uluborlu İlçesi', 226, 3446)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38957, 'Senirkent İlçesi', 226, 3446)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38958, 'Gönen İlçesi', 226, 3446)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38959, 'Eğirdir İlçesi', 226, 3446)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38960, 'Atabey İlçesi', 226, 3446)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38961, 'Gelendost İlçesi', 226, 3446)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38962, 'Yalvaç İlçesi', 226, 3446)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38963, 'Çivril İlçesi', 226, 3456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38964, 'Beyağaç İlçesi', 226, 3456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38965, 'Acıpayam İlçesi', 226, 3456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38966, 'Çameli İlçesi', 226, 3456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38967, 'Güney İlçesi', 226, 3456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38968, 'Bekilli', 226, 3456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38969, 'Çal İlçesi', 226, 3456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38970, 'Baklan İlçesi', 226, 3456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38971, 'Bozkurt', 226, 3456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38972, 'Babadağ İlçesi', 226, 3456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38973, 'Kale İlçesi', 226, 3456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38974, 'Tavas İlçesi', 226, 3456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38975, 'Serinhisar İlçesi', 226, 3456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38976, 'Buldan İlçesi', 226, 3456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38977, 'Pamukkale İlçesi', 226, 3456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38978, 'Milas İlçesi', 226, 3436)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38979, 'Söke İlçesi', 226, 3462)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38980, 'Koçarlı İlçesi', 226, 3462)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38981, 'Karpuzlu İlçesi', 226, 3462)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38982, 'Çine İlçesi', 226, 3462)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38983, 'Yenipazar İlçesi', 226, 3462)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38984, 'Bozdoğan İlçesi', 226, 3462)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38985, 'Karacasu', 226, 3462)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38986, 'Buharkent İlçesi', 226, 3462)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38987, 'Sultanhisar İlçesi', 226, 3462)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38988, 'Nazilli', 226, 3462)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38989, 'Kuyucak İlçesi', 226, 3462)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38990, 'Kuşadası İlçesi', 226, 3462)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38991, 'Germencik İlçesi', 226, 3462)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38992, 'İncirliova İlçesi', 226, 3462)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38993, 'Köşk İlçesi', 226, 3462)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38994, 'Didim', 226, 3462)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38995, 'Demirci İlçesi', 226, 3438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38996, 'Selendi İlçesi', 226, 3438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38997, 'Köprübaşı İlçesi', 226, 3438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38998, 'Soma İlçesi', 226, 3438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (38999, 'Kırkağaç İlçesi', 226, 3438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39000, 'Gördes İlçesi', 226, 3438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39001, 'Akhisar İlçesi', 226, 3438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39002, 'Gölmarmara İlçesi', 226, 3438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39003, 'Ahmetli İlçesi', 226, 3438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39004, 'Salihli İlçesi', 226, 3438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39005, 'Alaşehir İlçesi', 226, 3438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39006, 'Sarıgöl İlçesi', 226, 3438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39007, 'Turgutlu İlçesi', 226, 3438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39008, 'Kınık İlçesi', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39009, 'Bayındır İlçesi', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39010, 'Ödemiş İlçesi', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39011, 'Kiraz İlçesi', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39012, 'Urla İlçesi', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39013, 'Karşıyaka İlçesi', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39014, 'Selçuk İlçesi', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39015, 'Çeşme İlçesi', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39016, 'Karaburun İlçesi', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39017, 'Foça İlçesi', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39018, 'Dikili İlçesi', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39019, 'Kepsut İlçesi', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39020, 'Sındırgı İlçesi', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39021, 'Bigadiç İlçesi', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39022, 'Savaştepe İlçesi', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39023, 'Ayvalık İlçesi', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39024, 'Gömeç İlçesi', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39025, 'İvrindi İlçesi', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39026, 'Manyas İlçesi', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39027, 'Susurluk İlçesi', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39028, 'Balya İlçesi', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39029, 'Erdek İlçesi', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39030, 'Gönen İlçesi', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39031, 'Burhaniye İlçesi', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39032, 'Edremit İlçesi', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39033, 'Havran İlçesi', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39034, 'Gediz İlçesi', 226, 3440)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39035, 'Çavdarhisar İlçesi', 226, 3440)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39036, 'Aslanapa İlçesi', 226, 3440)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39037, 'Dumlupınar İlçesi', 226, 3440)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39038, 'Altıntaş İlçesi', 226, 3440)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39039, 'Domaniç İlçesi', 226, 3440)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39040, 'Tavşanlı İlçesi', 226, 3440)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39041, 'Pazarlar İlçesi', 226, 3440)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39042, 'Şaphane İlçesi', 226, 3440)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39043, 'Simav İlçesi', 226, 3440)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39044, 'Hisarcık İlçesi', 226, 3440)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39045, 'Emet İlçesi', 226, 3440)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39046, 'Karahallı İlçesi', 226, 3428)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39047, 'Ulubey', 226, 3428)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39048, 'Sivaslı İlçesi', 226, 3428)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39049, 'Banaz İlçesi', 226, 3428)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39050, 'Eşme İlçesi', 226, 3428)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39051, 'Evciler İlçesi', 226, 3466)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39052, 'Başmakçı İlçesi', 226, 3466)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39053, 'Dinar İlçesi', 226, 3466)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39054, 'Hocalar İlçesi', 226, 3466)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39055, 'Kızılören İlçesi', 226, 3466)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39056, 'Sandıklı İlçesi', 226, 3466)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39057, 'Şuhut İlçesi', 226, 3466)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39058, 'Çobanlar İlçesi', 226, 3466)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39059, 'Sinanpaşa İlçesi', 226, 3466)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39060, 'İhsaniye İlçesi', 226, 3466)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39061, 'Bolvadin İlçesi', 226, 3466)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39062, 'Çay İlçesi', 226, 3466)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39063, 'Sultandağı İlçesi', 226, 3466)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39064, 'Bayat İlçesi', 226, 3466)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39065, 'Emirdağ İlçesi', 226, 3466)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39066, 'Dazkırı İlçesi', 226, 3466)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39067, 'Günyüzü İlçesi', 226, 3451)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39068, 'Sivrihisar İlçesi', 226, 3451)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39069, 'Mihalıçcık İlçesi', 226, 3451)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39070, 'Beylikova İlçesi', 226, 3451)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39071, 'Alpu İlçesi', 226, 3451)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39072, 'Sarıcakaya İlçesi', 226, 3451)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39073, 'Mihalgazi İlçesi', 226, 3451)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39074, 'İnönü İlçesi', 226, 3451)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39075, 'Han İlçesi', 226, 3451)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39076, 'Seyitgazi İlçesi', 226, 3451)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39077, 'Mahmudiye İlçesi', 226, 3451)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39078, 'Çifteler İlçesi', 226, 3451)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39079, 'Mengen İlçesi', 226, 3498)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39080, 'Yeniçağa İlçesi', 226, 3498)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39081, 'Dörtdivan İlçesi', 226, 3498)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39082, 'Göynük İlçesi', 226, 3498)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39083, 'Kıbrıscık İlçesi', 226, 3498)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39084, 'Seben İlçesi', 226, 3498)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39085, 'Mudurnu İlçesi', 226, 3498)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39086, 'Eflani İlçesi', 226, 3502)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39087, 'Ovacık İlçesi', 226, 3502)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39088, 'Safranbolu İlçesi', 226, 3502)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39089, 'Yenice İlçesi', 226, 3502)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39090, 'Eskipazar İlçesi', 226, 3502)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39091, 'Amasra İlçesi', 226, 3501)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39092, 'Ulus İlçesi', 226, 3501)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39093, 'Kurucaşile İlçesi', 226, 3501)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39094, 'Çaycuma İlçesi', 226, 3477)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39095, 'Gökçebey İlçesi', 226, 3477)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39096, 'Devrek İlçesi', 226, 3477)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39097, 'Alaplı İlçesi', 226, 3477)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39098, 'Yığılca İlçesi', 226, 3506)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39099, 'Kaynaşlı İlçesi', 226, 3506)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39100, 'Çilimli İlçesi', 226, 3506)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39101, 'Gölyaka İlçesi', 226, 3506)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39102, 'Akçakoca İlçesi', 226, 3506)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39103, 'Cumayeri İlçesi', 226, 3506)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39104, 'Gümüşova İlçesi', 226, 3506)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39105, 'Akyazı İlçesi', 226, 3483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39106, 'Taraklı İlçesi', 226, 3483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39107, 'Karapürçek İlçesi', 226, 3483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39108, 'Geyve İlçesi', 226, 3483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39109, 'Pamukova İlçesi', 226, 3483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39110, 'Sapanca İlçesi', 226, 3483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39111, 'Hendek İlçesi', 226, 3483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39112, 'Karasu İlçesi', 226, 3483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39113, 'Kocaali İlçesi', 226, 3483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39114, 'Ferizli İlçesi', 226, 3483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39115, 'Söğütlü İlçesi', 226, 3483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39116, 'Kaynarca İlçesi', 226, 3483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39117, 'Orhangazi İlçesi', 226, 3497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39118, 'İznik İlçesi', 226, 3497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39119, 'Yenişehir İlçesi', 226, 3497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39120, 'Mustafakemalpaşa İlçesi', 226, 3497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39121, 'Karacabey İlçesi', 226, 3497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39122, 'Keles İlçesi', 226, 3497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39123, 'Orhaneli İlçesi', 226, 3497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39124, 'Büyükorhan İlçesi', 226, 3497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39125, 'Harmancık İlçesi', 226, 3497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39126, 'Altınova İlçesi', 226, 3503)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39127, 'Termal İlçesi', 226, 3503)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39128, 'Çiftlikköy İlçesi', 226, 3503)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39129, 'Armutlu İlçesi', 226, 3503)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39130, 'Çınarcık İlçesi', 226, 3503)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39131, 'Kandıra İlçesi', 226, 3486)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39132, 'Gölcük İlçesi', 226, 3486)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39133, 'Derince İlçesi', 226, 3486)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39134, 'Körfez İlçesi', 226, 3486)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39135, 'Karamürsel İlçesi', 226, 3486)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39136, 'Marmara Ereğlisi İlçesi', 226, 3480)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39137, 'Hayrabolu İlçesi', 226, 3480)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39138, 'Muratlı İlçesi', 226, 3480)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39139, 'Saray İlçesi', 226, 3480)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39140, 'Malkara İlçesi', 226, 3480)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39141, 'Şarköy İlçesi', 226, 3480)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39142, 'Pehlivanköy İlçesi', 226, 3487)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39143, 'Babaeski İlçesi', 226, 3487)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39144, 'Lüleburgaz İlçesi', 226, 3487)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39145, 'Kofçaz İlçesi', 226, 3487)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39146, 'Pınarhisar İlçesi', 226, 3487)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39147, 'Demirköy İlçesi', 226, 3487)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39148, 'Vize İlçesi', 226, 3487)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39149, 'Uzunköprü İlçesi', 226, 3493)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39150, 'Lâlapaşa İlçesi', 226, 3493)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39151, 'Süloğlu İlçesi', 226, 3493)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39152, 'Havsa İlçesi', 226, 3493)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39153, 'Meriç İlçesi', 226, 3493)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39154, 'İpsala İlçesi', 226, 3493)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39155, 'Keşan İlçesi', 226, 3493)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39156, 'Enez İlçesi', 226, 3493)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39157, 'Yenice İlçesi', 226, 3496)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39158, 'Ayvacık İlçesi', 226, 3496)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39159, 'Ezine İlçesi', 226, 3496)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39160, 'Bayramiç İlçesi', 226, 3496)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39161, 'Çan İlçesi', 226, 3496)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39162, 'Lâpseki İlçesi', 226, 3496)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39163, 'Gelibolu İlçesi', 226, 3496)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39164, 'Yenipazar İlçesi', 226, 3460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39165, 'Söğüt İlçesi', 226, 3460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39166, 'Gölpazarı İlçesi', 226, 3460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39167, 'Osmaneli İlçesi', 226, 3460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39168, 'Bozüyük İlçesi', 226, 3460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39169, 'Pazaryeri İlçesi', 226, 3460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39170, 'Döşemealtı İlçesi', 226, 3463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39171, 'Aksu', 226, 3463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39172, 'Konyaaltı', 226, 3463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39173, 'Muratpaşa İlçesi', 226, 3463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39174, 'Kepez İlçesi', 226, 3463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39175, 'Altıeylül İlçesi', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39176, 'İnhisar İlçesi', 226, 3460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39177, 'Eceabat', 226, 3496)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39178, 'Merkezefendi İlçesi', 226, 3456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39179, 'Aziziye', 226, 3452)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39180, 'Yakutiye', 226, 3452)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39181, 'Tepebaşı', 226, 3451)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39182, 'Odunpazarı', 226, 3451)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39183, 'Tirebolu', 226, 3492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39184, 'Keşap', 226, 3492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39185, 'Samandağ', 226, 3448)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39186, 'Defne', 226, 3448)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39187, 'Payas', 226, 3448)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39188, 'Arsuz', 226, 3448)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39189, 'Yenişehir', 226, 3447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39190, 'Toroslar', 226, 3447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39191, 'Akdeniz', 226, 3447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39192, 'Karabağlar', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39193, 'Balçova', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39194, 'Narlıdere', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39195, 'Güzelbahçe', 226, 3445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39196, 'İzmit', 226, 3486)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39197, 'Kartepe', 226, 3486)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39198, 'Başiskele', 226, 3486)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39199, 'Darıca', 226, 3486)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39200, 'Çayırova', 226, 3486)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39201, 'Pütürge', 226, 3439)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39202, 'Doğanyol', 226, 3439)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39203, 'Arguvan', 226, 3439)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39204, 'Yunusemre', 226, 3438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39205, 'Şehzadeler', 226, 3438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39206, 'Dulkadiroğlu', 226, 3444)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39207, 'Onikişubat', 226, 3444)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39208, 'Seydikemer', 226, 3436)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39209, 'Menteşe', 226, 3436)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39210, 'Altınordu', 226, 3485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39211, 'İyidere', 226, 3484)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39212, 'Ardeşen', 226, 3484)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39213, 'Çayeli', 226, 3484)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39214, 'Fındıklı', 226, 3484)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39215, 'Adapazarı', 226, 3483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39216, 'Serdivan', 226, 3483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39217, 'Erenler', 226, 3483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39218, 'Arifiye', 226, 3483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39219, 'Canik', 226, 3482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39220, 'İlkadım', 226, 3482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39221, 'Atakum', 226, 3482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39222, 'Kapaklı', 226, 3480)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39223, 'Süleymanpaşa', 226, 3480)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39224, 'Ortahisar', 226, 3478)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39225, 'Beşikdüzü', 226, 3478)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39226, 'Akçaabat', 226, 3478)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39227, 'Eyyübiye', 226, 3429)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39228, 'Karaköprü', 226, 3429)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39229, 'Haliliye', 226, 3429)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39230, 'Tuşba', 226, 3427)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39231, 'İpekyolu', 226, 3427)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39232, 'Pursaklar', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39233, 'Artuklu', 226, 3437)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39234, 'Sarıçam', 226, 3468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39235, 'Çukurova', 226, 3468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39236, 'Kozlu', 226, 3477)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39237, 'Kilimli', 226, 3477)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39238, 'Efeler', 226, 3462)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39239, 'Ergene', 226, 3480)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39240, 'Palandöken', 226, 3452)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39241, 'Kayapınar', 226, 3455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39242, 'Bağlar', 226, 3455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39243, 'Yenişehir', 226, 3455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39244, 'Sur', 226, 3455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39245, 'Karesi İlçesi', 226, 3461)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39246, 'Ağrı', 226, 3465)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39247, 'Kemalpaşa', 226, 3499)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39248, 'Sultanhanı', 226, 3471)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39249, 'Kazan İlçesi', 226, 3464)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39250, 'Ward of Valencia', 227, 3518)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39251, 'Ward of Turure', 227, 3518)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39252, 'Ward of Trinity', 227, 3510)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39253, 'Ward of Toco', 227, 3518)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39254, 'Ward of Tamana', 227, 3518)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39255, 'Ward of Tacarigua', 227, 3521)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39256, 'Ward of Siparia', 227, 3519)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39257, 'Ward of Savana Grande', 227, 3516)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39258, 'Ward of San Rafael', 227, 3513)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39259, 'Saint Paul', 227, 3507)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39260, 'Saint Patrick', 227, 3507)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39261, 'Saint Mary', 227, 3507)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39262, 'Saint John', 227, 3507)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39263, 'Saint George', 227, 3507)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39264, 'Saint David', 227, 3507)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39265, 'Ward of Saint Ann’s', 227, 3520)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39266, 'Saint Andrew', 227, 3507)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39267, 'Ward of Pointe-à-Pierre', 227, 3513)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39268, 'Ward of Ortoire', 227, 3516)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39269, 'Ward of Naparima', 227, 3515)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39270, 'Ward of Moruga', 227, 3516)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39271, 'Ward of Montserrat', 227, 3513)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39272, 'Ward of Matura', 227, 3518)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39273, 'Ward of Manzanilla', 227, 3518)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39274, 'Ward of La Brea', 227, 3519)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39275, 'Ward of Guayaguayare', 227, 3510)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39276, 'Ward of Erin', 227, 3519)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39277, 'Ward of Diego Martin', 227, 3514)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39278, 'Ward of Cunupia', 227, 3513)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39279, 'Ward of Couva', 227, 3513)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39280, 'Ward of Cocal', 227, 3510)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39281, 'Ward of Charuma', 227, 3510)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39282, 'Ward of Chaguanas', 227, 3512)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39283, 'Ward of Cedros', 227, 3519)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39284, 'Ward of Blanchisseuse', 227, 3521)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39285, 'Ward of Arima', 227, 3521)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39286, 'Niulakita', 228, 3525)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39287, 'New Taipei', 229, 3532)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39288, 'Yunlin', 229, 3533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39289, 'Taoyuan', 229, 3533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39290, 'Taitung', 229, 3533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39291, 'Taipei City', 229, 3533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39292, 'Tainan', 229, 3533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39293, 'Pingtung', 229, 3533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39294, 'Penghu County', 229, 3533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39295, 'Nantou', 229, 3533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39296, 'Miaoli', 229, 3533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39297, 'Yilan', 229, 3533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39298, 'Hualien', 229, 3533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39299, 'Hsinchu', 229, 3533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39300, 'Hsinchu County', 229, 3533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39301, 'Kinmen County', 229, 3530)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39302, 'Chiayi', 229, 3533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39303, 'Chiayi County', 229, 3533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39304, 'Changhua', 229, 3533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39305, 'Keelung', 229, 3533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39306, 'Lienchiang', 229, 3530)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39307, 'Kaohsiung', 229, 3531)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39308, 'Taichung City', 229, 3533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39309, 'Wete District', 230, 3545)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39310, 'Urambo', 230, 3539)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39311, 'Ulanga', 230, 3547)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39312, 'Ukerewe District', 230, 3546)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39313, 'Temeke', 230, 3555)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39314, 'Tarime', 230, 3549)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39315, 'Tanga', 230, 3538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39316, 'Tabora Urban', 230, 3539)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39317, 'Sumbawanga', 230, 3542)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39318, 'Singida Rural District', 230, 3540)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39319, 'Shinyanga Urban', 230, 3541)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39320, 'Serengeti', 230, 3549)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39321, 'Sengerema', 230, 3546)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39322, 'Same', 230, 3551)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39323, 'Rungwe', 230, 3548)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39324, 'Rufiji', 230, 3543)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39325, 'Rombo District', 230, 3551)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39326, 'Pangani', 230, 3538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39327, 'Nzega', 230, 3539)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39328, 'Nkasi', 230, 3542)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39329, 'Njombe District Council', 230, 3563)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39330, 'Ngorongoro', 230, 3556)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39331, 'Ngara', 230, 3534)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39332, 'Mwanga', 230, 3551)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39333, 'Musoma', 230, 3549)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39334, 'Muleba', 230, 3534)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39335, 'Muheza District', 230, 3538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39336, 'Mufindi', 230, 3553)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39337, 'Mpwapwa', 230, 3554)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39338, 'Mpanda', 230, 3562)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39339, 'Morogoro Urban', 230, 3547)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39340, 'Monduli District', 230, 3556)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39341, 'Mkoani District', 230, 3544)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39342, 'Mbulu', 230, 3557)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39343, 'Mbozi', 230, 3564)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39344, 'Mbeya', 230, 3548)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39345, 'Maswa District', 230, 3560)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39346, 'Manyoni', 230, 3540)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39347, 'Makete', 230, 3563)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39348, 'Magu', 230, 3546)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39349, 'Mafia', 230, 3543)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39350, 'Lushoto', 230, 3538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39351, 'Liwale', 230, 3550)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39352, 'Kyela', 230, 3548)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39353, 'Kwimba District', 230, 3546)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39354, 'Korogwe District', 230, 3538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39355, 'Kondoa', 230, 3554)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39356, 'Micheweni', 230, 3545)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39357, 'Kiteto', 230, 3557)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39358, 'Kisarawe', 230, 3543)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39359, 'Kinondoni', 230, 3555)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39360, 'Kilwa', 230, 3550)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39361, 'Kilosa', 230, 3547)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39362, 'Kilombero', 230, 3547)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39363, 'Kibondo', 230, 3552)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39364, 'Kasulu', 230, 3552)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39365, 'Karagwe', 230, 3534)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39366, 'Kahama Rural District', 230, 3541)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39367, 'Iringa Rural District', 230, 3553)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39368, 'Iramba', 230, 3540)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39369, 'Ileje', 230, 3564)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39370, 'Ilala', 230, 3555)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39371, 'Igunga', 230, 3539)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39372, 'Handeni', 230, 3538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39373, 'Hanang District', 230, 3557)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39374, 'Hai', 230, 3551)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39375, 'Geita', 230, 3561)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39376, 'Chunya', 230, 3548)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39377, 'Chake Chake District', 230, 3544)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39378, 'Bunda', 230, 3549)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39379, 'Bukoba', 230, 3534)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39380, 'Biharamulo District', 230, 3534)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39381, 'Bariadi', 230, 3560)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39382, 'Bagamoyo', 230, 3543)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39383, 'Meru', 230, 3556)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39384, 'Tunduru', 230, 3558)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39385, 'Songea', 230, 3558)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39386, 'Newala', 230, 3559)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39387, 'Nachingwea', 230, 3550)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39388, 'Mtwara', 230, 3559)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39389, 'Mbinga', 230, 3558)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39390, 'Masasi', 230, 3559)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39391, 'Ludewa', 230, 3563)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39392, 'Lindi Urban', 230, 3550)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39393, 'Chamwino', 230, 3554)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39394, 'Bahi District', 230, 3554)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39395, 'Kishapu District', 230, 3541)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39396, 'Kigoma Rural', 230, 3552)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39397, 'Meatu', 230, 3560)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39398, 'Misungwi district', 230, 3546)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39399, 'Kilolo District', 230, 3553)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39400, 'Uyui District', 230, 3539)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39401, 'Mbarali district', 230, 3548)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39402, 'Kibaha District', 230, 3543)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39403, 'Kongwa', 230, 3554)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39404, 'Arusha District', 230, 3556)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39405, 'Babati District', 230, 3557)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39406, 'Simanjiro', 230, 3557)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39407, 'Lindi Rural', 230, 3550)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39408, 'Ruangwa', 230, 3550)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39409, 'Morogoro Rural', 230, 3547)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39410, 'Shinyanga Rural', 230, 3541)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39411, 'Namtumbo', 230, 3558)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39412, 'Iringa Urban District', 230, 3553)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39413, 'Dodoma Urban District', 230, 3554)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39414, 'Singida Urban District', 230, 3540)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39415, 'Moshi Rural District', 230, 3551)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39416, 'Mkuranga', 230, 3543)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39417, 'Ilemela District', 230, 3546)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39418, 'Moshi Urban District', 230, 3551)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39419, 'Bukombe District', 230, 3561)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39420, 'Mvomero District', 230, 3547)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39421, 'Longido District', 230, 3556)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39422, 'Nanyumbu District', 230, 3559)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39423, 'Sikonge District', 230, 3539)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39424, 'Karatu District', 230, 3556)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39425, 'Kilindi District', 230, 3538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39426, 'Tandahimba', 230, 3559)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39427, 'Nyamagana District', 230, 3546)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39428, 'Chato District', 230, 3561)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39429, 'Sumbawanga Urban', 230, 3542)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39430, 'Uvinza District', 230, 3552)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39431, 'Kakonko District', 230, 3552)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39432, 'Arusha City', 230, 3556)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39433, 'Chemba', 230, 3554)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39434, 'Mbogwe', 230, 3561)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39435, 'Nyang’hwale', 230, 3561)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39436, 'Mafinga Town Council', 230, 3553)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39437, 'Bukoba Municipal', 230, 3534)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39438, 'Kyerwa', 230, 3534)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39439, 'Missenyi', 230, 3534)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39440, 'Mlele', 230, 3562)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39441, 'Mpanda Town', 230, 3562)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39442, 'Buhigwe', 230, 3552)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39443, 'Kasulu Town', 230, 3552)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39444, 'Kigoma Ujiji Municipal', 230, 3552)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39445, 'Siha', 230, 3551)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39446, 'Babati Town', 230, 3557)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39447, 'Butiama', 230, 3549)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39448, 'Musoma Municipal', 230, 3549)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39449, 'Rorya', 230, 3549)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39450, 'Mbeya City', 230, 3548)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39451, 'Momba', 230, 3564)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39452, 'Tunduma', 230, 3564)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39453, 'Gairo', 230, 3547)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39454, 'Masasi Town', 230, 3559)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39455, 'Makambako Town', 230, 3563)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39456, 'Njombe Town', 230, 3563)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39457, 'Wanging’ombe', 230, 3563)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39458, 'Kibaha Town', 230, 3543)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39459, 'Kalambo', 230, 3542)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39460, 'Nyasa', 230, 3558)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39461, 'Songea Municipal', 230, 3558)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39462, 'Kahama Town', 230, 3541)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39463, 'Busega', 230, 3560)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39464, 'Itilima', 230, 3560)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39465, 'Ikungi', 230, 3540)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39466, 'Mkalama', 230, 3540)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39467, 'Kaliua', 230, 3539)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39468, 'Handeni Town', 230, 3538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39469, 'Korogwe Town', 230, 3538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39470, 'Mkinga', 230, 3538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39471, 'Kati', 230, 3537)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39472, 'Magharibi', 230, 3535)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39473, 'Kaskazini A', 230, 3536)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39474, 'Kaskazini B', 230, 3536)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39475, 'Kusini', 230, 3537)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39476, 'Mjini', 230, 3535)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39477, 'Mtwara Urban', 230, 3559)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39478, 'Songwe District', 230, 3564)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39479, 'Zvenihorodka Raion', 231, 3591)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39480, 'Zolotonosha Raion', 231, 3591)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39481, 'Zolochivskyi Raion', 231, 3577)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39482, 'Zhmerynka Raion', 231, 3569)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39483, 'Zhytomyr Raion', 231, 3565)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39484, 'Zaporizhzhya Raion', 231, 3566)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39485, 'Yavorivskyi Raion', 231, 3577)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39486, 'Vyshgorodskiy Rayon', 231, 3579)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39487, 'Voznesensk Raion', 231, 3576)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39488, 'Volnovakha Raion', 231, 3587)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39489, 'Vinnytsya Raion', 231, 3569)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39490, 'Verkhovyna Raion', 231, 3586)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39491, 'Vasylivka Raion', 231, 3566)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39492, 'Uzhhorod Raion', 231, 3567)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39493, 'Uman Raion', 231, 3591)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39494, 'Tyachiv Raion', 231, 3567)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39495, 'Tulchyn Raion', 231, 3569)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39496, 'Ternopil Raion', 231, 3570)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39497, 'Dovzhanskyy Rayon', 231, 3578)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39498, 'Svativskyi Raion', 231, 3578)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39499, 'Sumskyi Raion', 231, 3571)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39500, 'Starobilskyi Raion', 231, 3578)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39501, 'Skadovsk Raion', 231, 3584)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39502, 'Synelnykove Raion', 231, 3588)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39503, 'Simferopol Raion', 231, 3581)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39504, 'Shepetivka Raion', 231, 3583)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39505, 'Sarnenskyi Raion', 231, 3573)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39506, 'Romenskyi Raion', 231, 3571)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39507, 'Rozdilna Raion', 231, 3575)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39508, 'Rakhiv Raion', 231, 3567)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39509, 'Prylutskyi Raion', 231, 3590)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39510, 'Poltava Raion', 231, 3574)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39511, 'Polohy Raion', 231, 3566)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39512, 'Pervomaysk Raion', 231, 3576)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39513, 'Pavlohrad Raion', 231, 3588)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39514, 'Obukhiv Raion', 231, 3579)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39515, 'Novoukrayinka Raion', 231, 3582)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39516, 'Novomoskovsk Raion', 231, 3588)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39517, 'Nikopol Raion', 231, 3588)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39518, 'Nadvirna Raion', 231, 3586)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39519, 'Mukachevo Raion', 231, 3567)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39520, 'Mohyliv-Podilskyy Raion', 231, 3569)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39521, 'Myrhorod Raion', 231, 3574)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39522, 'Melitopol Raion', 231, 3566)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39523, 'Lubny Raion', 231, 3574)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39524, 'Kryvyy Rih Raion', 231, 3588)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39525, 'Kremenets Raion', 231, 3570)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39526, 'Kremenchuk Raion', 231, 3574)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39527, 'Krasnoperekopsk Raion', 231, 3581)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39528, 'Krasnohvardiiske Raion', 231, 3581)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39529, 'Krasnohradskyi Raion', 231, 3585)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39530, 'Pokrovsk Raion', 231, 3587)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39531, 'Podilsk Raion', 231, 3575)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39532, 'Kosiv Raion', 231, 3586)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39533, 'Koriukivskyi Raion', 231, 3590)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39534, 'Korosten'' Raion', 231, 3565)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39535, 'Kolomyya Raion', 231, 3586)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39536, 'Kropyvnytskyy Raion', 231, 3582)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39537, 'Khust Raion', 231, 3567)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39538, 'Khmilnyk Raion', 231, 3569)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39539, 'Khmelnytskyy Raion', 231, 3583)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39540, 'Kamin-Kashyrskyi Raion', 231, 3568)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39541, 'Kamyanets-Podilskyy Raion', 231, 3583)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39542, 'Kalush Raion', 231, 3586)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39543, 'Kakhovka Raion', 231, 3584)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39544, 'Izmail Raion', 231, 3575)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39545, 'Holovanivsk Raion', 231, 3582)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39546, 'Henichesk Raion', 231, 3584)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39547, 'Haysyn Raion', 231, 3569)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39548, 'Oleksandriya Raion', 231, 3582)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39549, 'Fastiv Raion', 231, 3579)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39550, 'Dzhankoyskiy rayon', 231, 3581)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39551, 'Dnipro rural raion', 231, 3588)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39552, 'Chortkiv Raion', 231, 3570)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39553, 'Chernihiv Raion', 231, 3590)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39554, 'Cherkasy Raion', 231, 3591)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39555, 'Brovary Raion', 231, 3579)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39556, 'Borispol’skiy Rayon', 231, 3579)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39557, 'Bolhrad Raion', 231, 3575)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39558, 'Bohodukhivskyi Raion', 231, 3585)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39559, 'Beryslav Raion', 231, 3584)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39560, 'Berezivka Raion', 231, 3575)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39561, 'Berehove Raion', 231, 3567)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39562, 'Berdyansk Raion', 231, 3566)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39563, 'Berdychivskyy Rayon', 231, 3565)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39564, 'Belogorskiy rayon', 231, 3581)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39565, 'Bilhorod-Dnistrovskyy Raion', 231, 3575)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39566, 'Bashtanka Raion', 231, 3576)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39567, 'Bakhchysarai Raion', 231, 3581)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39568, 'Bakhmut Raion', 231, 3587)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39569, 'Okhtyrskiy Rayon', 231, 3571)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39570, 'Gorodskoy okrug Yalta', 231, 3581)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39571, 'Kerchens''ka Mis''ka Rada', 231, 3581)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39572, 'Lozova City Council', 231, 3585)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39573, 'Kharkiv City Council', 231, 3585)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39574, 'Chuhuiv City Council', 231, 3585)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39575, 'Kupianska Miskrada', 231, 3585)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39576, 'Iziumska Miskrada', 231, 3585)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39577, 'Volodymyr-Volynska Miskrada', 231, 3568)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39578, 'Kovel’s’ka Mis’krada', 231, 3568)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39579, 'Luts’ka Mis’krada', 231, 3568)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39580, 'Dubenska Miskrada', 231, 3573)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39581, 'Rivnenska Miskrada', 231, 3573)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39582, 'Stryys’ka Mis’krada', 231, 3577)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39583, 'Sambirs’ka Mis’krada', 231, 3577)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39584, 'Zviahel Miskrada', 231, 3565)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39585, 'Bilotserkivska Miskrada', 231, 3579)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39586, 'Nizhyns’ka Mis’krada', 231, 3590)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39587, 'Novhorod-Sivers’ka Mis’krada', 231, 3590)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39588, 'Shostkyns’ka Mis’krada', 231, 3571)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39589, 'Konotops’ka Mis’krada', 231, 3571)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39590, 'Mykolayiv urban raion', 231, 3576)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39591, 'Vyzhnytsya Raion', 231, 3589)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39592, 'Feodosiiskyi Raion', 231, 3581)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39593, 'Yevpatoriiskyi Raion', 231, 3581)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39594, 'Varaskyi Raion', 231, 3573)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39595, 'Odeskyi Raion', 231, 3575)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39596, 'Lvivskyi Raion', 231, 3577)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39597, 'Chervonohradskyi Raion', 231, 3577)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39598, 'Drohobytskyi Raion', 231, 3577)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39599, 'Buchasnskyi Raion', 231, 3579)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39600, 'Khersonskyi Raion', 231, 3584)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39601, 'Alchevskyi Raion', 231, 3578)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39602, 'Luhanskyi Raion', 231, 3578)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39603, 'Rovenkivskyi Raion', 231, 3578)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39604, 'Sievierodonetskyi Raion', 231, 3578)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39605, 'Shchastynskyi Raion', 231, 3578)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39606, 'Ivano-Frankivskyi Raion', 231, 3586)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39607, 'Mariupolskyi Raion', 231, 3587)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39608, 'Kramatorskyi Raion', 231, 3587)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39609, 'Kalmiuskyi Raion', 231, 3587)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39610, 'Horlivskyi Raion', 231, 3587)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39611, 'Donetskyi Raion', 231, 3587)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39612, 'Kamianskyi Raion', 231, 3588)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39613, 'Dnistrovskyi Raion', 231, 3589)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39614, 'Chernivestkyi Raion', 231, 3589)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39615, 'Mpigi District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39616, 'Namutumba District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39617, 'Bukedea District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39618, 'Apac District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39619, 'Arua District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39620, 'Bundibugyo District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39621, 'Bushenyi District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39622, 'Gulu District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39623, 'Hoima District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39624, 'Iganga District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39625, 'Jinja District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39626, 'Kabale District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39627, 'Kabarole District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39628, 'Kalangala District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39629, 'Kampala District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39630, 'Kamuli District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39631, 'Kapchorwa District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39632, 'Kasese District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39633, 'Kibale District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39634, 'Kiboga District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39635, 'Kisoro District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39636, 'Kitgum District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39637, 'Kotido District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39638, 'Kumi District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39639, 'Lira District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39640, 'Luwero District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39641, 'Masindi District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39642, 'Mbale District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39643, 'Mbarara District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39644, 'Moroto District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39645, 'Moyo District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39646, 'Mubende District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39647, 'Mukono District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39648, 'Nebbi District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39649, 'Ntungamo District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39650, 'Pallisa District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39651, 'Rakai District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39652, 'Rukungiri District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39653, 'Soroti District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39654, 'Tororo District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39655, 'Adjumani District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39656, 'Bugiri District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39657, 'Busia District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39658, 'Katakwi District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39659, 'Nakasongola District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39660, 'Sembabule District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39661, 'Kaberamaido District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39662, 'Kamwenge District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39663, 'Kanungu District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39664, 'Kayunga District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39665, 'Kyenjojo District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39666, 'Mayuge District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39667, 'Nakapiripirit District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39668, 'Pader District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39669, 'Sironko District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39670, 'Wakiso District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39671, 'Yumbe District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39672, 'Abim District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39673, 'Amolatar District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39674, 'Amuria District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39675, 'Amuru District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39676, 'Budaka District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39677, 'Bududa District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39678, 'Buliisa District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39679, 'Butaleja District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39680, 'Dokolo District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39681, 'Ibanda District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39682, 'Isingiro District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39683, 'Kaabong District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39684, 'Kaliro District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39685, 'Kiruhura District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39686, 'Koboko District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39687, 'Lyantonde District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39688, 'Manafwa District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39689, 'Maracha District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39690, 'Mityana District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39691, 'Nakaseke District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39692, 'Oyam District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39693, 'Bukwo District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39694, 'Nwoya District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39695, 'Kalungu District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39696, 'Butambala District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39697, 'Amudat District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39698, 'Napak District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39699, 'Lamwo District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39700, 'Zombo District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39701, 'Kiryandongo District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39702, 'Kole District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39703, 'Agago District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39704, 'Otuke District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39705, 'Alebtong District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39706, 'Serere District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39707, 'Ngora District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39708, 'Buyende District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39709, 'Kibuku District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39710, 'Bulambuli District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39711, 'Kween District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39712, 'Namayingo District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39713, 'Buvuma District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39714, 'Buikwe District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39715, 'Gomba District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39716, 'Bukomansimbi District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39717, 'Lwengo District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39718, 'Kyegegwa District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39719, 'Kyankwanzi District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39720, 'Ntoroko District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39721, 'Rubirizi District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39722, 'Buhweju District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39723, 'Mitoma District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39724, 'Sheema District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39725, 'Luuka District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39726, 'Masaka District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39727, 'Butebo District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39728, 'Kyotera District', 232, 3592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39729, 'Namisindwa District', 232, 3593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39730, 'Omoro District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39731, 'Pakwach District', 232, 3594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39732, 'Kakumiro District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39733, 'Kagadi District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39734, 'Rubanda District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39735, 'Bunyangabu District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39736, 'Rukiga District', 232, 3595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39737, 'Russell County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39738, 'Long County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39739, 'Boone County', 234, 3652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39740, 'Rowan County', 234, 3652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39741, 'Bibb County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39742, 'Campbell County', 234, 3618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39743, 'Blount County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39744, 'Bullock County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39745, 'Butler County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39746, 'Calhoun County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39747, 'Chambers County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39748, 'Cherokee County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39749, 'Chilton County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39750, 'Choctaw County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39751, 'Clarke County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39752, 'Clay County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39753, 'Cleburne County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39754, 'Coffee County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39755, 'Colbert County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39756, 'Conecuh County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39757, 'Coosa County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39758, 'Covington County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39759, 'Crenshaw County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39760, 'Cullman County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39761, 'Dale County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39762, 'Dallas County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39763, 'DeKalb County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39764, 'Elmore County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39765, 'Escambia County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39766, 'Etowah County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39767, 'Fayette County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39768, 'Franklin County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39769, 'Geneva County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39770, 'Greene County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39771, 'Hale County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39772, 'Henry County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39773, 'Houston County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39774, 'Jackson County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39775, 'Jefferson County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39776, 'Lamar County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39777, 'Lauderdale County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39778, 'Lawrence County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39779, 'Lee County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39780, 'Limestone County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39781, 'Lowndes County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39782, 'Macon County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39783, 'Madison County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39784, 'Marengo County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39785, 'Marion County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39786, 'Marshall County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39787, 'Mobile County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39788, 'Monroe County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39789, 'Montgomery County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39790, 'Morgan County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39791, 'Perry County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39792, 'Pickens County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39793, 'Pike County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39794, 'Randolph County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39795, 'Saint Clair County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39796, 'Shelby County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39797, 'Sumter County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39798, 'Talladega County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39799, 'Tallapoosa County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39800, 'Tuscaloosa County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39801, 'Walker County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39802, 'Washington County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39803, 'Wilcox County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39804, 'Winston County', 234, 3621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39805, 'Arkansas County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39806, 'Ashley County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39807, 'Baxter County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39808, 'Benton County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39809, 'Boone County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39810, 'Bradley County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39811, 'Calhoun County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39812, 'Carroll County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39813, 'Chicot County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39814, 'Clark County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39815, 'Clay County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39816, 'Cleburne County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39817, 'Cleveland County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39818, 'Columbia County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39819, 'Conway County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39820, 'Craighead County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39821, 'Crawford County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39822, 'Crittenden County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39823, 'Cross County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39824, 'Dallas County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39825, 'Desha County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39826, 'Drew County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39827, 'Faulkner County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39828, 'Franklin County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39829, 'Fulton County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39830, 'Garland County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39831, 'Grant County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39832, 'Greene County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39833, 'Hempstead County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39834, 'Hot Spring County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39835, 'Howard County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39836, 'Independence County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39837, 'Izard County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39838, 'Jackson County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39839, 'Jefferson County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39840, 'Johnson County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39841, 'Lafayette County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39842, 'Lawrence County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39843, 'Lee County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39844, 'Lincoln County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39845, 'Little River County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39846, 'Logan County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39847, 'Lonoke County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39848, 'Madison County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39849, 'Marion County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39850, 'Miller County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39851, 'Mississippi County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39852, 'Monroe County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39853, 'Montgomery County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39854, 'Nevada County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39855, 'Newton County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39856, 'Ouachita County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39857, 'Perry County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39858, 'Phillips County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39859, 'Pike County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39860, 'Poinsett County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39861, 'Polk County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39862, 'Pope County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39863, 'Prairie County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39864, 'Pulaski County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39865, 'Randolph County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39866, 'Saint Francis County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39867, 'Saline County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39868, 'Scott County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39869, 'Searcy County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39870, 'Sebastian County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39871, 'Sevier County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39872, 'Sharp County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39873, 'Stone County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39874, 'Union County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39875, 'Van Buren County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39876, 'Washington County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39877, 'White County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39878, 'Woodruff County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39879, 'Yell County', 234, 3605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39880, 'Washington County', 234, 3606)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39881, 'Kent County', 234, 3607)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39882, 'New Castle County', 234, 3607)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39883, 'Sussex County', 234, 3607)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39884, 'Alachua County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39885, 'Baker County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39886, 'Bay County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39887, 'Bradford County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39888, 'Brevard County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39889, 'Broward County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39890, 'Calhoun County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39891, 'Charlotte County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39892, 'Citrus County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39893, 'Clay County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39894, 'Collier County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39895, 'Columbia County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39896, 'DeSoto County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39897, 'Dixie County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39898, 'Duval County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39899, 'Escambia County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39900, 'Flagler County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39901, 'Franklin County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39902, 'Gadsden County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39903, 'Gilchrist County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39904, 'Glades County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39905, 'Gulf County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39906, 'Hamilton County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39907, 'Hardee County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39908, 'Hendry County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39909, 'Hernando County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39910, 'Highlands County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39911, 'Hillsborough County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39912, 'Holmes County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39913, 'Indian River County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39914, 'Jackson County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39915, 'Jefferson County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39916, 'Lafayette County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39917, 'Lake County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39918, 'Lee County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39919, 'Leon County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39920, 'Levy County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39921, 'Liberty County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39922, 'Madison County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39923, 'Manatee County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39924, 'Marion County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39925, 'Martin County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39926, 'Miami-Dade County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39927, 'Monroe County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39928, 'Nassau County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39929, 'Okaloosa County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39930, 'Okeechobee County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39931, 'Orange County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39932, 'Osceola County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39933, 'Palm Beach County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39934, 'Pasco County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39935, 'Pinellas County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39936, 'Polk County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39937, 'Putnam County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39938, 'Saint Johns County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39939, 'Saint Lucie County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39940, 'Santa Rosa County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39941, 'Sarasota County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39942, 'Seminole County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39943, 'Sumter County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39944, 'Suwannee County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39945, 'Taylor County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39946, 'Union County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39947, 'Volusia County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39948, 'Wakulla County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39949, 'Walton County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39950, 'Washington County', 234, 3608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39951, 'Appling County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39952, 'Atkinson County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39953, 'Bacon County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39954, 'Baker County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39955, 'Baldwin County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39956, 'Banks County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39957, 'Barrow County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39958, 'Bartow County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39959, 'Ben Hill County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39960, 'Berrien County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39961, 'Bibb County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39962, 'Bleckley County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39963, 'Brantley County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39964, 'Brooks County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39965, 'Bryan County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39966, 'Bulloch County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39967, 'Burke County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39968, 'Butts County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39969, 'Calhoun County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39970, 'Camden County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39971, 'Candler County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39972, 'Carroll County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39973, 'Catoosa County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39974, 'Charlton County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39975, 'Chatham County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39976, 'Chattahoochee County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39977, 'Chattooga County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39978, 'Cherokee County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39979, 'Clarke County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39980, 'Clay County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39981, 'Clayton County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39982, 'Clinch County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39983, 'Cobb County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39984, 'Coffee County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39985, 'Colquitt County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39986, 'Columbia County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39987, 'Cook County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39988, 'Coweta County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39989, 'Crawford County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39990, 'Crisp County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39991, 'Dade County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39992, 'Dawson County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39993, 'DeKalb County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39994, 'Decatur County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39995, 'Dodge County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39996, 'Dooly County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39997, 'Dougherty County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39998, 'Douglas County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (39999, 'Early County', 234, 3609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (40000, 'Echols County', 234, 3609)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM subregions');
  }
}
