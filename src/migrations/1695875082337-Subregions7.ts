import type { MigrationInterface, QueryRunner } from 'typeorm';

export class Subregions71695875082337 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30001, 'Turabo Barrio', 183, 2582)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30002, 'Unibón Barrio', 183, 2621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30003, 'Universidad Barrio', 183, 2634)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30004, 'Utuado Barrio-Pueblo', 183, 2641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30005, 'Vacas Barrio', 183, 2644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30006, 'Vaga Barrio', 183, 2621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30007, 'Valenciano Abajo Barrio', 183, 2609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30008, 'Valenciano Arriba Barrio', 183, 2609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30009, 'Vayas Barrio', 183, 2627)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30010, 'Vega Alta Barrio-Pueblo', 183, 2642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30011, 'Vega Baja Barrio-Pueblo', 183, 2643)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30012, 'Vega Redonda Barrio', 183, 2592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30013, 'Vegas Abajo Barrio', 183, 2570)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30014, 'Vegas Barrio', 183, 2587)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30015, 'Vegas Barrio', 183, 2646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30016, 'Veguitas Barrio', 183, 2607)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30017, 'Victoria Barrio', 183, 2572)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30018, 'Villalba Abajo Barrio', 183, 2644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30019, 'Villalba Arriba Barrio', 183, 2644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30020, 'Villalba Barrio-Pueblo', 183, 2644)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30021, 'Viví Abajo Barrio', 183, 2641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30022, 'Viví Arriba Barrio', 183, 2641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30023, 'Voladoras Barrio', 183, 2620)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30024, 'Yabucoa Barrio-Pueblo', 183, 2645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30025, 'Yahuecas Barrio', 183, 2570)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30026, 'Yauco Barrio-Pueblo', 183, 2646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30027, 'Yaurel Barrio', 183, 2577)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30028, 'Yayales Barrio', 183, 2570)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30029, 'Yeguada Barrio', 183, 2583)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30030, 'Yeguada Barrio', 183, 2643)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30031, 'Zamas Barrio', 183, 2607)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30032, 'Zanja Barrio', 183, 2583)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30033, 'Zarzal Barrio', 183, 2630)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30034, 'Tumbao Barrio', 183, 2618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30035, 'Certenejas Barrio', 183, 2590)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30036, 'Vegas Arriba', 183, 2570)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30037, 'Jenin', 184, 2649)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30038, 'Rafah', 184, 2648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30039, 'North Gaza', 184, 2648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30040, 'Deir Al Balah', 184, 2648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30041, 'Bethlehem', 184, 2649)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30042, 'Nablus', 184, 2649)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30043, 'Tulkarm', 184, 2649)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30044, 'Tubas', 184, 2649)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30045, 'Qalqilya', 184, 2649)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30046, 'Salfit', 184, 2649)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30047, 'Jericho', 184, 2649)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30048, 'Al Quds', 184, 2649)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30049, 'Ramallah', 184, 2649)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30050, 'Al Khalil', 184, 2649)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30051, 'Khan Yunis Governorate', 184, 2648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30052, 'Gaza', 184, 2648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30053, 'Crato', 185, 2652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30054, 'Tondela', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30055, 'Gouveia', 185, 2664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30056, 'Fundão', 185, 2657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30057, 'Lisbon', 185, 2653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30058, 'Porto', 185, 2663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30059, 'Loures', 185, 2653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30060, 'Nisa', 185, 2652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30061, 'Vila Velha de Ródão', 185, 2657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30062, 'Castelo de Vide', 185, 2652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30063, 'Marvão', 185, 2652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30064, 'Portalegre', 185, 2652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30065, 'Gavião', 185, 2652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30066, 'Ponte de Sor', 185, 2652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30067, 'Alter do Chão', 185, 2652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30068, 'Monforte', 185, 2652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30069, 'Carregal do Sal', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30070, 'Seixal', 185, 2650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30071, 'Águeda', 185, 2668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30072, 'Albergaria-A-Velha', 185, 2668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30073, 'Anadia', 185, 2668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30074, 'Arouca', 185, 2668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30075, 'Aveiro', 185, 2668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30076, 'Castelo de Paiva', 185, 2668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30077, 'Espinho', 185, 2668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30078, 'Estarreja', 185, 2668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30079, 'Santa Maria da Feira', 185, 2668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30080, 'Ílhavo', 185, 2668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30081, 'Mealhada', 185, 2668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30082, 'Murtosa', 185, 2668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30083, 'Oliveira de Azeméis', 185, 2668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30084, 'Oliveira do Bairro', 185, 2668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30085, 'Ovar', 185, 2668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30086, 'São João da Madeira', 185, 2668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30087, 'Sever do Vouga', 185, 2668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30088, 'Vagos', 185, 2668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30089, 'Vale de Cambra', 185, 2668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30090, 'Aljustrel', 185, 2658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30091, 'Almodôvar', 185, 2658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30092, 'Alvito', 185, 2658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30093, 'Barrancos', 185, 2658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30094, 'Beja', 185, 2658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30095, 'Castro Verde', 185, 2658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30096, 'Cuba', 185, 2658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30097, 'Ferreira do Alentejo', 185, 2658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30098, 'Mértola', 185, 2658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30099, 'Moura', 185, 2658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30100, 'Odemira', 185, 2658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30101, 'Ourique', 185, 2658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30102, 'Serpa', 185, 2658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30103, 'Vidigueira', 185, 2658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30104, 'Amares', 185, 2667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30105, 'Barcelos', 185, 2667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30106, 'Braga', 185, 2667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30107, 'Cabeceiras de Basto', 185, 2667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30108, 'Celorico de Basto', 185, 2667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30109, 'Esposende', 185, 2667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30110, 'Fafe', 185, 2667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30111, 'Guimarães', 185, 2667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30112, 'Póvoa de Lanhoso', 185, 2667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30113, 'Terras de Bouro', 185, 2667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30114, 'Vieira do Minho', 185, 2667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30115, 'Vila Nova de Famalicão', 185, 2667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30116, 'Vila Verde', 185, 2667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30117, 'Vizela', 185, 2667)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30118, 'Alfândega da Fé', 185, 2666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30119, 'Bragança Municipality', 185, 2666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30120, 'Carrazeda de Ansiães', 185, 2666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30121, 'Freixo de Espada À Cinta', 185, 2666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30122, 'Macedo de Cavaleiros', 185, 2666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30123, 'Miranda do Douro', 185, 2666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30124, 'Mirandela', 185, 2666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30125, 'Mogadouro', 185, 2666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30126, 'Torre de Moncorvo', 185, 2666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30127, 'Vila Flor', 185, 2666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30128, 'Vimioso', 185, 2666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30129, 'Vinhais', 185, 2666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30130, 'Belmonte', 185, 2657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30131, 'Castelo Branco', 185, 2657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30132, 'Covilhã', 185, 2657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30133, 'Idanha-A-Nova', 185, 2657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30134, 'Oleiros', 185, 2657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30135, 'Penamacor', 185, 2657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30136, 'Proença-A-Nova', 185, 2657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30137, 'Sertã', 185, 2657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30138, 'Vila de Rei', 185, 2657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30139, 'Arganil', 185, 2665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30140, 'Cantanhede', 185, 2665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30141, 'Coimbra', 185, 2665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30142, 'Condeixa-A-Nova', 185, 2665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30143, 'Figueira da Foz', 185, 2665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30144, 'Góis', 185, 2665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30145, 'Lousã', 185, 2665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30146, 'Mira', 185, 2665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30147, 'Miranda do Corvo', 185, 2665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30148, 'Montemor-O-Velho', 185, 2665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30149, 'Oliveira do Hospital', 185, 2665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30150, 'Pampilhosa da Serra', 185, 2665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30151, 'Penacova', 185, 2665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30152, 'Penela', 185, 2665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30153, 'Soure', 185, 2665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30154, 'Tábua', 185, 2665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30155, 'Vila Nova de Poiares', 185, 2665)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30156, 'Alandroal', 185, 2656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30157, 'Arraiolos', 185, 2656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30158, 'Borba', 185, 2656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30159, 'Estremoz', 185, 2656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30160, 'Évora', 185, 2656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30161, 'Montemor-O-Novo', 185, 2656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30162, 'Mora', 185, 2656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30163, 'Mourão', 185, 2656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30164, 'Portel', 185, 2656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30165, 'Redondo', 185, 2656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30166, 'Reguengos de Monsaraz', 185, 2656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30167, 'Vendas Novas', 185, 2656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30168, 'Viana do Alentejo', 185, 2656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30169, 'Vila Viçosa', 185, 2656)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30170, 'Albufeira', 185, 2655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30171, 'Alcoutim', 185, 2655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30172, 'Aljezur', 185, 2655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30173, 'Castro Marim', 185, 2655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30174, 'Faro', 185, 2655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30175, 'Lagoa', 185, 2655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30176, 'Lagos', 185, 2655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30177, 'Loulé', 185, 2655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30178, 'Monchique', 185, 2655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30179, 'Olhão', 185, 2655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30180, 'Portimão', 185, 2655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30181, 'São Brás de Alportel', 185, 2655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30182, 'Silves', 185, 2655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30183, 'Tavira', 185, 2655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30184, 'Vila do Bispo', 185, 2655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30185, 'Vila Real de Santo António', 185, 2655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30186, 'Aguiar da Beira', 185, 2664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30187, 'Almeida', 185, 2664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30188, 'Celorico da Beira', 185, 2664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30189, 'Figueira de Castelo Rodrigo', 185, 2664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30190, 'Fornos de Algodres', 185, 2664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30191, 'Guarda', 185, 2664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30192, 'Manteigas', 185, 2664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30193, 'Mêda', 185, 2664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30194, 'Pinhel', 185, 2664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30195, 'Sabugal', 185, 2664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30196, 'Seia', 185, 2664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30197, 'Trancoso', 185, 2664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30198, 'Vila Nova de Foz Côa', 185, 2664)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30199, 'Alcobaça', 185, 2654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30200, 'Alvaiázere', 185, 2654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30201, 'Ansião', 185, 2654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30202, 'Batalha', 185, 2654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30203, 'Bombarral', 185, 2654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30204, 'Caldas da Rainha', 185, 2654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30205, 'Castanheira de Pêra', 185, 2654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30206, 'Figueiró Dos Vinhos', 185, 2654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30207, 'Leiria', 185, 2654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30208, 'Marinha Grande', 185, 2654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30209, 'Nazaré', 185, 2654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30210, 'Óbidos', 185, 2654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30211, 'Pedrógão Grande', 185, 2654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30212, 'Peniche', 185, 2654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30213, 'Pombal', 185, 2654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30214, 'Porto de Mós', 185, 2654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30215, 'Alenquer', 185, 2653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30216, 'Arruda Dos Vinhos', 185, 2653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30217, 'Azambuja', 185, 2653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30218, 'Cadaval', 185, 2653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30219, 'Cascais', 185, 2653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30220, 'Lourinhã', 185, 2653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30221, 'Mafra', 185, 2653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30222, 'Oeiras', 185, 2653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30223, 'Sintra', 185, 2653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30224, 'Sobral de Monte Agraço', 185, 2653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30225, 'Torres Vedras', 185, 2653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30226, 'Vila Franca de Xira', 185, 2653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30227, 'Amadora', 185, 2653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30228, 'Odivelas', 185, 2653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30229, 'Arronches', 185, 2652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30230, 'Avis', 185, 2652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30231, 'Campo Maior', 185, 2652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30232, 'Elvas', 185, 2652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30233, 'Fronteira', 185, 2652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30234, 'Sousel', 185, 2652)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30235, 'Amarante', 185, 2663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30236, 'Baião', 185, 2663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30237, 'Felgueiras', 185, 2663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30238, 'Gondomar', 185, 2663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30239, 'Lousada', 185, 2663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30240, 'Maia', 185, 2663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30241, 'Marco de Canaveses', 185, 2663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30242, 'Matosinhos', 185, 2663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30243, 'Paços de Ferreira', 185, 2663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30244, 'Paredes', 185, 2663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30245, 'Penafiel', 185, 2663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30246, 'Póvoa de Varzim', 185, 2663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30247, 'Santo Tirso', 185, 2663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30248, 'Valongo', 185, 2663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30249, 'Vila do Conde', 185, 2663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30250, 'Vila Nova de Gaia', 185, 2663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30251, 'Trofa', 185, 2663)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30252, 'Abrantes', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30253, 'Alcanena', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30254, 'Almeirim', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30255, 'Alpiarça', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30256, 'Benavente', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30257, 'Cartaxo', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30258, 'Chamusca', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30259, 'Constância', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30260, 'Coruche', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30261, 'Entroncamento', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30262, 'Ferreira do Zêzere', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30263, 'Golegã', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30264, 'Mação', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30265, 'Rio Maior', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30266, 'Salvaterra de Magos', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30267, 'Santarém', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30268, 'Sardoal', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30269, 'Tomar', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30270, 'Torres Novas', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30271, 'Vila Nova da Barquinha', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30272, 'Ourém', 185, 2651)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30273, 'Alcácer do Sal', 185, 2650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30274, 'Alcochete', 185, 2650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30275, 'Almada', 185, 2650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30276, 'Barreiro', 185, 2650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30277, 'Grândola', 185, 2650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30278, 'Moita', 185, 2650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30279, 'Montijo', 185, 2650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30280, 'Palmela', 185, 2650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30281, 'Santiago do Cacém', 185, 2650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30282, 'Sesimbra', 185, 2650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30283, 'Setúbal', 185, 2650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30284, 'Sines', 185, 2650)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30285, 'Arcos de Valdevez', 185, 2662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30286, 'Caminha', 185, 2662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30287, 'Melgaço', 185, 2662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30288, 'Monção', 185, 2662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30289, 'Paredes de Coura', 185, 2662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30290, 'Ponte da Barca', 185, 2662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30291, 'Ponte de Lima', 185, 2662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30292, 'Valença', 185, 2662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30293, 'Viana do Castelo', 185, 2662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30294, 'Vila Nova de Cerveira', 185, 2662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30295, 'Alijó', 185, 2661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30296, 'Boticas', 185, 2661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30297, 'Chaves', 185, 2661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30298, 'Mesão Frio', 185, 2661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30299, 'Mondim de Basto', 185, 2661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30300, 'Montalegre', 185, 2661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30301, 'Murça', 185, 2661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30302, 'Peso da Régua', 185, 2661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30303, 'Ribeira de Pena', 185, 2661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30304, 'Sabrosa', 185, 2661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30305, 'Santa Marta de Penaguião', 185, 2661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30306, 'Valpaços', 185, 2661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30307, 'Vila Pouca de Aguiar', 185, 2661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30308, 'Vila Real', 185, 2661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30309, 'Armamar', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30310, 'Castro Daire', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30311, 'Cinfães', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30312, 'Lamego', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30313, 'Mangualde', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30314, 'Moimenta da Beira', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30315, 'Mortágua', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30316, 'Nelas', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30317, 'Oliveira de Frades', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30318, 'Penalva do Castelo', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30319, 'Penedono', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30320, 'Resende', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30321, 'Santa Comba Dão', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30322, 'São João da Pesqueira', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30323, 'São Pedro do Sul', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30324, 'Sátão', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30325, 'Sernancelhe', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30326, 'Tabuaço', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30327, 'Tarouca', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30328, 'Vila Nova de Paiva', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30329, 'Viseu', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30330, 'Vouzela', 185, 2660)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30331, 'Calheta', 185, 2659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30332, 'Câmara de Lobos', 185, 2659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30333, 'Funchal', 185, 2659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30334, 'Machico', 185, 2659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30335, 'Ponta do Sol', 185, 2659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30336, 'Porto Moniz', 185, 2659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30337, 'Ribeira Brava', 185, 2659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30338, 'Santa Cruz', 185, 2659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30339, 'Santana', 185, 2659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30340, 'São Vicente', 185, 2659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30341, 'Porto Santo', 185, 2659)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30342, 'Vila do Porto', 185, 2669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30343, 'Lagoa', 185, 2669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30344, 'Nordeste', 185, 2669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30345, 'Ponta Delgada', 185, 2669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30346, 'Povoação', 185, 2669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30347, 'Ribeira Grande', 185, 2669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30348, 'Vila Franca do Campo', 185, 2669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30349, 'Angra do Heroísmo', 185, 2669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30350, 'Praia da Vitória', 185, 2669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30351, 'Santa Cruz da Graciosa', 185, 2669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30352, 'Calheta de São Jorge', 185, 2669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30353, 'Velas', 185, 2669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30354, 'Lajes do Pico', 185, 2669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30355, 'Madalena', 185, 2669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30356, 'São Roque do Pico', 185, 2669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30357, 'Horta', 185, 2669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30358, 'Lajes Das Flores', 185, 2669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30359, 'Santa Cruz Das Flores', 185, 2669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30360, 'Corvo', 185, 2669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30361, 'Rock Islands', 186, 2677)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30362, 'Minga Pora District', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30363, 'San Cosme y Damian', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30364, 'San Estanislao', 187, 2686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30365, 'Villa Hayes', 187, 2687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30366, 'San Patricio', 187, 2690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30367, 'Isla Pucu', 187, 2693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30368, 'Paso De Patria', 187, 2689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30369, 'Alberdi', 187, 2689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30370, 'Quyquyho', 187, 2688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30371, 'Villarrica', 187, 2692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30372, 'Domingo Martinez De Irala', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30373, 'San Salvador', 187, 2692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30374, 'Jesus', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30375, 'San Antonio', 187, 2695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30376, 'Villa Del Rosario', 187, 2686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30377, 'R.I. 3 Corrales', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30378, 'Obligado', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30379, 'Abai', 187, 2697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30380, 'Los Cedrales', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30381, 'Capiata', 187, 2695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30382, 'Union', 187, 2686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30383, 'Simon Bolivar', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30384, 'Saltos Del Guaira', 187, 2696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30385, 'San Pedro Del Parana', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30386, 'Cecilio Baez', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30387, 'Coronel Bogado', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30388, 'San Alberto', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30389, 'Mbaracayu', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30390, 'Tacuaras', 187, 2689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30391, 'Carapegua', 187, 2688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30392, 'Francisco Caballero Alvarez', 187, 2696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30393, 'Repatriacion', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30394, 'General Diaz', 187, 2689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30395, 'Desmochados', 187, 2689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30396, 'Coronel Oviedo', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30397, 'San Juan del Parana', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30398, 'Capiibary', 187, 2686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30399, 'Nueva Germania', 187, 2686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30400, 'Mbuyapey', 187, 2688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30401, 'Nueva Esperanza', 187, 2696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30402, 'Isla Umbu', 187, 2689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30403, 'Loma Plata', 187, 2703)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30404, 'Santa Fe Del Parana', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30405, 'Tobati', 187, 2693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30406, 'Curuguaty', 187, 2696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30407, 'Itanara', 187, 2696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30408, 'Ype Jhu', 187, 2696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30409, 'Natalicio Talavera', 187, 2692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30410, 'Santa Rosa Del Mbutuy', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30411, 'Alto Vera', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30412, 'Yvycui', 187, 2688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30413, 'Mauricio Jose Troche', 187, 2692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30414, 'San Roque Gonzalez', 187, 2688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30415, 'Acahay', 187, 2688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30416, 'Ñemby', 187, 2695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30417, 'Aregua', 187, 2695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30418, 'Capitan Bado', 187, 2699)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30419, 'Tte. Esteban Martinez', 187, 2687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30420, 'Nueva Colombia', 187, 2693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30421, 'Juan De Mena', 187, 2693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30422, 'Jose Domingo Ocampos', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30423, 'Jose Falcon', 187, 2687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30424, 'Encarnacion', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30425, 'Caraguatay', 187, 2693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30426, 'Piribebuy', 187, 2693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30427, 'Ñumi', 187, 2692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30428, 'Katuete', 187, 2696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30429, 'Leandro Oviedo', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30430, 'Cambyreta', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30431, 'Mcal. Francisco Solano Lopez', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30432, 'Liberacion', 187, 2686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30433, 'Hohenau', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30434, 'Moises Bertoni', 187, 2697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30435, 'San Miguel', 187, 2690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30436, 'Sgto. Jose Felix Lopez', 187, 2694)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30437, 'Yataity Del Norte', 187, 2686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30438, 'Filadelfia', 187, 2703)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30439, 'Santa Rita', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30440, 'San Jose De Los Arroyos', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30441, 'Altos', 187, 2693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30442, 'Zanja Pyta', 187, 2699)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30443, 'Pirayu', 187, 2688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30444, 'Buena Vista', 187, 2697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30445, 'San Juan Nepomuceno', 187, 2697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30446, 'San Ignacio', 187, 2690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30447, 'Humaita', 187, 2689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30448, 'Carmelo Peralta', 187, 2701)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30449, 'Tomas Romero Pereira', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30450, 'Yguazu', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30451, 'Paraguari', 187, 2688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30452, 'Guajayvi', 187, 2686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30453, 'Yvy Ya´U', 187, 2694)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30454, '25 De Diciembre', 187, 2686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30455, 'Loma Grande', 187, 2693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30456, 'General Bernardino Caballero', 187, 2688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30457, 'Santa Maria', 187, 2690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30458, 'Tte 1ro Manuel Irala Fernandez', 187, 2687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30459, 'Caaguazu', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30460, 'General Eugenio A. Garay', 187, 2692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30461, 'Fram', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30462, 'Tebicuary', 187, 2692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30463, 'Fernando De La Mora', 187, 2695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30464, 'Tavai', 187, 2697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30465, 'Benjamin Aceval', 187, 2687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30466, 'Capitan Meza', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30467, 'Guarambare', 187, 2695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30468, 'Mariscal Estigarribia', 187, 2703)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30469, 'Yaguaron', 187, 2688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30470, 'Jose Fassardi', 187, 2692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30471, 'Concepcion', 187, 2694)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30472, 'Villa Florida', 187, 2690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30473, 'San Juan Bautista De Ñeembucu', 187, 2689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30474, 'Los Laureles', 187, 2689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30475, 'Ypane', 187, 2695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30476, 'Lima', 187, 2686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30477, 'Villa Elisa', 187, 2695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30478, 'Paso Yobai', 187, 2692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30479, 'General Artigas', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30480, 'Emboscada', 187, 2693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30481, 'San Jose Obrero', 187, 2693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30482, 'General Jose Maria Bruguez', 187, 2687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30483, 'Valenzuela', 187, 2693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30484, 'Tebicuary-Mi', 187, 2688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30485, 'Caapucu', 187, 2688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30486, 'General Higinio Morinigo', 187, 2697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30487, 'Luque', 187, 2695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30488, 'Edelira', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30489, 'Villa Ygatimí', 187, 2696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30490, 'Asuncion', 187, 2702)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30491, 'La Paloma', 187, 2696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30492, 'Mayor Martinez', 187, 2689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30493, 'Dr. Raul Peña', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30494, 'Ayolas', 187, 2690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30495, 'Nueva Toledo', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30496, 'Borja', 187, 2692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30497, 'Yasy Kañy', 187, 2696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30498, 'Belen', 187, 2694)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30499, 'Coronel Martinez', 187, 2692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30500, 'La Colmena', 187, 2688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30501, 'J Eulogio Estigarribia', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30502, 'Nanawa', 187, 2687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30503, 'J Augusto Saldivar', 187, 2695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30504, 'Lambare', 187, 2695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30505, 'San Bernardino', 187, 2693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30506, 'Bella Vista', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30507, 'Dr. Bottrell', 187, 2692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30508, 'Naranjal', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30509, 'Bahia Negra', 187, 2701)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30510, 'Loreto', 187, 2694)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30511, 'General Resquin', 187, 2686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30512, 'Tavapy', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30513, 'Trinidad', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30514, 'Santiago', 187, 2690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30515, 'Carmen Del Parana', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30516, 'Yabebyry', 187, 2690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30517, 'Villa Franca', 187, 2689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30518, 'San Rafael Del Parana', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30519, 'Chore', 187, 2686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30520, 'Primero De Marzo', 187, 2693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30521, 'Itapua Poty', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30522, 'Yuty', 187, 2697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30523, 'Mayor Otaño', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30524, 'Villa Oliva', 187, 2689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30525, 'San Juan Bautista', 187, 2690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30526, 'Eusebio Ayala', 187, 2693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30527, 'Azotey', 187, 2694)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30528, 'Pedro Juan Caballero', 187, 2699)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30529, 'Fulgencio Yegros', 187, 2697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30530, 'Mariano Roque Alonso', 187, 2695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30531, 'Nueva Alborada', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30532, 'Quiindy', 187, 2688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30533, 'San Joaquin', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30534, 'Presidente Franco', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30535, 'San Cristobal', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30536, 'San Pablo', 187, 2686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30537, 'Cerrito', 187, 2689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30538, 'San Lazaro', 187, 2694)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30539, 'Mbocayaty Del Yhaguy', 187, 2693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30540, 'Iruña', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30541, 'Nueva Londres', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30542, 'Itakyry', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30543, 'San Carlos', 187, 2694)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30544, 'Maciel', 187, 2697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30545, 'Itacurubi Del Rosario', 187, 2686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30546, 'San Lorenzo', 187, 2695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30547, 'Tacuati', 187, 2686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30548, 'Yatytay', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30549, 'Colonia Independencia', 187, 2692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30550, 'Juan E. O´Leary', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30551, 'Santa Elena', 187, 2693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30552, 'Capitan Miranda', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30553, 'Ciudad Del Este', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30554, 'Corpus Christi', 187, 2696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30555, 'Atyra', 187, 2693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30556, 'General Elizardo Aquino', 187, 2686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30557, 'Villalbin', 187, 2689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30558, 'Minga Guazu', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30559, 'Tembiapora', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30560, 'Escobar', 187, 2688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30561, 'Sapucai', 187, 2688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30562, 'San Pedro Del Ykuamandiyu', 187, 2686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30563, 'Ybyrarobana', 187, 2696)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30564, 'Mbocayaty', 187, 2692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30565, 'Puerto Casado', 187, 2701)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30566, '3 De Febrero', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30567, 'Dr. Juan Leon Mallorquin', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30568, 'Horqueta', 187, 2694)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30569, 'Yvytimi', 187, 2688)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30570, 'Nueva Italia', 187, 2695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30571, 'Carayao', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30572, 'Yryvu Cua', 187, 2686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30573, 'Itape', 187, 2692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30574, 'Pilar', 187, 2689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30575, 'Santa Rosa Del Monday', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30576, 'Ita', 187, 2695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30577, 'Dr. Juan Manuel Frutos', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30578, 'Raul Arsenio Oviedo', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30579, 'Felix Perez Cardozo', 187, 2692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30580, 'Carlos Antonio Lopez', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30581, 'Villeta', 187, 2695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30582, 'Guazu Cua', 187, 2689)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30583, 'La Pastora', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30584, 'Limpio', 187, 2695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30585, 'Fuerte Olimpo', 187, 2701)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30586, 'Caacupe', 187, 2693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30587, 'Antequera', 187, 2686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30588, 'Ñacunday', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30589, '3 De Mayo', 187, 2697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30590, 'Santa Rosa', 187, 2690)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30591, 'Caazapa', 187, 2697)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30592, 'Arroyos Y Esteros', 187, 2693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30593, 'Yataity', 187, 2692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30594, 'Yhu', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30595, 'Ypacarai', 187, 2695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30596, 'Puerto Pinasco', 187, 2687)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30597, 'Natalio', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30598, 'Pirapo', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30599, 'Santa Rosa Del Aguaray', 187, 2686)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30600, 'Hernandarias', 187, 2700)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30601, 'Bella Vista', 187, 2699)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30602, 'Vaqueria', 187, 2698)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30603, 'La Paz', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30604, 'Iturbe', 187, 2692)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30605, 'Itacurubi De La Cordillera', 187, 2693)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30606, 'Itaugua', 187, 2695)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30607, 'General Delgado', 187, 2691)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30608, 'Réunion', 189, 2712)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30609, 'Comuna Zvoriştea', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30610, 'Comuna Zorlenţu Mare', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30611, 'Comuna Zorleni', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30612, 'Oraş Zlatna', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30613, 'Comuna Zâmbreasca', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30614, 'Comuna Zimbor', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30615, 'Comuna Zimandu Nou', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30616, 'Comuna Ziduri', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30617, 'Comuna Zetea', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30618, 'Comuna Zerind', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30619, 'Comuna Zemeş', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30620, 'Comuna Zăvoi', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30621, 'Comuna Zăvoaia', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30622, 'Comuna Zătreni', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30623, 'Comuna Zărneşti', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30624, 'Oraş Zãrneşti', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30625, 'Comuna Zărand', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30626, 'Comuna Zăpodeni', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30627, 'Comuna Zăneşti', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30628, 'Comuna Zamostea', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30629, 'Comuna Zam', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30630, 'Comuna Zalha', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30631, 'Comuna Zagra', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30632, 'Comuna Zagon', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30633, 'Comuna Zagăr', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30634, 'Comuna Zădăreni', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30635, 'Comuna Zăbrani', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30636, 'Comuna Zăbala', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30637, 'Comuna Vutcani', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30638, 'Comuna Vurpăr', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30639, 'Comuna Vulturu', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30640, 'Comuna Vulturu', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30641, 'Comuna Vultureşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30642, 'Comuna Vultureşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30643, 'Comuna Vultureşti', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30644, 'Comuna Vultureni', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30645, 'Comuna Vulpeni', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30646, 'Comuna Vulcana-Pandele', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30647, 'Comuna Vulcana Băi', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30648, 'Comuna Vulcan', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30649, 'Comuna Vrâncioaia', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30650, 'Comuna Vrata', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30651, 'Comuna Vrani', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30652, 'Comuna Voşlãbeni', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30653, 'Comuna Vorţa', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30654, 'Comuna Vorona', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30655, 'Comuna Vorniceni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30656, 'Voluntari City', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30657, 'Comuna Volovăţ', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30658, 'Comuna Voloiac', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30659, 'Comuna Voivodeni', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30660, 'Comuna Voitinel', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30661, 'Comuna Voiteg', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30662, 'Comuna Voineşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30663, 'Comuna Voineşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30664, 'Comuna Voineasa', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30665, 'Comuna Voineasa', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30666, 'Comuna Voila', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30667, 'Comuna Voiceşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30668, 'Comuna Vlăsineşti', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30669, 'Oraş Vlãhiţa', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30670, 'Comuna Vlad Ţepeş', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30671, 'Comuna Vladimir', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30672, 'Comuna Vladimirescu', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30673, 'Comuna Vlădila', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30674, 'Comuna Vlădeşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30675, 'Comuna Vlădeşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30676, 'Comuna Vlădeşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30677, 'Comuna Vlădeni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30678, 'Comuna Vlădeni', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30679, 'Comuna Vlădeni', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30680, 'Comuna Vlădeni', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30681, 'Comuna Vlădaia', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30682, 'Comuna Viziru', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30683, 'Comuna Vitomireşti', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30684, 'Comuna Vităneşti', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30685, 'Comuna Viştea de Jos', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30686, 'Comuna Vişineşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30687, 'Comuna Vişina Nouă', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30688, 'Comuna Vişina', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30689, 'Comuna Vişina', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30690, 'Comuna Vişeu de Jos', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30691, 'Comuna Vişani', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30692, 'Comuna Vârvoru de Jos', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30693, 'Comuna Vârtop', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30694, 'Comuna Vârteşcoiu', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30695, 'Comuna Vârşolţ', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30696, 'Comuna Vârlezi', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30697, 'Comuna Vârghiş', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30698, 'Comuna Vârfurile', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30699, 'Comuna Vârfuri', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30700, 'Comuna Vârfu Câmpului', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30701, 'Comuna Vârciorog', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30702, 'Comuna Vipereşti', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30703, 'Comuna Vinţu de Jos', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30704, 'Comuna Vintileasca', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30705, 'Comuna Vintilă Vodă', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30706, 'Oraş Vânju Mare', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30707, 'Comuna Vânjuleţ', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30708, 'Comuna Vinga', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30709, 'Comuna Vinderei', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30710, 'Comuna Vânători Neamţ', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30711, 'Comuna Vânătorii Mici', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30712, 'Comuna Vânãtori', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30713, 'Comuna Vânători', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30714, 'Comuna Vânători', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30715, 'Comuna Vânători', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30716, 'Comuna Vânători', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30717, 'Comuna Vâlcelele', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30718, 'Comuna Vâlcele', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30719, 'Comuna Vâlcele', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30720, 'Comuna Vâlcăneşti', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30721, 'Comuna Viişoara', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30722, 'Comuna Viişoara', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30723, 'Comuna Viile Satu Mare', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30724, 'Comuna Vidra', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30725, 'Comuna Vidra', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30726, 'Comuna Vidra', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30727, 'Oraş Videle', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30728, 'Comuna Victoria', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30729, 'Oraş Vicovu De Sus', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30730, 'Comuna Vicovu de Jos', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30731, 'Comuna Vetrişoaia', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30732, 'Comuna Vetiş', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30733, 'Comuna Veţel', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30734, 'Comuna Veţca', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30735, 'Comuna Verneşti', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30736, 'Comuna Vermeş', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30737, 'Comuna Verguleasa', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30738, 'Comuna Vereşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30739, 'Comuna Verbiţa', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30740, 'Comuna Vela', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30741, 'Comuna Vedea', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30742, 'Comuna Vedea', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30743, 'Comuna Vedea', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30744, 'Comuna Vatra Moldoviţei', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30745, 'Comuna Vătava', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30746, 'Comuna Vasilaţi', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30747, 'Comuna Vărşag', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30748, 'Comuna Variaş', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30749, 'Comuna Vărgata', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30750, 'Comuna Vărbilău', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30751, 'Comuna Vărăşti', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30752, 'Comuna Vărădia de Mureş', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30753, 'Comuna Vărădia', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30754, 'Comuna Vama Buzăului', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30755, 'Comuna Vama', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30756, 'Comuna Vama', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30757, 'Comuna Valu lui Traian', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30758, 'Comuna Văliug', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30759, 'Comuna Vălişoara', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30760, 'Comuna Văleni-Dâmboviţa', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30761, 'Comuna Văleni', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30762, 'Comuna Văleni', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30763, 'Comuna Valea Vinului', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30764, 'Comuna Valea Viilor', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30765, 'Comuna Valea Ursului', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30766, 'Comuna Valea Seacă', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30767, 'Comuna Valea Seacă', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30768, 'Comuna Ştefan Cel Mare', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30769, 'Comuna Valea Sării', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30770, 'Comuna Valea Sălciei', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30771, 'Comuna Valea Nucarilor', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30772, 'Comuna Valea Mare-Pravăţ', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30773, 'Comuna Valea Mare', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30774, 'Comuna Valea Mare', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30775, 'Comuna Valea Mare', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30776, 'Comuna Valea Măcrişului', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30777, 'Comuna Valea Lungă', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30778, 'Comuna Valea Lungă', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30779, 'Oraş Valea Lui Mihai', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30780, 'Comuna Valea Largă', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30781, 'Comuna Valea Ierii', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30782, 'Comuna Valea Iaşului', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30783, 'Comuna Valea Dragului', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30784, 'Comuna Valea Danului', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30785, 'Comuna Valea Crişului', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30786, 'Comuna Valea Ciorii', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30787, 'Comuna Valea Chioarului', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30788, 'Comuna Valea Călugărească', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30789, 'Oraş Vaşcãu', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30790, 'Comuna Vălcani', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30791, 'Comuna Vaideeni', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30792, 'Comuna Văgiuleşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30793, 'Comuna Vadu Săpat', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30794, 'Comuna Vadu Paşii', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30795, 'Comuna Vadu Crişului', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30796, 'Comuna Vădeni', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30797, 'Comuna Vădăstriţa', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30798, 'Comuna Vădastra', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30799, 'Comuna Vadu Izei', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30800, 'Comuna Vad', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30801, 'Comuna Văculeşti', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30802, 'Comuna Văcăreşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30803, 'Comuna Văcăreni', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30804, 'Comuna Urzicuţa', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30805, 'Comuna Urziceni', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30806, 'Comuna Urzica', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30807, 'Comuna Urmeniş', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30808, 'Comuna Uriu', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30809, 'Oraş Uricani', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30810, 'Comuna Urecheşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30811, 'Comuna Urecheşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30812, 'Comuna Urecheni', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30813, 'Comuna Urdari', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30814, 'Comuna Unţeni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30815, 'Comuna Unirea', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30816, 'Comuna General Berthelot', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30817, 'Comuna Unirea', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30818, 'Comuna Unguriu', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30819, 'Comuna Ungureni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30820, 'Comuna Unguraş', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30821, 'Comuna Ungra', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30822, 'Oraş Ungheni', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30823, 'Comuna Ungheni', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30824, 'Comuna Umbrăreşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30825, 'Comuna Ulmu', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30826, 'Comuna Ulmu', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30827, 'Comuna Ulmi', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30828, 'Oraş Ulmeni', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30829, 'Comuna Ulmeni', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30830, 'Comuna Ulmeni', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30831, 'Comuna Ulma', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30832, 'Comuna Ulieşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30833, 'Comuna Ulieş', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30834, 'Comuna Uivar', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30835, 'Comuna Uileacu de Beiuş', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30836, 'Comuna Udeşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30837, 'Comuna Uda-Clocociov', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30838, 'Comuna Uda', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30839, 'Comuna Ucea de Jos', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30840, 'Comuna Tuzla', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30841, 'Comuna Ţuţora', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30842, 'Comuna Tuşnad', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30843, 'Comuna Turulung', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30844, 'Comuna Turţ', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30845, 'Comuna Turnu Rueni', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30846, 'Comuna Turia', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30847, 'Comuna Tureni', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30848, 'Municipiul Turda', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30849, 'Comuna Turdaş', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30850, 'Comuna Turcoaia', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30851, 'Comuna Turcineşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30852, 'Oraş Turceni', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30853, 'Comuna Turburea', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30854, 'Comuna Tupilaţi', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30855, 'Comuna Tunari', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30856, 'Comuna Tuluceşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30857, 'Comuna Tulnici', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30858, 'Comuna Tulgheş', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30859, 'Comuna Tulca', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30860, 'Comuna Ţuglui', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30861, 'Comuna Tufeşti', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30862, 'Comuna Tufeni', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30863, 'Comuna Tudor Vladimirescu', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30864, 'Comuna Tudor Vladimirescu', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30865, 'Comuna Tudora', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30866, 'Comuna Truşeşti', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30867, 'Comuna Troianul', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30868, 'Comuna Trifeşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30869, 'Comuna Trifeşti', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30870, 'Comuna Traian Vuia', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30871, 'Comuna Traian', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30872, 'Comuna Traian', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30873, 'Comuna Traian', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30874, 'Comuna Traian', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30875, 'Comuna Traian', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30876, 'Comuna Toteşti', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30877, 'Comuna Tortoman', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30878, 'Comuna Tormac', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30879, 'Comuna Topraisar', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30880, 'Comuna Toporu', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30881, 'Oraș Topoloveni', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30882, 'Comuna Topolog', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30883, 'Comuna Topliţa', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30884, 'Comuna Topliceni', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30885, 'Comuna Topleţ', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30886, 'Comuna Topana', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30887, 'Comuna Topalu', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30888, 'Comuna Tomşani', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30889, 'Comuna Tomşani', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30890, 'Comuna Tomnatic', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30891, 'Comuna Tomeşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30892, 'Comuna Tomeşti', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30893, 'Comuna Tomeşti', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30894, 'Comuna Tomeşti', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30895, 'Comuna Todireşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30896, 'Comuna Todireşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30897, 'Comuna Todireni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30898, 'Oraş Titu', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30899, 'Comuna Titeşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30900, 'Comuna Țițești', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30901, 'Oraş Tismana', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30902, 'Comuna Târşolţ', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30903, 'Comuna Târnova', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30904, 'Comuna Târnova', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30905, 'Comuna Târlişua', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30906, 'Comuna Târgu Trotuş', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30907, 'Comuna Târguşor', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30908, 'Oraș Târgu Lăpuş', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30909, 'Oraş Târgu Frumos', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30910, 'Oraş Târgu Cãrbuneşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30911, 'Comuna Târgşoru Vechi', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30912, 'Comuna Tiream', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30913, 'Comuna Ţinteşti', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30914, 'Comuna Ţânţăreni', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30915, 'Comuna Tinosu', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30916, 'Comuna Tinca', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30917, 'Comuna Tâmna', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30918, 'Comuna Timişeşti', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30919, 'Comuna Tâmboeşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30920, 'Comuna Tilişca', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30921, 'Comuna Tileagd', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30922, 'Comuna Tiha Bârgăului', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30923, 'Comuna Tigveni', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30924, 'Comuna Ţigăneşti', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30925, 'Comuna Ţigănaşi', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30926, 'Comuna Ţifeşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30927, 'Comuna Ticvaniu Mare', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30928, 'Comuna Ticuşu Vechi', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30929, 'Oraş Ţicleni', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30930, 'Comuna Tichileşti', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30931, 'Comuna Ţibucani', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30932, 'Comuna Ţibăneşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30933, 'Comuna Ţibana', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30934, 'Comuna Tia Mare', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30935, 'Comuna Tetoiu', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30936, 'Comuna Teslui', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30937, 'Comuna Terpeziţa', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30938, 'Comuna Teregova', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30939, 'Comuna Terebeşti', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30940, 'Comuna Ţepu', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30941, 'Comuna Teliu', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30942, 'Comuna Teleşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30943, 'Comuna Telega', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30944, 'Comuna Telciu', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30945, 'Oraş Teiuş', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30946, 'Comuna Teiu', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30947, 'Comuna Teişani', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30948, 'Comuna Teasc', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30949, 'Comuna Teaca', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30950, 'Comuna Tazlău', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30951, 'Oraș Tăuţii-Măgherăuş', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30952, 'Comuna Tăuteu', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30953, 'Comuna Tauţ', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30954, 'Comuna Tătuleşti', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30955, 'Comuna Tătăruşi', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30956, 'Comuna Tătaru', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30957, 'Comuna Tătărăştii de Sus', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30958, 'Comuna Tătărăştii de Jos', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30959, 'Comuna Tătărăşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30960, 'Comuna Tătărăni', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30961, 'Comuna Tătărani', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30962, 'Oraș Tăşnad', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30963, 'Comuna Taşca', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30964, 'Comuna Tărtăşeşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30965, 'Comuna Tărlungeni', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30966, 'Comuna Tãureni', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30967, 'Comuna Tarcea', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30968, 'Comuna Tarcău', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30969, 'Comuna Tărcaia', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30970, 'Comuna Tansa', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30971, 'Comuna Tănăsoaia', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30972, 'Comuna Tanacu', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30973, 'Comuna Tămăşeni', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30974, 'Comuna Tãlpaş', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30975, 'Comuna Talpa', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30976, 'Oraş Tãlmaciu', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30977, 'Comuna Talea', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30978, 'Comuna Ţaga', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30979, 'Oraş Ţãndãrei', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30980, 'Comuna Tăcuta', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30981, 'Comuna Sviniţa', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30982, 'Comuna Şuţeşti', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30983, 'Comuna Suteşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30984, 'Comuna Suseni', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30985, 'Comuna Suseni', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30986, 'Comuna Suseni', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30987, 'Comuna Surduc', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30988, 'Comuna Surdila-Greci', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30989, 'Comuna Surdila-Găiseanca', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30990, 'Comuna Surani', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30991, 'Comuna Şura Mică', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30992, 'Comuna Şura Mare', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30993, 'Comuna Suraia', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30994, 'Comuna Suplacu de Barcău', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30995, 'Comuna Suliţa', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30996, 'Comuna Şuletea', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30997, 'Comuna Şuici', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30998, 'Comuna Suharău', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (30999, 'Comuna Suhaia', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31000, 'Comuna Şugag', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31001, 'Comuna Sudiţi', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31002, 'Comuna Suciu de Sus', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31003, 'Comuna Suceviţa', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31004, 'Comuna Subcetate', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31005, 'Comuna Suatu', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31006, 'Comuna Stulpicani', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31007, 'Comuna Studina', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31008, 'Comuna Strunga', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31009, 'Comuna Strugari', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31010, 'Comuna Stroieşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31011, 'Comuna Stroeşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31012, 'Comuna Strâmtura', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31013, 'Comuna Stremţ', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31014, 'Comuna Strejeşti', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31015, 'Comuna Străoane', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31016, 'Comuna Straja', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31017, 'Comuna Storobăneasa', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31018, 'Comuna Stolnici', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31019, 'Comuna Stolniceni-Prăjescu', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31020, 'Comuna Stoina', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31021, 'Comuna Stoileşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31022, 'Comuna Stoicăneşti', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31023, 'Comuna Stoeneşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31024, 'Comuna Stoeneşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31025, 'Comuna Stoeneşti', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31026, 'Comuna Stoeneşti', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31027, 'Comuna Ştiuca', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31028, 'Comuna Ştiubieni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31029, 'Comuna Stângăceaua', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31030, 'Comuna Stânceni', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31031, 'Comuna Stâlpu', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31032, 'Comuna Stâlpeni', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31033, 'Comuna Stejaru', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31034, 'Comuna Ştefeşti', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31035, 'Comuna Ştefan Vodă', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31036, 'Oraş Ştefãneşti', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31037, 'Oraș Ştefăneşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31038, 'Comuna Ştefăneşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31039, 'Comuna Ştefãneştii De Jos', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31040, 'Comuna Ştefan cel Mare', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31041, 'Comuna Ştefan cel Mare', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31042, 'Comuna Ştefan cel Mare', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31043, 'Comuna Ştefan cel Mare', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31044, 'Comuna Stăuceni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31045, 'Comuna Starchiojd', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31046, 'Comuna Stăniţa', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31047, 'Comuna Stănişeşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31048, 'Comuna Stănileşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31049, 'Comuna Stăneşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31050, 'Comuna Stăneşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31051, 'Comuna Stăneşti', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31052, 'Comuna Stăncuţa', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31053, 'Comuna Spulber', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31054, 'Comuna Şpring', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31055, 'Comuna Sprâncenata', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31056, 'Comuna Spinuş', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31057, 'Comuna Spineni', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31058, 'Comuna Spermezeu', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31059, 'Comuna Spanţov', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31060, 'Comuna Soveja', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31061, 'Comuna Sovarna', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31062, 'Comuna Şotrile', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31063, 'Comuna Şotânga', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31064, 'Comuna Şopotu Nou', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31065, 'Comuna Sopot', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31066, 'Comuna Şopârliţa', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31067, 'Comuna Şona', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31068, 'Comuna Somova', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31069, 'Comuna Someş-Odorhei', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31070, 'Oraș Şomcuta Mare', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31071, 'Comuna Solonţ', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31072, 'Comuna Soleşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31073, 'Comuna Şoldanu', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31074, 'Comuna Şoimuş', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31075, 'Comuna Şoimari', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31076, 'Comuna Sohodol', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31077, 'Comuna Sohatu', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31078, 'Comuna Şofronea', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31079, 'Comuna Socond', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31080, 'Comuna Socol', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31081, 'Comuna Socodor', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31082, 'Comuna Şoarş', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31083, 'Comuna Snagov', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31084, 'Comuna Smulţi', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31085, 'Comuna Smârdioasa', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31086, 'Comuna Smârdan', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31087, 'Comuna Smârdan', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31088, 'Comuna Smeeni', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31089, 'Comuna Slobozia Moara', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31090, 'Comuna Slobozia-Mândra', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31091, 'Comuna Slobozia Conachi', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31092, 'Comuna Slobozia-Ciorăşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31093, 'Comuna Slobozia Bradului', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31094, 'Comuna Slobozia', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31095, 'Comuna Slobozia', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31096, 'Comuna Slobozia', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31097, 'Comuna Slivileşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31098, 'Comuna Slimnic', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31099, 'Comuna Slava Cercheză', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31100, 'Comuna Slătioara', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31101, 'Comuna Slătioara', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31102, 'Comuna Slatina-Timiş', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31103, 'Comuna Slatina', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31104, 'Comuna Sita Buzăului', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31105, 'Comuna Şiştarovăţ', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31106, 'Comuna Siseşti', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31107, 'Comuna Şişeşti', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31108, 'Comuna Şirna', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31109, 'Comuna Siriu', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31110, 'Comuna Şirineasa', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31111, 'Comuna Şiria', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31112, 'Comuna Sireţel', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31113, 'Comuna Sârbii-Măgura', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31114, 'Comuna Sârbi', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31115, 'Comuna Sârbeni', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31116, 'Comuna Şipote', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31117, 'Comuna Sânzieni', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31118, 'Comuna Sântimbru', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31119, 'Comuna Sântimbru', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31120, 'Comuna Sinteşti', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31121, 'Comuna Şintereag', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31122, 'Comuna Sintea Mare', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31123, 'Comuna Şinteu', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31124, 'Comuna Sântana de Mureş', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31125, 'Oraş Sântana', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31126, 'Comuna Sântămăria-Orlea', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31127, 'Comuna Sânsimion', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31128, 'Comuna Sânpetru Mare', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31129, 'Comuna Sânpetru de Câmpie', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31130, 'Comuna Sânpetru', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31131, 'Comuna Sânpaul', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31132, 'Comuna Sânpaul', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31133, 'Comuna Sânnicolau-Român', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31134, 'Comuna Sânmihaiu Român', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31135, 'Comuna Sânmihaiu de Câmpie', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31136, 'Comuna Sânmihaiu Almaşului', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31137, 'Comuna Sânmărtin', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31138, 'Comuna Sânmartin', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31139, 'Comuna Sânmartin', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31140, 'Comuna Singureni', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31141, 'Comuna Sângeru', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31142, 'Comuna Sânger', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31143, 'Oraş Sângeorz-Bãi', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31144, 'Oraş   Sângeorgiu De Pãdure', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31145, 'Comuna Sângeorgiu de Mureş', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31146, 'Comuna Sineşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31147, 'Comuna Sineşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31148, 'Comuna Sândominic', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31149, 'Comuna Sâncraiu de Mureş', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31150, 'Comuna Sâncraiu', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31151, 'Comuna Sâncrăieni', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31152, 'Comuna Sâncel', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31153, 'Comuna Şinca Veche', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31154, 'Comuna Şinca Nouă', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31155, 'Comuna Şincai', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31156, 'Comuna Sânandrei', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31157, 'Comuna Simoneşti', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31158, 'Comuna Şimnicu de Sus', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31159, 'Comuna Şimişna', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31160, 'Comuna Siminicea', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31161, 'Comuna Şimian', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31162, 'Comuna Simian', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31163, 'Comuna Sâmbureşti', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31164, 'Comuna Sâmbăta de Sus', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31165, 'Comuna Sâmbăta', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31166, 'Comuna Şimand', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31167, 'Comuna Silivaşu De Câmpie', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31168, 'Comuna Siliștea Gumești', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31169, 'Comuna Siliștea Crucii', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31170, 'Comuna Siliştea', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31171, 'Comuna Siliştea', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31172, 'Comuna Siliştea', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31173, 'Comuna Şilindia', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31174, 'Comuna Sihlea', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31175, 'Comuna Sâg', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31176, 'Comuna Şieuţ', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31177, 'Comuna Şieu-Odorhei', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31178, 'Comuna Şieu-Măgheruş', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31179, 'Comuna Şieu', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31180, 'Comuna Şicula', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31181, 'Comuna Sicheviţa', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31182, 'Comuna Sic', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31183, 'Comuna Şibot', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31184, 'Comuna Sfântu Gheorghe', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31185, 'Comuna Sfântu Gheorghe', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31186, 'Comuna Sfinţeşti', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31187, 'Comuna Şercaia', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31188, 'Comuna Şerbăuţi', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31189, 'Comuna Şerbăneşti', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31190, 'Comuna Şepreuş', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31191, 'Comuna Şendriceni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31192, 'Comuna Şendreni', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31193, 'Comuna Semlac', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31194, 'Comuna Şelimbăr', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31195, 'Comuna Seleuş', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31196, 'Comuna Şelaru', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31197, 'Comuna Şeitin', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31198, 'Oraș Seini', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31199, 'Comuna Seimeni', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31200, 'Comuna Şeica Mică', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31201, 'Comuna Şeica Mare', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31202, 'Comuna Segarcea Vale', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31203, 'Oraș Segarcea', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31204, 'Comuna Secusigiu', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31205, 'Comuna Secuieni', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31206, 'Comuna Secuieni', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31207, 'Comuna Secu', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31208, 'Comuna Secaş', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31209, 'Comuna Secăria', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31210, 'Oraş Sebiş', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31211, 'Comuna Seaca de Pădure', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31212, 'Comuna Seaca de Câmp', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31213, 'Comuna Seaca', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31214, 'Comuna Seaca', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31215, 'Comuna Scutelnici', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31216, 'Comuna Scurtu Mare', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31217, 'Comuna Scundu', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31218, 'Comuna Scrioaştea', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31219, 'Comuna Scorţoasa', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31220, 'Comuna Scorţeni', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31221, 'Comuna Scorţaru Nou', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31222, 'Oraş Scorniceşti', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31223, 'Comuna Scobinţi', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31224, 'Comuna Scoarţa', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31225, 'Comuna Scânteia', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31226, 'Comuna Scânteia', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31227, 'Comuna Scânteieşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31228, 'Comuna Schitu-Goleşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31229, 'Comuna Schitu-Duca', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31230, 'Comuna Schitu', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31231, 'Comuna Schela', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31232, 'Comuna Schela', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31233, 'Comuna Scheia', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31234, 'Comuna Scheia', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31235, 'Comuna Scărişoara', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31236, 'Comuna Scărişoara', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31237, 'Comuna Scăeşti', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31238, 'Comuna Săvârşin', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31239, 'Comuna Săvineşti', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31240, 'Oraş Sãveni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31241, 'Comuna Săveni', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31242, 'Comuna Săvădisla', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31243, 'Comuna Şăulia', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31244, 'Comuna Săuleşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31245, 'Comuna Săuceşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31246, 'Comuna Săuca', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31247, 'Comuna Satu Mare', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31248, 'Comuna Satu Mare', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31249, 'Comuna Satulung', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31250, 'Comuna Satchinez', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31251, 'Comuna Sascut', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31252, 'Comuna Săsciori', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31253, 'Comuna Saschiz', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31254, 'Comuna Sasca Montană', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31255, 'Comuna Săruleşti', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31256, 'Comuna Săruleşti', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31257, 'Comuna Şaru Dornei', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31258, 'Comuna Sarmizegetusa', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31259, 'Oraş Sarmaşu', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31260, 'Comuna Şărmăşag', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31261, 'Comuna Sărmaş', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31262, 'Comuna Sarichioi', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31263, 'Comuna Saravale', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31264, 'Comuna Sărăţeni', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31265, 'Comuna Sărăţeni', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31266, 'Comuna Sărata', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31267, 'Comuna Sărăsău', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31268, 'Comuna Saraiu', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31269, 'Comuna Săpoca', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31270, 'Comuna Sãpânţa', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31271, 'Comuna Săpata', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31272, 'Comuna Santău', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31273, 'Comuna Şanţ', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31274, 'Comuna Sanislău', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31275, 'Comuna Sănduleşti', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31276, 'Comuna Sănduleni', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31277, 'Comuna Şandra', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31278, 'Comuna Şamşud', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31279, 'Comuna Samarineşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31280, 'Comuna Salva', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31281, 'Comuna Sălsig', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31282, 'Oraș Săliştea de Sus', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31283, 'Comuna Sãliştea', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31284, 'Comuna Saligny', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31285, 'Comuna Sălcuţa', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31286, 'Comuna Sălciua', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31287, 'Comuna Sălcioara', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31288, 'Comuna Sălcioara', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31289, 'Comuna Sălciile', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31290, 'Comuna Salcia Tudor', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31291, 'Comuna Salcia', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31292, 'Comuna Salcia', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31293, 'Comuna Salcia', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31294, 'Oraş Salcea', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31295, 'Comuna Sălătrucu', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31296, 'Comuna Sălătrucel', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31297, 'Comuna Sălăţig', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31298, 'Comuna Sălard', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31299, 'Comuna Sălacea', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31300, 'Comuna Săhăteni', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31301, 'Comuna Şagu', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31302, 'Comuna Sagna', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31303, 'Comuna Săgeata', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31304, 'Comuna Şag', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31305, 'Comuna Saelele', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31306, 'Comuna Sadu', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31307, 'Comuna Sadova', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31308, 'Comuna Sadova', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31309, 'Comuna Sãcuieu', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31310, 'Oraş Sãcueni', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31311, 'Comuna Sacu', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31312, 'Comuna Sacoşu Turcesc', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31313, 'Comuna Săceni', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31314, 'Comuna Săcelu', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31315, 'Comuna Săcele', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31316, 'Comuna Săcel', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31317, 'Comuna Săcel', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31318, 'Comuna Vadu Moţilor', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31319, 'Comuna Săcăşeni', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31320, 'Comuna Săcălaz', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31321, 'Comuna Săcălăşeni', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31322, 'Comuna Săcădat', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31323, 'Comuna Săbăreni', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31324, 'Comuna Săbăoani', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31325, 'Comuna Ruşii Munţi', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31326, 'Comuna Ruşeţu', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31327, 'Comuna Ruşcova', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31328, 'Comuna Rusca Montană', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31329, 'Comuna Rusăneşti', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31330, 'Comuna Rus', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31331, 'Comuna Runcu', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31332, 'Comuna Runcu', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31333, 'Comuna Runcu', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31334, 'Comuna Ruginoasa', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31335, 'Comuna Rugineşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31336, 'Comuna Izvoare', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31337, 'Comuna Rucăr', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31338, 'Oraş Roznov', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31339, 'Comuna Rozavlea', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31340, 'Comuna Rotunda', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31341, 'Comuna Roşiori', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31342, 'Comuna Roşiori', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31343, 'Comuna Roşiori', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31344, 'Comuna Roşiori', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31345, 'Comuna Roşiile', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31346, 'Comuna Roşieşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31347, 'Comuna Roşia Montană', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31348, 'Comuna Roşia de Secaş', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31349, 'Comuna Roşia', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31350, 'Comuna Roşia', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31351, 'Comuna Roseţi', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31352, 'Comuna Roşcani', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31353, 'Comuna Rona de Sus', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31354, 'Comuna Rona de Jos', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31355, 'Comuna Romuli', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31356, 'Comuna Romos', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31357, 'Comuna Români', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31358, 'Comuna Româneşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31359, 'Comuna Românaşi', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31360, 'Comuna Romanu', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31361, 'Comuna Româneşti', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31362, 'Comuna Roma', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31363, 'Comuna Rojişte', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31364, 'Comuna Rogova', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31365, 'Comuna Roeşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31366, 'Comuna Rodna', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31367, 'Comuna Rociu', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31368, 'Comuna Robeasca', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31369, 'Comuna Robăneşti', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31370, 'Comuna Râu Sadului', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31371, 'Comuna Râu de Mori', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31372, 'Comuna Râu Alb', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31373, 'Comuna Râşca', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31374, 'Comuna Râșca', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31375, 'Comuna Gura Văii', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31376, 'Comuna Ripiceni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31377, 'Comuna Râmnicelu', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31378, 'Comuna Râmnicelu', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31379, 'Comuna Râmeţ', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31380, 'Comuna Râmetea', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31381, 'Comuna Râfov', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31382, 'Comuna Rieni', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31383, 'Comuna Râciu', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31384, 'Comuna Râca', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31385, 'Comuna Ribiţa', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31386, 'Comuna Reviga', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31387, 'Comuna Repedea', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31388, 'Comuna Remeţi', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31389, 'Comuna Remetea Mare', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31390, 'Comuna Remetea Chioarului', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31391, 'Comuna Remetea', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31392, 'Comuna Remetea', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31393, 'Comuna Reghiu', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31394, 'Comuna Rediu-Tătar', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31395, 'Comuna Rediu', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31396, 'Comuna Rediu', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31397, 'Comuna Redea', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31398, 'Comuna Reci', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31399, 'Comuna Recea Cristur', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31400, 'Comuna Recea', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31401, 'Comuna Recea', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31402, 'Comuna Recea', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31403, 'Comuna Rebrişoara', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31404, 'Comuna Rebricea', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31405, 'Comuna Rebra', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31406, 'Comuna Războeni-Cetate', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31407, 'Comuna Rãzboieni', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31408, 'Comuna Răuseni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31409, 'Comuna Răuceşti', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31410, 'Comuna Răteşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31411, 'Comuna Rãzvad', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31412, 'Comuna Răsuceni', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31413, 'Rastu Vechi', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31414, 'Comuna Răstoliţa', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31415, 'Comuna Răstoaca', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31416, 'Comuna Rasova', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31417, 'Comuna Răsmireşti', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31418, 'Comuna Răşinari', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31419, 'Comuna Răscăeţi', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31420, 'Comuna Rapoltu Mare', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31421, 'Comuna Ramna', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31422, 'Comuna Rafaila', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31423, 'Comuna Răduleşti', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31424, 'Comuna Răducăneni', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31425, 'Comuna Radovanu', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31426, 'Comuna Radovan', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31427, 'Comuna Radomireşti', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31428, 'Comuna Rãdoieşti', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31429, 'Comuna Rădeşti', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31430, 'Comuna Rădeşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31431, 'Municipiul Rãdãuţi', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31432, 'Comuna Rădăşeni', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31433, 'Comuna Racu', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31434, 'Comuna Racoviţeni', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31435, 'Comuna Racoviţa', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31436, 'Comuna Racoviţa', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31437, 'Comuna Racoviţa', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31438, 'Comuna Racoviţa', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31439, 'Comuna Racova', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31440, 'Comuna Răcoasa', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31441, 'Comuna Raciu', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31442, 'Comuna Răchitova', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31443, 'Comuna Răchitoasa', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31444, 'Comuna Răchiţi', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31445, 'Comuna Răchiţeni', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31446, 'Comuna Răcăşdia', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31447, 'Oraş Rãcari', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31448, 'Comuna Răcăciuni', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31449, 'Comuna Răbăgani', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31450, 'Comuna Putna', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31451, 'Comuna Putineiu', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31452, 'Comuna Putineiu', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31453, 'Comuna Puşcaşi', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31454, 'Comuna Purani', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31455, 'Comuna Punghina', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31456, 'Comuna Pungeşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31457, 'Comuna Pui', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31458, 'Comuna Pufeşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31459, 'Comuna Puieşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31460, 'Comuna Puieşti', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31461, 'Comuna Poeni', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31462, 'Comuna Puchenii Mari', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31463, 'Comuna Pucheni', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31464, 'Comuna Prunişor', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31465, 'Comuna Prundu Bârgăului', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31466, 'Comuna Prundu', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31467, 'Comuna Prundeni', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31468, 'Comuna Proviţa de Sus', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31469, 'Comuna Proviţa de Jos', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31470, 'Comuna Produleşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31471, 'Comuna Probota', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31472, 'Comuna Pristol', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31473, 'Comuna Priseaca', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31474, 'Comuna Prisăcani', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31475, 'Comuna Priponeşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31476, 'Comuna Prigoria', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31477, 'Comuna Prigor', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31478, 'Comuna Priboieni', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31479, 'Comuna Preuteşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31480, 'Comuna Prejmer', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31481, 'Comuna Predeşti', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31482, 'Comuna Predeal-Sărari', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31483, 'Comuna Prăjeşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31484, 'Comuna Prăjeni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31485, 'Comuna Praid', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31486, 'Comuna Potlogi', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31487, 'Oraş Potcoava', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31488, 'Comuna Poseşti', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31489, 'Comuna Poşaga', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31490, 'Comuna Porumbeşti', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31491, 'Comuna Porumbeni', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31492, 'Comuna Porumbacu de Jos', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31493, 'Comuna Poroschia', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31494, 'Comuna Poroina Mare', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31495, 'Comuna Popricani', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31496, 'Comuna Poplaca', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31497, 'Comuna Popeşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31498, 'Oraş Popeşti Leordeni', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31499, 'Comuna Popeşti', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31500, 'Comuna Popeşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31501, 'Comuna Popeşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31502, 'Comuna Ponor', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31503, 'Comuna Ponoarele', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31504, 'Comuna Pomârla', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31505, 'Comuna Pomi', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31506, 'Comuna Pomezeu', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31507, 'Comuna Polovragi', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31508, 'Comuna Pojorâta', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31509, 'Comuna Pojejena', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31510, 'Comuna Poienile de sub Munte', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31511, 'Comuna Poieneşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31512, 'Comuna Poiana Teiului', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31513, 'Comuna Poiana Stampei', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31514, 'Comuna Poiana Sibiului', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31515, 'Comuna Poiana Mărului', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31516, 'Comuna Poiana Mare', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31517, 'Comuna Poiana Lacului', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31518, 'Comuna Poiana Câmpina', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31519, 'Comuna Poiana Blenchii', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31520, 'Comuna Poiana', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31521, 'Comuna Poiana', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31522, 'Comuna Poian', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31523, 'Oraş Pogoanele', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31524, 'Comuna Pogana', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31525, 'Comuna Pogăceaua', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31526, 'Comuna Poieni-Solca', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31527, 'Comuna Poieni', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31528, 'Comuna Poienarii Burchii', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31529, 'Comuna Poienari', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31530, 'Comuna Poienarii de Muscel', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31531, 'Comuna Poienarii de Argeş', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31532, 'Comuna Podu Turcului', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31533, 'Comuna Poduri', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31534, 'Oraş Podu Iloaiei', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31535, 'Comuna Podoleni', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31536, 'Comuna Podenii Noi', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31537, 'Comuna Podeni', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31538, 'Comuna Podari', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31539, 'Comuna Pocola', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31540, 'Comuna Pochidia', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31541, 'Comuna Poboru', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31542, 'Comuna Poarta Albă', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31543, 'Comuna Plugari', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31544, 'Comuna Ploscuţeni', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31545, 'Comuna Ploscoş', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31546, 'Comuna Plosca', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31547, 'Comuna Plopu', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31548, 'Comuna Plopşoru', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31549, 'Comuna Plopiş', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31550, 'Comuna Plopii Slăviţeşti', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31551, 'Oraş Plopeni', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31552, 'Comuna Plopana', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31553, 'Comuna Pleşoiu', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31554, 'Comuna Pleşoi', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31555, 'Comuna Pleşcuţa', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31556, 'Comuna Pleniţa', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31557, 'Comuna Platoneşti', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31558, 'Comuna Plătăreşti', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31559, 'Comuna Piscu Vechi', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31560, 'Comuna Piscu', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31561, 'Comuna Pişcolt', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31562, 'Comuna Pişchia', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31563, 'Comuna Pârşcoveni', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31564, 'Comuna Pârscov', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31565, 'Comuna Pârjol', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31566, 'Comuna Pârâu', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31567, 'Comuna Pârgăreşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31568, 'Comuna Pir', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31569, 'Comuna Pipirig', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31570, 'Comuna Pângăraţi', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31571, 'Oraş Pâncota', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31572, 'Comuna Pânceşti', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31573, 'Comuna Pilu', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31574, 'Comuna Pietroşiţa', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31575, 'Comuna Pietroşani', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31576, 'Comuna Pietroşani', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31577, 'Comuna Pietroasele', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31578, 'Comuna Pietroasa', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31579, 'Comuna Pietroasa', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31580, 'Comuna Pietrari', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31581, 'Comuna Pietrari', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31582, 'Comuna Pieleşti', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31583, 'Comuna Piatra Şoimului', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31584, 'Oraş Piatra-Olt', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31585, 'Comuna Piatra', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31586, 'Comuna Pianu', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31587, 'Comuna Petrova', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31588, 'Comuna Petriş', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31589, 'Comuna Petricani', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31590, 'Comuna Petreşti', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31591, 'Comuna Petreşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31592, 'Comuna Petelea', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31593, 'Comuna Peştişani', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31594, 'Comuna Peştera', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31595, 'Comuna Pesceana', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31596, 'Comuna Pescari', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31597, 'Comuna Pesac', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31598, 'Comuna Perşinari', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31599, 'Comuna Perişoru', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31600, 'Comuna Perişor', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31601, 'Comuna Perişani', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31602, 'Comuna Perieţi', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31603, 'Comuna Perieţi', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31604, 'Comuna Perieni', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31605, 'Comuna Pericei', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31606, 'Comuna Periam', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31607, 'Comuna Peretu', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31608, 'Comuna Peregu Mare', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31609, 'Comuna Peciu Nou', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31610, 'Comuna Pecineaga', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31611, 'Oraş Pecica', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31612, 'Comuna Pechea', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31613, 'Comuna Peceneaga', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31614, 'Comuna Păuşeşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31615, 'Comuna Păuşeşti-Măglaşi', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31616, 'Comuna Păuneşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31617, 'Comuna Păuliş', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31618, 'Comuna Păuleşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31619, 'Comuna Păuleşti', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31620, 'Comuna Păuca', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31621, 'Comuna Pătulele', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31622, 'Comuna Pătrăuţi', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31623, 'Oraş Pãtârlagele', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31624, 'Comuna Viişoara', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31625, 'Comuna Păstrăveni', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31626, 'Comuna Păsăreni', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31627, 'Comuna Parva', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31628, 'Comuna Părteştii de Jos', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31629, 'Comuna Parţa', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31630, 'Comuna Parincea', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31631, 'Comuna Pardoşi', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31632, 'Comuna Pardina', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31633, 'Comuna Parava', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31634, 'Comuna Papiu Ilarian', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31635, 'Comuna Panticeu', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31636, 'Comuna Pantelimon', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31637, 'Oraş Pantelimon', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31638, 'Comuna Pănet', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31639, 'Comuna Pănceşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31640, 'Comuna Pănătău', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31641, 'Comuna Panaci', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31642, 'Comuna Păltinoasa', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31643, 'Comuna Păltiniş', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31644, 'Comuna Paltin', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31645, 'Comuna Paleu', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31646, 'Comuna Palanca', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31647, 'Comuna Pădureni', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31648, 'Comuna Pădureni', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31649, 'Comuna Padina', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31650, 'Comuna Padina', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31651, 'Comuna Padeş', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31652, 'Comuna Păcureţi', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31653, 'Comuna Ozun', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31654, 'Oraş Ovidiu', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31655, 'Comuna Măciuca', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31656, 'Oraş Otopeni', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31657, 'Comuna Oteşani', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31658, 'Oraş Oţelu Roşu', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31659, 'Comuna Oţeleni', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31660, 'Comuna Otelec', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31661, 'Comuna Ostroveni', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31662, 'Comuna Ostrov', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31663, 'Comuna Ostrov', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31664, 'Comuna Ostra', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31665, 'Comuna Oşorhei', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31666, 'Comuna Osica de Sus', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31667, 'Comuna Osica de Jos', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31668, 'Comuna Oşeşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31669, 'Comuna Orţişoara', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31670, 'Comuna Orodel', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31671, 'Comuna Ormeniş', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31672, 'Comuna Orleşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31673, 'Comuna Orlea', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31674, 'Comuna Orlat', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31675, 'Comuna Orbeni', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31676, 'Comuna Orbeasca', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31677, 'Comuna Oraşu Nou', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31678, 'Comuna Orăştioara de Sus', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31679, 'Comuna Oprişor', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31680, 'Comuna Oporelu', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31681, 'Comuna Oniceni', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31682, 'Comuna Onceşti', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31683, 'Comuna Oltina', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31684, 'Comuna Olteni', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31685, 'Comuna Olteneşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31686, 'Comuna Olcea', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31687, 'Comuna Olari', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31688, 'Comuna Ojdula', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31689, 'Comuna Oituz', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31690, 'Comuna Oinacu', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31691, 'Comuna Ohaba Lungă', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31692, 'Comuna Ohaba', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31693, 'Comuna Ogrezeni', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31694, 'Comuna Ograda', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31695, 'Comuna Ogra', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31696, 'Comuna Odoreu', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31697, 'Comuna Odobeşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31698, 'Comuna Odobeşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31699, 'Comuna Odăile', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31700, 'Comuna Ocoliş', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31701, 'Comuna Ocniţa', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31702, 'Comuna Ocna Şugatag', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31703, 'Oraş Ocna Sibiului', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31704, 'Comuna Ocland', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31705, 'Comuna Obreja', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31706, 'Comuna Oboga', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31707, 'Comuna Obârşia-Cloşani', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31708, 'Comuna Obârşia', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31709, 'Comuna Oarţa De Jos', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31710, 'Comuna Oarja', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31711, 'Comuna Oancea', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31712, 'Comuna Nuşfalău', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31713, 'Comuna Nuşeni', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31714, 'Comuna Nufăru', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31715, 'Comuna Nucşoara', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31716, 'Comuna Nucet', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31717, 'Novaci', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31718, 'Comuna Noşlac', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31719, 'Comuna Nojorid', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31720, 'Comuna Nocrich', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31721, 'Comuna Niţchidorf', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31722, 'Comuna Nistoreşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31723, 'Comuna Nimigea', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31724, 'Comuna Niculiţel', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31725, 'Comuna Nicşeni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31726, 'Comuna Nicoreşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31727, 'Comuna Niculeşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31728, 'Comuna Nicolae Titulescu', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31729, 'Comuna Nicolae Bălcescu', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31730, 'Comuna Nicolae Bălcescu', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31731, 'Comuna Nicolae Bălcescu', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31732, 'Comuna Nereju', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31733, 'Comuna Nenciuleşti', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31734, 'Oraş Nehoiu', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31735, 'Oraş Negru Vodã', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31736, 'Comuna Negrileşti', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31737, 'Comuna Negrileşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31738, 'Comuna Negrileşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31739, 'Comuna Negri', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31740, 'Oraş Negreşti-Oaş', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31741, 'Comuna Negreşti', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31742, 'Oraş Negreşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31743, 'Comuna Negreni', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31744, 'Comuna Negraşi', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31745, 'Comuna Negomir', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31746, 'Comuna Negoi', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31747, 'Comuna Necşeşti', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31748, 'Comuna Neaua', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31749, 'Comuna Poiana Vadului', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31750, 'Oraş Nãvodari', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31751, 'Comuna Năsturelu', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31752, 'Comuna Năruja', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31753, 'Comuna Năpradea', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31754, 'Comuna Nanov', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31755, 'Comuna Năneşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31756, 'Comuna Nana', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31757, 'Comuna Nămoloasa', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31758, 'Comuna Nalbant', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31759, 'Comuna Naidaş', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31760, 'Comuna Năeni', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31761, 'Comuna Nădrag', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31762, 'Oraş Nãdlac', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31763, 'Comuna Nadeş', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31764, 'Comuna Mușătești', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31765, 'Comuna Muşeteşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31766, 'Comuna Murighiol', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31767, 'Comuna Murgeşti', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31768, 'Oraș Murgeni', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31769, 'Comuna Murgaşi', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31770, 'Comuna Muntenii de Sus', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31771, 'Comuna Muntenii de Jos', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31772, 'Comuna Munteni Buzău', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31773, 'Comuna Munteni', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31774, 'Comuna Mugeni', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31775, 'Comuna Muereasca', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31776, 'Comuna Mozăceni', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31777, 'Comuna Moviliţa', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31778, 'Comuna Moviliţa', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31779, 'Comuna Movileni', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31780, 'Comuna Movileni', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31781, 'Comuna Movileni', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31782, 'Comuna Movila Miresii', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31783, 'Comuna Movila Banului', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31784, 'Comuna Movila', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31785, 'Comuna Motoşeni', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31786, 'Comuna Moţca', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31787, 'Comuna Moţăţei', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31788, 'Comuna Moţãieni', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31789, 'Comuna Moşteni', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31790, 'Comuna Moşoaia', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31791, 'Comuna Moşna', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31792, 'Comuna Moşna', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31793, 'Comuna Morunglav', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31794, 'Comuna Morteni', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31795, 'Comuna Moroeni', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31796, 'Comuna Moraviţa', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31797, 'Comuna Monor', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31798, 'Comuna Moneasa', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31799, 'Comuna Moldoviţa', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31800, 'Comuna Moldoveni', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31801, 'Comuna Moldoveneşti', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31802, 'Comuna Moldova Suliţa', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31803, 'Comuna Moisei', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31804, 'Comuna Mogoşoaia', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31805, 'Comuna Mogoşeşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31806, 'Comuna Mogoşani', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31807, 'Comuna Mogoş', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31808, 'Comuna Moftinu', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31809, 'Comuna Moieciu', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31810, 'Comuna Modelu', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31811, 'Comuna Mociu', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31812, 'Comuna Moara', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31813, 'Comuna Moacşa', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31814, 'Comuna Mitrofani', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31815, 'Comuna Mitreni', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31816, 'Comuna Mitocu Dragomirnei', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31817, 'Comuna Mitoc', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31818, 'Comuna Mischii', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31819, 'Comuna Mişca', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31820, 'Comuna Mirşid', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31821, 'Comuna Mârşani', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31822, 'Comuna Mârşa', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31823, 'Comuna Mirosloveşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31824, 'Comuna Miroşi', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31825, 'Comuna Mironeasa', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31826, 'Comuna Mireşu Mare', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31827, 'Comuna Mirceşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31828, 'Comuna Mircea Vodă', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31829, 'Comuna Mircea Vodă', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31830, 'Comuna Mirăslău', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31831, 'Oraș Mioveni', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31832, 'Comuna Mioarele', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31833, 'Comuna Mânzăleşti', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31834, 'Comuna Mintiu Gherlii', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31835, 'Comuna Măneciu', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31836, 'Comuna Mândra', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31837, 'Comuna Mânăstireni', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31838, 'Comuna Mânăstirea Humorului', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31839, 'Comuna Caşin', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31840, 'Comuna Mânăstirea', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31841, 'Comuna Miloşeşti', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31842, 'Oraş Milişãuţi', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31843, 'Comuna Mileanca', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31844, 'Comuna Milcov', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31845, 'Comuna Milcoiu', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31846, 'Comuna Milas', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31847, 'Comuna Miheşu de Câmpie', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31848, 'Comuna Mihalţ', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31849, 'Comuna Mihălăşeni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31850, 'Comuna Mihai Viteazu', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31851, 'Comuna Mihai Viteazu', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31852, 'Comuna Mihail Kogălniceanu', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31853, 'Comuna Mihail Kogălniceanu', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31854, 'Comuna Mihail Kogălniceanu', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31855, 'Comuna Mihăileşti', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31856, 'Oraş Mihãileşti', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31857, 'Comuna Mihăileni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31858, 'Comuna Mihăileni', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31859, 'Comuna Mihăileni', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31860, 'Comuna Mihai Bravu', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31861, 'Comuna Mihai Bravu', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31862, 'Comuna Mihăeşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31863, 'Comuna Mihăeşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31864, 'Comuna Mihăeşti', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31865, 'Oraş Miercurea Nirajului', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31866, 'Comuna Micula', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31867, 'Comuna Micleşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31868, 'Comuna Micfalău', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31869, 'Comuna Miceştii de Câmpie', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31870, 'Comuna Miceşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31871, 'Comuna Micăsasa', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31872, 'Comuna Mica', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31873, 'Comuna Mica', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31874, 'Comuna Meteş', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31875, 'Comună Meseşenii de Jos', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31876, 'Comuna Merghindeal', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31877, 'Comuna Mereşti', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31878, 'Comuna Mereni', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31879, 'Comuna Mereni', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31880, 'Comuna Mereni', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31881, 'Comuna Merei', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31882, 'Comuna Mera', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31883, 'Comuna Melineşti', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31884, 'Comuna Mehadica', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31885, 'Comuna Mehadia', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31886, 'Comuna Medieşu Aurit', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31887, 'Comuna Măxineni', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31888, 'Comuna Mavrodin', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31889, 'Comuna Măureni', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31890, 'Comuna Matei', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31891, 'Comuna Mateeşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31892, 'Comuna Matca', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31893, 'Comuna Mătăsaru', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31894, 'Comuna Mătăsari', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31895, 'Comuna Măstăcani', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31896, 'Comuna Maşloc', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31897, 'Comuna Mărunţei', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31898, 'Comuna Mărtiniş', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31899, 'Comuna Mărtineşti', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31900, 'Comuna Marpod', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31901, 'Comuna Mărişelu', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31902, 'Comuna Mărişel', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31903, 'Comuna Mărgineni', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31904, 'Comuna Mărgineni', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31905, 'Comuna Marginea', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31906, 'Comuna Margina', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31907, 'Municipiul Marghita', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31908, 'Comuna Mărgău', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31909, 'Comuna Mărgăriteşti', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31910, 'Comuna Marga', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31911, 'Comuna Mărculeşti', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31912, 'Comuna Marca', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31913, 'Comuna Măraşu', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31914, 'Comuna Mărăcineni', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31915, 'Comuna Mărăcineni', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31916, 'Comuna Manoleasa', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31917, 'Comuna Măneşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31918, 'Comuna Măneşti', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31919, 'Comuna Mănăştiur', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31920, 'Comuna Manasia', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31921, 'Comuna Măluşteni', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31922, 'Comuna Mălureni', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31923, 'Comuna Malu cu Flori', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31924, 'Comuna Malu Mare', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31925, 'Comuna Malu', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31926, 'Comuna Malovãţ', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31927, 'Comuna Malnaş', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31928, 'Comuna Mălini', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31929, 'Comuna Măldăreşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31930, 'Comuna Măldăeni', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31931, 'Comuna Malaia', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31932, 'Comuna Măieru', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31933, 'Comuna Măicăneşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31934, 'Comuna Maia', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31935, 'Comuna Mahmudia', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31936, 'Comuna Măgureni', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31937, 'Comuna Măgurele', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31938, 'Oraş Mãgurele', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31939, 'Comuna Măgura Ilvei', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31940, 'Comuna Măgura', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31941, 'Comuna Măgura', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31942, 'Comuna Măgura', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31943, 'Comuna Maglavit', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31944, 'Comuna Măgireşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31945, 'Comuna Măgherani', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31946, 'Comuna Măgeşti', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31947, 'Comuna Mãieruş', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31948, 'Comuna Măerişte', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31949, 'Comuna Mădulari-Beica', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31950, 'Comuna Mădârjac', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31951, 'Comuna Mădăraş', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31952, 'Comuna Mădăraş', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31953, 'Comuna Mădăraş', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31954, 'Comuna Măceşu de Sus', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31955, 'Comuna Măceşu de Jos', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31956, 'Comuna Macea', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31957, 'Comuna Lupşanu', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31958, 'Comuna Lupşa', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31959, 'Comuna Lupeni', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31960, 'Comuna Lupac', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31961, 'Comuna Lunguleţu', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31962, 'Comuna Lungeşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31963, 'Comuna Lungani', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31964, 'Comuna Luncaviţa', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31965, 'Comuna Luncaviţa', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31966, 'Comuna Lunca Mureşului', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31967, 'Comuna Lunca Ilvei', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31968, 'Comuna Lunca de Sus', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31969, 'Comuna Lunca de Jos', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31970, 'Comuna Lunca Bradului', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31971, 'Comuna Lunca Banului', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31972, 'Comuna Lunca', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31973, 'Comuna Lunca', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31974, 'Comuna Lunca', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31975, 'Comuna Luna', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31976, 'Comuna Luica', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31977, 'Comuna Lueta', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31978, 'Oraş Luduş', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31979, 'Comuna Ludoş', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31980, 'Comuna Ludeşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31981, 'Comuna Luciu', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31982, 'Comuna Lucieni', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31983, 'Comuna Lozna', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31984, 'Comuna Lozna', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31985, 'Comuna Lovrin', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31986, 'Comuna Lopătari', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31987, 'Comuna Lopadea Nouă', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31988, 'Comuna Logreşti-Moşteni', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31989, 'Comuna Loamneş', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31990, 'Comuna Livezile', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31991, 'Oraș Livada', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31992, 'Comuna Livada', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31993, 'Oraş Liteni', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31994, 'Comuna Liţa', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31995, 'Comuna Lisa', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31996, 'Comuna Lisa', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31997, 'Comuna Lipovu', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31998, 'Comuna Lipovăţ', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (31999, 'Comuna Lipova', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32000, 'Comuna Lipniţa', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32001, 'Comuna Lipăneşti', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32002, 'Comuna Limanu', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32003, 'Comuna Lieşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32004, 'Comuna Liebling', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32005, 'Comuna Licurici', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32006, 'Comuna Leu', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32007, 'Comuna Letea Veche', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32008, 'Comuna Letca Nouă', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32009, 'Comuna Leţcani', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32010, 'Comuna Letca', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32011, 'Comuna Leşu', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32012, 'Comuna Lespezi', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32013, 'Comuna Lereşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32014, 'Comuna Leordina', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32015, 'Comuna Leordeni', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32016, 'Comuna Leorda', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32017, 'Comuna Lenauheim', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32018, 'Comuna Lemnia', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32019, 'Comuna Leliceni', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32020, 'Comuna Leleşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32021, 'Comuna Lelese', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32022, 'Comuna Leleasca', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32023, 'Comuna Lehliu', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32024, 'Comuna Lechinţa', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32025, 'Comuna Lazuri de Beiuş', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32026, 'Comuna Lazuri', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32027, 'Comuna Lăzăreni', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32028, 'Comuna Lăzarea', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32029, 'Comuna Laza', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32030, 'Comuna Laslea', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32031, 'Comuna Largu', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32032, 'Comuna Lăpuşnicu Mare', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32033, 'Comuna Lăpuşnicel', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32034, 'Comuna Lăpuşata', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32035, 'Comuna Lăpuş', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32036, 'Comuna Lapoş', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32037, 'Comuna Laloşu', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32038, 'Comuna Lădeşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32039, 'Comuna Lăcusteni', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32040, 'Comuna Jurilovca', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32041, 'Comuna Jupâneşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32042, 'Comuna Jugureni', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32043, 'Comuna Jucu', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32044, 'Comuna Josenii Bârgăului', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32045, 'Comuna Joseni', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32046, 'Comuna Jorăşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32047, 'Comuna Joiţa', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32048, 'Comuna Jitia', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32049, 'Comuna Jirlău', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32050, 'Comuna Jina', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32051, 'Comuna Jilavele', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32052, 'Comuna Jilava', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32053, 'Comuna Jijila', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32054, 'Comuna Jidvei', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32055, 'Oraș Jibou', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32056, 'Comuna Jibert', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32057, 'Comuna Jegălia', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32058, 'Comuna Jebel', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32059, 'Comuna Jariştea', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32060, 'Comuna Jamu Mare', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32061, 'Comuna Izvoru Crişului', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32062, 'Comuna Izvoru Bârzii', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32063, 'Comuna Izvoru Berheciului', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32064, 'Comuna Izvoru', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32065, 'Comuna Izvoarele Sucevei', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32066, 'Comuna Izvoarele', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32067, 'Comuna Izvoarele', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32068, 'Comuna Isvoarele', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32069, 'Comuna Izvoarele', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32070, 'Comuna Iveşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32071, 'Comuna Iveşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32072, 'Comuna Ivăneşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32073, 'Comuna Iteşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32074, 'Comuna Isverna', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32075, 'Comuna Istria', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32076, 'Comuna Islaz', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32077, 'Comuna Izbiceni', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32078, 'Comuna Işalniţa', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32079, 'Comuna Iratoşu', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32080, 'Comuna Ipoteşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32081, 'Comuna Ipatele', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32082, 'Comuna Ip', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32083, 'Comuna Iordãcheanu', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32084, 'Comuna Ion Roată', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32085, 'Comuna Ioneşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32086, 'Comuna Ioneşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32087, 'Comuna Ion Creangă', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32088, 'Comuna Ion Corvin', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32089, 'Comuna Întregalde', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32090, 'Oraş Întorsura Buzãului', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32091, 'Comuna Întorsura', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32092, 'Oraş Însurãţei', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32093, 'Comuna Ineu', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32094, 'Oraş Ineu', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32095, 'Comuna Independenţa', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32096, 'Comuna Independenţa', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32097, 'Comuna Independenţa', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32098, 'Comuna Ilva Mică', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32099, 'Comuna Ilva Mare', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32100, 'Comuna Ilovăt', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32101, 'Comuna Ilişeşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32102, 'Comuna Ilieni', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32103, 'Comuna Ilia', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32104, 'Comuna Ileanda', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32105, 'Comuna Ileana', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32106, 'Comuna Igneşti', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32107, 'Comuna Ighiu', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32108, 'Comuna Ieud', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32109, 'Oraş Iernut', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32110, 'Comuna Ideciu de Jos', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32111, 'Comuna Icuseşti', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32112, 'Comuna Icoana', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32113, 'Comuna Iclod', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32114, 'Comuna Iclănzel', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32115, 'Comuna Ibăneşti Pădure', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32116, 'Comuna Ibăneşti', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32117, 'Comuna Ibăneşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32118, 'Comuna Iaslovăţ', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32119, 'Comuna Iara', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32120, 'Comuna Iancu Jianu', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32121, 'Oraş Ianca', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32122, 'Comuna Ianca', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32123, 'Comuna Iana', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32124, 'Comuna Iacobeni', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32125, 'Comuna Iacobeni', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32126, 'Comuna Iablaniţa', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32127, 'Comuna Husnicioara', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32128, 'Comuna Husasău de Tinca', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32129, 'Comuna Huruieşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32130, 'Comuna Hurezani', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32131, 'Comuna Dimitrie Cantemir', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32132, 'Comuna Hulubeşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32133, 'Oraş Huedin', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32134, 'Comuna Hudeşti', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32135, 'Comuna Hotarele', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32136, 'Comuna Horodniceni', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32137, 'Comuna Horoatu Crasnei', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32138, 'Comuna Horleşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32139, 'Comuna Horia', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32140, 'Comuna Horia', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32141, 'Comuna Horgeşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32142, 'Oraş Horezu', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32143, 'Comuna Hopârta', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32144, 'Comuna Homorod', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32145, 'Comuna Homocea', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32146, 'Comuna Holod', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32147, 'Comuna Holboca', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32148, 'Comuna Holbav', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32149, 'Comuna Hoghiz', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32150, 'Comuna Hoghilag', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32151, 'Comuna Hodoşa', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32152, 'Comuna Hodod', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32153, 'Comuna Hodac', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32154, 'Comuna Hoceni', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32155, 'Comuna Hlipiceni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32156, 'Comuna Hârtop', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32157, 'Comuna Hârtieşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32158, 'Comuna Hârseşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32159, 'Comuna Hârşeni', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32160, 'Oraş Hârlãu', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32161, 'Comuna Hinova', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32162, 'Comuna Hida', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32163, 'Comuna Herăşti', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32164, 'Comuna Hemeiuşi', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32165, 'Comuna Heleşteni', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32166, 'Comuna Helegiu', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32167, 'Comuna Havârna', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32168, 'Comuna Hăşmaş', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32169, 'Comuna Hărmăneşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32170, 'Comuna Hărman', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32171, 'Comuna Hărău', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32172, 'Comuna Hănţeşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32173, 'Comuna Hangu', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32174, 'Comuna Hăneşti', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32175, 'Comuna Hamcearca', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32176, 'Comuna Halmeu', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32177, 'Comuna Halmăşd', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32178, 'Comuna Hălmagiu', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32179, 'Comuna Hălmăgel', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32180, 'Comuna Hălchiu', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32181, 'Comuna Hălăuceşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32182, 'Comuna Hăghig', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32183, 'Comuna Guşoeni', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32184, 'Comuna Gurghiu', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32185, 'Comuna Gurbăneşti', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32186, 'Comuna Gura Vitioarei', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32187, 'Comuna Gura Vadului', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32188, 'Comuna Gura Teghii', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32189, 'Comuna Gura Şuţii', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32190, 'Comuna Gurasada', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32191, 'Comuna Gura Râului', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32192, 'Comuna Gura Padinii', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32193, 'Comuna Gura Ocniţei', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32194, 'Comuna Gura Ialomiţei', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32195, 'Comuna Gurahonţ', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32196, 'Comuna Gura Foii', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32197, 'Comuna Gura Caliţei', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32198, 'Comuna Gugeşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32199, 'Comuna Grumăzeşti', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32200, 'Comuna Gruiu', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32201, 'Comuna Gruia', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32202, 'Comuna Grozeşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32203, 'Comuna Grozeşti', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32204, 'Comuna Groşi', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32205, 'Comuna Groşii Ţibleşului', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32206, 'Comuna Gropniţa', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32207, 'Comuna Gropeni', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32208, 'Comuna Grojdibodu', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32209, 'Comuna Griviţa', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32210, 'Comuna Griviţa', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32211, 'Comuna Griviţa', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32212, 'Comuna Grindu', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32213, 'Comuna Grindu', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32214, 'Comuna Greci', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32215, 'Comuna Greci', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32216, 'Comuna Greceşti', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32217, 'Comuna Grebenişu de Câmpie', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32218, 'Comuna Greaca', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32219, 'Comuna Greabănu', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32220, 'Comuna Gratia', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32221, 'Comuna Grăniceşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32222, 'Comuna Grăniceri', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32223, 'Comuna Grămeşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32224, 'Comuna Grajduri', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32225, 'Comuna Grădiştea', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32226, 'Comuna Grădiştea', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32227, 'Comuna Grădiştea', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32228, 'Comuna Grădiştea', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32229, 'Comuna Grădinari', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32230, 'Comuna Grădinari', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32231, 'Comuna Grădina', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32232, 'Comuna Gottlob', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32233, 'Comuna Gostinu', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32234, 'Comuna Goştinari', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32235, 'Comuna Gostavăţu', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32236, 'Comuna Gornet-Cricov', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32237, 'Comuna Gornet', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32238, 'Comuna Gorneşti', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32239, 'Comuna Gorgota', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32240, 'Comuna Gorbăneşti', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32241, 'Comuna Gorban', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32242, 'Comuna Gologanu', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32243, 'Comuna Goleşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32244, 'Comuna Goleşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32245, 'Comuna Golãieşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32246, 'Comuna Goicea', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32247, 'Comuna Gohor', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32248, 'Comuna Gogoşu', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32249, 'Comuna Gogoşu', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32250, 'Comuna Gogoşari', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32251, 'Comuna Goieşti', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32252, 'Comuna Godineşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32253, 'Comuna Godeni', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32254, 'Comuna Godeanu', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32255, 'Comuna Glodeni', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32256, 'Comuna Glodeni', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32257, 'Comuna Glodeanu-Siliştea', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32258, 'Comuna Glodeanu-Sărat', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32259, 'Comuna Glimboca', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32260, 'Comuna Glăvile', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32261, 'Comuna Glăvăneşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32262, 'Comuna Giuvărăşti', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32263, 'Comuna Giurgiţa', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32264, 'Comuna Giurgeni', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32265, 'Comuna Giulvăz', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32266, 'Comuna Giuleşti', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32267, 'Comuna Giubega', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32268, 'Comuna Girov', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32269, 'Comuna Giroc', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32270, 'Comuna Gârnic', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32271, 'Comuna Gârliciu', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32272, 'Comuna Gârla Mare', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32273, 'Comuna Girişu de Criş', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32274, 'Comuna Gârda de Sus', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32275, 'Comuna Gârcov', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32276, 'Comuna Gârcina', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32277, 'Comuna Gârceni', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32278, 'Comuna Gârbovi', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32279, 'Comuna Gârbova', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32280, 'Comuna Gârbou', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32281, 'Comuna Gângiova', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32282, 'Comuna Gâlgău', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32283, 'Comuna Gilău', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32284, 'Comuna Gighera', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32285, 'Comuna Giera', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32286, 'Comuna Gâdinţi', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32287, 'Comuna Giarmata', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32288, 'Comuna Ghizela', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32289, 'Comuna Ghiroda', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32290, 'Comuna Ghioroiu', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32291, 'Comuna Ghioroc', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32292, 'Comuna Ghindeni', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32293, 'Comuna Ghindari', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32294, 'Comuna Ghindăreşti', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32295, 'Comuna Ghindăoani', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32296, 'Comuna Ghimpeţeni', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32297, 'Comuna Ghimpaţi', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32298, 'Comuna Ghimeş-Făget', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32299, 'Oraş Ghimbav', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32300, 'Comuna Ghilad', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32301, 'Comuna Ghidigeni', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32302, 'Comuna Ghidfalău', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32303, 'Comuna Gherţa Mică', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32304, 'Comuna Gherghiţa', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32305, 'Comuna Ghergheşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32306, 'Comuna Ghergheasa', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32307, 'Comuna Gherceşti', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32308, 'Comuna Gherăseni', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32309, 'Comuna Gherăeşti', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32310, 'Comuna Gheorghe Lazăr', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32311, 'Municipiul Oneşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32312, 'Comuna Ghelinţa', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32313, 'Comuna Ghelari', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32314, 'Comuna Gepiu', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32315, 'Comuna Gheorghe Doja', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32316, 'Comuna George Enescu', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32317, 'Oraş Geoagiu', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32318, 'Comuna Gemenele', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32319, 'Comuna Geaca', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32320, 'Comuna Gavojdia', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32321, 'Comuna Găvăneşti', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32322, 'Comuna Izvoarele', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32323, 'Comuna Găujani', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32324, 'Oraş Gãtaia', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32325, 'Comuna Găneşti', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32326, 'Comuna Găneasa', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32327, 'Comuna Găneasa', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32328, 'Comuna Galicea Mare', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32329, 'Comuna Galicea', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32330, 'Comuna Găleşti', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32331, 'Comuna Galda de Jos', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32332, 'Comuna Gălbinaşi', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32333, 'Comuna Gălbinaşi', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32334, 'Comuna Galbenu', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32335, 'Comuna Gălăuţaş', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32336, 'Comuna Galaţii Bistriţei', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32337, 'Comuna Gălăţeni', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32338, 'Comuna Gălăneşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32339, 'Comuna Găiceana', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32340, 'Comuna Găgeşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32341, 'Comuna Furculeşti', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32342, 'Comuna Fundu Moldovei', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32343, 'Oraş Fundulea', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32344, 'Comuna Fundeni-Dobroeşti', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32345, 'Comuna Fundeni', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32346, 'Comuna Fundeni', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32347, 'Comuna Fundata', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32348, 'Comuna Fulga', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32349, 'Comuna Fruntişeni', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32350, 'Comuna Frumuşiţa', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32351, 'Comuna Frumuşica', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32352, 'Comuna Frumuşani', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32353, 'Comuna Frumosu', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32354, 'Comuna Frumoasa', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32355, 'Comuna Frumoasa', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32356, 'Comuna Frânceşti-Mânăstireni', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32357, 'Comuna Frecăţei', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32358, 'Comuna Frăteşti', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32359, 'Comuna Frătăuţii Vechi', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32360, 'Comuna Frătăuţii Noi', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32361, 'Comuna Frata', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32362, 'Comuna Frăsinet', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32363, 'Comuna Frăsinet', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32364, 'Oraş Frasin', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32365, 'Comuna Forotic', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32366, 'Comuna Forăşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32367, 'Comuna Folteşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32368, 'Comuna Foieni', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32369, 'Comuna Foeni', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32370, 'Comuna Focuri', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32371, 'Comuna Florica', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32372, 'Comună Floreşti-Stoeneşti', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32373, 'Comuna Floreşti', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32374, 'Comuna Floreşti', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32375, 'Comuna Floreşti', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32376, 'Oraş Flãmânzi', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32377, 'Comuna Fizeşu Gherlii', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32378, 'Comuna Fitioneşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32379, 'Comuna Fârţăneşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32380, 'Comuna Fârliug', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32381, 'Comuna Fârdea', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32382, 'Comuna Fântânele', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32383, 'Comuna Fântânele', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32384, 'Comuna Fântânele', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32385, 'Comuna Fântânele', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32386, 'Comuna Fântânele', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32387, 'Comuna Fântânele', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32388, 'Comuna Fântânele', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32389, 'Comuna Fântâna Mare', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32390, 'Comuna Finta', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32391, 'Comuna Finiş', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32392, 'Comuna Filipeştii de Târg', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32393, 'Comuna Filipeştii de Pădure', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32394, 'Comuna Filipeşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32395, 'Comuna Filipeni', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32396, 'Oraş Filiaşi', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32397, 'Oraş Fierbinţi-Târg', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32398, 'Oraş Fieni', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32399, 'Comuna Fibiş', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32400, 'Comuna Fereşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32401, 'Comuna Felnac', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32402, 'Comuna Feliceni', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32403, 'Comuna Feleacu', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32404, 'Comuna Feldru', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32405, 'Comuna Feldioara', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32406, 'Comuna Făureşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32407, 'Oraş Fãurei', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32408, 'Comuna Fãrcaş', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32409, 'Comuna Fărcaşele', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32410, 'Comuna Fărcaşa', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32411, 'Comuna Fărcaşa', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32412, 'Comuna Fărău', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32413, 'Comuna Faraoani', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32414, 'Comuna Fărăgău', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32415, 'Comuna Fălcoiu', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32416, 'Comuna Fălciu', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32417, 'Comuna Făgeţelu', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32418, 'Oraş Fãget', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32419, 'Comuna Făcăeni', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32420, 'Comuna Ezeriş', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32421, 'Comuna Estelnic', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32422, 'Comuna Ernei', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32423, 'Comuna Eremitu', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32424, 'Comuna Erbiceni', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32425, 'Comuna Iepureşti', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32426, 'Comuna Duda  Epureni', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32427, 'Comuna Epureni', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32428, 'Comuna Iedera', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32429, 'Comuna Durneşti', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32430, 'Comuna Dumitriţa', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32431, 'Comuna Dumitreşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32432, 'Comuna Dumitra', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32433, 'Comuna Dumeşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32434, 'Comuna Dumeşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32435, 'Comuna Dumbrăviţa', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32436, 'Comuna Dumbrăviţa', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32437, 'Comuna Dumbrăviţa', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32438, 'Comuna Dumbrăveni', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32439, 'Comuna Dumbrăveni', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32440, 'Comună Dumbrăveni', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32441, 'Comuna Dumbrava Roşie', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32442, 'Comuna Dumbrava', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32443, 'Comuna Dumbrava', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32444, 'Comuna Dulceşti', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32445, 'Comuna Dudeştii Vechi', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32446, 'Comuna Drânceni', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32447, 'Comuna Dridu', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32448, 'Comuna Drãnic', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32449, 'Comuna Drajna de Sus', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32450, 'Comuna Drăguşeni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32451, 'Comuna Drăguşeni', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32452, 'Comuna Drăguşeni', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32453, 'Comuna Drăguşeni', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32454, 'Comuna Drăguş', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32455, 'Comuna Dragu', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32456, 'Comuna Drăgoteşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32457, 'Comuna Drăgoteşti', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32458, 'Comuna Dragoş Vodă', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32459, 'Comuna Dragoslavele', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32460, 'Oraș Dragomireşti', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32461, 'Comuna Dragomireşti', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32462, 'Comuna Dragomireşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32463, 'Comuna Dragomireşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32464, 'Comuna Drãgoieşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32465, 'Comuna Drăgoeşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32466, 'Comuna Drăgoeşti', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32467, 'Comuna Dragodana', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32468, 'Comuna Drăghiceni', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32469, 'Comuna Drăgeşti', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32470, 'Comuna Drăganu', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32471, 'Comuna Drăgăneşti-Vlaşca', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32472, 'Oraş Drãgãneşti-Olt', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32473, 'Comuna Drăgăneşti de Vede', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32474, 'Comuna Drăgăneşti', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32475, 'Comuna Drăgăneşti', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32476, 'Comuna Drăgăneşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32477, 'Comuna Drăgăneşti', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32478, 'Comuna Dragalina', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32479, 'Comuna Dracea', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32480, 'Comuna 23 August', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32481, 'Comuna Doştat', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32482, 'Comuna Dorolţ', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32483, 'Comuna Dorobanţu', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32484, 'Comuna Dorobanţu', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32485, 'Comuna Dorobanți', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32486, 'Comuna Dorneşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32487, 'Comuna Dorna Cândrenilor', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32488, 'Comuna Dor Mărunt', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32489, 'Comuna Domneşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32490, 'Comuna Domneşti', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32491, 'Comuna Domaşnea', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32492, 'Comuna Doljeşti', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32493, 'Comuna Dolheşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32494, 'Comuna Dolheşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32495, 'Oraş Dolhasca', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32496, 'Comuna Doiceşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32497, 'Comuna Dognecea', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32498, 'Comuna Dofteana', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32499, 'Comuna Dodeşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32500, 'Comuna Doclin', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32501, 'Comuna Dochia', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32502, 'Comuna Dobrun', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32503, 'Comuna Dobrovăţ', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32504, 'Comuna Dobroteşti', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32505, 'Comuna Dobroteşti', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32506, 'Comuna Dobroteasa', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32507, 'Comuna Dobrosloveni', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32508, 'Comună Dobromir', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32509, 'Comuna Dobrin', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32510, 'Comuna Dobreşti', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32511, 'Comuna Dobreşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32512, 'Comuna Dobreşti', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32513, 'Comuna Dobreni', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32514, 'Comuna Dobra', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32515, 'Comuna Dobra', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32516, 'Comuna Dobârlău', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32517, 'Comuna Dobârceni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32518, 'Comuna Doba', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32519, 'Comuna Ditrău', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32520, 'Comuna Dârvari', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32521, 'Comuna Dârlos', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32522, 'Comuna Dârjiu', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32523, 'Comuna Dioşti', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32524, 'Comuna Diosig', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32525, 'Comuna Dângeni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32526, 'Comuna Dâmbovicioara', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32527, 'Comuna Dimăcheni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32528, 'Comuna Dieci', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32529, 'Comuna Dideşti', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32530, 'Comuna Diculeşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32531, 'Comuna Dichiseni', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32532, 'Comuna Dezna', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32533, 'Comuna Deveselu', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32534, 'Comuna Devesel', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32535, 'Comuna Deseşti', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32536, 'Comuna Desa', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32537, 'Comuna Dersca', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32538, 'Comuna Derna', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32539, 'Comuna Denta', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32540, 'Comuna Densuş', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32541, 'Comuna Deleşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32542, 'Comuna Deleni', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32543, 'Comuna Deleni', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32544, 'Comuna Deleni', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32545, 'Comuna Deda', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32546, 'Comuna Dealu', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32547, 'Comuna Davideşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32548, 'Comuna Dascălu Creaţa', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32549, 'Comuna Darova', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32550, 'Comuna Dărmăneşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32551, 'Oraş Dãrmãneşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32552, 'Comuna Dărmăneşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32553, 'Comuna Dărmăneşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32554, 'Comuna Dărăşti-Ilfov', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32555, 'Oraş Darabani', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32556, 'Comuna Dănicei', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32557, 'Comuna Dăneţi', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32558, 'Comuna Dăneşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32559, 'Comuna Dăneşti', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32560, 'Comuna Dăneşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32561, 'Comuna Daneş', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32562, 'Comuna Dăneasa', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32563, 'Comuna Dănciuleşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32564, 'Comuna Dămuc', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32565, 'Comuna Dămieneşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32566, 'Comuna Dalnic', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32567, 'Comuna Dalboşeţ', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32568, 'Comuna Daia Română', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32569, 'Comuna Daia', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32570, 'Comuna Dagâţa', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32571, 'Comuna Dăeşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32572, 'Comuna Dăeni', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32573, 'Oraș Dăbuleni', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32574, 'Comuna Dăbâca', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32575, 'Comuna Cuza Vodă', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32576, 'Comuna Cuza Vodă', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32577, 'Comuna Cuzăplac', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32578, 'Comuna Cut', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32579, 'Comuna Cuzdrioara', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32580, 'Comuna Curtuişeni', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32581, 'Comuna Curtişoara', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32582, 'Oraş Curtici', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32583, 'Comuna Curtea', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32584, 'Comuna Curcani', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32585, 'Comuna Curăţele', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32586, 'Comuna Cupşeni', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32587, 'Comuna Cumpăna', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32588, 'Comuna Culciu', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32589, 'Comuna Cujmir', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32590, 'Comuna Bogdan Vodă', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32591, 'Oraş Cugir', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32592, 'Comuna Cudalbi', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32593, 'Comuna Cuci', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32594, 'Comuna Cuca', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32595, 'Comuna Cuca', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32596, 'Comuna Crușeț', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32597, 'Comuna Crucişor', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32598, 'Comuna Crucea', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32599, 'Comuna Crucea', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32600, 'Comuna Crizbav', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32601, 'Comuna Crivăţ', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32602, 'Comuna Cristolţ', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32603, 'Comuna Criștioru de Jos', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32604, 'Comuna Cristineşti', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32605, 'Comuna Cristian', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32606, 'Comuna Cristian', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32607, 'Comuna Cristeşti', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32608, 'Comuna Cristeşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32609, 'Comuna Cristeşti', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32610, 'Comuna Crişeni', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32611, 'Comuna Crişcior', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32612, 'Comuna Crişan', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32613, 'Comuna Crângurile', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32614, 'Comuna Crângu', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32615, 'Comuna Crângeni', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32616, 'Comuna Crâmpoia', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32617, 'Comuna Criciova', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32618, 'Comuna Cricău', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32619, 'Comuna Crevenicu', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32620, 'Comuna Crevedia Mare', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32621, 'Comuna Crevedia', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32622, 'Comuna Creţeşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32623, 'Comuna Creţeni', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32624, 'Comuna Petrăchioaia', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32625, 'Comuna Creaca', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32626, 'Comuna Crasna', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32627, 'Comuna Crasna', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32628, 'Comuna Craiva', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32629, 'Comuna Craidorolţ', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32630, 'Comuna Crãieşti', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32631, 'Comuna Crăciuneşti', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32632, 'Comuna Crăciunelu de Jos', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32633, 'Comuna Crăcăoani', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32634, 'Comuna Cozmeşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32635, 'Comuna Cozmeşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32636, 'Comuna Cozmeni', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32637, 'Comuna Cozma', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32638, 'Comuna Cozieni', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32639, 'Comuna Covăsinţ', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32640, 'Comuna Coţuşca', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32641, 'Comuna Coţofenii din Faţă', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32642, 'Comuna Coţofenii din Dos', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32643, 'Comuna Coţofăneşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32644, 'Comuna Cotnari', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32645, 'Comuna Cotmeana', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32646, 'Comuna Coteşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32647, 'Comuna Coteana', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32648, 'Comuna Coşula', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32649, 'Comuna Costuleni', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32650, 'Comuna Costişa', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32651, 'Comuna Costeştii din Vale', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32652, 'Comuna Costeşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32653, 'Comuna Costeşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32654, 'Comuna Costeşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32655, 'Comuna Costeşti', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32656, 'Oraș Costeşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32657, 'Comuna Coşteiu', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32658, 'Comuna Costache Negri', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32659, 'Comuna Coşoveni', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32660, 'Comuna Cosoba', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32661, 'Comuna Coşna', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32662, 'Comuna Cosminele', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32663, 'Comuna Cosmeşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32664, 'Comuna Cosmeşti', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32665, 'Comuna Casimcea', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32666, 'Comuna Cosâmbeşti', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32667, 'Comuna Coşeşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32668, 'Comuna Coşereni', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32669, 'Comuna Coşeiu', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32670, 'Comuna Coşbuc', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32671, 'Comuna Corund', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32672, 'Comuna Corunca', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32673, 'Comuna Coroisânmartin', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32674, 'Comuna Coroieşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32675, 'Comuna Coroieni', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32676, 'Comuna Corod', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32677, 'Comuna Cornu', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32678, 'Comuna Corni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32679, 'Comuna Corni', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32680, 'Comuna Cornetu', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32681, 'Comuna Corneşti', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32682, 'Comuna Corneşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32683, 'Comuna Cornereva', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32684, 'Comuna Cornea', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32685, 'Comuna Cornăţelu', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32686, 'Comuna Cezieni', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32687, 'Comuna Corlăteni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32688, 'Comuna Corlăţel', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32689, 'Comuna Cordun', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32690, 'Comună Cordăreni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32691, 'Comuna Corcova', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32692, 'Comuna Corbu', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32693, 'Comuna Corbu', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32694, 'Comuna Corbu', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32695, 'Comuna Corbiţa', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32696, 'Comuna Corbii Mari', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32697, 'Comuna Corbi', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32698, 'Comuna Corbeni', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32699, 'Comuna Corbeanca', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32700, 'Comuna Corbasca', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32701, 'Oraş Copşa Micã', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32702, 'Comuna Copalnic Mănăştur', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32703, 'Comuna Copălău', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32704, 'Comuna Copăceni', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32705, 'Comuna Copăceni', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32706, 'Comuna Copăcele', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32707, 'Comuna Copăcel', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32708, 'Comuna Conţeşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32709, 'Comuna Conţeşti', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32710, 'Comuna Constantin Daicoviciu', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32711, 'Comuna Conceşti', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32712, 'Comuna Comloşu Mare', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32713, 'Comuna Comişani', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32714, 'Oraş Comarnic', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32715, 'Comuna Comăneşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32716, 'Comuna Comandău', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32717, 'Comuna Comana', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32718, 'Comuna Comana', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32719, 'Comuna Comana', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32720, 'Comuna Coloneşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32721, 'Comuna Coloneşti', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32722, 'Comuna Colibaşi', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32723, 'Comuna Colelia', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32724, 'Comuna Colceag', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32725, 'Comuna Cojocna', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32726, 'Comuna Cojasca', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32727, 'Comuna Cogealac', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32728, 'Comuna Codăeşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32729, 'Comuna Cocu', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32730, 'Comuna Cocorãştii Mislii', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32731, 'Comuna Cocorăştii-Colţ', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32732, 'Comuna Cocora', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32733, 'Comuna Cociuba Mare', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32734, 'Comuna Cochirleanca', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32735, 'Comuna Cobia de Sus', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32736, 'Comuna Cobadin', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32737, 'Comuna Coaş', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32738, 'Comuna Coarnele Caprei', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32739, 'Comuna Clejani', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32740, 'Comuna Cleja', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32741, 'Comuna Cizer', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32742, 'Comuna Ciuruleasa', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32743, 'Comuna Ciurila', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32744, 'Comuna Ciurea', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32745, 'Comuna Ciupercenii Noi', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32746, 'Comuna Ciuperceni', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32747, 'Comuna Ciuperceni', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32748, 'Comuna Ciumeşti', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32749, 'Comuna Ciumeghiu', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32750, 'Comuna Ciumani', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32751, 'Comuna Ciulniţa', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32752, 'Comuna Sâniob', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32753, 'Comuna Ciugud', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32754, 'Comuna Ciudanoviţa', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32755, 'Comuna Ciucurova', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32756, 'Comuna Ciucsângeorgiu', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32757, 'Comuna Ciuchici', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32758, 'Comuna Ciucea', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32759, 'Comuna Câţcău', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32760, 'Comuna Cislău', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32761, 'Comuna Cârţişoara', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32762, 'Comuna Cârţa', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32763, 'Comuna Cârţa', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32764, 'Comuna Cârna', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32765, 'Comuna Cârlogani', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32766, 'Comuna Cârligele', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32767, 'Comuna Cârlibaba', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32768, 'Comuna Cârjiţi', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32769, 'Comuna Cireşu', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32770, 'Comuna Cireşu', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32771, 'Comuna Ciprian Porumbescu', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32772, 'Comuna Ciorteşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32773, 'Comuna Cioroiaşi', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32774, 'Comuna Ciorogârla', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32775, 'Comuna Ciorăşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32776, 'Comuna Ciorani', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32777, 'Comuna Ciomăgeşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32778, 'Comuna Ciolpani', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32779, 'Comuna Ciolăneşti', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32780, 'Comuna Ciofrângeni', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32781, 'Comuna Ciocârlia', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32782, 'Comuna Ciocârlia', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32783, 'Comuna Ciocile', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32784, 'Comuna Ciochina', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32785, 'Comuna Ciocani', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32786, 'Comuna Ciocăneşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32787, 'Comuna Ciocăneşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32788, 'Comuna Ciocăneşti', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32789, 'Comuna Ciobanu', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32790, 'Comuna Cândeşti Vale', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32791, 'Comuna Cândeşti', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32792, 'Comuna Cândeşti', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32793, 'Comuna Cincu', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32794, 'Comuna Câmpuri', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32795, 'Comuna Câmpulung la Tisa', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32796, 'Comuna Câmpineanca', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32797, 'Oraş Câmpeni', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32798, 'Comuna Câmpani', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32799, 'Comuna Câlnic', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32800, 'Comuna Câlnic', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32801, 'Comuna Cilieni', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32802, 'Comuna Cilibia', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32803, 'Comuna Câineni', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32804, 'Comuna Ciclova Română', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32805, 'Comuna Cicârlău', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32806, 'Comuna Ciceu-Mihăieşti', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32807, 'Comuna Ciceu-Giurgeşti', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32808, 'Oraş Ciacova', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32809, 'Comuna Chiuza', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32810, 'Comuna Chiuieşti', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32811, 'Oraş Chitila', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32812, 'Comuna Chişlaz', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32813, 'Oraş Chişineu-Criş', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32814, 'Comuna Chisindia', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32815, 'Comuna Chiselet', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32816, 'Comuna Chiscani', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32817, 'Comuna Chirpăr', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32818, 'Comuna Chirnogi', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32819, 'Comuna Chirnogeni', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32820, 'Comuna Chiojdu', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32821, 'Comuna Chiojdeni', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32822, 'Comuna Chiojdeanca', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32823, 'Comuna Chiochiş', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32824, 'Comuna Chinteni', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32825, 'Comuna Chiliile', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32826, 'Comuna Chilia Veche', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32827, 'Comuna Chieşd', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32828, 'Comuna Chichiş', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32829, 'Comuna Chibed', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32830, 'Comuna Chiajna', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32831, 'Comuna Chevereşu Mare', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32832, 'Comuna Cheţani', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32833, 'Comuna Cherechiu', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32834, 'Comuna Checea', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32835, 'Comuna Cetăţeni', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32836, 'Comuna Cetatea de Baltă', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32837, 'Comuna Cetate', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32838, 'Comuna Cetariu', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32839, 'Comuna Cervenia', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32840, 'Comuna Ceru-Băcăinţi', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32841, 'Comuna Certeze', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32842, 'Comuna Cerţeşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32843, 'Comuna Certeju de Sus', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32844, 'Comuna Cernica', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32845, 'Comuna Cerneşti', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32846, 'Comuna Cernăteşti', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32847, 'Comuna Cernăteşti', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32848, 'Comună Cernat', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32849, 'Comuna Cerna', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32850, 'Comuna Cermei', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32851, 'Comuna Cergău', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32852, 'Comuna Cerchezu', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32853, 'Comuna Cerbăl', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32854, 'Comuna Cerãt', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32855, 'Comuna Ceraşu', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32856, 'Comuna Ceptura', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32857, 'Comuna Cepleniţa', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32858, 'Comuna Cepari', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32859, 'Comuna Cenei', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32860, 'Comuna Cenade', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32861, 'Comuna Cenad', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32862, 'Comuna Celaru', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32863, 'Comuna Ceica', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32864, 'Comuna Cehu Silvaniei', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32865, 'Comuna Cehal', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32866, 'Comuna Cefa', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32867, 'Comuna Ceuaşu De Câmpie', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32868, 'Comuna Ceatalchioi', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32869, 'Comuna Ceanu Mare', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32870, 'Comuna Ceamurlia de Jos', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32871, 'Comuna Ceahlău', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32872, 'Comuna Cazasu', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32873, 'Comuna Căzăneşti', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32874, 'Oraş Cãzãneşti', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32875, 'Oraș Cavnic', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32876, 'Comuna Cavadineşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32877, 'Comuna Căuaş', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32878, 'Comuna Cătunele', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32879, 'Comuna Cătina', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32880, 'Comuna Cătina', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32881, 'Comuna Căteasca', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32882, 'Comuna Catane', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32883, 'Comuna Catalina', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32884, 'Comuna Caţa', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32885, 'Comuna Castranova', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32886, 'Comuna Castelu', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32887, 'Comuna Căşeiu', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32888, 'Comuna Căscioarele', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32889, 'Comuna Olanu', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32890, 'Comuna Cărpiniş', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32891, 'Comuna Cărpinet', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32892, 'Comuna Carpen', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32893, 'Comuna C.A. Rosetti', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32894, 'Comuna C.A. Rosetti', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32895, 'Comuna Carcaliu', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32896, 'Comuna Cărbuneşti', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32897, 'Comuna Cărbunari', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32898, 'Comuna Caraula', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32899, 'Comuna Carastelec', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32900, 'Comuna Caraşova', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32901, 'Comuna Cărand', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32902, 'Comuna Capu Câmpului', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32903, 'Comuna Căpreni', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32904, 'Comuna Căpleni', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32905, 'Comuna Căpâlniţa', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32906, 'Comuna Cãpâlna', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32907, 'Comuna Căneşti', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32908, 'Comuna Cămărzana', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32909, 'Comuna Cămăraşu', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32910, 'Comuna Camăr', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32911, 'Comuna Calvini', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32912, 'Comuna Cãlui', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32913, 'Comuna Călugăreni', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32914, 'Comuna Călugăreni', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32915, 'Comuna Calopăru', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32916, 'Comuna Călineşti', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32917, 'Comuna Călineşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32918, 'Comuna Călineşti', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32919, 'Comuna Căldăraru', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32920, 'Comuna Călăţele', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32921, 'Comuna Călăraşi', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32922, 'Comuna Călăraşi', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32923, 'Comuna Călăraşi', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32924, 'Municipiul Călăraşi', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32925, 'Oraş Cãlan', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32926, 'Comuna Calafindeşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32927, 'Oraş Cajvana', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32928, 'Comuna Căiuţi', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32929, 'Comuna Căianu', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32930, 'Comuna Căianu', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32931, 'Comuna Cacica', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32932, 'Comuna Căbeşti', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32933, 'Comuna Buzoeşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32934, 'Comuna Buzescu', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32935, 'Municipiul Buzău', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32936, 'Comuna Buza', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32937, 'Comuna Buturugeni', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32938, 'Comuna Butoieşti', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32939, 'Comuna Butimanu', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32940, 'Comuna Buteni', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32941, 'Comuna Butea', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32942, 'Comuna Burjuc', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32943, 'Comuna Burila Mare', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32944, 'Comuna Bunteşti', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32945, 'Comuna Bunila', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32946, 'Comuna Buneşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32947, 'Comuna Bunești Averești', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32948, 'Comuna Buneşti', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32949, 'Comuna Buneşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32950, 'Comuna Bumbeşti-Piţic', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32951, 'Oraş Bumbeşti-Jiu', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32952, 'Comuna Bulzeşti', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32953, 'Comuna Bulz', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32954, 'Comuna Bulbucata', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32955, 'Comuna Bujoru', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32956, 'Comuna Bujoreni', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32957, 'Oraș Târgu Bujor', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32958, 'Comuna Buhoci', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32959, 'Comuna Bughea de Sus', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32960, 'Comuna Bughea de Jos', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32961, 'Oraş Buftea', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32962, 'Comuna Bueşti', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32963, 'Comuna Buduslău', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32964, 'Comuna Budureasa', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32965, 'Comuna Budila', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32966, 'Comuna Budeşti', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32967, 'Comuna Budeşti', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32968, 'Comuna Dudeşti', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32969, 'Oraş Budeşti', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32970, 'Comuna Budeasa', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32971, 'Comuna Budacu de Jos', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32972, 'Comuna Buda', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32973, 'Comuna Bucureşci', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32974, 'Comuna Bucu', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32975, 'Comuna Bucşani', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32976, 'Comuna Bucşani', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32977, 'Comuna Bucovăţ', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32978, 'Comuna Bucovăţ', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32979, 'Comuna Bucov', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32980, 'Comuna Bucoşniţa', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32981, 'Comuna Buciumi', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32982, 'Comuna Buciumi', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32983, 'Comuna Buciumeni', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32984, 'Comuna Buciumeni', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32985, 'Comuna Bucium', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32986, 'Comuna Bucinişu', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32987, 'Comuna Buchin', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32988, 'Comuna Buceş', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32989, 'Comuna Bucerdea-Grânoasă', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32990, 'Oraş Bucecea', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32991, 'Comuna Brusturoasa', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32992, 'Comuna Brusturi-Drăgăneşti', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32993, 'Comuna Brusturi', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32994, 'Comuna Bruiu', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32995, 'Oraş Broşteni', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32996, 'Comuna Broşteni', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32997, 'Comuna Broşteni', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32998, 'Comuna Broscăuţi', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (32999, 'Comuna Brodina', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33000, 'Comuna Brâncoveni', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33001, 'Comuna Brâncoveneşti', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33002, 'Comuna Brânceni', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33003, 'Oraş Brezoi', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33004, 'Comuna Brezoaele', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33005, 'Comuna Brezniţa Ocol', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33006, 'Comuna Brezniţa-Motru', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33007, 'Comuna Bretea Română', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33008, 'Comuna Breţcu', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33009, 'Comuna Brestovăţ', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33010, 'Comuna Brebu Nou', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33011, 'Comuna Brebu', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33012, 'Comuna Brebu', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33013, 'Comuna Brebeni', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33014, 'Comuna Breaza', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33015, 'Comuna Breaza', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33016, 'Comuna Breaza', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33017, 'Comuna Breasta', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33018, 'Comuna Brazii', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33019, 'Comuna Brazi', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33020, 'Comuna Bratovoeşti', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33021, 'Comuna Brateş', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33022, 'Comuna Brateiu', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33023, 'Comuna Bratca', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33024, 'Comuna Brastavăţu', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33025, 'Comuna Braniştea', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33026, 'Comuna Braniştea', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33027, 'Comuna Braniştea', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33028, 'Comuna Braniştea', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33029, 'Comuna Brănişca', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33030, 'Comuna Brăneşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33031, 'Comuna Brăneşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33032, 'Comuna Brăneşti', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33033, 'Comuna Bran', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33034, 'Comuna Braloştiţa', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33035, 'Comuna Brăhăşeşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33036, 'Oraş Bragadiru', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33037, 'Comuna Bragadiru', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33038, 'Comuna Brăeşti', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33039, 'Comuna Brăeşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33040, 'Comuna Brăeşti', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33041, 'Comuna Brăduţ', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33042, 'Comuna Brăduleţ', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33043, 'Comuna Bradu', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33044, 'Comuna Brădeşti', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33045, 'Comuna Brădeşti', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33046, 'Comuna Brădeni', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33047, 'Comuna Brădeanu', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33048, 'Comuna Brabova', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33049, 'Comuna Bozovici', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33050, 'Comuna Bozieni', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33051, 'Comuna Botoşeşti-Paia', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33052, 'Municipiul Botoşani', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33053, 'Comuna Botoşana', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33054, 'Comuna Botoroaga', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33055, 'Comuna Botiza', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33056, 'Comuna Botiz', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33057, 'Comuna Boteşti', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33058, 'Comuna Boţeşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33059, 'Comuna Boţeşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33060, 'Comuna Boteni', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33061, 'Comuna Teslui', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33062, 'Comuna Boşorod', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33063, 'Comuna Bosanci', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33064, 'Oraş Borşa', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33065, 'Comuna Borşa', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33066, 'Comuna Borş', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33067, 'Comuna Boroşneu Mare', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33068, 'Comuna Borod', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33069, 'Comuna Boroaia', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33070, 'Comuna Borleşti', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33071, 'Comuna Borduşani', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33072, 'Comuna Bordeşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33073, 'Comuna Bordei Verde', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33074, 'Comuna Borca', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33075, 'Comuna Borăscu', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33076, 'Comuna Borăneşti', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33077, 'Comuna Bonţida', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33078, 'Comuna Bolvaşniţa', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33079, 'Comuna Boloteşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33080, 'Oraş Bolintin-Vale', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33081, 'Comuna Bolintin Deal', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33082, 'Comuna Boldur', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33083, 'Comuna Boldu', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33084, 'Comuna Boiu Mare', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33085, 'Comuna Boişoara', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33086, 'Comuna Boianu Mare', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33087, 'Comuna Boghiş', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33088, 'Comuna Boghicea', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33089, 'Comuna Bogheşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33090, 'Comuna Bogdăniţa', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33091, 'Comuna Bogdăneşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33092, 'Comuna Bogdăneşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33093, 'Comuna Bogdăneşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33094, 'Comuna Bogdand', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33095, 'Comuna Bogdana', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33096, 'Comuna Bogda', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33097, 'Comuna Bogaţi', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33098, 'Comuna Bogata', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33099, 'Comuna Bodoc', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33100, 'Comuna Bodeşti-Precista', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33101, 'Comuna Bod', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33102, 'Comuna Bocsig', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33103, 'Comuna Bocicoiu Mare', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33104, 'Comuna Bobota', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33105, 'Comuna Bobâlna', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33106, 'Comuna Bobiceşti', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33107, 'Comuna Blândiana', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33108, 'Comuna Blândeşti', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33109, 'Comuna Blejoi', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33110, 'Comuna Blejeşti', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33111, 'Comuna Blăjeni', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33112, 'Comuna Blăjel', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33113, 'Comuna Blăjani', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33114, 'Comuna Blăgeşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33115, 'Comuna Blăgeşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33116, 'Comuna Bixad', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33117, 'Comuna Bivolari', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33118, 'Comuna Bistriţa Bârgăului', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33119, 'Comuna Bistreţ', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33120, 'Comuna Bistra', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33121, 'Comuna Bistra', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33122, 'Comuna Bisoca', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33123, 'Comuna Bârzava', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33124, 'Comuna Bârza', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33125, 'Comuna Valea Stanciului', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33126, 'Comuna Bârseşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33127, 'Comuna Bârsău', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33128, 'Comuna Bârsăneşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33129, 'Comuna Bârsana', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33130, 'Comuna Bârsa', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33131, 'Comuna Bârnova', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33132, 'Comuna Bârna', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33133, 'Comuna Bârghiş', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33134, 'Comuna Birda', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33135, 'Comuna Birchiş', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33136, 'Comuna Bârca', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33137, 'Comuna Bâra', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33138, 'Comuna Bâlvăneşti', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33139, 'Comuna Bilieşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33140, 'Comuna Biled', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33141, 'Comuna Bilciureşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33142, 'Comuna Bilca', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33143, 'Comuna Bilbor', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33144, 'Comuna Biharia', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33145, 'Comuna Biertan', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33146, 'Comuna Bâcleş', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33147, 'Comuna Bichiş', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33148, 'Comuna Bicazu Ardelean', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33149, 'Comuna Bicaz Chei', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33150, 'Comuna Bicaz', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33151, 'Oraş Bicaz', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33152, 'Comuna Bezdead', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33153, 'Comuna Beuca', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33154, 'Comuna Bethausen', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33155, 'Comuna Beştepe', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33156, 'Comuna Berzunţi', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33157, 'Comuna Berzovia', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33158, 'Comuna Berzasca', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33159, 'Comuna Berveni', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33160, 'Comuna Berteştii de Jos', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33161, 'Comuna Bertea', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33162, 'Comuna Beriu', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33163, 'Comuna Berislăveşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33164, 'Comuna Berghin', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33165, 'Comuna Berezeni', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33166, 'Comuna Berevoeşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33167, 'Comuna Bereşti-Tazlău', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33168, 'Comuna Bereşti-Bistriţa', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33169, 'Oraş Bereşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33170, 'Comuna Bereni', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33171, 'Comuna Berchişeşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33172, 'Comuna Berceni', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33173, 'Comuna Berceni', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33174, 'Comuna Berca', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33175, 'Berleşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33176, 'Comuna Benesat', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33177, 'Comuna Beltiug', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33178, 'Comuna Beliu', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33179, 'Comuna Beliş', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33180, 'Comuna Belinţ', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33181, 'Comuna Belin', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33182, 'Comuna Beleţi-Negreşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33183, 'Comuna Belciugatele', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33184, 'Comuna Belceşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33185, 'Comuna Beidaud', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33186, 'Oraş Beclean', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33187, 'Comuna Beclean', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33188, 'Comuna Beciu', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33189, 'Comuna Becicherecu Mic', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33190, 'Oraş Bechet', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33191, 'Comuna Beceni', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33192, 'Comuna Beba Veche', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33193, 'Comuna Bazna', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33194, 'Comuna Băuţar', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33195, 'Comuna Bătrâni', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33196, 'Comuna Bătrâna', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33197, 'Comuna Batoş', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33198, 'Comuna Bătarci', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33199, 'Comuna Batăr', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33200, 'Comuna Băţani', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33201, 'Comuna Bata', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33202, 'Comuna Băseşti', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33203, 'Comuna Başcov', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33204, 'Comuna Baru', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33205, 'Comuna Bârgãuani', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33206, 'Comuna Barcea', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33207, 'Comuna Barcani', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33208, 'Comuna Bărcăneşti', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33209, 'Comuna Bărcăneşti', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33210, 'Comuna Bărbuleţu', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33211, 'Comuna Bărbăteşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33212, 'Comuna Bărbăteşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33213, 'Oraş Baraolt', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33214, 'Comuna Bărăganul', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33215, 'Comuna Bărăganu', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33216, 'Comuna Bara', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33217, 'Comuna Banloc', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33218, 'Comuna Băniţa', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33219, 'Comuna Bănişor', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33220, 'Comuna Bănia', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33221, 'Comuna Băneşti', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33222, 'Comuna Băneasa', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33223, 'Oraş Bãneasa', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33224, 'Comuna Băneasa', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33225, 'Comuna Band', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33226, 'Comuna Banca', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33227, 'Comuna Băluşeni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33228, 'Comuna Bălţeşti', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33229, 'Comuna Bălteni', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33230, 'Comuna Bălteni', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33231, 'Comuna Bălţaţi', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33232, 'Comuna Bălţăteşti', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33233, 'Comuna Balta Doamnei', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33234, 'Comuna Balta Albă', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33235, 'Comuna Balta', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33236, 'Comuna Balşa', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33237, 'Comuna Balş', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33238, 'Comuna Baloteşti', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33239, 'Comuna Balinţ', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33240, 'Comuna Bălileşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33241, 'Comuna Băleşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33242, 'Comuna Băleşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33243, 'Comuna Băleni Sârbi', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33244, 'Comuna Băleni', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33245, 'Comuna Baldovineşti', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33246, 'Oraş Bãlceşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33247, 'Comuna Bălcăuţi', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33248, 'Comuna Balcani', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33249, 'Comuna Balc', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33250, 'Comuna Bălăuşeri', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33251, 'Comuna Bălăşeşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33252, 'Comuna Bălăneşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33253, 'Comuna Bălan', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33254, 'Comuna Balaciu', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33255, 'Comuna Bălăciţa', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33256, 'Comuna Balaci', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33257, 'Comuna Bălăceanu', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33258, 'Comuna Bălăceana', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33259, 'Comuna Bălăbăneşti', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33260, 'Comuna Băla', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33261, 'Comuna Bala', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33262, 'Comuna Băiuţ', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33263, 'Comuna Băiţa de sub Codru', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33264, 'Comuna Băiţa', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33265, 'Comuna Băişoara', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33266, 'Comuna Băiculeşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33267, 'Comuna Baia de Fier', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33268, 'Comuna Baia de Criş', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33269, 'Oraş Baia de Arieş', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33270, 'Oraş Baia De Aramã', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33271, 'Comuna Baia', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33272, 'Comuna Baia', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33273, 'Comuna Bahnea', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33274, 'Comuna Bahna', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33275, 'Comuna Baciu', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33276, 'Comuna Băcia', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33277, 'Comuna Băceşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33278, 'Comuna Băcani', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33279, 'Comuna Băbiciu', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33280, 'Comuna Băbeni', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33281, 'Oraş Bãbeni', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33282, 'Comuna Băbana', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33283, 'Comuna Băbăiţa', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33284, 'Comuna Baba Ana', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33285, 'Comuna Axintele', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33286, 'Comuna Axente Sever', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33287, 'Oraş Avrig', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33288, 'Comuna Avram Iancu', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33289, 'Comuna Avram Iancu', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33290, 'Comuna Avrămeşti', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33291, 'Comuna Avrămeni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33292, 'Comuna Atid', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33293, 'Comuna Aţel', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33294, 'Comuna Asuaju de Sus', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33295, 'Comuna Aştileu', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33296, 'Comuna Aşchileu', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33297, 'Comuna Asău', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33298, 'Comuna Arsura', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33299, 'Comuna Arpaşu de Jos', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33300, 'Comuna Aroneanu', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33301, 'Comuna Armeniş', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33302, 'Comuna Armăşeşti', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33303, 'Comuna Ariniş', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33304, 'Comuna Arieşeni', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33305, 'Comuna Ariceştii Zeletin', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33306, 'Comuna Ariceştii-Rahtivani', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33307, 'Comuna Argetoaia', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33308, 'Comuna Arefu', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33309, 'Comuna Ardusat', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33310, 'Oraș Ardud', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33311, 'Comuna Ardeoani', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33312, 'Comuna Arcuş', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33313, 'Comuna Archiş', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33314, 'Comuna Arcani', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33315, 'Comuna Arbore', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33316, 'Comuna Apostolache', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33317, 'Comuna Apoldu de Jos', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33318, 'Comuna Apold', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33319, 'Comuna Apele Vii', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33320, 'Comuna Apateu', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33321, 'Comuna Apaţa', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33322, 'Comuna Apahida', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33323, 'Comuna Apa', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33324, 'Oraş Aninoasa', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33325, 'Comuna Aninoasa', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33326, 'Comuna Aninoasa', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33327, 'Comuna Aninoasa', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33328, 'Comuna Andrieşeni', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33329, 'Comuna Andrid', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33330, 'Comuna Andreiaşu de Jos', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33331, 'Comuna Andrăşeşti', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33332, 'Comuna Amaru', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33333, 'Comuna Amărăştii de Sus', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33334, 'Comuna Amărăştii de Jos', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33335, 'Comuna Amărăşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33336, 'Comuna Alunu', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33337, 'Comuna Aluniş', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33338, 'Comuna Aluniş', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33339, 'Comuna Aluniş', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33340, 'Comuna Alțâna', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33341, 'Comuna Almaşu Mare', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33342, 'Comuna Almaşu', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33343, 'Comuna Almaş', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33344, 'Comuna Almãj', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33345, 'Comuna Alma', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33346, 'Comuna Alimpeşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33347, 'Comuna Aliman', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33348, 'Comuna Alexeni', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33349, 'Comuna Alexandru Vlăhuţă', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33350, 'Oraș Aleşd', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33351, 'Comuna Albota', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33352, 'Comuna Albeşti-Paleologu', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33353, 'Comuna Albeşti', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33354, 'Comuna Albeşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33355, 'Comuna Albeşti', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33356, 'Comuna Albeștii de Muscel', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33357, 'Comuna Albeștii de Argeș', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33358, 'Comuna Albeşti', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33359, 'Comuna Albeşti', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33360, 'Comuna Albeni', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33361, 'Comuna Albac', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33362, 'Comuna Aiton', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33363, 'Comuna Aita Mare', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33364, 'Comuna Agrij', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33365, 'Comuna Agigea', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33366, 'Comuna Aghireşu', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33367, 'Comuna Agăş', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33368, 'Comuna Afumaţi', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33369, 'Comuna Afumaţi', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33370, 'Comuna Adunaţii-Copăceni', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33371, 'Comuna Adunaţi', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33372, 'Comuna Adâncata', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33373, 'Comuna Adâncata', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33374, 'Comuna Adăşeni', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33375, 'Comuna Adămuş', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33376, 'Comuna Adamclisi', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33377, 'Comuna Acâş', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33378, 'Comuna Acăţari', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33379, 'Oraş abrud', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33380, 'Comuna Abrămuţ', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33381, 'Municipiul Braşov', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33382, 'Comuna Toboliu', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33383, 'Oraş Şimleu Silvaniei', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33384, 'Comuna Bocşa', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33385, 'Municipiul Alba Iulia', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33386, 'Municipiul Aiud', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33387, 'Municipiul Blaj', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33388, 'Municipiul Sebeş', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33389, 'Oraş Ocna Mureş', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33390, 'Comuna Abram', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33391, 'Municipiul Carei', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33392, 'Municipiul Piteşti', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33393, 'Municipiul Câmpulung', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33394, 'Municipiul Curtea de Argeș', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33395, 'Comuna Bârla', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33396, 'Comuna Cicănești', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33397, 'Comuna Lunca Corbului', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33398, 'Comuna Merișani', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33399, 'Comuna Morărești', 190, 2751)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33400, 'Municipiul Arad', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33401, 'Comuna Horea', 190, 2753)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33402, 'Comuna Conop', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33403, 'Comuna Ususău', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33404, 'Comuna Frumuşeni', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33405, 'Oraş Lipova', 190, 2752)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33406, 'Municipiul Bacãu', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33407, 'Oraş Buhuşi', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33408, 'Oraş Comãneşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33409, 'Municipiul Moineşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33410, 'Oraş Slãnic-Moldova', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33411, 'Oraş Târgu Ocna', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33412, 'Comuna Glina', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33413, 'Municipiul Craiova', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33414, 'Municipiul Băilești', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33415, 'Municipiul Calafat', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33416, 'Municipiul Gheorgheni', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33417, 'Municipiul Miercurea Ciuc', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33418, 'Comuna Ghidici', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33419, 'Comuna Galiciuica', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33420, 'Comuna Cârcea', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33421, 'Oraş Pucioasa', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33422, 'Municipiul Moreni', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33423, 'Oraş Gãeşti', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33424, 'Municipiul Târgovişte', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33425, 'Comuna Ştefan Cel Mare', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33426, 'Comuna Schitu', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33427, 'Comuna Roşia De Amaradia', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33428, 'Oraş Boldeşti-Scãeni', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33429, 'Municipiul  Lupeni', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33430, 'Comuna Dorna-Arini', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33431, 'Comuna Unirea', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33432, 'Comuna Augustin', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33433, 'Comuna Bengeşti-Ciocadia', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33434, 'Oraş Recaş', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33435, 'Comuna Vârtoape', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33436, 'Comuna Hereclean', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33437, 'Municipiul Sibiu', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33438, 'Comuna Mihai Eminescu', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33439, 'Comuna Lãpugiu De Jos', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33440, 'Oraş Nucet', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33441, 'Oraş Ştei', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33442, 'Comuna Mãnãstirea Caşin', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33443, 'Comuna Luizi-Cãlugãra', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33444, 'Oraş Miercurea Sibiului', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33445, 'Comuna Sântandrei', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33446, 'Municipiul Oradea', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33447, 'Comuna Suplac', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33448, 'Comuna Şieu', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33449, 'Oraş Victoria', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33450, 'Municipiul Mediaş', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33451, 'Comuna Tãmãdãu Mare', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33452, 'Comuna Livezile', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33453, 'Comuna Valea Argovei', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33454, 'Municipiul Constanţa', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33455, 'Municipiul Turnu Magurele', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33456, 'Comuna Obârşia De Câmp', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33457, 'Comuna Izvoarele', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33458, 'Comuna Şuncuiuş', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33459, 'Municipiul Galaţi', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33460, 'Comuna Şoimi', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33461, 'Oraş Eforie', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33462, 'Oraş Murfatlar', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33463, 'Oraş Techirghiol', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33464, 'Comuna Ţeţchea', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33465, 'Comuna Ulmi', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33466, 'Comuna Gioseni', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33467, 'Comuna Hidişelu De Sus', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33468, 'Comuna Auşeu', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33469, 'Comuna Secuieni', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33470, 'Oraş Jimbolia', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33471, 'Comuna Bogdana', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33472, 'Comuna Fãurei', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33473, 'Comuna I. L. Caragiale', 190, 2737)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33474, 'Comuna Gârleni', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33475, 'Comuna Lugaşu De Jos', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33476, 'Oraş Rupea', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33477, 'Municipiul Beiuş', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33478, 'Comuna Ciceu', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33479, 'Comuna Dubova', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33480, 'Municipiul Fãgãraş', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33481, 'Comuna Petreştii De Jos', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33482, 'Comuna Eftimie Murgu', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33483, 'Municipiul Dej', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33484, 'Oraş Oraviţa', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33485, 'Oraş Slãnic', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33486, 'Comuna Dealu Morii', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33487, 'Municipiul Bistriţa', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33488, 'Municipiul Tecuci', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33489, 'Oraş Bãicoi', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33490, 'Comuna Drãguţeşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33491, 'Comuna Bustuchin', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33492, 'Oraş Bãile Tuşnad', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33493, 'Oraş Rovinari', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33494, 'Municipiul Brãila', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33495, 'Municipiul  Codlea', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33496, 'Comuna Cãlmãţuiu', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33497, 'Comuna Mogoşeşti-Siret', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33498, 'Comuna 1 Decembrie', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33499, 'Municipiul Giurgiu', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33500, 'Municipiul Brad', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33501, 'Municipiul Piatra-Neamţ', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33502, 'Oraş Amara', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33503, 'Comuna Pestişu Mic', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33504, 'Oraş Simeria', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33505, 'Municipiul Orãştie', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33506, 'Comuna Ungureni', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33507, 'Municipiul Sãcele', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33508, 'Municipiul Odorheiu Secuiesc', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33509, 'Comuna Livezi', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33510, 'Comuna Bereşti-Meria', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33511, 'Oraş Sinaia', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33512, 'Municipiul Deva', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33513, 'Comuna Vultureşti', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33514, 'Comuna Dobreţu', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33515, 'Municipiul Dorohoi', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33516, 'Municipiul Caransebeş', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33517, 'Comuna Cucuteni', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33518, 'Comuna Bărbuleşti', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33519, 'Comuna Gheorghe Doja', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33520, 'Oraş Cernavodã', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33521, 'Comuna Livezile', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33522, 'Comuna Vâlcelele', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33523, 'Oraş Buşteni', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33524, 'Comuna Vima Micã', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33525, 'Municipiul Drobeta-Turnu Severin', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33526, 'Comuna Nuci', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33527, 'Municipiul Medgidia', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33528, 'Comuna Pãuleşti', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33529, 'Comuna Dumbrãveşti', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33530, 'Oraş Gura Humorului', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33531, 'Oraş Sulina', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33532, 'Comuna Chiheru De Jos', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33533, 'Municipiul Târnãveni', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33534, 'Municipiul Târgu Mureş', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33535, 'Oraş Baia Sprie', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33536, 'Comuna Cãpuşu Mare', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33537, 'Comuna Optaşi-Mãgura', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33538, 'Comuna Lumina', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33539, 'Comuna Stejaru', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33540, 'Comuna Alexandru I. Cuza', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33541, 'Comuna Frecãţei', 190, 2746)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33542, 'Municipiul Roman', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33543, 'Oraş Târgu Neamţ', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33544, 'Comuna Viişoara', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33545, 'Comuna Agapia', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33546, 'Oraş Corabia', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33547, 'Comuna Grinţieş', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33548, 'Comuna Victor Vlad Delamarina', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33549, 'Comuna Valea Lupului', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33550, 'Oraş Anina', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33551, 'Oraş Borsec', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33552, 'Oraş Vişeu De Sus', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33553, 'Comuna Racşa', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33554, 'Municipiul Satu Mare', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33555, 'Comuna Cãlineşti-Oaş', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33556, 'Municipiul Zalãu', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33557, 'Comuna Supur', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33558, 'Comuna Agriş', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33559, 'Comuna Vizantea-Livezi', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33560, 'Comuna Pãlatca', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33561, 'Comuna Tarna Mare', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33562, 'Comuna Târnava', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33563, 'Oraş Solca', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33564, 'Oraş Sãlişte', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33565, 'Comuna Boiţa', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33566, 'Comuna Vaţa De Jos', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33567, 'Comuna Podgoria', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33568, 'Comuna Curteşti', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33569, 'Comuna Petru Rareş', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33570, 'Oraş Nãsãud', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33571, 'Comuna Lunca', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33572, 'Comuna Unirea', 190, 2736)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33573, 'Comuna Muşeniţa', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33574, 'Comuna Horodnic De Jos', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33575, 'Comuna Drãcşenei', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33576, 'Comuna Horodnic De Sus', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33577, 'Oraş Azuga', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33578, 'Comuna Iloviţa', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33579, 'Municipiul Sfântu Gheorghe', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33580, 'Comuna Homoroade', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33581, 'Comuna Bixad', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33582, 'Municipiul Timişoara', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33583, 'Comuna Mârzãneşti', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33584, 'Comuna Cornu Luncii', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33585, 'Comuna Ungheni', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33586, 'Comuna Aţintiş', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33587, 'Comuna Valea Mare', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33588, 'Comuna Bulzeştii De Sus', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33589, 'Comuna Nicolae Bãlcescu', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33590, 'Comuna I.C.Brãtianu', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33591, 'Municipiul Bârlad', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33592, 'Oraş Babadag', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33593, 'Comuna Topolovãţu Mare', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33594, 'Comuna Runcu Salvei', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33595, 'Comuna Colţi', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33596, 'Comuna Gârdani', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33597, 'Municipiul Ploieşti', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33598, 'Comuna Alexandru Odobescu', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33599, 'Comuna Stejari', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33600, 'Comuna Coltãu', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33601, 'Comuna Costineşti', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33602, 'Municipiul Câmpina', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33603, 'Municipiul Roșiorii de Vede', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33604, 'Comuna Tutova', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33605, 'Oraş Covasna', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33606, 'Comuna Valea Moldovei', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33607, 'Comuna Tãmãşeu', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33608, 'Comuna Poiana  Ilvei', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33609, 'Comuna Jiana', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33610, 'Comuna Popeşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33611, 'Municipiul Olteniţa', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33612, 'Comuna Turnu Roşu', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33613, 'Comuna Fãrcãşeşti', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33614, 'Comuna Teremia Mare', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33615, 'Municipiul Reghin', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33616, 'Comuna Burla', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33617, 'Comuna Bozioru', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33618, 'Comuna Onceşti', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33619, 'Comuna Santa Mare', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33620, 'Municipiul Târgu Jiu', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33621, 'Oraş Bocşa', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33622, 'Municipiul Iaşi', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33623, 'Municipiul Alexandria', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33624, 'Municipiul Vaslui', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33625, 'Comuna Ruginoasa', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33626, 'Municipiul  Vulcan', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33627, 'Oraş Strehaia', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33628, 'Comuna Gãiseni', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33629, 'Municipiul Târgu Secuiesc', 190, 2738)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33630, 'Comuna Borcea', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33631, 'Comuna Vãleni', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33632, 'Comuna Siculeni', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33633, 'Comuna Maliuc', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33634, 'Municipiul Urziceni', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33635, 'Comuna Cucerdea', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33636, 'Comuna Clinceni', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33637, 'Comuna Vultureni', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33638, 'Comuna Garoafa', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33639, 'Oraş Urlaţi', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33640, 'Comuna Lunca Cernii De Jos', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33641, 'Oraş Balş', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33642, 'Comuna Trivalea-Moşteni', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33643, 'Comuna Vadu Moldovei', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33644, 'Comuna Tãtãranu', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33645, 'Oraş Dumbrãveni', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33646, 'Comuna Moara Vlãsiei', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33647, 'Comuna Livezile', 190, 2748)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33648, 'Municipiul Tulcea', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33649, 'Oraş Isaccea', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33650, 'Oraş Sovata', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33651, 'Comuna Scorţeni', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33652, 'Comuna Dumbrava', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33653, 'Oraş Bãile Herculane', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33654, 'Comuna Suhurlui', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33655, 'Comuna Cãmin', 190, 2721)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33656, 'Comuna Roata De Jos', 190, 2734)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33657, 'Comuna Bãrãşti', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33658, 'Comuna Luncoiu De Jos', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33659, 'Comuna Hilişeu-Horia', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33660, 'Comuna Pãltiniş', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33661, 'Comuna Tritenii De Jos', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33662, 'Comuna Moşniţa Nouã', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33663, 'Oraş Haţeg', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33664, 'Oraş Deta', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33665, 'Comuna Tisãu', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33666, 'Oraş Vãlenii De Munte', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33667, 'Oraş Petrila', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33668, 'Comuna Dragomireşti-Vale', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33669, 'Comuna Ocna De Fier', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33670, 'Comuna Stelnica', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33671, 'Comuna Livezeni', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33672, 'Oraş Lehliu Garã', 190, 2742)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33673, 'Comuna Ipotesti', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33674, 'Comuna Jichişu De Jos', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33675, 'Comuna Periş', 190, 2754)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33676, 'Comuna Goruia', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33677, 'Comuna Olari', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33678, 'Municipiul Gherla', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33679, 'Comuna Amzacea', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33680, 'Comuna Ion Neculce', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33681, 'Comuna Sãlaşu De Sus', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33682, 'Comuna Şuşani', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33683, 'Oraş Mizil', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33684, 'Municipiul Fãlticeni', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33685, 'Municipiul Petroşani', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33686, 'Comuna Bâlteni', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33687, 'Comuna Pogoneşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33688, 'Comuna Fildu De Jos', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33689, 'Comuna Budeşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33690, 'Municipiul Suceava', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33691, 'Comuna Ciohorãni', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33692, 'Comuna Valea Mãrului', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33693, 'Municipiul Lugoj', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33694, 'Comuna Victoria', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33695, 'Oraş Cisnãdie', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33696, 'Oraş Hârşova', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33697, 'Oraş Bãlan', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33698, 'Comuna Voineşti', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33699, 'Oraş Moldova Nouã', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33700, 'Comuna Grãdinile', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33701, 'Comuna Bujoreni', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33702, 'Comuna Grãdinari', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33703, 'Comuna Treznea', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33704, 'Municipiul Reşiţa', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33705, 'Oraş Cãlimãneşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33706, 'Comuna Comarna', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33707, 'Comuna Valea Teilor', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33708, 'Comuna Berlişte', 190, 2741)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33709, 'Oraş Cristuru Secuiesc', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33710, 'Municipiul Câmpulung Moldovenesc', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33711, 'Comuna Horia', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33712, 'Oraş Berbeşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33713, 'Oraş Bãile Olãneşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33714, 'Municipiul Drãgãşani', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33715, 'Oraş Ocnele Mari', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33716, 'Comuna Cernişoara', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33717, 'Municipiul Huşi', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33718, 'Oraş Odobeşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33719, 'Comuna Fârtãţeşti', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33720, 'Oraş Panciu', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33721, 'Oraş Mãrãşeşti', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33722, 'Municipiul Focşani', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33723, 'Comuna Milcovul', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33724, 'Comuna Zau De Câmpie', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33725, 'Oraş Râşnov', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33726, 'Comuna Valcãu De Jos', 190, 2722)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33727, 'Municipiul Mangalia', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33728, 'Oraş Zimnicea', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33729, 'Comuna Gârbãu', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33730, 'Municipiul Feteşti', 190, 2730)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33731, 'Comuna Todireşti', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33732, 'Comuna Racoş', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33733, 'Comuna Viişoara', 190, 2715)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33734, 'Oraş Breaza', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33735, 'Oraş Mãcin', 190, 2716)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33736, 'Comuna Suceveni', 190, 2735)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33737, 'Comuna Rãdãuţi-Prut', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33738, 'Comuna Pãuleni-Ciuc', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33739, 'Municipiul Hunedoara', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33740, 'Comuna Solovãstru', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33741, 'Municipiul Cluj-Napoca', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33742, 'Comuna Viişoara', 190, 2747)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33743, 'Municipiul Vatra Dornei', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33744, 'Municipiul  Adjud', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33745, 'Comuna Tamaşi', 190, 2750)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33746, 'Comuna Eşelniţa', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33747, 'Comuna Glogova', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33748, 'Municipiul Sighetu Marmaţiei', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33749, 'Comuna Miroslava', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33750, 'Comuna Poşta Câlnãu', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33751, 'Oraş Bãile Govora', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33752, 'Comuna Dudeştii Noi', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33753, 'Comuna Livezi', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33754, 'Comuna Iecea Mare', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33755, 'Comuna Teliucu Inferior', 190, 2731)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33756, 'Oraş Agnita', 190, 2720)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33757, 'Comuna Valea Râmnicului', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33758, 'Oraş Sânnicolau Mare', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33759, 'Comuna Cãlmãţuiu De Sus', 190, 2718)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33760, 'Oraş Predeal', 190, 2745)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33761, 'Oraş Siret', 190, 2719)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33762, 'Comuna Bãgaciu', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33763, 'Municipiul Sighişoara', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33764, 'Oraş Buziaş', 190, 2717)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33765, 'Municipiul Râmnicu Vâlcea', 190, 2714)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33766, 'Municipiul Baia Mare', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33767, 'Comuna Cungrea', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33768, 'Comuna Valea Doftanei', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33769, 'Municipiul Salonta', 190, 2749)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33770, 'Municipiul Motru', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33771, 'Alexandru Cel Bun', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33772, 'Comuna Moldoveni', 190, 2725)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33773, 'Municipiul Caracal', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33774, 'Comuna Plãieşii De Jos', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33775, 'Comuna Mãguri-Rãcãtãu', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33776, 'Comuna Poiana Cristei', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33777, 'Comuna Cuza Voda', 190, 2739)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33778, 'Municipiul  Topliţa', 190, 2732)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33779, 'Municipiul Slatina', 190, 2724)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33780, 'Municipiul Râmnicu Sãrat', 190, 2743)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33781, 'Comuna Bolboşi', 190, 2733)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33782, 'Comuna Obrejiţa', 190, 2713)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33783, 'Municipiul Câmpia Turzii', 190, 2740)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33784, 'Comuna Poienile Izei', 190, 2728)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33785, 'Comuna Beica De Jos', 190, 2726)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33786, 'Municipiul Paşcani', 190, 2729)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33787, 'Municipiul Orşova', 190, 2727)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33788, 'Comuna Boldeşti-Gradiştea', 190, 2723)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33789, 'Municipiul Bucureşti', 190, 2744)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33790, 'Bor', 191, 2756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33791, 'Branicevo', 191, 2756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33792, 'Jablanica', 191, 2756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33793, 'South Bačka', 191, 2755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33794, 'South Banat', 191, 2755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33795, 'Kolubara', 191, 2756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33796, 'Mačva', 191, 2756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33797, 'Morava', 191, 2756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33798, 'Nišava', 191, 2756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33799, 'Pčinja', 191, 2756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33800, 'Pirot', 191, 2756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33801, 'Podunavlje District', 191, 2756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33802, 'Pomoravlje', 191, 2756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33803, 'Rasina', 191, 2756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33804, 'Raška', 191, 2756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33805, 'North Bačka', 191, 2755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33806, 'North Banat', 191, 2755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33807, 'Central Banat', 191, 2755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33808, 'Srem', 191, 2755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33809, 'Šumadija', 191, 2756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33810, 'Toplica', 191, 2756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33811, 'Zaječar', 191, 2756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33812, 'West Bačka', 191, 2755)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33813, 'Zlatibor', 191, 2756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33814, 'Belgrade', 191, 2756)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33815, 'Sortaval’skiy Rayon', 192, 2794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33816, 'Zvenigovskiy Rayon', 192, 2785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33817, 'Zuyevskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33818, 'Zubtsovskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33819, 'Zubovo-Polyanskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33820, 'Zol’skiy Rayon', 192, 2799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33821, 'Zolotukhinskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33822, 'Znamenskiy Rayon', 192, 2766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33823, 'Zilairskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33824, 'Zianchurinskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33825, 'Zhukovskiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33826, 'Zhukovskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33827, 'Zhizdrinskiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33828, 'Zhirnovskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33829, 'Zheleznogorskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33830, 'Primorskiy Rayon', 192, 2788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33831, 'Zelenogradskiy Gorodskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33832, 'Zelenodolsky District', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33833, 'Zelenchukskiy Rayon', 192, 2795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33834, 'Zav’yalovskiy Rayon', 192, 2762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33835, 'Zavolzhskiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33836, 'Gorodskoy Okrug Zaraysk', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33837, 'Zaokskiy Rayon', 192, 2764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33838, 'Zakharovskiy Rayon', 192, 2771)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33839, 'Zainskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33840, 'Sergiyevo-Posadskiy Gorodskoy Okrug', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33841, 'Zadonskiy Rayon', 192, 2786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33842, 'Yuzhskiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33843, 'Yus’vinskiy Rayon', 192, 2774)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33844, 'Yustinskiy Rayon', 192, 2797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33845, 'Yur’yev-Pol’skiy Rayon', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33846, 'Yur’yevetskiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33847, 'Yur’yanskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33848, 'Yurlinskiy Rayon', 192, 2774)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33849, 'Yurinskiy Rayon', 192, 2785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33850, 'Yukhnovskiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33851, 'Yeyskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33852, 'Yermekeyevskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33853, 'Yenotayevskiy Rayon', 192, 2809)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33854, 'Yel’nikovskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33855, 'Yeletskiy Rayon', 192, 2786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33856, 'Yelanskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33857, 'Yelabuzhskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33858, 'Gorodskoy Okrug Yegor''yevsk', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33859, 'Yasnogorskiy Rayon', 192, 2764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33860, 'Yashkul’skiy Rayon', 192, 2797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33861, 'Yashaltinskiy Rayon', 192, 2797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33862, 'Yaroslavskiy Rayon', 192, 2757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33863, 'Yaranskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33864, 'Yantikovskiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33865, 'Yanaul’skiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33866, 'Yal’chikskiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33867, 'Yakovlevskiy Rayon', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33868, 'Yadrinskiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33869, 'Vytegorskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33870, 'Vysokogorskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33871, 'Vyshnevolotskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33872, 'Vyselkovskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33873, 'Vygonichskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33874, 'Vyborgskiy Rayon', 192, 2787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33875, 'Vyborgskiy Rayon', 192, 2788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33876, 'Vyaznikovskiy Rayon', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33877, 'Vyatsko-Polyanskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33878, 'Vurnarskiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33879, 'Vsevolozhskiy Rayon', 192, 2787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33880, 'Voznesenskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33881, 'Vozhegodskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33882, 'Voskresenskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33883, 'Gorodskoy Okrug Voskresensk', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33884, 'Voskresenskiy Rayon', 192, 2769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33885, 'Vorotynskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33886, 'Severnyy Administrativnyy Okrug', 192, 2782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33887, 'Vorob’yevskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33888, 'Volzhskiy Rayon', 192, 2785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33889, 'Volzhskiy Rayon', 192, 2770)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33890, 'Vol’skiy Rayon', 192, 2769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33891, 'Volovskiy Rayon', 192, 2786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33892, 'Volotovskiy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33893, 'Volosovskiy Rayon', 192, 2787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33894, 'Volokonovskiy Rayon', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33895, 'Volokolamskiy Gorodskoy Okrug', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33896, 'Vologodskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33897, 'Volodarskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33898, 'Volodarskiy Rayon', 192, 2809)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33899, 'Volkhovskiy rayon', 192, 2787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33900, 'Vokhomskiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33901, 'Vinogradovskiy Rayon', 192, 2810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33902, 'Vilegodskiy Rayon', 192, 2810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33903, 'Vichugskiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33904, 'Veydelevskiy Rayon', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33905, 'Vetluzhskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33906, 'Ves’yegonskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33907, 'Verkhovazhskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33908, 'Verkhoshizhemskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33909, 'Verkhneuslonskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33910, 'Verkhneural’skiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33911, 'Verkhnetoyemskiy Rayon', 192, 2810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33912, 'Verkhnemamonskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33913, 'Verkhnelandekhovskiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33914, 'Verkhnekhavskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33915, 'Verkhnekamskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33916, 'Venëvskiy Rayon', 192, 2764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33917, 'Vel’skiy Rayon', 192, 2810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33918, 'Velikoustyugskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33919, 'Velikolukskiy Rayon', 192, 2773)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33920, 'Vedenskiy Rayon', 192, 2805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33921, 'Vasileostrovskiy Rayon', 192, 2788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33922, 'Vashkinskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33923, 'Varnavinskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33924, 'Valuyskiy Rayon', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33925, 'Valdayskiy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33926, 'Vadskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33927, 'Vachskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33928, 'Ustyuzhenskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33929, 'Ust’yanskiy Rayon', 192, 2810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33930, 'Ust’-Vymskiy Rayon', 192, 2792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33931, 'Ust’-Tsilemskiy Rayon', 192, 2792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33932, 'Ust’-Labinskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33933, 'Ust’-Kulomskiy Rayon', 192, 2792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33934, 'Ust’-Kubinskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33935, 'Ust’-Dzhegutinskiy Rayon', 192, 2795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33936, 'Uspenskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33937, 'Usmanskiy Rayon', 192, 2786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33938, 'Urzhumskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33939, 'Uryupinskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33940, 'Urvanskiy Rayon', 192, 2799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33941, 'Urus-Martanovskiy Rayon', 192, 2805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33942, 'Urupskiy Rayon', 192, 2795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33943, 'Urmarskiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33944, 'Urenskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33945, 'Untsukulsky District', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33946, 'Uninskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33947, 'Unechskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33948, 'Ulyanovskiy Rayon', 192, 2761)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33949, 'Ul’yanovskiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33950, 'Ugranskiy Rayon', 192, 2768)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33951, 'Uglichskiy Rayon', 192, 2757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33952, 'Ufimskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33953, 'Udorskiy Rayon', 192, 2792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33954, 'Udomel’skiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33955, 'Uchalinskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33956, 'Tuzhinskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33957, 'Tuymazinskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33958, 'Tutayevskiy Rayon', 192, 2757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33959, 'Severo-Zapadnyy Administrativnyy Okrug', 192, 2782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33960, 'Tukayevskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33961, 'Tuapsinskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33962, 'Tsuntinskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33963, 'Tsumadinskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33964, 'Tsivil’skiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33965, 'Tsil’ninskiy Rayon', 192, 2761)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33966, 'Tselinnyy Rayon', 192, 2797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33967, 'Trubchevskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33968, 'Troitsko-Pechorskiy Rayon', 192, 2792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33969, 'Totemskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33970, 'Tosnenskiy Rayon', 192, 2787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33971, 'Torzhokskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33972, 'Toropetskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33973, 'Torbeyevskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33974, 'Tonshayevskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33975, 'Tonkinskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33976, 'Tokarëvskiy Rayon', 192, 2766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33977, 'Tlyaratinskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33978, 'Timskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33979, 'Timashevskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33980, 'Tikhvinskiy Rayon', 192, 2787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33981, 'Tikhoretskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33982, 'Teykovskiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33983, 'Teuchezhskiy Rayon', 192, 2811)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33984, 'Tetyushskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33985, 'Terskiy Rayon', 192, 2781)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33986, 'Terskiy Rayon', 192, 2799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33987, 'Ternovskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33988, 'Teren’gul’skiy Rayon', 192, 2761)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33989, 'Terbunskiy Rayon', 192, 2786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33990, 'Tëplo-Ogarëvskiy Rayon', 192, 2764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33991, 'Ten’gushevskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33992, 'Temruksky rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33993, 'Temnikovskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33994, 'Tbilisskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33995, 'Tatyshlinskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33996, 'Tarusskiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33997, 'Tarumovskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33998, 'Tarnogskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (33999, 'Talovskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34000, 'Taldomskiy Gorodskoy Okrug', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34001, 'Tabasaranskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34002, 'Sysol’skiy Rayon', 192, 2792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34003, 'Syktyvdinskiy Rayon', 192, 2792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34004, 'Syamzhenskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34005, 'Svetloyarskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34006, 'Svechinskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34007, 'Suzemskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34008, 'Suzdal’skiy Rayon', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34009, 'Suvorovskiy Rayon', 192, 2764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34010, 'Susaninskiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34011, 'Surovikinskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34012, 'Surazhskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34013, 'Suoyarvskiy Rayon', 192, 2794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34014, 'Sunzhenskiy Rayon', 192, 2801)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34015, 'Sunskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34016, 'Suleyman-Stal’skiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34017, 'Sukhinichskiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34018, 'Sudzhanskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34019, 'Sudogodskiy Rayon', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34020, 'Sudislavskiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34021, 'Gorodskoy Okrug Stupino', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34022, 'Strugo-Krasnenskiy Rayon', 192, 2773)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34023, 'Sterlitamakskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34024, 'Sterlibashevskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34025, 'Staroshaygovskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34026, 'Starorusskiy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34027, 'Staropoltavskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34028, 'Starooskolsky Urban Okrug', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34029, 'Starominskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34030, 'Starokulatkinskiy Rayon', 192, 2761)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34031, 'Starodubskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34032, 'Staritskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34033, 'Stanovlyanskiy Rayon', 192, 2786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34034, 'Sredneakhtubinskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34035, 'Spirovskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34036, 'Spasskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34037, 'Spas-Demenskiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34038, 'Sovetskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34039, 'Sovetskiy Rayon', 192, 2785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34040, 'Yuzhnyy Administrativnyy Okrug', 192, 2782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34041, 'Sovetskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34042, 'Sovetskiy Rayon', 192, 2769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34043, 'Cherekskiy Rayon', 192, 2799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34044, 'Shamilsky District', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34045, 'Sosnovskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34046, 'Zapadnyy Administrativnyy Okrug', 192, 2782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34047, 'Solntsevskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34048, 'Gorodskoy Okrug Solnechnogorsk', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34049, 'Soligalichskiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34050, 'Soletskiy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34051, 'Sokol’skiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34052, 'Sobinskiy Rayon', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34053, 'Slobodskoy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34054, 'Slavyansky rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34055, 'Slavskiy Gorodskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34056, 'Slantsevskiy Rayon', 192, 2787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34057, 'Shuyskiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34058, 'Shumerlinskiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34059, 'Shovgenovskiy Rayon', 192, 2811)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34060, 'Shimskiy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34061, 'Shenkurskiy Rayon', 192, 2810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34062, 'Shemurshinskiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34063, 'Shelkovskoy Rayon', 192, 2805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34064, 'Sheksninskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34065, 'Shebekinskiy Rayon', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34066, 'Shchigrovskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34067, 'Shcherbinovskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34068, 'Gorodskoy Okrug Shchëlkovo', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34069, 'Gorodskoy Okrug Shatura', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34070, 'Shatkovskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34071, 'Shar’inskiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34072, 'Sharanskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34073, 'Sharangskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34074, 'Shalinskiy Rayon', 192, 2805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34075, 'Gorodskoy Okrug Shakhovskaya', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34076, 'Shabalinskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34077, 'Sevskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34078, 'Severskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34079, 'Sestroretskiy Rayon', 192, 2788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34080, 'Gorodskoy Okrug Serpukhov', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34081, 'Sernurskiy Rayon', 192, 2785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34082, 'Sergokalinskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34083, 'Sergachskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34084, 'Gorodskoy Okrug Serebryannyye Prudy', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34085, 'Serafimovichskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34086, 'Semilukskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34087, 'Selizharovskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34088, 'Selivanovskiy Rayon', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34089, 'Segezhskiy Rayon', 192, 2794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34090, 'Sechenovskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34091, 'Sebezhskiy Rayon', 192, 2773)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34092, 'Savinskiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34093, 'Satkinskiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34094, 'Sarpinskiy Rayon', 192, 2797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34095, 'Sarmanovskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34096, 'Saratovskiy Rayon', 192, 2769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34097, 'Sarapul’skiy Rayon', 192, 2762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34098, 'Saraktashskiy Rayon', 192, 2777)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34099, 'Sandovskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34100, 'Sanchurskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34101, 'Sampurskiy Rayon', 192, 2766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34102, 'Salavatskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34103, 'Safonovskiy Rayon', 192, 2768)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34104, 'Sabinskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34105, 'Ryl’skiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34106, 'Rybnovskiy Rayon', 192, 2771)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34107, 'Rybno-Slobodskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34108, 'Rybinskiy Rayon', 192, 2757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34109, 'Ryazhskiy Rayon', 192, 2771)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34110, 'Ryazanskiy Rayon', 192, 2771)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34111, 'Ruzskiy Gorodskoy Okrug', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34112, 'Ruzayevskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34113, 'Rutul’skiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34114, 'Rudnyanskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34115, 'Roven’skiy Rayon', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34116, 'Rostovskiy Rayon', 192, 2757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34117, 'Rossoshanskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34118, 'Romodanovskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34119, 'Rognedinskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34120, 'Rodnikovskiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34121, 'Rep’yevskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34122, 'Rasskazovskiy Rayon', 192, 2766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34123, 'Ramonskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34124, 'Rameshkovskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34125, 'Ramenskiy Gorodskoy Okrug', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34126, 'Rakityanskiy Rayon', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34127, 'Pytalovskiy Rayon', 192, 2773)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34128, 'Pyshchugskiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34129, 'Pustoshkinskiy Rayon', 192, 2773)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34130, 'Pushkinskiy Rayon', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34131, 'Pushkino-Gorskiy Rayon', 192, 2773)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34132, 'Pudozhskiy Rayon', 192, 2794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34133, 'Puchezhskiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34134, 'Pskovskiy Rayon', 192, 2773)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34135, 'Pryazhinskiy Rayon', 192, 2794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34136, 'Prokhorovskiy Rayon', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34137, 'Prokhladnenskiy Rayon', 192, 2799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34138, 'Priyutnenskiy Rayon', 192, 2797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34139, 'Privolzhskiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34140, 'Privolzhskiy Rayon', 192, 2809)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34141, 'Pristenskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34142, 'Ketchenerovskiy Rayon', 192, 2797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34143, 'Prionezhskiy Rayon', 192, 2794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34144, 'Primorsko-Akhtarskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34145, 'Primorskiy Rayon', 192, 2810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34146, 'Priluzskiy Rayon', 192, 2792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34147, 'Prikubanskiy Rayon', 192, 2795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34148, 'Prigorodnyy Rayon', 192, 2779)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34149, 'Pravoberezhnyy Rayon', 192, 2779)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34150, 'Pravdinskiy Gorodskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34151, 'Povorinskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34152, 'Poshekhonskiy Rayon', 192, 2757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34153, 'Porkhovskiy Rayon', 192, 2773)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34154, 'Poretskiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34155, 'Ponyrovskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34156, 'Ponazyrevskiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34157, 'Polesskiy Gorodskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34158, 'Pogarskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34159, 'Kumylzhenskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34160, 'Podporozhskiy Rayon', 192, 2787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34161, 'Podosinovskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34162, 'Podolsk Urban Okrug', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34163, 'Podgorenskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34164, 'Poddorskiy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34165, 'Pochinkovskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34166, 'Pochepskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34167, 'Pizhanskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34168, 'Pitkyarantskiy Rayon', 192, 2794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34169, 'Pinezhskiy Rayon', 192, 2810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34170, 'Pil’ninskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34171, 'Petushinskiy Rayon', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34172, 'Petropavlovskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34173, 'Petrogradskiy Rayon', 192, 2788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34174, 'Pestyakovskiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34175, 'Pestrechinskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34176, 'Pestovskiy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34177, 'Pervomayskiy Rayon', 192, 2757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34178, 'Pereslavskiy Rayon', 192, 2757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34179, 'Peremyshl’skiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34180, 'Penovskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34181, 'Pechorskiy Rayon', 192, 2773)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34182, 'Pechengskiy Rayon', 192, 2781)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34183, 'Pavlovskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34184, 'Pavlovskiy Rayon', 192, 2761)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34185, 'Pavlovskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34186, 'Pavlovskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34187, 'Pavlovo-Posadskiy Gorodskoy Okrug', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34188, 'Pavinskiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34189, 'Parfinskiy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34190, 'Parfen’yevskiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34191, 'Paran’ginskiy Rayon', 192, 2785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34192, 'Paninskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34193, 'Pallasovskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34194, 'Palkinskiy Rayon', 192, 2773)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34195, 'Palekhskiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34196, 'Ozyory Urban Okrug', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34197, 'Ozërskiy Gorodskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34198, 'Otradnenskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34199, 'Ostrovskiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34200, 'Ostrovskiy Rayon', 192, 2773)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34201, 'Ostrogozhskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34202, 'Ostashkovskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34203, 'Orshanskiy Rayon', 192, 2785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34204, 'Orichevskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34205, 'Orekhovo-Zuyevskiy Gorodskoy Okrug', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34206, 'Opochetskiy Rayon', 192, 2773)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34207, 'Oparinskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34208, 'Onezhskiy Rayon', 192, 2810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34209, 'Omutninskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34210, 'Olonetskiy Rayon', 192, 2794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34211, 'Ol’khovskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34212, 'Ol’khovatskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34213, 'Okulovskiy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34214, 'Oktyabr’skiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34215, 'Nurlatskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34216, 'Oktyabr’skiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34217, 'Oktyabr’skiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34218, 'Oktyabr’skiy Rayon', 192, 2797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34219, 'Odintsovskiy Gorodskoy Okrug', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34220, 'Oboyanskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34221, 'Nyazepetrovskiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34222, 'Nyandomskiy Rayon', 192, 2810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34223, 'Nurimanovskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34224, 'Nozhay-Yurtovskiy Rayon', 192, 2805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34225, 'Novozybkovskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34226, 'Novousmanskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34227, 'Novotor”yal’skiy Rayon', 192, 2785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34228, 'Novosokol’nicheskiy Rayon', 192, 2773)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34229, 'Novorzhevskiy Rayon', 192, 2773)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34230, 'Novopokrovskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34231, 'Novooskol’skiy Rayon', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34232, 'Novoorskiy Rayon', 192, 2777)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34233, 'Novonikolayevskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34234, 'Novolakskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34235, 'Novokubanskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34236, 'Novokhoperskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34237, 'Novoanninskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34238, 'Novgorodskiy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34239, 'Nolinskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34240, 'Bogorodskiy Gorodskoy Okrug', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34241, 'Nogayskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34242, 'Nizhnekamskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34243, 'Nizhnedevitskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34244, 'Nikolayevskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34245, 'Neyskiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34246, 'Nevskiy Rayon', 192, 2788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34247, 'Neverkinskiy Rayon', 192, 2775)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34248, 'Nesterovskiy Godorskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34249, 'Nerekhtskiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34250, 'Nemskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34251, 'Nemanskiy Gorodskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34252, 'Nekrasovskiy Rayon', 192, 2757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34253, 'Nekouzskiy Rayon', 192, 2757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34254, 'Nekhayevskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34255, 'Neftegorskiy Rayon', 192, 2770)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34256, 'Nazranovskiy Rayon', 192, 2801)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34257, 'Navlinskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34258, 'Naurskiy Rayon', 192, 2805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34259, 'Naro-Fominskiy Gorodskoy Okrug', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34260, 'Narimanovskiy Rayon', 192, 2809)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34261, 'Nagorskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34262, 'Nagaybakskiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34263, 'Nadterechnyy Rayon', 192, 2805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34264, 'Mytishchi Urban Okrug', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34265, 'Myshkinskiy Rayon', 192, 2757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34266, 'Muyezerskiy Rayon', 192, 2794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34267, 'Muslyumovskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34268, 'Muromskiy Rayon', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34269, 'Murashinskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34270, 'Mozhayskiy Gorodskoy Okrug', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34271, 'Mozdokskiy Rayon', 192, 2779)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34272, 'Mostovskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34273, 'Moskovskiy Rayon', 192, 2788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34274, 'Moshenskoy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34275, 'Mosal’skiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34276, 'Morkinskiy Rayon', 192, 2785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34277, 'Morgaushskiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34278, 'Miyakinskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34279, 'Mishkinskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34280, 'Milyutinskiy Rayon', 192, 2772)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34281, 'Mikhaylovka Urban Okrug', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34282, 'Mglinskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34283, 'Mezhevskoy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34284, 'Mezhdurechenskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34285, 'Mezenskiy Rayon', 192, 2810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34286, 'Meshchovskiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34287, 'Menzelinskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34288, 'Meleuzovskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34289, 'Melenkovskiy Rayon', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34290, 'Medynskiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34291, 'Medvezh’yegorskiy Rayon', 192, 2794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34292, 'Medvenskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34293, 'Medvedevskiy Rayon', 192, 2785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34294, 'Mechetlinskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34295, 'Mayskiy Rayon', 192, 2799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34296, 'Maynskiy Rayon', 192, 2761)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34297, 'Maykopskiy Rayon', 192, 2811)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34298, 'Martynovskiy Rayon', 192, 2772)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34299, 'Marksovskiy Rayon', 192, 2769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34300, 'Mari-Turekskiy Rayon', 192, 2785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34301, 'Mariinsko-Posadskiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34302, 'Marëvskiy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34303, 'Manturovskiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34304, 'Manturovskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34305, 'Mamadyshskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34306, 'Maloyaroslavetskiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34307, 'Malovisherskiy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34308, 'Malokarachayevskiy Rayon', 192, 2795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34309, 'Maloderbetovskiy Rayon', 192, 2797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34310, 'Malmyzhskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34311, 'Malgobekskiy Rayon', 192, 2801)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34312, 'Maksatikhinskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34313, 'Makar’yevskiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34314, 'Magaramkentskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34315, 'Lyudinovskiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34316, 'Lyubytinskiy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34317, 'Yugo-Vostochnyy Administrativnyy Okrug', 192, 2782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34318, 'Lyubimskiy Rayon', 192, 2757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34319, 'Gorodskoy Okrug Lyubertsy', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34320, 'Lyskovskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34321, 'Lyambirskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34322, 'Luzskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34323, 'Luzhskiy Rayon', 192, 2787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34324, 'Lukoyanovskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34325, 'Lukhskiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34326, 'Gorodskoy Okrug Lukhovitsy', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34327, 'Lovozerskiy Rayon', 192, 2781)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34328, 'Loukhskiy Rayon', 192, 2794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34329, 'Gorodskoy Okrug Lotoshino', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34330, 'Lomonosovskiy Rayon', 192, 2787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34331, 'Lodeynopol’skiy Rayon', 192, 2787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34332, 'Liskinskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34333, 'Lipetskiy Rayon', 192, 2786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34334, 'Limanskiy Rayon', 192, 2809)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34335, 'Likhoslavl’skiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34336, 'L’govskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34337, 'Lev-Tolstovskiy Rayon', 192, 2786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34338, 'Levashinskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34339, 'Lesnoy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34340, 'Leshukonskiy Rayon', 192, 2810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34341, 'Lenskiy Rayon', 192, 2810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34342, 'Leninskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34343, 'Karabudakhkentskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34344, 'Leninskiy Gorodskoy Okrug', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34345, 'Leninskiy Rayon', 192, 2764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34346, 'Leninogorskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34347, 'Leningradskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34348, 'Lebyazhskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34349, 'Lebedyanskiy Rayon', 192, 2786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34350, 'Lakskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34351, 'Lakhdenpokhskiy Rayon', 192, 2794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34352, 'Laishevskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34353, 'Labinskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34354, 'Kvarkenskiy Rayon', 192, 2777)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34355, 'Kuznetskiy Rayon', 192, 2775)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34356, 'Kuzhenerskiy Rayon', 192, 2785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34357, 'Spasskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34358, 'Kuybyshevskiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34359, 'Kuvshinovskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34360, 'Kusinskiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34361, 'Kushnarenkovskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34362, 'Kushchëvskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34363, 'Kurskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34364, 'Kurskiy Rayon', 192, 2767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34365, 'Kurganinskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34366, 'Kurchatovskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34367, 'Kurakhskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34368, 'Kun’inskiy Rayon', 192, 2773)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34369, 'Kumertau Urban Okrug', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34370, 'Kumenskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34371, 'Kulinskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34372, 'Kukmorskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34373, 'Kugarchinskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34374, 'Kudymkarskiy Rayon', 192, 2774)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34375, 'Kstovskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34376, 'Krymskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34377, 'Krylovskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34378, 'Krestetskiy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34379, 'Kransoznamenskiy Gorodskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34380, 'Krasnoyarskiy Rayon', 192, 2770)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34381, 'Krasnoyarskiy Rayon', 192, 2809)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34382, 'Krasnovisherskiy Rayon', 192, 2774)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34383, 'Krasnoufimskiy Rayon', 192, 2817)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34384, 'Krasnoslobodskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34385, 'Krasnosel’skiy Rayon', 192, 2788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34386, 'Krasnosel’skiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34387, 'Krasnooktyabr’skiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34388, 'Krasnokutskiy Rayon', 192, 2769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34389, 'Krasnokholmskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34390, 'Krasnokamskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34391, 'Krasnogvardeyskiy Rayon', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34392, 'Krasnogvardeyskiy Rayon', 192, 2811)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34393, 'Krasnogvardeyskiy Rayon', 192, 2788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34394, 'Gorodskoy Okrug Krasnogorsk', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34395, 'Krasnogorskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34396, 'Krasnoborskiy Rayon', 192, 2810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34397, 'Krasnobakovskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34398, 'Krasnoarmeyskiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34399, 'Krasnoarmeyskiy Rayon', 192, 2769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34400, 'Krasnoarmeyskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34401, 'Krasninskiy Rayon', 192, 2786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34402, 'Kozlovskiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34403, 'Kozel’skiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34404, 'Koygorodskiy Rayon', 192, 2792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34405, 'Kovylkinskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34406, 'Kovrovskiy Rayon', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34407, 'Koverninskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34408, 'Kovdorskiy Rayon', 192, 2781)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34409, 'Kotovskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34410, 'Kotlasskiy Rayon', 192, 2810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34411, 'Kotel’nikovskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34412, 'Kotel’nichskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34413, 'Kostromskoy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34414, 'Kosinskiy Rayon', 192, 2774)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34415, 'Koshkinskiy Rayon', 192, 2770)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34416, 'Koshekhabl’skiy Rayon', 192, 2811)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34417, 'Kortkerosskiy Rayon', 192, 2792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34418, 'Korochanskiy Rayon', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34419, 'Korenovskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34420, 'Korenevskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34421, 'Konyshëvskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34422, 'Konoshskiy Rayon', 192, 2810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34423, 'Kondopozhskiy Rayon', 192, 2794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34424, 'Konakovskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34425, 'Komsomol’skiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34426, 'Komsomol’skiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34427, 'Komarichskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34428, 'Kol’skiy Rayon', 192, 2781)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34429, 'Gorodskoy Okrug Kolomna', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34430, 'Kologrivskiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34431, 'Kol’chuginskiy Rayon', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34432, 'Kochkurovskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34433, 'Kochevskiy Rayon', 192, 2774)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34434, 'Knyazhpogostskiy Rayon', 192, 2792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34435, 'Knyagininskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34436, 'Klintsovskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34437, 'Gorodskoy Okrug Klin', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34438, 'Klimovskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34439, 'Kletskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34440, 'Kletnyanskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34441, 'Klepikovskiy Rayon', 192, 2771)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34442, 'Kizlyarskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34443, 'Kizilyurtovskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34444, 'Kizil’skiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34445, 'Kiyasovskiy Rayon', 192, 2762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34446, 'Kirzhachskiy Rayon', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34447, 'Kirsanovskiy Rayon', 192, 2766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34448, 'Kirovskiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34449, 'Kirovskiy Rayon', 192, 2779)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34450, 'Kirovskiy Rayon', 192, 2788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34451, 'Kirovskiy Rayon', 192, 2787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34452, 'Kirovo-Chepetskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34453, 'Kirishskiy Rayon', 192, 2787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34454, 'Kirillovskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34455, 'Kireyevskiy Rayon', 192, 2764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34456, 'Kingiseppskiy Rayon', 192, 2787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34457, 'Kineshemskiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34458, 'Kinel’skiy Rayon', 192, 2770)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34459, 'Kimrskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34460, 'Kil’mezskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34461, 'Kilemarskiy Rayon', 192, 2785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34462, 'Kikvidzenskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34463, 'Kiknurskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34464, 'Kiginskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34465, 'Kichmengsko-Gorodetskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34466, 'Khvoyninskiy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34467, 'Khvastovichskiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34468, 'Khvalynskiy Rayon', 192, 2769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34469, 'Khunzakhskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34470, 'Khomutovskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34471, 'Kholmskiy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34472, 'Kholmogorskiy Rayon', 192, 2810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34473, 'Khokhol’skiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34474, 'Khlevenskiy Rayon', 192, 2786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34475, 'Khivskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34476, 'Khimki Urban Okrug', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34477, 'Khaybullinskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34478, 'Khasavyurtovskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34479, 'Kharovskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34480, 'Kharabalinskiy Rayon', 192, 2809)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34481, 'Orlovskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34482, 'Khabezskiy Rayon', 192, 2795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34483, 'Kesovogorskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34484, 'Kemskiy Rayon', 192, 2794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34485, 'Kazbekovskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34486, 'Kaytagskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34487, 'Kayakentskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34488, 'Kavkazskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34489, 'Katav-Ivanovskiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34490, 'Kastorenskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34491, 'Laganskiy Rayon', 192, 2797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34492, 'Kasimovskiy Rayon', 192, 2771)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34493, 'Kashira Urban Okrug', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34494, 'Kashirskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34495, 'Kashinskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34496, 'Karsunskiy Rayon', 192, 2761)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34497, 'Karmaskalinskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34498, 'Kargopol’skiy Rayon', 192, 2810)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34499, 'Karakulinskiy Rayon', 192, 2762)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34500, 'Karaidel’skiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34501, 'Karachevskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34502, 'Karachayevskiy Rayon', 192, 2795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34503, 'Kantemirovskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34504, 'Kanevskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34505, 'Kanashskiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34506, 'Kamyzyakskiy Rayon', 192, 2809)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34507, 'Kamyshinskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34508, 'Kamsko-Ustyinsky District', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34509, 'Kameshkovskiy Rayon', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34510, 'Kameshkirskiy Rayon', 192, 2775)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34511, 'Kamenskiy Rayon', 192, 2764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34512, 'Kamenskiy Rayon', 192, 2772)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34513, 'Kamenskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34514, 'Kalyazinskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34515, 'Kaltasinskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34516, 'Kalininskiy Rayon', 192, 2788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34517, 'Kalininskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34518, 'Kalininskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34519, 'Kaleval’skiy Rayon', 192, 2794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34520, 'Kalacheyevskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34521, 'Kalachevskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34522, 'Kadyyskiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34523, 'Kaduyskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34524, 'Izmalkovskiy Rayon', 192, 2786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34525, 'Izhemskiy Rayon', 192, 2792)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34526, 'Ivnyanskiy Rayon', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34527, 'Ivanovskiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34528, 'Gorodskoy Okrug Istra', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34529, 'Issinskiy Rayon', 192, 2775)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34530, 'Ishimbayskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34531, 'Irafskiy Rayon', 192, 2779)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34532, 'Insarskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34533, 'Ilovlinskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34534, 'Ilishevskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34535, 'Il’inskiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34536, 'Ikryaninskiy Rayon', 192, 2809)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34537, 'Iki-Burul’skiy Rayon', 192, 2797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34538, 'Iglinskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34539, 'Ichalkovskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34540, 'Ibresinskiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34541, 'Gvardeyskiy Gorodskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34542, 'Gus’-Khrustal’nyy Rayon', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34543, 'Gusevskiy Gorodskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34544, 'Gur''yevskiy Gorodskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34545, 'Gunibskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34546, 'Gumbetovskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34547, 'Gul’kevichskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34548, 'Gudermesskiy Rayon', 192, 2805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34549, 'Gubkinsky Urban Okrug', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34550, 'Gryazovetskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34551, 'Gryazinskiy Rayon', 192, 2786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34552, 'Groznenskiy Rayon', 192, 2805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34553, 'Gribanovskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34554, 'Gorshechenskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34555, 'Gorokhovetskiy Rayon', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34556, 'Gorodovikovskiy Rayon', 192, 2797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34557, 'Gorodishchenskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34558, 'Gorodetskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34559, 'Gornomariyskiy Rayon', 192, 2785)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34560, 'Glushkovskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34561, 'Giaginskiy Rayon', 192, 2811)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34562, 'Gergebilsky', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34563, 'Georgiyevskiy Rayon', 192, 2767)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34564, 'Gdovskiy Rayon', 192, 2773)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34565, 'Gayskiy Rayon', 192, 2777)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34566, 'Gaynskiy Rayon', 192, 2774)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34567, 'Gavrilov-Yamskiy Rayon', 192, 2757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34568, 'Gavrilovo-Posadskiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34569, 'Gatchinskiy Rayon', 192, 2787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34570, 'Galichskiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34571, 'Gaginskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34572, 'Yugo-Zapadnyy Administrativnyy Okrug', 192, 2782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34573, 'Gafuriyskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34574, 'Furmanovskiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34575, 'Frunzenskiy Rayon', 192, 2788)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34576, 'Tsentral’nyy Administrativnyy Okrug', 192, 2782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34577, 'Frolovskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34578, 'Firovskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34579, 'Ferzikovskiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34580, 'Fëdorovskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34581, 'Fatezhskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34582, 'Falënskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34583, 'Ertil’skiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34584, 'Engel’sskiy Rayon', 192, 2769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34585, 'Dzerzhinskiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34586, 'Dyurtyulinskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34587, 'Dyat’kovskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34588, 'Duvanskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34589, 'Duminichskiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34590, 'Dubrovskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34591, 'Dubovskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34592, 'Dubovskiy Rayon', 192, 2772)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34593, 'Dubenskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34594, 'Drozhzhanovskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34595, 'Gorodskoy Okrug Domodedovo', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34596, 'Dolgorukovskiy Rayon', 192, 2786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34597, 'Dobryanskiy Rayon', 192, 2774)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34598, 'Dobrovskiy Rayon', 192, 2786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34599, 'Dobrinskiy Rayon', 192, 2786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34600, 'Dmitrovskiy Gorodskoy Okrug', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34601, 'Dmitriyevskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34602, 'Diveyevskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34603, 'Dinskoy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34604, 'Digorskiy Rayon', 192, 2779)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34605, 'Derbentskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34606, 'Demyanskiy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34607, 'Davlekanovskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34608, 'Darovskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34609, 'Dankovskiy Rayon', 192, 2786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34610, 'Danilovskiy Rayon', 192, 2757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34611, 'Danilovskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34612, 'Dal’nekonstantinovskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34613, 'Dakhadayevskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34614, 'Chukhlomskiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34615, 'Chudovskiy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34616, 'Chistopolsky District', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34617, 'Chishminskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34618, 'Chernyshkovskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34619, 'Chernyanskiy Rayon', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34620, 'Chernyakhovksiy Gorodskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34621, 'Chernozemel’skiy Rayon', 192, 2797)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34622, 'Chernoyarskiy Rayon', 192, 2809)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34623, 'Cherepovetskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34624, 'Cheremshanskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34625, 'Cheremisinovskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34626, 'Cherdynskiy Rayon', 192, 2774)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34627, 'Cherdaklinskiy Rayon', 192, 2761)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34628, 'Chekmagushevskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34629, 'Gorodskoy Okrug Chekhov', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34630, 'Chegemskiy Rayon', 192, 2799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34631, 'Cheboksarskiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34632, 'Charodinskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34633, 'Chaplyginskiy Rayon', 192, 2786)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34634, 'Chamzinskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34635, 'Chagodoshchenskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34636, 'Bykovskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34637, 'Buzdyakskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34638, 'Buyskiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34639, 'Buynakskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34640, 'Buturlinskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34641, 'Buturlinovskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34642, 'Burzyanskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34643, 'Burayevskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34644, 'Buinskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34645, 'Bugulminsky District', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34646, 'Bryukhovetskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34647, 'Bryanskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34648, 'Breytovskiy Rayon', 192, 2757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34649, 'Brasovskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34650, 'Botlikhskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34651, 'Borskiy Rayon', 192, 2770)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34652, 'Borovskiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34653, 'Borovichskiy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34654, 'Borisovskiy Rayon', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34655, 'Borisoglebskiy Rayon', 192, 2757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34656, 'Borisoglebsky Urban Okrug', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34657, 'Bondarskiy Rayon', 192, 2766)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34658, 'Bol’shesoldatskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34659, 'Bol’shesel’skiy Rayon', 192, 2757)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34660, 'Bol’shemurashkinskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34661, 'Bol’sheignatovskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34662, 'Bol’sheglushitskiy Rayon', 192, 2770)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34663, 'Bol’shechernigovskiy Rayon', 192, 2770)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34664, 'Bol’sheboldinskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34665, 'Bol’shebereznikovskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34666, 'Bologovskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34667, 'Bolkhovskiy Rayon', 192, 2776)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34668, 'Boksitogorskiy Rayon', 192, 2787)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34669, 'Bogucharskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34670, 'Bogorodskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34671, 'Bogorodskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34672, 'Bogatovskiy Rayon', 192, 2770)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34673, 'Bobrovskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34674, 'Blagoveshchenskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34675, 'Blagovarskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34676, 'Bizhbulyakskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34677, 'Birskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34678, 'Bezhetskiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34679, 'Bezhanitskiy Rayon', 192, 2773)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34680, 'Bezenchukskiy Rayon', 192, 2770)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34681, 'Bel’skiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34682, 'Belozërskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34683, 'Belovskiy Rayon', 192, 2789)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34684, 'Beloretskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34685, 'Belorechenskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34686, 'Belomorskiy Rayon', 192, 2794)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34687, 'Belokholunitskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34688, 'Belokatayskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34689, 'Belokalitvenskiy Rayon', 192, 2772)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34690, 'Beloglinskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34691, 'Belgorodskiy Rayon', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34692, 'Belebeyevskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34693, 'Bazarno-Karabulakskiy Rayon', 192, 2769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34694, 'Baymakskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34695, 'Bavlinskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34696, 'Batyrevskiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34697, 'Batetskiy Rayon', 192, 2778)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34698, 'Baryatinskiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34699, 'Baltayskiy Rayon', 192, 2769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34700, 'Baltasinskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34701, 'Balashikha Urban Okrug', 192, 2783)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34702, 'Balakhninskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34703, 'Baksanskiy Rayon', 192, 2799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34704, 'Bakalinskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34705, 'Bagrationovskiy Gorodskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34706, 'Babyninskiy Rayon', 192, 2796)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34707, 'Babushkinskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34708, 'Severo-Vostochnyy Administrativnyy Okrug', 192, 2782)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34709, 'Babayurtovskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34710, 'Babayevskiy Rayon', 192, 2759)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34711, 'Aznakayevskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34712, 'Aurgazinskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34713, 'Atyur’yevskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34714, 'Atyashevskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34715, 'Atkarskiy Rayon', 192, 2769)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34716, 'Askinskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34717, 'Ashinskiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34718, 'Arzamasskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34719, 'Arskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34720, 'Arsen’yevskiy Rayon', 192, 2764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34721, 'Arkhangel’skiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34722, 'Ardonskiy Rayon', 192, 2779)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34723, 'Ardatovskiy Rayon', 192, 2802)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34724, 'Ardatovskiy Rayon', 192, 2784)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34725, 'Arbazhskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34726, 'Apsheronskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34727, 'Apastovsky District', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34728, 'Antropovskiy Rayon', 192, 2791)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34729, 'Anninskiy Rayon', 192, 2758)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34730, 'Andreapol’skiy Rayon', 192, 2763)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34731, 'Anapskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34732, 'Al’sheyevskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34733, 'Almetyevsky District', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34734, 'Al’keyevskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34735, 'Alikovskiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34736, 'Aleksinskiy Rayon', 192, 2764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34737, 'Alekseyevskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34738, 'Alekseyevskiy Rayon', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34739, 'Alekseyevskiy Rayon', 192, 2760)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34740, 'Aleksandrovskiy Rayon', 192, 2812)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34741, 'Alatyrskiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34742, 'Alagirskiy Rayon', 192, 2779)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34743, 'Akushinskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34744, 'Aktanyshskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34745, 'Aksubayevskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34746, 'Akhvakhskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34747, 'Akhtynskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34748, 'Akhtubinskiy Rayon', 192, 2809)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34749, 'Agul’skiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34750, 'Agryzskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34751, 'Agapovskiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34752, 'Afanas’yevskiy Rayon', 192, 2793)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34753, 'Adyge-Khabl’skiy Rayon', 192, 2795)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34754, 'Achkhoy-Martanovskiy Rayon', 192, 2805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34755, 'Abzelilovskiy Rayon', 192, 2808)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34756, 'Abinskiy Rayon', 192, 2790)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34757, 'Arsen’yevskiy rayon', 192, 2764)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34758, 'Takhtamukayskiy Rayon', 192, 2811)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34759, 'Gorod Astrakhan’', 192, 2809)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34760, 'Gorod Alekseyevka', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34761, 'Grayvoronskiy Rayon', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34762, 'Krasnenskiy Rayon', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34763, 'Krasnoyaruzhskiy Rayon', 192, 2807)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34764, 'Gordeyevskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34765, 'Zhiryatinskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34766, 'Zlynkovskiy Rayon', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34767, 'Novozybkovskiy Gorodskoy Okrug', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34768, 'Gorodskoy Okrug Bryansk', 192, 2806)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34769, 'Gorod Zlatoust', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34770, 'Gorod Magnitogorsk', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34771, 'Gorod Ust’-Katav', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34772, 'Krasnochetayskiy Rayon', 192, 2804)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34773, 'Dokuzparinskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34774, 'Kumtorkalinskiy Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34775, 'Gorod Vichuga', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34776, 'Gorod Kineshma', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34777, 'Gorod Shuya', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34778, 'Gorod Ivanovo', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34779, 'Gorod Teykovo', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34780, 'Lezhnevskiy Rayon', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34781, 'El’brusskiy Rayon', 192, 2799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34782, 'Nalchik Urban Okrug', 192, 2799)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34783, 'Sovetskiy Gorodskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34784, 'Gorod Neman', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34785, 'Svetlogorskiy Gorodskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34786, 'Pionerskiy Gorodskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34787, 'Svetlovskiy Gorodskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34788, 'Kaliningradskiy Gorodskoy Okrug', 192, 2798)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34789, 'Gorodskoy Okrug Makhachkala', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34790, 'Gorod Furmanovo', 192, 2800)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34791, 'Bezhtinskiy Uchastok Rayon', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34792, 'Gorodskoy Okrug Buynaksk', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34793, 'Gorodskoy Okrug Derbent', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34794, 'Gorodskoy Okrug Dagestanskiye Ogni', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34795, 'Gorodskoy Okrug Izberbash', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34796, 'Gorod Kaspiysk', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34797, 'Gorodskoy Okrug Kizlyar', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34798, 'Gorod Yuzhno-Sukhokumsk', 192, 2803)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34799, 'Itum-Kalinskiy Rayon', 192, 2805)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34800, 'Gorod Kazan’', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34801, 'Atninskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34802, 'Kaybitsky District', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34803, 'Mendeleyevskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34804, 'Novosheshminskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34805, 'Tyulyachinskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34806, 'Yutazinskiy Rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34807, 'Gorod Al’met’yevsk', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34808, 'Gorod Aznakayevo', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34809, 'Gorod Bugul’ma', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34810, 'Gorod Yelabuga', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34811, 'Gorod Zainsk', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34812, 'Gorod Zelënodol’sk', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34813, 'Gorod Leninogorsk', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34814, 'Gorod Naberezhnyye Chelny', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34815, 'Gorod Nizhnekamsk', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34816, 'Gorod Chistopol’', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34817, 'Gorod Buinsk', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34818, 'Gorod Bavly', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34819, 'Nurlatskiy rayon', 192, 2765)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34820, 'Zonal’nyy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34821, 'Znamenskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34822, 'Zmeinogorskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34823, 'Zdvinskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34824, 'Zav’yalovskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34825, 'Zarinskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34826, 'Zalesovskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34827, 'Yurginskiy Rayon', 192, 2824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34828, 'Yurgamyshskiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34829, 'Yetkul’skiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34830, 'Yermakovskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34831, 'Yeniseyskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34832, 'Yemel’yanovskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34833, 'Yel’tsovskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34834, 'Yegor’yevskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34835, 'Yayskiy Rayon', 192, 2824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34836, 'Yashkinskiy Rayon', 192, 2824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34837, 'Yamal’skiy Rayon', 192, 2813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34838, 'Volchikhinskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34839, 'Verkhneketskiy Rayon', 192, 2816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34840, 'Vengerovskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34841, 'Varnenskiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34842, 'Vargashinskiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34843, 'Vagayskiy Rayon', 192, 2814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34844, 'Uzhurskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34845, 'Uyskiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34846, 'Uyarskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34847, 'Uvel’skiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34848, 'Ust’-Tarkskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34849, 'Ust’-Pristanskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34850, 'Ust’-Koksinskiy Rayon', 192, 2825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34851, 'Ust’-Kanskiy Rayon', 192, 2825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34852, 'Ust’-Kalmanskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34853, 'Ust’-Abakanskiy Rayon', 192, 2823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34854, 'Uporovskiy Rayon', 192, 2814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34855, 'Ulaganskiy Rayon', 192, 2825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34856, 'Uglovskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34857, 'Ubinskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34858, 'Tyumentsevskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34859, 'Tyukhtetskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34860, 'Tyukalinskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34861, 'Tyazhinskiy Rayon', 192, 2824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34862, 'Turukhanskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34863, 'Turochakskiy Rayon', 192, 2825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34864, 'Tselinnyy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34865, 'Tselinnyy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34866, 'Troitskiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34867, 'Troitskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34868, 'Tret’yakovskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34869, 'Topkinskiy Rayon', 192, 2824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34870, 'Topchikhinskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34871, 'Tomskiy Rayon', 192, 2816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34872, 'Togul’skiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34873, 'Toguchinskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34874, 'Tisul’skiy Rayon', 192, 2824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34875, 'Tevrizskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34876, 'Tegul’detskiy Rayon', 192, 2816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34877, 'Tazovskiy Rayon', 192, 2813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34878, 'Tayshetskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34879, 'Taymyrsky Dolgano-Nenetsky District', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34880, 'Tavricheskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34881, 'Tatarskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34882, 'Tashtypskiy Rayon', 192, 2823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34883, 'Tashtagol’skiy Rayon', 192, 2824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34884, 'Taseyevskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34885, 'Tarskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34886, 'Tal’menskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34887, 'Tabunskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34888, 'Sysertskiy Rayon', 192, 2817)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34889, 'Suzunskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34890, 'Sukholozhskiy Rayon', 192, 2817)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34891, 'Sukhobuzimskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34892, 'Sovetskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34893, 'Sosnovskiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34894, 'Soltonskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34895, 'Soloneshenskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34896, 'Smolenskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34897, 'Slavgorodskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34898, 'Sladkovskiy Rayon', 192, 2814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34899, 'Shushenskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34900, 'Shuryshkarskiy Rayon', 192, 2813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34901, 'Shumikhinskiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34902, 'Shirinskiy Rayon', 192, 2823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34903, 'Shipunovskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34904, 'Shebalinskiy Rayon', 192, 2825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34905, 'Shchuchanskiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34906, 'Shatrovskiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34907, 'Sharypovskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34908, 'Shadrinskiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34909, 'Severo-Yeniseyskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34910, 'Severnyy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34911, 'Sedel’nikovskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34912, 'Sayanskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34913, 'Sargatskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34914, 'Safakulevskiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34915, 'Rybinskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34916, 'Rubtsovskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34917, 'Romanovskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34918, 'Rodinskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34919, 'Rebrikhinskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34920, 'Purovskiy Rayon', 192, 2813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34921, 'Promyshlennovskiy Rayon', 192, 2824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34922, 'Prokop’yevskiy Rayon', 192, 2824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34923, 'Priural’skiy Rayon', 192, 2813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34924, 'Pritobol’nyy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34925, 'Pospelikhinskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34926, 'Polovinskiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34927, 'Pirovskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34928, 'Petukhovskiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34929, 'Petropavlovskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34930, 'Pervomayskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34931, 'Pavlovskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34932, 'Partizanskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34933, 'Pankrushikhinskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34934, 'Ovyurskiy Rayon', 192, 2815)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34935, 'Ordzhonikidzevskiy Rayon', 192, 2823)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34936, 'Ordynskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34937, 'Ongudayskiy Rayon', 192, 2825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34938, 'Omutinskiy Rayon', 192, 2814)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34939, 'Oktyabr’skiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34940, 'Okoneshnikovskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34941, 'Novosibirskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34942, 'Novosëlovskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34943, 'Novokuznetskiy Rayon', 192, 2824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34944, 'Novichikhinskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34945, 'Nizhneudinskiy Rayon', 192, 2831)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34946, 'Nizhneomskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34947, 'Nizhneingashskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34948, 'Nazarovskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34949, 'Nadymskiy Rayon', 192, 2813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34950, 'Muromtsevskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34951, 'Motyginskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34952, 'Moskalenskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34953, 'Moshkovskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34954, 'Molchanovskiy Rayon', 192, 2816)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34955, 'Mokrousovskiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34956, 'Mishkinskiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34957, 'Minusinskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34958, 'Mikhaylovskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34959, 'Mayminskiy Rayon', 192, 2825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34960, 'Maslyaninskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34961, 'Mar’yanovskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34962, 'Mariinskiy Rayon', 192, 2824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34963, 'Manskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34964, 'Mamontovskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34965, 'Makushinskiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34966, 'Lyubinskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34967, 'Loktevskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34968, 'Leninsk-Kuznetskiy Rayon', 192, 2824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34969, 'Lebyazh’yevskiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34970, 'Kytmanovskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34971, 'Kyshtovskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34972, 'Kuybyshevskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34973, 'Kurtamyshskiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34974, 'Kur’inskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34975, 'Kuraginskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34976, 'Kupinskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34977, 'Kunashakskiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34978, 'Kulundinskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34979, 'Krutinskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34980, 'Krutikhinskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34981, 'Krasnozerskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34982, 'Krasnoturanskiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34983, 'Krasnoshchekovskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34984, 'Krasnosel’kupskiy Rayon', 192, 2813)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34985, 'Krasnogorskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34986, 'Krasnoarmeyskiy Rayon', 192, 2826)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34987, 'Krapivinskiy Rayon', 192, 2824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34988, 'Kozul’skiy Rayon', 192, 2821)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34989, 'Kosikhinskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34990, 'Kosh-Agachskiy Rayon', 192, 2825)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34991, 'Kormilovskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34992, 'Kolyvanskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34993, 'Kolosovskiy Rayon', 192, 2818)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34994, 'Kochkovskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34995, 'Kochenevskiy Rayon', 192, 2819)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34996, 'Klyuchevskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34997, 'Khabarskiy Rayon', 192, 2827)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34998, 'Ketovskiy Rayon', 192, 2820)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (34999, 'Kemerovskiy Rayon', 192, 2824)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (35000, 'Kazanskiy Rayon', 192, 2814)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM subregions');
  }
}
