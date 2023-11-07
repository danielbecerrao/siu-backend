import type { MigrationInterface, QueryRunner } from 'typeorm';

export class Subregions31695875073052 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10001, 'Tuta', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10002, 'Turmequé', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10003, 'Turbo', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10004, 'Turbaná', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10005, 'Turbaco', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10006, 'Túquerres', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10007, 'Tunja', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10008, 'Tuluá', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10009, 'Tubará', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10010, 'Trujillo', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10011, 'Trinidad', 49, 666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10012, 'Totoró', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10013, 'Tota', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10014, 'Toro', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10015, 'Toribio', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10016, 'Topaipí', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10017, 'Tópaga', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10018, 'Tona', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10019, 'Tolú Viejo', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10020, 'Toledo', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10021, 'Toledo', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10022, 'Togüí', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10023, 'Tocancipá', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10024, 'Tocaima', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10025, 'Toca', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10026, 'Titiribí', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10027, 'Tinjacá', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10028, 'Timbiquí', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10029, 'Timbío', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10030, 'Timaná', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10031, 'Tierralta', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10032, 'Tibirita', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10033, 'Tibasosa', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10034, 'Tibaná', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10035, 'Tibacuy', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10036, 'Tesalia', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10037, 'Teruel', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10038, 'Teorama', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10039, 'Tenza', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10040, 'Tenjo', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10041, 'Tenerife', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10042, 'Tena', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10043, 'Tello', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10044, 'Tausa', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10045, 'Tasco', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10046, 'Tarso', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10047, 'Tarqui', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10048, 'Tangua', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10049, 'Taminango', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10050, 'Támesis', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10051, 'Tame', 49, 673)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10052, 'Támara', 49, 666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10053, 'Tamalameque', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10054, 'Tadó', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10055, 'Tabio', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10056, 'Sutatenza', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10057, 'Sutatausa', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10058, 'Sutamarchán', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10059, 'Susacón', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10060, 'Susa', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10061, 'Suratá', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10062, 'Supía', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10063, 'Supatá', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10064, 'Suesca', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10065, 'Sucre', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10066, 'Sucre', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10067, 'Subachoque', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10068, 'Suaza', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10069, 'Suárez', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10070, 'Suan', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10071, 'Suaita', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10072, 'Sotara', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10073, 'Sotaquirá', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10074, 'Sopó', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10075, 'Soplaviento', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10076, 'Sopetrán', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10077, 'Sonson', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10078, 'Soledad', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10079, 'Bahía Solano', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10080, 'Sogamoso', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10081, 'Socotá', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10082, 'Socorro', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10083, 'Socha', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10084, 'Soatá', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10085, 'Soacha', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10086, 'Sitionuevo', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10087, 'Sipí', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10088, 'Sincelejo', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10089, 'Simití', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10090, 'Simijaca', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10091, 'Simacota', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10092, 'Silvia', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10093, 'Silvania', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10094, 'Silos', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10095, 'Siachoque', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10096, 'Sevilla', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10097, 'Sesquilé', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10098, 'Segovia', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10099, 'Sativasur', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10100, 'Sativanorte', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10101, 'Sasaima', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10102, 'Sardinata', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10103, 'Saravena', 49, 673)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10104, 'Sapuyes', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10105, 'San Zenón', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10106, 'San Vicente del Caguán', 49, 667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10107, 'San Vicente de Chucurí', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10108, 'San Vicente Ferrer', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10109, 'El Santuario', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10110, 'Santuario', 49, 650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10111, 'Santo Tomás', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10112, 'Santiago', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10113, 'Santa Sofía', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10114, 'Santa Rosa de Viterbo', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10115, 'Santa Rosa de Osos', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10116, 'Santa Rosa de Cabal', 49, 650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10117, 'Santa Rosa', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10118, 'Santa Rosa', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10119, 'Santander de Quilichao', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10120, 'Santa Marta', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10121, 'Santa María', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10122, 'Santa Isabel', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10123, 'Santacruz', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10124, 'Santa Catalina', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10125, 'Santa Bárbara', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10126, 'Santa Bárbara', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10127, 'Santa Ana', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10128, 'San Sebastián de Buenavista', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10129, 'San Sebastián', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10130, 'San Roque', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10131, 'San Rafael', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10132, 'San Pelayo', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10133, 'San Pedro', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10134, 'Municipio de San Pedro de los Milagros', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10135, 'San Pedro', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10136, 'San Pablo de Borbur', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10137, 'San Pablo', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10138, 'San Onofre', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10139, 'San Miguel de Sema', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10140, 'San Miguel', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10141, 'San Mateo', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10142, 'San Martín de Loba', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10143, 'San Martín', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10144, 'San Marcos', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10145, 'San Luis de Palenque', 49, 666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10146, 'San Luis de Gaceno', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10147, 'San Luis', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10148, 'San Luis', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10149, 'San Lorenzo', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10150, 'San Juan Nepomuceno', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10151, 'San Juan de Río Seco', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10152, 'San Juan del Cesar', 49, 657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10153, 'San José de Pare', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10154, 'San José de Miranda', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10155, 'San José del Palmar', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10156, 'Isnos', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10157, 'San Joaquín', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10158, 'San Jerónimo', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10159, 'San Jacinto', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10160, 'San Gil', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10161, 'San Francisco', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10162, 'San Fernando', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10163, 'San Estanislao', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10164, 'Sandoná', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10165, 'San Cayetano', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10166, 'San Cayetano', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10167, 'San Carlos', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10168, 'San Carlos', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10169, 'San Calixto', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10170, 'San Bernardo del Viento', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10171, 'San Bernardo', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10172, 'San Benito Abad', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10173, 'San Benito', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10174, 'San Antonio', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10175, 'San Antero', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10176, 'San Andrés Sotavento', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10177, 'San Andrés', 49, 649)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10178, 'San Andrés de Cuerquía', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10179, 'San Andrés', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10180, 'San Agustín', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10181, 'Sampués', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10182, 'Samaniego', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10183, 'Samaná', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10184, 'Samacá', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10185, 'Salgar', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10186, 'Salento', 49, 651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10187, 'Salazar', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10188, 'Salamina', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10189, 'Salamina', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10190, 'Saladoblanco', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10191, 'Sahagún', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10192, 'Sáchica', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10193, 'Sácama', 49, 666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10194, 'Saboyá', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10195, 'Sabanalarga', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10196, 'Sabanalarga', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10197, 'Sabanagrande', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10198, 'Rovira', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10199, 'Rosas', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10200, 'Rondón', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10201, 'Roncesvalles', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10202, 'Roldanillo', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10203, 'La Paz', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10204, 'Roberto Payán', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10205, 'Rivera', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10206, 'Risaralda', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10207, 'Riosucio', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10208, 'Riosucio', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10209, 'Rionegro', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10210, 'Rionegro', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10211, 'Riohacha', 49, 657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10212, 'Riofrío', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10213, 'Río de Oro', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10214, 'Rioblanco', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10215, 'Chalán', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10216, 'Ricaurte', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10217, 'Retiro', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10218, 'Restrepo', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10219, 'Restrepo', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10220, 'Repelón', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10221, 'Remolino', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10222, 'Remedios', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10223, 'Recetor', 49, 666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10224, 'Ráquira', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10225, 'Ramiriquí', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10226, 'Ragonvalia', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10227, 'Apulo', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10228, 'Quipile', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10229, 'Quinchía', 49, 650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10230, 'Quimbaya', 49, 651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10231, 'Quibdó', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10232, 'Quetame', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10233, 'Quebradanegra', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10234, 'Purísima', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10235, 'Purificación', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10236, 'Puracé', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10237, 'Pupiales', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10238, 'Pulí', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10239, 'Puerto Wilches', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10240, 'Puerto Tejada', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10241, 'Puerto Salgar', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10242, 'Puerto López', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10243, 'Puerto Lleras', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10244, 'Puerto Escondido', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10245, 'Puerto Colombia', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10246, 'Puerto Boyacá', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10247, 'Puerto Berrío', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10248, 'Puerres', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10249, 'Puente Nacional', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10250, 'Puebloviejo', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10251, 'Pueblorrico', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10252, 'Pueblo Rico', 49, 650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10253, 'Pueblo Nuevo', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10254, 'Providencia', 49, 649)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10255, 'Prado', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10256, 'Pradera', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10257, 'Potosí', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10258, 'Pore', 49, 666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10259, 'Popayán', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10260, 'Polonuevo', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10261, 'Plato', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10262, 'Planeta Rica', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10263, 'Planadas', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10264, 'Pivijay', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10265, 'Pitalito', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10266, 'Pital', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10267, 'Pisba', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10268, 'Piojó', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10269, 'Pinchote', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10270, 'Pijao', 49, 651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10271, 'Piendamó', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10272, 'Piedras', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10273, 'Piedecuesta', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10274, 'Pesca', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10275, 'Pereira', 49, 650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10276, 'Peque', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10277, 'Pensilvania', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10278, 'Peñol', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10279, 'Pedraza', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10280, 'Paz de Río', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10281, 'Paz de Ariporo', 49, 666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10282, 'Magüi', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10283, 'Paya', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10284, 'Pauna', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10285, 'Patía', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10286, 'Pasto', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10287, 'Pasca', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10288, 'Páramo', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10289, 'Panqueba', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10290, 'Pandi', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10291, 'Pamplonita', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10292, 'Pamplona', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10293, 'Pinillos', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10294, 'Palmito', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10295, 'Palmira', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10296, 'Palmas del Socorro', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10297, 'Palmar de Varela', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10298, 'Palmar', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10299, 'Palestina', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10300, 'Palermo', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10301, 'Pajarito', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10302, 'Paipa', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10303, 'Paime', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10304, 'Paicol', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10305, 'Paez', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10306, 'Padilla', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10307, 'Pácora', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10308, 'Pacho', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10309, 'Pachavita', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10310, 'Ovejas', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10311, 'Otanche', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10312, 'Ospina', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10313, 'Ortega', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10314, 'Orocué', 49, 666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10315, 'Oporapa', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10316, 'Onzaga', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10317, 'Olaya', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10318, 'Oiba', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10319, 'Ocaña', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10320, 'Ocamonte', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10321, 'Obando', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10322, 'Nuquí', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10323, 'Nunchía', 49, 666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10324, 'Nuevo Colón', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10325, 'Nóvita', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10326, 'Nocaima', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10327, 'Nobsa', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10328, 'Nimaima', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10329, 'Nilo', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10330, 'Nemocón', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10331, 'Neiva', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10332, 'Neira', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10333, 'Natagaima', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10334, 'Nátaga', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10335, 'Nariño', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10336, 'Nariño', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10337, 'Muzo', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10338, 'Mutiscua', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10339, 'Mutatá', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10340, 'Murindó', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10341, 'Mosquera', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10342, 'Mosquera', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10343, 'Morroa', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10344, 'Morales', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10345, 'Morales', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10346, 'Monterrey', 49, 666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10347, 'Montería', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10348, 'Montenegro', 49, 651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10349, 'Montelíbano', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10350, 'Montebello', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10351, 'La Montañita', 49, 667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10352, 'Moniquirá', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10353, 'Monguí', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10354, 'Mongua', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10355, 'Mompós', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10356, 'Molagavita', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10357, 'Mogotes', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10358, 'Mocoa', 49, 652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10359, 'Mistrató', 49, 650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10360, 'Miranda', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10361, 'Miraflores', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10362, 'Mercaderes', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10363, 'Melgar', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10364, 'Medina', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10365, 'Medellín', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10366, 'Matanza', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10367, 'Marulanda', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10368, 'Marsella', 49, 650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10369, 'Marquetalia', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10370, 'Marmato', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10371, 'Municipio de San Sebastián de Mariquita', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10372, 'Maripí', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10373, 'Marinilla', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10374, 'Municipio de María la Baja', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10375, 'Margarita', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10376, 'Manzanares', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10377, 'Manta', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10378, 'Manizales', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10379, 'Maní', 49, 666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10380, 'Manatí', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10381, 'Mallama', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10382, 'Malambo', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10383, 'Málaga', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10384, 'Majagual', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10385, 'Maicao', 49, 657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10386, 'Mahates', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10387, 'Magangué', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10388, 'Madrid', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10389, 'Macheta', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10390, 'Maceo', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10391, 'Macaravita', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10392, 'Macanal', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10393, 'Luruaco', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10394, 'Lourdes', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10395, 'Los Santos', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10396, 'Los Andes', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10397, 'Lorica', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10398, 'Municipio de López de Micay', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10399, 'Lloró', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10400, 'Linares', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10401, 'Liborina', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10402, 'Líbano', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10403, 'Lérida', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10404, 'Lenguazaque', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10405, 'Villa de Leyva', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10406, 'Lebríja', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10407, 'La Virginia', 49, 650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10408, 'La Vega', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10409, 'La Vega', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10410, 'La Uvita', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10411, 'La Unión', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10412, 'La Unión', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10413, 'La Unión', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10414, 'La Tebaida', 49, 651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10415, 'La Sierra', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10416, 'La Playa', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10417, 'La Plata', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10418, 'La Peña', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10419, 'La Paz', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10420, 'La Palma', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10421, 'La Mesa', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10422, 'La Gloria', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10423, 'La Florida', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10424, 'La Estrella', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10425, 'La Dorada', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10426, 'La Cumbre', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10427, 'La Cruz', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10428, 'La Celia', 49, 650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10429, 'La Ceja', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10430, 'La Capilla', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10431, 'La Calera', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10432, 'Labranzagrande', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10433, 'Labateca', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10434, 'La Argentina', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10435, 'Aguada', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10436, 'Juradó', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10437, 'Junín', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10438, 'Juan de Acosta', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10439, 'Jordán', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10440, 'Jesús María', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10441, 'Jerusalén', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10442, 'Jericó', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10443, 'Jericó', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10444, 'Jenesano', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10445, 'Jardín', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10446, 'Jamundí', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10447, 'Jambaló', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10448, 'Iza', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10449, 'Ituango', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10450, 'Itagui', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10451, 'Istmina', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10452, 'Municipio de Íquira', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10453, 'Ipiales', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10454, 'Inzá', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10455, 'Imués', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10456, 'Iles', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10457, 'Icononzo', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10458, 'Ibagué', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10459, 'Honda', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10460, 'Hobo', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10461, 'Herrán', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10462, 'Heliconia', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10463, 'Hato Corozal', 49, 666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10464, 'Hato', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10465, 'Hacarí', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10466, 'Gutiérrez', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10467, 'Güicán', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10468, 'Güepsa', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10469, 'Guayatá', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10470, 'Guayabal de Siquima', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10471, 'Guavatá', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10472, 'Guática', 49, 650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10473, 'Guateque', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10474, 'Guatavita', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10475, 'Guataquí', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10476, 'Guatapé', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10477, 'Guasca', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10478, 'Guarne', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10479, 'Guapotá', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10480, 'Guapi', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10481, 'Guamo', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10482, 'Guamal', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10483, 'Guamal', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10484, 'Gualmatán', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10485, 'Guaitarilla', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10486, 'Guaduas', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10487, 'Guadalupe', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10488, 'Guadalupe', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10489, 'Guachucal', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10490, 'Guachetá', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10491, 'Guacarí', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10492, 'Guacamayas', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10493, 'Guaca', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10494, 'Granada', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10495, 'Gramalote', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10496, 'González', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10497, 'Gómez Plata', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10498, 'Girón', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10499, 'Girardota', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10500, 'Girardot', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10501, 'Giraldo', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10502, 'Ginebra', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10503, 'Gigante', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10504, 'Génova', 49, 651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10505, 'Garzón', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10506, 'Garagoa', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10507, 'Gameza', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10508, 'Gambita', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10509, 'Gamarra', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10510, 'Gama', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10511, 'Galapa', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10512, 'Galán', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10513, 'Gachetá', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10514, 'Gachantivá', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10515, 'Gachancipá', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10516, 'Gachala', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10517, 'Fusagasugá', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10518, 'Fúquene', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10519, 'Funza', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10520, 'Funes', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10521, 'Fundación', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10522, 'Frontino', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10523, 'Fresno', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10524, 'Fredonia', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10525, 'Fosca', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10526, 'Fonseca', 49, 657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10527, 'Fomeque', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10528, 'Floridablanca', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10529, 'Florida', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10530, 'Floresta', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10531, 'Florencia', 49, 667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10532, 'Flandes', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10533, 'Firavitoba', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10534, 'Filandia', 49, 651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10535, 'Filadelfia', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10536, 'Falan', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10537, 'Facatativá', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10538, 'Espinal', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10539, 'Envigado', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10540, 'Entrerrios', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10541, 'Enciso', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10542, 'Encino', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10543, 'El Zulia', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10544, 'El Tambo', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10545, 'El Tambo', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10546, 'El Tablón de Gómez', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10547, 'El Rosario', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10548, 'El Piñon', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10549, 'El Peñón', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10550, 'Elías', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10551, 'El Guamo', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10552, 'El Guacamayo', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10553, 'El Espino', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10554, 'El Dovio', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10555, 'El Colegio', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10556, 'El Cocuy', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10557, 'El Charco', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10558, 'El Cerrito', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10559, 'El Carmen de Bolívar', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10560, 'El Carmen', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10561, 'El Carmen de Atrato', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10562, 'El Calvario', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10563, 'El Cairo', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10564, 'El Banco', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10565, 'El Águila', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10566, 'Ebéjico', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10567, 'Durania', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10568, 'Duitama', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10569, 'Don Matías', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10570, 'Dolores', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10571, 'Dagua', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10572, 'Dabeiba', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10573, 'Curití', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10574, 'Cunday', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10575, 'Cumbal', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10576, 'Cumaral', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10577, 'Cuítiva', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10578, 'Cucutilla', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10579, 'Cúcuta', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10580, 'Cucunubá', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10581, 'Cubará', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10582, 'Cuaspud', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10583, 'Coyaima', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10584, 'Covarachía', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10585, 'Cota', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10586, 'Corrales', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10587, 'Corozal', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10588, 'Coromoro', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10589, 'Corinto', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10590, 'Córdoba', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10591, 'Córdoba', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10592, 'Coper', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10593, 'Copacabana', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10594, 'Convención', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10595, 'Contratación', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10596, 'Contadero', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10597, 'Consaca', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10598, 'Confines', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10599, 'Condoto', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10600, 'Concordia', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10601, 'Concepción', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10602, 'Concepción', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10603, 'Cómbita', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10604, 'Colón', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10605, 'Colombia', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10606, 'Cogua', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10607, 'Coello', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10608, 'Cocorná', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10609, 'Cisneros', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10610, 'Circasia', 49, 651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10611, 'Ciénaga de Oro', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10612, 'Ciénaga', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10613, 'Ciénega', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10614, 'Caicedonia', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10615, 'Chocontá', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10616, 'Choachí', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10617, 'Chitaraque', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10618, 'Chitagá', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10619, 'Chita', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10620, 'Chiscas', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10621, 'Chiriguaná', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10622, 'Chiquinquirá', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10623, 'Chipatá', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10624, 'Chipaque', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10625, 'Chinú', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10626, 'Chinchiná', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10627, 'Chinavita', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10628, 'Chinácota', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10629, 'Chimichagua', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10630, 'Chimá', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10631, 'Chima', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10632, 'Chigorodó', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10633, 'Chía', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10634, 'Charta', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10635, 'Charalá', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10636, 'Chaparral', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10637, 'Chameza', 49, 666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10638, 'Chaguaní', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10639, 'Cerro San Antonio', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10640, 'Cerrito', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10641, 'Cerinza', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10642, 'Cereté', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10643, 'Cepitá', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10644, 'Caucasia', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10645, 'Castilla la Nueva', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10646, 'Casabianca', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10647, 'Cartago', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10648, 'Cartagena de Indias', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10649, 'Carolina', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10650, 'Carmen de Carupa', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10651, 'Carmen de Apicalá', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10652, 'Carcasí', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10653, 'Caramanta', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10654, 'Caqueza', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10655, 'Capitanejo', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10656, 'Caparrapí', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10657, 'Candelaria', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10658, 'Candelaria', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10659, 'Cañasgordas', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10660, 'Campohermoso', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10661, 'Campo de La Cruz', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10662, 'Campoalegre', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10663, 'Campamento', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10664, 'Caloto', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10665, 'Calima', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10666, 'California', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10667, 'Cali', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10668, 'Caldono', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10669, 'Caldas', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10670, 'Caldas', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10671, 'Calarca', 49, 651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10672, 'Calamar', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10673, 'Cajicá', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10674, 'Cajibío', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10675, 'Cajamarca', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10676, 'Caimito', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10677, 'Caicedo', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10678, 'Cácota', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10679, 'Cachirá', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10680, 'Cáceres', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10681, 'Cabrera', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10682, 'Busbanzá', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10683, 'Buriticá', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10684, 'Bugalagrande', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10685, 'Buesaco', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10686, 'Buenos Aires', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10687, 'Buenavista', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10688, 'Bucarasica', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10689, 'Bucaramanga', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10690, 'Briceño', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10691, 'Boyacá', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10692, 'Bolívar', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10693, 'Bolívar', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10694, 'Bolívar', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10695, 'Bojaya', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10696, 'Bojacá', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10697, 'Bochalema', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10698, 'Boavita', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10699, 'Bituima', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10700, 'Betulia', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10701, 'Betulia', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10702, 'Betéitiva', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10703, 'Betania', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10704, 'Berbeo', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10705, 'Beltrán', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10706, 'Belmira', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10707, 'Bello', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10708, 'Belén de Umbría', 49, 650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10709, 'Belén de Los Andaquies', 49, 667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10710, 'Belén', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10711, 'Belalcázar', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10712, 'Barranquilla', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10713, 'Barranco de Loba', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10714, 'Barrancas', 49, 657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10715, 'Barrancabermeja', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10716, 'Barichara', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10717, 'Barbosa', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10718, 'Barbosa', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10719, 'Barbacoas', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10720, 'Baraya', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10721, 'Baranoa', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10722, 'Balboa', 49, 650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10723, 'Balboa', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10724, 'Bajo Baudó', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10725, 'Bagadó', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10726, 'Ayapel', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10727, 'Ataco', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10728, 'Armero', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10729, 'Armenia', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10730, 'Armenia', 49, 651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10731, 'Arjona', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10732, 'Argelia', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10733, 'Argelia', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10734, 'Arcabuco', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10735, 'Arboletes', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10736, 'Arboledas', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10737, 'Arboleda', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10738, 'Arbeláez', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10739, 'Arauca', 49, 673)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10740, 'Aratoca', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10741, 'Aranzazu', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10742, 'Aracataca', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10743, 'Aquitania', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10744, 'Apía', 49, 650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10745, 'Anzoátegui', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10746, 'Anza', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10747, 'Santafé de Antioquia', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10748, 'Ansermanuevo', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10749, 'Anserma', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10750, 'Anorí', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10751, 'Anolaima', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10752, 'Angostura', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10753, 'Angelópolis', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10754, 'Andes', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10755, 'Andalucía', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10756, 'Ancuyá', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10757, 'Anapoima', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10758, 'Ambalema', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10759, 'Amalfi', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10760, 'Amagá', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10761, 'Alvarado', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10762, 'Alto Baudo', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10763, 'Altamira', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10764, 'Alpujarra', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10765, 'Almeida', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10766, 'Almaguer', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10767, 'Algeciras', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10768, 'Algarrobo', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10769, 'Alejandría', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10770, 'Aldana', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10771, 'Alcalá', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10772, 'Albania', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10773, 'Albán', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10774, 'Albán', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10775, 'Aipe', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10776, 'Agustín Codazzi', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10777, 'Aguazul', 49, 666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10778, 'Agua de Dios', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10779, 'Aguadas', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10780, 'Aguachica', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10781, 'Agrado', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10782, 'Achí', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10783, 'Acevedo', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10784, 'Acandí', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10785, 'Acacías', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10786, 'Abriaquí', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10787, 'Abrego', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10788, 'Abejorral', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10789, 'Arauquita', 49, 673)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10790, 'Fortul', 49, 673)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10791, 'Puerto Rondón', 49, 673)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10792, 'Cravo Norte', 49, 673)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10793, 'La Salina', 49, 666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10794, 'Puerto Guzmán', 49, 652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10795, 'Solita', 49, 667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10796, 'Calamar', 49, 659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10797, 'La Macarena', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10798, 'San José del Guaviare', 49, 659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10799, 'Miraflores', 49, 659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10800, 'Milán', 49, 667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10801, 'Puerto Rico', 49, 667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10802, 'El Doncello', 49, 667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10803, 'El Paujil', 49, 667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10804, 'Mesetas', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10805, 'Vistahermosa', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10806, 'Puerto Concordia', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10807, 'Necoclí', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10808, 'Albania', 49, 667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10809, 'Ariguaní', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10810, 'Paratebueno', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10811, 'San Alberto', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10812, 'Canalete', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10813, 'Cotorra', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10814, 'El Encanto', 49, 675)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10815, 'La Chorrera', 49, 675)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10816, 'La Pedrera', 49, 675)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10817, 'Vetas', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10818, 'Leticia', 49, 675)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10819, 'Vegachí', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10820, 'Miriti - Paraná', 49, 675)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10821, 'Puerto Nariño', 49, 675)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10822, 'Unguía', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10823, 'Puerto Santander', 49, 675)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10824, 'Tarapacá', 49, 675)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10825, 'Tibú', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10826, 'Tauramena', 49, 666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10827, 'Apartadó', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10828, 'Soracá', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10829, 'Argelia', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10830, 'Caracolí', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10831, 'Chachagüí', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10832, 'Santa Rosa del Sur', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10833, 'San Martín', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10834, 'Cucaita', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10835, 'San Juanito', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10836, 'El Bagre', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10837, 'El Castillo', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10838, 'Carepa', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10839, 'Hispania', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10840, 'Nechí', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10841, 'Puerto Triunfo', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10842, 'Sabaneta', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10843, 'San José de La Montaña', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10844, 'San Juan de Urabá', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10845, 'San Pedro de Uraba', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10846, 'Santo Domingo', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10847, 'Tarazá', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10848, 'Uramita', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10849, 'Villanueva', 49, 666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10850, 'Vigía del Fuerte', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10851, 'Yondó', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10852, 'Santa Lucía', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10853, 'Cantagallo', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10854, 'Cicuco', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10855, 'Hatillo de Loba', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10856, 'San Francisco', 49, 652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10857, 'San Pablo', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10858, 'Talaigua Nuevo', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10859, 'San Francisco', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10860, 'Tiquisio', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10861, 'Ricaurte', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10862, 'Briceño', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10863, 'Chíquiza', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10864, 'Murillo', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10865, 'Chivatá', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10866, 'Chivor', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10867, 'La Victoria', 49, 675)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10868, 'Puerto Rico', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10869, 'Herveo', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10870, 'Motavita', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10871, 'Oicatá', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10872, 'Puerto Colombia', 49, 660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10873, 'Quípama', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10874, 'San Eduardo', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10875, 'Santana', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10876, 'Somondoco', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10877, 'San Juan de Betulia', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10878, 'Sora', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10879, 'Tipacoque', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10880, 'Los Palmitos', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10881, 'Tununguá', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10882, 'La Unión', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10883, 'Guaranda', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10884, 'La Merced', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10885, 'Coloso', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10886, 'Cartagena del Chairá', 49, 667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10887, 'Santa Helena del Opón', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10888, 'Curillo', 49, 667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10889, 'Puerto Parra', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10890, 'Landázuri', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10891, 'Florencia', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10892, 'Morelia', 49, 667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10893, 'La Belleza', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10894, 'San José del Fragua', 49, 667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10895, 'Florián', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10896, 'Solano', 49, 667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10897, 'El Playón', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10898, 'El Carmen de Chucurí', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10899, 'Córdoba', 49, 651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10900, 'Suárez', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10901, 'Villagarzón', 49, 652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10902, 'Valle del Guamuez', 49, 652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10903, 'Astrea', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10904, 'Sibundoy', 49, 652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10905, 'Becerril', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10906, 'Bosconia', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10907, 'Santiago', 49, 652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10908, 'Curumaní', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10909, 'El Paso', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10910, 'Puerto Caicedo', 49, 652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10911, 'Manaure', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10912, 'Puerto Asís', 49, 652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10913, 'Pailitas', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10914, 'Buenavista', 49, 651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10915, 'Orito', 49, 652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10916, 'Buenavista', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10917, 'Puerto Santander', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10918, 'La Esperanza', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10919, 'San Diego', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10920, 'Valledupar', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10921, 'San Pedro de Cartago', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10922, 'Providencia', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10923, 'Policarpa', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10924, 'San Bernardo', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10925, 'Los Córdobas', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10926, 'Leiva', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10927, 'Momil', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10928, 'La Tola', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10929, 'Moñitos', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10930, 'La Llanada', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10931, 'Francisco Pizarro', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10932, 'Cachipay', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10933, 'Valparaíso', 49, 667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10934, 'Guayabetal', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10935, 'Cumbitara', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10936, 'Belén', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10937, 'San Juan de Arama', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10938, 'Ponedera', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10939, 'San Carlos de Guaroa', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10940, 'Olaya Herrera', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10941, 'Puerto Gaitán', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10942, 'Lejanías', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10943, 'El Copey', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10944, 'Fuente de Oro', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10945, 'Cimitarra', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10946, 'El Dorado', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10947, 'Cubarral', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10948, 'Cabuyaro', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10949, 'Buenaventura', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10950, 'La Victoria', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10951, 'Sibaté', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10952, 'Villagómez', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10953, 'Yumbo', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10954, 'Barranco Minas', 49, 660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10955, 'Caruru', 49, 644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10956, 'Cacahual', 49, 660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10957, 'Inírida', 49, 660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10958, 'Pana Pana', 49, 660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10959, 'Mitú', 49, 644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10960, 'Manaure', 49, 657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10961, 'Urumita', 49, 657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10962, 'Pacoa', 49, 644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10963, 'El Retorno', 49, 659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10964, 'Palestina', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10965, 'Papunaua', 49, 644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10966, 'Chibolo', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10967, 'Taraira', 49, 644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10968, 'Barranca de Upía', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10969, 'Yavaraté', 49, 644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10970, 'Cumaribo', 49, 643)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10971, 'La Primavera', 49, 643)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10972, 'El Tarra', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10973, 'Galeras', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10974, 'Puerto Carreño', 49, 643)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10975, 'Los Patios', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10976, 'Mapiripán', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10977, 'Montecristo', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10978, 'Santa Rosalía', 49, 643)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10979, 'Sabana de Torres', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10980, 'Páez', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10981, 'Pelaya', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10982, 'Altos del Rosario', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10983, 'Río Viejo', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10984, 'Puerto Libertador', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10985, 'Guadalupe', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10986, 'Saldaña', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10987, 'Villanueva', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10988, 'Sabanalarga', 49, 666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10989, 'Cabrera', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10990, 'La Guadalupe', 49, 660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10991, 'El Molino', 49, 657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10992, 'Granada', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10993, 'Medio San Juan', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10994, 'Carmen del Darien', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10995, 'Atrato', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10996, 'Unión Panamericana', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10997, 'Medio Atrato', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10998, 'Río Quito', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10999, 'Dosquebradas', 49, 650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11000, 'Cértegui', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11001, 'Medio Baudó', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11002, 'Río Iro', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11003, 'Dibulla', 49, 657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11004, 'San Miguel', 49, 652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11005, 'La Pintada', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11006, 'Santa Bárbara', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11007, 'Venecia', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11008, 'Granada', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11009, 'El Rosal', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11010, 'Puerto Nare', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11011, 'La Jagua de Ibirico', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11012, 'Pueblo Bello', 49, 664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11013, 'San Antonio del Tequendama', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11014, 'Clemencia', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11015, 'Distracción', 49, 657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11016, 'Albania', 49, 657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11017, 'Hatonuevo', 49, 657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11018, 'Zona Bananera', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11019, 'La Apartada', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11020, 'La Victoria', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11021, 'Guachene', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11022, 'San Jose De Ure', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11023, 'Tuchin', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11024, 'Norosi', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11025, 'Puerto Alegría', 49, 675)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11026, 'Puerto Arica', 49, 675)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11027, 'Ciudad Bolívar', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11028, 'El Carmen de Viboral', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11029, 'Piamonte', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11030, 'Sucre', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11031, 'Villa Rica', 49, 665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11032, 'El Cantón del San Pablo', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11033, 'El Litoral del San Juan', 49, 663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11034, 'Mapiripana', 49, 660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11035, 'San Felipe', 49, 660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11036, 'Morichal', 49, 660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11037, 'La Jagua del Pilar', 49, 657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11038, 'Uribe', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11039, 'El Peñol', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11040, 'Nariño', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11041, 'San Andres de Tumaco', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11042, 'Colón', 49, 652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11043, 'Leguízamo', 49, 652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11044, 'El Peñón', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11045, 'Buenavista', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11046, 'Coveñas', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11047, 'El Roble', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11048, 'San Luis de Sincé', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11049, 'Santiago de Tolú', 49, 647)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11050, 'Palocabildo', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11051, 'Guadalajara de Buga', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11052, 'Villa de San Diego de Ubate', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11053, 'Bogotá  D.C.', 49, 671)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11054, 'Arenal', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11055, 'Arroyohondo', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11056, 'El Peñón', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11057, 'Regidor', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11058, 'San Cristóbal', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11059, 'San Jacinto del Cauca', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11060, 'Santa María', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11061, 'Norcasia', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11062, 'San José', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11063, 'Concordia', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11064, 'El Retén', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11065, 'Nueva Granada', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11066, 'Pijiño del Carmen', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11067, 'Sabanas de San Angel', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11068, 'Santa Bárbara de Pinto', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11069, 'Zapayán', 49, 656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11070, 'Vázquez de Coronado', 50, 676)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11071, 'Sarchí', 50, 682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11072, 'Upala', 50, 682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11073, 'Turrubares', 50, 676)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11074, 'Turrialba', 50, 681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11075, 'Tilarán', 50, 680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11076, 'Tibás', 50, 676)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11077, 'Tarrazú', 50, 676)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11078, 'Talamanca', 50, 678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11079, 'Siquirres', 50, 678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11080, 'Sarapiquí', 50, 679)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11081, 'Santo Domingo', 50, 679)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11082, 'Santa Cruz', 50, 680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11083, 'Santa Bárbara', 50, 679)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11084, 'Santa Ana', 50, 676)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11085, 'San Rafael', 50, 679)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11086, 'San Pablo', 50, 679)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11087, 'San Mateo', 50, 682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11088, 'San José', 50, 676)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11089, 'San Isidro', 50, 679)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11090, 'San Carlos', 50, 682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11091, 'Puriscal', 50, 676)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11092, 'Puntarenas', 50, 677)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11093, 'Pococí', 50, 678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11094, 'Poás', 50, 682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11095, 'Pérez Zeledón', 50, 676)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11096, 'Parrita', 50, 677)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11097, 'Paraíso', 50, 681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11098, 'Palmares', 50, 682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11099, 'Osa', 50, 677)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11100, 'Orotina', 50, 682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11101, 'Oreamuno', 50, 681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11102, 'Nicoya', 50, 680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11103, 'Naranjo', 50, 682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11104, 'Nandayure', 50, 680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11105, 'Moravia', 50, 676)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11106, 'Mora', 50, 676)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11107, 'Montes de Oro', 50, 677)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11108, 'Montes de Oca', 50, 676)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11109, 'Matina', 50, 678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11110, 'Los Chiles', 50, 682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11111, 'Limón', 50, 678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11112, 'Liberia', 50, 680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11113, 'León Cortés Castro', 50, 676)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11114, 'La Unión', 50, 681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11115, 'La Cruz', 50, 680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11116, 'Jiménez', 50, 681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11117, 'Hojancha', 50, 680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11118, 'Heredia', 50, 679)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11119, 'Guatuso', 50, 682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11120, 'Guácimo', 50, 678)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11121, 'Grecia', 50, 682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11122, 'Golfito', 50, 677)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11123, 'Goicoechea', 50, 676)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11124, 'Flores', 50, 679)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11125, 'Esparza', 50, 677)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11126, 'Escazú', 50, 676)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11127, 'El Guarco', 50, 681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11128, 'Dota', 50, 676)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11129, 'Desamparados', 50, 676)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11130, 'Curridabat', 50, 676)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11131, 'Coto Brus', 50, 677)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11132, 'Corredores', 50, 677)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11133, 'Cartago', 50, 681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11134, 'Carrillo', 50, 680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11135, 'Cañas', 50, 680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11136, 'Buenos Aires', 50, 677)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11137, 'Belén', 50, 679)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11138, 'Barva', 50, 679)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11139, 'Bagaces', 50, 680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11140, 'Atenas', 50, 682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11141, 'Aserrí', 50, 676)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11142, 'Alvarado', 50, 681)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11143, 'Zarcero', 50, 682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11144, 'Alajuelita', 50, 676)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11145, 'Alajuela', 50, 682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11146, 'Quepos', 50, 677)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11147, 'Acosta', 50, 676)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11148, 'Abangares', 50, 680)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11149, 'San Ramón', 50, 682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11150, 'Garabito', 50, 677)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11151, 'Río Cuarto', 50, 682)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11152, 'Municipio de Yateras', 51, 691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11153, 'Municipio de Yaguajay', 51, 685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11154, 'Municipio de Viñales', 51, 686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11155, 'Municipio de Unión de Reyes', 51, 687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11156, 'Municipio de Trinidad', 51, 685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11157, 'Municipio de Santo Domingo', 51, 683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11158, 'Municipio de Santiago de Cuba', 51, 684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11159, 'Municipio de Santa Isabel de las Lajas', 51, 694)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11160, 'Municipio de Santa Cruz del Sur', 51, 696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11161, 'Municipio de Santa Cruz del Norte', 51, 698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11162, 'Municipio de Santa Clara', 51, 683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11163, 'Municipio de San Nicolás', 51, 698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11164, 'Municipio de San Luis', 51, 686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11165, 'Municipio de San Luis', 51, 684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11166, 'Municipio de San Juan y Martínez', 51, 686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11167, 'Remedios', 51, 683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11168, 'Municipio de San José de las Lajas', 51, 698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11169, 'Municipio de Sancti Spíritus', 51, 685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11170, 'Municipio de San Cristóbal', 51, 697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11171, 'Municipio de San Antonio de los Baños', 51, 697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11172, 'Municipio de Sagua la Grande', 51, 683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11173, 'Municipio de Sagua de Tánamo', 51, 690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11174, 'Municipio de Rodas', 51, 694)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11175, 'Municipio de Regla', 51, 693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11176, 'Municipio de Ranchuelo', 51, 683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11177, 'Municipio de Quivicán', 51, 698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11178, 'Municipio de Quemado de Güines', 51, 683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11179, 'Municipio de Puerto Padre', 51, 688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11180, 'Municipio de Placetas', 51, 683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11181, 'Municipio de Pinar del Río', 51, 686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11182, 'Municipio de Perico', 51, 687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11183, 'Municipio de Pedro Betancourt', 51, 687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11184, 'Municipio de Palmira', 51, 694)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11185, 'Municipio de Palma Soriano', 51, 684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11186, 'Municipio de Nuevitas', 51, 696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11187, 'Municipio de Nueva Paz', 51, 698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11188, 'Municipio de Niquero', 51, 692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11189, 'Municipio de Morón', 51, 695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11190, 'Municipio de Melena del Sur', 51, 698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11191, 'Municipio de Mayarí', 51, 690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11192, 'Municipio de Matanzas', 51, 687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11193, 'Municipio de Martí', 51, 687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11194, 'Municipio de Mariel', 51, 697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11195, 'Municipio de Marianao', 51, 693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11196, 'Municipio de Manzanillo', 51, 692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11197, 'Municipio de Mantua', 51, 686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11198, 'Municipio de Madruga', 51, 698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11199, 'Municipio de Los Palacios', 51, 686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11200, 'Municipio de Los Arabos', 51, 687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11201, 'Limonar', 51, 687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11202, 'Municipio de Las Tunas', 51, 688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11203, 'Municipio de La Palma', 51, 686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11204, 'Municipio de Jovellanos', 51, 687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11205, 'Municipio de Jiguaní', 51, 692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11206, 'Municipio de Jatibonico', 51, 685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11207, 'Municipio de Jaruco', 51, 698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11208, 'Municipio de Jagüey Grande', 51, 687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11209, 'Municipio de Holguín', 51, 690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11210, 'Municipio de Güira de Melena', 51, 697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11211, 'Municipio de Güines', 51, 698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11212, 'Municipio de Guantánamo', 51, 691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11213, 'Municipio de Guane', 51, 686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11214, 'Municipio de Guanajay', 51, 697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11215, 'Municipio de Guanabacoa', 51, 693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11216, 'Municipio de Guáimaro', 51, 696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11217, 'Municipio de Gibara', 51, 690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11218, 'Municipio de Fomento', 51, 685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11219, 'Municipio de Florida', 51, 696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11220, 'Municipio de Esmeralda', 51, 696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11221, 'Municipio de Encrucijada', 51, 683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11222, 'Municipio de Cruces', 51, 694)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11223, 'Municipio de Corralillo', 51, 683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11224, 'Municipio de Consolación del Sur', 51, 686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11225, 'Municipio de Colón', 51, 687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11226, 'Municipio de Cifuentes', 51, 683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11227, 'Municipio de Cienfuegos', 51, 694)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11228, 'Municipio de Ciego de Ávila', 51, 695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11229, 'Municipio de Cárdenas', 51, 687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11230, 'Municipio de Candelaria', 51, 697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11231, 'Municipio de Campechuela', 51, 692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11232, 'Municipio de Camajuaní', 51, 683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11233, 'Municipio de Camagüey', 51, 696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11234, 'Municipio de Caimito', 51, 697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11235, 'Municipio de Caibarién', 51, 683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11236, 'Municipio de Cabaiguán', 51, 685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11237, 'Municipio de Bejucal', 51, 698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11238, 'Municipio de Bayamo', 51, 692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11239, 'Municipio de Bauta', 51, 697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11240, 'Municipio de Batabanó', 51, 698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11241, 'Municipio de Baracoa', 51, 691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11242, 'Municipio de Banes', 51, 690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11243, 'Municipio de Artemisa', 51, 697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11244, 'Municipio de Antilla', 51, 690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11245, 'Municipio de Alquízar', 51, 697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11246, 'Municipio de Aguada de Pasajeros', 51, 694)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11247, 'Municipio de Abreus', 51, 694)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11248, 'Municipio de Calixto Garcia', 51, 690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11249, 'Sandino', 51, 686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11250, 'Municipio de Jobabo', 51, 688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11251, 'Municipio de Manatí', 51, 688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11252, 'Municipio de Jesús Menéndez', 51, 688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11253, 'Municipio de Baraguá', 51, 695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11254, 'Municipio de Ciro Redondo', 51, 695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11255, 'Municipio de Chambas', 51, 695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11256, 'Municipio de Río Cauto', 51, 692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11257, 'Minas De Matahambre', 51, 686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11258, 'Arroyo Naranjo', 51, 693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11259, 'Boyeros', 51, 693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11260, 'Centro Habana', 51, 693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11261, 'Cerro', 51, 693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11262, 'Cotorro', 51, 693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11263, 'Diez De Octubre', 51, 693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11264, 'La Habana Del Este', 51, 693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11265, 'La Habana Vieja', 51, 693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11266, 'La Lisa', 51, 693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11267, 'Plaza De La Revolucion', 51, 693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11268, 'San Miguel Del Padron', 51, 693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11269, 'Calimete', 51, 687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11270, 'Cienaga De Zapata', 51, 687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11271, 'Jimaguayu', 51, 696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11272, 'Minas', 51, 696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11273, 'Sibanicu', 51, 696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11274, 'Sierra De Cubitas', 51, 696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11275, 'Vertientes', 51, 696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11276, 'Bolivia', 51, 695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11277, 'Florencia', 51, 695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11278, 'Majagua', 51, 695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11279, 'Primero De Enero', 51, 695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11280, 'Venezuela', 51, 695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11281, 'Cumanayagua', 51, 694)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11282, 'Bartolome Maso', 51, 692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11283, 'Buey Arriba', 51, 692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11284, 'Cauto Cristo', 51, 692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11285, 'Guisa', 51, 692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11286, 'Media Luna', 51, 692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11287, 'Pilon', 51, 692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11288, 'Yara', 51, 692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11289, 'Caimanera', 51, 691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11290, 'El Salvador', 51, 691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11291, 'Imias', 51, 691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11292, 'Maisi', 51, 691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11293, 'Manuel Tames', 51, 691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11294, 'Niceto Perez', 51, 691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11295, 'San Antonio Del Sur', 51, 691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11296, 'Baguanos', 51, 690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11297, 'Cacocum', 51, 690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11298, 'Frank Pais', 51, 690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11299, 'Moa', 51, 690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11300, 'Amancio', 51, 688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11301, 'Colombia', 51, 688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11302, 'Majibacoa', 51, 688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11303, 'La Sierpe', 51, 685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11304, 'Taguasco', 51, 685)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11305, 'Contramaestre', 51, 684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11306, 'Guama', 51, 684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11307, 'Mella', 51, 684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11308, 'Segundo Frente', 51, 684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11309, 'Tercer Frente', 51, 684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11310, 'Manicaragua', 51, 683)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11311, 'Bahia Honda', 51, 697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11312, 'Urbano Noris', 51, 690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11313, 'Rafael Freyre', 51, 690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11314, 'Carlos Manuel De Cespedes', 51, 696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11315, 'Playa', 51, 693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11316, 'Songo - La Maya', 51, 684)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11317, 'Cueto', 51, 690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11318, 'Najasa', 51, 696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11319, 'Nossa Senhora da Luz', 52, 706)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11320, 'Nossa Senhora da Conceicao', 52, 712)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11321, 'São João Baptista', 52, 707)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11322, 'Nossa Senhora do Rosário', 52, 703)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11323, 'Nossa Senhora do Monte', 52, 707)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11324, 'Sao Nicolau Tolentino', 52, 711)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11325, 'Santo Crucifixo', 52, 703)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11326, 'Nossa Senhora da Lapa', 52, 715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11327, 'Nossa Senhora das Dores', 52, 702)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11328, 'Nossa Senhora da Ajuda', 52, 709)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11329, 'Nossa Senhora do Livramento', 52, 703)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11330, 'Nossa Senhora do Rosario', 52, 715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11331, 'Santa Catarina do Fogo', 52, 716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11332, 'Santa Isabel', 52, 708)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11333, 'Santo Andre', 52, 714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11334, 'Santo Antonio das Pombas', 52, 705)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11335, 'Sao Salvador do Mundo', 52, 717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11336, 'Sao Pedro Apostolo', 52, 703)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11337, 'Nossa Senhora da Luz', 52, 711)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11338, 'Nossa Senhora da Luz', 52, 700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11339, 'Sao Francisco de Assis', 52, 718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11340, 'Sao Joao Baptista', 52, 708)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11341, 'Sao Joao Baptista', 52, 714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11342, 'Sao Lourenco', 52, 712)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11343, 'Santa Catarina', 52, 701)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11344, 'Santiago Maior', 52, 710)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11345, 'Santo Amaro Abade', 52, 699)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11346, 'Sao Lourenco Dos Orgaos', 52, 719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11347, 'Sao Miguel Arcanjo', 52, 713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11348, 'Nossa Senhora da Graca', 52, 704)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11349, 'Santissimo Nome de Jesus', 52, 720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11350, 'Sao Joao Baptista', 52, 720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11351, 'Ágios Dométios', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11352, 'Égkomi', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11353, 'Stróvolos', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11354, 'Aglantziá', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11355, 'Ortákioi', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11356, 'Tráchonas', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11357, 'Lakatámia', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11358, 'Synoikismós Anthoúpolis', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11359, 'Latsiá', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11360, 'Géri', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11361, 'Siá', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11362, 'Mathiátis', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11363, 'Alámpra', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11364, 'Agía Varvára', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11365, 'Kotsiátis', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11366, 'Nísou', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11367, 'Péra Chorió', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11368, 'Dáli', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11369, 'Lýmpia', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11370, 'Lythrodóntas', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11371, 'Louroukína', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11372, 'Potamiá', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11373, 'Ágios Sozómenos', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11374, 'Pyrógi', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11375, 'Margó', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11376, 'Agiá', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11377, 'Týmvou', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11378, 'Móra', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11379, 'Mia Miliá', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11380, 'Mándres', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11381, 'Palaíkythro', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11382, 'Éxo Metóchi', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11383, 'Epichó', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11384, 'Vóni', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11385, 'Trachóni', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11386, 'Néo Chorió', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11387, 'Kythréa', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11388, 'Béïkioï', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11389, 'Pétra tou Digení', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11390, 'Kalyvákia', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11391, 'Kouroú Monastíri', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11392, 'Kampí', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11393, 'Farmakás', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11394, 'Aplíki', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11395, 'Lazaniás', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11396, 'Goúrri', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11397, 'Fikárdou', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11398, 'Agios Epifanios (Oreinis)', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11399, 'Kalo Chorio (Oreinis)', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11400, 'Maloúnta', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11401, 'Klírou', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11402, 'Aredioú', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11403, 'Ágios Ioánnis', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11404, 'Agrokipiá', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11405, 'Mitseró', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11406, 'Kapédes', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11407, 'Katalióntas', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11408, 'Analióntas', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11409, 'Kampiá', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11410, 'Margí', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11411, 'Tséri', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11412, 'Politikó', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11413, 'Péra', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11414, 'Episkopeió', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11415, 'Psimolófou', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11416, 'Ergátes', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11417, 'Anágeia', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11418, 'Páno Defterá', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11419, 'Káto Defterá', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11420, 'Ágioi Trimithiás', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11421, 'Palaiométocho', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11422, 'Déneia', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11423, 'Kokkinotrimithiá', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11424, 'Ágioi Iliófotoi', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11425, 'Káto Moní', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11426, 'Oroúnta', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11427, 'Páno Koutrafás', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11428, 'Káto Koutrafás', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11429, 'Potámi', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11430, 'Mórfou', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11431, 'Páno Zódeia', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11432, 'Mámmari', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11433, 'Gerólakkos', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11434, 'Agia Marina (Skylloura)', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11435, 'Skylloúra', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11436, 'Ágios Vasíleios', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11437, 'Dýo Potamoí', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11438, 'Kanlí', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11439, 'Kióneli', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11440, 'Palaichóri Mórfou', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11441, 'Askás', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11442, 'Álona', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11443, 'Fterikoúdi', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11444, 'Polýstypos', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11445, 'Lagouderá', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11446, 'Saránti', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11447, 'Livádia', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11448, 'Alithinoú', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11449, 'Platanistása', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11450, 'Palaichóri', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11451, 'Xyliátos', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11452, 'Agios Georgios Kafkallou', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11453, 'Nikitári', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11454, 'Vyzakiá', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11455, 'Agía Marína', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11456, 'Káto Zódeia', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11457, 'Kaló Chorió Kapoúti', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11458, 'Akáki', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11459, 'Peristeróna', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11460, 'Astromerítis', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11461, 'Avlóna', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11462, 'Katokopiá', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11463, 'Argáki', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11464, 'Másari', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11465, 'Fylliá', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11466, 'Méniko', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11467, 'Kyrá', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11468, 'Spília', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11469, 'Agía Eiríni', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11470, 'Kannávia', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11471, 'Kaziverá', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11472, 'Prastió', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11473, 'Nikítas', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11474, 'Syrianochóri', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11475, 'Kakopetriá', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11476, 'Agios Theodoros (Soleas)', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11477, 'Galáta', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11478, 'Sináoros', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11479, 'Kaliána', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11480, 'Temvriá', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11481, 'Korákou', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11482, 'Evrýchou', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11483, 'Flásou', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11484, 'Agios Epifanios (Soleas)', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11485, 'Linoú', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11486, 'Katýdata', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11487, 'Skouriótissa', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11488, 'Pedoulás', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11489, 'Mylikoúri', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11490, 'Moutoutllás', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11491, 'Oíkos', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11492, 'Kalopanagiótis', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11493, 'Gerakiés', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11494, 'Tsakístra', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11495, 'Kámpos', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11496, 'Ágios Nikólaos', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11497, 'Agios Georgios (Lefkas)', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11498, 'Pétra', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11499, 'Kalo Chorio (Lefkas)', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11500, 'Léfka', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11501, 'Ampelikoú', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11502, 'Peristeronári', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11503, 'Eliá', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11504, 'Karavostási', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11505, 'Pentágeia', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11506, 'Angolémi', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11507, 'Varíseia', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11508, 'Galiní', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11509, 'Xeróvounos', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11510, 'Loutrós', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11511, 'Ágios Ioánnis Selémani', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11512, 'Ammadiés', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11513, 'Páno Pýrgos', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11514, 'Káto Pýrgos', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11515, 'Selládi tou Áppi kai Ágio Georgoúdi', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11516, 'Alévga', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11517, 'Pigénia', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11518, 'Pachýammos', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11519, 'Kókkina', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11520, 'Fródisia', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11521, 'Agios Theodoros (Tillirias)', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11522, 'Mansoúra', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11523, 'Mosfíli', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11524, 'Kerýneia', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11525, 'Páno Díkomo', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11526, 'Káto Díkomo', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11527, 'Koutsovéntis', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11528, 'Vounó', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11529, 'Sicharí', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11530, 'Fóta', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11531, 'Kriní', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11532, 'Pilerí', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11533, 'Kiomourtzoú', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11534, 'Agírda', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11535, 'Ágios Ermólaos', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11536, 'Sýsklipos', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11537, 'Konteménos', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11538, 'Asómatos', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11539, 'Kampylí', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11540, 'Karpáseia', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11541, 'Mýrtou', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11542, 'Diórios', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11543, 'Agía Eiríni', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11544, 'Kormakítis', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11545, 'Liverá', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11546, 'Kalograía', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11547, 'Ágios Amvrósios', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11548, 'Chárkeia', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11549, 'Trápeza', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11550, 'Klepíni', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11551, 'Ágios Epíktitos', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11552, 'Bélapaïs', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11553, 'Kazáfani', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11554, 'Thérmeia', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11555, 'Karákoumi', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11556, 'Témplos', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11557, 'Kármi', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11558, 'Ftéricha', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11559, 'Trimíthi', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11560, 'Palaiósofos', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11561, 'Motídes', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11562, 'Eliá', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11563, 'Karavás', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11564, 'Ágios Geórgios', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11565, 'Agridáki', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11566, 'Lárnakas Lapíthou', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11567, 'Lápithos', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11568, 'Vasíleia', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11569, 'Pánagra', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11570, 'Órga', 55, 725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11571, 'Ammóchostos', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11572, 'Agía Nápa', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11573, 'Paralímni', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11574, 'Derýneia', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11575, 'Sotíra', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11576, 'Liopétri', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11577, 'Frénaros', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11578, 'Avgórou', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11579, 'Áchna', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11580, 'Makrásyka', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11581, 'Kalopsída', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11582, 'Acherítou', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11583, 'Égkomi', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11584, 'Ágios Sérgios', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11585, 'Stýlloi', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11586, 'Limniá', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11587, 'Alóda', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11588, 'Spatharikó', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11589, 'Arnadí', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11590, 'Ágios Geórgios', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11591, 'Perivólia', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11592, 'Sýgkrasi', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11593, 'Lápathos', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11594, 'Tríkomo', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11595, 'Koúklia', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11596, 'Kontéa', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11597, 'Lýsi', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11598, 'Vatilí', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11599, 'Strongylós', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11600, 'Sínta', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11601, 'Gaïdourás', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11602, 'Prastió', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11603, 'Pyrgá', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11604, 'Mousoulíta', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11605, 'Santaláris', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11606, 'Marátha', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11607, 'Peristeróna', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11608, 'Pigí', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11609, 'Génagra', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11610, 'Miliá', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11611, 'Gýpsou', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11612, 'Lefkónoiko', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11613, 'Psyllátos', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11614, 'Knódara', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11615, 'Goúfes', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11616, 'Áskeia', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11617, 'Afánteia', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11618, 'Angastína', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11619, 'Marathóvounos', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11620, 'Vitsáda', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11621, 'Kíados', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11622, 'Kornókipos', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11623, 'Ágios Charíton', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11624, 'Trypiméni', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11625, 'Ártemi', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11626, 'Ágios Nikólaos', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11627, 'Platáni', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11628, 'Akanthoú', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11629, 'Meloúnta', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11630, 'Ágios Iákovos', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11631, 'Agios Andronikos (Trikomou)', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11632, 'Mándres', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11633, 'Árdana', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11634, 'Flamoúdi', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11635, 'Bogázi', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11636, 'Monargá', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11637, 'Ágios Ilías', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11638, 'Gastriá', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11639, 'Avgolída', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11640, 'Patríki', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11641, 'Geráni', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11642, 'Óvgoros', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11643, 'Davlós', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11644, 'Ágios Theódoros', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11645, 'Vokolída', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11646, 'Távrou', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11647, 'Ágios Efstáthios', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11648, 'Livádia', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11649, 'Krídeia', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11650, 'Kómi', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11651, 'Galáteia', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11652, 'Eptakómi', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11653, 'Kóma tou Gialoú', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11654, 'Néta', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11655, 'Vothýlakas', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11656, 'Lythrágkomi', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11657, 'Vasíli', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11658, 'Leonárisso', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11659, 'Platanissós', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11660, 'Koilánemos', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11661, 'Ágios Andrónikos', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11662, 'Ágios Symeón', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11663, 'Melánarga', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11664, 'Aigialoúsa', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11665, 'Agía Triás', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11666, 'Koróveia', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11667, 'Galinóporni', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11668, 'Rizokárpaso', 55, 726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11669, 'Lárnaka', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11670, 'Aradíppou', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11671, 'Kelliá', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11672, 'Troúlloi', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11673, 'Voróklini', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11674, 'Avdelleró', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11675, 'Pýla', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11676, 'Xylotýmvou', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11677, 'Ormídeia', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11678, 'Xylofágou', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11679, 'Pérgamos', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11680, 'Kíti', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11681, 'Tersefánou', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11682, 'Softádes', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11683, 'Mazotós', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11684, 'Alaminós', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11685, 'Anafotída', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11686, 'Kórnos', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11687, 'Aplánta', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11688, 'Kivisíli', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11689, 'Alethrikó', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11690, 'Klavdiá', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11691, 'Anglisídes', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11692, 'Menógeia', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11693, 'Petrofáni', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11694, 'Athiénou', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11695, 'Meloúseia', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11696, 'Tremetousiá', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11697, 'Ársos', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11698, 'Agía Ánna', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11699, 'Mosfilotí', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11700, 'Psevdás', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11701, 'Delíkipos', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11702, 'Kóchi', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11703, 'Zýgi', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11704, 'Marí', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11705, 'Kalavasós', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11706, 'Tóchni', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11707, 'Choirokoitía', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11708, 'Psematisménos', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11709, 'Maróni', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11710, 'Skarínou', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11711, 'Kofínou', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11712, 'Káto Léfkara', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11713, 'Páno Léfkara', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11714, 'Káto Drys', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11715, 'Vávla', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11716, 'Lágeia', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11717, 'Orá', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11718, 'Melíni', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11719, 'Odoú', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11720, 'Ágioi Vavatsiniás', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11721, 'Vavatsiniá', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11722, 'Lemesós', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11723, 'Mésa Geitoniá', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11724, 'Ágios Athanásios', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11725, 'Germasógeia', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11726, 'Páno Polemídia', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11727, 'Ýpsonas', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11728, 'Káto Polemídia', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11729, 'Palódeia', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11730, 'Paramýtha', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11731, 'Spitáli', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11732, 'Fasoúla', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11733, 'Mathikolóni', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11734, 'Gerása', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11735, 'Apsioú', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11736, 'Apesiá', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11737, 'Korfí', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11738, 'Limnátis', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11739, 'Kapileió', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11740, 'Mouttagiáka', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11741, 'Armenochóri', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11742, 'Foinikária', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11743, 'Akroúnta', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11744, 'Ágios Týchon', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11745, 'Parekklisiá', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11746, 'Pentákomo', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11747, 'Monagroúlli', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11748, 'Asgáta', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11749, 'Vasa (Kellakiou)', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11750, 'Sanída', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11751, 'Klonári', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11752, 'Víkla', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11753, 'Kelláki', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11754, 'Akapnoú', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11755, 'Eptagóneia', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11756, 'Dieróna', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11757, 'Arakapás', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11758, 'Ágios Pávlos', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11759, 'Ágios Konstantínos', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11760, 'Sykópetra', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11761, 'Louvarás', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11762, 'Zoopigí', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11763, 'Akrotíri', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11764, 'Tserkézoi', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11765, 'Kolóssi', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11766, 'Erími', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11767, 'Episkopí', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11768, 'Kantoú', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11769, 'Sotíra', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11770, 'Paramáli', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11771, 'Avdímou', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11772, 'Platanísteia', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11773, 'Ágios Tomás', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11774, 'Aléktora', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11775, 'Anógyra', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11776, 'Pissoúri', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11777, 'Soúni-Zanakiá', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11778, 'Álassa', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11779, 'Káto Kivídes', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11780, 'Páno Kivídes', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11781, 'Ágios Therápon', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11782, 'Lófou', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11783, 'Páchna', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11784, 'Dorós', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11785, 'Láneia', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11786, 'Silíkou', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11787, 'Monágri', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11788, 'Trimíklini', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11789, 'Ágios Mámas', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11790, 'Kouká', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11791, 'Moniátis', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11792, 'Dorá', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11793, 'Gerovása', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11794, 'Ársos', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11795, 'Kissoúsa', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11796, 'Maliá', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11797, 'Vasa (Koilaniou)', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11798, 'Vouní', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11799, 'Péra Pedí', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11800, 'Mandriá', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11801, 'Potamioú', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11802, 'Ómodos', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11803, 'Koiláni', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11804, 'Ágios Dimítrios', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11805, 'Palaiómylos', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11806, 'Pródromos', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11807, 'Kaminária', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11808, 'Treis Eliés', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11809, 'Lemíthou', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11810, 'Káto Plátres', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11811, 'Páno Plátres', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11812, 'Foiní', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11813, 'Amíantos', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11814, 'Káto Mýlos', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11815, 'Potamítissa', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11816, 'Dýmes', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11817, 'Peléndri', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11818, 'Agrós', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11819, 'Agrídia', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11820, 'Chandriá', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11821, 'Kyperoúnta', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11822, 'Páfos', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11823, 'Geroskípou Municipality', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11824, 'Koniá', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11825, 'Agía Marinoúda', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11826, 'Achéleia', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11827, 'Chlórakas', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11828, 'Lémpa', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11829, 'Émpa', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11830, 'Tremithoúsa', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11831, 'Mésa Chorió', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11832, 'Mesógi', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11833, 'Tála', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11834, 'Kissónerga', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11835, 'Koúklia', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11836, 'Mandriá', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11837, 'Nikókleia', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11838, 'Souskioú', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11839, 'Tími', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11840, 'Anaríta', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11841, 'Foínikas', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11842, 'Marathoúnta', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11843, 'Ármou', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11844, 'Episkopí', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11845, 'Natá', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11846, 'Cholétria', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11847, 'Axýlou', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11848, 'Eledió', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11849, 'Tsáda', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11850, 'Koíli', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11851, 'Stroumpí', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11852, 'Polémi', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11853, 'Kallépeia', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11854, 'Letýmvou', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11855, 'Pitargoú', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11856, 'Koúrdaka', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11857, 'Lemóna', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11858, 'Choúlou', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11859, 'Akoursós', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11860, 'Káthikas', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11861, 'Pégeia', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11862, 'Páno Archimandríta', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11863, 'Fasoúla', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11864, 'Moúsere', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11865, 'Máronas', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11866, 'Mamónia', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11867, 'Stavrokónnou', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11868, 'Trachypédoula', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11869, 'Kelokédara', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11870, 'Salamioú', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11871, 'Kidási', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11872, 'Kédares', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11873, 'Mésana', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11874, 'Praitóri', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11875, 'Filousa (Kelokedaron)', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11876, 'Armínou', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11877, 'Amargéti', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11878, 'Pentaliá', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11879, 'Fáleia', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11880, 'Galatariá', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11881, 'Koilíneia', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11882, 'Vrétsia', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11883, 'Statós-Ágios Fótios', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11884, 'Lapithioú', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11885, 'Mamoúntali', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11886, 'Páno Panagiá', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11887, 'Asprogiá', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11888, 'Psathí', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11889, 'Ágios Dimitrianós', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11890, 'Kannavioú-Melamioú', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11891, 'Thriniá', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11892, 'Krítou Maróttou', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11893, 'Fýti', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11894, 'Lása', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11895, 'Drýmou', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11896, 'Símou', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11897, 'Anadioú', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11898, 'Sárama', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11899, 'Evrétou', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11900, 'Trimithoúsa', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11901, 'Filousa (Chrysoxous)', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11902, 'Kiós', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11903, 'Zachariá', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11904, 'Meládeia', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11905, 'Mélandra', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11906, 'Lysós', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11907, 'Thelétra', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11908, 'Giólou', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11909, 'Páno Akourdáleia', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11910, 'Milioú', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11911, 'Káto Akourdáleia', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11912, 'Téra', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11913, 'Krítou Téra', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11914, 'Skoúlli', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11915, 'Chóli', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11916, 'Loukroúnou', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11917, 'Karamoullídes', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11918, 'Chrysochoú', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11919, 'Pólis', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11920, 'Néo Chorió', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11921, 'Goudí', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11922, 'Káto Aródes', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11923, 'Páno Aródes', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11924, 'Íneia', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11925, 'Droúseia', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11926, 'Fásli', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11927, 'Androlíkou', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11928, 'Pelathoúsa', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11929, 'Kynoúsa', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11930, 'Makoúnta', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11931, 'Argáka', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11932, 'Gialiá', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11933, 'Néa Dímmata', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11934, 'Pomós', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11935, 'Stení', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11936, 'Ágios Isídoros', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11937, 'Livádi', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11938, 'Nicosia Municipality', 55, 722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11939, 'Agia Varvara (Pafou)', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11940, 'Trachoni (Lemesou)', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11941, 'Asomatos (Lemesou)', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11942, 'Milia Pafou', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11943, 'Pyrga (Larnakas)', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11944, 'Agia Marina (Chrysoxous)', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11945, 'Agios Theodoros (Lemesou)', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11946, 'Agios Ioannis (Lemesou)', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11947, 'Prastio (Kellakiou)', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11948, 'Pyrgos', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11949, 'Perivolia (Larnakas)', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11950, 'Agios Amvrosios (Lemesou)', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11951, 'Agios Georgios (Lemesou)', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11952, 'Prastio (Pafou)', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11953, 'Peristerona (Pafou)', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11954, 'Agios Ioannis (Pafou)', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11955, 'Agios Georgios (Pafou)', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11956, 'Agia Marina (Kelokedaron)', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11957, 'Kalo Chorio (Lemesou)', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11958, 'Agios Theodoros (Larnakas)', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11959, 'Livadia (Larnakas)', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11960, 'Prastio (Avdimou)', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11961, 'Kalo Chorio (Larnakas)', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11962, 'Agios Nikolaos (Pafou)', 55, 721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11963, 'Moni', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11964, 'Dromolaxia-Meneou', 55, 724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11965, 'Troodos', 55, 723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11966, 'Okres Znojmo', 56, 728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11967, 'Okres Žďár nad Sázavou', 56, 730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11968, 'Okres Vyškov', 56, 728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11969, 'Okres Vsetín', 56, 740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11970, 'Okres Ústí nad Orlicí', 56, 736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11971, 'Okres Ústí nad Labem', 56, 739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11972, 'Okres Uherské Hradiště', 56, 740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11973, 'Okres Trutnov', 56, 732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11974, 'Okres Třebíč', 56, 730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11975, 'Okres Teplice', 56, 739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11976, 'Okres Tachov', 56, 737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11977, 'Okres Tábor', 56, 729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11978, 'Okres Svitavy', 56, 736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11979, 'Okres Šumperk', 56, 734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11980, 'Okres Strakonice', 56, 729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11981, 'Okres Sokolov', 56, 731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11982, 'Okres Semily', 56, 733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11983, 'Okres Rychnov nad Kněžnou', 56, 732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11984, 'Okres Rokycany', 56, 737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11985, 'Okres Rakovník', 56, 738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11986, 'Okres Prostějov', 56, 734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11987, 'Okres Příbram', 56, 738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11988, 'Okres Přerov', 56, 734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11989, 'Okres Praha-západ', 56, 738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11990, 'Okres Praha-východ', 56, 738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11991, 'Okres Prachatice', 56, 729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11992, 'Okres Plzeň-sever', 56, 737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11993, 'Okres Plzeň-město', 56, 737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11994, 'Okres Plzeň-jih', 56, 737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11995, 'Okres Písek', 56, 729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11996, 'Okres Pelhřimov', 56, 730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11997, 'Okres Pardubice', 56, 736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11998, 'Okres Ostrava-město', 56, 735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (11999, 'Okres Opava', 56, 735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12000, 'Okres Olomouc', 56, 734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12001, 'Okres Nymburk', 56, 738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12002, 'Okres Nový Jičín', 56, 735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12003, 'Okres Náchod', 56, 732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12004, 'Okres Most', 56, 739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12005, 'Okres Mladá Boleslav', 56, 738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12006, 'Okres Mělník', 56, 738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12007, 'Okres Louny', 56, 739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12008, 'Okres Litoměřice', 56, 739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12009, 'Okres Liberec', 56, 733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12010, 'Okres Kutná Hora', 56, 738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12011, 'Okres Kroměříž', 56, 740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12012, 'Okres Kolín', 56, 738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12013, 'Okres Klatovy', 56, 737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12014, 'Okres Kladno', 56, 738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12015, 'Okres Karviná', 56, 735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12016, 'Okres Karlovy Vary', 56, 731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12017, 'Okres Jindřichův Hradec', 56, 729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12018, 'Okres Jihlava', 56, 730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12019, 'Okres Jičín', 56, 732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12020, 'Okres Jablonec nad Nisou', 56, 733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12021, 'Okres Hradec Králové', 56, 732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12022, 'Okres Hodonín', 56, 728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12023, 'Okres Havlíčkův Brod', 56, 730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12024, 'Okres Zlín', 56, 740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12025, 'Okres Frýdek-Místek', 56, 735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12026, 'Okres Domažlice', 56, 737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12027, 'Okres Děčín', 56, 739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12028, 'Okres Chrudim', 56, 736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12029, 'Okres Chomutov', 56, 739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12030, 'Okres Cheb', 56, 731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12031, 'Okres Český Krumlov', 56, 729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12032, 'Okres České Budějovice', 56, 729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12033, 'Okres Česká Lípa', 56, 733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12034, 'Okres Bruntál', 56, 735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12035, 'Okres Brno-venkov', 56, 728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12036, 'Město Brno', 56, 728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12037, 'Okres Břeclav', 56, 728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12038, 'Okres Blansko', 56, 728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12039, 'Okres Beroun', 56, 738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12040, 'Okres Benešov', 56, 738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12041, 'Okres Jeseník', 56, 734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12042, 'Praha 1', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12043, 'Praha 2', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12044, 'Praha 3', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12045, 'Praha 4', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12046, 'Praha 5', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12047, 'Praha 6', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12048, 'Praha 7', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12049, 'Praha 8', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12050, 'Praha 9', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12051, 'Praha 10', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12052, 'Praha 11', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12053, 'Praha 12', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12054, 'Praha 13', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12055, 'Praha 14', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12056, 'Praha 15', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12057, 'Praha 16', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12058, 'Praha 17', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12059, 'Praha 18', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12060, 'Praha 19', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12061, 'Praha 20', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12062, 'Praha 21', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12063, 'Praha 22', 56, 727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12064, 'Regierungsbezirk Unterfranken', 57, 755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12065, 'Swabia', 57, 755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12066, 'Upper Palatinate', 57, 755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12067, 'Upper Franconia', 57, 755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12068, 'Upper Bavaria', 57, 755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12069, 'Lower Bavaria', 57, 755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12070, 'Regierungsbezirk Münster', 57, 747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12071, 'Regierungsbezirk Mittelfranken', 57, 755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12072, 'Regierungsbezirk Köln', 57, 747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12073, 'Regierungsbezirk Kassel', 57, 750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12074, 'Freiburg Region', 57, 756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12075, 'Düsseldorf District', 57, 747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12076, 'Regierungsbezirk Detmold', 57, 747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12077, 'Regierungsbezirk Darmstadt', 57, 750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12078, 'Regierungsbezirk Arnsberg', 57, 747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12079, 'Karlsruhe Region', 57, 756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12080, 'Regierungsbezirk Stuttgart', 57, 756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12081, 'Tübingen Region', 57, 756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12082, 'Regierungsbezirk Gießen', 57, 750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12083, 'Obock', 58, 758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12084, 'Yoboki', 58, 760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12085, 'As Eyla', 58, 760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12086, 'Vordingborg Kommune', 59, 766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12087, 'Viborg Kommune', 59, 764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12088, 'Vejle Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12089, 'Vejen Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12090, 'Vallensbæk Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12091, 'Tønder Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12092, 'Thisted Kommune', 59, 765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12093, 'Tårnby Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12094, 'Svendborg Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12095, 'Struer Kommune', 59, 764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12096, 'Stevns Kommune', 59, 766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12097, 'Sorø Kommune', 59, 766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12098, 'Sønderborg Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12099, 'Solrød Kommune', 59, 766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12100, 'Slagelse Kommune', 59, 766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12101, 'Skive Kommune', 59, 764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12102, 'Skanderborg Kommune', 59, 764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12103, 'Silkeborg Kommune', 59, 764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12104, 'Samsø Kommune', 59, 764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12105, 'Roskilde Kommune', 59, 766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12106, 'Rødovre Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12107, 'Ringsted Kommune', 59, 766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12108, 'Randers Kommune', 59, 764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12109, 'Odense Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12110, 'Odder Kommune', 59, 764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12111, 'Nyborg Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12112, 'Næstved Kommune', 59, 766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12113, 'Morsø Kommune', 59, 765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12114, 'Middelfart Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12115, 'Lyngby-Tårbæk Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12116, 'Læso Kommune', 59, 765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12117, 'Lemvig Kommune', 59, 764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12118, 'Lejre Kommune', 59, 766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12119, 'København', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12120, 'Kolding Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12121, 'Køge Kommune', 59, 766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12122, 'Kerteminde Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12123, 'Kalundborg Kommune', 59, 766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12124, 'Ishøj Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12125, 'Hvidovre Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12126, 'Hørsholm Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12127, 'Horsens Kommune', 59, 764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12128, 'Holstebro Kommune', 59, 764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12129, 'Holbæk Kommune', 59, 766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12130, 'Hjørring Kommune', 59, 765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12131, 'Hillerød Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12132, 'Herning Kommune', 59, 764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12133, 'Herlev Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12134, 'Helsingør Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12135, 'Hedensted Kommune', 59, 764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12136, 'Haderslev Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12137, 'Greve Kommune', 59, 766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12138, 'Glostrup Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12139, 'Gladsaxe Municipality', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12140, 'Gentofte Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12141, 'Frederikssund Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12142, 'Frederikshavn Kommune', 59, 765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12143, 'Frederiksberg Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12144, 'Fredericia Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12145, 'Fanø Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12146, 'Varde Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12147, 'Dragør Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12148, 'Christiansø', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12149, 'Brønderslev Kommune', 59, 765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12150, 'Brøndby Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12151, 'Bornholm Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12152, 'Billund Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12153, 'Ballerup Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12154, 'Assens Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12155, 'Aarhus Kommune', 59, 764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12156, 'Allerød Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12157, 'Albertslund Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12158, 'Aabenraa Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12159, 'Esbjerg Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12160, 'Jammerbugt Kommune', 59, 765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12161, 'Furesø Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12162, 'Odsherred Kommune', 59, 766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12163, 'Nordfyns Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12164, 'Mariagerfjord Kommune', 59, 765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12165, 'Faxe Kommune', 59, 766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12166, 'Ringkøbing-Skjern Kommune', 59, 764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12167, 'Norddjurs Kommune', 59, 764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12168, 'Ålborg Kommune', 59, 765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12169, 'Ærø Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12170, 'Faaborg-Midtfyn Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12171, 'Rebild Kommune', 59, 765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12172, 'Høje-Taastrup Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12173, 'Vesthimmerland Kommune', 59, 765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12174, 'Fredensborg Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12175, 'Halsnæs Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12176, 'Langeland Kommune', 59, 767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12177, 'Rudersdal Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12178, 'Ikast-Brande Kommune', 59, 764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12179, 'Gribskov Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12180, 'Favrskov Kommune', 59, 764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12181, 'Syddjurs Kommune', 59, 764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12182, 'Egedal Kommune', 59, 763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12183, 'Guldborgsund Kommune', 59, 766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12184, 'Lolland Kommune', 59, 766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12185, 'Yamasá', 61, 791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12186, 'Yaguate', 61, 783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12187, 'Villa Vásquez', 61, 792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12188, 'Villa Tapia', 61, 786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12189, 'Villa Riva', 61, 803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12190, 'Villa Jaragua', 61, 806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12191, 'Villa Isabela', 61, 787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12192, 'Villa Altagracia', 61, 783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12193, 'Vicente Noble', 61, 805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12194, 'Vallejuelo', 61, 782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12195, 'Tenares', 61, 786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12196, 'Tamboril', 61, 780)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12197, 'Tamayo', 61, 806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12198, 'Sosúa', 61, 787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12199, 'Santo Domingo Norte', 61, 809)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12200, 'Santiago de los Caballeros', 61, 780)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12201, 'San Rafael del Yuma', 61, 797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12202, 'San Pedro de Macorís', 61, 781)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12203, 'San Juan de la Maguana', 61, 782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12204, 'San José de Ocoa', 61, 808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12205, 'San José de Las Matas', 61, 780)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12206, 'San Francisco de Macorís', 61, 803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12207, 'San Cristóbal', 61, 783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12208, 'Sánchez', 61, 785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12209, 'Samaná Municipality', 61, 785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12210, 'Salcedo', 61, 786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12211, 'San Ignacio de Sabaneta', 61, 779)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12212, 'Sabana Grande de Boyá', 61, 791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12213, 'Sabana de La Mar', 61, 799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12214, 'Río San Juan', 61, 794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12215, 'Restauración', 61, 804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12216, 'Ramón Santana', 61, 781)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12217, 'Puerto Plata', 61, 787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12218, 'Postrer Río', 61, 798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12219, 'Pimentel', 61, 803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12220, 'Peralta', 61, 807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12221, 'Pepillo Salcedo', 61, 792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12222, 'Pedro Santana', 61, 802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12223, 'Pedernales', 61, 789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12224, 'Paraíso', 61, 805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12225, 'Padre Las Casas', 61, 807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12226, 'Oviedo', 61, 789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12227, 'Nizao', 61, 788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12228, 'Neiba', 61, 806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12229, 'Nagua', 61, 794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12230, 'Monte Plata', 61, 791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12231, 'Monte Cristi', 61, 792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12232, 'Monción', 61, 779)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12233, 'Moca', 61, 800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12234, 'Miches', 61, 801)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12235, 'Mao', 61, 778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12236, 'Maimón', 61, 793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12237, 'Luperón', 61, 787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12238, 'Los Llanos', 61, 781)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12239, 'Los Hidalgos', 61, 787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12240, 'Loma de Cabrera', 61, 804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12241, 'Licey al Medio', 61, 780)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12242, 'La Vega', 61, 795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12243, 'Las Matas de Santa Cruz', 61, 792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12244, 'Las Matas de Farfán', 61, 782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12245, 'La Romana', 61, 796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12246, 'Laguna Salada', 61, 778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12247, 'La Descubierta', 61, 798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12248, 'Jimaní', 61, 798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12249, 'Jarabacoa', 61, 795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12250, 'Jánico', 61, 780)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12251, 'Imbert', 61, 787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12252, 'Hondo Valle', 61, 802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12253, 'Higüey', 61, 797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12254, 'Hato Mayor', 61, 799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12255, 'Guayubín', 61, 792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12256, 'Guaymate', 61, 796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12257, 'Gaspar Hernández', 61, 800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12258, 'Fantino', 61, 784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12259, 'Esperanza', 61, 778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12260, 'Enriquillo', 61, 805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12261, 'El Valle', 61, 799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12262, 'El Seibo', 61, 801)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12263, 'El Llano', 61, 802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12264, 'El Factor', 61, 794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12265, 'El Cercado', 61, 782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12266, 'Duvergé', 61, 798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12267, 'Dajabón', 61, 804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12268, 'Cotuí', 61, 784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12269, 'Constanza', 61, 795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12270, 'Comendador', 61, 802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12271, 'Cevicos', 61, 784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12272, 'Cayetano Germosén', 61, 800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12273, 'Castillo', 61, 803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12274, 'Castañuelas', 61, 792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12275, 'Cambita Garabitos', 61, 783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12276, 'Cabrera', 61, 794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12277, 'Cabral', 61, 805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12278, 'Bonao', 61, 793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12279, 'Bohechío', 61, 782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12280, 'Bisonó', 61, 780)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12281, 'Bayaguana', 61, 791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12282, 'Barahona', 61, 805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12283, 'Bánica', 61, 802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12284, 'Baní', 61, 788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12285, 'Bajos de Haina', 61, 783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12286, 'Azua', 61, 807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12287, 'Altamira', 61, 787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12288, 'Tábara Arriba', 61, 807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12289, 'Guayabal', 61, 807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12290, 'Estebanía', 61, 807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12291, 'Galván', 61, 806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12292, 'Las Salinas', 61, 805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12293, 'Polo', 61, 805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12294, 'Jaquimeyes', 61, 805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12295, 'Partido', 61, 804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12296, 'El Pino', 61, 804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12297, 'Arenoso', 61, 803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12298, 'Las Guáranas', 61, 803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12299, 'Eugenio María De Hostos', 61, 803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12300, 'Mella', 61, 798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12301, 'El Peñón', 61, 805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12302, 'La Ciénaga', 61, 805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12303, 'Santo Domingo De Guzmán', 61, 790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12304, 'Las Charcas', 61, 807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12305, 'Las Yayas De Viajama', 61, 807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12306, 'Sabana Yegua', 61, 807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12307, 'Pueblo Viejo', 61, 807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12308, 'Cristóbal', 61, 798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12309, 'Villa Hermosa', 61, 796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12310, 'Villa Montellano', 61, 787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12311, 'Las Terrenas', 61, 785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12312, 'Sabana Grande De Palenque', 61, 783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12313, 'San Gregorio De Nigua', 61, 783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12314, 'Los Cacaos', 61, 783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12315, 'Juan De Herrera', 61, 782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12316, 'Consuelo', 61, 781)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12317, 'Quisqueya', 61, 781)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12318, 'Guayacanes', 61, 781)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12319, 'La Mata', 61, 784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12320, 'Villa González', 61, 780)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12321, 'Puñal', 61, 780)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12322, 'Sabana Iglesia', 61, 780)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12323, 'Villa Los Almácigos', 61, 779)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12324, 'Santo Domingo Este', 61, 809)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12325, 'Santo Domingo Oeste', 61, 809)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12326, 'Boca Chica', 61, 809)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12327, 'San Antonio De Guerra', 61, 809)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12328, 'Los Alcarrizos', 61, 809)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12329, 'Pedro Brand', 61, 809)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12330, 'Juan Santiago', 61, 802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12331, 'Jamao Al Norte', 61, 800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12332, 'Jima Abajo', 61, 795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12333, 'Guananico', 61, 787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12334, 'Piedra Blanca', 61, 793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12335, 'Peralvillo', 61, 791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12336, 'Sabana Larga', 61, 808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12337, 'Rancho Arriba', 61, 808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12338, 'Los Ríos', 61, 806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12339, 'Fundación', 61, 805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12340, 'Daïra de Touggourt', 62, 825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12341, 'Daïra de Tlemcen', 62, 810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12342, 'Daïra de Tizi Ouzou', 62, 811)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12343, 'Daïra de Timimoun', 62, 857)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12344, 'Daïra de Tighennif', 62, 832)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12345, 'Daïra de Tiaret daira de meghila', 62, 815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12346, 'Daïra de Theniet el Had', 62, 812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12347, 'Daïra de Ténès', 62, 844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12348, 'Daïra de Télagh', 62, 820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12349, 'Daïra de Tébessa', 62, 837)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12350, 'Daïra de Tamanrasset', 62, 817)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12351, 'Daïra de Tablat', 62, 831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12352, 'Daïra de Sour el Ghozlane', 62, 828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12353, 'Daïra de Skikda', 62, 819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12354, 'Daïra de Sidi Bel Abbès', 62, 820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12355, 'Daïra de Sidi Ali', 62, 829)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12356, 'Daïra de Sidi Aïch', 62, 850)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12357, 'Daïra de Sétif', 62, 847)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12358, 'Daïra de Sebdou', 62, 810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12359, 'Daïra de Saïda', 62, 822)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12360, 'Daïra d’Oued Ghiou', 62, 823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12361, 'Daïra d’Ouargla', 62, 825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12362, 'Daïra d’Oran', 62, 826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12363, 'Daïra de M’Sila', 62, 828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12364, 'Daïra de Mostaganem', 62, 823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12365, 'Daïra de Mohammadia', 62, 832)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12366, 'Daïra de Miliana', 62, 856)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12367, 'Daïra de Merouana', 62, 852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12368, 'Daïra de Mecheria', 62, 827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12369, 'Daïra de Mascara', 62, 822)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12370, 'Daïra de Maghnia', 62, 810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12371, 'Daïra de L’Arbaa Naït Irathen', 62, 811)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12372, 'Daïra de Lakhdaria', 62, 845)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12373, 'Daïra de Laghouat', 62, 833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12374, 'Daïra de Ksar el Boukhari', 62, 831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12375, 'Daïra de Jijel', 62, 835)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12376, 'In Salah District', 62, 817)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12377, 'Daïra de Guelma', 62, 837)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12378, 'Daïra de Ghazaouet', 62, 810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12379, 'Daïra de Frenda', 62, 815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12380, 'Daïra d’El Milia', 62, 835)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12381, 'Daïra d’El Kala', 62, 839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12382, 'Daïra d’El Golea', 62, 838)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12383, 'Daïra d’El Eulma', 62, 821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12384, 'Daïra d’El Asnam', 62, 844)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12385, 'Daïra d’El Aouinet', 62, 816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12386, 'Daïra de Draa el Mizan', 62, 811)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12387, 'Daïra de Djelfa', 62, 842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12388, 'Daïra de Djanet', 62, 836)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12389, 'Daïra de Dar el Beïda', 62, 854)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12390, 'Daïra de Constantine', 62, 843)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12391, 'Daïra de Collo', 62, 819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12392, 'Daïra de Cherchell', 62, 813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12393, 'Daïra de Bou Saâda', 62, 828)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12394, 'Daïra de Bouira', 62, 846)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12395, 'Daïra de Bougaa', 62, 821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12396, 'Daïra de Bordj Menaïel', 62, 845)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12397, 'Daïra de Blida', 62, 813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12398, 'Daïra de Biskra', 62, 849)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12399, 'Daïra de Beni Saf', 62, 855)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12400, 'Daïra de Beni Abbes', 62, 860)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12401, 'Daïra de Bejaïa', 62, 850)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12402, 'Daïra de Béchar', 62, 851)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12403, 'Daïra de Batna', 62, 852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12404, 'Daïra de Barika', 62, 852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12405, 'Daïra d’Azazga', 62, 811)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12406, 'Daïra d’Arris', 62, 852)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12407, 'Daïra d’Annaba', 62, 839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12408, 'Daïra d’Alger-Sahel', 62, 813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12409, 'Daïra d’Akbou', 62, 850)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12410, 'Daïra d’‘Aïn Sefra', 62, 827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12411, 'Daïra d’‘Aïn Oussera', 62, 842)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12412, 'Aïn Oulmene', 62, 821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12413, 'Daïra d’Aïn M’lila', 62, 824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12414, 'Daïra d’‘Aïn el Kebira', 62, 821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12415, 'Daïra d’‘Aïn Beïda', 62, 824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12416, 'Daïra d’Aflou', 62, 833)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12417, 'Daïra d’Adrar', 62, 857)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12418, 'Bukombe District', 62, 838)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12419, 'In Guezzam', 62, 817)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12420, 'Charouine', 62, 857)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12421, 'El Ménia District', 62, 864)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12422, 'Dréan District', 62, 839)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12423, 'El M''Ghair District', 62, 840)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12424, 'Chelghoum Laïd District', 62, 830)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12425, 'Ben Badis District', 62, 820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12426, 'Annaba District', 62, 853)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12427, 'Cantón Zaruma', 63, 881)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12428, 'Cantón Zamora', 63, 868)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12429, 'Cantón Yantzaza', 63, 868)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12430, 'Cantón Yaguachi', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12431, 'Cantón Yacuambi', 63, 868)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12432, 'Cantón Vinces', 63, 875)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12433, 'Cantón Ventanas', 63, 875)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12434, 'Cantón Veinticuatro de Mayo', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12435, 'Francisco de Orellana Canton', 63, 889)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12436, 'Cantón Urdaneta', 63, 875)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12437, 'Cantón Salitre', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12438, 'Cantón Tulcán', 63, 884)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12439, 'Cantón Tena', 63, 872)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12440, 'Cantón Sucumbíos', 63, 888)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12441, 'Cantón Sucúa', 63, 873)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12442, 'Cantón Sucre', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12443, 'Cantón Sozoranga', 63, 876)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12444, 'Cantón Sigsig', 63, 887)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12445, 'Cantón Saraguro', 63, 876)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12446, 'Cantón Santo Domingo de los Colorados', 63, 890)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12447, 'Santiago de Méndez', 63, 873)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12448, 'Cantón Santa Rosa', 63, 881)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12449, 'Cantón Santa Isabel', 63, 887)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12450, 'Cantón Santa Elena', 63, 891)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12451, 'Cantón Santa Cruz', 63, 879)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12452, 'Cantón Santa Ana', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12453, 'Cantón San Miguel', 63, 886)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12454, 'Cantón San Lorenzo', 63, 880)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12455, 'Cantón San Cristóbal', 63, 879)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12456, 'Cantón Samborondón', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12457, 'Cantón Salinas', 63, 891)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12458, 'Cantón Salcedo', 63, 882)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12459, 'Cantón Rumiñahui', 63, 870)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12460, 'Cantón Rocafuerte', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12461, 'Cantón Riobamba', 63, 883)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12462, 'Cantón Quito', 63, 870)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12463, 'Cantón Quinindé', 63, 880)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12464, 'Cantón Quijos', 63, 872)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12465, 'Cantón Quevedo', 63, 875)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12466, 'Cantón Quero', 63, 869)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12467, 'Cantón Puyango', 63, 876)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12468, 'Cantón Putumayo', 63, 888)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12469, 'Cantón Pujilí', 63, 882)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12470, 'Cantón Puebloviejo', 63, 875)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12471, 'Cantón Portoviejo', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12472, 'Cantón Portovelo', 63, 881)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12473, 'Cantón Piñas', 63, 881)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12474, 'Cantón Pimampiro', 63, 877)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12475, 'Cantón Píllaro', 63, 869)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12476, 'Cantón Pelileo', 63, 869)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12477, 'Cantón Pedro Moncayo', 63, 870)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12478, 'Cantón Paute', 63, 887)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12479, 'Cantón Patate', 63, 869)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12480, 'Cantón Pastaza', 63, 871)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12481, 'Cantón Pasaje', 63, 881)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12482, 'Cantón Pangua', 63, 882)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12483, 'Cantón Paltas', 63, 876)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12484, 'Cantón Palora', 63, 873)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12485, 'Cantón Paján', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12486, 'Cantón Otavalo', 63, 877)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12487, 'Cantón Naranjito', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12488, 'Cantón Naranjal', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12489, 'Cantón Muisne', 63, 880)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12490, 'Cantón Morona', 63, 873)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12491, 'Cantón Montúfar', 63, 884)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12492, 'Cantón Montecristi', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12493, 'Cantón Mira', 63, 884)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12494, 'Cantón Milagro', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12495, 'Cantón Mera', 63, 871)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12496, 'Cantón Mejía', 63, 870)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12497, 'Cantón Manta', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12498, 'Cantón Machala', 63, 881)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12499, 'Cantón Macará', 63, 876)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12500, 'Cantón Loja', 63, 876)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12501, 'Cantón Limón Indanza', 63, 873)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12502, 'Cantón Latacunga', 63, 882)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12503, 'Cantón Lago Agrio', 63, 888)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12504, 'Cantón Junín', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12505, 'Cantón Jipijapa', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12506, 'Cantón Isabela', 63, 879)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12507, 'Ibarra', 63, 877)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12508, 'Cantón Huaquillas', 63, 881)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12509, 'Cantón Guayaquil', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12510, 'Cantón Guaranda', 63, 886)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12511, 'Cantón Guano', 63, 883)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12512, 'Cantón Guamote', 63, 883)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12513, 'Cantón Gualaquiza', 63, 873)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12514, 'Cantón Gualaceo', 63, 887)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12515, 'Cantón Guabo', 63, 881)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12516, 'Cantón Gonzanamá', 63, 876)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12517, 'Cantón Girón', 63, 887)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12518, 'Cantón Espindola', 63, 876)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12519, 'Cantón Espejo', 63, 884)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12520, 'Cantón Esmeraldas', 63, 880)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12521, 'Cantón Eloy Alfaro', 63, 880)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12522, 'Cantón El Empalme', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12523, 'Cantón El Carmen', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12524, 'Cantón Daule', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12525, 'Cantón Cuenca', 63, 887)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12526, 'Cantón Cotacachi', 63, 877)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12527, 'Cantón Colta', 63, 883)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12528, 'Cantón Chunchi', 63, 883)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12529, 'Cantón Chone', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12530, 'Cantón Chinchipe', 63, 868)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12531, 'Cantón Chimbo', 63, 886)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12532, 'Cantón Chillanes', 63, 886)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12533, 'Cantón Celica', 63, 876)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12534, 'Cantón Cayambe', 63, 870)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12535, 'Cantón Catamayo', 63, 876)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12536, 'Cantón Cañar', 63, 885)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12537, 'Cantón Calvas', 63, 876)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12538, 'Cantón Bolívar', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12539, 'Cantón Biblián', 63, 885)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12540, 'Cantón Baños', 63, 869)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12541, 'Cantón Balzar', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12542, 'Cantón Babahoyo', 63, 875)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12543, 'Cantón Baba', 63, 875)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12544, 'Cantón Azogues', 63, 885)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12545, 'Cantón Arenillas', 63, 881)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12546, 'Cantón Archidona', 63, 872)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12547, 'Cantón Antonio Ante', 63, 877)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12548, 'Cantón Ambato', 63, 869)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12549, 'Cantón Alausí', 63, 883)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12550, 'Cantón Aguarico', 63, 889)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12551, 'Cantón San Fernando', 63, 887)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12552, 'Cantón Nabón', 63, 887)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12553, 'Cantón Valencia', 63, 875)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12554, 'Cantón Buena Fe', 63, 875)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12555, 'Cantón Chaco', 63, 872)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12556, 'Cantón Sigchos', 63, 882)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12557, 'Cumanda', 63, 883)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12558, 'Canton Bolivar', 63, 884)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12559, 'Canton Colimes', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12560, 'Canton Caluma', 63, 886)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12561, 'Canton Echeandia', 63, 886)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12562, 'Canton El Tambo', 63, 885)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12563, 'Canton Las Naves', 63, 886)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12564, 'Canton Pedro Vicente Maldonado', 63, 870)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12565, 'Canton Pedernales', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12566, 'San Miguel de Urcuqui Canton', 63, 877)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12567, 'Rio Verde', 63, 880)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12568, 'Loreto Canton', 63, 889)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12569, 'Pallatanga', 63, 883)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12570, 'Penipe', 63, 883)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12571, 'Atahualpa', 63, 881)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12572, 'Chilla', 63, 881)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12573, 'Marcabelí', 63, 881)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12574, 'Alfredo Baquerizo Moreno (Juján)', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12575, 'Balao', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12576, 'Atacames', 63, 880)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12577, 'Durán', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12578, 'El Triunfo', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12579, 'Palestina', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12580, 'Pedro Carbo', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12581, 'Santa Lucía', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12582, 'Coronel Marcelino Maridueña', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12583, 'Chaguarpamba', 63, 876)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12584, 'Lomas De Sargentillo', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12585, 'Playas', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12586, 'Simón Bolívar', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12587, 'Nobol', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12588, 'General Antonio Elizalde', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12589, 'Isidro Ayora', 63, 878)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12590, 'Chordeleg', 63, 887)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12591, 'El Pan', 63, 887)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12592, 'Sevilla De Oro', 63, 887)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12593, 'Guachapala', 63, 887)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12594, 'Las Lajas', 63, 881)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12595, 'Mocache', 63, 875)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12596, 'Huamboya', 63, 873)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12597, 'Pichincha', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12598, 'Cascales', 63, 888)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12599, 'Cuyabeno', 63, 888)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12600, 'La Joya De Los Sachas', 63, 889)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12601, 'Tosagua', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12602, 'Olmedo', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12603, 'Puerto López', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12604, 'Jama', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12605, 'Jaramijó', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12606, 'San Juan Bosco', 63, 873)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12607, 'Taisha', 63, 873)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12608, 'Logroño', 63, 873)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12609, 'Carlos Julio Arosemena Tola', 63, 872)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12610, 'Arajuno', 63, 871)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12611, 'San Miguel De Los Bancos', 63, 870)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12612, 'Puerto Quito', 63, 870)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12613, 'Cevallos', 63, 869)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12614, 'Mocha', 63, 869)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12615, 'Tisaleo', 63, 869)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12616, 'Nangaritza', 63, 868)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12617, 'El Pangui', 63, 868)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12618, 'Centinela Del Cóndor', 63, 868)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12619, 'Palanda', 63, 868)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12620, 'Gonzalo Pizarro', 63, 888)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12621, 'Zapotillo', 63, 876)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12622, 'Pindal', 63, 876)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12623, 'Quilanga', 63, 876)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12624, 'Olmedo', 63, 876)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12625, 'Montalvo', 63, 875)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12626, 'Palenque', 63, 875)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12627, 'Flavio Alfaro', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12628, 'Pucara', 63, 887)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12629, 'La Troncal', 63, 885)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12630, 'Déleg', 63, 885)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12631, 'Suscal', 63, 885)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12632, 'San Pedro De Huaca', 63, 884)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12633, 'La Maná', 63, 882)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12634, 'Saquisilí', 63, 882)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12635, 'Chambo', 63, 883)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12636, 'Balsas', 63, 881)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12637, 'Oña', 63, 887)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12638, 'Shushufindi', 63, 888)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12639, 'Camilo Ponce Enríquez', 63, 887)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12640, 'Quinsaloma', 63, 875)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12641, 'San Vicente', 63, 874)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12642, 'Tiwintza', 63, 873)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12643, 'Santa Clara', 63, 871)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12644, 'Paquisha', 63, 868)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12645, 'La Libertad', 63, 891)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12646, 'Pablo Sexto', 63, 873)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12647, 'La Concordia', 63, 890)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12648, 'Kohtla-Järve linn', 64, 904)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12649, 'Narva linn', 64, 904)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12650, 'Pärnu linn', 64, 899)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12651, 'Sillamäe linn', 64, 904)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12652, 'Tallinn', 64, 906)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12653, 'Haapsalu linn', 64, 901)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12654, 'Haljala vald', 64, 900)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12655, 'Harku vald', 64, 906)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12656, 'Häädemeeste vald', 64, 899)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12657, 'Jõelähtme vald', 64, 906)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12658, 'Jõgeva vald', 64, 902)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12659, 'Jõhvi vald', 64, 904)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12660, 'Kadrina vald', 64, 900)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12661, 'Kambja vald', 64, 895)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12662, 'Kanepi vald', 64, 898)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12663, 'Kehtna vald', 64, 897)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12664, 'Keila linn', 64, 906)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12665, 'Kihnu vald', 64, 899)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12666, 'Kiili vald', 64, 906)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12667, 'Kohila vald', 64, 897)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12668, 'Kose vald', 64, 906)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12669, 'Loksa linn', 64, 906)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12670, 'Luunja vald', 64, 895)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12671, 'Lüganuse vald', 64, 904)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12672, 'Maardu linn', 64, 906)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12673, 'Muhu vald', 64, 896)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12674, 'Märjamaa vald', 64, 897)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12675, 'Narva-Jõesuu linn', 64, 904)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12676, 'Nõo vald', 64, 895)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12677, 'Paide linn', 64, 903)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12678, 'Peipsiääre vald', 64, 895)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12679, 'Põltsamaa vald', 64, 902)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12680, 'Otepää vald', 64, 894)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12681, 'Tapa vald', 64, 900)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12682, 'Tartu vald', 64, 895)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12683, 'Tori vald', 64, 899)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12684, 'Rapla vald', 64, 897)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12685, 'Ruhnu vald', 64, 896)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12686, 'Rõuge vald', 64, 892)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12687, 'Räpina vald', 64, 898)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12688, 'Saarde vald', 64, 899)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12689, 'Saku vald', 64, 906)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12690, 'Raasiku vald', 64, 906)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12691, 'Rae vald', 64, 906)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12692, 'Rakvere vald', 64, 900)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12693, 'Rakvere linn', 64, 900)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12694, 'Saue vald', 64, 906)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12695, 'Kuusalu vald', 64, 906)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12696, 'Tartu linn', 64, 895)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12697, 'Anija vald', 64, 906)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12698, 'Antsla vald', 64, 892)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12699, 'Viimsi vald', 64, 906)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12700, 'Põlva vald', 64, 898)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12701, 'Toila vald', 64, 904)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12702, 'Türi vald', 64, 903)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12703, 'Viljandi linn', 64, 893)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12704, 'Vinni vald', 64, 900)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12705, 'Viru-Nigula vald', 64, 900)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12706, 'Vormsi vald', 64, 901)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12707, 'Võru vald', 64, 892)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12708, 'Võru linn', 64, 892)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12709, 'Väike-Maarja vald', 64, 900)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12710, 'Viljandi vald', 64, 893)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12711, 'Lääne-Nigula vald', 64, 901)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12712, 'Mulgi vald', 64, 893)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12713, 'Valga vald', 64, 894)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12714, 'Setomaa vald', 64, 892)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12715, 'Hiiumaa vald', 64, 905)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12716, 'Elva vald', 64, 895)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12717, 'Saaremaa vald', 64, 896)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12718, 'Järva vald', 64, 903)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12719, 'Mustvee vald', 64, 902)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12720, 'Kastre vald', 64, 895)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12721, 'Tõrva vald', 64, 894)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12722, 'Alutaguse vald', 64, 904)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12723, 'Lääneranna vald', 64, 899)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12724, 'Lääne-Harju vald', 64, 906)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12725, 'Põhja-Sakala vald', 64, 893)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12726, 'Põhja-Pärnumaa vald', 64, 899)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12727, 'Markaz al Bājūr', 65, 924)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12728, 'Markaz Ziftá', 65, 928)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12729, 'Markaz ‘Unaybah', 65, 917)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12730, 'Markaz Ţanţā', 65, 928)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12731, 'Markaz Ţāmiyah', 65, 929)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12732, 'Markaz Sumusţā al Waqf', 65, 915)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12733, 'Markaz Sūhāj', 65, 907)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12734, 'Markaz Sīdī Sālim', 65, 911)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12735, 'Markaz Samālūţ', 65, 923)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12736, 'Markaz Rashīd', 65, 930)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12737, 'Markaz Quwaysinā', 65, 924)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12738, 'Markaz Quţūr', 65, 928)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12739, 'Markaz Qinā', 65, 909)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12740, 'Markaz al Qanţarah Gharb', 65, 926)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12741, 'Markaz Qalyūb', 65, 921)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12742, 'Markaz Qallīn', 65, 911)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12743, 'Markaz Naj‘ Ḩammādī', 65, 909)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12744, 'Markaz Mīt Ghamr', 65, 932)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12745, 'Markaz Minyā al Qamḩ', 65, 919)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12746, 'Markaz Maţrūḩ', 65, 910)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12747, 'Markaz Maţāy', 65, 923)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12748, 'Markaz Maryūţ', 65, 927)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12749, 'Markaz Mallawī', 65, 923)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12750, 'Karmūs', 65, 927)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12751, 'Markaz Kafr ash Shaykh', 65, 911)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12752, 'Markaz Kafr ad Dawwār', 65, 930)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12753, 'Markaz Jirjā', 65, 907)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12754, 'Markaz Ītāy al Bārūd', 65, 930)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12755, 'Markaz Iţsā', 65, 929)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12756, 'Markaz Isnā', 65, 909)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12757, 'Markaz Imbābah', 65, 925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12758, 'Markaz Ihnāsiyā al Madīnah', 65, 915)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12759, 'Markaz Idfū', 65, 917)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12760, 'Markaz Ibshawāy', 65, 929)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12761, 'Markaz Hihyā', 65, 919)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12762, 'Markaz Ḩawsh ‘Īsá', 65, 930)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12763, 'Markaz Fuwwah', 65, 911)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12764, 'Markaz Fāriskūr', 65, 913)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12765, 'Markaz Diyarb Najm', 65, 919)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12766, 'Markaz Disūq', 65, 911)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12767, 'Markaz Dishnā', 65, 909)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12768, 'Markaz Dikirnis', 65, 932)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12769, 'Markaz Dayrūţ', 65, 916)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12770, 'Markaz Dayr Mawās', 65, 923)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12771, 'Markaz Damanhūr', 65, 930)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12772, 'Markaz Būsh', 65, 915)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12773, 'Markaz Biyalā', 65, 911)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12774, 'Markaz Bilqās', 65, 932)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12775, 'Markaz Bilbays', 65, 919)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12776, 'Markaz Bibā', 65, 915)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12777, 'Markaz Basyūn', 65, 928)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12778, 'Markaz Banī Suwayf', 65, 915)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12779, 'Markaz Banī Mazār', 65, 923)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12780, 'Markaz Banhā', 65, 921)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12781, 'Markaz az Zaqāzīq', 65, 919)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12782, 'Markaz Awlād Ţawq Sharq', 65, 907)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12783, 'Markaz Asyūţ', 65, 916)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12784, 'Markaz Aswān', 65, 917)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12785, 'Markaz as Sanţah', 65, 928)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12786, 'Markaz aş Şaff', 65, 922)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12787, 'Markaz ash Shuhadā’', 65, 924)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12788, 'Markaz Ashmūn', 65, 924)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12789, 'Markaz Armant', 65, 909)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12790, 'Markaz al Wāsiţá', 65, 915)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12791, 'Markaz al Wāḩāt al Khārijah', 65, 920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12792, 'Markaz al Wāḩāt al Baḩrīyah', 65, 925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12793, 'Markaz al Wāḩāt ad Dākhilah', 65, 920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12794, 'Markaz al Uqşur', 65, 933)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12795, 'Markaz al Qūşīyah', 65, 916)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12796, 'Markaz al Minyā', 65, 923)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12797, 'Markaz al Munsha’ah', 65, 907)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12798, 'Markaz al Marāghah', 65, 907)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12799, 'Markaz al Manzilah', 65, 932)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12800, 'Markaz al Manşūrah', 65, 932)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12801, 'Markaz al Maḩmūdīyah', 65, 930)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12802, 'Markaz al Maḩallah al Kubrá', 65, 928)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12803, 'Markaz al Khānkah', 65, 922)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12804, 'Markaz al Jīzah', 65, 925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12805, 'Markaz al ‘Idwah', 65, 923)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12806, 'Markaz al Ḩusaynīyah', 65, 919)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12807, 'Markaz al Fayyūm', 65, 929)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12808, 'Markaz al Fashn', 65, 915)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12809, 'Markaz al Burullus', 65, 911)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12810, 'Markaz al Balyanā', 65, 907)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12811, 'Markaz al Badrashayn', 65, 925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12812, 'Markaz al Badārī', 65, 916)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12813, 'Markaz al ‘Ayyāţ', 65, 925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12814, 'Al Ajami', 65, 927)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12815, 'Markaz Akhmīm', 65, 907)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12816, 'Markaz Ajā', 65, 932)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12817, 'Markaz ad Dilinjāt', 65, 930)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12818, 'Markaz Abū Tisht', 65, 909)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12819, 'Markaz Abū Tīj', 65, 916)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12820, 'Markaz Qurqāş', 65, 923)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12821, 'Markaz Abū Kabīr', 65, 919)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12822, 'Markaz Abū Ḩummuş', 65, 930)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12823, 'Markaz Abū Ḩammād', 65, 919)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12824, 'Markaz Abū al Maţāmīr', 65, 930)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12825, 'Mostorod', 65, 921)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12826, 'Markaz al Ḩāmūl', 65, 911)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12827, 'Bahr El Bakar', 65, 919)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12828, 'Bahr El Bakr', 65, 932)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12829, 'Mostafa El Serwy', 65, 922)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12830, 'Mit Yazid', 65, 932)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12831, 'Kafr El Sheikh', 65, 911)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12832, 'Markaz Kafr Shukr', 65, 921)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12833, 'Markaz Awsīm', 65, 925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12834, 'Borg El Arab', 65, 927)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12835, 'Markaz Minyat An Naşr', 65, 932)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12836, 'Markaz az Zarqā', 65, 913)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12837, 'Markaz Sammanūd', 65, 928)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12838, 'Markaz Kafr Sa‘d', 65, 913)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12839, 'Markaz al ‘Arīsh', 65, 908)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12840, 'Markaz ash Shaykh Zuwayd', 65, 908)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12841, 'Markaz Rafaḩ', 65, 908)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12842, 'Markaz Bi’r al ‘Abd', 65, 908)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12843, 'Walikale', 65, 925)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12844, 'Markaz Aţfīḩ', 65, 912)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12845, 'Markaz Birkat as Sab‘', 65, 924)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12846, 'Markaz Juhaynah al Gharbīyah', 65, 907)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12847, 'Markaz Dār as Salām', 65, 907)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12848, 'Markaz ar Riyāḑ', 65, 911)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12849, 'Markaz Muţūbas', 65, 911)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12850, 'Markaz al Fatḩ', 65, 916)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12851, 'Markaz al Ghanāyim', 65, 916)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12852, 'Markaz as Sāḩil', 65, 916)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12853, 'Markaz Nāşir', 65, 915)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12854, 'Markaz at Tall al Kabīr', 65, 919)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12855, 'Markaz al Ismā‘īlīyah', 65, 926)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12856, 'Markaz al Qanţarah Sharq', 65, 926)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12857, 'Markaz Fāyid', 65, 926)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12858, 'Markaz Idkū', 65, 930)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12859, 'Markaz ar Raḩmānīyah', 65, 930)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12860, 'Al Marj', 65, 922)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12861, 'Al Muntazah', 65, 927)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12862, 'Shurtah al-Farafirah', 65, 920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12863, 'Baris Shurtah', 65, 920)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12864, 'Af''abet', 67, 939)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12865, 'Dghe', 67, 937)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12866, 'Berikh', 67, 938)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12867, 'Ghala Nefhi', 67, 938)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12868, 'Serejaka', 67, 938)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12869, 'South Eastern Subregion', 67, 938)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12870, 'South Western Subregion', 67, 938)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12871, 'Adi Tekelezan Subregion', 67, 934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12872, 'Asmat', 67, 934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12873, 'Elabered Subregion', 67, 934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12874, 'North Eastern Subregion', 67, 938)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12875, 'Hagaz Subregion', 67, 934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12876, 'Halhal Subregion', 67, 934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12877, 'Habero Subregion', 67, 934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12878, 'Kerkebet', 67, 934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12879, 'Keren Subregion', 67, 934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12880, 'Sela Subregion', 67, 934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12881, 'Akurdet Subregion', 67, 937)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12882, 'Barentu Subregion', 67, 937)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12883, 'Dahlak Subregion', 67, 939)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12884, 'Ghinda Subregion', 67, 939)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12885, 'Massawa Subregion', 67, 939)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12886, 'Nakfa Subregion', 67, 939)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12887, 'Dekemhare Subregion', 67, 935)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12888, 'Mendefera Subregion', 67, 935)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12889, 'Senafe Subregion', 67, 935)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12890, 'Southern Denkalya Subregion', 67, 936)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12891, 'Mai-Mne Subregion', 67, 935)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12892, 'Logo Anseba', 67, 937)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12893, 'Teseney Subregion', 67, 937)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12894, 'Haykota Subregion', 67, 937)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12895, 'Gogne Subregion', 67, 937)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12896, 'Mogolo Subregion', 67, 937)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12897, 'Mensura Subregion', 67, 937)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12898, 'Shambuko Subregion', 67, 937)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12899, 'Areza Subregion', 67, 935)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12900, 'Central Denkalya Subregion', 67, 936)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12901, 'Geleb Subregion', 67, 934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12902, 'Ghelaelo', 67, 939)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12903, 'Foro Subregion', 67, 939)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12904, 'Adi Keyh', 67, 935)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12905, 'Adi Quala', 67, 935)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12906, 'Adobha', 67, 939)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12907, 'Araeta', 67, 936)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12908, 'Dbarwa', 67, 935)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12909, 'Hamelmalo', 67, 934)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12910, 'Karura', 67, 939)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12911, 'Emni Haili', 67, 935)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12912, 'Forto', 67, 937)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12913, 'Lalay Gash', 67, 937)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12914, 'May Aini', 67, 935)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12915, 'Shieb', 67, 939)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12916, 'Tsorona', 67, 935)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12917, 'Asseb', 67, 936)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12918, 'Molqi', 67, 937)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12919, 'Omhajer', 67, 937)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12920, 'Segeneity', 67, 935)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12921, 'Semienawi Mibrak', 67, 938)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12922, 'Província de València', 68, 947)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12923, 'Province of Toledo', 68, 945)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12924, 'Provincia de Sevilla', 68, 943)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12925, 'Provincia de Santa Cruz de Tenerife', 68, 944)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12926, 'Provincia de Málaga', 68, 943)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12927, 'Provincia de Las Palmas', 68, 944)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12928, 'Provincia de Jaén', 68, 943)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12929, 'Provincia de Huelva', 68, 943)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12930, 'Provincia de Granada', 68, 943)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12931, 'Provincia de Cuenca', 68, 945)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12932, 'Province of Córdoba', 68, 943)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12933, 'Provincia de Ciudad Real', 68, 945)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12934, 'Provincia de Cádiz', 68, 943)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12935, 'Provincia de Cáceres', 68, 946)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12936, 'Provincia de Badajoz', 68, 946)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12937, 'Almería', 68, 943)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12938, 'Provincia de Alicante', 68, 947)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12939, 'Provincia de Albacete', 68, 945)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12940, 'Provincia de Zaragoza', 68, 953)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12941, 'Provincia de Zamora', 68, 954)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12942, 'Bizkaia', 68, 957)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12943, 'Provincia de Valladolid', 68, 954)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12944, 'Provincia de Teruel', 68, 953)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12945, 'Província de Tarragona', 68, 955)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12946, 'Provincia de Soria', 68, 954)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12947, 'Provincia de Segovia', 68, 954)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12948, 'Provincia de Cantabria', 68, 952)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12949, 'Provincia de Salamanca', 68, 954)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12950, 'Provincia de Pontevedra', 68, 956)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12951, 'Provincia de Palencia', 68, 954)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12952, 'Provincia de Ourense', 68, 956)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12953, 'Provincia de Lugo', 68, 956)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12954, 'Provincia de León', 68, 954)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12955, 'Provincia da Coruña', 68, 956)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12956, 'Provincia de Huesca', 68, 953)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12957, 'Gipuzkoa', 68, 957)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12958, 'Provincia de Guadalajara', 68, 945)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12959, 'Província de Castelló', 68, 947)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12960, 'Provincia de Burgos', 68, 954)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12961, 'Província de Barcelona', 68, 955)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12962, 'Provincia de Ávila', 68, 954)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12963, 'Araba / Álava', 68, 957)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12964, 'Província de Girona', 68, 955)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12965, 'Província de Lleida', 68, 955)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12966, 'Provincia de La Rioja', 68, 951)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12967, 'Provincia de Madrid', 68, 950)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12968, 'Murcia', 68, 940)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12969, 'Provincia de Navarra', 68, 949)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12970, 'Province of Asturias', 68, 948)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12971, 'Illes Balears', 68, 942)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12972, 'Ceuta', 68, 941)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12973, 'Melilla', 68, 958)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12974, 'Wolayita Zone', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12975, 'Metekel Āwraja', 69, 962)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12976, 'Bench Maji Zone', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12977, 'Hadiya Zone', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12978, 'Kaffa Zone', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12979, 'Jimma Zone', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12980, 'Dire Dawa Zone', 69, 967)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12981, 'Guraghe Zone', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12982, 'Asosa', 69, 962)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12983, 'Arsi Zone', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12984, 'Pemba District', 69, 960)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12985, 'Misraq Shewa', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12986, 'Southern Tigray Zone', 69, 968)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12987, 'Alaba Special Wereda', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12988, 'Kembata Alaba Tembaro Zone', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12989, 'Yem', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12990, 'North Shewa Zone', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12991, 'West Shewa Zone', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12992, 'South West Shewa', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12993, 'East Shewa Zone', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12994, 'East Wellega Zone', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12995, 'West Gojjam Zone', 69, 961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12996, 'East Gojjam Zone', 69, 961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12997, 'Awi', 69, 961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12998, 'North Gondar Zone', 69, 961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (12999, 'Siltie Zone', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13000, 'Dawuro', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13001, 'Gedeo Zone', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13002, 'South Omo', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13003, 'Borena Zone', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13004, 'South Wollo Zone', 69, 961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13005, 'Illubabor Zone', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13006, 'West Wellega Zone', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13007, 'Administrative Zone 1', 69, 964)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13008, 'Administrative Zone 3', 69, 960)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13009, 'West Harerghe Zone', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13010, 'East Harerghe Zone', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13011, 'Shinile Zone', 69, 967)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13012, 'Addis Ababa Zone 1', 69, 959)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13013, 'Addis Ababa Zone 2', 69, 959)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13014, 'Addis Ababa Zone 3', 69, 959)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13015, 'Addis Ababa Zone 6', 69, 959)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13016, 'Bale', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13017, 'South Gondar Zone', 69, 961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13018, 'North Wollo Zone', 69, 961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13019, 'Central Tigray Zone', 69, 968)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13020, 'Eastern Tigray Zone', 69, 968)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13021, 'North Western Tigray', 69, 968)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13022, 'Metekel', 69, 962)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13023, 'North Shewa Zone', 69, 961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13024, 'Wag Hemra Zone', 69, 961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13025, 'Addis Ababa Zone 5', 69, 959)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13026, 'Keficho Shekicho Zone', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13027, 'Sidama Zone', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13028, 'Guji Zone', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13029, 'Gimbichu', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13030, 'Administrative Zone 1', 69, 960)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13031, 'Mekelle', 69, 968)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13032, 'Administrative Zone 2', 69, 960)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13033, 'Administrative Zone 4', 69, 960)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13034, 'Administrative Zone 5', 69, 960)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13035, 'Liben zone', 69, 967)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13036, 'Mi''irabawi Zone', 69, 968)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13037, 'Gamo Gofa Zone', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13038, 'Oromia Zone', 69, 961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13039, 'Afder Zone', 69, 967)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13040, 'Basketo Special Woreda', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13041, 'Amaro Special Woreda', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13042, 'Dirashe Special Woreda', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13043, 'Konso Special Woreda', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13044, 'Burji Special Woreda', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13045, 'Kamashi Zone', 69, 962)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13046, 'Dollo', 69, 967)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13047, 'South Omo Zone', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13048, 'Gode Zone', 69, 967)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13049, 'Degehabur Zone', 69, 967)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13050, 'Fafan', 69, 967)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13051, 'Southeastern Tigray Zone', 69, 968)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13052, 'Western', 69, 968)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13053, 'North Gonder', 69, 961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13054, 'Wag Himra', 69, 961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13055, 'West Gojam', 69, 961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13056, 'East Gojam', 69, 961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13057, 'South Gonder', 69, 961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13058, 'Oromiya', 69, 961)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13059, 'Kemashi', 69, 962)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13060, 'Nuer Zone', 69, 964)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13061, 'Anywaa Zone', 69, 964)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13062, 'Majang Zone', 69, 964)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13063, 'Sheka Zone', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13064, 'Konta', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13065, 'Dawro', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13066, 'Segen Peoples', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13067, 'Gedio', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13068, 'Selti', 69, 969)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13069, 'Kellem Wellega', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13070, 'Ilubabor', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13071, 'Horo Guduru', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13072, 'West Harerge', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13073, 'East Harerge', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13074, 'Siti', 69, 967)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13075, 'Nogob', 69, 967)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13076, 'Doolo', 69, 967)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13077, 'Korahe', 69, 967)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13078, 'Shabelle', 69, 967)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13079, 'Southwest Shuwa', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13080, 'Harari', 69, 965)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13081, 'Kolfe Keranyo', 69, 959)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13082, 'Akaki Kaliti', 69, 959)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13083, 'Nefas Silk Lafto', 69, 959)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13084, 'Bole', 69, 959)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13085, 'Yeka', 69, 959)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13086, 'Kirkos', 69, 959)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13087, 'Gulele', 69, 959)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13088, 'Arada', 69, 959)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13089, 'Addis Ketema', 69, 959)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13090, 'Lideta', 69, 959)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13091, 'West Arsi', 69, 966)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13092, 'Sydösterbotten', 70, 974)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13093, 'Åboland-Turunmaa', 70, 984)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13094, 'Salo', 70, 984)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13095, 'Savonlinna', 70, 979)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13096, 'Pieksämäki', 70, 979)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13097, 'Ylä-Savo', 70, 978)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13098, 'Kuopio', 70, 978)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13099, 'Koillis-Savo', 70, 978)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13100, 'Varkaus', 70, 978)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13101, 'Sisä-Savo', 70, 978)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13102, 'Joensuu', 70, 977)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13103, 'Keski-Karjala', 70, 977)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13104, 'Pielisen Karjala', 70, 977)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13105, 'Jyväskylä', 70, 976)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13106, 'Joutsa', 70, 976)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13107, 'Keuruu', 70, 976)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13108, 'Jämsä', 70, 976)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13109, 'Äänekoski', 70, 976)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13110, 'Saarijärvi-Viitasaari', 70, 976)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13111, 'Suupohja', 70, 975)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13112, 'Seinäjoki', 70, 975)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13113, 'Kuusiokunnat', 70, 975)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13114, 'Järviseutu', 70, 975)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13115, 'Vaasa', 70, 974)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13116, 'Jakobstadsregionen', 70, 974)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13117, 'Kaustinen', 70, 973)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13118, 'Kokkola', 70, 973)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13119, 'Oulu', 70, 972)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13120, 'Oulunkaari', 70, 972)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13121, 'Turku', 70, 984)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13122, 'Vakka-Suomi', 70, 984)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13123, 'Loimaa', 70, 984)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13124, 'Helsinki', 70, 985)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13125, 'Rauma', 70, 987)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13126, 'Pori', 70, 987)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13127, 'Pohjois-Satakunta', 70, 987)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13128, 'Hämeenlinna', 70, 983)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13129, 'Riihimäki', 70, 983)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13130, 'Forssa', 70, 983)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13131, 'Luoteis-Pirkanmaa', 70, 982)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13132, 'Etelä-Pirkanmaa', 70, 982)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13133, 'Tampere', 70, 982)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13134, 'Lounais-Pirkanmaa', 70, 982)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13135, 'Ylä-Pirkanmaa', 70, 982)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13136, 'Lahti', 70, 986)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13137, 'Kouvola', 70, 981)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13138, 'Kotka-Hamina', 70, 981)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13139, 'Lappeenranta', 70, 980)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13140, 'Imatra', 70, 980)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13141, 'Mikkeli', 70, 979)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13142, 'Raaseporin', 70, 985)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13143, 'Porvoo', 70, 985)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13144, 'Loviisa', 70, 985)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13145, 'Raahe', 70, 972)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13146, 'Haapavesi-Siikalatva', 70, 972)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13147, 'Nivala-Haapajärvi', 70, 972)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13148, 'Ylivieska', 70, 972)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13149, 'Koillismaa', 70, 972)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13150, 'Kehys-Kainuu', 70, 971)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13151, 'Kajaani', 70, 971)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13152, 'Rovaniemi', 70, 970)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13153, 'Kemi-Tornio', 70, 970)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13154, 'Torniolaakso', 70, 970)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13155, 'Itä-Lappi', 70, 970)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13156, 'Tunturi-Lappi', 70, 970)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13157, 'Pohjois-Lappi', 70, 970)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13158, 'Cakaudrove Province', 71, 989)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13159, 'Tailevu Province', 71, 990)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13160, 'Serua Province', 71, 990)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13161, 'Rewa Province', 71, 990)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13162, 'Ra Province', 71, 988)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13163, 'Nandronga and Navosa Province', 71, 988)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13164, 'Namosi Province', 71, 990)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13165, 'Naitasiri Province', 71, 990)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13166, 'Bua Province', 71, 989)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13167, 'Ba Province', 71, 988)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13168, 'Macuata Province', 71, 989)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13169, 'Lomaiviti Province', 71, 991)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13170, 'Lau Province', 71, 991)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13171, 'Rotuma', 71, 992)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13172, 'Kadavu Province', 71, 991)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13173, 'Kapingamarangi Municipality', 73, 994)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13174, 'Kitti Municipality', 73, 994)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13175, 'Kolonia Municipality', 73, 994)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13176, 'Madolenihm Municipality', 73, 994)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13177, 'Mokil Municipality', 73, 994)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13178, 'Nett Municipality', 73, 994)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13179, 'Sapwuahfik Municipality', 73, 994)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13180, 'Nukuoro Municipality', 73, 994)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13181, 'Oroluk Municipality', 73, 994)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13182, 'Pingelap Municipality', 73, 994)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13183, 'Sokehs Municipality', 73, 994)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13184, 'U Municipality', 73, 994)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13185, 'Lelu Municipality', 73, 995)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13186, 'Malem Municipality', 73, 995)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13187, 'Tafunsak Municipality', 73, 995)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13188, 'Utwe Municipality', 73, 995)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13189, 'Dalipebinaw Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13190, 'Eauripik Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13191, 'Elato Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13192, 'Fais Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13193, 'Fanif Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13194, 'Faraulep Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13195, 'Gaferut Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13196, 'Gagil Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13197, 'Gilman Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13198, 'Ifalik Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13199, 'Kanifay Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13200, 'Lamotrek Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13201, 'Maap Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13202, 'Ngulu Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13203, 'Rull Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13204, 'Rumung Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13205, 'Satawal Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13206, 'Sorol Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13207, 'Tomil Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13208, 'Ulithi Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13209, 'Weloy Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13210, 'Woleai Municipality', 73, 993)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13211, 'Eot Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13212, 'Ettal Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13213, 'Fananu Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13214, 'Fanapanges Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13215, 'Fefen Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13216, 'Houk Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13217, 'Kuttu Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13218, 'Losap Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13219, 'Lekinioch Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13220, 'Makur Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13221, 'Moch Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13222, 'Murilo Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13223, 'Nema Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13224, 'Namoluk Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13225, 'Nomwin Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13226, 'Oneop Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13227, 'Onou Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13228, 'Onoun Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13229, 'Parem Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13230, 'Piherarh Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13231, 'Piis-Emwar Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13232, 'Pollap Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13233, 'Polowat Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13234, 'Ramanum Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13235, 'Ruo Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13236, 'Satowan Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13237, 'Ta Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13238, 'Tamatam Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13239, 'Tolensom Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13240, 'Tonoas Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13241, 'Siis Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13242, 'Udot-Fonuweisom Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13243, 'Uman-Fonuweisom Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13244, 'Unanu Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13245, 'Weno Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13246, 'Fonoton Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13247, 'Paata-Tupunion Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13248, 'Piis-Panewu Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13249, 'Wonei Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13250, 'Pwene Municipality', 73, 996)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13251, 'Viðareiði', 74, 1001)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13252, 'Vestmanna', 74, 999)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13253, 'Vágur', 74, 998)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13254, 'Tórshavn', 74, 999)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13255, 'Sunnbøur', 74, 998)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13256, 'Sørvágur', 74, 997)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13257, 'Skúvoy', 74, 1000)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13258, 'Skopun', 74, 1000)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13259, 'Skálavík', 74, 1000)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13260, 'Sandur', 74, 1000)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13261, 'Runavík', 74, 1002)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13262, 'Porkeri', 74, 998)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13263, 'Nes', 74, 1002)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13264, 'Kvívík', 74, 999)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13265, 'Kunoy', 74, 1001)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13266, 'Klaksvik', 74, 1001)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13267, 'Hvannasund', 74, 1001)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13268, 'Hvalbøur', 74, 998)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13269, 'Húsavík', 74, 1000)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13270, 'Hov', 74, 998)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13271, 'Fugloy', 74, 1001)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13272, 'Fuglafjørður', 74, 999)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13273, 'Fámjin', 74, 998)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13274, 'Eiði', 74, 1002)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13275, 'Eystur', 74, 1002)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13276, 'Vága Municipality', 74, 997)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13277, 'Tvøroyri', 74, 998)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13278, 'Sunda', 74, 999)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13279, 'Sjóvar', 74, 1002)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13280, 'Yvelines', 75, 1005)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13281, 'Yonne', 75, 1009)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13282, 'Vosges', 75, 1012)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13283, 'Paris', 75, 1005)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13284, 'Vienne', 75, 1010)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13285, 'Vendée', 75, 1004)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13286, 'Vaucluse', 75, 1003)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13287, 'Var', 75, 1003)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13288, 'Val d''Oise', 75, 1005)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13289, 'Val-de-Marne', 75, 1005)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13290, 'Tarn-et-Garonne', 75, 1013)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13291, 'Tarn', 75, 1013)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13292, 'Somme', 75, 1014)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13293, 'Seine-Saint-Denis', 75, 1005)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13294, 'Seine-Maritime', 75, 1011)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13295, 'Seine-et-Marne', 75, 1005)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13296, 'Savoie', 75, 1015)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13297, 'Sarthe', 75, 1004)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13298, 'Saône-et-Loire', 75, 1009)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13299, 'Pyrénées-Orientales', 75, 1013)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13300, 'Pyrénées-Atlantiques', 75, 1010)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13301, 'Puy-de-Dôme', 75, 1015)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13302, 'Rhône', 75, 1015)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13303, 'Pas-de-Calais', 75, 1014)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13304, 'Orne', 75, 1011)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13305, 'Oise', 75, 1014)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13306, 'North', 75, 1014)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13307, 'Nièvre', 75, 1009)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13308, 'Moselle', 75, 1012)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13309, 'Morbihan', 75, 1008)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13310, 'Meuse', 75, 1012)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13311, 'Meurthe et Moselle', 75, 1012)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13312, 'Mayenne', 75, 1004)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13313, 'Marne', 75, 1012)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13314, 'Manche', 75, 1011)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13315, 'Maine-et-Loire', 75, 1004)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13316, 'Lozère', 75, 1013)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13317, 'Lot-et-Garonne', 75, 1010)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13318, 'Lot', 75, 1013)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13319, 'Loir-et-Cher', 75, 1007)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13320, 'Loiret', 75, 1007)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13321, 'Loire-Atlantique', 75, 1004)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13322, 'Loire', 75, 1015)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13323, 'Landes', 75, 1010)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13324, 'Jura', 75, 1009)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13325, 'Isère', 75, 1015)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13326, 'Indre-et-Loire', 75, 1007)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13327, 'Indre', 75, 1007)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13328, 'Ille-et-Vilaine', 75, 1008)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13329, 'Hérault', 75, 1013)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13330, 'Hauts-de-Seine', 75, 1005)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13331, 'Haut-Rhin', 75, 1012)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13332, 'Haute-Vienne', 75, 1010)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13333, 'Hautes-Pyrénées', 75, 1013)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13334, 'Haute-Savoie', 75, 1015)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13335, 'Haute-Saône', 75, 1009)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13336, 'Hautes-Alpes', 75, 1003)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13337, 'Haute-Marne', 75, 1012)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13338, 'Haute-Loire', 75, 1015)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13339, 'Upper Garonne', 75, 1013)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13340, 'Upper Corsica', 75, 1006)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13341, 'Gironde', 75, 1010)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13342, 'Gers', 75, 1013)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13343, 'Gard', 75, 1013)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13344, 'Finistère', 75, 1008)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13345, 'Eure-et-Loir', 75, 1007)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13346, 'Eure', 75, 1011)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13347, 'Essonne', 75, 1005)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13348, 'Drôme', 75, 1015)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13349, 'Doubs', 75, 1009)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13350, 'Dordogne', 75, 1010)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13351, 'Deux-Sèvres', 75, 1010)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13352, 'Creuse', 75, 1010)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13353, 'Côtes-d''Armor', 75, 1008)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13354, 'Cote d''Or', 75, 1009)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13355, 'South Corsica', 75, 1006)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13356, 'Corrèze', 75, 1010)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13357, 'Cher', 75, 1007)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13358, 'Charente-Maritime', 75, 1010)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13359, 'Charente', 75, 1010)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13360, 'Cantal', 75, 1015)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13361, 'Calvados', 75, 1011)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13362, 'Bouches-du-Rhône', 75, 1003)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13363, 'Territoire de Belfort', 75, 1009)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13364, 'Bas-Rhin', 75, 1012)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13365, 'Aveyron', 75, 1013)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13366, 'Aude', 75, 1013)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13367, 'Aube', 75, 1012)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13368, 'Ariège', 75, 1013)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13369, 'Ardennes', 75, 1012)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13370, 'Ardèche', 75, 1015)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13371, 'Alpes-Maritimes', 75, 1003)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13372, 'Alpes-de-Haute-Provence', 75, 1003)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13373, 'Allier', 75, 1015)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13374, 'Aisne', 75, 1014)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13375, 'Ain', 75, 1015)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13376, 'Basse-Banio Department', 76, 1020)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13377, 'Mougoutsi Department', 76, 1020)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13378, 'Ndougou Department', 76, 1017)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13379, 'Douya-Onoye Department', 76, 1021)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13380, 'Ndolou Department', 76, 1021)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13381, 'Étimboué Department', 76, 1017)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13382, 'Plateaux Department', 76, 1023)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13383, 'Mpassa Department', 76, 1023)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13384, 'Haute-Banio Department', 76, 1020)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13385, 'Abanga-Bigné Department', 76, 1022)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13386, 'Lope Department', 76, 1019)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13387, 'Lolo Bouenguidi Department', 76, 1018)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13388, 'Ogoulou Department', 76, 1021)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13389, 'Bendje', 76, 1017)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13390, 'Tsamba-Magotsi Department', 76, 1021)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13391, 'Mouloundou Department', 76, 1018)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13392, 'Leboumbi-Leyou Department', 76, 1023)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13393, 'Dola Department', 76, 1021)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13394, 'Louetsi-Wano Department', 76, 1021)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13395, 'Commune of Libreville', 76, 1024)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13396, 'Komo-Mondah Department', 76, 1024)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13397, 'Komo Department', 76, 1024)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13398, 'Lekoko Department', 76, 1023)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13399, 'Ogooue et des Lacs', 76, 1022)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13400, 'Zadie', 76, 1019)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13401, 'Woleu', 76, 1016)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13402, 'Okano Department', 76, 1016)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13403, 'Ntem Department', 76, 1016)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13404, 'Douigni', 76, 1020)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13405, 'Ogooue-Letili', 76, 1023)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13406, 'Djouori-Agnili', 76, 1023)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13407, 'Louetsi-Bibaka', 76, 1021)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13408, 'Boumi-Louetsi', 76, 1021)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13409, 'Lombo-Bouenguidi', 76, 1018)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13410, 'Lekoni-Lekori', 76, 1023)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13411, 'Offoue-Onoye', 76, 1018)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13412, 'Djoue', 76, 1023)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13413, 'Bayi-Brikolo', 76, 1023)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13414, 'Mvoung', 76, 1019)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13415, 'Haut-Komo', 76, 1016)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13416, 'Haut-Ntem', 76, 1016)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13417, 'Mongo', 76, 1020)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13418, 'Lekabi-Lewolo', 76, 1023)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13419, 'Mougalaba', 76, 1021)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13420, 'Doutsila', 76, 1020)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13421, 'Sebe-Brikolo', 76, 1023)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13422, 'Noya', 76, 1024)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13423, 'Ivindo', 76, 1019)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13424, 'City of York', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13425, 'Wrexham', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13426, 'Worcestershire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13427, 'Royal Borough of Windsor and Maidenhead', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13428, 'Wiltshire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13429, 'West Sussex', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13430, 'West Lothian', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13431, 'Eilean Siar', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13432, 'Warwickshire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13433, 'Vale of Glamorgan', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13434, 'Borough of Thurrock', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13435, 'Surrey', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13436, 'Suffolk', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13437, 'Stirling', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13438, 'Staffordshire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13439, 'Somerset', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13440, 'Shetland Islands', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13441, 'Isles of Scilly', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13442, 'Shropshire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13443, 'District of Rutland', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13444, 'Renfrewshire', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13445, 'Sir Powys', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13446, 'Pembrokeshire', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13447, 'Oxfordshire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13448, 'Orkney Islands', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13449, 'Nottinghamshire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13450, 'North Yorkshire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13451, 'Northumberland', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13452, 'North Tyneside', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13453, 'Northamptonshire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13454, 'Norfolk', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13455, 'Moray', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13456, 'Midlothian', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13457, 'Lincolnshire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13458, 'Leicestershire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13459, 'Lancashire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13460, 'Isle of Wight', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13461, 'Inverclyde', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13462, 'Highland', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13463, 'Hertfordshire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13464, 'Herefordshire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13465, 'Hampshire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13466, 'Borough of Halton', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13467, 'Gwynedd', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13468, 'Greater London', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13469, 'Gloucestershire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13470, 'Gateshead', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13471, 'County of Flintshire', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13472, 'Fife', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13473, 'Essex', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13474, 'East Sussex', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13475, 'East Riding of Yorkshire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13476, 'East Lothian', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13477, 'County Durham', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13478, 'Dumfries and Galloway', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13479, 'Dorset', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13480, 'Devon', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13481, 'Derbyshire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13482, 'Denbighshire', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13483, 'Cumbria', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13484, 'Cornwall', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13485, 'Clackmannanshire', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13486, 'Carmarthenshire', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13487, 'County of Ceredigion', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13488, 'Cambridgeshire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13489, 'Buckinghamshire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13490, 'The Scottish Borders', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13491, 'Angus', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13492, 'Anglesey', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13493, 'Aberdeenshire', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13494, 'Barnsley', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13495, 'Bath and North East Somerset', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13496, 'City and Borough of Birmingham', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13497, 'Blackburn with Darwen', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13498, 'Blackpool', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13499, 'Borough of Bolton', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13500, 'Bracknell Forest', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13501, 'Bradford', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13502, 'Brighton and Hove', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13503, 'City of Bristol', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13504, 'Borough of Bury', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13505, 'Calderdale', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13506, 'Coventry', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13507, 'Darlington', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13508, 'Derby', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13509, 'Doncaster', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13510, 'Dudley', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13511, 'Hartlepool', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13512, 'Kent', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13513, 'City of Kingston upon Hull', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13514, 'Kirklees', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13515, 'Knowsley', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13516, 'City and Borough of Leeds', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13517, 'City of Leicester', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13518, 'Liverpool', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13519, 'Luton', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13520, 'Manchester', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13521, 'Medway', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13522, 'Middlesbrough', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13523, 'Milton Keynes', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13524, 'Newcastle upon Tyne', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13525, 'North East Lincolnshire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13526, 'North Lincolnshire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13527, 'North Somerset', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13528, 'Nottingham', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13529, 'Borough of Oldham', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13530, 'Peterborough', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13531, 'Plymouth', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13532, 'Portsmouth', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13533, 'Reading', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13534, 'Redcar and Cleveland', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13535, 'Borough of Rochdale', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13536, 'Rotherham', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13537, 'City and Borough of Salford', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13538, 'Sandwell', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13539, 'Sefton', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13540, 'Sheffield', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13541, 'Slough', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13542, 'Solihull', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13543, 'Southampton', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13544, 'Southend-on-Sea', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13545, 'South Gloucestershire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13546, 'South Tyneside', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13547, 'St. Helens', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13548, 'Borough of Stockport', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13549, 'Stockton-on-Tees', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13550, 'Stoke-on-Trent', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13551, 'Sunderland', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13552, 'Borough of Swindon', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13553, 'Borough of Tameside', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13554, 'Telford and Wrekin', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13555, 'Borough of Torbay', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13556, 'Trafford', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13557, 'City and Borough of Wakefield', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13558, 'Walsall', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13559, 'Warrington', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13560, 'West Berkshire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13561, 'Borough of Wigan', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13562, 'Metropolitan Borough of Wirral', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13563, 'Wokingham', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13564, 'Wolverhampton', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13565, 'City of Belfast', 77, 1027)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13566, 'Aberdeen City', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13567, 'Dundee City', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13568, 'East Ayrshire', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13569, 'East Dunbartonshire', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13570, 'East Renfrewshire', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13571, 'City of Edinburgh', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13572, 'Falkirk', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13573, 'Glasgow City', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13574, 'North Ayrshire', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13575, 'North Lanarkshire', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13576, 'Perth and Kinross', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13577, 'South Ayrshire', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13578, 'South Lanarkshire', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13579, 'West Dunbartonshire', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13580, 'Blaenau Gwent', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13581, 'Bridgend county borough', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13582, 'Caerphilly County Borough', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13583, 'Cardiff', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13584, 'Conwy', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13585, 'Merthyr Tydfil County Borough', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13586, 'Monmouthshire', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13587, 'Neath Port Talbot', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13588, 'Newport', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13589, 'Rhondda Cynon Taf', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13590, 'City and County of Swansea', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13591, 'Torfaen County Borough', 77, 1025)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13592, 'Argyll and Bute', 77, 1026)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13593, 'Bedford', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13594, 'Central Bedfordshire', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13595, 'Cheshire East', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13596, 'Cheshire West and Chester', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13597, 'Mid Ulster', 77, 1027)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13598, 'Antrim and Newtownabbey', 77, 1027)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13599, 'Causeway Coast and Glens', 77, 1027)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13600, 'Fermanagh and Omagh', 77, 1027)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13601, 'Lisburn and Castlereagh', 77, 1027)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13602, 'Derry City and Strabane', 77, 1027)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13603, 'Ards and North Down', 77, 1027)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13604, 'Armagh City Banbridge and Craigavon', 77, 1027)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13605, 'Newry Mourne and Down', 77, 1027)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13606, 'Mid and East Antrim', 77, 1027)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13607, 'Bournemouth, Christchurch and Poole Council', 77, 1028)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13608, 'Zugdidis Munitsip’alit’et’i', 79, 1045)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13609, 'Zest’aponis Munitsip’alit’et’i', 79, 1041)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13610, 'Zavodskoy Rayon', 79, 1044)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13611, 'Vanis Munitsip’alit’et’i', 79, 1041)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13612, 'Dedoplists’q’aros Munitsip’alit’et’i', 79, 1039)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13613, 'Ts’alk’is Munitsip’alit’et’i', 79, 1038)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13614, 'Ts’alenjikhis Munitsip’alit’et’i', 79, 1045)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13615, 'Tsageris Munitsip’alit’et’i', 79, 1044)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13616, 'Tianetis Munitsip’alit’et’i', 79, 1043)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13617, 'Tetrits’q’alos Munitsip’alit’et’i', 79, 1038)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13618, 'Terjolis Munitsip’alit’et’i', 79, 1041)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13619, 'Sukhumi District', 79, 1047)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13620, 'Sighnaghis Munitsip’alit’et’i', 79, 1039)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13621, 'Senakis Raioni', 79, 1045)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13622, 'Samtredia', 79, 1041)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13623, 'Sagarejos Munitsip’alit’et’i', 79, 1039)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13624, 'Pervomayskiy Rayon', 79, 1044)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13625, 'Ozurget’is Raioni', 79, 1040)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13626, 'Ordzhonikidzevskiy Rayon', 79, 1044)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13627, 'Onis Munitsip’alit’et’i', 79, 1044)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13628, 'Oktyabr''skiy Rayon', 79, 1044)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13629, 'Ochamchira District', 79, 1047)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13630, 'Mtskhetis Munitsip’alit’et’i', 79, 1043)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13631, 'Mest’iis Munitsip’alit’et’i', 79, 1045)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13632, 'Baghdatis Munitsip’alit’et’i', 79, 1041)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13633, 'Mart’vilis Munitsip’alit’et’i', 79, 1045)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13634, 'Marneulis Munitsip’alit’et’i', 79, 1038)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13635, 'Lent’ekhis Munitsip’alit’et’i', 79, 1044)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13636, 'Akhalgoris Munitsip’alit’et’i', 79, 1043)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13637, 'Lanchkhutis Munitsip’alit’et’i', 79, 1040)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13638, 'Lagodekhi', 79, 1039)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13639, 'Q’varlis Munitsip’alit’et’i', 79, 1039)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13640, 'K’obulet’is Raioni', 79, 1037)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13641, 'Kirovskiy Rayon', 79, 1044)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13642, 'Khonis Munitsip’alit’et’i', 79, 1041)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13643, 'Khobis Munitsip’alit’et’i', 79, 1045)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13644, 'Khelvachauri Municipality', 79, 1037)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13645, 'Khashuris Raioni', 79, 1042)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13646, 'Kharagaulis Raioni', 79, 1041)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13647, 'Q’azbegis Munitsip’alit’et‘i', 79, 1043)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13648, 'Kaspis Raioni', 79, 1042)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13649, 'Kareli', 79, 1042)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13650, 'Kalininskiy Rayon', 79, 1044)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13651, 'Imeni Dvadtsati Shesti Komissarov Rayon', 79, 1044)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13652, 'Gurjaanis Munitsip’alit’et’i', 79, 1039)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13653, 'Gulripshi district', 79, 1047)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13654, 'Gudauta District', 79, 1047)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13655, 'Goris Munitsip’alit’et’i', 79, 1042)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13656, 'Gldanskiy Rayon', 79, 1036)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13657, 'Gardabnis Munitsip’alit’et’i', 79, 1038)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13658, 'Gali District', 79, 1047)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13659, 'Javis Munitsip’alit’et’i', 79, 1042)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13660, 'Dushetis Munitsip’alit’et’i', 79, 1043)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13661, 'Dmanisis Munitsip’alit’et’i', 79, 1038)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13662, 'Chokhat’auris Munitsip’alit’et’i', 79, 1040)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13663, 'Chkhorots’q’us Munitsip’alit’et’i', 79, 1045)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13664, 'Borjomis Munitsip’alit’et’i', 79, 1046)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13665, 'Bolnisis Munitsip’alit’et’i', 79, 1038)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13666, 'Ninots’mindis Munitsip’alit’et’i', 79, 1046)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13667, 'Tsqaltubo', 79, 1041)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13668, 'Asp’indzis Munitsip’alit’et’i', 79, 1046)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13669, 'Ambrolauris Munitsip’alit’et’i', 79, 1044)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13670, 'Akhmet’is Munitsip’alit’et’i', 79, 1039)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13671, 'Akhaltsikhis Munitsip’alit’et’i', 79, 1046)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13672, 'Akhalkalakis Munitsip’alit’et’i', 79, 1046)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13673, 'Adigeni Municipality', 79, 1046)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13674, 'Abasha', 79, 1045)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13675, 'K’alak’i Chiat’ura', 79, 1041)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13676, 'Kalaki Kutaisi', 79, 1041)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13677, 'Kalaki Poti', 79, 1045)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13678, 'Kalaki Rustavi', 79, 1038)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13679, 'K’alak’i Tqibuli', 79, 1041)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13680, 'Khoni', 79, 1041)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13681, 'Baghdati', 79, 1041)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13682, 'Mestia', 79, 1045)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13683, 'Chkhorotsqu', 79, 1045)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13684, 'Martvili', 79, 1045)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13685, 'Dusheti', 79, 1043)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13686, 'Gardabani', 79, 1038)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13687, 'Marneuli', 79, 1038)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13688, 'Gurjaani', 79, 1039)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13689, 'Telavi', 79, 1039)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13690, 'Poti', 79, 1045)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13691, 'Ninotsminda', 79, 1046)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13692, 'Tetri Tsqaro', 79, 1038)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13693, 'Tsageri', 79, 1044)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13694, 'Lentekhi', 79, 1044)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13695, 'Akhalgori', 79, 1043)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13696, 'Kazbegi', 79, 1043)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13697, 'Qvareli', 79, 1039)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13698, 'Sagarejo', 79, 1039)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13699, 'Sighnaghi', 79, 1039)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13700, 'Dedoplis Tskaro', 79, 1039)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13701, 'Tsalka', 79, 1038)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13702, 'Sachkhere', 79, 1041)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13703, 'Mtskheta', 79, 1043)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13704, 'Tsalenjikha', 79, 1045)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13705, 'Chokhatauri', 79, 1040)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13706, 'Dmanisi', 79, 1038)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13707, 'Gagra District', 79, 1047)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13708, 'Kedis Munitsip’alit’et’i', 79, 1037)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13709, 'Kobuletis Munitsip’alit’et’i', 79, 1037)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13710, 'Batumi', 79, 1037)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13711, 'Tkvarcheli district', 79, 1047)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13712, 'Tskhinvali District', 79, 1042)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13713, 'Guyane', 80, 1048)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13714, 'Keta', 82, 1061)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13715, 'Nadowli', 82, 1062)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13716, 'Sissala West', 82, 1062)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13717, 'Wa East', 82, 1062)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13718, 'Wa West', 82, 1062)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13719, 'Sissala East', 82, 1062)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13720, 'Talensi-Nabdam', 82, 1063)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13721, 'Garu-Tempane', 82, 1063)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13722, 'North Builsa District', 82, 1063)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13723, 'Bongo District', 82, 1063)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13724, 'Nanumba South', 82, 1064)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13725, 'Nanumba North', 82, 1064)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13726, 'Sawla-Tuna-Kalba', 82, 1074)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13727, 'Bawku West', 82, 1063)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13728, 'Bunkpurugu-Yunyoo', 82, 1071)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13729, 'Lawra', 82, 1062)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13730, 'Jirapa', 82, 1062)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13731, 'Karaga', 82, 1064)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13732, 'Gushiegu', 82, 1064)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13733, 'Bole', 82, 1074)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13734, 'Kpandai', 82, 1064)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13735, 'East Gonja', 82, 1074)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13736, 'Nkwanta North', 82, 1070)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13737, 'Nkwanta South', 82, 1070)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13738, 'Pru', 82, 1073)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13739, 'Sene', 82, 1073)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13740, 'Krachi East', 82, 1070)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13741, 'Krachi West', 82, 1070)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13742, 'Nkoranza North District', 82, 1073)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13743, 'Assin South', 82, 1067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13744, 'Twifo Hemang Lower Denkyira', 82, 1067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13745, 'Sekyere Afram Plains', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13746, 'Ellembelle', 82, 1060)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13747, 'Atiwa', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13748, 'Saboba', 82, 1064)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13749, 'Chereponi', 82, 1071)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13750, 'Lambussie Karni', 82, 1062)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13751, 'Abura/Asebu/Kwamankese', 82, 1067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13752, 'Accra', 82, 1065)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13753, 'Adansi North', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13754, 'Adansi South', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13755, 'Adenta', 82, 1065)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13756, 'Afigya-Kwabre District', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13757, 'Agona East', 82, 1067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13758, 'Agona West', 82, 1067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13759, 'Ahafo Ano North', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13760, 'Ahafo Ano South', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13761, 'Ahanta West', 82, 1060)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13762, 'Ajumako/Enyan/Essiam', 82, 1067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13763, 'Akatsi District', 82, 1061)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13764, 'Akuapim North', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13765, 'Akuapim South', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13766, 'Akyemansa', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13767, 'Amansie Central', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13768, 'Amansie West', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13769, 'Aowin/Suaman', 82, 1075)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13770, 'Asante Akim North', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13771, 'Asante Akim South District', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13772, 'Ashaiman', 82, 1065)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13773, 'Asikuma/Odoben/Brakwa', 82, 1067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13774, 'Assin North', 82, 1067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13775, 'Asunafo North', 82, 1072)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13776, 'Asunafo South', 82, 1072)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13777, 'Asuogyaman', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13778, 'Asutifi', 82, 1072)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13779, 'Atwima Kwanwoma', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13780, 'Atwima Mponua', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13781, 'Atwima Nwabiagya', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13782, 'Awutu Senya', 82, 1067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13783, 'Bekwai', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13784, 'Berekum', 82, 1069)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13785, 'Bia', 82, 1075)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13786, 'Biakoye', 82, 1070)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13787, 'Bibiani/Ahwiaso/Bekwai', 82, 1075)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13788, 'Birim Central', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13789, 'Birim North', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13790, 'Birim South', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13791, 'Bolgatanga Municipal District', 82, 1063)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13792, 'Bosome Freho', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13793, 'Bosomtwe', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13794, 'Cape Coast', 82, 1067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13795, 'Central Gonja', 82, 1074)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13796, 'Shai Osudoku District', 82, 1065)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13797, 'Dormaa', 82, 1069)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13798, 'Dormaa East', 82, 1069)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13799, 'East Akim', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13800, 'East Mamprusi', 82, 1071)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13801, 'Effutu', 82, 1067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13802, 'Ejisu Juaben', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13803, 'Ejura Sekyedumase', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13804, 'Fanteakwa', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13805, 'Ga East', 82, 1065)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13806, 'Ga West', 82, 1065)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13807, 'Gomoa East', 82, 1067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13808, 'Gomoa West', 82, 1067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13809, 'Ho', 82, 1061)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13810, 'Hohoe', 82, 1061)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13811, 'Jaman North', 82, 1069)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13812, 'Jaman South', 82, 1069)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13813, 'Jasikan', 82, 1070)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13814, 'Jomoro', 82, 1060)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13815, 'Juaboso', 82, 1075)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13816, 'Kadjebi', 82, 1070)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13817, 'Kassena Nankana', 82, 1063)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13818, 'Ketu North District', 82, 1061)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13819, 'Ketu South District', 82, 1061)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13820, 'Kintampo North Municipal District', 82, 1073)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13821, 'Kintampo South District', 82, 1073)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13822, 'Komenda/Edina/Eguafo/Abirem', 82, 1067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13823, 'Kpando', 82, 1061)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13824, 'Kumasi', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13825, 'Kwabre District', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13826, 'Kwaebibirem', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13827, 'Kwahu East', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13828, 'Kwahu North', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13829, 'Kwahu West', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13830, 'Kwahu South', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13831, 'Ledzekuku-Krowor', 82, 1065)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13832, 'Lower Manya Krobo', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13833, 'Mampong', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13834, 'Mfatseman', 82, 1067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13835, 'Mpohor/Wassa East', 82, 1060)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13836, 'New Juaben', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13837, 'Nkoranza South', 82, 1073)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13838, 'North Tongu', 82, 1061)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13839, 'Nzema East', 82, 1060)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13840, 'Obuasi', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13841, 'Offinso North', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13842, 'Prestea-Huni Valley', 82, 1060)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13843, 'Savelugu/Nanton', 82, 1064)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13844, 'Secondi Takoradi', 82, 1060)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13845, 'Sefwi Akontobra', 82, 1075)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13846, 'Sefwi-Wiawso', 82, 1075)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13847, 'Sekyere Central', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13848, 'Sekyere East', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13849, 'Sekyere South', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13850, 'Shama', 82, 1060)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13851, 'South Dayi', 82, 1061)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13852, 'South Tongu District', 82, 1061)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13853, 'Suhum/Kraboa/Coaltar', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13854, 'Sunyani', 82, 1069)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13855, 'Sunyani West', 82, 1069)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13856, 'Tain', 82, 1069)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13857, 'Tamale', 82, 1064)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13858, 'Tano North', 82, 1072)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13859, 'Tano South', 82, 1072)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13860, 'Tarkwa Nsuaem', 82, 1060)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13861, 'Techiman Municipal District', 82, 1073)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13862, 'Tema Metropolitan District', 82, 1065)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13863, 'Tolon/Kumbungu', 82, 1064)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13864, 'Upper Denkyira East', 82, 1067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13865, 'Upper Denkyira West', 82, 1067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13866, 'Upper Manya Krobo', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13867, 'Wa', 82, 1062)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13868, 'Wassa Amenfi East', 82, 1060)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13869, 'Wassa Amenfi West', 82, 1060)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13870, 'Wenchi', 82, 1069)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13871, 'West Akim', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13872, 'West Gonja', 82, 1074)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13873, 'West Mamprusi', 82, 1071)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13874, 'Yendi', 82, 1064)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13875, 'Yilo Krobo', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13876, 'Zabzugu/Tatale', 82, 1064)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13877, 'Atebubu-Amantin District', 82, 1073)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13878, 'Kassena Nankana West', 82, 1063)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13879, 'Bawku Municipal District', 82, 1063)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13880, 'Binduri District', 82, 1063)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13881, 'Daffiama Bussie Issa District', 82, 1062)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13882, 'Mamprugo Moaduri District', 82, 1071)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13883, 'Ga South', 82, 1065)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13884, 'Ga Central Municipal Assembly', 82, 1065)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13885, 'Offinso Municipal District', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13886, 'North Dayi', 82, 1061)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13887, 'Wassa Amenfi Central', 82, 1060)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13888, 'Techiman Municipal', 82, 1073)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13889, 'North Gonja', 82, 1074)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13890, 'Kumbumgu', 82, 1064)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13891, 'Asante Akim Central Municipal', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13892, 'Sekyere Afram Plains North', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13893, 'Ada East', 82, 1065)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13894, 'Upper West Akim', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13895, 'La Dade Kotopon', 82, 1065)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13896, 'Asokore Mampong Municipal', 82, 1068)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13897, 'La Nkwantanang Madina', 82, 1065)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13898, 'Kpone Katamanso', 82, 1065)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13899, 'Twifo Ati-Morkwa', 82, 1067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13900, 'Ekumfi', 82, 1067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13901, 'Adaklu', 82, 1061)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13902, 'Ho West', 82, 1061)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13903, 'Afadzato South', 82, 1061)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13904, 'Krachi Nchumuru', 82, 1070)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13905, 'Ningo Prampram', 82, 1065)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13906, 'Nsawam Adoagyiri', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13907, 'Mpohor', 82, 1060)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13908, 'Suaman', 82, 1075)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13909, 'Bodi', 82, 1075)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13910, 'Bia East', 82, 1075)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13911, 'Asutifi South', 82, 1072)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13912, 'Dormaa West', 82, 1069)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13913, 'Banda', 82, 1069)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13914, 'Sene East', 82, 1073)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13915, 'Ayensuano', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13916, 'Denkyembour', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13917, 'Kwahu Afram Plains South', 82, 1066)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13918, 'Mion', 82, 1064)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13919, 'Awutu Senya East Municipal', 82, 1067)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13920, 'Sagnerigu', 82, 1064)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13921, 'Tatale', 82, 1064)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13922, 'Builsa South', 82, 1063)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13923, 'Nabdam', 82, 1063)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13924, 'Pusiga', 82, 1063)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13925, 'Nandom', 82, 1062)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13926, 'Ada West', 82, 1065)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13927, 'Akatsi South', 82, 1061)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13928, 'Central Tongu', 82, 1061)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13929, 'Agotime Ziope', 82, 1061)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13930, 'Qaqortoq Municipality', 84, 1076)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13931, 'Narsaq Municipality', 84, 1076)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13932, 'Nanortalik Municipality', 84, 1076)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13933, 'Wuli', 85, 1082)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13934, 'Upper Saloum', 85, 1084)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13935, 'Upper Niumi District', 85, 1083)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13936, 'Upper Baddibu', 85, 1083)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13937, 'Sandu', 85, 1082)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13938, 'Sami District', 85, 1084)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13939, 'Nianija District', 85, 1084)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13940, 'Niani', 85, 1084)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13941, 'Niamina West District', 85, 1084)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13942, 'Niamina East District', 85, 1084)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13943, 'Niamina Dankunku District', 85, 1084)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13944, 'Lower Saloum', 85, 1084)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13945, 'Lower Niumi District', 85, 1083)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13946, 'Lower Baddibu District', 85, 1083)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13947, 'Kombo South District', 85, 1081)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13948, 'Kombo North District', 85, 1081)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13949, 'Kombo East District', 85, 1081)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13950, 'Kombo Central District', 85, 1081)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13951, 'Kiang West District', 85, 1085)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13952, 'Kiang East', 85, 1085)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13953, 'Kiang Central', 85, 1085)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13954, 'Kantora', 85, 1082)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13955, 'Kanifing', 85, 1086)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13956, 'Jokadu', 85, 1083)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13957, 'Jarra West', 85, 1085)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13958, 'Jarra East', 85, 1085)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13959, 'Jarra Central', 85, 1085)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13960, 'Fulladu West', 85, 1084)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13961, 'Fulladu East', 85, 1082)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13962, 'Foni Kansala', 85, 1081)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13963, 'Foni Jarrol', 85, 1081)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13964, 'Foni Brefet', 85, 1081)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13965, 'Foni Bondali', 85, 1081)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13966, 'Foni Bintang-Karenai', 85, 1081)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13967, 'Central Baddibu', 85, 1083)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13968, 'Kombo Saint Mary District', 85, 1086)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13969, 'Janjanbureh', 85, 1084)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13970, 'Yomou', 86, 1094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13971, 'Tougue Prefecture', 86, 1092)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13972, 'Telimele Prefecture', 86, 1091)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13973, 'Siguiri Prefecture', 86, 1090)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13974, 'Pita', 86, 1093)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13975, 'Nzerekore Prefecture', 86, 1094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13976, 'Mamou Prefecture', 86, 1093)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13977, 'Mali Prefecture', 86, 1092)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13978, 'Macenta', 86, 1094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13979, 'Labe Prefecture', 86, 1092)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13980, 'Kouroussa', 86, 1090)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13981, 'Koundara Prefecture', 86, 1088)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13982, 'Kissidougou', 86, 1089)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13983, 'Kindia', 86, 1091)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13984, 'Kerouane Prefecture', 86, 1090)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13985, 'Kankan Prefecture', 86, 1090)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13986, 'Préfecture de Guékédou', 86, 1094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13987, 'Gaoual Prefecture', 86, 1088)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13988, 'Fria', 86, 1088)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13989, 'Préfecture de Forécariah', 86, 1091)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13990, 'Faranah Prefecture', 86, 1089)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13991, 'Préfecture de Dubréka', 86, 1091)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13992, 'Dinguiraye Prefecture', 86, 1089)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13993, 'Dalaba', 86, 1093)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13994, 'Dabola', 86, 1089)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13995, 'Boke Prefecture', 86, 1088)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13996, 'Boffa', 86, 1088)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13997, 'Beyla Prefecture', 86, 1094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13998, 'Coyah', 86, 1091)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (13999, 'Koubia', 86, 1092)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14000, 'Lelouma Prefecture', 86, 1092)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14001, 'Lola', 86, 1094)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14002, 'Mandiana Prefecture', 86, 1090)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14003, 'Conakry Special Zone', 86, 1087)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14004, 'Guadeloupe', 87, 1095)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14005, 'Añisoc', 88, 1102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14006, 'Niefang', 88, 1099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14007, 'Cogo', 88, 1101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14008, 'Distrito de Nsork', 88, 1102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14009, 'Mongomo', 88, 1102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14010, 'Micomiseng', 88, 1100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14011, 'Distrito de Mbini', 88, 1101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14012, 'Evinayong', 88, 1099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14013, 'Distrito de Ebebiyin', 88, 1100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14014, 'Bata', 88, 1101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14015, 'Acurenam', 88, 1099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14016, 'Ayene', 88, 1102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14017, 'Mengomeyén', 88, 1102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14018, 'Aconibe', 88, 1102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14019, 'Ciudad de la Paz', 88, 1102)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14020, 'Río Campo', 88, 1101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14021, 'Corisco', 88, 1101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14022, 'Bitica', 88, 1101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14023, 'Machinda', 88, 1101)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14024, 'Nsang', 88, 1100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14025, 'Ncue', 88, 1100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14026, 'Bicurga', 88, 1099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14027, 'Riaba', 88, 1098)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14028, 'Luba', 88, 1098)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14029, 'Rebola', 88, 1097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14030, 'Malabo', 88, 1097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14031, 'Mabana', 88, 1096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14032, 'San Antonio de Palé', 88, 1096)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14033, 'Bidjabidjan', 88, 1100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14034, 'Baney', 88, 1097)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14035, 'Nkimi', 88, 1099)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14036, 'Nsok-Nsomo', 88, 1100)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14037, 'Nomós Zakýnthou', 89, 1111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14038, 'Nomós Voiotías', 89, 1106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14039, 'Trikala', 89, 1115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14040, 'Nomós Thesprotías', 89, 1110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14041, 'Nomós Sámou', 89, 1112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14042, 'Nomós Rethýmnis', 89, 1108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14043, 'Nomós Prevézis', 89, 1110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14044, 'Nomós Messinías', 89, 1113)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14045, 'Nomós Magnisías', 89, 1115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14046, 'Lefkada', 89, 1111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14047, 'Lesbos', 89, 1112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14048, 'Nomós Lasithíou', 89, 1108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14049, 'Nomós Larísis', 89, 1115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14050, 'Nomós Lakonías', 89, 1113)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14051, 'Nomós Korinthías', 89, 1113)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14052, 'Nomós Kykládon', 89, 1114)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14053, 'Chios', 89, 1112)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14054, 'Nomós Chaniás', 89, 1108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14055, 'Kefallonia Regional Unit', 89, 1111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14056, 'Nomós Kardhítsas', 89, 1115)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14057, 'Heraklion Regional Unit', 89, 1108)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14058, 'Nomós Ioannínon', 89, 1110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14059, 'Nomós Ileías', 89, 1116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14060, 'Nomós Fthiótidos', 89, 1106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14061, 'Nomós Fokídos', 89, 1106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14062, 'Nomós Evvoías', 89, 1106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14063, 'Nomós Evrytanías', 89, 1106)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14064, 'Dodecanese', 89, 1114)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14065, 'Nomós Attikís', 89, 1105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14066, 'Nomós Ártas', 89, 1110)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14067, 'Nomós Arkadías', 89, 1113)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14068, 'Argolida', 89, 1113)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14069, 'Nomós Achaḯas', 89, 1116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14070, 'Nomós Aitolías kai Akarnanías', 89, 1116)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14071, 'Nomós Piraiós', 89, 1105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14072, 'Nomarchía Anatolikís Attikís', 89, 1105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14073, 'Nomarchía Athínas', 89, 1105)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14074, 'Nomós Xánthis', 89, 1109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14075, 'Nomós Thessaloníkis', 89, 1107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14076, 'Nomós Serrón', 89, 1107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14077, 'Nomós Rodópis', 89, 1109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14078, 'Nomós Pierías', 89, 1107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14079, 'Nomós Péllis', 89, 1107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14080, 'Nomós Kozánis', 89, 1117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14081, 'Nomós Kilkís', 89, 1107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14082, 'Nomós Chalkidikís', 89, 1107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14083, 'Nomós Kaválas', 89, 1109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14084, 'Nomós Kastoriás', 89, 1117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14085, 'Nomós Imathías', 89, 1107)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14086, 'Nomós Grevenón', 89, 1117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14087, 'Nomós Florínis', 89, 1117)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14088, 'Nomós Évrou', 89, 1109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14089, 'Nomós Drámas', 89, 1109)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14090, 'Nomós Kerkýras', 89, 1111)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14091, 'Municipio de Zunilito', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14092, 'Municipio de Zunil', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14093, 'Municipio de Zaragoza', 91, 1137)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14094, 'Municipio de Zapotitlán', 91, 1129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14095, 'Municipio de Zacapa', 91, 1118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14096, 'Municipio de Yupiltepeque', 91, 1129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14097, 'Municipio de Yepocapa', 91, 1137)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14098, 'Municipio de Villa Nueva', 91, 1133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14099, 'Municipio de Villa Canales', 91, 1133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14100, 'Municipio de Usumatlán', 91, 1118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14101, 'Municipio de Uspantán', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14102, 'Municipio de Tucurú', 91, 1139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14103, 'Municipio de Totonicapán', 91, 1119)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14104, 'Municipio de Todos Santos Cuchumatán', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14105, 'Município de Tiquisate', 91, 1134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14106, 'Municipio de Tejutla', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14107, 'Municipio de Teculután', 91, 1118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14108, 'Municipio de Tectitán', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14109, 'Municipio de Tecpán Guatemala', 91, 1137)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14110, 'Municipio de Taxisco', 91, 1122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14111, 'Municipio de Tamahú', 91, 1139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14112, 'Municipio de Tajumulco', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14113, 'Municipio de Tactic', 91, 1139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14114, 'Municipio de Tacaná', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14115, 'Municipio de Sumpango', 91, 1124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14116, 'San Pedro Soloma', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14117, 'Municipio de Sololá', 91, 1121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14118, 'Municipio de Siquinalá', 91, 1134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14119, 'Municipio de Sipacapa', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14120, 'Municipio de Sibinal', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14121, 'Municipio de Sibilia', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14122, 'Municipio de Senahú', 91, 1139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14123, 'Municipio de Sayaxché', 91, 1128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14124, 'Municipio de San Vicente Pacaya', 91, 1134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14125, 'Municipio de Santo Tomás La Unión', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14126, 'Municipio de Santo Domingo Xenacoj', 91, 1124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14127, 'Municipio de Santo Domingo Suchitepéquez', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14128, 'Municipio de Santiago Sacatepéquez', 91, 1124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14129, 'Municipio de Santiago Chimaltenango', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14130, 'Municipio de Santiago Atitlán', 91, 1121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14131, 'Municipio de Santa Rosa de Lima', 91, 1122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14132, 'Municipio de Santa María Visitación', 91, 1121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14133, 'Municipio de Santa María Ixhuatán', 91, 1122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14134, 'Municipio de Santa María de Jesús', 91, 1124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14135, 'Municipio de Santa María Chiquimula', 91, 1119)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14136, 'Municipio de Santa Lucía Utatlán', 91, 1121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14137, 'Municipio de Santa Lucía Milpas Altas', 91, 1124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14138, 'Municipio de Santa Lucía La Reforma', 91, 1119)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14139, 'Municipio de Santa Lucía Cotzumalguapa', 91, 1134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14140, 'Municipio de Santa Eulalia', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14141, 'Municipio de Santa Cruz Verapaz', 91, 1139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14142, 'Municipio de Santa Cruz Naranjo', 91, 1122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14143, 'Municipio de Santa Cruz Muluá', 91, 1125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14144, 'Municipio de Santa Cruz La Laguna', 91, 1121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14145, 'Municipio de Santa Cruz del Quiché', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14146, 'Municipio de Santa Cruz Balanyá', 91, 1137)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14147, 'Municipio de Santa Clara La Laguna', 91, 1121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14148, 'Municipio de Santa Catarina Pinula', 91, 1133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14149, 'Municipio de Santa Catarina Palopó', 91, 1121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14150, 'Municipio de Santa Catarina Mita', 91, 1129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14151, 'Municipio de Santa Catarina Ixtahuacán', 91, 1121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14152, 'Municipio de Santa Catarina Barahona', 91, 1124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14153, 'Municipio de Santa Bárbara', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14154, 'Municipio de Santa Bárbara', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14155, 'Municipio de Santa Apolonia', 91, 1137)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14156, 'Municipio de Santa Ana Huista', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14157, 'Municipio de Santa Ana', 91, 1128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14158, 'Municipio de San Sebastián Huehuetenango', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14159, 'Municipio de San Sebastián Coatán', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14160, 'Municipio de San Sebastián', 91, 1125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14161, 'Municipio de Sansare', 91, 1135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14162, 'Municipio de San Raymundo', 91, 1133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14163, 'Municipio de San Rafael Pie de la Cuesta', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14164, 'Municipio de San Rafael Petzal', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14165, 'Municipio de San Rafael Las Flores', 91, 1122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14166, 'Municipio de San Rafael La Independencia', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14167, 'Municipio de San Pedro Sacatepéquez', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14168, 'Municipio de San Pedro Sacatepéquez', 91, 1133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14169, 'Municipio de San Pedro Pinula', 91, 1130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14170, 'Municipio de San Pedro Necta', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14171, 'Municipio de San Pedro La Laguna', 91, 1121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14172, 'Municipio de San Pedro Jocopilas', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14173, 'Municipio de San Pedro Carchá', 91, 1139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14174, 'Municipio de San Pedro Ayampuc', 91, 1133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14175, 'Municipio de San Pablo La Laguna', 91, 1121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14176, 'Municipio de San Pablo Jocopilas', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14177, 'Municipio de San Pablo', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14178, 'Municipio de San Miguel Sigüilá', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14179, 'Municipio de San Miguel Panán', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14180, 'Municipio de San Miguel Ixtahuacán', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14181, 'Municipio de San Miguel Dueñas', 91, 1124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14182, 'Municipio de San Miguel Chicaj', 91, 1138)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14183, 'Municipio de San Miguel Acatán', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14184, 'Municipio de San Mateo Ixtatán', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14185, 'Municipio de San Mateo', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14186, 'Municipio de San Martín Zapotitlán', 91, 1125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14187, 'Municipio de San Martín Sacatepéquez', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14188, 'Municipio de San Martín Jilotepeque', 91, 1137)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14189, 'Municipio de San Marcos La Laguna', 91, 1121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14190, 'Municipio de San Marcos', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14191, 'Municipio de San Manuel Chaparrón', 91, 1130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14192, 'Municipio de San Luis Jilotepeque', 91, 1130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14193, 'Municipio de San Luis', 91, 1128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14194, 'Municipio de San Lucas Tolimán', 91, 1121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14195, 'Municipio de San Lucas Sacatepéquez', 91, 1124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14196, 'Municipio de San Lorenzo', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14197, 'Municipio de San Lorenzo', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14198, 'Municipio de San Juan Tecuaco', 91, 1122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14199, 'Municipio de San Juan Sacatepéquez', 91, 1133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14200, 'Municipio de San Juan La Laguna', 91, 1121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14201, 'Municipio de San Juan Ixcoy', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14202, 'Municipio de San Juan la Ermita', 91, 1136)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14203, 'Municipio de San Juan Cotzal', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14204, 'Municipio de San Juan Chamelco', 91, 1139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14205, 'Municipio de San Juan Bautista', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14206, 'Municipio de San Juan Atitán', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14207, 'Municipio de San José Poaquil', 91, 1137)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14208, 'Municipio de San José Pinula', 91, 1133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14209, 'Municipio de San José Ojetenam', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14210, 'Municipio de San José La Arada', 91, 1136)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14211, 'Municipio de San José El Ídolo', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14212, 'Municipio de San José del Golfo', 91, 1133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14213, 'Municipio de San José Chacayá', 91, 1121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14214, 'Municipio de San José Acatempa', 91, 1129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14215, 'Municipio de San José', 91, 1128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14216, 'Municipio de San José', 91, 1134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14217, 'Municipio de San Jerónimo', 91, 1138)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14218, 'Municipio de San Jacinto', 91, 1136)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14219, 'Municipio de San Gaspar Ixchil', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14220, 'Municipio de San Gabriel', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14221, 'Municipio de San Francisco Zapotitlán', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14222, 'Municipio de San Francisco La Unión', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14223, 'Municipio de San Francisco El Alto', 91, 1119)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14224, 'Municipio de San Francisco', 91, 1128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14225, 'Municipio de San Felipe', 91, 1125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14226, 'Municipio de San Diego', 91, 1118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14227, 'Municipio de San Cristóbal Verapaz', 91, 1139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14228, 'Municipio de San Cristóbal Totonicapán', 91, 1119)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14229, 'Municipio de San Cristóbal Cucho', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14230, 'Municipio de San Cristóbal Acasaguastlán', 91, 1135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14231, 'Municipio de San Carlos Sija', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14232, 'Municipio de San Carlos Alzatate', 91, 1130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14233, 'Municipio de San Bernardino', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14234, 'Municipio de San Benito', 91, 1128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14235, 'Municipio de San Bartolomé Milpas Altas', 91, 1124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14236, 'Municipio de San Bartolomé Jocotenango', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14237, 'Municipio de San Bartolo Aguas Calientes', 91, 1119)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14238, 'Municipio de Sanarate', 91, 1135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14239, 'Municipio de San Antonio Suchitepéquez', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14240, 'Municipio de San Antonio Sacatepéquez', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14241, 'Municipio de San Antonio Palopó', 91, 1121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14242, 'Municipio de San Antonio La Paz', 91, 1135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14243, 'Municipio de San Antonio Ilotenango', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14244, 'Municipio de San Antonio Huista', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14245, 'Municipio de San Antonio Aguas Calientes', 91, 1124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14246, 'Municipio de San Andrés Xecul', 91, 1119)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14247, 'Municipio de San Andrés Villa Seca', 91, 1125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14248, 'Municipio de San Andrés Semetabaj', 91, 1121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14249, 'Municipio de San Andrés Sajcabajá', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14250, 'Municipio de San Andrés Itzapa', 91, 1137)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14251, 'Municipio de San Andrés', 91, 1128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14252, 'Municipio de San Agustín Acasaguastlán', 91, 1135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14253, 'Municipio de Samayac', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14254, 'Municipio de Salcajá', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14255, 'Municipio de Salamá', 91, 1138)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14256, 'Municipio de Sacapulas', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14257, 'Municipio de Río Hondo', 91, 1118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14258, 'Municipio de Río Bravo', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14259, 'Municipio de Río Blanco', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14260, 'Municipio de Retalhuleu', 91, 1125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14261, 'Municipio de Rabinal', 91, 1138)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14262, 'Municipio de Quezaltepeque', 91, 1136)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14263, 'Municipio de Quetzaltenango', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14264, 'Municipio de Quesada', 91, 1129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14265, 'Municipio de Purulhá', 91, 1138)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14266, 'Municipio de Puerto Barrios', 91, 1131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14267, 'Municipio de Pueblo Nuevo Viñas', 91, 1122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14268, 'Municipio de Pueblo Nuevo', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14269, 'Municipio de Poptún', 91, 1128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14270, 'Municipio de Pochuta', 91, 1137)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14271, 'Municipio de Petapa', 91, 1133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14272, 'Municipio de Patzún', 91, 1137)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14273, 'Municipio de Patzité', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14274, 'Municipio de Patzicía', 91, 1137)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14275, 'Municipio de Patulul', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14276, 'Municipio de Pastores', 91, 1124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14277, 'Municipio de Pasaco', 91, 1129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14278, 'Municipio de Parramos', 91, 1137)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14279, 'Municipio de Panzós', 91, 1139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14280, 'Municipio de Panajachel', 91, 1121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14281, 'Municipio de Palín', 91, 1134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14282, 'Municipio de Palestina de los Altos', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14283, 'Municipio de Palencia', 91, 1133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14284, 'Municipio de Pajapita', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14285, 'Municipio de San Juan Ostuncalco', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14286, 'Municipio de Oratorio', 91, 1122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14287, 'Municipio de Olopa', 91, 1136)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14288, 'Municipio de Olintepeque', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14289, 'Municipio de Ocós', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14290, 'Municipio de Nuevo San Carlos', 91, 1125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14291, 'Municipio de Nuevo Progreso', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14292, 'Municipio de Nueva Santa Rosa', 91, 1122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14293, 'Municipio de Nueva Concepción', 91, 1134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14294, 'Municipio de Nentón', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14295, 'Municipio de Nebaj', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14296, 'Municipio de Nahualá', 91, 1121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14297, 'Municipio de Moyuta', 91, 1129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14298, 'Municipio de Morazán', 91, 1135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14299, 'Municipio de Morales', 91, 1131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14300, 'Municipio de Monjas', 91, 1130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14301, 'Municipio de Momostenango', 91, 1119)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14302, 'Municipio de Mixco', 91, 1133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14303, 'Municipio de Melchor de Mencos', 91, 1128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14304, 'Municipio de Mazatenango', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14305, 'Municipio de Mataquescuintla', 91, 1130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14306, 'Municipio de Masagua', 91, 1134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14307, 'Municipio de Malacatancito', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14308, 'Municipio de Malacatán', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14309, 'Municipio de Magdalena Milpas Altas', 91, 1124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14310, 'Municipio de Los Amates', 91, 1131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14311, 'Municipio de Lívingston', 91, 1131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14312, 'Municipio de La Unión', 91, 1118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14313, 'Municipio de La Reforma', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14314, 'Municipio de Lanquín', 91, 1139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14315, 'Municipio de La Libertad', 91, 1128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14316, 'Municipio de La Libertad', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14317, 'Municipio de La Gomera', 91, 1134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14318, 'Municipio de La Esperanza', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14319, 'Municipio de La Democracia', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14320, 'Municipio de La Democracia', 91, 1134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14321, 'Municipio de Jutiapa', 91, 1129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14322, 'Municipio de Joyabaj', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14323, 'Municipio de Jocotenango', 91, 1124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14324, 'Municipio de Jocotán', 91, 1136)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14325, 'Municipio de Jerez', 91, 1129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14326, 'Municipio de Jalpatagua', 91, 1129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14327, 'Municipio de Jalapa', 91, 1130)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14328, 'Municipio de Jacaltenango', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14329, 'Municipio de Iztapa', 91, 1134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14330, 'San Ildefonso Ixtahuacán', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14331, 'Municipio de Ixchiguán', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14332, 'Municipio de Ipala', 91, 1136)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14333, 'Municipio de Huité', 91, 1118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14334, 'Municipio de Huitán', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14335, 'Municipio de Huehuetenango', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14336, 'Municipio de Guazacapán', 91, 1122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14337, 'Municipio de Guatemala', 91, 1133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14338, 'Municipio de Guanagazapa', 91, 1134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14339, 'Municipio de Gualán', 91, 1118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14340, 'Municipio de Granados', 91, 1138)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14341, 'Municipio de Génova', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14342, 'Municipio de Fraijanes', 91, 1133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14343, 'Municipio de Flores Costa Cuca', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14344, 'Municipio de Flores', 91, 1128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14345, 'Municipio de Estanzuela', 91, 1118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14346, 'Municipio de Esquipulas Palo Gordo', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14347, 'Municipio de Esquipulas', 91, 1136)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14348, 'Municipio de Escuintla', 91, 1134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14349, 'Municipio de El Tumbador', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14350, 'Municipio de El Tejar', 91, 1137)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14351, 'Municipio de El Rodeo', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14352, 'Municipio de El Quetzal', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14353, 'Municipio de El Progreso', 91, 1129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14354, 'Municipio de El Palmar', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14355, 'Municipio de El Jícaro', 91, 1135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14356, 'Municipio de El Estor', 91, 1131)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14357, 'Municipio de El Chol', 91, 1138)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14358, 'Municipio de El Asintal', 91, 1125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14359, 'Municipio de El Adelanto', 91, 1129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14360, 'Municipio de Dolores', 91, 1128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14361, 'Municipio de Cuyotenango', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14362, 'Municipio de Cunén', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14363, 'Municipio de Cuilco', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14364, 'Municipio de Cuilapa', 91, 1122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14365, 'Municipio de Cubulco', 91, 1138)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14366, 'Municipio de Conguaco', 91, 1129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14367, 'Municipio de Concepción Tutuapa', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14368, 'Municipio de Concepción Las Minas', 91, 1136)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14369, 'Municipio de Concepción Chiquirichapa', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14370, 'Municipio de Concepción Huista', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14371, 'Municipio de Concepción', 91, 1121)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14372, 'Municipio de Comitancillo', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14373, 'Municipio de Comapa', 91, 1129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14374, 'Municipio de Comalapa', 91, 1137)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14375, 'Municipio de Colotenango', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14376, 'Municipio de Colomba', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14377, 'Municipio de Cobán', 91, 1139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14378, 'Municipio de Coatepeque', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14379, 'Municipio de Ciudad Vieja', 91, 1124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14380, 'Municipio de Chuarrancho', 91, 1133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14381, 'Municipio de Chisec', 91, 1139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14382, 'Municipio de Chiquimulilla', 91, 1122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14383, 'Municipio de Chiquimula', 91, 1136)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14384, 'Municipio de Chinique', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14385, 'Municipio de Chinautla', 91, 1133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14386, 'Municipio de Chimaltenango', 91, 1137)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14387, 'Municipio de Chichicastenango', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14388, 'Municipio de Chiché', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14389, 'Municipio de Chicacao', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14390, 'Municipio de Chiantla', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14391, 'Municipio de Champerico', 91, 1125)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14392, 'Municipio de Chajul', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14393, 'Municipio de Chahal', 91, 1139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14394, 'Municipio de Catarina', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14395, 'Municipio de Casillas', 91, 1122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14396, 'Municipio de Cantel', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14397, 'Municipio de Canillá', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14398, 'Municipio de Camotán', 91, 1136)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14399, 'Municipio de Cajolá', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14400, 'Municipio de Cahabón', 91, 1139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14401, 'Municipio de Cabricán', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14402, 'Municipio de Cabañas', 91, 1118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14403, 'Municipio de Barillas', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14404, 'Municipio de Barberena', 91, 1122)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14405, 'Municipio de Ayutla', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14406, 'Municipio de Atescatempa', 91, 1129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14407, 'Municipio de Asunción Mita', 91, 1129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14408, 'Municipio de Antigua Guatemala', 91, 1124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14409, 'Municipio de Amatitlán', 91, 1133)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14410, 'Municipio de Alotenango', 91, 1124)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14411, 'Municipio de Almolonga', 91, 1127)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14412, 'Municipio de Aguacatán', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14413, 'Municipio de Agua Blanca', 91, 1129)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14414, 'Municipio de Acatenango', 91, 1137)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14415, 'Municipio de Fray Bartolome de las Casas', 91, 1139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14416, 'Municipio de Ixcan', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14417, 'Municipio de Chicaman', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14418, 'Raxruhá', 91, 1139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14419, 'Municipio de Zacualpa', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14420, 'Municipio de Pachalum', 91, 1126)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14421, 'Santa Catarina La Tinta', 91, 1139)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14422, 'Municipio de Guastatoya', 91, 1135)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14423, 'Las Cruces', 91, 1128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14424, 'Municipio de Unión Cantinil', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14425, 'La Máquina', 91, 1120)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14426, 'Municipio de La Blanca', 91, 1123)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14427, 'Municipio de San Jorge', 91, 1118)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14428, 'Municipio de El Chal', 91, 1128)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14429, 'Sipacate', 91, 1134)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14430, 'Petatán', 91, 1132)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14431, 'Sao Domingos', 93, 1163)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14432, 'Cacheu Sector', 93, 1163)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14433, 'Bedanda', 93, 1159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14434, 'Fulacunda', 93, 1160)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14435, 'Buba', 93, 1160)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14436, 'Bubaque', 93, 1164)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14437, 'Quebo', 93, 1159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14438, 'Cacine', 93, 1159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14439, 'Caravela', 93, 1164)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14440, 'Bigene Sector', 93, 1163)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14441, 'Prabis Sector', 93, 1166)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14442, 'Quinhamel Sector', 93, 1166)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14443, 'Mansaba Sector', 93, 1161)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14444, 'Bissora Sector', 93, 1161)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14445, 'Nhacra Sector', 93, 1161)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14446, 'Farim Sector', 93, 1161)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14447, 'Sonaco Sector', 93, 1162)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14448, 'Xitole Sector', 93, 1167)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14449, 'Caio Sector', 93, 1163)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14450, 'Canchungo Sector', 93, 1163)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14451, 'Bula', 93, 1163)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14452, 'Mansoa', 93, 1161)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14453, 'Gamamundo Sector', 93, 1167)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14454, 'Galomaro Sector', 93, 1167)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14455, 'Bafata Sector', 93, 1167)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14456, 'Gabu Sector', 93, 1162)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14457, 'Contuboel Sector', 93, 1167)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14458, 'Empada', 93, 1160)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14459, 'Tite', 93, 1160)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14460, 'Bambadinca', 93, 1167)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14461, 'Bolama', 93, 1164)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14462, 'Safim', 93, 1166)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14463, 'Pirada', 93, 1162)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14464, 'Pitche', 93, 1162)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14465, 'Boe', 93, 1162)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14466, 'Uno', 93, 1164)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14467, 'Catio', 93, 1159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14468, 'Komo', 93, 1159)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14469, 'Sector Autonomo de Bissau', 93, 1165)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14470, 'Yuscarán', 97, 1207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14471, 'Yoro', 97, 1196)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14472, 'Yorito', 97, 1196)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14473, 'Yocón', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14474, 'Yauyupe', 97, 1207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14475, 'Yarula', 97, 1202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14476, 'Yamaranguila', 97, 1204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14477, 'Wampusirpi', 97, 1205)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14478, 'Virginia', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14479, 'Villanueva', 97, 1208)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14480, 'Villa de San Francisco', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14481, 'Villa de San Antonio', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14482, 'Victoria', 97, 1196)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14483, 'Veracruz', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14484, 'Valle de Ángeles', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14485, 'Valladolid', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14486, 'Vado Ancho', 97, 1207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14487, 'Utila', 97, 1203)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14488, 'Trujillo', 97, 1211)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14489, 'Trinidad de Copán', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14490, 'Trinidad', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14491, 'Tomalá', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14492, 'Tocoa', 97, 1211)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14493, 'Municipio de Texiguat', 97, 1207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14494, 'Teupasenti', 97, 1207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14495, 'Tela', 97, 1213)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14496, 'Tatumbla', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14497, 'Tambla', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14498, 'Talgua', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14499, 'Talanga', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14500, 'Sulaco', 97, 1196)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14501, 'Sonaguera', 97, 1211)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14502, 'Soledad', 97, 1207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14503, 'Sinuapa', 97, 1200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14504, 'Silca', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14505, 'Siguatepeque', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14506, 'Sensenti', 97, 1200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14507, 'Municipio de Sabá', 97, 1211)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14508, 'San Vicente Centenario', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14509, 'Santiago Puringla', 97, 1202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14510, 'Santa Rosa de Copán', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14511, 'Santa Rosa de Aguán', 97, 1211)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14512, 'Santa Rita', 97, 1196)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14513, 'Santa Rita', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14514, 'Santa Rita', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14515, 'Santa María del Real', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14516, 'Santa María', 97, 1202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14517, 'Santa Lucía', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14518, 'Santa Lucía', 97, 1204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14519, 'Santa Fe', 97, 1211)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14520, 'Santa Fe', 97, 1200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14521, 'Santa Elena', 97, 1202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14522, 'Santa Cruz de Yojoa', 97, 1208)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14523, 'Santa Cruz', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14524, 'Santa Bárbara', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14525, 'Santa Ana de Yusguare', 97, 1212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14526, 'Santa Ana', 97, 1202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14527, 'Santa Ana', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14528, 'San Sebastián', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14529, 'San Sebastián', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14530, 'San Rafael', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14531, 'San Pedro Zacapa', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14532, 'San Pedro Sula', 97, 1208)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14533, 'San Pedro de Tutule', 97, 1202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14534, 'San Pedro de Copán', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14535, 'San Nicolás', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14536, 'San Nicolás', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14537, 'San Miguelito', 97, 1204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14538, 'San Miguelito', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14539, 'San Matías', 97, 1207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14540, 'San Marcos de la Sierra', 97, 1204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14541, 'San Marcos de Colón', 97, 1212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14542, 'San Marcos', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14543, 'San Marcos', 97, 1200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14544, 'San Manuel Colohete', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14545, 'San Manuel', 97, 1208)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14546, 'San Luis', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14547, 'San Luis', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14548, 'San Lucas', 97, 1207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14549, 'San Lorenzo', 97, 1197)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14550, 'San Juan Guarita', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14551, 'San Juan de Opoa', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14552, 'San Juan de Flores', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14553, 'San Juan', 97, 1204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14554, 'San Juan', 97, 1202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14555, 'San José del Potrero', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14556, 'San José', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14557, 'San José de Comayagua', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14558, 'San José de Colinas', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14559, 'San José', 97, 1202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14560, 'San José', 97, 1212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14561, 'San Jorge', 97, 1200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14562, 'San Jerónimo', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14563, 'San Jerónimo', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14564, 'San Isidro', 97, 1204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14565, 'San Isidro', 97, 1212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14566, 'San Ignacio', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14567, 'San Francisco de Yojoa', 97, 1208)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14568, 'San Francisco de Ojuera', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14569, 'San Francisco del Valle', 97, 1200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14570, 'Municipio de San Francisco de La Paz', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14571, 'San Francisco de Coray', 97, 1197)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14572, 'San Francisco de Becerra', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14573, 'San Francisco', 97, 1213)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14574, 'San Francisco', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14575, 'San Fernando', 97, 1200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14576, 'San Esteban', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14577, 'San Buenaventura', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14578, 'San Antonio de Oriente', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14579, 'San Antonio del Norte', 97, 1202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14580, 'San Antonio de Flores', 97, 1207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14581, 'San Antonio de Flores', 97, 1212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14582, 'San Antonio de Cortés', 97, 1208)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14583, 'San Antonio', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14584, 'San Antonio', 97, 1204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14585, 'San Andrés', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14586, 'San Agustín', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14587, 'Salamá', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14588, 'Sabanagrande', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14589, 'Roatán', 97, 1203)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14590, 'Reitoca', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14591, 'Quimistán', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14592, 'Puerto Lempira', 97, 1205)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14593, 'Protección', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14594, 'Potrerillos', 97, 1208)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14595, 'Potrerillos', 97, 1207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14596, 'Piraera', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14597, 'Pimienta', 97, 1208)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14598, 'Petoa', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14599, 'Pespire', 97, 1212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14600, 'Oropolí', 97, 1207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14601, 'Orocuina', 97, 1212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14602, 'Orica', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14603, 'Opatoro', 97, 1202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14604, 'Omoa', 97, 1208)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14605, 'Olanchito', 97, 1196)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14606, 'Ojos de Agua', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14607, 'Ojojona', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14608, 'Nuevo Celilac', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14609, 'Nueva Ocotepeque', 97, 1200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14610, 'Nueva Armenia', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14611, 'Nueva Arcadia', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14612, 'Naranjito', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14613, 'Namasigüe', 97, 1212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14614, 'Nacaome', 97, 1197)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14615, 'Morolica', 97, 1212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14616, 'Morocelí', 97, 1207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14617, 'Morazán', 97, 1196)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14618, 'Minas de Oro', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14619, 'Mercedes de Oriente', 97, 1202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14620, 'Mercedes', 97, 1200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14621, 'Meámbar', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14622, 'Masaguara', 97, 1204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14623, 'Marcovia', 97, 1212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14624, 'Marcala', 97, 1202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14625, 'Marale', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14626, 'Maraita', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14627, 'Mapulaca', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14628, 'Manto', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14629, 'Mangulile', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14630, 'Magdalena', 97, 1204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14631, 'Macuelizo', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14632, 'Lucerna', 97, 1200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14633, 'Liure', 97, 1207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14634, 'Limón', 97, 1211)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14635, 'Lepaterique', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14636, 'Lepaera', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14637, 'Lejamaní', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14638, 'La Virtud', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14639, 'La Venta', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14640, 'Lauterique', 97, 1202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14641, 'La Unión', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14642, 'La Unión', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14643, 'La Unión', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14644, 'La Trinidad', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14645, 'Las Flores', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14646, 'La Paz', 97, 1202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14647, 'Langue', 97, 1197)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14648, 'La Masica', 97, 1213)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14649, 'Lamaní', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14650, 'La Libertad', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14651, 'La Libertad', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14652, 'La Labor', 97, 1200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14653, 'La Jigua', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14654, 'La Iguala', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14655, 'Guata', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14656, 'La Esperanza', 97, 1204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14657, 'La Encarnación', 97, 1200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14658, 'La Ceiba', 97, 1213)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14659, 'La Campa', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14660, 'Juticalpa', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14661, 'Jutiapa', 97, 1213)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14662, 'José Santos Guardiola', 97, 1203)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14663, 'Jocón', 97, 1196)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14664, 'Jesús de Otoro', 97, 1204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14665, 'Jano', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14666, 'Jacaleapa', 97, 1207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14667, 'Iriona', 97, 1211)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14668, 'Intibucá', 97, 1204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14669, 'Ilama', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14670, 'Humuya', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14671, 'Güinope', 97, 1207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14672, 'Guayape', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14673, 'Guarizama', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14674, 'Guarita', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14675, 'Guanaja', 97, 1203)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14676, 'Gualcince', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14677, 'Gualala', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14678, 'Gualaco', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14679, 'Guajiquiro', 97, 1202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14680, 'Guaimaca', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14681, 'Gracias', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14682, 'Goascorán', 97, 1197)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14683, 'Fraternidad', 97, 1200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14684, 'Florida', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14685, 'Esquipulas del Norte', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14686, 'Esquías', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14687, 'Esparta', 97, 1213)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14688, 'Erandique', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14689, 'El Triunfo', 97, 1212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14690, 'El Rosario', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14691, 'El Rosario', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14692, 'El Progreso', 97, 1196)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14693, 'El Porvenir', 97, 1213)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14694, 'El Porvenir', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14695, 'El Paraíso', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14696, 'El Paraíso', 97, 1207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14697, 'El Níspero', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14698, 'El Negrito', 97, 1196)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14699, 'El Corpus', 97, 1212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14700, 'Duyure', 97, 1212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14701, 'Dulce Nombre de Culmí', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14702, 'Dulce Nombre', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14703, 'Dolores Merendón', 97, 1200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14704, 'Dolores', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14705, 'Dolores', 97, 1204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14706, 'Danlí', 97, 1207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14707, 'Curarén', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14708, 'Cucuyagua', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14709, 'Corquín', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14710, 'Copán Ruinas', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14711, 'Concordia', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14712, 'Concepción de María', 97, 1212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14713, 'Concepción del Sur', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14714, 'Concepción del Norte', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14715, 'Concepción', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14716, 'Concepción', 97, 1200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14717, 'Concepción', 97, 1204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14718, 'Comayagua', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14719, 'Colomoncagua', 97, 1204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14720, 'Cololaca', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14721, 'Choluteca', 97, 1212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14722, 'Choloma', 97, 1208)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14723, 'Chinda', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14724, 'Chinacla', 97, 1202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14725, 'Distrito Central', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14726, 'Ceguaca', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14727, 'Cedros', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14728, 'Catacamas', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14729, 'Caridad', 97, 1197)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14730, 'Cane', 97, 1202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14731, 'Candelaria', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14732, 'Campamento', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14733, 'Camasca', 97, 1204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14734, 'Cabañas', 97, 1209)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14735, 'Cabañas', 97, 1202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14736, 'Brus Laguna', 97, 1205)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14737, 'Belén Gualcho', 97, 1200)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14738, 'Belén', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14739, 'Balfate', 97, 1211)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14740, 'Azacualpa', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14741, 'Atima', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14742, 'Arenal', 97, 1196)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14743, 'Aramecina', 97, 1197)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14744, 'Arada', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14745, 'Apacilagua', 97, 1212)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14746, 'Amapala', 97, 1197)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14747, 'Alubarén', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14748, 'Alianza', 97, 1197)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14749, 'Alauca', 97, 1207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14750, 'Ajuterique', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14751, 'Aguanqueterique', 97, 1202)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14752, 'La Lima', 97, 1208)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14753, 'Puerto Cortés', 97, 1208)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14754, 'San Francisco de Opalaca', 97, 1204)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14755, 'San Marcos de Caiquin', 97, 1201)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14756, 'Patuca', 97, 1199)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14757, 'Juan Francisco Bulnes', 97, 1205)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14758, 'Villeda Morales', 97, 1205)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14759, 'Ahuas', 97, 1205)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14760, 'Nueva Frontera', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14761, 'Las Vegas', 97, 1198)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14762, 'Vallecillo', 97, 1206)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14763, 'Trojes', 97, 1207)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14764, 'Las Lajas', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14765, 'Arizona', 97, 1213)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14766, 'Bonito Oriental', 97, 1211)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14767, 'Taulabé', 97, 1210)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14768, 'Grad Županja', 98, 1230)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14769, 'Grad Zlatar', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14770, 'Grad Sveti Ivan Zelina', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14771, 'Grad Zaprešić', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14772, 'Grad Zabok', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14773, 'Grad Vukovar', 98, 1230)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14774, 'Grad Vrgorac', 98, 1228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14775, 'Općina Gvozd', 98, 1227)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14776, 'Grad Vrbovsko', 98, 1225)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14777, 'Grad Vrbovec', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14778, 'Općina Vojnić', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14779, 'Town of Vis', 98, 1228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14780, 'Grad Virovitica', 98, 1234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14781, 'Grad Vinkovci', 98, 1230)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14782, 'Grad Velika Gorica', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14783, 'Grad Varaždin', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14784, 'Grad Valpovo', 98, 1223)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14785, 'Grad Trogir', 98, 1228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14786, 'Grad Split', 98, 1228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14787, 'Slunj', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14788, 'Grad Slavonski Brod', 98, 1215)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14789, 'Grad Požega', 98, 1224)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14790, 'Grad Sisak', 98, 1227)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14791, 'Grad Sinj', 98, 1228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14792, 'Grad Šibenik', 98, 1226)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14793, 'Sesvete', 98, 1233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14794, 'Grad Samobor', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14795, 'Grad Rovinj', 98, 1217)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14796, 'Grad Rijeka', 98, 1225)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14797, 'Grad Pula', 98, 1217)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14798, 'Grad Poreč', 98, 1217)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14799, 'Grad Slatina', 98, 1234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14800, 'Grad Ploče', 98, 1216)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14801, 'Grad Petrinja', 98, 1227)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14802, 'Grad Pazin', 98, 1217)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14803, 'Grad Pakrac', 98, 1224)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14804, 'Grad Ozalj', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14805, 'Grad Osijek', 98, 1223)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14806, 'Grad Orahovica', 98, 1234)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14807, 'Grad Opatija', 98, 1225)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14808, 'Grad Omiš', 98, 1228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14809, 'Grad Ogulin', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14810, 'Grad Novska', 98, 1227)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14811, 'Grad Novi Marof', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14812, 'Grad Nova Gradiška', 98, 1215)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14813, 'Grad Našice', 98, 1223)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14814, 'Town of Makarska', 98, 1228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14815, 'Grad Ludbreg', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14816, 'Općina Lastovo', 98, 1216)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14817, 'Grad Labin', 98, 1217)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14818, 'Grad Kutina', 98, 1227)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14819, 'Grad Krk', 98, 1225)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14820, 'Grad Križevci', 98, 1219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14821, 'Grad Krapina', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14822, 'Grad Hrvatska Kostajnica', 98, 1227)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14823, 'Grad Korčula', 98, 1216)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14824, 'Grad Koprivnica', 98, 1219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14825, 'Grad Klanjec', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14826, 'Grad Karlovac', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14827, 'Grad Jastrebarsko', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14828, 'Grad Ivanić-Grad', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14829, 'Grad Ivanec', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14830, 'Grad Imotski', 98, 1228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14831, 'Grad Hvar', 98, 1228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14832, 'Grad Grubišno Polje', 98, 1214)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14833, 'Grad Glina', 98, 1227)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14834, 'Grad Garešnica', 98, 1214)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14835, 'Općina Dvor', 98, 1227)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14836, 'Grad Đurđevac', 98, 1219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14837, 'Grad Dugo Selo', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14838, 'Grad Duga Resa', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14839, 'Grad Drniš', 98, 1226)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14840, 'Grad Donji Miholjac', 98, 1223)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14841, 'Grad Donja Stubica', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14842, 'Grad Delnice', 98, 1225)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14843, 'Grad Daruvar', 98, 1214)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14844, 'Grad Đakovo', 98, 1223)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14845, 'Grad Crikvenica', 98, 1225)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14846, 'Grad Čazma', 98, 1214)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14847, 'Grad Čakovec', 98, 1222)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14848, 'Grad Čabar', 98, 1225)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14849, 'Grad Buzet', 98, 1217)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14850, 'Grad Buje', 98, 1217)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14851, 'Grad Supetar', 98, 1228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14852, 'Grad Bjelovar', 98, 1214)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14853, 'Grad Biograd na Moru', 98, 1231)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14854, 'Grad Beli Manastir', 98, 1223)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14855, 'Grad Dubrovnik', 98, 1216)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14856, 'Općina Dubrava', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14857, 'Gradska četvrt Donji grad', 98, 1233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14858, 'Gradska četvrt Gornji Grad - Medvescak', 98, 1233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14859, 'Gradska četvrt Trnje', 98, 1233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14860, 'Gradska četvrt Maksimir', 98, 1233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14861, 'Gradska cetvrt Pescenica - Zitnjak', 98, 1233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14862, 'Gradska cetvrt Novi Zagreb - istok', 98, 1233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14863, 'Gradska četvrt Novi Zagreb - zapad', 98, 1233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14864, 'Gradska četvrt Tresnjevka - sjever', 98, 1233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14865, 'Gradska četvrt Tresnjevka - jug', 98, 1233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14866, 'Gradska četvrt Črnomerec', 98, 1233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14867, 'Gradska četvrt Gornja Dubrava', 98, 1233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14868, 'Gradska četvrt Donja Dubrava', 98, 1233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14869, 'Gradska četvrt Stenjevec', 98, 1233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14870, 'Podsused - Vrapce', 98, 1233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14871, 'Gradska četvrt Podsljeme', 98, 1233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14872, 'Gradska četvrt Brezovica', 98, 1233)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14873, 'Rogoznica Općina', 98, 1226)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14874, 'Dugi Rat Općina', 98, 1228)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14875, 'Novigrad Općina', 98, 1231)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14876, 'Bedenica', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14877, 'Općina Brckovljani', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14878, 'Općina Brdovec', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14879, 'Farkaševac', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14880, 'Dubravica', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14881, 'Gradec', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14882, 'Jakovlje', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14883, 'Klinča Sela', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14884, 'Općina Kloštar Ivanić', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14885, 'Krašić', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14886, 'Općina Kravarsko', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14887, 'Križ', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14888, 'Općina Luka', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14889, 'Marija Gorica', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14890, 'Općina Orle', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14891, 'Pisarovina', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14892, 'Općina Pokupsko', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14893, 'Preseka', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14894, 'Pušća', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14895, 'Rakovec', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14896, 'Općina Rugvica', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14897, 'Općina Stupnik', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14898, 'Žumberak', 98, 1232)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14899, 'Bedekovčina', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14900, 'Budinščina', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14901, 'Desinić', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14902, 'Gornja Stubica', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14903, 'Hrašćina', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14904, 'Hum na Sutli', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14905, 'Jesenje', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14906, 'Konjščina', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14907, 'Kraljevec na Sutli', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14908, 'Krapinske Toplice', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14909, 'Kumrovec', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14910, 'Lobor', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14911, 'Mače', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14912, 'Mihovljan', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14913, 'Novi Golubovec', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14914, 'Petrovsko', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14915, 'Radoboj', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14916, 'Sveti Križ Začretje', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14917, 'Stubičke Toplice', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14918, 'Tuhelj', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14919, 'Veliko Trgovišće', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14920, 'Zagorska Sela', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14921, 'Zlatar Bistrica', 98, 1220)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14922, 'Općina Donji Kukuruzari', 98, 1227)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14923, 'Hrvatska Dubica', 98, 1227)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14924, 'Općina Jasenovac', 98, 1227)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14925, 'Općina Lekenik', 98, 1227)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14926, 'Lipovljani', 98, 1227)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14927, 'Općina Majur', 98, 1227)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14928, 'Općina Martinska Ves', 98, 1227)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14929, 'Popovača', 98, 1227)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14930, 'Općina Sunja', 98, 1227)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14931, 'Općina Topusko', 98, 1227)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14932, 'Općina Velika Ludina', 98, 1227)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14933, 'Barilović', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14934, 'Bosiljevo', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14935, 'Cetingrad', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14936, 'Draganić', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14937, 'Općina Generalski Stol', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14938, 'Općina Josipdol', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14939, 'Kamanje', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14940, 'Krnjak', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14941, 'Lasinja', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14942, 'Netretić', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14943, 'Općina Plaški', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14944, 'Rakovica', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14945, 'Ribnik', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14946, 'Saborsko', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14947, 'Općina Tounj', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14948, 'Žakanje', 98, 1218)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14949, 'Brinje', 98, 1221)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14950, 'Donji Lapac', 98, 1221)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14951, 'Gospić', 98, 1221)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14952, 'Karlobag', 98, 1221)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14953, 'Lovinac', 98, 1221)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14954, 'Novalja', 98, 1221)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14955, 'Otočac', 98, 1221)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14956, 'Perušić', 98, 1221)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14957, 'Plitvička Jezera', 98, 1221)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14958, 'Senj', 98, 1221)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14959, 'Udbina', 98, 1221)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14960, 'Općina Vrhovine', 98, 1221)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14961, 'Bednja', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14962, 'Beretinec', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14963, 'Breznica', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14964, 'Breznički Hum', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14965, 'Cestica', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14966, 'Donja Voća', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14967, 'Gornji Kneginec', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14968, 'Općina Jalžabet', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14969, 'Klenovnik', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14970, 'Općina Ljubešćica', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14971, 'Lepoglava', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14972, 'Mali Bukovec', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14973, 'Općina Martijanec', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14974, 'Maruševec', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14975, 'Petrijanec', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14976, 'Sračinec', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14977, 'Sveti Ilija', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14978, 'Općina Trnovec Bartolovečki', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14979, 'Grad Varaždinske Toplice', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14980, 'Veliki Bukovec', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14981, 'Vidovec', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14982, 'Vinica', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14983, 'Visoko', 98, 1229)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14984, 'Drnje', 98, 1219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14985, 'Ferdinandovac', 98, 1219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14986, 'Gola', 98, 1219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14987, 'Gornja Rijeka', 98, 1219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14988, 'Hlebine', 98, 1219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14989, 'Kalinovac', 98, 1219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14990, 'Općina Kalnik', 98, 1219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14991, 'Kloštar Podravski', 98, 1219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14992, 'Koprivnički Bregi', 98, 1219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14993, 'Koprivnički Ivanec', 98, 1219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14994, 'Općina Legrad', 98, 1219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14995, 'Molve', 98, 1219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14996, 'Novigrad Podravski', 98, 1219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14997, 'Novo Virje', 98, 1219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14998, 'Peteranec', 98, 1219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (14999, 'Podravske Sesvete', 98, 1219)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (15000, 'Općina Rasinja', 98, 1219)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM subregions');
  }
}
