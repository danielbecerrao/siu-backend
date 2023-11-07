import type { MigrationInterface, QueryRunner } from 'typeorm';

export class Subregions51695875077835 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20001, 'Sŏn’gyo-guyŏk', 121, 1638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20002, 'Songnim-si', 121, 1643)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20003, 'Songhwa-gun', 121, 1642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20004, 'Sŏngch’ŏn-gun', 121, 1639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20005, 'Sŏnch’ŏn-gun', 121, 1640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20006, 'Sŏhŭng-gun', 121, 1643)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20007, 'Sinyang-gun', 121, 1639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20008, 'Sinwŏn-gun', 121, 1642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20009, 'Sinp’yŏng-gun', 121, 1643)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20010, 'Sin’gye-gun', 121, 1643)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20011, 'Sinch’ŏn-gun', 121, 1642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20012, 'Sep’o-gun', 121, 1641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20013, 'Sariwŏn-si', 121, 1643)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20014, 'Sangwŏn-gun', 121, 1638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20015, 'Samsŏk-kuyŏk', 121, 1638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20016, 'Samch’ŏn-gun', 121, 1642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20017, 'Sadong-guyŏk', 121, 1638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20018, 'P’yŏngwŏn-gun', 121, 1639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20019, 'P’yŏngsŏng-si', 121, 1639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20020, 'P’yŏngsan-gun', 121, 1643)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20021, 'P’yŏnggang-gun', 121, 1641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20022, 'P’yŏngch’ŏn-guyŏk', 121, 1638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20023, 'Pongch’ŏn-gun', 121, 1642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20024, 'Pyŏksŏng-gun', 121, 1642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20025, 'Pukch''ang', 121, 1639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20026, 'Pot’onggang-guyŏk', 121, 1638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20027, 'Pŏptong-gun', 121, 1641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20028, 'Pongsan-gun', 121, 1643)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20029, 'P’ihyŏn-gun', 121, 1640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20030, 'P’anmun-gun', 121, 1643)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20031, 'P’an’gyo-gun', 121, 1641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20032, 'Pakch’ŏn-gun', 121, 1640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20033, 'Paech’ŏn-gun', 121, 1642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20034, 'Ongjin-gun', 121, 1642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20035, 'Onch’ŏn-gun', 121, 1639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20036, 'Nangnang', 121, 1638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20037, 'Nagwŏn-gun', 121, 1644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20038, 'Mundŏk-kun', 121, 1639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20039, 'Munch’ŏn-si', 121, 1641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20040, 'Moranbong', 121, 1638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20041, 'Man’gyŏngdae', 121, 1638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20042, 'Maengsan-gun', 121, 1639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20043, 'Kwaksan-gun', 121, 1640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20044, 'Kwail-gun', 121, 1642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20045, 'Kusŏng-si', 121, 1640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20046, 'Kŭmya-gun', 121, 1644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20047, 'Kŭmgang-gun', 121, 1641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20048, 'Kŭmch’ŏn-gun', 121, 1643)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20049, 'Kujang-gun', 121, 1640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20050, 'Kowŏn-gun', 121, 1644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20051, 'Kosŏng-gun', 121, 1641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20052, 'Kosan-gun', 121, 1641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20053, 'Koksan-gun', 121, 1643)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20054, 'Kimhwa-gun', 121, 1641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20055, 'Kangnyŏng-gun', 121, 1642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20056, 'Kangnam-gun', 121, 1638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20057, 'Kangdong-gun', 121, 1638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20058, 'Kaesŏng-si', 121, 1642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20059, 'Kaep’ung-gun', 121, 1642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20060, 'Kaech’ŏn-si', 121, 1639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20061, 'Insan-gun', 121, 1643)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20062, 'Ich’ŏn-gun', 121, 1641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20063, 'Hyŏngjesan-guyŏk', 121, 1638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20064, 'Hyangsan-gun', 121, 1640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20065, 'Hwangju-gun', 121, 1643)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20066, 'Hoeyang-gun', 121, 1641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20067, 'Hoech''ang', 121, 1639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20068, 'Hamju-gun', 121, 1644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20069, 'Hamhŭng-si', 121, 1644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20070, 'Haeju-si', 121, 1642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20071, 'Chŭngsan-gun', 121, 1639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20072, 'Chung', 121, 1638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20073, 'Chunghwa-gun', 121, 1638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20074, 'Ch’ŏrwŏn''-gun', 121, 1641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20075, 'Ch’ŏnnae-gun', 121, 1641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20076, 'Chongpyong County', 121, 1644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20077, 'Ch’ŏngnam-gu', 121, 1639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20078, 'Chŏngju-gun', 121, 1640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20079, 'Ch’ŏngdan-gun', 121, 1642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20080, 'Ch’ŏlsan-gun', 121, 1640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20081, 'Changyŏn-gun', 121, 1642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20082, 'Changp’ung-gun', 121, 1642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20083, 'Ch’angdo-gun', 121, 1641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20084, 'Chaeryŏng-gun', 121, 1642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20085, 'Anju-si', 121, 1639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20086, 'Anbyŏn-gun', 121, 1641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20087, 'Anak-kun', 121, 1642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20088, 'Hanggu-guyŏk', 121, 1639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20089, 'Waudo-guyŏk', 121, 1639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20090, 'Yŏnsa-gun', 121, 1646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20091, 'Yongnim-gun', 121, 1647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20092, 'Yŏnggwang-gun', 121, 1644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20093, 'Wiwŏn-gun', 121, 1647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20094, 'Usi-gun', 121, 1647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20095, 'Unsan-gun', 121, 1640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20096, 'Unhŭng-gun', 121, 1645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20097, 'Kyŏnghŭng', 121, 1646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20098, 'Uiju County', 121, 1640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20099, 'Tongsin-gun', 121, 1647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20100, 'Tongch’ang-gun', 121, 1640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20101, 'Tŏksŏng-gun', 121, 1644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20102, 'Tanch’ŏn-gun', 121, 1644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20103, 'Taehŭng-gun', 121, 1639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20104, 'Taehongdan-gun', 121, 1645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20105, 'Taegwan-gun', 121, 1640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20106, 'Songwŏn-gun', 121, 1647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20107, 'Sŏnggan-gun', 121, 1647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20108, 'Sŏnbong-gun', 121, 1648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20109, 'Sinŭiju-si', 121, 1640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20110, 'Sinp’o-si', 121, 1644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20111, 'Sinhŭng-gun', 121, 1644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20112, 'Sijung-gun', 121, 1647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20113, 'Samsu-gun', 121, 1645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20114, 'Samjiyŏn-gun', 121, 1645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20115, 'Sakchu-gun', 121, 1640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20116, 'Kyŏngwŏn', 121, 1646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20117, 'Pyŏktong-gun', 121, 1640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20118, 'Puryŏng-gun', 121, 1646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20119, 'P’ungsŏ-gun', 121, 1645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20120, 'Kimhyŏnggwŏn-gun', 121, 1645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20121, 'Pukch’ŏng-gun', 121, 1644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20122, 'Pujŏn-gun', 121, 1644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20123, 'Poch’ŏn-gun', 121, 1645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20124, 'Paegam-gun', 121, 1645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20125, 'Ŏrang-gun', 121, 1646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20126, 'Onsŏng-gun', 121, 1646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20127, 'Nangnim-gun', 121, 1647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20128, 'Rajin', 121, 1648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20129, 'Hwasŏng-gun', 121, 1646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20130, 'Myŏngch’ŏn-gun', 121, 1646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20131, 'Musan-gun', 121, 1646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20132, 'Manp’o-si', 121, 1647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20133, 'Kyŏngsŏng-gun', 121, 1646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20134, 'Kop’ung-gun', 121, 1647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20135, 'Kimjŏngsuk-kun', 121, 1645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20136, 'Kimch’aek-si', 121, 1646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20137, 'Kilchu-gun', 121, 1646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20138, 'Kapsan-gun', 121, 1645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20139, 'Kanggye-si', 121, 1647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20140, 'Iwŏn-gun', 121, 1644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20141, 'Hyesan-si', 121, 1645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20142, 'Hwap’yŏng-gun', 121, 1647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20143, 'Hwadae-gun', 121, 1646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20144, 'Hŭich’ŏn-si', 121, 1647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20145, 'Kimhyŏngjik-kun', 121, 1645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20146, 'Hongwŏn-gun', 121, 1644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20147, 'Hoeryŏng', 121, 1646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20148, 'Hŏch’ŏn-gun', 121, 1644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20149, 'Chunggang-gun', 121, 1647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20150, 'Ch’osan-gun', 121, 1647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20151, 'Ch’ŏnma-gun', 121, 1640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20152, 'Ch’ŏngjin-si', 121, 1646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20153, 'Chŏnch’ŏn-gun', 121, 1647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20154, 'Chasŏng-gun', 121, 1647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20155, 'Ch’angsŏng-gun', 121, 1640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20156, 'Changjin-gun', 121, 1644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20157, 'Changgang-gun', 121, 1647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20158, 'Ŭnsan-gun', 121, 1639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20159, 'Ch’ŏllima-guyŏk', 121, 1639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20160, 'Taean-guyŏk', 121, 1639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20161, 'Sudong-gu', 121, 1644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20162, 'Sindo-gun', 121, 1640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20163, 'Yongyŏn-gun', 121, 1642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20164, 'Ŭnjŏng-guyŏk', 121, 1638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20165, 'Yeongwol-gun', 122, 1657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20166, 'Yongsan-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20167, 'Yongin-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20168, 'Yeonggwang-gun', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20169, 'Yeongdeungpo-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20170, 'Yeongdong-gun', 122, 1660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20171, 'Yeongdeok-gun', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20172, 'Yeongdo-gu', 122, 1653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20173, 'Yeongcheon-si', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20174, 'Yeongam-gun', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20175, 'Yeoncheon-gun', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20176, 'Yeoju-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20177, 'Yeosu-si', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20178, 'Yesan-gun', 122, 1659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20179, 'Yecheon-gun', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20180, 'Yangyang-gun', 122, 1657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20181, 'Yangsan-si', 122, 1664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20182, 'Yangpyeong-gun', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20183, 'Yanggu-gun', 122, 1657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20184, 'Wonju-si', 122, 1657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20185, 'Gyeongju', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20186, 'Wando-gun', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20187, 'Eunpyeong-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20188, 'Eumseong-gun', 122, 1660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20189, 'Ulleung-gun', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20190, 'Ulju-gun', 122, 1649)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20191, 'Uljin-gun', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20192, 'Uiseong-gun', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20193, 'Uiryeong-gun', 122, 1664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20194, 'Uijeongbu-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20195, 'Dongnae-gu', 122, 1653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20196, 'Dongjak-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20197, 'Donghae-si', 122, 1657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20198, 'Dong-gu', 122, 1653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20199, 'Dongducheon', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20200, 'Dongdaemun-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20201, 'Dobong-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20202, 'Danyang-gun', 122, 1660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20203, 'Dangjin-si', 122, 1659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20204, 'Damyang-gun', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20205, 'Dalseong-gun', 122, 1651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20206, 'Daedeok-gu', 122, 1650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20207, 'Suwon-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20208, 'Suncheon-si', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20209, 'Sunchang-gun', 122, 1662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20210, 'Seosan-si', 122, 1659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20211, 'Seongnam-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20212, 'Seongju-gun', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20213, 'Gangdong-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20214, 'Gangbuk-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20215, 'Sokcho-si', 122, 1657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20216, 'Seogwipo-si', 122, 1663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20217, 'Seo-gu', 122, 1653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20218, 'Seodaemun-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20219, 'Seocheon-gun', 122, 1659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20220, 'Sinan-gun', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20221, 'Siheung', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20222, 'Sangju-si', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20223, 'Sancheong-gun', 122, 1664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20224, 'Pyeongtaek', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20225, 'Pyeongchang-gun', 122, 1657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20226, 'Buyeo-gun', 122, 1659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20227, 'Bucheon-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20228, 'Buan-gun', 122, 1662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20229, 'Boeun-gun', 122, 1660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20230, 'Boseong-gun', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20231, 'Boryeong-si', 122, 1659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20232, 'Bonghwa-gun', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20233, 'Pohang-si', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20234, 'Pocheon-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20235, 'Paju-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20236, 'Okcheon-gun', 122, 1660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20237, 'Nonsan-si', 122, 1659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20238, 'Namyangju-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20239, 'Namwon', 122, 1662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20240, 'Namhae-gun', 122, 1664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20241, 'Naju-si', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20242, 'Muju-gun', 122, 1662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20243, 'Muan-gun', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20244, 'Mokpo-si', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20245, 'Miryang-si', 122, 1664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20246, 'Mapo-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20247, 'Gyeongsan-si', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20248, 'Gwangyang-si', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20249, 'Gwangsan-gu', 122, 1656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20250, 'Gwangju-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20251, 'Gwanak-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20252, 'Gurye-gun', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20253, 'Guro-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20254, 'Gunwi-gun', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20255, 'Gunsan-si', 122, 1662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20256, 'Geumsan-gun', 122, 1659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20257, 'Gimpo-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20258, 'Gimje-si', 122, 1662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20259, 'Gumi-si', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20260, 'Goyang-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20261, 'Goseong-gun', 122, 1657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20262, 'Goseong-gun', 122, 1664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20263, 'Goryeong-gun', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20264, 'Gongju-si', 122, 1659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20265, 'Gokseong-gun', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20266, 'Geoje-si', 122, 1664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20267, 'Goheung-gun', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20268, 'Goesan-gun', 122, 1660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20269, 'Geochang-gun', 122, 1664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20270, 'Gochang-gun', 122, 1662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20271, 'Gimhae-si', 122, 1664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20272, 'Gangseo-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20273, 'Gangneung-si', 122, 1657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20274, 'Gangnam-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20275, 'Gangjin-gun', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20276, 'Ganghwa-gun', 122, 1658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20277, 'Inje-gun', 122, 1657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20278, 'Imsil-gun', 122, 1662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20279, 'Iksan-si', 122, 1662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20280, 'Icheon-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20281, 'Hwasun-gun', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20282, 'Hongseong-gun', 122, 1659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20283, 'Hongcheon-gun', 122, 1657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20284, 'Hoengseong-gun', 122, 1657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20285, 'Hapcheon-gun', 122, 1664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20286, 'Hamyang-gun', 122, 1664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20287, 'Hampyeong-gun', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20288, 'Haman-gun', 122, 1664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20289, 'Haenam-gun', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20290, 'Hadong-gun', 122, 1664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20291, 'Yeongju-si', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20292, 'Tongyeong-si', 122, 1664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20293, 'Chungju-si', 122, 1660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20294, 'Jung-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20295, 'Jung-gu', 122, 1653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20296, 'Chuncheon-si', 122, 1657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20297, 'Cheorwon-gun', 122, 1657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20298, 'Jeonju-si', 122, 1662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20299, 'Cheongyang-gun', 122, 1659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20300, 'Jeongeup-si', 122, 1662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20301, 'Jeongseon-gun', 122, 1657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20302, 'Jongno-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20303, 'Cheongju-si', 122, 1660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20304, 'Cheongdo-gun', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20305, 'Cheonan-si', 122, 1659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20306, 'Jinju-si', 122, 1664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20307, 'Jindo-gun', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20308, 'Jincheon-gun', 122, 1660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20309, 'Jinan-gun', 122, 1662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20310, 'Chilgok-gun', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20311, 'Jeju-si', 122, 1663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20312, 'Jecheon-si', 122, 1660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20313, 'Changwon-si', 122, 1664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20314, 'Jangsu-gun', 122, 1662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20315, 'Jangseong-gun', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20316, 'Changnyeong-gun', 122, 1664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20317, 'Jangheung-gun', 122, 1661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20318, 'Asan-si', 122, 1659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20319, 'Anyang-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20320, 'Anseong', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20321, 'Andong-si', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20322, 'Saha-gu', 122, 1653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20323, 'Seongdong-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20324, 'Gwangjin-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20325, 'Jungnang-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20326, 'Nowon-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20327, 'Seongbuk-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20328, 'Yangcheon-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20329, 'Geumcheon-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20330, 'Seocho-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20331, 'Songpa-gu', 122, 1652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20332, 'Hwacheon-gun', 122, 1657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20333, 'Taebaek-si', 122, 1657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20334, 'Hanam-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20335, 'Ansan-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20336, 'Gunpo-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20337, 'Gwangmyeong-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20338, 'Osan-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20339, 'Uiwang-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20340, 'Gwacheon-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20341, 'Guri-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20342, 'Yangju-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20343, 'Seo-gu', 122, 1658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20344, 'Gyeyang-gu', 122, 1658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20345, 'Bupyeong-gu', 122, 1658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20346, 'Namdong-gu', 122, 1658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20347, 'Yeonsu-gu', 122, 1658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20348, 'Dong-gu', 122, 1658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20349, 'Taean-gun', 122, 1659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20350, 'Gyeryong-si', 122, 1659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20351, 'Jeungpyeong-gun', 122, 1660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20352, 'Yuseong-gu', 122, 1650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20353, 'Seo-gu', 122, 1650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20354, 'Jung-gu', 122, 1650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20355, 'Dong-gu', 122, 1650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20356, 'Yeongyang-gun', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20357, 'Dalseo-gu', 122, 1651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20358, 'Seo-gu', 122, 1651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20359, 'Nam-gu', 122, 1651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20360, 'Jung-gu', 122, 1651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20361, 'Buk-gu', 122, 1651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20362, 'Dong-gu', 122, 1651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20363, 'Suseong-gu', 122, 1651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20364, 'Seo-gu', 122, 1656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20365, 'Nam-gu', 122, 1656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20366, 'Buk-gu', 122, 1656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20367, 'Dong-gu', 122, 1656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20368, 'Sasang-gu', 122, 1653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20369, 'Yeonje-gu', 122, 1653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20370, 'Haeundae-gu', 122, 1653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20371, 'Gangseo-gu', 122, 1653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20372, 'Geumjeong-gu', 122, 1653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20373, 'Gijang-gun', 122, 1653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20374, 'Ongjin-gun', 122, 1658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20375, 'Suyeong-gu', 122, 1653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20376, 'Gimcheon-si', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20377, 'Hwaseong-si', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20378, 'Mungyeong-si', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20379, 'Sacheon-si', 122, 1664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20380, 'Samcheok-si', 122, 1657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20381, 'Wanju-gun', 122, 1662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20382, 'Cheongsong-gun', 122, 1654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20383, 'Gapyeong-gun', 122, 1655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20384, 'Busanjin-gu', 122, 1653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20385, 'Jung-gu', 122, 1658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20386, 'Michuhol', 122, 1658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20387, 'Nam-gu', 122, 1649)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20388, 'Dong-gu', 122, 1649)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20389, 'Jung-gu', 122, 1649)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20390, 'Buk-gu', 122, 1649)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20391, 'Buk-gu', 122, 1653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20392, 'Nam-gu', 122, 1653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20393, 'Sejong-Si', 122, 1665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20394, 'Ad Du‘ayyah', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20395, 'Ad Dasmah', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20396, 'Ash Sharq', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20397, 'Murqāb', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20398, 'Qiblah', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20399, 'Al Fayḩā’', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20400, 'Ash Shuwaykh aş Şinā‘īyah Wāḩid', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20401, 'Ash Shuwaykh aş Şinā‘īyah Ithnān', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20402, 'Ash Shuwaykh aş Şinā‘īyah Thalāthah', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20403, 'Ash Shuwaykh at Ta‘līmīyah', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20404, 'Ar Rawḑah', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20405, 'Mīnā’ ash Shuwaykh', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20406, 'Mu‘askarāt al Mubārakīyah', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20407, 'Mīnā’ ad Dawḩah', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20408, 'Jazīrat Umm an Namal', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20409, 'Al Maqwa‘', 124, 1670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20410, 'Janūb aş Şabāḩīyah', 124, 1670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20411, 'Shamāl ash Shu‘aybah', 124, 1670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20412, 'Janūb ash Shu‘aybah', 124, 1670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20413, 'Mīnā’ ‘Abd Allāh', 124, 1670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20414, 'Mu‘askarāt al Jahrā’', 124, 1668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20415, 'Al Jahrā’ al Gharbīyah', 124, 1668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20416, 'Al Jahrā’ aş Şinā‘īyah', 124, 1668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20417, 'Al Maqbarah', 124, 1668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20418, 'Aş Şulaybīyah', 124, 1668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20419, 'Aş Şulaybīyah az Zirā‘īyah', 124, 1668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20420, 'Aş Şulaybīyah aş Şinā‘īyah Wāḩid', 124, 1668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20421, 'Aş Şulaybīyah aş Şinā‘īyah Ithnān', 124, 1668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20422, 'Al ‘Āriḑīyah Takhzīn wa Isti‘mālāt al Ḩukūmīyah', 124, 1669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20423, 'Al ‘Āriḑīyah', 124, 1669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20424, 'Al Maţār', 124, 1669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20425, 'Ḍāḩiyat Mubārak al ‘Abd Allāh', 124, 1666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20426, 'Ḑāḩiyat Abū Fuţayrah', 124, 1671)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20427, 'Dasmān', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20428, 'Bunayd al Qār', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20429, 'Al Manşūrīyah', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20430, 'Al Qādisīyah', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20431, 'Ḑāḩiyat ‘Abd Allāh as Sālim', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20432, 'An Nuzhah', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20433, 'Al ‘Udaylīyah', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20434, 'Qurţubah', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20435, 'Al Yarmūk', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20436, 'Al Khālidīyah', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20437, 'Kayfān', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20438, 'Ash Shāmīyah', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20439, 'Ash Shuwaykh', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20440, 'Ash Shuwaykh aş Şiḩḩīyah', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20441, 'Gharnāţah', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20442, 'Aş Şulaybikhāt', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20443, 'Ad Dawḩah', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20444, 'As Surrah', 124, 1667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20445, 'Al Finţās', 124, 1670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20446, 'Al ‘Uqaylah', 124, 1670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20447, 'Jābir al ‘Alī', 124, 1670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20448, 'Az̧ Z̧ahr', 124, 1670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20449, 'Al Mahbūlah', 124, 1670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20450, 'Ar Riqqah', 124, 1670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20451, 'Hadīyah', 124, 1670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20452, 'Abū Ḩalīfah', 124, 1670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20453, 'Fahd al Aḩmad', 124, 1670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20454, 'Al Manqaf', 124, 1670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20455, 'Aş Şabāḩīyah', 124, 1670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20456, 'Al Faḩaḩīl', 124, 1670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20457, 'Madīnat al Aḩmadī', 124, 1670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20458, 'Amgharah', 124, 1668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20459, 'An Na‘īm', 124, 1668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20460, 'Al Qaşr', 124, 1668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20461, 'Al Wāḩah', 124, 1668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20462, 'Taymā’', 124, 1668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20463, 'An Nasīm', 124, 1668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20464, 'Al ‘Uyūn', 124, 1668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20465, 'Al Jahrā’', 124, 1668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20466, 'Ar Rayy', 124, 1669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20467, 'Ar Raq‘ī', 124, 1669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20468, 'Al Andalus', 124, 1669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20469, 'Abraq Khayţān', 124, 1669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20470, 'Al ‘Umarīyah', 124, 1669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20471, 'Ar Rābiyah', 124, 1669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20472, 'Al Firdaws', 124, 1669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20473, 'Şabāḩ an Nāşir', 124, 1669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20474, 'Ar Riḩāb', 124, 1669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20475, 'Ishbīliyah', 124, 1669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20476, 'Al Farwānīyah', 124, 1669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20477, 'Aḑ Ḑajīj', 124, 1669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20478, 'Jalīb ash Shuyūkh', 124, 1669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20479, 'Khayţān al Janūbī', 124, 1669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20480, 'As Sālimīyah', 124, 1666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20481, 'Ar Rumaythīyah', 124, 1666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20482, 'Salwá', 124, 1666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20483, 'Mushrif', 124, 1666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20484, 'Bayān', 124, 1666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20485, 'Al Jābirīyah', 124, 1666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20486, 'Ḩawallī', 124, 1666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20487, 'Ash Shuhadā’', 124, 1666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20488, 'Ḩaţţīn', 124, 1666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20489, 'As Salām', 124, 1666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20490, 'Aş Şadīq', 124, 1666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20491, 'Ash Sha‘b', 124, 1666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20492, 'Az Zahrā’', 124, 1666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20493, 'Şabāḩ as Sālim', 124, 1671)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20494, 'Al Masīlah', 124, 1671)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20495, 'Al ‘Adān', 124, 1671)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20496, 'Al Funayţīs', 124, 1671)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20497, 'Al Quşūr', 124, 1671)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20498, 'Mubārak al Kabīr', 124, 1671)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20499, 'Janūb al Wusţá', 124, 1671)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20500, 'Al Wusţá', 124, 1671)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20501, 'Şabḩan', 124, 1671)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20502, 'Al Qurayn', 124, 1671)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20503, 'Rayon Bayterek', 126, 1678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20504, 'Karakiyanskiy Rayon', 126, 1679)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20505, 'Bokeyordinskiy Rayon', 126, 1678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20506, 'Oyyl Aūdany', 126, 1681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20507, 'Terekti Aūdany', 126, 1678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20508, 'Temir Aūdany', 126, 1681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20509, 'Taypakskiy Sel''skiy Okrug', 126, 1678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20510, 'Dar''inskiy Sel''skiy Okrug', 126, 1678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20511, 'Temirskiy Rayon', 126, 1681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20512, 'Khromtaū Aūdany', 126, 1681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20513, 'Īsatay Aūdany', 126, 1680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20514, 'Mugalzharskiy Rayon', 126, 1681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20515, 'Martukskiy Rayon', 126, 1681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20516, 'Mangghystaū Aūdany', 126, 1679)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20517, 'Makhambetskiy Rayon', 126, 1680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20518, 'Makatskiy Rayon', 126, 1680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20519, 'Kargalinskiy Rayon', 126, 1681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20520, 'Qyzylqogha Aūdany', 126, 1680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20521, 'Khobdinskiy Rayon', 126, 1681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20522, 'Kaztalov Aūdany', 126, 1678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20523, 'Qaratöbe Aūdany', 126, 1678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20524, 'Taskalinskiy Rayon', 126, 1678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20525, 'Isatayskiy Rayon', 126, 1681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20526, 'Īnder Aūdany', 126, 1680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20527, 'Furmanovskiy Rayon', 126, 1678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20528, 'Zhylyoyskiy Rayon', 126, 1680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20529, 'Zhanibekskiy Rayon', 126, 1678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20530, 'Zhangaqala Aūdany', 126, 1678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20531, 'Syrymskiy Rayon', 126, 1678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20532, 'Kurmangazinskiy Rayon', 126, 1680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20533, 'Chingirlauskiy Rayon', 126, 1678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20534, 'Shalkarskiy Rayon', 126, 1681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20535, 'Akzhaikskiy Rayon', 126, 1678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20536, 'Börili Aūdany', 126, 1678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20537, 'Beyneuskiy Rayon', 126, 1679)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20538, 'Bayganinskiy Rayon', 126, 1681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20539, 'Balyqshy Aūdany', 126, 1680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20540, 'Algha Aūdany', 126, 1681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20541, 'Aqzhayyq Aūdany', 126, 1678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20542, 'Aqtöbe Aūdany', 126, 1681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20543, 'Ural''sk Gorodskaya Administratsiya', 126, 1678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20544, 'Atyrau Gorodskaya Administratsiya', 126, 1680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20545, 'Tupkaraganskiy Rayon', 126, 1679)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20546, 'Aktau Gorodskaya Administratsiya', 126, 1679)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20547, 'Zhanaozen Gorodskaya Administratsiya', 126, 1679)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20548, 'Aktobe Gorodskaya Administratsiya', 126, 1681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20549, 'Rayon Altay', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20550, 'Zhelezinskiy Rayon', 126, 1685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20551, 'Zharma Aūdany', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20552, 'Semey Gorodskaya Administratsiya', 126, 1696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20553, 'Zhanadalinskiy Rayon', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20554, 'Zhangaarqa Aūdany', 126, 1698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20555, 'Zhaksy', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20556, 'Zerendi', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20557, 'Zaysanskiy Rayon', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20558, 'Esil', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20559, 'Ereymentau', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20560, 'Aksu Gorodskaya Administratsiya', 126, 1685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20561, 'Qazybek Bī Aūdany', 126, 1688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20562, 'Zhanokorganskiy Rayon', 126, 1686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20563, 'Vozvyshenka Aūdany', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20564, 'Ayyrtauskiy Rayon', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20565, 'Arshaly', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20566, 'Ūälīkhanov Aūdany', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20567, 'Uygurskiy Rayon', 126, 1691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20568, 'Uspenskiy Rayon', 126, 1685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20569, 'Sarykol''skiy Rayon', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20570, 'Urdzharskiy Rayon', 126, 1696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20571, 'Ulytaū Aūdany', 126, 1698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20572, 'Bukhar Zhyrauskiy Rayon', 126, 1685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20573, 'Ulan Aūdany', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20574, 'Tyul’kubasskiy Rayon', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20575, 'Turkestan Gorodskaya Administratsiya', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20576, 'Tselinograd', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20577, 'Timiryazevskiy Rayon', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20578, 'Terengözek Aūdany', 126, 1686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20579, 'Tengiz Aūdany', 126, 1688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20580, 'Tel’man Aūdany', 126, 1688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20581, 'Tavricheskiy Rayon', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20582, 'Taskesken Aūdany', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20583, 'Tarbagatayskiy Rayon', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20584, 'Rayon Beimbeta Maylina', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20585, 'Talgarskiy Rayon', 126, 1691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20586, 'Yeskel''dinskiy Rayon', 126, 1697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20587, 'Talas Aūdany', 126, 1689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20588, 'Syrdar’inskiy Rayon', 126, 1686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20589, 'Bayzakskiy Rayon', 126, 1689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20590, 'Suzakskiy Rayon', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20591, 'Akkayynskiy Rayon', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20592, 'Sokolovka Aūdany', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20593, 'Shortandy', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20594, 'Shet Aūdany', 126, 1688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20595, 'Shemonaikhinskiy Rayon', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20596, 'Burabay', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20597, 'Shcherbaktinskiy Rayon', 126, 1685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20598, 'Rayon Shal Akyna', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20599, 'Semiozërnyy Rayon', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20600, 'Sileti Aūdany', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20601, 'Sayram Aūdany', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20602, 'Sarysū Aūdany', 126, 1689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20603, 'Saryagachskiy Rayon', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20604, 'Sarkandskiy Rayon', 126, 1697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20605, 'Samarskoe Aūdany', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20606, 'Rūzaevka Aūdany', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20607, 'Presnov Aūyldyq Okrūgi', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20608, 'Pavlodarskiy Rayon', 126, 1685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20609, 'Panfilovskiy Rayon', 126, 1697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20610, 'Maktaaral’skiy Rayon', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20611, 'Osakarovskiy Rayon', 126, 1688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20612, 'Denisovskiy Rayon', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20613, 'Nurinskiy Rayon', 126, 1688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20614, 'Novoshūl’ba Aūdany', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20615, 'Naurzumskiy Rayon', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20616, 'Rayymbek Aūdany', 126, 1692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20617, 'Moyynkumskiy Rayon', 126, 1689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20618, 'Moskovskiy Rayon', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20619, 'Molodezhnyy Aūdany', 126, 1688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20620, 'Abayskiy Rayon', 126, 1688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20621, 'Merke Aūdany', 126, 1689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20622, 'Mayskiy Rayon', 126, 1685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20623, 'Marqaköl Aūdany', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20624, 'Mamlyutskiy Rayon', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20625, 'Bulandy', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20626, 'Maqanshy Aūdany', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20627, 'Rayon Turara Ryskulova', 126, 1689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20628, 'Esil District', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20629, 'Kazygurtskiy Rayon', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20630, 'Uzunkol''skiy Rayon', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20631, 'Lenīngrad Aūdany', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20632, 'Tolebiyskiy Rayon', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20633, 'Akkulinskiy Rayon', 126, 1685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20634, 'Qyzyltū Aūdany', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20635, 'Otrarskiy Rayon', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20636, 'Rayon Imeni Gabita Musrepova', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20637, 'Kostanayskiy Rayon', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20638, 'Kürti Aūdany', 126, 1691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20639, 'Korgalzhyn', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20640, 'Kordayskiy Rayon', 126, 1689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20641, 'Kurchumskiy Rayon', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20642, 'Egindikol', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20643, 'Aktogayskiy Rayon', 126, 1685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20644, 'Tayynshinskiy Rayon', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20645, 'Karabalykskiy Rayon', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20646, 'Bögetköl Aūdany', 126, 1681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20647, 'Kokpektinskiy Rayon', 126, 1696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20648, 'Kokshetau Gorodskaya Adminstratsiya', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20649, 'Qīma Aūdany', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20650, 'Koksuskiy Rayon', 126, 1697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20651, 'Kīrov Aūdany', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20652, 'Kerbulakskiy Rayon', 126, 1697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20653, 'Kellerovka Aūdany', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20654, 'Kelesskiy Rayon', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20655, 'Kegenskiy Rayon', 126, 1691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20656, 'Kazalinskiy Rayon', 126, 1686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20657, 'Katon-Karagayskiy Rayon', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20658, 'Qaskeleng Aūdany', 126, 1691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20659, 'Karmakshinskiy Rayon', 126, 1686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20660, 'Karkaralinskiy Rayon', 126, 1688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20661, 'Karatal’skiy Rayon', 126, 1697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20662, 'Qarasū Aūdany', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20663, 'Aytekebiyskiy Rayon', 126, 1681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20664, 'Qapal Aūdany', 126, 1697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20665, 'Kamystinskiy Rayon', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20666, 'Terengköl Aūdany', 126, 1685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20667, 'Irtyshskiy Rayon', 126, 1685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20668, 'Irgizskiy Rayon', 126, 1681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20669, 'Iliyskiy Rayon', 126, 1691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20670, 'Kogalinskiy Sel''skiy Okrug', 126, 1697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20671, 'Glubokovskiy Rayon', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20672, 'Fëdorovskiy Rayon', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20673, 'Birzhan sal', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20674, 'Engbekshiqazaq Aūdany', 126, 1691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20675, 'Ekibastuz Gorodskaya Administratsiya', 126, 1685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20676, 'Zhūaly Aūdany', 126, 1689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20677, 'Zhezdi Aūdany', 126, 1688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20678, 'Zhetisayskiy Rayon', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20679, 'Zhangeldīn Aūdany', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20680, 'Zhambylskiy Rayon', 126, 1691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20681, 'Zhambylskiy Rayon', 126, 1689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20682, 'Zhambylskiy Rayon', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20683, 'Zhalaghash Aūdany', 126, 1686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20684, 'Zharkain', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20685, 'Shū Aūdany', 126, 1689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20686, 'Chubartauskiy Rayon', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20687, 'Chkalov Aūdany', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20688, 'Chīstopol’e Aūdany', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20689, 'Shelek Aūdany', 126, 1691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20690, 'Shīeli Aūdany', 126, 1686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20691, 'Shar Aūdany', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20692, 'Shardarinskiy Rayon', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20693, 'Lepsinskiy Sel''skiy Okrug', 126, 1697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20694, 'Rayon Magzhana Zhumabayeva', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20695, 'Ordabasy Aūdany', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20696, 'Mendykarinskiy Rayon', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20697, 'Borodulikhinskiy Rayon', 126, 1696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20698, 'Ülkennaryn Aūdany', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20699, 'Qyzylzhar Aūdany', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20700, 'Beskaragayskiy Rayon', 126, 1696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20701, 'Bayanaul’skiy Rayon', 126, 1685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20702, 'Balqash Aūdany', 126, 1691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20703, 'Sandyktau', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20704, 'Ayagoz Gorodskaya Administratsiya', 126, 1696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20705, 'Auezovskiy Rayon', 126, 1692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20706, 'Atbasar', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20707, 'Astrakhan', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20708, 'Aryqbalyq Aūdany', 126, 1684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20709, 'Arqalyq Qalalyq Äkimshiligi', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20710, 'Aral’skiy Rayon', 126, 1686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20711, 'Kabanbayskiy Sel''skiy Okrug', 126, 1697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20712, 'Amantoghay Aūdany', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20713, 'Amangeldi Aūdany', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20714, 'Rayon Baydibeka', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20715, 'Akkol', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20716, 'Alakol District', 126, 1692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20717, 'Aktogayskiy Rayon', 126, 1688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20718, 'Aksuskiy Rayon', 126, 1697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20719, 'Aqsūat Aūdany', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20720, 'Agadyrskiy Rayon', 126, 1688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20721, 'Abayskiy Rayon', 126, 1696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20722, 'Altynsarinskiy Rayon', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20723, 'Kostanay Gorodskaya Administratsiya', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20724, 'Zhitiqara Qalalyq Äkimdigi', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20725, 'Lisakovsk Gorodskaya Administratsiya', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20726, 'Rudniy Gorodskaya Administratsiya', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20727, 'Oktyabr’ Aūdany', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20728, 'Toqyraūyn Aūdany', 126, 1688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20729, 'Zhezkazgan Gorodskaya Administratsiya', 126, 1698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20730, 'Balkhash Gorodskaya Administratsiya', 126, 1688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20731, 'Karazhal Gorodskaya Administratsiya', 126, 1698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20732, 'Satpayev Gorodskaya Administratsiya', 126, 1698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20733, 'Stepnogorsk Gorodskaya Administratsiya', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20734, 'Karaganda Gorodskaya Administratsiya', 126, 1688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20735, 'Abay Qalasy', 126, 1688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20736, 'Saran'' Gorodskaya Administratsiya', 126, 1688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20737, 'Temirtau Gorodskaya Administratsiya', 126, 1688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20738, 'Shakhtinsk Gorodskaya Administratsiya', 126, 1688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20739, 'Arys'' Gorodskaya Administratsiya', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20740, 'Arys Qalasy', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20741, 'Kentau Gorodskaya Administratsiya', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20742, 'Türkistan Qalasy', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20743, 'Taraz Gorodskaya Administratsiya', 126, 1689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20744, 'Zhangatas Qalasy', 126, 1689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20745, 'Qarataū Qalasy', 126, 1689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20746, 'Shū Qalasy', 126, 1689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20747, 'Kapshagay city', 126, 1692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20748, 'Talghar Qalasy', 126, 1691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20749, 'Taldyqorghan Qalasy', 126, 1692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20750, 'Tekeli Gorodskaya Administratsiya', 126, 1697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20751, 'Semey Qalasy', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20752, 'Öskemen Qalalyq Äkimshiligi', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20753, 'Ridder Gorodskaya Administratsiya', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20754, 'Serebryansk Qalasy', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20755, 'Pavlodar Gorodskaya Administratsiya', 126, 1685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20756, 'Ekibastuz Qalasy', 126, 1685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20757, 'Abralinskiy Rayon', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20758, 'Kazygurt District', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20759, 'Bayzak District', 126, 1689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20760, 'Korday', 126, 1689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20761, 'Bukhar-Zhyrau', 126, 1688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20762, 'Zhambyl District', 126, 1692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20763, 'Munaily', 126, 1679)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20764, 'Zhylyoi', 126, 1680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20765, 'Kyzylkoga', 126, 1680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20766, 'Karasay', 126, 1692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20767, 'Petropavlovsk Gorodskaya Administratsiya', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20768, 'Almatinskiy Rayon', 126, 1695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20769, 'Esil Aūdany', 126, 1695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20770, 'Saryarkinskiy Rayon', 126, 1695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20771, 'Baykonurskiy Rayon', 126, 1695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20772, 'Kurchatov Gorodskaya Administratsiya', 126, 1696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20773, 'Ayagozskiy Rayon', 126, 1696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20774, 'Zaysanskaya Gorodskaya Administratsiya', 126, 1682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20775, 'Karatauskiy Rayon', 126, 1693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20776, 'Rayon Sauran', 126, 1690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20777, 'Nauryzbayskiy Rayon', 126, 1692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20778, 'Auliyekol''skiy Rayon', 126, 1687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20779, 'Taldykorgan Gorodskaya Administratsiya', 126, 1697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20780, 'Kyzylorda Gorodskaya Administratsiya', 126, 1686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20781, 'Karasayskiy Rayon', 126, 1691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20782, 'Kosshy Gorodskaya Administratsiya', 126, 1683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20783, 'Muang Houayxay', 127, 1713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20784, 'Muang Ngeun', 127, 1700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20785, 'Muang Xiengkhor', 127, 1709)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20786, 'Muang Xianghon', 127, 1700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20787, 'Muang Xépôn', 127, 1702)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20788, 'Muang Xai', 127, 1705)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20789, 'Muang Xaignabouli', 127, 1700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20790, 'Muang Vapi', 127, 1703)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20791, 'Muang Vangviang', 127, 1701)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20792, 'Muang Thoulakhôm', 127, 1701)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20793, 'Muang Thathôm', 127, 1716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20794, 'Muang Thatèng', 127, 1712)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20795, 'Muang Ta-Ôy', 127, 1703)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20796, 'Muang Soukhouma', 127, 1710)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20797, 'Muang Songkhon', 127, 1702)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20798, 'Muang Sing', 127, 1707)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20799, 'Muang Hatxayfong', 127, 1715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20800, 'Muang Saravan', 127, 1703)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20801, 'Muang Phônthong', 127, 1710)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20802, 'Muang Phôn-Hông', 127, 1701)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20803, 'Muang Phôngsali', 127, 1704)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20804, 'Muang Phin', 127, 1702)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20805, 'Muang Pèk', 127, 1699)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20806, 'Muang Pathoumphon', 127, 1710)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20807, 'Muang Pakxong', 127, 1710)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20808, 'Muang Pakxé', 127, 1710)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20809, 'Muang Paktha', 127, 1713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20810, 'Muang Pak-Ou', 127, 1706)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20811, 'Muang Paklay', 127, 1700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20812, 'Muang Pakkading', 127, 1714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20813, 'Muang Pakbèng', 127, 1705)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20814, 'Muang Nong', 127, 1702)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20815, 'Muang Ngoy', 127, 1706)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20816, 'Muang Nan', 127, 1706)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20817, 'Muang Namo', 127, 1705)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20818, 'Muang Nambak', 127, 1706)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20819, 'Muang Mounlapamôk', 127, 1710)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20820, 'Muang Mok', 127, 1699)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20821, 'Muang Mahaxai', 127, 1708)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20822, 'Muang Louangphabang', 127, 1706)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20823, 'Muang Louang Namtha', 127, 1707)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20824, 'Muang Laongam', 127, 1703)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20825, 'Muang Lakhonphéng', 127, 1703)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20826, 'Muang La', 127, 1705)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20827, 'Muang Khoa', 127, 1704)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20828, 'Muang Khôngxédôn', 127, 1703)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20829, 'Muang Không', 127, 1710)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20830, 'Muang Thakhèk', 127, 1708)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20831, 'Muang Khamkeut', 127, 1714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20832, 'Muang Kham', 127, 1699)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20833, 'Muang Kènthao', 127, 1700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20834, 'Muang Kasi', 127, 1701)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20835, 'Muang Houn', 127, 1705)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20836, 'Muang Houamuang', 127, 1709)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20837, 'Muang Hôngsa', 127, 1700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20838, 'Muang Hinboun', 127, 1708)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20839, 'Muang Hiam', 127, 1709)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20840, 'Muang Gnômmarat', 127, 1708)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20841, 'Muang Champhon', 127, 1702)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20842, 'Muang Champasak', 127, 1710)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20843, 'Muang Boun Tai', 127, 1704)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20844, 'Muang Bolikhan', 127, 1714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20845, 'Muang Bèng', 127, 1705)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20846, 'Muang Bachiangchaleunsook', 127, 1710)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20847, 'Muang Dakchung', 127, 1712)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20848, 'Muang Toumlan', 127, 1703)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20849, 'Muang Laman', 127, 1712)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20850, 'Muang Xaiséttha', 127, 1711)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20851, 'Muang Samakhixai', 127, 1711)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20852, 'Muang Sanamxai', 127, 1711)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20853, 'Muang Phouvong', 127, 1711)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20854, 'Muang Sanxai', 127, 1711)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20855, 'Muang Xanasômboun', 127, 1710)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20856, 'Muang Khaleum', 127, 1712)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20857, 'Muang Thapangthong', 127, 1702)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20858, 'Muang Xônbouli', 127, 1702)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20859, 'Muang Samouay', 127, 1703)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20860, 'Muang Outhoumphon', 127, 1702)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20861, 'Muang Alsaphangthong', 127, 1702)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20862, 'Muang Xaibouli', 127, 1702)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20863, 'Muang Atsaphan', 127, 1702)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20864, 'Muang Vilabouli', 127, 1702)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20865, 'Muang Nongbôk', 127, 1708)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20866, 'Muang Xebangfai', 127, 1708)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20867, 'Muang Xaibouathong', 127, 1708)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20868, 'Muang Boualapha', 127, 1708)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20869, 'Muang Na Kay', 127, 1708)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20870, 'Muang Thaphabat', 127, 1714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20871, 'Muang Longxan', 127, 1716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20872, 'Muang Kèo-Oudôm', 127, 1701)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20873, 'Muang Hôm', 127, 1716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20874, 'Muang Fuang', 127, 1701)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20875, 'Muang Phiang', 127, 1700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20876, 'Muang Khop', 127, 1700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20877, 'Muang Chomphét', 127, 1706)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20878, 'Muang Phou Khoun', 127, 1706)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20879, 'Muang Phônxai', 127, 1706)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20880, 'Muang Pakxèng', 127, 1706)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20881, 'Muang Viangkhan', 127, 1706)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20882, 'Muang Nonghèt', 127, 1699)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20883, 'Muang Phaxai', 127, 1699)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20884, 'Muang Khoun', 127, 1699)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20885, 'Muang Phou Kont', 127, 1699)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20886, 'Muang Xam-Tai', 127, 1709)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20887, 'Muang Viangxai', 127, 1709)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20888, 'Muang Viangthong', 127, 1714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20889, 'Muang Nga', 127, 1705)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20890, 'Muang Pha Oudôm', 127, 1713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20891, 'Muang Tônpheung', 127, 1713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20892, 'Muang Meung', 127, 1713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20893, 'Muang Nalè', 127, 1707)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20894, 'Muang Viangphoukha', 127, 1707)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20895, 'Muang Long', 127, 1707)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20896, 'Muang Mai', 127, 1704)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20897, 'Muang Boun-Nua', 127, 1704)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20898, 'Muang Gnot-Ou', 127, 1704)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20899, 'Muang Chanthabouli', 127, 1715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20900, 'Muang Sisattanak', 127, 1715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20901, 'Muang Xaiséttha', 127, 1715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20902, 'Muang Sikhôttabong', 127, 1715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20903, 'Muang Xaithani', 127, 1715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20904, 'Muang Naxaythong', 127, 1715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20905, 'Muang Sangthong', 127, 1715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20906, 'Muang Maypakngum', 127, 1715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20907, 'Samphanh', 127, 1704)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20908, 'Thaphalanxay', 127, 1702)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20909, 'Sopbao', 127, 1709)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20910, 'Muang Et', 127, 1709)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20911, 'Botene', 127, 1700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20912, 'Xam Neua', 127, 1709)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20913, 'Paksane', 127, 1714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20914, 'Xanakharm', 127, 1701)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20915, 'Muang Xayphoothong', 127, 1702)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20916, 'Kaysone Phomvihane', 127, 1702)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20917, 'Anouvong district', 127, 1716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20918, 'Viengxon', 127, 1709)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20919, 'Kuan', 127, 1709)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20920, 'Thongmyxay', 127, 1700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20921, 'Xaysathan', 127, 1700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20922, 'Mad', 127, 1701)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20923, 'Viengkham', 127, 1701)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20924, 'Hinherb', 127, 1701)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20925, 'Xaychamphone', 127, 1714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20926, 'Muen', 127, 1701)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20927, 'Kounkham', 127, 1708)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20928, 'Longchaeng', 127, 1716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20929, 'Xieng ngeun', 127, 1706)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20930, 'Phonthong', 127, 1706)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20931, 'Caza de Zgharta', 128, 1719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20932, 'Caza de Zahleh', 128, 1721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20933, 'Tripoli District', 128, 1719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20934, 'Caza de Tyr', 128, 1720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20935, 'Caza de Rachaïya', 128, 1721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20936, 'Caza de Marjayoûn', 128, 1722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20937, 'Caza du Kesrouane', 128, 1717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20938, 'Caza de Jbayl', 128, 1717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20939, 'Caza de Jezzîne', 128, 1720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20940, 'Caza de Hâsbaïya', 128, 1722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20941, 'Caza de Bécharré', 128, 1719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20942, 'Caza de Bent Jbaïl', 128, 1722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20943, 'Caza de Baalbek', 128, 1724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20944, 'Caza de Baabda', 128, 1717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20945, 'Caza du Chouf', 128, 1717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20946, 'Caza de Nabatîyé', 128, 1722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20947, 'Caza du Matn', 128, 1717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20948, 'Caza de Koura', 128, 1719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20949, 'Caza du Hermel', 128, 1724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20950, 'Caza de la Beqâa-Ouest', 128, 1721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20951, 'Caza de Batroun', 128, 1719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20952, 'Caza de Aaley', 128, 1717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20953, 'Caza de Aakkar', 128, 1723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20954, 'Marjayoun', 128, 1722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20955, 'Caza de Miniyé-Danniyé', 128, 1719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20956, 'Caza de Saida', 128, 1720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20957, 'Metn District', 128, 1717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20958, 'Keserwan District', 128, 1717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20959, 'Miniyeh-Danniyeh', 128, 1719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20960, 'Minie-Denniyeh', 128, 1719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20961, 'En Pois Doux/Babonneau', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20962, 'Cazuca', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20963, 'La Retraite', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20964, 'Reunion', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20965, 'Patience', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20966, 'Troumassee', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20967, 'Morne Sion', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20968, 'Boguis', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20969, 'Pigeon Island', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20970, 'Village', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20971, 'Bois Canot', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20972, 'Village', 129, 1734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20973, 'Mamiku', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20974, 'Balata', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20975, 'Union', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20976, 'Marche Gaye', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20977, 'Morne Palama', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20978, 'Forest Reserve', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20979, 'Marigot', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20980, 'Bois Dinde', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20981, 'Calypso', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20982, 'Viancelle', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20983, 'Almondale', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20984, 'Ti Boug', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20985, 'Belle Plaine', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20986, 'Monchy/Malgretoute', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20987, 'Migny', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20988, 'Des Barras', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20989, 'St Lawrence', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20990, 'Dupre', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20991, 'Cas En Bas', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20992, 'Corinth', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20993, 'Des Barras/Cacolie', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20994, 'Rodney Bay', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20995, 'Marquis Estate', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20996, 'Piton Flore', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20997, 'Choucomel', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20998, 'Praslin', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (20999, 'Theodrine', 129, 1734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21000, 'Coolie Town', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21001, 'Rouarne', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21002, 'Savannes', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21003, 'Saint Marie Road', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21004, 'Ti Rocher', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21005, 'St Helen Estate', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21006, 'Hospital Road', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21007, 'Mon Repos', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21008, 'Ti Delcer', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21009, 'Black Bay', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21010, 'La Resource', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21011, 'Cul De Sac', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21012, 'Ponyon', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21013, 'Compar', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21014, 'La Pelle', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21015, 'St Remy Estate', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21016, 'Morne Bonin', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21017, 'Fond Assau/Babonneau', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21018, 'Raillon Road', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21019, 'Vige''', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21020, 'Barnard Hill', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21021, 'Tete Chemin', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21022, 'Saphire', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21023, 'Thomazo/Tournesse', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21024, 'Anse Ger', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21025, 'Ciceron', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21026, 'Gadette', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21027, 'Anse La Verdue', 129, 1734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21028, 'Cap Estate', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21029, 'Marisule', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21030, 'Monchy/La Borne', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21031, 'Getrine', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21032, 'Village/Petite Bourgh', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21033, 'Motete', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21034, 'Peart''S Gap', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21035, 'Garrand', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21036, 'Caille Des', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21037, 'Eau Piquant/St Urbain', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21038, 'Mine', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21039, 'Guesneau', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21040, 'Cacoa/Babonneau', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21041, 'Bosquet D''Or', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21042, 'Belmont', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21043, 'Bois Joli', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21044, 'Grand Riviere', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21045, 'Moule A Chique', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21046, 'Lombard', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21047, 'Capital Hill', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21048, 'Odsan', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21049, 'Monchy/Mount Layau', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21050, 'Louvet', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21051, 'Canelles', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21052, 'L''Eau Mineau', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21053, 'Blanchard', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21054, 'Dugard', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21055, 'Bella Rosa', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21056, 'John Compton Highway', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21057, 'Ravine Touterelle', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21058, 'Dauphin', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21059, 'Coubaril', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21060, 'Mongouge', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21061, 'Grande Ravine', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21062, 'La Toc', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21063, 'Miami/Bexon', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21064, 'Mount Erole', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21065, 'Fond Canie', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21066, 'Chassin/Babonneau', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21067, 'Talvern', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21068, 'Babonneau Proper', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21069, 'Cabiche/Babonneau', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21070, 'Girard', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21071, 'Belle Vue', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21072, 'Debreuil', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21073, 'Central Forest Reserve', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21074, 'Monchy/Lafeuillee', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21075, 'Derniere Riviere/Fond Petit', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21076, 'Cresslands', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21077, 'Cacoa', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21078, 'Morne Lastic/Desruisseaux', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21079, 'Parker''S Hill', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21080, 'La Guerre/Chicken Back Street', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21081, 'Bois Catchet', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21082, 'Annus', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21083, 'Sapphire', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21084, 'Monchy/Riviere Mitan', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21085, 'Fond Manger', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21086, 'En Bamboo', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21087, 'Soufriere Estate', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21088, 'Conway/Waterfront', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21089, 'Derierre Fort/Old Victoria Road', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21090, 'Industrial Estate', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21091, 'Trou Rouge', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21092, 'Rabot', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21093, 'Monchy', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21094, 'Tapion', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21095, 'Banse', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21096, 'Chateau Belair', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21097, 'Morne Le Blanc', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21098, 'Pelouze', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21099, 'Kennedy Highway/Laborie Bypass', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21100, 'Desruisseaux', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21101, 'En Mango', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21102, 'London Road', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21103, 'Saut', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21104, 'Fond Doux', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21105, 'Honeymoon Beach', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21106, 'Descatier/Six Miles', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21107, 'L''Orangerie Road', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21108, 'La Dauphine', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21109, 'Ruby Estate', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21110, 'Catin', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21111, 'Westall Group/The Mangue', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21112, 'Thamazo', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21113, 'Planard', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21114, 'Franciou', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21115, 'Anse Chastanet', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21116, 'Lumiere', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21117, 'Errard', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21118, 'Bouton', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21119, 'Macdomel', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21120, 'Grande Riviere/Morne Caca Cochon', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21121, 'Palmiste Estate', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21122, 'Hillcrest Gardens', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21123, 'Derriere Morne', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21124, 'Bois D''Orange', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21125, 'H''Erelle', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21126, 'Fond D''Lor/Dugard', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21127, 'Venus', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21128, 'Myette Gardens', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21129, 'Vigie', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21130, 'Resinard/Babonneau', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21131, 'Mount Pleasant', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21132, 'Monchy/La Borne/Sans Souci', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21133, 'Moreau', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21134, 'Dubonnaire', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21135, 'Cedars/Chu Tigre', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21136, 'Forestiere', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21137, 'George Charles Boulevard', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21138, 'Malgretoute', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21139, 'Morne D''Or', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21140, 'Morne Assau/Babonneau', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21141, 'Bazile', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21142, 'Morne Rouge/Marc', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21143, 'Roblot', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21144, 'Roseau Valley', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21145, 'Choc', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21146, 'Caffiere', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21147, 'Victoria', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21148, 'Desrameaux', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21149, 'Saltibus', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21150, 'Escap', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21151, 'Dacretin', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21152, 'Delcer', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21153, 'Industry', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21154, 'La Sociere', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21155, 'Delomel', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21156, 'Woodlands', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21157, 'Cap Estate/Caribbean Park', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21158, 'Fond Estate', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21159, 'Crownlands/Marc', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21160, 'Mavay', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21161, 'Grande Riviere/Des Branch', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21162, 'Riche Fond', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21163, 'New Field/Fiette', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21164, 'Bordelais', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21165, 'Boguis/Desa Blond', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21166, 'Cap Estate/Ranch Site', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21167, 'Dugard', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21168, 'Bexon', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21169, 'Morne Dudon', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21170, 'Barre St.Joseph', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21171, 'Darling Road', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21172, 'Beauchamp', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21173, 'Bois D''Ornange/Trouya', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21174, 'Invorgoil Estate', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21175, 'Au Tabor', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21176, 'Au Tabor Hill', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21177, 'Bois D''Inde', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21178, 'Caico/Millet', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21179, 'Ravine Poisson', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21180, 'Fond Eau Rouge', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21181, 'Faux A Chaud', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21182, 'Champen Estate', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21183, 'Enbar Pwin', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21184, 'Dame De Traversay', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21185, 'Banannes Bay', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21186, 'Massacre', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21187, 'Derriere Dos', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21188, 'Cedars', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21189, 'Derriere Lagoon', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21190, 'Durandeau', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21191, 'Millet', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21192, 'Calvary', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21193, 'Village', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21194, 'Jacmel', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21195, 'Jean Baptiste', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21196, 'La Trielle', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21197, 'City', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21198, 'Grass Street', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21199, 'Vanard', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21200, 'Morne Ciseaux', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21201, 'St Lawrence Estate', 129, 1733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21202, 'Sunbilt', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21203, 'Anse Cochon', 129, 1734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21204, 'City Gate/La Clery', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21205, 'Coolie Town', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21206, 'Anse Galet', 129, 1734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21207, 'New Village', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21208, 'Belvedere', 129, 1734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21209, 'Choppin Ridge/Sarot', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21210, 'Chalon', 129, 1734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21211, 'Lastic Hill', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21212, 'Chatin', 129, 1734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21213, 'Trou Florent/Marc', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21214, 'Des Bottes', 129, 1734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21215, 'Pavee', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21216, 'Goodlands', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21217, 'Morne Siquot', 129, 1734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21218, 'Riverside Road', 129, 1734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21219, 'Patterson''S Gap', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21220, 'Pointe Seraphine', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21221, 'Rose Hill', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21222, 'The Morne', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21223, 'Waterworks', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21224, 'Wilton''S Yard/Grave Yard', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21225, 'Aurendel Hill', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21226, 'Black Mallet', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21227, 'Bagatelle', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21228, 'Bissee', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21229, 'Bishop''S Gap', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21230, 'Dubrassay', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21231, 'Bocage', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21232, 'Carellie', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21233, 'Maynard Hill', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21234, 'Ravine Chabot', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21235, 'Monkey Town Ciceron', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21236, 'La Clery', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21237, 'Entrepot', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21238, 'Independence City', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21239, 'Active Hill', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21240, 'Bois Patat', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21241, 'Sunny Acres', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21242, 'Raveneau', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21243, 'Chase Gardens', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21244, 'Yorke Hill', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21245, 'Morne Road', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21246, 'La Pansee', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21247, 'Goergeville', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21248, 'Leslie Land', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21249, 'Marchand', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21250, 'Agard Lands/Morne Dudon', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21251, 'Rock Hall', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21252, 'San Soucis', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21253, 'L''Anse Road', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21254, 'Summersdale', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21255, 'Hill 20/Babonneau', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21256, 'Barre Denis', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21257, 'Trou Cochan/Marc', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21258, 'La Carierre', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21259, 'Vide Bouteille', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21260, 'Green Gold', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21261, 'Floissac/Marc', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21262, 'Mocha', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21263, 'Sarot', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21264, 'Sand De Feu', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21265, 'Labayee', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21266, 'Marc', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21267, 'Ferrand', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21268, 'Soucis', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21269, 'Perou', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21270, 'Deglos', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21271, 'La Croix Maingot', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21272, 'Barre Duchaussee', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21273, 'Tourat/Soucis', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21274, 'Quarte Chemins', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21275, 'Ti Colon', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21276, 'Ti Rocher', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21277, 'Morne Tabac', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21278, 'Trois Piton', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21279, 'Esperance', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21280, 'La Fargue', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21281, 'Belair', 129, 1732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21282, 'Lamaze', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21283, 'Port Alese', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21284, 'Village', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21285, 'Savannesgeorge/Constitution', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21286, 'Mailly Motete', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21287, 'Stonefield', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21288, 'Christian Hill', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21289, 'La Pointe', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21290, 'Le Riche', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21291, 'Martin', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21292, 'Monzie', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21293, 'Morne Jacques', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21294, 'River Doree', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21295, 'Sauzay', 129, 1731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21296, 'Dennery By Pass/Green Mountain', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21297, 'Bara Bara', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21298, 'Au Leon', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21299, 'Delaide', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21300, 'Dennery By Pass', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21301, 'Anse Canot', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21302, 'Sulphur Springs', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21303, 'Athens', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21304, 'Derniere Riviere/Mardi Gras/Morne Caca Cochon', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21305, 'Riche Fond/La Belle Vie', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21306, 'Riche Fond/New Village', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21307, 'Dennery By Pass/Rocky Lane', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21308, 'Barre De L''Isle', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21309, 'Mount Beaujolais', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21310, 'Derniere Riviere/Fond Maricient', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21311, 'Dennery By Pass/White Rock Gardens', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21312, 'Grande Riviere', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21313, 'Grande Riviere/Norbert', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21314, 'Grande Riviere/En Leur Morne/Discompere', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21315, 'Grande Riviere/Funier', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21316, 'Morne Panache', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21317, 'Beausejour/Fostin''S Development', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21318, 'Derniere Riviere', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21319, 'Derniere Riviere/Morne Panache', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21320, 'Despinoze', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21321, 'Bonneterre Gardens', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21322, 'Fond D''Or', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21323, 'Glavier', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21324, 'Banse La Grace', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21325, 'Pascal', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21326, 'St. Joseph Estate', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21327, 'La Caye', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21328, 'La Ressource', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21329, 'Paix Bouche', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21330, 'Corinth Estate', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21331, 'Dennery Village', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21332, 'Toraille', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21333, 'La Pointe', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21334, 'Zenon', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21335, 'Mandele', 129, 1730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21336, 'Americ', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21337, 'Beausejour', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21338, 'Beausejour/Ndc', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21339, 'Bella Rosa', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21340, 'Bonneterre', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21341, 'Caye Manje''', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21342, 'Cap Estate/Anse Du Cap', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21343, 'La Haut', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21344, 'Cap Estate/Saddlec Back', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21345, 'Cap Estate/Becune Park', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21346, 'Terre Blanche', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21347, 'Cap Estate/Lower Saline Point', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21348, 'Cap Estate/Upper Saline Point', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21349, 'Grande Riviere/White Rock', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21350, 'Fond Gens Libre', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21351, 'Cap Estate/Mon Du Cap', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21352, 'Cap Estate/Golf Park', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21353, 'Cap Estate/Becune Point', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21354, 'Grande Riviere/Postlewaithe', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21355, 'Corinth/La Bel Lair', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21356, 'L''Hermitage', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21357, 'Coubaril Estate', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21358, 'Grande Riviere/Morne Serpent', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21359, 'Grande Riviere/Assou Canal', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21360, 'Grande Riviere/Ingle Woods', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21361, 'Grande Riviere/Morne Elwin', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21362, 'Marisule/East Winds', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21363, 'Fond Berange', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21364, 'Monchy/Ravine Macock', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21365, 'Grande Riviere/Piat', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21366, 'Grande Riviere/Degazon', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21367, 'Marisule/Top Of The World/Belle Ville', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21368, 'La Croix Chabourgh', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21369, 'Morne Citon', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21370, 'La Guerre', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21371, 'Marisule/Bon Air', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21372, 'Marisule/La Brellotte', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21373, 'Marisule/Top Of The World', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21374, 'Cenac', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21375, 'Massade', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21376, 'Monchy/Moulin A Vent', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21377, 'Monchy/Careffe', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21378, 'Monchy/Cletus Village', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21379, 'Monchy/La Retraite', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21380, 'Bongalo', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21381, 'Monchy/Vieux Sucreic/Careffe', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21382, 'Plateau', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21383, 'Rodney Heights', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21384, 'Monchy/Ti Dauphin', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21385, 'Monchy/Vieux Sucreic', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21386, 'Monchy/Lawi Fwen', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21387, 'Monchy/Vieux Sucreic/Bois D''Inde', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21388, 'Mongiraud', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21389, 'Reduit Park', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21390, 'Monchy/Cardinal', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21391, 'Monier', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21392, 'Union Terrace', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21393, 'Reduit', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21394, 'Reduit Orchard', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21395, 'St Phillip', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21396, 'Gros Islet Town', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21397, 'Gros Islet/Edge Water', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21398, 'Belle Vue Estate', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21399, 'Union/Ti Morne', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21400, 'Belle Vue', 129, 1729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21401, 'Beyar', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21402, 'New Development', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21403, 'Balca/En Leur Ba', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21404, 'Balca', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21405, 'Balembouche', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21406, 'Daban', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21407, 'Warwick/Daban', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21408, 'Lezy', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21409, 'Gentil', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21410, 'Gayabois', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21411, 'Morne La Croix', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21412, 'Morne Vient', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21413, 'Giraud', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21414, 'La Haut', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21415, 'La Perle', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21416, 'La Tille', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21417, 'Londonderry', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21418, 'Piaye', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21419, 'Tete Morne', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21420, 'Morne Gomier', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21421, 'La Haut', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21422, 'Anse De Sables/Beane Field', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21423, 'Morne Lezard Estate', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21424, 'Morne Paul', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21425, 'Olibo', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21426, 'Catter Beaufond', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21427, 'Parc Estate', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21428, 'La Gwen Ba', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21429, 'La Croix', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21430, 'L''Union', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21431, 'Gouette', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21432, 'Fond/Desruisseaux', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21433, 'Village', 129, 1728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21434, 'Anbre', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21435, 'Chique/Blanchard', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21436, 'Gomier', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21437, 'Beasejour/Myers Bridge', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21438, 'Carriere', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21439, 'Bellefond', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21440, 'Galba', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21441, 'La Courville', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21442, 'La Fille', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21443, 'La Pointe', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21444, 'Belvedere', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21445, 'Bois D''Inde', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21446, 'New Village', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21447, 'Mahaut', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21448, 'Calvary/Calvaire', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21449, 'Colombette', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21450, 'Ti Riviere', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21451, 'Fond Bernier', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21452, 'Des Blanchard', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21453, 'Fond Cacoa', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21454, 'Paix Bouche', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21455, 'Tou Cochan/Ti Rocher', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21456, 'Volet', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21457, 'Rameau', 129, 1727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21458, 'Deville', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21459, 'Diamond/Diamond Estate', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21460, 'Esperance', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21461, 'Etangs', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21462, 'Plat Pays', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21463, 'Jalousie', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21464, 'La Pearle', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21465, 'Descolons', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21466, 'Mal Maison', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21467, 'Malgretoute', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21468, 'Palmiste', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21469, 'Ravine Claire', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21470, 'Town', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21471, 'Barons Drive/Coin De L''Anse', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21472, 'Lenny Hill', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21473, 'Union Vale', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21474, 'Belle Vue', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21475, 'Cocoa Dan', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21476, 'Obrier', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21477, 'Gros Piton', 129, 1726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21478, 'Augier', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21479, 'Derierre Bois', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21480, 'Carierre', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21481, 'Coolie Town', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21482, 'Beane Field', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21483, 'Beausejour', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21484, 'Cantonement', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21485, 'Esperance', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21486, 'Fond Sabot', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21487, 'De Mailly', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21488, 'Derierre Morne', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21489, 'Hope Estate', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21490, 'Hewanorra Orchard', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21491, 'Joyeux', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21492, 'Docamel/La Resource', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21493, 'Plut', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21494, 'Grace', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21495, 'La Tourney/Cedar Heights', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21496, 'Maganier', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21497, 'Morne Cayenne', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21498, 'Bruceville/Shanty Town', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21499, 'Morne Vert', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21500, 'Pierrot', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21501, 'Tete Morne/Morne Andrew', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21502, 'Pomme', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21503, 'St Jude''S Highway', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21504, 'Town', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21505, 'Vieux Fort/Laborie Highway', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21506, 'Fond Capeche', 129, 1725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21507, 'Vavuniya District', 131, 1753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21508, 'Trincomalee District', 131, 1754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21509, 'Ratnapura District', 131, 1749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21510, 'Puttalam District', 131, 1750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21511, 'Polonnaruwa District', 131, 1751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21512, 'Nuwara Eliya District', 131, 1752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21513, 'Mullaitivu District', 131, 1753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21514, 'Moneragala District', 131, 1747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21515, 'Matara District', 131, 1748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21516, 'Matale District', 131, 1752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21517, 'Mannar District', 131, 1753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21518, 'Kurunegala District', 131, 1750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21519, 'Kilinochchi District', 131, 1753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21520, 'Kegalle District', 131, 1749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21521, 'Kandy District', 131, 1752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21522, 'Kalutara District', 131, 1746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21523, 'Jaffna District', 131, 1753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21524, 'Hambantota District', 131, 1748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21525, 'Gampaha District', 131, 1746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21526, 'Galle District', 131, 1748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21527, 'Colombo District', 131, 1746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21528, 'Batticaloa District', 131, 1754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21529, 'Badulla District', 131, 1747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21530, 'Anuradhapura District', 131, 1751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21531, 'Ampara District', 131, 1754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21532, 'Zota', 132, 1763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21533, 'Zo-Ge', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21534, 'Yederabo', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21535, 'Yarwein Mehnsonnoh', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21536, 'Wedjah-Cabade', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21537, 'Webbo District', 132, 1769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21538, 'Webado', 132, 1765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21539, 'Waiglomai-Woniglomai', 132, 1759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21540, 'Tuobo', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21541, 'Tuobo', 132, 1769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21542, 'Toto', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21543, 'Topo', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21544, 'Tombe', 132, 1761)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21545, 'Todee', 132, 1757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21546, 'Tienpo', 132, 1769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21547, 'Three B', 132, 1762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21548, 'Three A', 132, 1762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21549, 'Tewor', 132, 1761)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21550, 'Tenor', 132, 1762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21551, 'Tchien', 132, 1760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21552, 'Tasu', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21553, 'Tarjuazon', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21554, 'Sodoke', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21555, 'Seedor', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21556, 'Sasstown', 132, 1765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21557, 'Sanoyeah', 132, 1763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21558, 'Sanniquellie Mahn', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21559, 'Sagleipie-Ma', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21560, 'Sarbo', 132, 1769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21561, 'Rock Town', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21562, 'Rock Cess', 132, 1767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21563, 'Putu', 132, 1760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21564, 'Po River', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21565, 'Porkpa District', 132, 1761)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21566, 'Pleebo/Sodoken', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21567, 'Picnicess', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21568, 'Pate', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21569, 'Panta', 132, 1763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21570, 'Palipo', 132, 1769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21571, 'Nyanbo', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21572, 'Nyafokole', 132, 1763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21573, 'Nuohn Point', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21574, 'Numo', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21575, 'Niabo', 132, 1760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21576, 'Nemea', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21577, 'Nana Kru', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21578, 'Nake', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21579, 'Suehn Mecca District', 132, 1764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21580, 'Matro', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21581, 'Mambah Kaba', 132, 1766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21582, 'Little Wrebo', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21583, 'Kulu', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21584, 'Keaple', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21585, 'Konobo', 132, 1760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21586, 'Kone', 132, 1761)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21587, 'Kongba District', 132, 1768)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21588, 'Kokoyah', 132, 1763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21589, 'Kitabo', 132, 1769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21590, 'Kisi', 132, 1759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21591, 'Kambo Hills', 132, 1759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21592, 'Kakata', 132, 1757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21593, 'Kabor', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21594, 'Seekon', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21595, 'Lower Jloh', 132, 1765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21596, 'Jorquelleh', 132, 1763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21597, 'Jeetrah', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21598, 'Jeadepo', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21599, 'Jayah', 132, 1762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21600, 'Guma-Mendi', 132, 1759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21601, 'Grawa', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21602, 'Grand Cess Wedabo', 132, 1765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21603, 'Gola Konneh', 132, 1761)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21604, 'Gola', 132, 1764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21605, 'Goije', 132, 1768)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21606, 'Glio-Twarbo', 132, 1760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21607, 'Glebo', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21608, 'Glarkon', 132, 1762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21609, 'Gizima-Ziema', 132, 1759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21610, 'Gibi', 132, 1766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21611, 'Gedetarbo', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21612, 'Gedabo', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21613, 'Glaro', 132, 1769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21614, 'Gbokole', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21615, 'Gbobo', 132, 1760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21616, 'Gbi and Doru', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21617, 'Gbeta Klepo', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21618, 'Gbehlay-Geh', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21619, 'Gbelakpo', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21620, 'Gbeapo District', 132, 1769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21621, 'Gbazohn', 132, 1760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21622, 'Gbarlobo', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21623, 'Gbandi', 132, 1759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21624, 'Gbalein Faala', 132, 1759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21625, 'Garwula', 132, 1761)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21626, 'Garraway', 132, 1765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21627, 'Fuamah', 132, 1763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21628, 'Trade Town', 132, 1762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21629, 'Flenipo', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21630, 'Mowe', 132, 1767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21631, 'Five A', 132, 1762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21632, 'Firestone', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21633, 'Dorobo', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21634, 'Ding', 132, 1757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21635, 'Dei', 132, 1764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21636, 'Dedabo', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21637, 'Chedepo', 132, 1769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21638, 'Cavalla', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21639, 'Careysburg', 132, 1757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21640, 'Campwood', 132, 1762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21641, 'Butaw', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21642, 'Buah', 132, 1765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21643, 'Bopolu', 132, 1768)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21644, 'Bonde-Wubomai', 132, 1759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21645, 'Bolobo', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21646, 'Bolloh District', 132, 1765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21647, 'Bokomu', 132, 1768)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21648, 'B’hai District', 132, 1760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21649, 'Belleh', 132, 1768)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21650, 'Barobo', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21651, 'Barclayville', 132, 1765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21652, 'Doe', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21653, 'Guma', 132, 1759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21654, 'Suakoko', 132, 1763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21655, 'Salala', 132, 1763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21656, 'Sanniquelleh- Mahn', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21657, 'Topee', 132, 1757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21658, 'Mambah-Kaba', 132, 1757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21659, 'Greater Monrovia', 132, 1757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21660, 'Saclepea-Mah', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21661, 'St. Paul River', 132, 1757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21662, 'District #1', 132, 1762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21663, 'District #2', 132, 1762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21664, 'District #3', 132, 1762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21665, 'Firestone', 132, 1766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21666, 'Robertsport District', 132, 1761)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21667, 'Pyneston District', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21668, 'Pleebo/Sodeken District', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21669, 'Klay District', 132, 1764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21670, 'Tappita', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21671, 'Commonwealth District', 132, 1761)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21672, 'Senjeh District', 132, 1764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21673, 'Dowein District', 132, 1764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21674, 'Gounwolaila District', 132, 1768)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21675, 'Gbarma District', 132, 1768)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21676, 'Vahun District', 132, 1759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21677, 'Foya District', 132, 1759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21678, 'Kolahun District', 132, 1759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21679, 'Voinjama District', 132, 1759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21680, 'Zorzor District', 132, 1759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21681, 'Salayea District', 132, 1759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21682, 'Quardu Gboni District', 132, 1759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21683, 'Yeallequelleh District', 132, 1763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21684, 'Kpaai District', 132, 1763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21685, 'Boinsen District', 132, 1763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21686, 'Tukpahblee District', 132, 1763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21687, 'Saint Paul River District', 132, 1757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21688, 'Commonwealth District', 132, 1757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21689, 'Owensgrove District', 132, 1762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21690, 'Saint John River City District', 132, 1762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21691, 'Neekreen District', 132, 1762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21692, 'Commonwealth District', 132, 1762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21693, 'District Number One', 132, 1762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21694, 'District Number Two', 132, 1762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21695, 'District Number Three', 132, 1762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21696, 'District Number Four', 132, 1762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21697, 'Wee-Gbehy-Mahn', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21698, 'Kparblee District', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21699, 'Boe and Quilla District', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21700, 'Buu-Yao District', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21701, 'Zoe-Gbao District', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21702, 'Gbor District', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21703, 'Leewehpea-Mahn District', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21704, 'Meinpea-Mahn District', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21705, 'Garr-Bain District', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21706, 'Twan River District', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21707, 'Yarpea Mahn District', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21708, 'Yarmein District', 132, 1756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21709, 'Doedain District', 132, 1767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21710, 'Jo River District', 132, 1767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21711, 'Norwein District', 132, 1767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21712, 'Central River Cess District', 132, 1767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21713, 'Fen River District', 132, 1767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21714, 'Zarflahn District', 132, 1767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21715, 'Beawor District', 132, 1767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21716, 'Sam Gbalor District', 132, 1767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21717, 'Gboe-Ploe District', 132, 1760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21718, 'Gbao District', 132, 1760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21719, 'Cavala District', 132, 1760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21720, 'Kulu Shaw Boe District', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21721, 'Plahn Nyarn District', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21722, 'Juarzon District', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21723, 'Pynes Town District', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21724, 'Wedjah District', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21725, 'Greenville District', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21726, 'Kpayan District', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21727, 'Dugbe River District', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21728, 'Bokon District', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21729, 'Jaedae District', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21730, 'Bodae District', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21731, 'Sanquin District Number One', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21732, 'Sanquin District Number Two', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21733, 'Sanquin District Number Three', 132, 1755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21734, 'Karforh District', 132, 1769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21735, 'Nanee District', 132, 1769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21736, 'Nyenawliken District', 132, 1769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21737, 'Potupo District', 132, 1769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21738, 'Nyenebo District', 132, 1769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21739, 'Forpoh District', 132, 1765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21740, 'Wlogba District', 132, 1765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21741, 'Dweh District', 132, 1765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21742, 'Kpi District', 132, 1765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21743, 'Dorbor District', 132, 1765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21744, 'Fenetoe District', 132, 1765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21745, 'Upper Jloh District', 132, 1765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21746, 'Nrokwia-Wesldow District', 132, 1765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21747, 'Felo-Jekwi District', 132, 1765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21748, 'Bleebo District', 132, 1765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21749, 'Trenbo District', 132, 1765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21750, 'Whojah District', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21751, 'Gwelekpoken District', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21752, 'Nyorken District', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21753, 'Karluway Number One District', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21754, 'Karluway Number Two District', 132, 1758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21755, 'Khomokhoana Community', 133, 1777)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21756, 'Makhaleng Constituency', 133, 1775)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21757, 'Urban', 133, 1777)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21758, 'Hleoheng', 133, 1777)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21759, 'Mokomahatsi', 133, 1779)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21760, 'Mokhachane', 133, 1779)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21761, 'Mapoteng', 133, 1779)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21762, 'Makhoroana', 133, 1779)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21763, 'Urban', 133, 1779)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21764, 'Mamathe', 133, 1779)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21765, 'Rothe', 133, 1775)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21766, 'Motete', 133, 1778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21767, 'Qalo', 133, 1778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21768, 'Maseru Central', 133, 1775)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21769, 'Vilnius', 134, 1789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21770, 'Vilnius District Municipality', 134, 1789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21771, 'Šiaulių rajonas', 134, 1785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21772, 'Šiauliai', 134, 1785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21773, 'Panevėžys District Municipality', 134, 1784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21774, 'Panevėžys City', 134, 1784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21775, 'Palanga', 134, 1782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21776, 'Neringa', 134, 1782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21777, 'Marijampolė Municipality', 134, 1783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21778, 'Klaipėdos rajonas', 134, 1782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21779, 'Klaipėda', 134, 1782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21780, 'Kauno rajonas', 134, 1781)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21781, 'Kaunas', 134, 1781)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21782, 'Druskininkai', 134, 1780)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21783, 'Birštonas', 134, 1781)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21784, 'Alytus', 134, 1780)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21785, 'Alytaus rajonas', 134, 1780)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21786, 'Akmenės Rajonas', 134, 1785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21787, 'Lazdijai', 134, 1780)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21788, 'Varėna', 134, 1780)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21789, 'Jonava', 134, 1781)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21790, 'Kaišiadorys', 134, 1781)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21791, 'Kėdainiai', 134, 1781)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21792, 'Prienai', 134, 1781)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21793, 'Raseiniai', 134, 1781)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21794, 'Kretinga', 134, 1782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21795, 'Skuodas', 134, 1782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21796, 'Šilutė', 134, 1782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21797, 'Sakiai', 134, 1783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21798, 'Vilkaviškis District Municipality', 134, 1783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21799, 'Biržai', 134, 1784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21800, 'Kupiškis', 134, 1784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21801, 'Pasvalys', 134, 1784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21802, 'Rokiškis', 134, 1784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21803, 'Joniškis', 134, 1785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21804, 'Kelmė', 134, 1785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21805, 'Pakruojis', 134, 1785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21806, 'Radviliškis', 134, 1785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21807, 'Tauragė', 134, 1786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21808, 'Jurbarkas', 134, 1786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21809, 'Šilalė', 134, 1786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21810, 'Telšiai', 134, 1787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21811, 'Mažeikiai', 134, 1787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21812, 'Plungė', 134, 1787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21813, 'Utena', 134, 1788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21814, 'Visaginas', 134, 1788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21815, 'Anykščiai', 134, 1788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21816, 'Ignalina', 134, 1788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21817, 'Moletai', 134, 1788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21818, 'Zarasai', 134, 1788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21819, 'Šalčininkai', 134, 1789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21820, 'Sirvintos', 134, 1789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21821, 'Svencionys', 134, 1789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21822, 'Trakai', 134, 1789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21823, 'Ukmergė', 134, 1789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21824, 'Kalvarija Municipality', 134, 1783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21825, 'Kazlų Rūda Municipality', 134, 1783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21826, 'Pagėgiai', 134, 1786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21827, 'Rietavas', 134, 1787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21828, 'Elektrėnai', 134, 1789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21829, 'Wiltz', 135, 1790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21830, 'Troisvierges', 135, 1800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21831, 'Schifflange', 135, 1797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21832, 'Sanem', 135, 1797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21833, 'Rumelange', 135, 1797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21834, 'Pétange', 135, 1797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21835, 'Ville de Luxembourg', 135, 1795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21836, 'Kayl', 135, 1797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21837, 'Grevenmacher', 135, 1796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21838, 'Ettelbruck', 135, 1799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21839, 'Echternach', 135, 1798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21840, 'Dudelange', 135, 1797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21841, 'Differdange', 135, 1797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21842, 'Diekirch', 135, 1799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21843, 'Bettembourg', 135, 1797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21844, 'Feulen', 135, 1799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21845, 'Lac de la Haute-Sûre', 135, 1790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21846, 'Dippach', 135, 1801)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21847, 'Garnich', 135, 1801)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21848, 'Hobscheid', 135, 1801)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21849, 'Kehlen', 135, 1801)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21850, 'Koerich', 135, 1801)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21851, 'Kopstal', 135, 1801)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21852, 'Mamer', 135, 1801)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21853, 'Septfontaines', 135, 1801)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21854, 'Steinfort', 135, 1801)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21855, 'Esch-sur-Alzette', 135, 1797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21856, 'Frisange', 135, 1797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21857, 'Leudelange', 135, 1797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21858, 'Mondercange', 135, 1797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21859, 'Reckange-sur-Mess', 135, 1797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21860, 'Roeser', 135, 1797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21861, 'Bertrange', 135, 1795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21862, 'Contern', 135, 1795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21863, 'Hesperange', 135, 1795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21864, 'Niederanven', 135, 1795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21865, 'Sandweiler', 135, 1795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21866, 'Schuttrange', 135, 1795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21867, 'Steinsel', 135, 1795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21868, 'Strassen', 135, 1795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21869, 'Walferdange', 135, 1795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21870, 'Weiler-la-Tour', 135, 1795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21871, 'Berg', 135, 1794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21872, 'Bissen', 135, 1794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21873, 'Boevange-sur-Attert', 135, 1794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21874, 'Fischbach', 135, 1794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21875, 'Heffingen', 135, 1794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21876, 'Larochette', 135, 1794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21877, 'Lintgen', 135, 1794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21878, 'Lorentzweiler', 135, 1794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21879, 'Mersch', 135, 1794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21880, 'Nommern', 135, 1794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21881, 'Tuntange', 135, 1794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21882, 'Wincrange', 135, 1800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21883, 'Clervaux', 135, 1800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21884, 'Weiswampach', 135, 1800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21885, 'Bettendorf', 135, 1799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21886, 'Bourscheid', 135, 1799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21887, 'Erpeldange', 135, 1799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21888, 'Mertzig', 135, 1799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21889, 'Reisdorf', 135, 1799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21890, 'Schieren', 135, 1799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21891, 'Beckerich', 135, 1793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21892, 'Ell', 135, 1793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21893, 'Rambrouch', 135, 1793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21894, 'Grosbous', 135, 1793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21895, 'Redange-sur-Attert', 135, 1793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21896, 'Saeul', 135, 1793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21897, 'Useldange', 135, 1793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21898, 'Vichten', 135, 1793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21899, 'Wahl', 135, 1793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21900, 'Boulaide', 135, 1790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21901, 'Esch-sur-Sûre', 135, 1790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21902, 'Goesdorf', 135, 1790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21903, 'Winseler', 135, 1790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21904, 'Tandel', 135, 1791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21905, 'Putscheid', 135, 1791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21906, 'Vianden', 135, 1791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21907, 'Beaufort', 135, 1798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21908, 'Bech', 135, 1798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21909, 'Berdorf', 135, 1798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21910, 'Consdorf', 135, 1798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21911, 'Mompach', 135, 1798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21912, 'Rosport', 135, 1798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21913, 'Waldbillig', 135, 1798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21914, 'Betzdorf', 135, 1796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21915, 'Biwer', 135, 1796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21916, 'Flaxweiler', 135, 1796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21917, 'Junglinster', 135, 1796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21918, 'Manternach', 135, 1796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21919, 'Mertert', 135, 1796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21920, 'Wormeldange', 135, 1796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21921, 'Bous', 135, 1792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21922, 'Dalheim', 135, 1792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21923, 'Lenningen', 135, 1792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21924, 'Mondorf-les-Bains', 135, 1792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21925, 'Schengen', 135, 1792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21926, 'Remich', 135, 1792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21927, 'Stadtbredimus', 135, 1792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21928, 'Waldbredimus', 135, 1792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21929, 'Kiischpelt', 135, 1790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21930, 'Commune de Préizerdaul', 135, 1793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21931, 'Commune de la Vallée de l''Ernz', 135, 1799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21932, 'Käerjeng', 135, 1801)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21933, 'Parc Hosingen', 135, 1800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21934, 'Aizkraukle', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21935, 'Kastuļinas pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21936, 'Šķeltovas pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21937, 'Aizkraukles pagasts', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21938, 'Aizpute', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21939, 'Aizputes pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21940, 'Cīravas pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21941, 'Kalvenes pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21942, 'Kazdangas pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21943, 'Mārkalnes pagasts', 136, 1830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21944, 'Lažas pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21945, 'Aknīstes pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21946, 'Asares pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21947, 'Gārsenes pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21948, 'Aloja', 136, 1816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21949, 'Alojas pagasts', 136, 1816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21950, 'Braslavas pagasts', 136, 1816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21951, 'Brīvzemnieku pagasts', 136, 1816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21952, 'Staicele', 136, 1816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21953, 'Staiceles pagasts', 136, 1816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21954, 'Alsungas novads', 136, 1818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21955, 'Alūksne', 136, 1830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21956, 'Alsviķu pagasts', 136, 1830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21957, 'Annas pagasts', 136, 1830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21958, 'Ilzenes pagasts', 136, 1830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21959, 'Pededzes pagasts', 136, 1830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21960, 'Jaunalūksnes pagasts', 136, 1830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21961, 'Jaunannas pagasts', 136, 1830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21962, 'Jaunlaicenes pagasts', 136, 1830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21963, 'Kalncempju pagasts', 136, 1830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21964, 'Liepnas pagasts', 136, 1830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21965, 'Malienas pagasts', 136, 1830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21966, 'Mālupes pagasts', 136, 1830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21967, 'Veclaicenes pagasts', 136, 1830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21968, 'Zeltiņu pagasts', 136, 1830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21969, 'Ziemera pagasts', 136, 1830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21970, 'Skrunda', 136, 1818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21971, 'Amatas pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21972, 'Drabešu pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21973, 'Nītaures pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21974, 'Skujenes pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21975, 'Zaubes pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21976, 'Auce', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21977, 'Ape', 136, 1842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21978, 'Bēnes pagasts', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21979, 'Apes pagasts', 136, 1842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21980, 'Gaujienas pagasts', 136, 1842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21981, 'Trapenes pagasts', 136, 1842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21982, 'Virešu pagasts', 136, 1842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21983, 'Īles pagasts', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21984, 'Lielauces pagasts', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21985, 'Ukru pagasts', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21986, 'Vecauces pagasts', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21987, 'Vītiņu pagasts', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21988, 'Babītes pagasts', 136, 1832)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21989, 'Salas pagasts', 136, 1832)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21990, 'Baldones pagasts', 136, 1834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21991, 'Baltinavas novads', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21992, 'Balvu pagasts', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21993, 'Bērzkalnes pagasts', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21994, 'Bērzpils pagasts', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21995, 'Briežuciema pagasts', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21996, 'Krišjāņu pagasts', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21997, 'Kubulu pagasts', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21998, 'Lazdulejas pagasts', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (21999, 'Tilžas pagasts', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22000, 'Vectilžas pagasts', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22001, 'Vīksnas pagasts', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22002, 'Bauska', 136, 1828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22003, 'Brunavas pagasts', 136, 1828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22004, 'Ceraukstes pagasts', 136, 1828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22005, 'Gulbene', 136, 1824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22006, 'Codes pagasts', 136, 1828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22007, 'Dāviņu pagasts', 136, 1828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22008, 'Gailīšu pagasts', 136, 1828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22009, 'Īslīces pagasts', 136, 1828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22010, 'Mežotnes pagasts', 136, 1828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22011, 'Vecsaules pagasts', 136, 1828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22012, 'Brenguļu pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22013, 'Kauguru pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22014, 'Trikātas pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22015, 'Blīdenes pagasts', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22016, 'Brocēni', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22017, 'Cieceres pagasts', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22018, 'Gaiķu pagasts', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22019, 'Remtes pagasts', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22020, 'Burtnieku pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22021, 'Ēveles pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22022, 'Matīšu pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22023, 'Rencēnu pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22024, 'Valmieras pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22025, 'Cēsis', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22026, 'Vecates pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22027, 'Carnikavas novads', 136, 1836)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22028, 'Vaives pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22029, 'Cesvaine', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22030, 'Cesvaines pagasts', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22031, 'Blontu pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22032, 'Ciblas pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22033, 'Līdumnieku pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22034, 'Pušmucovas pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22035, 'Zvirgzdenes pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22036, 'Andrupenes pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22037, 'Ilūkste', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22038, 'Andzeļu pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22039, 'Vangaži', 136, 1839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22040, 'Asūnes pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22041, 'Bērziņu pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22042, 'Dagda', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22043, 'Ambeļu pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22044, 'Dagdas pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22045, 'Ezernieku pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22046, 'Ķepovas pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22047, 'Konstantinovas pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22048, 'Šķaunes pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22049, 'Svariņu pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22050, 'Daugavpils', 136, 1826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22051, 'Biķernieku pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22052, 'Demenes pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22053, 'Dubnas pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22054, 'Dobele', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22055, 'Kalnciema pagasts', 136, 1821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22056, 'Kalkūnes pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22057, 'Kalupes pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22058, 'Laucesas pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22059, 'Bērzes pagasts', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22060, 'Līksnas pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22061, 'Maļinovas pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22062, 'Dekšāres pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22063, 'Medumu pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22064, 'Naujenes pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22065, 'Nīcgales pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22066, 'Salienas pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22067, 'Skrudalienas pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22068, 'Sventes pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22069, 'Tabores pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22070, 'Vaboles pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22071, 'Vecsalienas pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22072, 'Višķu pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22073, 'Annenieku pagasts', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22074, 'Auru pagasts', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22075, 'Bikstu pagasts', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22076, 'Dobeles pagasts', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22077, 'Durbe', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22078, 'Jaunbērzes pagasts', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22079, 'Krimūnu pagasts', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22080, 'Naudītes pagasts', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22081, 'Penkules pagasts', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22082, 'Daudzeses pagasts', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22083, 'Zebrenes pagasts', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22084, 'Piltenes pagasts', 136, 1802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22085, 'Dundagas pagasts', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22086, 'Kolkas pagasts', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22087, 'Dunalkas pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22088, 'Durbes pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22089, 'Tadaiķu pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22090, 'Vecpils pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22091, 'Viesatu pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22092, 'Engures pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22093, 'Lapmežciema pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22094, 'Jaunjelgava', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22095, 'Smārdes pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22096, 'Ērgļu pagasts', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22097, 'Jumurdas pagasts', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22098, 'Sausnējas pagasts', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22099, 'Jaunjelgavas pagasts', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22100, 'Garkalnes novads', 136, 1839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22101, 'Bārtas pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22102, 'Gaviezes pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22103, 'Grobiņas pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22104, 'Viļāni', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22105, 'Medzes pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22106, 'Beļavas pagasts', 136, 1824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22107, 'Daukstu pagasts', 136, 1824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22108, 'Druvienas pagasts', 136, 1824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22109, 'Galgauskas pagasts', 136, 1824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22110, 'Jaungulbenes pagasts', 136, 1824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22111, 'Lejasciema pagasts', 136, 1824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22112, 'Ikšķile', 136, 1813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22113, 'Līgo pagasts', 136, 1824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22114, 'Litenes pagasts', 136, 1824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22115, 'Lizuma pagasts', 136, 1824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22116, 'Rankas pagasts', 136, 1824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22117, 'Stāmerienas pagasts', 136, 1824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22118, 'Stradu pagasts', 136, 1824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22119, 'Subate', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22120, 'Tirzas pagasts', 136, 1824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22121, 'Eglaines pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22122, 'Šēderes pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22123, 'Iecavas novads', 136, 1828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22124, 'Tīnūžu pagasts', 136, 1813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22125, 'Zosēnu pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22126, 'Bebrenes pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22127, 'Dvietes pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22128, 'Pilskalnes pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22129, 'Prodes pagasts', 136, 1844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22130, 'Inčukalna pagasts', 136, 1840)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22131, 'Seces pagasts', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22132, 'Sērenes pagasts', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22133, 'Staburaga pagasts', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22134, 'Sunākstes pagasts', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22135, 'Jaunpiebalgas pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22136, 'Jaunpils pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22137, 'Jēkabpils', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22138, 'Ābeļu pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22139, 'Dignājas pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22140, 'Dunavas pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22141, 'Kalna pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22142, 'Leimaņu pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22143, 'Rubenes pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22144, 'Zasas pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22145, 'Jelgava', 136, 1822)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22146, 'Elejas pagasts', 136, 1821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22147, 'Glūdas pagasts', 136, 1821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22148, 'Jaunsvirlaukas pagasts', 136, 1821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22149, 'Lielplatones pagasts', 136, 1821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22150, 'Līvbērzes pagasts', 136, 1821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22151, 'Strazdes pagasts', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22152, 'Kārsava', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22153, 'Platones pagasts', 136, 1821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22154, 'Sesavas pagasts', 136, 1821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22155, 'Svētes pagasts', 136, 1821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22156, 'Valgundes pagasts', 136, 1821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22157, 'Vilces pagasts', 136, 1821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22158, 'Vircavas pagasts', 136, 1821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22159, 'Sutru pagasts', 136, 1837)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22160, 'Zaļenieku pagasts', 136, 1821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22161, 'Jūrmala', 136, 1820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22162, 'Cēres pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22163, 'Kandava', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22164, 'Kandavas pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22165, 'Matkules pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22166, 'Vānes pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22167, 'Zantes pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22168, 'Zemītes pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22169, 'Goliševas pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22170, 'Malnavas pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22171, 'Mērdzenes pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22172, 'Mežvidu pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22173, 'Iršu pagasts', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22174, 'Salnavas pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22175, 'Olaine', 136, 1833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22176, 'Birzgales pagasts', 136, 1813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22177, 'Ķegums', 136, 1813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22178, 'Rembates pagasts', 136, 1813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22179, 'Tomes pagasts', 136, 1813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22180, 'Baloži', 136, 1834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22181, 'Daugmales pagasts', 136, 1834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22182, 'Bebru pagasts', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22183, 'Lielvārde', 136, 1813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22184, 'Ķekavas pagasts', 136, 1834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22185, 'Bērzaines pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22186, 'Dikļu pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22187, 'Līgatne', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22188, 'Kocēnu pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22189, 'Vaidavas pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22190, 'Zilākalna pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22191, 'Lielvārdes pagasts', 136, 1813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22192, 'Kokneses pagasts', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22193, 'Aulejas pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22194, 'Indras pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22195, 'Kūku pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22196, 'Izvaltas pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22197, 'Kalniešu pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22198, 'Kaplavas pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22199, 'Kombuļu pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22200, 'Krāslava', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22201, 'Krāslavas pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22202, 'Piedrujas pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22203, 'Robežnieku pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22204, 'Liepāja', 136, 1817)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22205, 'Skaistas pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22206, 'Ūdrīšu pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22207, 'Krimuldas pagasts', 136, 1840)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22208, 'Snēpeles pagasts', 136, 1818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22209, 'Valmiera', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22210, 'Lēdurgas pagasts', 136, 1840)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22211, 'Atašienes pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22212, 'Krustpils pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22213, 'Mežāres pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22214, 'Jumpravas pagasts', 136, 1813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22215, 'Īvandes pagasts', 136, 1818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22216, 'Variešu pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22217, 'Vīpes pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22218, 'Ēdoles pagasts', 136, 1818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22219, 'Puzes pagasts', 136, 1802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22220, 'Gudenieku pagasts', 136, 1818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22221, 'Pelču pagasts', 136, 1818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22222, 'Kabiles pagasts', 136, 1818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22223, 'Kuldīga', 136, 1818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22224, 'Kurmāles pagasts', 136, 1818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22225, 'Laidu pagasts', 136, 1818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22226, 'Padures pagasts', 136, 1818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22227, 'Rendas pagasts', 136, 1818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22228, 'Rumbas pagasts', 136, 1818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22229, 'Turlavas pagasts', 136, 1818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22230, 'Vārmes pagasts', 136, 1818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22231, 'Lēdmanes pagasts', 136, 1813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22232, 'Līgatnes pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22233, 'Katvaru pagasts', 136, 1816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22234, 'Limbaži', 136, 1816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22235, 'Limbažu pagasts', 136, 1816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22236, 'Pāles pagasts', 136, 1816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22237, 'Skultes pagasts', 136, 1816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22238, 'Rudzātu pagasts', 136, 1837)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22239, 'Umurgas pagasts', 136, 1816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22240, 'Vidrižu pagasts', 136, 1816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22241, 'Viļķenes pagasts', 136, 1816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22242, 'Turku pagasts', 136, 1837)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22243, 'Jersikas pagasts', 136, 1837)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22244, 'Līvāni', 136, 1837)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22245, 'Rožupes pagasts', 136, 1837)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22246, 'Indrānu pagasts', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22247, 'Lubāna', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22248, 'Briģu pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22249, 'Cirmas pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22250, 'Isnaudas pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22251, 'Istras pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22252, 'Ludza', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22253, 'Nirzas pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22254, 'Ņukšu pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22255, 'Pildas pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22256, 'Pureņu pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22257, 'Rundēnu pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22258, 'Aronas pagasts', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22259, 'Barkavas pagasts', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22260, 'Bērzaunes pagasts', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22261, 'Dzelzavas pagasts', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22262, 'Kalsnavas pagasts', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22263, 'Ļaudonas pagasts', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22264, 'Lazdonas pagasts', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22265, 'Mārupes novads', 136, 1832)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22266, 'Sarkaņu pagasts', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22267, 'Liezēres pagasts', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22268, 'Madona', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22269, 'Mārcienas pagasts', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22270, 'Mētrienas pagasts', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22271, 'Ogre', 136, 1813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22272, 'Ošupes pagasts', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22273, 'Praulienas pagasts', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22274, 'Talsi', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22275, 'Vestienas pagasts', 136, 1814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22276, 'Mālpils novads', 136, 1840)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22277, 'Mazsalacas pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22278, 'Viesīte', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22279, 'Ramatas pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22280, 'Sēļu pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22281, 'Skaņkalnes pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22282, 'Mērsraga novads', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22283, 'Ķoņu pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22284, 'Naukšēnu pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22285, 'Pāvilosta', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22286, 'Mazzalves pagasts', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22287, 'Neretas pagasts', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22288, 'Piltene', 136, 1802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22289, 'Pilskalnes pagasts', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22290, 'Zalves pagasts', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22291, 'Valdemārpils', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22292, 'Nīcas pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22293, 'Pļaviņas', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22294, 'Otaņķu pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22295, 'Ķeipenes pagasts', 136, 1813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22296, 'Krapes pagasts', 136, 1813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22297, 'Lauberes pagasts', 136, 1813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22298, 'Madlienas pagasts', 136, 1813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22299, 'Mazozolu pagasts', 136, 1813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22300, 'Preiļi', 136, 1812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22301, 'Čornajas pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22302, 'Meņģeles pagasts', 136, 1813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22303, 'Ogresgala pagasts', 136, 1813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22304, 'Suntažu pagasts', 136, 1813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22305, 'Taurupes pagasts', 136, 1813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22306, 'Ziru pagasts', 136, 1802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22307, 'Olaines pagasts', 136, 1833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22308, 'Cenu pagasts', 136, 1821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22309, 'Salgales pagasts', 136, 1821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22310, 'Raiskuma pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22311, 'Zlēku pagasts', 136, 1802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22312, 'Rēzekne', 136, 1811)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22313, 'Stalbes pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22314, 'Straupes pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22315, 'Saunas pagasts', 136, 1812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22316, 'Sakas pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22317, 'Vērgales pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22318, 'Aiviekstes pagasts', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22319, 'Klintaines pagasts', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22320, 'Vietalvas pagasts', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22321, 'Aizkalnes pagasts', 136, 1812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22322, 'Pelēču pagasts', 136, 1812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22323, 'Preiļu pagasts', 136, 1812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22324, 'Nagļu pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22325, 'Bunkas pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22326, 'Gramzdas pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22327, 'Kalētu pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22328, 'Priekules pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22329, 'Svitenes pagasts', 136, 1828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22330, 'Virgas pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22331, 'Liepas pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22332, 'Mārsnēnu pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22333, 'Priekuļu pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22334, 'Veselavas pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22335, 'Drustu pagasts', 136, 1842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22336, 'Raunas pagasts', 136, 1842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22337, 'Audriņu pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22338, 'Bērzgales pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22339, 'Dricānu pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22340, 'Feimaņu pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22341, 'Gaigalavas pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22342, 'Griškānu pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22343, 'Ainaži', 136, 1816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22344, 'Ilzeskalna pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22345, 'Kantinieku pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22346, 'Kaunatas pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22347, 'Lendžu pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22348, 'Lūznavas pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22349, 'Mākoņkalna pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22350, 'Maltas pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22351, 'Rūjiena', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22352, 'Lodes pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22353, 'Nautrēnu pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22354, 'Ozolaines pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22355, 'Ozolmuižas pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22356, 'Pušas pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22357, 'Rikavas pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22358, 'Sakstagala pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22359, 'Ainažu pagasts', 136, 1816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22360, 'Silmalas pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22361, 'Salaspils', 136, 1835)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22362, 'Stoļerovas pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22363, 'Stružānu pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22364, 'Vērēmu pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22365, 'Galēnu pagasts', 136, 1812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22366, 'Riebiņu pagasts', 136, 1812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22367, 'Rušonas pagasts', 136, 1812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22368, 'Silajāņu pagasts', 136, 1812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22369, 'Palsmanes pagasts', 136, 1842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22370, 'Sīļukalna pagasts', 136, 1812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22371, 'Stabulnieku pagasts', 136, 1812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22372, 'Viesturu pagasts', 136, 1828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22373, 'Saldus', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22374, 'Rīga', 136, 1809)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22375, 'Rojas novads', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22376, 'Jeru pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22377, 'Ropažu novads', 136, 1839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22378, 'Sigulda', 136, 1840)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22379, 'Dunikas pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22380, 'Rucavas pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22381, 'Lazdukalna pagasts', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22382, 'Rugāju pagasts', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22383, 'Ipiķu pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22384, 'Vilpulkas pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22385, 'Rundāles pagasts', 136, 1828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22386, 'Liepupes pagasts', 136, 1816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22387, 'Salacgrīva', 136, 1816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22388, 'Salacgrīvas pagasts', 136, 1816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22389, 'Salas pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22390, 'Sēlpils pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22391, 'Rudbāržu pagasts', 136, 1818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22392, 'Salaspils pagasts', 136, 1835)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22393, 'Ezeres pagasts', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22394, 'Jaunauces pagasts', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22395, 'Jaunlutriņu pagasts', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22396, 'Kursīšu pagasts', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22397, 'Lutriņu pagasts', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22398, 'Smiltene', 136, 1842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22399, 'Nīgrandes pagasts', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22400, 'Mores pagasts', 136, 1840)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22401, 'Novadnieku pagasts', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22402, 'Pampāļu pagasts', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22403, 'Seda', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22404, 'Strenči', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22405, 'Rubas pagasts', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22406, 'Saldus pagasts', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22407, 'Smiltenes pagasts', 136, 1842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22408, 'Šķēdes pagasts', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22409, 'Vadakstes pagasts', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22410, 'Zaņas pagasts', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22411, 'Īves pagasts', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22412, 'Zirņu pagasts', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22413, 'Zvārdes pagasts', 136, 1808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22414, 'Saulkrasti', 136, 1841)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22415, 'Saulkrastu pagasts', 136, 1841)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22416, 'Sējas novads', 136, 1841)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22417, 'Allažu pagasts', 136, 1840)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22418, 'Siguldas pagasts', 136, 1840)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22419, 'Skrīveru novads', 136, 1831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22420, 'Nīkrāces pagasts', 136, 1818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22421, 'Raņķu pagasts', 136, 1818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22422, 'Variņu pagasts', 136, 1842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22423, 'Skrundas pagasts', 136, 1818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22424, 'Bilskas pagasts', 136, 1842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22425, 'Blomes pagasts', 136, 1842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22426, 'Brantu pagasts', 136, 1842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22427, 'Grundzāles pagasts', 136, 1842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22428, 'Launkalnes pagasts', 136, 1842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22429, 'Stopiņu novads', 136, 1839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22430, 'Jērcēnu pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22431, 'Plāņu pagasts', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22432, 'Abavas pagasts', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22433, 'Ārlavas pagasts', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22434, 'Balgales pagasts', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22435, 'Kārķu pagasts', 136, 1805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22436, 'Ģibuļu pagasts', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22437, 'Ķūļciema pagasts', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22438, 'Laidzes pagasts', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22439, 'Laucienes pagasts', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22440, 'Murmastienes pagasts', 136, 1838)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22441, 'Lībagu pagasts', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22442, 'Lubes pagasts', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22443, 'Sabile', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22444, 'Stende', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22445, 'Valdgales pagasts', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22446, 'Elkšņu pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22447, 'Dzērbenes pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22448, 'Vandzenes pagasts', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22449, 'Virbu pagasts', 136, 1807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22450, 'Augstkalnes pagasts', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22451, 'Bukaišu pagasts', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22452, 'Tērvetes pagasts', 136, 1825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22453, 'Skaistkalnes pagasts', 136, 1828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22454, 'Degoles pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22455, 'Džūkstes pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22456, 'Irlavas pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22457, 'Jaunsātu pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22458, 'Rites pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22459, 'Pūres pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22460, 'Sēmes pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22461, 'Slampes pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22462, 'Tukums', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22463, 'Tumes pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22464, 'Zentenes pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22465, 'Saukas pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22466, 'Embūtes pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22467, 'Vaiņodes pagasts', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22468, 'Bārbeles pagasts', 136, 1828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22469, 'Ērģemes pagasts', 136, 1805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22470, 'Valkas pagasts', 136, 1805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22471, 'Vijciema pagasts', 136, 1805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22472, 'Sokolku pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22473, 'Zvārtavas pagasts', 136, 1805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22474, 'Varakļāni', 136, 1838)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22475, 'Varakļānu pagasts', 136, 1838)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22476, 'Rožkalnu pagasts', 136, 1812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22477, 'Upmalas pagasts', 136, 1812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22478, 'Vārkavas pagasts', 136, 1812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22479, 'Inešu pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22480, 'Kaives pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22481, 'Taurenes pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22482, 'Vecpiebalgas pagasts', 136, 1827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22483, 'Kurmenes pagasts', 136, 1828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22484, 'Stelpes pagasts', 136, 1828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22485, 'Ādažu novads', 136, 1836)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22486, 'Aglonas pagasts', 136, 1812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22487, 'Grāveru pagasts', 136, 1819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22488, 'Aknīste', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22489, 'Balvi', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22490, 'Baldone', 136, 1834)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22491, 'Grobiņa', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22492, 'Mazsalaca', 136, 1804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22493, 'Ozolnieku pagasts', 136, 1821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22494, 'Priekule', 136, 1843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22495, 'Lestenes pagasts', 136, 1806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22496, 'Valka', 136, 1805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22497, 'Popes pagasts', 136, 1802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22498, 'Kupravas pagasts', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22499, 'Viļaka', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22500, 'Valles pagasts', 136, 1828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22501, 'Vecumnieku pagasts', 136, 1828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22502, 'Ventspils', 136, 1803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22503, 'Ances pagasts', 136, 1802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22504, 'Jūrkalnes pagasts', 136, 1802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22505, 'Zilupe', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22506, 'Tārgales pagasts', 136, 1802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22507, 'Ugāles pagasts', 136, 1802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22508, 'Usmas pagasts', 136, 1802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22509, 'Užavas pagasts', 136, 1802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22510, 'Vārves pagasts', 136, 1802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22511, 'Viesītes pagasts', 136, 1823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22512, 'Medņevas pagasts', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22513, 'Šķilbēnu pagasts', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22514, 'Susāju pagasts', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22515, 'Vecumu pagasts', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22516, 'Žīguru pagasts', 136, 1829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22517, 'Viļānu pagasts', 136, 1810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22518, 'Lauderu pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22519, 'Pasienes pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22520, 'Zaļesjes pagasts', 136, 1815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22521, 'Mutuşarrifīyat Ghadāmis', 137, 1853)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22522, 'Tiznit', 138, 1875)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22523, 'Tetouan', 138, 1867)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22524, 'Taza', 138, 1869)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22525, 'Tata', 138, 1875)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22526, 'Taroudannt', 138, 1875)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22527, 'Taounate', 138, 1869)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22528, 'Tan-Tan', 138, 1876)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22529, 'Tanger-Assilah', 138, 1867)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22530, 'Sidi-Kacem', 138, 1870)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22531, 'Settat Province', 138, 1872)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22532, 'Sale', 138, 1870)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22533, 'Safi', 138, 1873)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22534, 'Rabat', 138, 1870)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22535, 'Oujda-Angad', 138, 1868)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22536, 'Ouarzazate', 138, 1874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22537, 'Nador', 138, 1868)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22538, 'Larache', 138, 1867)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22539, 'Laayoune', 138, 1877)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22540, 'Khouribga Province', 138, 1871)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22541, 'Khenifra', 138, 1871)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22542, 'Khemisset', 138, 1870)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22543, 'Kenitra Province', 138, 1870)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22544, 'Inezgane-Ait Melloul', 138, 1875)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22545, 'Ifrane', 138, 1869)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22546, 'Guelmim', 138, 1876)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22547, 'Figuig', 138, 1868)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22548, 'Essaouira', 138, 1873)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22549, 'Errachidia', 138, 1874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22550, 'Kelaa-Des-Sraghna', 138, 1873)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22551, 'El-Jadida', 138, 1872)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22552, 'Chefchaouen Province', 138, 1867)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22553, 'Boulemane', 138, 1869)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22554, 'Benslimane', 138, 1872)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22555, 'Beni-Mellal', 138, 1871)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22556, 'Azilal Province', 138, 1871)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22557, 'Al-Hoceima', 138, 1867)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22558, 'Agadir-Ida-ou-Tnan', 138, 1875)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22559, 'Skhirate-Temara', 138, 1870)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22560, 'Assa-Zag', 138, 1876)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22561, 'Es-Semara', 138, 1877)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22562, 'Meknes', 138, 1869)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22563, 'Chichaoua', 138, 1873)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22564, 'Marrakech', 138, 1873)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22565, 'Sefrou', 138, 1869)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22566, 'Berkane', 138, 1868)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22567, 'Jerada', 138, 1868)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22568, 'Taourirt', 138, 1868)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22569, 'Boujdour', 138, 1877)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22570, 'Chtouka-Ait-Baha', 138, 1875)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22571, 'Al-Haouz', 138, 1873)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22572, 'Fahs-Anjra', 138, 1867)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22573, 'Casablanca', 138, 1872)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22574, 'Moulay-Yacoub', 138, 1869)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22575, 'El-Hajeb', 138, 1869)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22576, 'Aousserd', 138, 1878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22577, 'Oued-Ed-Dahab', 138, 1878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22578, 'Nouaceur', 138, 1872)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22579, 'Fes', 138, 1869)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22580, 'Mohammedia', 138, 1872)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22581, 'Zagora', 138, 1874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22582, 'Mediouna', 138, 1872)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22583, 'Guercif Province', 138, 1868)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22584, 'Berrechid Province', 138, 1872)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22585, 'Driouch Province', 138, 1868)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22586, 'Tinghir Province', 138, 1874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22587, 'Ouezzane Province', 138, 1867)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22588, 'M''Diq-Fnideq', 138, 1867)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22589, 'Sidi Slimane', 138, 1870)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22590, 'Sidi Bennour', 138, 1872)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22591, 'Youssoufia', 138, 1873)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22592, 'Midelt', 138, 1874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22593, 'Rehamna', 138, 1873)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22594, 'Tarfaya', 138, 1877)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22595, 'Sidi Ifni', 138, 1876)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22596, 'Fquih Ben Salah Province', 138, 1871)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22597, 'Ambatondrazaka District', 143, 1947)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22598, 'Amparafaravola District', 143, 1947)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22599, 'Brickaville', 143, 1953)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22600, 'Antananarivo-Atsimondrano', 143, 1952)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22601, 'Manjakandriana', 143, 1952)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22602, 'Moramanga District', 143, 1947)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22603, 'Fianarantsoa I', 143, 1956)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22604, 'Ambohimahasoa', 143, 1956)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22605, 'Ambositra District', 143, 1955)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22606, 'Antsirabe II', 143, 1950)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22607, 'Antsirabe I District', 143, 1950)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22608, 'Antanifotsy', 143, 1950)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22609, 'Ambatolampy', 143, 1950)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22610, 'Antsohihy', 143, 1943)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22611, 'Befandriana Nord', 143, 1943)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22612, 'Mandritsara', 143, 1943)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22613, 'Toamasina I', 143, 1953)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22614, 'Toamasina II', 143, 1953)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22615, 'Andapa District', 143, 1942)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22616, 'Marovoay District', 143, 1945)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22617, 'Vavatenina District', 143, 1944)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22618, 'Maroantsetra District', 143, 1944)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22619, 'Mananara Nord District', 143, 1944)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22620, 'Betroka District', 143, 1959)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22621, 'Farafangana District', 143, 1958)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22622, 'Vangaindrano District', 143, 1958)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22623, 'Amboasary District', 143, 1959)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22624, 'Morombe District', 143, 1961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22625, 'Bealanana District', 143, 1943)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22626, 'Ankazoabo District', 143, 1961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22627, 'Betafo District', 143, 1950)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22628, 'Miandrivazo District', 143, 1954)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22629, 'Toliara II District', 143, 1961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22630, 'Toliara I District', 143, 1961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22631, 'Andilamena District', 143, 1947)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22632, 'Anosibe An''ala District', 143, 1947)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22633, 'Ambatofinandrahana District', 143, 1955)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22634, 'Fandriana District', 143, 1955)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22635, 'Manandriana District', 143, 1955)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22636, 'Morondava District', 143, 1954)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22637, 'Mahabo District', 143, 1954)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22638, 'Manja District', 143, 1954)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22639, 'Beroroha District', 143, 1961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22640, 'Ankazobe District', 143, 1952)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22641, 'Ambohidratrimo District', 143, 1952)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22642, 'Andramasina District', 143, 1952)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22643, 'Sakaraha District', 143, 1961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22644, 'Ampanihy District', 143, 1961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22645, 'Betioky District', 143, 1961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22646, 'Ambovombe District', 143, 1960)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22647, 'Beloha District', 143, 1960)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22648, 'Bekily District', 143, 1960)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22649, 'Antsiranana I', 143, 1941)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22650, 'Antsiranana II', 143, 1941)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22651, 'Benenitra', 143, 1961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22652, 'Tsihombe', 143, 1960)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22653, 'Taolagnaro', 143, 1959)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22654, 'Anjozorobe', 143, 1952)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22655, 'Faratsiho', 143, 1950)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22656, 'Tsiroanomandidy', 143, 1949)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22657, 'Fenoarivobe', 143, 1949)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22658, 'Arivonimamo', 143, 1951)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22659, 'Miarinarivo', 143, 1951)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22660, 'Soavinandriana', 143, 1951)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22661, 'Ambalavao', 143, 1956)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22662, 'Ikalamavony', 143, 1956)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22663, 'Ikongo', 143, 1962)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22664, 'Manakara', 143, 1962)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22665, 'Mahajanga II', 143, 1945)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22666, 'Mahajanga I', 143, 1945)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22667, 'Maevatanana', 143, 1946)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22668, 'Tsaratanana', 143, 1946)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22669, 'Maintirano', 143, 1948)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22670, 'Ambatomainty', 143, 1948)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22671, 'Nosy Boraha', 143, 1944)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22672, 'Sambava', 143, 1942)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22673, 'Nosy Be', 143, 1941)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22674, 'Ambilobe', 143, 1941)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22675, 'Antalaha', 143, 1942)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22676, 'Mahanoro', 143, 1953)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22677, 'Marolambo', 143, 1953)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22678, 'Antanambao Manampontsy', 143, 1953)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22679, 'Fenerive Est', 143, 1944)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22680, 'Soanierana Ivongo', 143, 1944)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22681, '6e Arrondissement', 143, 1952)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22682, 'Iakora', 143, 1957)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22683, 'Midongy-Atsimo', 143, 1958)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22684, 'Belo Sur Tsiribihina', 143, 1954)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22685, 'Ambanja', 143, 1941)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22686, 'Antananarivo Avaradrano', 143, 1952)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22687, 'Vondrozo', 143, 1958)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22688, 'Befotaka', 143, 1958)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22689, 'Vohemar', 143, 1942)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22690, '1er Arrondissement', 143, 1952)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22691, '2e Arrondissement', 143, 1952)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22692, '3e Arrondissement', 143, 1952)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22693, '4e Arrondissement', 143, 1952)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22694, '5e Arrondissement', 143, 1952)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22695, 'Mandoto', 143, 1950)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22696, 'Lalangina', 143, 1956)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22697, 'Vohibato', 143, 1956)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22698, 'Isandra', 143, 1956)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22699, 'Ifanadiana', 143, 1963)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22700, 'Nosy-Varika', 143, 1963)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22701, 'Mananjary', 143, 1963)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22702, 'Ihosy', 143, 1957)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22703, 'Vohipeno', 143, 1962)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22704, 'Soalala', 143, 1945)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22705, 'Ambato Boeni', 143, 1945)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22706, 'Mitsinjo', 143, 1945)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22707, 'Port-Berge (Boriziny-Vaovao)', 143, 1943)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22708, 'Analalava', 143, 1943)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22709, 'Mampikony', 143, 1943)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22710, 'Kandreho', 143, 1946)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22711, 'Besalampy', 143, 1948)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22712, 'Antsalova', 143, 1948)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22713, 'Morafenobe', 143, 1948)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22714, 'Vatomandry', 143, 1953)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22715, 'Ivohibe', 143, 1957)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22716, 'Čair', 145, 2067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22717, 'Opština Centar', 145, 2067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22718, 'Opstina Gjorce Petrov', 145, 2067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22719, 'Gazi Baba', 145, 2067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22720, 'Opština Karpoš', 145, 2067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22721, 'Kisela Voda', 145, 2067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22722, 'Saraj', 145, 2067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22723, 'Šuto Orizari', 145, 2067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22724, 'Aerodrom', 145, 2067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22725, 'Butel', 145, 2067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22726, 'Douentza Cercle', 146, 2071)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22727, 'Gourma-Rharous Cercle', 146, 2068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22728, 'Gao Cercle', 146, 2074)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22729, 'Koutiala Cercle', 146, 2069)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22730, 'Kati Cercle', 146, 2072)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22731, 'Dioila', 146, 2072)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22732, 'Baroueli', 146, 2070)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22733, 'Segou', 146, 2070)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22734, 'Kidal', 146, 2076)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22735, 'Tombouctou', 146, 2068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22736, 'Dire', 146, 2068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22737, 'Kayes Cercle', 146, 2073)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22738, 'Mopti Cercle', 146, 2071)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22739, 'Bankass Cercle', 146, 2071)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22740, 'Koro Cercle', 146, 2071)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22741, 'Bla', 146, 2070)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22742, 'Tominian', 146, 2070)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22743, 'Kita Cercle', 146, 2073)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22744, 'Bougouni Cercle', 146, 2069)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22745, 'Koulikoro', 146, 2072)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22746, 'Sikasso Cercle', 146, 2069)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22747, 'Diema Cercle', 146, 2073)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22748, 'Kolokani Cercle', 146, 2072)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22749, 'Banamba Cercle', 146, 2072)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22750, 'Nara Cercle', 146, 2072)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22751, 'Nioro Cercle', 146, 2073)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22752, 'Youwarou Cercle', 146, 2071)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22753, 'Niafunke Cercle', 146, 2068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22754, 'Tenenkou Cercle', 146, 2071)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22755, 'Djenne Cercle', 146, 2071)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22756, 'Bandiagara Cercle', 146, 2071)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22757, 'Kenieba Cercle', 146, 2073)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22758, 'Bafoulabe Cercle', 146, 2073)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22759, 'Kolondieba Cercle', 146, 2069)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22760, 'Cercle de Yélimané', 146, 2073)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22761, 'Cercle de Kangaba', 146, 2072)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22762, 'Cercle de Yanfolila', 146, 2069)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22763, 'Cercle de Kadiolo', 146, 2069)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22764, 'Cercle de Yorosso', 146, 2069)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22765, 'Cercle de Niono', 146, 2070)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22766, 'Cercle de Macina', 146, 2070)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22767, 'Cercle de San', 146, 2070)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22768, 'Cercle de Goundam', 146, 2068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22769, 'Cercle de Bourem', 146, 2074)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22770, 'Ansongo Cercle', 146, 2074)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22771, 'Cercle de Ménaka', 146, 2078)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22772, 'Ti-n-Essako', 146, 2076)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22773, 'Cercle d’ Abeïbara', 146, 2076)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22774, 'Cercle de Tessalit', 146, 2076)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22775, 'Bamako Cercle', 146, 2075)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22776, 'Yamethin District', 147, 2086)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22777, 'Mawlaik District', 147, 2081)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22778, 'Taungoo District', 147, 2084)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22779, 'Thayet District', 147, 2087)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22780, 'Thaton District', 147, 2085)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22781, 'Thayarwady District', 147, 2084)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22782, 'Dawei District', 147, 2079)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22783, 'Shwebo District', 147, 2081)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22784, 'Thandwe District', 147, 2083)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22785, 'Sagaing District', 147, 2081)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22786, 'Pyapon District', 147, 2091)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22787, 'Pyay District', 147, 2084)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22788, 'Pakokku District', 147, 2087)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22789, 'Hkamti District', 147, 2081)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22790, 'Myitkyinā District', 147, 2090)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22791, 'Myingyan District', 147, 2086)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22792, 'Myaungmya District', 147, 2091)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22793, 'Minbu District', 147, 2087)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22794, 'Myeik District', 147, 2079)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22795, 'Meiktila District', 147, 2086)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22796, 'Ma-ubin District', 147, 2091)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22797, 'Mandalay District', 147, 2086)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22798, 'Magway District', 147, 2087)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22799, 'Kyaukse District', 147, 2086)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22800, 'Kyaunkpyu District', 147, 2083)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22801, 'Katha District', 147, 2081)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22802, 'Hinthada District', 147, 2091)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22803, 'Bago District', 147, 2084)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22804, 'Bhamo District', 147, 2090)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22805, 'Pathein District', 147, 2091)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22806, 'Sittwe District', 147, 2083)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22807, 'Maungdaw District', 147, 2083)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22808, 'Labutta District', 147, 2091)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22809, 'Putao District', 147, 2090)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22810, 'Mohnyin District', 147, 2090)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22811, 'Hpa-an District', 147, 2089)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22812, 'Myawaddy District', 147, 2089)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22813, 'Kawkareik District', 147, 2089)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22814, 'Bawlakhe District', 147, 2088)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22815, 'Loikaw District', 147, 2088)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22816, 'Nyaung-U District', 147, 2086)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22817, 'Pyin Oo Lwin District', 147, 2086)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22818, 'Kale District', 147, 2081)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22819, 'Tamu District', 147, 2081)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22820, 'Taunggyi District', 147, 2080)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22821, 'Tachileik District', 147, 2080)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22822, 'Mong Hsat District', 147, 2080)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22823, 'Kyaukme District', 147, 2080)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22824, 'Mu Se District', 147, 2080)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22825, 'Loilem District', 147, 2080)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22826, 'Langhko District', 147, 2080)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22827, 'Kengtung District', 147, 2080)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22828, 'Lashio District', 147, 2080)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22829, 'Kawthaung District', 147, 2079)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22830, 'Mawlamyine District', 147, 2085)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22831, 'Gangaw District', 147, 2087)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22832, 'Yangon South District', 147, 2082)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22833, 'Yangon East District', 147, 2082)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22834, 'Hopang', 147, 2080)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22835, 'Falam', 147, 2092)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22836, 'Hakha', 147, 2092)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22837, 'Mindat', 147, 2092)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22838, 'Hpapun', 147, 2089)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22839, 'Nay Pyi Taw (South)', 147, 2093)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22840, 'Mrauk-U', 147, 2083)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22841, 'Monywa', 147, 2081)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22842, 'Yangon (East)', 147, 2082)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22843, 'Yangon (North)', 147, 2082)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22844, 'Nay Pyi Taw (North)', 147, 2093)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22845, 'Yinmabin', 147, 2081)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22846, 'Laukkaing', 147, 2080)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22847, 'Matman', 147, 2080)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22848, 'Mongmit', 147, 2080)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22849, 'Songino', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22850, 'Tariat Sum', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22851, 'Dörgön', 148, 2095)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22852, 'Bayannuur', 148, 2098)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22853, 'Yösöndzüyl Sum', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22854, 'Tarialan', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22855, 'Nomgon Sum', 148, 2105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22856, 'Bayantsogt Sum', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22857, 'Bayan-Önjüül Sum', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22858, 'Bayangol', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22859, 'Halhgol', 148, 2110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22860, 'Matad', 148, 2110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22861, 'Bayantümen', 148, 2110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22862, 'Bulgan', 148, 2110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22863, 'Hölönbuyr', 148, 2110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22864, 'Choybalsan', 148, 2110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22865, 'Chuluunhoroot', 148, 2110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22866, 'Dashbalbar', 148, 2110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22867, 'Gurvandzagal', 148, 2110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22868, 'Sergelen', 148, 2110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22869, 'Tsagaan-Ovoo', 148, 2110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22870, 'Bayandun', 148, 2110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22871, 'Bayan-Uul', 148, 2110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22872, 'Herlen', 148, 2110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22873, 'Erdenetsagaan', 148, 2102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22874, 'Darĭganga', 148, 2102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22875, 'Ongon', 148, 2102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22876, 'Naran', 148, 2102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22877, 'Bayandelger', 148, 2102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22878, 'Haldzan', 148, 2102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22879, 'Uulbayan', 148, 2102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22880, 'Mönhhaan', 148, 2102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22881, 'Tümentsogt', 148, 2102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22882, 'Sühbaatar', 148, 2102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22883, 'Tüvshinshiree', 148, 2102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22884, 'Asgat', 148, 2102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22885, 'Baruun-Urt', 148, 2102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22886, 'Ömnödelger', 148, 2107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22887, 'Darhan', 148, 2107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22888, 'Bayanmönh', 148, 2107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22889, 'Delgerhaan', 148, 2107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22890, 'Jargalthaan', 148, 2107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22891, 'Tsenhermandal', 148, 2107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22892, 'Mörön', 148, 2107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22893, 'Herlen', 148, 2107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22894, 'Bayanhutag', 148, 2107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22895, 'Galshar', 148, 2107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22896, 'Batshireet', 148, 2107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22897, 'Binder', 148, 2107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22898, 'Bayan-Adarga', 148, 2107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22899, 'Dadal', 148, 2107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22900, 'Batnorov', 148, 2107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22901, 'Bayan-Ovoo', 148, 2107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22902, 'Norovlin', 148, 2107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22903, 'Dalanjargalan', 148, 2109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22904, 'Ayrag', 148, 2109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22905, 'Ihhet', 148, 2109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22906, 'Altanshiree', 148, 2109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22907, 'Delgereh', 148, 2109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22908, 'Saynshand', 148, 2109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22909, 'Örgön', 148, 2109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22910, 'Erdene', 148, 2109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22911, 'Dzamyn Üüd', 148, 2109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22912, 'Ulaanbadrah', 148, 2109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22913, 'Sayhandulaan', 148, 2109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22914, 'Mandah', 148, 2109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22915, 'Hövsgöl', 148, 2109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22916, 'Hatanbulag', 148, 2109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22917, 'Sümber', 148, 2108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22918, 'Bayantal', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22919, 'Shiveegovĭ', 148, 2109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22920, 'Mandal-Ovoo', 148, 2105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22921, 'Tsogt-Ovoo', 148, 2105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22922, 'Hanhongor', 148, 2105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22923, 'Tsogttsetsiy', 148, 2105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22924, 'Manlay', 148, 2105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22925, 'Hanbogd', 148, 2105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22926, 'Bayan-Ovoo', 148, 2105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22927, 'Hürmen', 148, 2105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22928, 'Bayandalay', 148, 2105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22929, 'Bulgan', 148, 2105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22930, 'Sevrey', 148, 2105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22931, 'Noyon', 148, 2105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22932, 'Gurvantes', 148, 2105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22933, 'Dalandzadgad', 148, 2105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22934, 'Sayhan-Ovoo', 148, 2108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22935, 'Delgerhangay', 148, 2108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22936, 'Huld', 148, 2108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22937, 'Luus', 148, 2108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22938, 'Erdenedalay', 148, 2108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22939, 'Adaatsag', 148, 2108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22940, 'Delgertsogt', 148, 2108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22941, 'Deren', 148, 2108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22942, 'Tsagaandelger', 148, 2108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22943, 'Govĭ-Ugtaal', 148, 2108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22944, 'Bayanjargalan', 148, 2108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22945, 'Gurvansayhan', 148, 2108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22946, 'Öndörshil', 148, 2108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22947, 'Öldziyt', 148, 2108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22948, 'Saintsagaan', 148, 2108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22949, 'Delgerhaan', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22950, 'Büren', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22951, 'Bayantsagaan', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22952, 'Sergelen', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22953, 'Altanbulag', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22954, 'Öndörshireet', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22955, 'Erdenesant', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22956, 'Lün', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22957, 'Bayanhangay', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22958, 'Argalant', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22959, 'Ugtaal', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22960, 'Dzaamar', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22961, 'Tseel', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22962, 'Jargalant', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22963, 'Sümber', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22964, 'Bornuur', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22965, 'Bayanchandmanĭ', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22966, 'Batsümber', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22967, 'Möngönmorĭt', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22968, 'Bayandelger', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22969, 'Erdene', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22970, 'Arhust', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22971, 'Bayan', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22972, 'Bayanjargalan', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22973, 'Dzuunmod', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22974, 'Baganuur', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22975, 'Bayandzürh', 148, 2100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22976, 'Sharïngol', 148, 2113)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22977, 'Hongor', 148, 2113)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22978, 'Orhon', 148, 2113)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22979, 'Mandal', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22980, 'Orhon', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22981, 'Sayhan', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22982, 'Sant', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22983, 'Baruunbüren', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22984, 'Orhontuul', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22985, 'Shaamar', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22986, 'Dzüünbüren', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22987, 'Tsagaannuur', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22988, 'Tüshig', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22989, 'Sühbaatar', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22990, 'Altanbulag', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22991, 'Hüder', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22992, 'Javhlant', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22993, 'Hushaat', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22994, 'Bayan-Öndör', 148, 2115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22995, 'Jargalant', 148, 2115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22996, 'Hangal', 148, 2111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22997, 'Selenge', 148, 2111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22998, 'Teshig', 148, 2111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (22999, 'Hutag-Öndör', 148, 2111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23000, 'Bugat', 148, 2111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23001, 'Bayan-Agt', 148, 2111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23002, 'Sayhan', 148, 2111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23003, 'Orhon', 148, 2111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23004, 'Hishig-Öndör', 148, 2111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23005, 'Mogod', 148, 2111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23006, 'Büreghangay', 148, 2111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23007, 'Dashinchilen', 148, 2111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23008, 'Bayannuur', 148, 2111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23009, 'Gurvanbulag', 148, 2111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23010, 'Rashaant', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23011, 'Bulgan District', 148, 2111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23012, 'Renchinlhümbe', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23013, 'Tsagaannuur', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23014, 'Ulaan-Uul', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23015, 'Bayandzürh', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23016, 'Alag-Erdene', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23017, 'Arbulag', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23018, 'Tsagaan-Uul', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23019, 'Tsetserleg', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23020, 'Mörön', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23021, 'Bürentogtoh', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23022, 'Tömörbulag', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23023, 'Shine-Ider', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23024, 'Galt', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23025, 'Jargalant', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23026, 'Tosontsengel', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23027, 'Rashaant', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23028, 'Tünel', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23029, 'Chandmanĭ-Öndör', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23030, 'Tsagaan-Üür', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23031, 'Erdenebulgan', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23032, 'Hanh', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23033, 'Tsetserleg', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23034, 'Jargalant', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23035, 'Erdenemandal', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23036, 'Hayrhan', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23037, 'Erdenebulgan', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23038, 'Ihtamir', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23039, 'Öndör-Ulaan', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23040, 'Chuluut', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23041, 'Hangay', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23042, 'Tsahir', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23043, 'Bulgan', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23044, 'Tsenher', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23045, 'Tüvshrüüleh', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23046, 'Hotont', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23047, 'Hashaat', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23048, 'Ögiynuur', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23049, 'Battsengel', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23050, 'Öldziyt', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23051, 'Harhorin', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23052, 'Hujirt', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23053, 'Bat-Öldziy', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23054, 'Uyanga', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23055, 'Dzüünbayan-Ulaan', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23056, 'Taragt', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23057, 'Arvayheer', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23058, 'Hayrhandulaan', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23059, 'Nariynteel', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23060, 'Baruunbayan-Ulaan', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23061, 'Guchin-Us', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23062, 'Bogd', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23063, 'Tögrög', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23064, 'Bayangol', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23065, 'Sant', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23066, 'Bayan-Öndör', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23067, 'Öldziyt', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23068, 'Yösöndzüyl', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23069, 'Bürd', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23070, 'Dzag', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23071, 'Gurvanbulag', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23072, 'Jargalant', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23073, 'Bayanbulag', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23074, 'Bayantsagaan', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23075, 'Hüreemaral', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23076, 'Buutsagaan', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23077, 'Bömbögör', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23078, 'Bayan-Ovoo', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23079, 'Galuut', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23080, 'Erdenetsogt', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23081, 'Bayanhongor', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23082, 'Öldziyt', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23083, 'Jinst', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23084, 'Bogd', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23085, 'Bayangovĭ', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23086, 'Bayanlig', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23087, 'Baatsagaan', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23088, 'Bayan-Öndör', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23089, 'Shinejinst', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23090, 'Höhmorĭt', 148, 2096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23091, 'Bayan-Uul', 148, 2096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23092, 'Jargalan', 148, 2096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23093, 'Tayshir', 148, 2096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23094, 'Delger', 148, 2096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23095, 'Sharga', 148, 2096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23096, 'Darvi', 148, 2096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23097, 'Tonhil', 148, 2096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23098, 'Tögrög', 148, 2096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23099, 'Bugat', 148, 2096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23100, 'Yösönbulag', 148, 2096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23101, 'Haliun', 148, 2096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23102, 'Tseel', 148, 2096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23103, 'Altay', 148, 2096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23104, 'Tsogt', 148, 2096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23105, 'Biger', 148, 2096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23106, 'Chandmanĭ', 148, 2096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23107, 'Erdene', 148, 2096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23108, 'Erdenebüren', 148, 2095)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23109, 'Buyant', 148, 2095)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23110, 'Myangad', 148, 2095)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23111, 'Jargalant', 148, 2095)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23112, 'Khovd', 148, 2095)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23113, 'Duut', 148, 2095)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23114, 'Manhan', 148, 2095)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23115, 'Dzereg', 148, 2095)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23116, 'Mönhhayrhan', 148, 2095)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23117, 'Chandmanĭ', 148, 2095)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23118, 'Darvi', 148, 2095)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23119, 'Tsetseg', 148, 2095)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23120, 'Möst', 148, 2095)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23121, 'Üyönch', 148, 2095)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23122, 'Altay', 148, 2095)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23123, 'Tsagaannuur', 148, 2098)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23124, 'Nogoonnuur', 148, 2098)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23125, 'Ulaanhus', 148, 2098)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23126, 'Tsengel', 148, 2098)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23127, 'Sagsay sum', 148, 2098)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23128, 'Bugat', 148, 2098)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23129, 'Ölgii', 148, 2098)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23130, 'Altantsögts', 148, 2098)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23131, 'Tolbo', 148, 2098)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23132, 'Altay', 148, 2098)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23133, 'Buyant', 148, 2098)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23134, 'Delüün', 148, 2098)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23135, 'Bulgan', 148, 2098)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23136, 'Davst', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23137, 'Sagil', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23138, 'Türgen', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23139, 'Tarialan', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23140, 'Ulaangom', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23141, 'Naranbulag', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23142, 'Ölgiy', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23143, 'Ömnögovĭ', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23144, 'Hovd', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23145, 'Böhmörön', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23146, 'Tes', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23147, 'Dzüüngovĭ', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23148, 'Malchin', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23149, 'Dzavhan', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23150, 'Hyargas', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23151, 'Tsagaanhayrhan', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23152, 'Baruunturuun', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23153, 'Öndörhangay', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23154, 'Dzüünhangay', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23155, 'Bayantes', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23156, 'Tes', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23157, 'Asgat', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23158, 'Bayanhayrhan', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23159, 'Tüdevtey', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23160, 'Tsetsen-Uul', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23161, 'Nömrög', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23162, 'Santmargats', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23163, 'Urgamal', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23164, 'Dzavhanmandal', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23165, 'Dörvöljin', 148, 2096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23166, 'Erdenehayrhan', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23167, 'Uliastay', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23168, 'Aldarhaan', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23169, 'Yaruu', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23170, 'Tsagaanhayrhan', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23171, 'Tsagaanchuluut', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23172, 'Shilüüstey', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23173, 'Otgon', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23174, 'Ider', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23175, 'Telmen', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23176, 'Tosontsengel', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23177, 'Ih-Uul', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23178, 'Dzüüngovĭ Sum', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23179, 'Dorvoljin Sum', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23180, 'Tes Sum', 148, 2097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23181, 'Bulgan District', 148, 2095)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23182, 'Rashaant Sum', 148, 2111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23183, 'Hutag-Öndör Sum', 148, 2111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23184, 'Jargalant Sum', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23185, 'Ih-Uul Sum', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23186, 'Tsagaan-Uul Sum', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23187, 'Bayan Sum', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23188, 'Ugtaaltsaydam Sum', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23189, 'Orhontuul Sum', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23190, 'Yöröö Sum', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23191, 'Mandal Sum', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23192, 'Bayangol Sum', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23193, 'Bayannuur Sum', 148, 2111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23194, 'Büreghangay Sum', 148, 2111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23195, 'Orhon Sum', 148, 2111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23196, 'Jargalant Sum', 148, 2115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23197, 'Erdenet Sum', 148, 2115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23198, 'Bayan-Ovoo Sum', 148, 2105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23199, 'Öldziyt Sum', 148, 2108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23200, 'Bayantsagaan Sum', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23201, 'Bayantal Sum', 148, 2114)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23202, 'Shiveegovi Sum', 148, 2114)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23203, 'Sümber Sum', 148, 2114)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23204, 'Darhan Sum', 148, 2107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23205, 'Bayantümen Sum', 148, 2110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23206, 'Tsagaan-Ovoo Sum', 148, 2110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23207, 'Choybalsan Sum', 148, 2110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23208, 'Darĭganga Sum', 148, 2102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23209, 'Saynshand Sum', 148, 2109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23210, 'Erdenebulgan Sum', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23211, 'Bayanhongor Sum', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23212, 'Ölgiy Sum', 148, 2098)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23213, 'Dzamïn-Üüd Sum', 148, 2109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23214, 'Mörön Sum', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23215, 'Khairkhan', 148, 2112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23216, 'Olziit', 148, 2099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23217, 'Mönkhkhairkhan', 148, 2095)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23218, 'Öndörkhangai', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23219, 'Züüngovi', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23220, 'Züünkhangai', 148, 2094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23221, 'Yesönbulag', 148, 2096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23222, 'Bayanzürkh', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23223, 'Khatgal', 148, 2106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23224, 'Kherlen', 148, 2110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23225, 'Khölönbuir', 148, 2110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23226, 'Baruun Bayan-Ulaan', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23227, 'Bat-Ölzii', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23228, 'Yesönzüil', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23229, 'Züünbayan-Ulaan', 148, 2104)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23230, 'Khüder', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23231, 'Züünbüren', 148, 2103)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23232, 'Khan-Uul', 148, 2101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23233, 'Sainshand', 148, 2109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23234, 'Bor-Öndör Sum', 148, 2107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23235, 'Farallon de Pajaros', 150, 2127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23236, 'Asuncion Island', 150, 2127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23237, 'Agrihan Island', 150, 2127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23238, 'Pagan Island', 150, 2127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23239, 'Alamagan Island', 150, 2127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23240, 'Guguan Island', 150, 2127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23241, 'Zealandia Bank', 150, 2127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23242, 'Sarigan Island', 150, 2127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23243, 'Anatahan Island', 150, 2127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23244, 'Farallon de Medinilla', 150, 2127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23245, 'Maug Islands', 150, 2127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23246, 'Aguijan Island', 150, 2126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23247, 'Martinique', 151, 2128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23248, 'Aleg', 152, 2138)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23249, 'Rosso Department', 152, 2129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23250, 'Tidjikja', 152, 2131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23251, 'Ouad Naga', 152, 2129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23252, 'Mederdra', 152, 2129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23253, 'Boutilimit', 152, 2129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23254, 'Bogué Department', 152, 2138)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23255, 'Arafat', 152, 2143)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23256, 'Dar Naim', 152, 2142)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23257, 'Ksar', 152, 2141)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23258, 'Riad', 152, 2143)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23259, 'Sebkha', 152, 2141)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23260, 'Teyarett', 152, 2142)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23261, 'Toujounine', 152, 2142)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23262, 'Selibaby', 152, 2135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23263, 'Guerou', 152, 2139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23264, 'Maghama', 152, 2136)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23265, 'R''Kiz', 152, 2129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23266, 'Kiffa', 152, 2139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23267, 'Aioun', 152, 2133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23268, 'Nema', 152, 2134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23269, 'Timbedra', 152, 2134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23270, 'F''Derik', 152, 2130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23271, 'Keur-Macene', 152, 2129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23272, 'Aoujeft', 152, 2140)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23273, 'Bir Moghreïn', 152, 2130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23274, 'Bababe', 152, 2138)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23275, 'Ould Yenge', 152, 2135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23276, 'Amourj', 152, 2134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23277, 'Kankossa', 152, 2139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23278, 'Tintane', 152, 2133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23279, 'Kobenni', 152, 2133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23280, 'Chinguetti', 152, 2140)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23281, 'Kaedi', 152, 2136)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23282, 'Tichitt', 152, 2131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23283, 'M''Bagne', 152, 2138)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23284, 'Moudjeria', 152, 2131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23285, 'M''Bout', 152, 2136)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23286, 'Magta-Lahjar', 152, 2138)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23287, 'Nouadhibou', 152, 2137)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23288, 'Boumdeid', 152, 2139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23289, 'Akjoujt', 152, 2132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23290, 'Atar', 152, 2140)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23291, 'Monguel', 152, 2136)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23292, 'Zouerate', 152, 2130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23293, 'Ouadane', 152, 2140)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23294, 'Oualata', 152, 2134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23295, 'Bassiknou', 152, 2134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23296, 'El Mina', 152, 2143)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23297, 'Tevragh Zeina', 152, 2141)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23298, 'Tamchekett', 152, 2133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23299, 'Djigueni', 152, 2134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23300, 'Barkeol', 152, 2139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23301, 'Chami', 152, 2137)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23302, 'D''har', 152, 2134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23303, 'Chitipa District', 157, 2249)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23304, 'Zomba District', 157, 2248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23305, 'Salima District', 157, 2250)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23306, 'Rumphi District', 157, 2249)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23307, 'Ntchisi District', 157, 2250)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23308, 'Nsanje District', 157, 2248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23309, 'Nkhotakota District', 157, 2250)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23310, 'Nkhata Bay District', 157, 2249)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23311, 'Ntcheu District', 157, 2250)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23312, 'Mzimba District', 157, 2249)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23313, 'Mwanza District', 157, 2248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23314, 'Mulanje District', 157, 2248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23315, 'Mchinji District', 157, 2250)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23316, 'Mangochi District', 157, 2248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23317, 'Machinga District', 157, 2248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23318, 'Lilongwe District', 157, 2250)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23319, 'Kasungu District', 157, 2250)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23320, 'Karonga District', 157, 2249)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23321, 'Dowa District', 157, 2250)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23322, 'Dedza District', 157, 2250)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23323, 'Thyolo District', 157, 2248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23324, 'Chiradzulu District', 157, 2248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23325, 'Chikwawa District', 157, 2248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23326, 'Blantyre District', 157, 2248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23327, 'Balaka District', 157, 2248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23328, 'Likoma District', 157, 2249)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23329, 'Phalombe District', 157, 2248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23330, 'Neno District', 157, 2248)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23331, 'Los Cabos', 158, 2280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23332, 'Loreto', 158, 2280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23333, 'La Paz', 158, 2280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23334, 'Mulegé', 158, 2280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23335, 'Comondú', 158, 2280)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23336, 'Ensenada', 158, 2281)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23337, 'Mexicali', 158, 2281)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23338, 'Tecate', 158, 2281)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23339, 'Tijuana', 158, 2281)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23340, 'Playas de Rosarito', 158, 2281)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23341, 'Aguascalientes', 158, 2282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23342, 'Asientos', 158, 2282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23343, 'Calvillo', 158, 2282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23344, 'Cosío', 158, 2282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23345, 'Jesús María', 158, 2282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23346, 'Pabellón de Arteaga', 158, 2282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23347, 'Rincón de Romos', 158, 2282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23348, 'San José de Gracia', 158, 2282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23349, 'Tepezalá', 158, 2282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23350, 'El Llano', 158, 2282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23351, 'San Francisco de los Romo', 158, 2282)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23352, 'Calkiní', 158, 2267)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23353, 'Campeche', 158, 2267)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23354, 'Carmen', 158, 2267)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23355, 'Champotón', 158, 2267)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23356, 'Hecelchakán', 158, 2267)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23357, 'Palizada', 158, 2267)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23358, 'Tenabo', 158, 2267)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23359, 'Escárcega', 158, 2267)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23360, 'Calakmul', 158, 2267)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23361, 'Candelaria', 158, 2267)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23362, 'Puente de Ixtla', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23363, 'Acacoyagua', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23364, 'Acala', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23365, 'Acapetahua', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23366, 'Aldama', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23367, 'Altamirano', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23368, 'Amatán', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23369, 'Amatenango de la Frontera', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23370, 'Amatenango del Valle', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23371, 'Ángel Albino Corzo', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23372, 'Arriaga', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23373, 'Bejucal de Ocampo', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23374, 'Bella Vista', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23375, 'Benemérito de las Américas', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23376, 'Berriozábal', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23377, 'Bochil', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23378, 'El Bosque', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23379, 'Cacahoatán', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23380, 'Catazajá', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23381, 'Chalchihuitán', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23382, 'Chamula', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23383, 'Chanal', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23384, 'Chapultenango', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23385, 'Chenalhó', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23386, 'Chiapa de Corzo', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23387, 'Chiapilla', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23388, 'Chicoasén', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23389, 'Chicomuselo', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23390, 'Chilón', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23391, 'Cintalapa', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23392, 'Coapilla', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23393, 'Comitán Municipality', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23394, 'La Concordia', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23395, 'Copainalá', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23396, 'Escuintla', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23397, 'Francisco León', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23398, 'Reynosa', 158, 2254)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23399, 'Temósachic', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23400, 'Bolaños', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23401, 'Huatusco', 158, 2252)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23402, 'San Cristobal De Casas', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23403, 'San Dimas', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23404, 'Xonacatlan', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23405, 'Naucalpan de Juárez', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23406, 'Ecatepec de Morelos', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23407, 'Acolman de Nezahualcóyotl', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23408, 'Álvaro Obregón', 158, 2265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23409, 'Amecameca', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23410, 'Apaxco', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23411, 'Atenco', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23412, 'Atizapán de Zaragoza', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23413, 'Atlautla', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23414, 'Axapusco', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23415, 'Ayapango', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23416, 'Azcapotzalco', 158, 2265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23417, 'Benito Juárez', 158, 2265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23418, 'Chalco', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23419, 'Chiautla', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23420, 'Chicoloapan', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23421, 'Chiconcuac', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23422, 'Chimalhuacán', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23423, 'Coacalco', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23424, 'Cocotitlán', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23425, 'Coyoacán', 158, 2265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23426, 'Coyotepec', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23427, 'Cuajimalpa de Morelos', 158, 2265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23428, 'Cuauhtémoc', 158, 2265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23429, 'Cuautitlán', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23430, 'Ecatzingo', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23431, 'Gustavo A. Madero', 158, 2265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23432, 'Huehuetoca', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23433, 'Hueypoxtla', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23434, 'Huixquilucan', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23435, 'Cuautitlán Izcalli', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23436, 'Ixtapaluca', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23437, 'Iztacalco', 158, 2265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23438, 'Iztapalapa', 158, 2265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23439, 'Jaltenco', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23440, 'Juchitepec', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23441, 'Magdalena Contreras', 158, 2265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23442, 'Melchor Ocampo', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23443, 'Miguel Hidalgo', 158, 2265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23444, 'Milpa Alta', 158, 2265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23445, 'Nextlalpan', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23446, 'Ciudad Nezahualcóyotl', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23447, 'Nicolás Romero', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23448, 'Nopaltepec', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23449, 'Otumba', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23450, 'Ozumba', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23451, 'Papalotla', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23452, 'San Martín de las Pirámides', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23453, 'Tecámac', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23454, 'Temamatla', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23455, 'Temascalapa', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23456, 'Tenango del Aire', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23457, 'Teoloyucan', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23458, 'Teotihuacán', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23459, 'Tepetlaoxtoc', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23460, 'Tizayuca', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23461, 'Tláhuac', 158, 2265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23462, 'Tlalpan', 158, 2265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23463, 'Venustiano Carranza', 158, 2265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23464, 'Xochimilco', 158, 2265)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23465, 'Tepotzotlán', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23466, 'Texcoco', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23467, 'Tezoyuca', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23468, 'Tlalnepantla de Baz', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23469, 'Tultepec', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23470, 'Tultitlán', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23471, 'Valle de Chalco Solidaridad', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23472, 'Zumpango', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23473, 'Tepetlixpa', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23474, 'Tequixquiac', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23475, 'Villa del Carbón', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23476, 'Benito Juárez', 158, 2268)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23477, 'Benito Juárez', 158, 2269)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23478, 'Tuxtla Chico', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23479, 'Unión de San Antonio', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23480, 'Ixtlahuacán', 158, 2277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23481, 'Manzanillo', 158, 2277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23482, 'Benito Juárez', 158, 2256)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23483, 'Benito Juárez', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23484, 'Cuauhtémoc', 158, 2268)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23485, 'Aldama', 158, 2254)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23486, 'Loreto', 158, 2268)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23487, 'Melchor Ocampo', 158, 2268)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23488, 'Melchor Ocampo', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23489, 'Venustiano Carranza', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23490, 'Venustiano Carranza', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23491, 'Venustiano Carranza', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23492, 'Chiautla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23493, 'Jesús María', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23494, 'Coyotepec', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23495, 'Frontera Hidalgo', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23496, 'La Grandeza', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23497, 'Huehuetán', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23498, 'Huixtán', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23499, 'Huitiupán', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23500, 'Cuauhtémoc', 158, 2277)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23501, 'Huixtla', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23502, 'La Independencia', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23503, 'Ixhuatán', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23504, 'Ixtacomitán', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23505, 'Ixtapa', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23506, 'Ixtapangajoya', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23507, 'Jiquipilas', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23508, 'Jitotol', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23509, 'Juárez', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23510, 'Larráinzar', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23511, 'La Libertad', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23512, 'Mapastepec', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23513, 'Las Margaritas', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23514, 'Mazapa de Madero', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23515, 'Mazatán', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23516, 'Metapa', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23517, 'Mitontic', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23518, 'Motozintla', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23519, 'Nicolás Ruíz', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23520, 'Ocosingo', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23521, 'Ocotepec', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23522, 'Ocozocoautla de Espinosa', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23523, 'Ostuacán', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23524, 'Osumacinta', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23525, 'Oxchuc', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23526, 'Palenque', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23527, 'Pantelhó', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23528, 'Pantepec', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23529, 'Pichucalco', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23530, 'Pijijiapan', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23531, 'El Porvenir', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23532, 'Villa Comaltitlán', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23533, 'Pueblo Nuevo Solistahuacán', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23534, 'Rayón', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23535, 'Reforma', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23536, 'Las Rosas', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23537, 'Sabanilla', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23538, 'Salto de Agua', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23539, 'San Fernando', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23540, 'Siltepec', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23541, 'Simojovel', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23542, 'Sitalá', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23543, 'Socoltenango', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23544, 'Solosuchiapa', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23545, 'Soyaló', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23546, 'Suchiapa', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23547, 'Suchiate', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23548, 'Sunuapa', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23549, 'Tapachula', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23550, 'Tapalapa', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23551, 'Tapilula', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23552, 'Tecpatán', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23553, 'Tenejapa', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23554, 'Teopisca', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23555, 'Tila', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23556, 'Tonalá', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23557, 'Totolapa', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23558, 'La Trinitaria', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23559, 'Tumbalá', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23560, 'Tuxtla Gutiérrez', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23561, 'Tuzantán', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23562, 'Tzimol', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23563, 'Unión Juárez', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23564, 'Villa Corzo', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23565, 'Villaflores', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23566, 'Yajalón', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23567, 'San Lucas', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23568, 'Zinacantán', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23569, 'San Juan Cancuc', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23570, 'Maravilla Tenejapa', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23571, 'Marqués de Comillas', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23572, 'Montecristo de Guerrero', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23573, 'San Andrés Duraznal', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23574, 'Santiago el Pinar', 158, 2266)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23575, 'Ahumada', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23576, 'Allende', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23577, 'Aquiles Serdán', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23578, 'Ascensión', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23579, 'Bachíniva', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23580, 'Balleza', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23581, 'Batopilas', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23582, 'Bocoyna', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23583, 'Buenaventura', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23584, 'Camargo', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23585, 'Carichí', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23586, 'Casas Grandes', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23587, 'Coronado', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23588, 'Coyame del Sotol', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23589, 'La Cruz', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23590, 'Cusihuiriachi', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23591, 'Chihuahua', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23592, 'Chínipas', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23593, 'Delicias', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23594, 'Dr. Belisario Domínguez', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23595, 'Galeana', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23596, 'Santa Isabel', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23597, 'Gómez Farías', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23598, 'Gran Morelos', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23599, 'Guachochi', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23600, 'Guadalupe', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23601, 'Guadalupe y Calvo', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23602, 'Guazapares', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23603, 'Guerrero', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23604, 'Cuauhtémoc', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23605, 'Aldama', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23606, 'Matachí', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23607, 'Matamoros', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23608, 'Meoqui', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23609, 'Morelos', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23610, 'Moris', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23611, 'Namiquipa', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23612, 'Nonoava', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23613, 'Nuevo Casas Grandes', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23614, 'Ocampo', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23615, 'Ojinaga', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23616, 'Praxedis G. Guerrero', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23617, 'Riva Palacio', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23618, 'Rosales', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23619, 'Rosario', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23620, 'San Francisco de Borja', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23621, 'San Francisco de Conchos', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23622, 'San Francisco del Oro', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23623, 'Santa Bárbara', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23624, 'Satevó', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23625, 'Saucillo', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23626, 'El Tule', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23627, 'Urique', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23628, 'Uruachi', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23629, 'Valle de Zaragoza', 158, 2279)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23630, 'Canatlán', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23631, 'Canelas', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23632, 'Coneto de Comonfort', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23633, 'Cuencamé', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23634, 'Durango', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23635, 'General Simón Bolívar', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23636, 'Gómez Palacio', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23637, 'Guadalupe Victoria', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23638, 'Guanaceví', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23639, 'Hidalgo', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23640, 'Indé', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23641, 'Lerdo', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23642, 'Mapimí', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23643, 'Mezquital', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23644, 'Nazas', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23645, 'Nombre de Dios', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23646, 'Ocampo', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23647, 'El Oro', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23648, 'Otáez', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23649, 'Pánuco de Coronado', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23650, 'Peñón Blanco', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23651, 'Poanas', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23652, 'Pueblo Nuevo', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23653, 'Rodeo', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23654, 'San Bernardo', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23655, 'San Juan de Guadalupe', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23656, 'San Juan del Río', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23657, 'San Luis del Cordero', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23658, 'San Pedro del Gallo', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23659, 'Santa Clara', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23660, 'Santiago Papasquiaro', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23661, 'Súchil', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23662, 'Tamazula', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23663, 'Tepehuanes', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23664, 'Tlahualilo', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23665, 'Topia', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23666, 'Vicente Guerrero', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23667, 'Nuevo Ideal', 158, 2276)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23668, 'Abasolo', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23669, 'Acámbaro', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23670, 'San Miguel de Allende', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23671, 'Apaseo el Alto', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23672, 'Apaseo el Grande', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23673, 'Atarjea', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23674, 'Celaya', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23675, 'Manuel Doblado', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23676, 'Comonfort', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23677, 'Coroneo', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23678, 'Cortazar', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23679, 'Cuerámaro', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23680, 'Doctor Mora', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23681, 'Dolores Hidalgo Cuna de la Independencia Nacional', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23682, 'Guanajuato', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23683, 'Huanímaro', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23684, 'Irapuato', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23685, 'Jaral del Progreso', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23686, 'Jerécuaro', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23687, 'León', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23688, 'Moroleón', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23689, 'Ocampo', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23690, 'Pénjamo', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23691, 'Pueblo Nuevo', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23692, 'Purísima del Rincón', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23693, 'Romita', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23694, 'Salamanca', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23695, 'Salvatierra', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23696, 'San Diego de la Unión', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23697, 'San Felipe', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23698, 'San Francisco del Rincón', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23699, 'San José Iturbide', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23700, 'San Luis de la Paz', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23701, 'Santa Catarina', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23702, 'Santa Cruz de Juventino Rosas', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23703, 'Santiago Maravatío', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23704, 'Silao de la Victoria', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23705, 'Tarandacuao', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23706, 'Tarimoro', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23707, 'Tierra Blanca', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23708, 'Uriangato', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23709, 'Valle de Santiago', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23710, 'Victoria', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23711, 'Villagrán', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23712, 'Xichú', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23713, 'Yuriria', 158, 2275)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23714, 'Acapulco de Juárez', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23715, 'Ahuacuotzingo', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23716, 'Ajuchitlán del Progreso', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23717, 'Alcozauca de Guerrero', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23718, 'Alpoyeca', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23719, 'Apaxtla', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23720, 'Arcelia', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23721, 'Atenango del Río', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23722, 'Atlamajalcingo del Monte', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23723, 'Atlixtac', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23724, 'Atoyac de Álvarez', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23725, 'Ayutla de los Libres', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23726, 'Azoyú', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23727, 'Buenavista de Cuéllar', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23728, 'Coahuayutla de José María Izazaga', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23729, 'Cocula', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23730, 'Copala', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23731, 'Copalillo', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23732, 'Copanatoyac', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23733, 'Coyuca de Benítez', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23734, 'Coyuca de Catalán', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23735, 'Pacula', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23736, 'Cuajinicuilapa', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23737, 'Cualác', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23738, 'Cuautepec', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23739, 'Cuetzala del Progreso', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23740, 'Cutzamala de Pinzón', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23741, 'Chilapa de Álvarez', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23742, 'Chilpancingo de los Bravo', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23743, 'Florencio Villarreal', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23744, 'General Canuto A. Neri', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23745, 'General Heliodoro Castillo', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23746, 'Huamuxtitlán', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23747, 'Huitzuco de los Figueroa', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23748, 'Iguala de la Independencia', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23749, 'Igualapa', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23750, 'Ixcateopan de Cuauhtémoc', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23751, 'Zihuatanejo de Azueta', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23752, 'Juan R. Escudero', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23753, 'Leonardo Bravo', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23754, 'Malinaltepec', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23755, 'Mártir de Cuilapan', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23756, 'Metlatónoc', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23757, 'Mochitlán', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23758, 'Olinalá', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23759, 'Ometepec', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23760, 'Pedro Ascencio Alquisiras', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23761, 'Petatlán', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23762, 'Pilcaya', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23763, 'Pungarabato', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23764, 'Quechultenango', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23765, 'San Luis Acatlán', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23766, 'San Marcos', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23767, 'San Miguel Totolapan', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23768, 'Taxco de Alarcón', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23769, 'Tecoanapa', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23770, 'Técpan de Galeana', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23771, 'Teloloapan', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23772, 'Tepecoacuilco de Trujano', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23773, 'Tetipac', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23774, 'Tixtla de Guerrero', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23775, 'Tlacoachistlahuaca', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23776, 'Tlacoapa', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23777, 'Tlalchapa', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23778, 'Tlalixtaquilla de Maldonado', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23779, 'Tlapa de Comonfort', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23780, 'Tlapehuala', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23781, 'La Unión de Isidoro Montes de Oca', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23782, 'Xalpatláhuac', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23783, 'Xochihuehuetlán', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23784, 'Xochistlahuaca', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23785, 'Zapotitlán Tablas', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23786, 'Zirándaro', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23787, 'Zitlala', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23788, 'Eduardo Neri', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23789, 'Acatepec', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23790, 'Cochoapa el Grande', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23791, 'José Joaquín de Herrera', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23792, 'Juchitán', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23793, 'Iliatenco', 158, 2264)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23794, 'Acatlán', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23795, 'Acaxochitlán', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23796, 'Actopan', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23797, 'Agua Blanca de Iturbide', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23798, 'Ajacuba', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23799, 'Alfajayucan', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23800, 'Almoloya', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23801, 'Apan', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23802, 'El Arenal', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23803, 'Atitalaquia', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23804, 'Atlapexco', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23805, 'Atotonilco el Grande', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23806, 'Atotonilco de Tula', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23807, 'Calnali', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23808, 'Cardonal', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23809, 'Cuautepec de Hinojosa', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23810, 'Chapantongo', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23811, 'Chapulhuacán', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23812, 'Chilcuautla', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23813, 'Eloxochitlán', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23814, 'Emiliano Zapata', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23815, 'Epazoyucan', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23816, 'Francisco I. Madero', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23817, 'Huasca de Ocampo', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23818, 'Huautla', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23819, 'Huazalingo', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23820, 'Huehuetla', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23821, 'Huejutla de Reyes', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23822, 'Huichapan', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23823, 'Ixmiquilpan', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23824, 'Jacala de Ledezma', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23825, 'Jaltocán', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23826, 'Juárez Hidalgo', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23827, 'Lolotla', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23828, 'Metepec', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23829, 'San Agustín Metzquititlán', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23830, 'Metztitlán', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23831, 'Mineral del Chico', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23832, 'Mineral del Monte', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23833, 'La Misión', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23834, 'Mixquiahuala de Juárez', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23835, 'Molango de Escamilla', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23836, 'Nicolás Flores', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23837, 'Nopala de Villagrán', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23838, 'Omitlán de Juárez', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23839, 'San Felipe Orizatlán', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23840, 'Pachuca de Soto', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23841, 'Pisaflores', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23842, 'Progreso de Obregón', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23843, 'Mineral de la Reforma', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23844, 'San Agustín Tlaxiaca', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23845, 'San Bartolo Tutotepec', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23846, 'San Salvador', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23847, 'Santiago de Anaya', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23848, 'Santiago Tulantepec de Lugo Guerrero', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23849, 'Singuilucan', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23850, 'Tasquillo', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23851, 'Tecozautla', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23852, 'Tenango de Doria', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23853, 'Tepeapulco', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23854, 'Tepehuacán de Guerrero', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23855, 'Tepeji del Río de Ocampo', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23856, 'Tepetitlán', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23857, 'Tetepango', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23858, 'Villa de Tezontepec', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23859, 'Tezontepec de Aldama', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23860, 'Tianguistengo', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23861, 'Tlahuelilpan', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23862, 'Tlahuiltepa', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23863, 'Tlanalapa', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23864, 'Tlanchinol', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23865, 'Tlaxcoapan', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23866, 'Tolcayuca', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23867, 'Tula de Allende', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23868, 'Tulancingo de Bravo', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23869, 'Xochiatipan', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23870, 'Xochicoatlán', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23871, 'Yahualica', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23872, 'Zacualtipán de Ángeles', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23873, 'Zapotlán de Juárez', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23874, 'Zempoala', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23875, 'Zimapán', 158, 2263)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23876, 'Acatic', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23877, 'Acatlán de Juárez', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23878, 'Ahualulco de Mercado', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23879, 'Amacueca', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23880, 'Amatitán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23881, 'Ameca', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23882, 'San Juanito de Escobedo', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23883, 'Arandas', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23884, 'El Arenal', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23885, 'Atemajac de Brizuela', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23886, 'Atengo', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23887, 'Atenguillo', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23888, 'Atotonilco el Alto', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23889, 'Atoyac', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23890, 'Autlán de Navarro', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23891, 'Ayotlán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23892, 'La Barca', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23893, 'Cabo Corrientes', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23894, 'Casimiro Castillo', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23895, 'Cihuatlán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23896, 'Zapotlán el Grande', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23897, 'Cocula', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23898, 'Colotlán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23899, 'Concepción de Buenos Aires', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23900, 'Cuautitlán de García Barragán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23901, 'Cuautla', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23902, 'Cuquío', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23903, 'Chapala', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23904, 'Chimaltitán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23905, 'Chiquilistlán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23906, 'Degollado', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23907, 'Ejutla', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23908, 'Encarnación de Díaz', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23909, 'Etzatlán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23910, 'El Grullo', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23911, 'Guachinango', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23912, 'Guadalajara', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23913, 'Hostotipaquillo', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23914, 'Huejúcar', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23915, 'Huejuquilla el Alto', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23916, 'La Huerta', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23917, 'Ixtlahuacán de los Membrillos', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23918, 'Ixtlahuacán del Río', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23919, 'Jalostotitlán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23920, 'Jamay', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23921, 'Jilotlán de los Dolores', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23922, 'Jocotepec', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23923, 'Juanacatlán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23924, 'Juchitlán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23925, 'Lagos de Moreno', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23926, 'El Limón', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23927, 'Magdalena', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23928, 'Santa María del Oro', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23929, 'La Manzanilla de la Paz', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23930, 'Mascota', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23931, 'Mazamitla', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23932, 'Mexticacán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23933, 'Mezquitic', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23934, 'Mixtlán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23935, 'Ocotlán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23936, 'Ojuelos de Jalisco', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23937, 'Pihuamo', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23938, 'Poncitlán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23939, 'Puerto Vallarta', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23940, 'Villa Purificación', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23941, 'Quitupan', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23942, 'El Salto', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23943, 'San Cristóbal de la Barranca', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23944, 'San Diego de Alejandría', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23945, 'San Juan de los Lagos', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23946, 'San Julián', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23947, 'San Marcos', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23948, 'San Martín de Bolaños', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23949, 'San Martín Hidalgo', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23950, 'San Miguel el Alto', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23951, 'Gómez Farías', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23952, 'San Sebastián del Oeste', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23953, 'Santa María de los Ángeles', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23954, 'Sayula', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23955, 'Tala', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23956, 'Talpa de Allende', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23957, 'Tamazula de Gordiano', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23958, 'Tapalpa', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23959, 'Tecalitlán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23960, 'Tecolotlán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23961, 'Techaluta de Montenegro', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23962, 'Tenamaxtlán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23963, 'Teocaltiche', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23964, 'Teocuitatlán de Corona', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23965, 'Tepatitlán de Morelos', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23966, 'Tequila', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23967, 'Teuchitlán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23968, 'Tizapán el Alto', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23969, 'Tlajomulco de Zúñiga', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23970, 'San Pedro Tlaquepaque', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23971, 'Tolimán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23972, 'Tomatlán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23973, 'Tonalá', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23974, 'Tonaya', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23975, 'Tonila', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23976, 'Totatiche', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23977, 'Tototlán', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23978, 'Tuxcacuesco', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23979, 'Tuxcueca', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23980, 'Tuxpan', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23981, 'Unión de Tula', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23982, 'Valle de Guadalupe', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23983, 'Valle de Juárez', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23984, 'San Gabriel', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23985, 'Villa Corona', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23986, 'Villa Guerrero', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23987, 'Villa Hidalgo', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23988, 'Cañadas de Obregón', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23989, 'Yahualica de González Gallo', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23990, 'Zacoalco de Torres', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23991, 'Zapopan', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23992, 'Zapotiltic', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23993, 'Zapotitlán de Vadillo', 158, 2274)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23994, 'Morelos', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23995, 'Ocoyoacac', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23996, 'Ocuilan', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23997, 'El Oro', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23998, 'Otzoloapan', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (23999, 'Otzolotepec', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24000, 'Polotitlán', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24001, 'Rayón', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24002, 'San Antonio la Isla', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24003, 'San Felipe del Progreso', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24004, 'San Mateo Atenco', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24005, 'San Simón de Guerrero', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24006, 'Santo Tomás', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24007, 'Soyaniquilpan de Juárez', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24008, 'Sultepec', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24009, 'Tejupilco', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24010, 'Temascalcingo', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24011, 'Temascaltepec', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24012, 'Temoaya', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24013, 'Tenancingo', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24014, 'Tenango del Valle', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24015, 'Texcaltitlán', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24016, 'Texcalyacac', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24017, 'Tianguistenco', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24018, 'Timilpan', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24019, 'Tlalmanalco', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24020, 'Tlatlaya', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24021, 'La Paz', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24022, 'Villa Victoria', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24023, 'Zacazonapan', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24024, 'Zacualpan', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24025, 'Zinacantepec', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24026, 'Zumpahuacán', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24027, 'Luvianos', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24028, 'San José del Rincón', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24029, 'Tonanitla', 158, 2262)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24030, 'Acuitzio', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24031, 'Aguililla', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24032, 'Angamacutiro', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24033, 'Angangueo', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24034, 'Apatzingán', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24035, 'Aporo', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24036, 'Aquila', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24037, 'Ario', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24038, 'Arteaga', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24039, 'Briseñas', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24040, 'Buenavista', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24041, 'Carácuaro', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24042, 'Coahuayana', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24043, 'Coalcomán de Vázquez Pallares', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24044, 'Coeneo', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24045, 'Contepec', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24046, 'Copándaro', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24047, 'Cotija', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24048, 'Cuitzeo', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24049, 'Charapan', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24050, 'Charo', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24051, 'Chavinda', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24052, 'Cherán', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24053, 'Chilchota', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24054, 'Chinicuila', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24055, 'Chucándiro', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24056, 'Churintzio', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24057, 'Churumuco', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24058, 'Ecuandureo', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24059, 'Epitacio Huerta', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24060, 'Erongarícuaro', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24061, 'Gabriel Zamora', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24062, 'Higueras', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24063, 'Hidalgo', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24064, 'La Huacana', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24065, 'Huandacareo', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24066, 'Huaniqueo', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24067, 'Huetamo', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24068, 'Huiramba', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24069, 'Indaparapeo', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24070, 'Irimbo', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24071, 'Ixtlán', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24072, 'Jacona', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24073, 'Jiménez', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24074, 'Jiquilpan', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24075, 'Juárez', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24076, 'Jungapeo', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24077, 'Lagunillas', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24078, 'Madero', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24079, 'Maravatío', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24080, 'Marcos Castellanos', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24081, 'Lázaro Cárdenas', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24082, 'Morelia', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24083, 'Morelos', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24084, 'Múgica', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24085, 'Nahuatzen', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24086, 'Nocupétaro', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24087, 'Nuevo Parangaricutiro', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24088, 'Nuevo Urecho', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24089, 'Numarán', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24090, 'Ocampo', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24091, 'Pajacuarán', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24092, 'Panindícuaro', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24093, 'Parácuaro', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24094, 'Paracho', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24095, 'Pátzcuaro', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24096, 'Penjamillo', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24097, 'Peribán', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24098, 'La Piedad', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24099, 'Purépero', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24100, 'Puruándiro', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24101, 'Queréndaro', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24102, 'Quiroga', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24103, 'Cojumatlán de Régules', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24104, 'Los Reyes', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24105, 'Sahuayo', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24106, 'San Lucas', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24107, 'Santa Ana Maya', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24108, 'Salvador Escalante', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24109, 'Senguio', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24110, 'Susupuato', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24111, 'Tacámbaro', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24112, 'Tancítaro', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24113, 'Tangamandapio', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24114, 'Tangancícuaro', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24115, 'Tanhuato', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24116, 'Taretan', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24117, 'Tarímbaro', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24118, 'Tepalcatepec', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24119, 'Tingambato', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24120, 'Álvaro Obregón', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24121, 'Tingüindín', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24122, 'Tiquicheo de Nicolás Romero', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24123, 'Tlalpujahua', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24124, 'Tlazazalca', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24125, 'Tumbiscatío', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24126, 'Turicato', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24127, 'Tuxpan', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24128, 'Tuzantla', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24129, 'Tzintzuntzan', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24130, 'Tzitzio', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24131, 'Uruapan', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24132, 'Villamar', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24133, 'Vista Hermosa', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24134, 'Yurécuaro', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24135, 'Zacapu', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24136, 'Zamora', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24137, 'Zináparo', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24138, 'Zinapécuaro', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24139, 'Ziracuaretiro', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24140, 'Zitácuaro', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24141, 'José Sixto Verduzco', 158, 2273)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24142, 'Amacuzac', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24143, 'Atlatlahucan', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24144, 'Axochiapan', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24145, 'Ayala', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24146, 'Coatlán del Río', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24147, 'Cuautla', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24148, 'Cuernavaca', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24149, 'Emiliano Zapata', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24150, 'Huitzilac', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24151, 'Jantetelco', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24152, 'Jiutepec', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24153, 'Jojutla', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24154, 'Jonacatepec', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24155, 'Mazatepec', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24156, 'Miacatlán', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24157, 'Ocuituco', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24158, 'Temixco', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24159, 'Tepalcingo', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24160, 'Tepoztlán', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24161, 'Tetecala', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24162, 'Tetela del Volcán', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24163, 'Tlalnepantla', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24164, 'Tlaltizapán de Zapata', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24165, 'Tlaquiltenango', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24166, 'Tlayacapan', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24167, 'Totolapan', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24168, 'Xochitepec', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24169, 'Yautepec', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24170, 'Yecapixtla', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24171, 'Zacatepec', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24172, 'Zacualpan', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24173, 'Temoac', 158, 2261)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24174, 'Acaponeta', 158, 2272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24175, 'Ahuacatlán', 158, 2272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24176, 'Amatlán de Cañas', 158, 2272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24177, 'Compostela', 158, 2272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24178, 'Huajicori', 158, 2272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24179, 'Ixtlán del Río', 158, 2272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24180, 'Jala', 158, 2272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24181, 'Xalisco', 158, 2272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24182, 'Del Nayar', 158, 2272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24183, 'Rosamorada', 158, 2272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24184, 'Ruíz', 158, 2272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24185, 'San Blas', 158, 2272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24186, 'San Pedro Lagunillas', 158, 2272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24187, 'Santa María del Oro', 158, 2272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24188, 'Santiago Ixcuintla', 158, 2272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24189, 'Tecuala', 158, 2272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24190, 'Tepic', 158, 2272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24191, 'Tuxpan', 158, 2272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24192, 'La Yesca', 158, 2272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24193, 'Bahía de Banderas', 158, 2272)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24194, 'Abasolo', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24195, 'Agualeguas', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24196, 'Los Aldamas', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24197, 'Allende', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24198, 'Anáhuac', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24199, 'Apodaca', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24200, 'Aramberri', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24201, 'Bustamante', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24202, 'Cadereyta Jiménez', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24203, 'El Carmen', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24204, 'Cerralvo', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24205, 'Ciénega de Flores', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24206, 'China', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24207, 'Doctor Arroyo', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24208, 'Doctor Coss', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24209, 'Doctor González', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24210, 'Galeana', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24211, 'García', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24212, 'San Pedro Garza García', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24213, 'General Bravo', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24214, 'General Escobedo', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24215, 'General Terán', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24216, 'General Treviño', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24217, 'General Zaragoza', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24218, 'General Zuazua', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24219, 'Guadalupe', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24220, 'Los Herreras', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24221, 'Hualahuises', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24222, 'Iturbide', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24223, 'Juárez', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24224, 'Lampazos de Naranjo', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24225, 'Linares', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24226, 'Marín', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24227, 'Zacapala', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24228, 'Mier y Noriega', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24229, 'Mina', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24230, 'Montemorelos', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24231, 'Monterrey', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24232, 'Parás', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24233, 'Pesquería', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24234, 'Los Ramones', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24235, 'Rayones', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24236, 'Sabinas Hidalgo', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24237, 'Salinas Victoria', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24238, 'San Nicolás de los Garza', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24239, 'Hidalgo', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24240, 'Santa Catarina', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24241, 'Santiago', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24242, 'Vallecillo', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24243, 'Villaldama', 158, 2260)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24244, 'Abejones', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24245, 'Acatlán de Pérez Figueroa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24246, 'Asunción Cacalotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24247, 'Asunción Cuyotepeji', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24248, 'Asunción Ixtaltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24249, 'Asunción Nochixtlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24250, 'Asunción Ocotlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24251, 'Asunción Tlacolulita', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24252, 'Ayotzintepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24253, 'El Barrio de la Soledad', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24254, 'Calihualá', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24255, 'Candelaria Loxicha', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24256, 'Ciénega de Zimatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24257, 'Ciudad Ixtepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24258, 'Coatecas Altas', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24259, 'Coicoyán de las Flores', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24260, 'La Compañía', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24261, 'Concepción Buenavista', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24262, 'Concepción Pápalo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24263, 'Constancia del Rosario', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24264, 'Cosolapa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24265, 'Cosoltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24266, 'Cuilápam de Guerrero', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24267, 'Cuyamecalco Villa de Zaragoza', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24268, 'Chahuites', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24269, 'Chalcatongo de Hidalgo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24270, 'Chiquihuitlán de Benito Juárez', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24271, 'Heroica Ciudad de Ejutla de Crespo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24272, 'Eloxochitlán de Flores Magón', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24273, 'El Espinal', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24274, 'Tamazulápam del Espíritu Santo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24275, 'Fresnillo de Trujano', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24276, 'Guadalupe Etla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24277, 'Guadalupe de Ramírez', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24278, 'Guelatao de Juárez', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24279, 'Guevea de Humboldt', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24280, 'Mesones Hidalgo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24281, 'Villa Hidalgo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24282, 'Heroica Ciudad de Huajuapan de León', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24283, 'Huautepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24284, 'Huautla de Jiménez', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24285, 'Ixtlán de Juárez', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24286, 'Heroica Ciudad de Juchitán de Zaragoza', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24287, 'Loma Bonita', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24288, 'Magdalena Apasco', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24289, 'Magdalena Jaltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24290, 'Santa Magdalena Jicotlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24291, 'Magdalena Mixtepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24292, 'Magdalena Ocotlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24293, 'Magdalena Peñasco', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24294, 'Magdalena Teitipac', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24295, 'Magdalena Tequisistlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24296, 'Magdalena Tlacotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24297, 'Magdalena Zahuatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24298, 'Mariscala de Juárez', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24299, 'Mártires de Tacubaya', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24300, 'Matías Romero Avendaño', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24301, 'Mazatlán Villa de Flores', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24302, 'Miahuatlán de Porfirio Díaz', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24303, 'Mixistlán de la Reforma', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24304, 'Monjas', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24305, 'Natividad', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24306, 'Nazareno Etla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24307, 'Nejapa de Madero', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24308, 'Ixpantepec Nieves', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24309, 'Santiago Niltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24310, 'Oaxaca de Juárez', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24311, 'Ocotlán de Morelos', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24312, 'La Pe', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24313, 'Pinotepa de Don Luis', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24314, 'Pluma Hidalgo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24315, 'San José del Progreso', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24316, 'Putla Villa de Guerrero', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24317, 'Santa Catarina Quioquitani', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24318, 'Reforma de Pineda', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24319, 'La Reforma', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24320, 'Reyes Etla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24321, 'Rojas de Cuauhtémoc', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24322, 'Salina Cruz', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24323, 'San Agustín Amatengo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24324, 'San Agustín Atenango', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24325, 'San Agustín Chayuco', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24326, 'San Agustín de las Juntas', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24327, 'San Agustín Etla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24328, 'San Agustín Loxicha', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24329, 'San Agustín Tlacotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24330, 'San Agustín Yatareni', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24331, 'San Andrés Cabecera Nueva', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24332, 'San Andrés Dinicuiti', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24333, 'San Andrés Huaxpaltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24334, 'San Andrés Huayápam', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24335, 'San Andrés Ixtlahuaca', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24336, 'San Andrés Lagunas', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24337, 'San Andrés Nuxiño', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24338, 'San Andrés Paxtlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24339, 'San Andrés Sinaxtla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24340, 'San Andrés Solaga', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24341, 'San Andrés Teotilálpam', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24342, 'San Andrés Tepetlapa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24343, 'San Andrés Yaá', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24344, 'San Andrés Zabache', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24345, 'San Andrés Zautla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24346, 'San Antonino Castillo Velasco', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24347, 'San Antonino el Alto', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24348, 'San Antonino Monte Verde', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24349, 'San Antonio Acutla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24350, 'San Antonio de la Cal', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24351, 'San Antonio Huitepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24352, 'San Antonio Nanahuatípam', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24353, 'San Antonio Sinicahua', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24354, 'San Antonio Tepetlapa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24355, 'San Baltazar Chichicápam', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24356, 'San Baltazar Loxicha', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24357, 'San Baltazar Yatzachi el Bajo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24358, 'San Bartolo Coyotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24359, 'San Bartolomé Ayautla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24360, 'San Bartolomé Loxicha', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24361, 'San Bartolomé Quialana', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24362, 'San Bartolomé Yucuañe', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24363, 'San Bartolomé Zoogocho', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24364, 'San Bartolo Soyaltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24365, 'San Bartolo Yautepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24366, 'San Bernardo Mixtepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24367, 'San Blas Atempa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24368, 'San Carlos Yautepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24369, 'San Cristóbal Amatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24370, 'San Cristóbal Amoltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24371, 'San Cristóbal Lachirioag', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24372, 'San Cristóbal Suchixtlahuaca', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24373, 'Pinos', 158, 2268)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24374, 'San Dionisio del Mar', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24375, 'San Dionisio Ocotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24376, 'San Dionisio Ocotlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24377, 'San Esteban Atatlahuca', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24378, 'San Felipe Jalapa de Díaz', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24379, 'San Felipe Tejalápam', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24380, 'San Felipe Usila', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24381, 'San Francisco Cahuacuá', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24382, 'San Francisco Cajonos', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24383, 'San Francisco Chapulapa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24384, 'San Francisco Chindúa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24385, 'San Francisco del Mar', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24386, 'San Francisco Huehuetlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24387, 'San Francisco Ixhuatán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24388, 'San Francisco Jaltepetongo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24389, 'San Francisco Lachigoló', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24390, 'San Francisco Logueche', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24391, 'San Francisco Nuxaño', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24392, 'San Francisco Ozolotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24393, 'San Francisco Sola', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24394, 'San Francisco Telixtlahuaca', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24395, 'San Francisco Teopan', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24396, 'San Francisco Tlapancingo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24397, 'San Gabriel Mixtepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24398, 'San Ildefonso Amatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24399, 'San Ildefonso Sola', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24400, 'San Ildefonso Villa Alta', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24401, 'San Jacinto Amilpas', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24402, 'San Jacinto Tlacotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24403, 'San Jerónimo Coatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24404, 'San Jerónimo Silacayoapilla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24405, 'San Jerónimo Sosola', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24406, 'San Jerónimo Taviche', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24407, 'San Jerónimo Tecóatl', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24408, 'San Jorge Nuchita', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24409, 'San José Ayuquila', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24410, 'San José Chiltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24411, 'San José del Peñasco', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24412, 'San José Estancia Grande', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24413, 'San José Independencia', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24414, 'San José Lachiguiri', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24415, 'San José Tenango', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24416, 'San Juan Achiutla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24417, 'San Juan Atepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24418, 'Ánimas Trujano', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24419, 'San Juan Bautista Atatlahuca', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24420, 'San Juan Bautista Coixtlahuaca', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24421, 'San Juan Bautista Cuicatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24422, 'San Juan Bautista Guelache', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24423, 'Guasave', 158, 2270)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24424, 'San Juan Bautista Jayacatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24425, 'San Juan Bautista Lo de Soto', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24426, 'San Juan Bautista Suchitepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24427, 'San Juan Bautista Tlacoatzintepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24428, 'San Juan Bautista Tlachichilco', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24429, 'San Juan Bautista Tuxtepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24430, 'San Juan Cacahuatepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24431, 'San Juan Cieneguilla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24432, 'San Juan Coatzóspam', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24433, 'San Juan Colorado', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24434, 'San Juan Comaltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24435, 'San Juan Cotzocón', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24436, 'San Juan Chicomezúchil', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24437, 'San Juan Chilateca', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24438, 'San Juan del Estado', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24439, 'San Juan del Río', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24440, 'San Juan Diuxi', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24441, 'San Juan Evangelista Analco', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24442, 'San Juan Guelavía', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24443, 'San Juan Guichicovi', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24444, 'San Juan Ihualtepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24445, 'San Juan Juquila Mixes', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24446, 'San Juan Juquila Vijanos', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24447, 'San Juan Lachao', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24448, 'San Juan Lachigalla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24449, 'San Juan Lajarcia', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24450, 'San Juan Lalana', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24451, 'San Juan de los Cués', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24452, 'San Juan Mazatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24453, 'San Juan Mixtepec -Dto. 08 -', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24454, 'San Juan Mixtepec -Dto. 26 -', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24455, 'San Juan Ñumí', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24456, 'San Juan Ozolotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24457, 'San Juan Petlapa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24458, 'San Juan Quiahije', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24459, 'San Juan Quiotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24460, 'San Juan Sayultepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24461, 'San Juan Tabaá', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24462, 'San Juan Tamazola', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24463, 'San Juan Teita', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24464, 'San Juan Teitipac', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24465, 'San Juan Tepeuxila', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24466, 'San Juan Teposcolula', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24467, 'San Juan Yaeé', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24468, 'San Juan Yatzona', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24469, 'San Juan Yucuita', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24470, 'San Lorenzo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24471, 'San Lorenzo Albarradas', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24472, 'San Lorenzo Cacaotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24473, 'San Lorenzo Cuaunecuiltitla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24474, 'San Lorenzo Texmelúcan', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24475, 'San Lorenzo Victoria', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24476, 'San Lucas Camotlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24477, 'San Lucas Ojitlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24478, 'San Lucas Quiaviní', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24479, 'San Lucas Zoquiápam', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24480, 'San Luis Amatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24481, 'San Marcial Ozolotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24482, 'San Marcos Arteaga', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24483, 'San Martín de los Cansecos', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24484, 'San Martín Huamelúlpam', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24485, 'San Martín Itunyoso', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24486, 'San Martín Lachilá', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24487, 'San Martín Peras', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24488, 'San Martín Tilcajete', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24489, 'San Martín Toxpalan', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24490, 'San Martín Zacatepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24491, 'Centla', 158, 2255)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24492, 'San Mateo Cajonos', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24493, 'Capulálpam de Méndez', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24494, 'San Mateo del Mar', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24495, 'San Mateo Yoloxochitlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24496, 'San Mateo Etlatongo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24497, 'San Mateo Nejápam', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24498, 'San Mateo Peñasco', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24499, 'San Mateo Piñas', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24500, 'San Mateo Río Hondo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24501, 'San Mateo Sindihui', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24502, 'San Mateo Tlapiltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24503, 'San Melchor Betaza', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24504, 'San Miguel Achiutla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24505, 'San Miguel Ahuehuetitlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24506, 'San Miguel Aloápam', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24507, 'San Miguel Amatitlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24508, 'San Miguel Amatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24509, 'San Miguel Coatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24510, 'San Miguel Chicahua', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24511, 'San Miguel Chimalapa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24512, 'San Miguel del Puerto', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24513, 'San Miguel del Río', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24514, 'San Miguel Ejutla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24515, 'San Miguel el Grande', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24516, 'San Miguel Huautla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24517, 'San Miguel Mixtepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24518, 'San Miguel Panixtlahuaca', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24519, 'San Miguel Peras', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24520, 'San Miguel Piedras', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24521, 'San Miguel Quetzaltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24522, 'San Miguel Santa Flor', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24523, 'Villa Sola de Vega', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24524, 'San Miguel Soyaltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24525, 'San Miguel Suchixtepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24526, 'Villa Talea de Castro', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24527, 'San Miguel Tecomatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24528, 'San Miguel Tenango', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24529, 'San Miguel Tequixtepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24530, 'San Miguel Tilquiápam', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24531, 'San Miguel Tlacamama', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24532, 'San Miguel Tlacotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24533, 'San Miguel Tulancingo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24534, 'San Miguel Yotao', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24535, 'San Nicolás', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24536, 'San Nicolás Hidalgo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24537, 'San Pablo Coatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24538, 'San Pablo Cuatro Venados', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24539, 'San Pablo Etla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24540, 'San Pablo Huitzo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24541, 'San Pablo Huixtepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24542, 'San Pablo Macuiltianguis', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24543, 'San Pablo Tijaltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24544, 'San Pablo Villa de Mitla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24545, 'San Pablo Yaganiza', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24546, 'San Pedro Amuzgos', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24547, 'San Pedro Apóstol', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24548, 'San Pedro Atoyac', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24549, 'San Pedro Cajonos', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24550, 'San Pedro Coxcaltepec Cántaros', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24551, 'San Pedro Comitancillo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24552, 'San Pedro el Alto', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24553, 'San Pedro Huamelula', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24554, 'San Pedro Huilotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24555, 'San Pedro Ixcatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24556, 'San Pedro Ixtlahuaca', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24557, 'San Pedro Jaltepetongo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24558, 'San Pedro Jicayán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24559, 'San Pedro Jocotipac', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24560, 'San Pedro Juchatengo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24561, 'San Pedro Mártir', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24562, 'San Pedro Mártir Quiechapa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24563, 'San Pedro Mártir Yucuxaco', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24564, 'San Pedro Mixtepec -Dto. 22 -', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24565, 'San Pedro Mixtepec -Dto. 26 -', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24566, 'San Pedro Molinos', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24567, 'San Pedro Nopala', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24568, 'San Pedro Ocopetatillo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24569, 'San Pedro Ocotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24570, 'San Pedro Pochutla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24571, 'San Pedro Quiatoni', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24572, 'San Pedro Sochiápam', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24573, 'San Pedro Tapanatepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24574, 'San Pedro Taviche', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24575, 'San Pedro Teozacoalco', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24576, 'San Pedro Teutila', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24577, 'San Pedro Tidaá', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24578, 'San Pedro Topiltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24579, 'San Pedro Totolápam', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24580, 'Villa de Tututepec de Melchor Ocampo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24581, 'San Pedro Yaneri', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24582, 'San Pedro Yólox', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24583, 'San Pedro y San Pablo Ayutla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24584, 'Villa de Etla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24585, 'San Pedro y San Pablo Teposcolula', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24586, 'San Pedro y San Pablo Tequixtepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24587, 'San Pedro Yucunama', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24588, 'San Raymundo Jalpan', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24589, 'San Sebastián Abasolo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24590, 'San Sebastián Coatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24591, 'San Sebastián Ixcapa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24592, 'San Sebastián Nicananduta', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24593, 'San Sebastián Río Hondo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24594, 'San Sebastián Tecomaxtlahuaca', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24595, 'San Sebastián Teitipac', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24596, 'San Sebastián Tutla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24597, 'San Simón Almolongas', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24598, 'San Simón Zahuatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24599, 'Santa Ana', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24600, 'Santa Ana Ateixtlahuaca', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24601, 'Santa Ana Cuauhtémoc', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24602, 'Santa Ana del Valle', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24603, 'Santa Ana Tavela', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24604, 'Santa Ana Tlapacoyan', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24605, 'Santa Ana Yareni', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24606, 'Santa Ana Zegache', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24607, 'Santa Catalina Quierí', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24608, 'Santa Catarina Cuixtla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24609, 'Santa Catarina Ixtepeji', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24610, 'Santa Catarina Juquila', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24611, 'Santa Catarina Lachatao', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24612, 'Santa Catarina Loxicha', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24613, 'Santa Catarina Mechoacán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24614, 'Santa Catarina Minas', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24615, 'Santa Catarina Quiané', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24616, 'Santa Catarina Tayata', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24617, 'Santa Catarina Ticuá', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24618, 'Jaumave', 158, 2254)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24619, 'Santa Catarina Yosonotú', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24620, 'Santa Catarina Zapoquila', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24621, 'Santa Cruz Acatepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24622, 'Santa Cruz Amilpas', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24623, 'Santa Cruz de Bravo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24624, 'Santa Cruz Itundujia', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24625, 'Santa Cruz Mixtepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24626, 'Santa Cruz Nundaco', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24627, 'Santa Cruz Papalutla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24628, 'Santa Cruz Tacache de Mina', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24629, 'Santa Cruz Tacahua', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24630, 'Santa Cruz Tayata', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24631, 'Santa Cruz Xitla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24632, 'Santa Cruz Xoxocotlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24633, 'Santa Cruz Zenzontepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24634, 'Santa Gertrudis', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24635, 'Santa Inés del Monte', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24636, 'Santa Inés Yatzeche', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24637, 'Santa Lucía del Camino', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24638, 'Santa Lucía Miahuatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24639, 'Santa Lucía Monteverde', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24640, 'Santa Lucía Ocotlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24641, 'Santa María Alotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24642, 'Santa María Apazco', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24643, 'Santa María la Asunción', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24644, 'Heroica Ciudad de Tlaxiaco', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24645, 'Ayoquezco de Aldama', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24646, 'Santa María Atzompa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24647, 'Santa María Camotlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24648, 'Santa María Colotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24649, 'Santa María Cortijo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24650, 'Santa María Coyotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24651, 'Santa María Chachoápam', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24652, 'Villa de Chilapa de Díaz', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24653, 'Santa María Chilchotla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24654, 'Santa María Chimalapa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24655, 'Santa María del Rosario', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24656, 'Santa María del Tule', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24657, 'Santa María Ecatepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24658, 'Santa María Guelacé', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24659, 'Santa María Guienagati', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24660, 'Santa María Huatulco', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24661, 'Santa María Huazolotitlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24662, 'Santa María Ipalapa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24663, 'Santa María Ixcatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24664, 'Santa María Jacatepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24665, 'Santa María Jalapa del Marqués', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24666, 'Santa María Jaltianguis', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24667, 'Santa María Lachixío', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24668, 'Santa María Mixtequilla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24669, 'Santa María Nativitas', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24670, 'Santa María Nduayaco', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24671, 'Santa María Ozolotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24672, 'Santa María Pápalo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24673, 'Santa María Peñoles', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24674, 'Santa María Petapa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24675, 'Santa María Quiegolani', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24676, 'Santa María Sola', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24677, 'Santa María Tataltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24678, 'Santa María Tecomavaca', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24679, 'Santa María Temaxcalapa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24680, 'Santa María Temaxcaltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24681, 'Santa María Teopoxco', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24682, 'Santa María Tepantlali', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24683, 'Santa María Texcatitlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24684, 'Santa María Tlahuitoltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24685, 'Santa María Tlalixtac', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24686, 'Santa María Tonameca', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24687, 'Santa María Totolapilla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24688, 'Santa María Xadani', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24689, 'Santa María Yalina', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24690, 'Santa María Yavesía', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24691, 'Santa María Yolotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24692, 'Santa María Yosoyúa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24693, 'Santa María Yucuhiti', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24694, 'Santa María Zacatepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24695, 'Santa María Zaniza', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24696, 'Santa María Zoquitlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24697, 'Santiago Amoltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24698, 'Santiago Apoala', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24699, 'Santiago Apóstol', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24700, 'Santiago Astata', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24701, 'Santiago Atitlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24702, 'Santiago Ayuquililla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24703, 'Santiago Cacaloxtepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24704, 'Santiago Camotlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24705, 'Santiago Comaltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24706, 'Santiago Chazumba', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24707, 'Santiago Choápam', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24708, 'Santiago del Río', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24709, 'Santiago Huajolotitlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24710, 'Santiago Huauclilla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24711, 'Santiago Ihuitlán Plumas', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24712, 'Santiago Ixcuintepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24713, 'Santiago Ixtayutla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24714, 'Santiago Jamiltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24715, 'Santiago Jocotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24716, 'Santiago Juxtlahuaca', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24717, 'Santiago Lachiguiri', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24718, 'Santiago Lalopa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24719, 'Santiago Laollaga', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24720, 'Santiago Laxopa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24721, 'Santiago Llano Grande', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24722, 'Santiago Matatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24723, 'Santiago Miltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24724, 'Santiago Minas', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24725, 'Santiago Nacaltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24726, 'Santiago Nejapilla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24727, 'Santiago Nundiche', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24728, 'Santiago Nuyoó', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24729, 'Santiago Pinotepa Nacional', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24730, 'Santiago Suchilquitongo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24731, 'Santiago Tamazola', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24732, 'Santiago Tapextla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24733, 'Villa Tejúpam de la Unión', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24734, 'Santiago Tenango', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24735, 'Santiago Tepetlapa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24736, 'Santiago Tetepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24737, 'Santiago Texcalcingo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24738, 'Santiago Textitlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24739, 'Santiago Tilantongo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24740, 'Santiago Tillo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24741, 'Santiago Tlazoyaltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24742, 'Santiago Xanica', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24743, 'Santiago Xiacuí', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24744, 'Santiago Yaitepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24745, 'Santiago Yaveo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24746, 'Santiago Yolomécatl', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24747, 'Santiago Yosondúa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24748, 'Santiago Yucuyachi', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24749, 'Santiago Zacatepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24750, 'Santiago Zoochila', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24751, 'Nuevo Zoquiápam', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24752, 'Santo Domingo Ingenio', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24753, 'Santo Domingo Albarradas', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24754, 'Santo Domingo Armenta', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24755, 'Santo Domingo Chihuitán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24756, 'Santo Domingo de Morelos', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24757, 'Santo Domingo Ixcatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24758, 'Santo Domingo Nuxaá', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24759, 'Santo Domingo Ozolotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24760, 'Santo Domingo Petapa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24761, 'Santo Domingo Roayaga', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24762, 'Santo Domingo Tehuantepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24763, 'Santo Domingo Teojomulco', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24764, 'Santo Domingo Tepuxtepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24765, 'Santo Domingo Tlatayápam', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24766, 'Santo Domingo Tomaltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24767, 'Santo Domingo Tonalá', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24768, 'Santo Domingo Tonaltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24769, 'Santo Domingo Xagacía', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24770, 'Santo Domingo Yanhuitlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24771, 'Santo Domingo Yodohino', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24772, 'Santo Domingo Zanatepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24773, 'Santos Reyes Nopala', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24774, 'Santos Reyes Pápalo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24775, 'Santos Reyes Tepejillo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24776, 'Santos Reyes Yucuná', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24777, 'Santo Tomás Jalieza', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24778, 'Santo Tomás Mazaltepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24779, 'Santo Tomás Ocotepec', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24780, 'Santo Tomás Tamazulapan', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24781, 'San Vicente Coatlán', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24782, 'Centro', 158, 2255)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24783, 'San Vicente Lachixío', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24784, 'San Vicente Nuñú', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24785, 'Silacayoápam', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24786, 'Sitio de Xitlapehua', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24787, 'Soledad Etla', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24788, 'Villa de Tamazulápam del Progreso', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24789, 'Tanetze de Zaragoza', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24790, 'Taniche', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24791, 'Tataltepec de Valdés', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24792, 'Teococuilco de Marcos Pérez', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24793, 'Teotitlán de Flores Magón', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24794, 'Teotitlán del Valle', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24795, 'Teotongo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24796, 'Tepelmeme Villa de Morelos', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24797, 'Heroica Villa Tezoatlán de Segura y Luna, Cuna de la Independencia de Oaxaca', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24798, 'San Jerónimo Tlacochahuaya', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24799, 'Tlacolula de Matamoros', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24800, 'Tlacotepec Plumas', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24801, 'Tlalixtac de Cabrera', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24802, 'Totontepec Villa de Morelos', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24803, 'Trinidad Zaachila', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24804, 'La Trinidad Vista Hermosa', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24805, 'Unión Hidalgo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24806, 'Valerio Trujano', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24807, 'San Juan Bautista Valle Nacional', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24808, 'Villa Díaz Ordaz', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24809, 'Yaxe', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24810, 'Magdalena Yodocono de Porfirio Díaz', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24811, 'Yogana', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24812, 'Yutanduchi de Guerrero', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24813, 'Villa de Zaachila', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24814, 'San Mateo Yucutindoo', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24815, 'Zapotitlán Lagunas', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24816, 'Zapotitlán Palmas', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24817, 'Santa Inés de Zaragoza', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24818, 'Zimatlán de Álvarez', 158, 2259)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24819, 'Acajete', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24820, 'Acateno', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24821, 'Acatlán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24822, 'Acatzingo', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24823, 'Acteopan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24824, 'Ahuacatlán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24825, 'Ahuatlán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24826, 'Ahuazotepec', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24827, 'Ahuehuetitla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24828, 'Ajalpan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24829, 'Albino Zertuche', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24830, 'Aljojuca', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24831, 'Altepexi', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24832, 'Amixtlán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24833, 'Amozoc', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24834, 'Aquixtla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24835, 'Atempan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24836, 'Atexcal', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24837, 'Atlixco', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24838, 'Atoyatempan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24839, 'Atzala', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24840, 'Atzitzihuacán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24841, 'Atzitzintla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24842, 'Axutla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24843, 'Ayotoxco de Guerrero', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24844, 'Calpan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24845, 'Caltepec', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24846, 'Camocuautla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24847, 'Caxhuacan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24848, 'Coatepec', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24849, 'Coatzingo', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24850, 'Cohetzala', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24851, 'Cohuecan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24852, 'Coronango', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24853, 'Coxcatlán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24854, 'Coyomeapan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24855, 'Cuapiaxtla de Madero', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24856, 'Cuautempan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24857, 'Cuautinchán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24858, 'Cuautlancingo', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24859, 'Cuayuca de Andrade', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24860, 'Cuetzalan del Progreso', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24861, 'Cuyoaco', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24862, 'Chalchicomula de Sesma', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24863, 'Chapulco', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24864, 'Chiautzingo', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24865, 'Chiconcuautla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24866, 'Chichiquila', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24867, 'Chietla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24868, 'Chigmecatitlán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24869, 'Chignahuapan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24870, 'Chignautla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24871, 'Chila', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24872, 'Chila de la Sal', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24873, 'Honey', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24874, 'Chilchotla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24875, 'Chinantla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24876, 'Domingo Arenas', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24877, 'Eloxochitlán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24878, 'Epatlán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24879, 'Esperanza', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24880, 'Francisco Z. Mena', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24881, 'General Felipe Ángeles', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24882, 'Guadalupe', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24883, 'Guadalupe Victoria', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24884, 'Hermenegildo Galeana', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24885, 'Huaquechula', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24886, 'Huatlatlauca', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24887, 'Huauchinango', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24888, 'Huehuetla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24889, 'Huehuetlán el Chico', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24890, 'Huejotzingo', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24891, 'Hueyapan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24892, 'Hueytamalco', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24893, 'Hueytlalpan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24894, 'Huitzilan de Serdán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24895, 'Huitziltepec', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24896, 'Atlequizayan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24897, 'Ixcamilpa de Guerrero', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24898, 'Ixcaquixtla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24899, 'Ixtacamaxtitlán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24900, 'Ixtepec', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24901, 'Izúcar de Matamoros', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24902, 'Jalpan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24903, 'Jolalpan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24904, 'Jonotla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24905, 'Jopala', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24906, 'Juan C. Bonilla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24907, 'Juan Galindo', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24908, 'Juan N. Méndez', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24909, 'Lafragua', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24910, 'Libres', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24911, 'La Magdalena Tlatlauquitepec', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24912, 'Mazapiltepec de Juárez', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24913, 'Mixtla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24914, 'Molcaxac', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24915, 'Cañada Morelos', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24916, 'Naupan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24917, 'Nauzontla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24918, 'Nealtican', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24919, 'Jiménez', 158, 2254)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24920, 'Nicolás Bravo', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24921, 'Nopalucan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24922, 'Ocotepec', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24923, 'Ocoyucan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24924, 'Olintla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24925, 'Oriental', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24926, 'Pahuatlán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24927, 'Palmar de Bravo', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24928, 'Pantepec', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24929, 'Petlalcingo', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24930, 'Piaxtla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24931, 'Puebla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24932, 'Quecholac', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24933, 'Quimixtlán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24934, 'Rafael Lara Grajales', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24935, 'Los Reyes de Juárez', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24936, 'San Andrés Cholula', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24937, 'San Antonio Cañada', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24938, 'San Diego la Mesa Tochimiltzingo', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24939, 'San Felipe Teotlalcingo', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24940, 'San Felipe Tepatlán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24941, 'San Gabriel Chilac', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24942, 'San Gregorio Atzompa', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24943, 'San Jerónimo Tecuanipan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24944, 'San Jerónimo Xayacatlán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24945, 'San José Chiapa', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24946, 'San José Miahuatlán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24947, 'San Juan Atenco', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24948, 'San Juan Atzompa', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24949, 'San Martín Texmelucan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24950, 'San Martín Totoltepec', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24951, 'San Matías Tlalancaleca', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24952, 'San Miguel Ixitlán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24953, 'San Miguel Xoxtla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24954, 'San Nicolás Buenos Aires', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24955, 'San Nicolás de los Ranchos', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24956, 'San Pablo Anicano', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24957, 'San Pedro Cholula', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24958, 'Suma', 158, 2251)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24959, 'San Pedro Yeloixtlahuaca', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24960, 'San Salvador el Seco', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24961, 'San Salvador el Verde', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24962, 'San Salvador Huixcolotla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24963, 'San Sebastián Tlacotepec', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24964, 'Santa Catarina Tlaltempan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24965, 'Santa Inés Ahuatempan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24966, 'Santa Isabel Cholula', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24967, 'Santiago Miahuatlán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24968, 'Huehuetlán el Grande', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24969, 'Santo Tomás Hueyotlipan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24970, 'Soltepec', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24971, 'Tecali de Herrera', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24972, 'Tecamachalco', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24973, 'Tecomatlán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24974, 'Tehuacán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24975, 'Tehuitzingo', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24976, 'Tenampulco', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24977, 'Teopantlán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24978, 'Teotlalco', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24979, 'Tepanco de López', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24980, 'Tepango de Rodríguez', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24981, 'Tepatlaxco de Hidalgo', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24982, 'Tepeaca', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24983, 'Tepemaxalco', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24984, 'Tepeojuma', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24985, 'Tepetzintla', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24986, 'Tepexco', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24987, 'Tepexi de Rodríguez', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24988, 'Tepeyahualco', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24989, 'Tepeyahualco de Cuauhtémoc', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24990, 'Tetela de Ocampo', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24991, 'Teteles de Avila Castillo', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24992, 'Teziutlán', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24993, 'Tianguismanalco', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24994, 'Tilapa', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24995, 'Tlacotepec de Benito Juárez', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24996, 'Tlacuilotepec', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24997, 'Tlachichuca', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24998, 'Tlahuapan', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (24999, 'Tlaltenango', 158, 2258)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (25000, 'Tlanepantla', 158, 2258)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM subregions');
  }
}
