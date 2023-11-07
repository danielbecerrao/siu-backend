import type { MigrationInterface, QueryRunner } from 'typeorm';

export class Subregions21695875073042 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5001, 'Campo Florido', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5002, 'Campos Altos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5003, 'Campos Gerais', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5004, 'Canaã', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5005, 'Canápolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5006, 'Cana Verde', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5007, 'Cantagalo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5008, 'Caparaó', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5009, 'Capela Nova', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5010, 'Capelinha', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5011, 'Capetinga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5012, 'Capim Branco', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5013, 'Capinópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5014, 'Capitão Andrade', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5015, 'Capitão Enéas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5016, 'Capitólio', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5017, 'Caputira', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5018, 'Caraí', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5019, 'Caranaíba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5020, 'Carandaí', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5021, 'Carangola', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5022, 'Caratinga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5023, 'Carbonita', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5024, 'Careaçu', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5025, 'Carlos Chagas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5026, 'Carmésia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5027, 'Carmo da Cachoeira', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5028, 'Carmo da Mata', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5029, 'Carmo de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5030, 'Carmo do Cajuru', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5031, 'Carmo do Paranaíba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5032, 'Carmo do Rio Claro', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5033, 'Carmópolis de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5034, 'Carneirinho', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5035, 'Carrancas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5036, 'Carvalhópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5037, 'Carvalhos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5038, 'Casa Grande', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5039, 'Cascalho Rico', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5040, 'Cássia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5041, 'Conceição da Barra de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5042, 'Cataguases', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5043, 'Catas Altas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5044, 'Catas Altas da Noruega', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5045, 'Catuji', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5046, 'Catuti', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5047, 'Caxambu', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5048, 'Cedro do Abaeté', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5049, 'Central de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5050, 'Centralina', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5051, 'Chácara', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5052, 'Chalé', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5053, 'Chapada do Norte', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5054, 'Chapada Gaúcha', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5055, 'Chiador', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5056, 'Cipotânea', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5057, 'Claraval', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5058, 'Claro dos Poções', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5059, 'Cláudio', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5060, 'Coimbra', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5061, 'Coluna', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5062, 'Comendador Gomes', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5063, 'Comercinho', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5064, 'Conceição da Aparecida', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5065, 'Conceição das Pedras', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5066, 'Conceição das Alagoas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5067, 'Conceição de Ipanema', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5068, 'Conceição do Pará', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5069, 'Conceição do Rio Verde', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5070, 'Conceição dos Ouros', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5071, 'Cônego Marinho', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5072, 'Confins', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5073, 'Congonhal', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5074, 'Congonhas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5075, 'Congonhas do Norte', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5076, 'Conquista', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5077, 'Conselheiro Lafaiete', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5078, 'Conselheiro Pena', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5079, 'Contagem', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5080, 'Coqueiral', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5081, 'Coração de Jesus', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5082, 'Cordisburgo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5083, 'Cordislândia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5084, 'Corinto', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5085, 'Coroaci', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5086, 'Coromandel', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5087, 'Coronel Fabriciano', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5088, 'Coronel Murta', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5089, 'Coronel Pacheco', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5090, 'Coronel Xavier Chaves', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5091, 'Córrego Danta', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5092, 'Córrego do Bom Jesus', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5093, 'Córrego Fundo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5094, 'Córrego Novo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5095, 'Couto de Magalhães de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5096, 'Crisólita', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5097, 'Cristais', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5098, 'Cristália', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5099, 'Cristiano Otoni', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5100, 'Cristina', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5101, 'Crucilândia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5102, 'Cruzeiro da Fortaleza', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5103, 'Cruzília', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5104, 'Cuparaque', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5105, 'Curral de Dentro', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5106, 'Curvelo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5107, 'Datas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5108, 'Delfim Moreira', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5109, 'Delfinópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5110, 'Delta', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5111, 'Descoberto', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5112, 'Desterro de Entre Rios', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5113, 'Desterro do Melo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5114, 'Diogo de Vasconcelos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5115, 'Dionísio', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5116, 'Divinésia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5117, 'Divino', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5118, 'Divino das Laranjeiras', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5119, 'Divinolândia de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5120, 'Divinópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5121, 'Divisa Alegre', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5122, 'Divisa Nova', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5123, 'Divisópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5124, 'Dom Bosco', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5125, 'Dom Cavati', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5126, 'Dom Joaquim', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5127, 'Dom Silvério', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5128, 'Dom Viçoso', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5129, 'Dona Eusébia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5130, 'Dores de Campos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5131, 'Dores de Guanhães', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5132, 'Dores do Indaiá', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5133, 'Dores do Turvo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5134, 'Doresópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5135, 'Douradoquara', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5136, 'Durandé', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5137, 'Elói Mendes', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5138, 'Engenheiro Caldas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5139, 'Engenheiro Navarro', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5140, 'Entre Folhas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5141, 'Entre Rios de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5142, 'Ervália', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5143, 'Esmeraldas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5144, 'Espera Feliz', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5145, 'Espinosa', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5146, 'Espírito Santo do Dourado', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5147, 'Estiva', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5148, 'Estrela Dalva', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5149, 'Estrela do Indaiá', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5150, 'Estrela do Sul', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5151, 'Eugenópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5152, 'Ewbank da Câmara', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5153, 'Extrema', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5154, 'Fama', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5155, 'Faria Lemos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5156, 'Felício dos Santos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5157, 'São Gonçalo do Rio Preto', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5158, 'Felisburgo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5159, 'Felixlândia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5160, 'Fernandes Tourinho', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5161, 'Ferros', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5162, 'Fervedouro', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5163, 'Florestal', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5164, 'Formiga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5165, 'Formoso', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5166, 'Fortaleza de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5167, 'Fortuna de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5168, 'Francisco Badaró', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5169, 'Francisco Dumont', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5170, 'Francisco Sá', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5171, 'Franciscópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5172, 'Frei Gaspar', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5173, 'Frei Inocêncio', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5174, 'Frei Lagonegro', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5175, 'Fronteira', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5176, 'Fronteira dos Vales', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5177, 'Fruta de Leite', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5178, 'Frutal', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5179, 'Funilândia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5180, 'Galiléia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5181, 'Gameleiras', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5182, 'Glaucilândia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5183, 'Goiabeira', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5184, 'Goianá', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5185, 'Gonçalves', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5186, 'Gonzaga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5187, 'Governador Valadares', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5188, 'Grão Mogol', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5189, 'Grupiara', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5190, 'Guanhães', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5191, 'Guapé', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5192, 'Guaraciaba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5193, 'Guaraciama', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5194, 'Guaranésia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5195, 'Guarani', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5196, 'Guarará', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5197, 'Guarda-Mor', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5198, 'Guaxupé', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5199, 'Guiricema', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5200, 'Gurinhatã', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5201, 'Heliodora', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5202, 'Iapu', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5203, 'Ibertioga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5204, 'Ibiá', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5205, 'Ibiaí', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5206, 'Ibiracatu', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5207, 'Ibiraci', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5208, 'Ibirité', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5209, 'Ibitiúra de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5210, 'Ibituruna', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5211, 'Icaraí de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5212, 'Igarapé', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5213, 'Igaratinga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5214, 'Iguatama', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5215, 'Ijaci', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5216, 'Ilicínea', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5217, 'Imbé de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5218, 'Inconfidentes', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5219, 'Indaiabira', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5220, 'Indianópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5221, 'Ingaí', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5222, 'Inhapim', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5223, 'Inhaúma', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5224, 'Inimutaba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5225, 'Ipaba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5226, 'Ipatinga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5227, 'Ipiaçu', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5228, 'Ipuiúna', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5229, 'Iraí de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5230, 'Itabira', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5231, 'Itabirinha', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5232, 'Itabirito', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5233, 'Itacambira', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5234, 'Itacarambi', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5235, 'Itaguara', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5236, 'Itaipé', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5237, 'Itajubá', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5238, 'Itamarandiba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5239, 'Itamarati de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5240, 'Itambacuri', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5241, 'Itambé do Mato Dentro', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5242, 'Itamogi', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5243, 'Itamonte', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5244, 'Itanhandu', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5245, 'Itanhomi', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5246, 'Itaobim', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5247, 'Itapagipe', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5248, 'Itapecerica', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5249, 'Itapeva', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5250, 'Itatiaiuçu', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5251, 'Itaú de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5252, 'Itaúna', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5253, 'Itaverava', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5254, 'Itinga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5255, 'Itueta', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5256, 'Ituiutaba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5257, 'Itumirim', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5258, 'Iturama', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5259, 'Itutinga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5260, 'Jaboticatubas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5261, 'Jacinto', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5262, 'Jacuí', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5263, 'Jacutinga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5264, 'Jaguaraçu', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5265, 'Jaíba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5266, 'Jampruca', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5267, 'Janaúba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5268, 'Januária', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5269, 'Japaraíba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5270, 'Japonvar', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5271, 'Jeceaba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5272, 'Jenipapo de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5273, 'Jequeri', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5274, 'Jequitaí', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5275, 'Jequitibá', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5276, 'Jequitinhonha', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5277, 'Jesuânia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5278, 'Joaíma', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5279, 'Joanésia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5280, 'João Monlevade', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5281, 'João Pinheiro', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5282, 'Joaquim Felício', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5283, 'Jordânia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5284, 'José Gonçalves de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5285, 'José Raydan', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5286, 'Josenópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5287, 'Nova União', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5288, 'Juatuba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5289, 'Juramento', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5290, 'Juruaia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5291, 'Juvenília', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5292, 'Ladainha', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5293, 'Lagamar', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5294, 'Lagoa da Prata', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5295, 'Lagoa dos Patos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5296, 'Lagoa Dourada', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5297, 'Lagoa Formosa', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5298, 'Lagoa Grande', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5299, 'Lagoa Santa', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5300, 'Lajinha', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5301, 'Lambari', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5302, 'Lamim', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5303, 'Laranjal', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5304, 'Lassance', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5305, 'Lavras', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5306, 'Leandro Ferreira', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5307, 'Leme do Prado', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5308, 'Leopoldina', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5309, 'Liberdade', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5310, 'Lima Duarte', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5311, 'Limeira do Oeste', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5312, 'Lontra', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5313, 'Luisburgo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5314, 'Luislândia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5315, 'Luminárias', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5316, 'Luz', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5317, 'Machacalis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5318, 'Madre de Deus de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5319, 'Malacacheta', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5320, 'Mamonas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5321, 'Manga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5322, 'Manhuaçu', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5323, 'Manhumirim', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5324, 'Mantena', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5325, 'Maravilhas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5326, 'Maria da Fé', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5327, 'Mariana', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5328, 'Marilac', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5329, 'Mário Campos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5330, 'Maripá de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5331, 'Marliéria', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5332, 'Marmelópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5333, 'Martinho Campos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5334, 'Martins Soares', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5335, 'Mata Verde', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5336, 'Materlândia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5337, 'Mateus Leme', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5338, 'Matias Cardoso', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5339, 'Matipó', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5340, 'Mato Verde', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5341, 'Matozinhos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5342, 'Matutina', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5343, 'Medeiros', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5344, 'Medina', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5345, 'Mendes Pimentel', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5346, 'Mercês', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5347, 'Mesquita', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5348, 'Minas Novas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5349, 'Minduri', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5350, 'Mirabela', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5351, 'Miradouro', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5352, 'Miraí', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5353, 'Miravânia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5354, 'Moeda', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5355, 'Moema', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5356, 'Monjolos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5357, 'Monsenhor Paulo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5358, 'Montalvânia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5359, 'Monte Alegre de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5360, 'Monte Azul', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5361, 'Monte Belo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5362, 'Monte Carmelo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5363, 'Monte Formoso', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5364, 'Monte Santo de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5365, 'Montes Claros', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5366, 'Montezuma', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5367, 'Morada Nova de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5368, 'Morro da Garça', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5369, 'Morro do Pilar', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5370, 'Munhoz', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5371, 'Muriaé', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5372, 'Mutum', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5373, 'Muzambinho', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5374, 'Nacip Raydan', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5375, 'Nanuque', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5376, 'Naque', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5377, 'Natalândia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5378, 'Natércia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5379, 'Nazareno', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5380, 'Nepomuceno', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5381, 'Ninheira', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5382, 'Nova Belém', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5383, 'Nova Era', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5384, 'Nova Lima', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5385, 'Nova Módica', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5386, 'Nova Ponte', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5387, 'Nova Porteirinha', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5388, 'Nova Resende', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5389, 'Nova Serrana', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5390, 'Novo Cruzeiro', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5391, 'Novo Oriente de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5392, 'Novorizonte', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5393, 'Olaria', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5394, 'Olhos-d''Água', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5395, 'Olímpio Noronha', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5396, 'Oliveira', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5397, 'Oliveira Fortes', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5398, 'Onça de Pitangui', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5399, 'Oratórios', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5400, 'Orizânia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5401, 'Ouro Branco', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5402, 'Ouro Preto', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5403, 'Ouro Verde de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5404, 'Padre Carvalho', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5405, 'Padre Paraíso', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5406, 'Paineiras', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5407, 'Pains', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5408, 'Pai Pedro', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5409, 'Paiva', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5410, 'Palma', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5411, 'Palmópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5412, 'Papagaios', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5413, 'Paracatu', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5414, 'Pará de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5415, 'Paraguaçu', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5416, 'Paraisópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5417, 'Paraopeba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5418, 'Passabém', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5419, 'Passa Quatro', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5420, 'Passa Tempo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5421, 'Passa-Vinte', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5422, 'Passos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5423, 'Patis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5424, 'Patos de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5425, 'Patrocínio', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5426, 'Paula Cândido', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5427, 'Paulistas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5428, 'Pavão', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5429, 'Peçanha', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5430, 'Pedra Azul', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5431, 'Pedra Bonita', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5432, 'Pedra do Anta', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5433, 'Pedra do Indaiá', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5434, 'Pedra Dourada', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5435, 'Pedralva', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5436, 'Pedras de Maria da Cruz', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5437, 'Pedrinópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5438, 'Pedro Leopoldo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5439, 'Pedro Teixeira', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5440, 'Pequeri', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5441, 'Pequi', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5442, 'Perdigão', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5443, 'Perdizes', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5444, 'Perdões', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5445, 'Periquito', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5446, 'Pescador', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5447, 'Piau', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5448, 'Piedade de Caratinga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5449, 'Piedade de Ponte Nova', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5450, 'Piedade do Rio Grande', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5451, 'Piedade dos Gerais', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5452, 'Pimenta', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5453, 'Pingo-d''Água', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5454, 'Pintópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5455, 'Piracema', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5456, 'Pirajuba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5457, 'Piranga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5458, 'Piranguçu', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5459, 'Piranguinho', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5460, 'Pirapetinga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5461, 'Pirapora', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5462, 'Piraúba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5463, 'Pitangui', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5464, 'Piumhi', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5465, 'Planura', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5466, 'Poço Fundo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5467, 'Poços de Caldas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5468, 'Pocrane', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5469, 'Pompéu', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5470, 'Ponte Nova', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5471, 'Ponto Chique', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5472, 'Ponto dos Volantes', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5473, 'Porteirinha', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5474, 'Porto Firme', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5475, 'Poté', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5476, 'Pouso Alegre', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5477, 'Pouso Alto', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5478, 'Prados', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5479, 'Pratápolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5480, 'Pratinha', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5481, 'Presidente Bernardes', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5482, 'Presidente Juscelino', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5483, 'Presidente Kubitschek', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5484, 'Presidente Olegário', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5485, 'Alto Jequitibá', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5486, 'Prudente de Morais', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5487, 'Quartel Geral', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5488, 'Queluzito', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5489, 'Raposos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5490, 'Raul Soares', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5491, 'Recreio', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5492, 'Reduto', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5493, 'Resende Costa', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5494, 'Resplendor', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5495, 'Ressaquinha', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5496, 'Riachinho', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5497, 'Riacho dos Machados', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5498, 'Ribeirão das Neves', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5499, 'Ribeirão Vermelho', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5500, 'Rio Acima', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5501, 'Rio Casca', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5502, 'Rio Doce', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5503, 'Rio do Prado', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5504, 'Rio Espera', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5505, 'Rio Manso', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5506, 'Rio Novo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5507, 'Rio Paranaíba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5508, 'Rio Pardo de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5509, 'Rio Piracicaba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5510, 'Rio Pomba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5511, 'Rio Preto', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5512, 'Rio Vermelho', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5513, 'Ritápolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5514, 'Rochedo de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5515, 'Rodeiro', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5516, 'Romaria', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5517, 'Rosário da Limeira', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5518, 'Rubelita', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5519, 'Rubim', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5520, 'Sabará', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5521, 'Sabinópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5522, 'Sacramento', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5523, 'Salinas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5524, 'Salto da Divisa', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5525, 'Santa Bárbara', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5526, 'Santa Bárbara do Leste', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5527, 'Santa Bárbara do Monte Verde', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5528, 'Santa Cruz de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5529, 'Santa Cruz de Salinas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5530, 'Santa Cruz do Escalvado', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5531, 'Santa Efigênia de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5532, 'Santa Fé de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5533, 'Santa Helena de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5534, 'Santa Juliana', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5535, 'Santa Luzia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5536, 'Santa Margarida', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5537, 'Santa Maria de Itabira', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5538, 'Santa Maria do Salto', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5539, 'Santa Maria do Suaçuí', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5540, 'Santana da Vargem', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5541, 'Santana de Cataguases', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5542, 'Santana de Pirapama', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5543, 'Santana do Deserto', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5544, 'Santana do Garambéu', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5545, 'Santana do Jacaré', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5546, 'Santana do Manhuaçu', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5547, 'Santana do Paraíso', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5548, 'Santana do Riacho', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5549, 'Santana dos Montes', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5550, 'Santa Rita de Caldas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5551, 'Santa Rita de Jacutinga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5552, 'Santa Rita de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5553, 'Santa Rita de Ibitipoca', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5554, 'Santa Rita do Itueto', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5555, 'Santa Rita do Sapucaí', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5556, 'Santa Rosa da Serra', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5557, 'Santa Vitória', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5558, 'Santo Antônio do Amparo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5559, 'Santo Antônio do Aventureiro', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5560, 'Santo Antônio do Grama', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5561, 'Santo Antônio do Itambé', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5562, 'Santo Antônio do Jacinto', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5563, 'Santo Antônio do Monte', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5564, 'Santo Antônio do Retiro', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5565, 'Santo Antônio do Rio Abaixo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5566, 'Santo Hipólito', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5567, 'Santos Dumont', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5568, 'São Bento Abade', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5569, 'São Domingos das Dores', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5570, 'São Domingos do Prata', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5571, 'São Félix de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5572, 'São Francisco de Sales', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5573, 'São Francisco do Glória', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5574, 'São Geraldo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5575, 'São Geraldo da Piedade', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5576, 'São Geraldo do Baixio', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5577, 'São Gonçalo do Abaeté', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5578, 'São Gonçalo do Pará', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5579, 'São Gonçalo do Rio Abaixo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5580, 'São Gonçalo do Sapucaí', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5581, 'São Gotardo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5582, 'São João Batista do Glória', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5583, 'São João da Lagoa', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5584, 'São João da Mata', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5585, 'São João da Ponte', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5586, 'São João das Missões', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5587, 'São João del Rei', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5588, 'São João do Manhuaçu', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5589, 'São João do Manteninha', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5590, 'São João do Oriente', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5591, 'São João do Pacuí', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5592, 'São João do Paraíso', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5593, 'São João Evangelista', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5594, 'São João Nepomuceno', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5595, 'São Joaquim de Bicas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5596, 'São José da Barra', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5597, 'São José da Lapa', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5598, 'São José da Safira', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5599, 'São José da Varginha', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5600, 'São José do Alegre', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5601, 'São José do Divino', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5602, 'São José do Goiabal', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5603, 'São José do Jacuri', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5604, 'São José do Mantimento', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5605, 'São Lourenço', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5606, 'São Miguel do Anta', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5607, 'São Pedro da União', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5608, 'São Pedro dos Ferros', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5609, 'São Pedro do Suaçuí', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5610, 'São Romão', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5611, 'São Roque de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5612, 'São Sebastião da Bela Vista', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5613, 'São Sebastião da Vargem Alegre', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5614, 'São Sebastião do Anta', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5615, 'São Sebastião do Maranhão', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5616, 'São Sebastião do Oeste', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5617, 'São Sebastião do Paraíso', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5618, 'São Sebastião do Rio Preto', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5619, 'São Sebastião do Rio Verde', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5620, 'São Tiago', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5621, 'São Tomás de Aquino', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5622, 'São Thomé das Letras', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5623, 'São Vicente de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5624, 'Sapucaí-Mirim', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5625, 'Sardoá', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5626, 'Sarzedo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5627, 'Setubinha', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5628, 'Sem-Peixe', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5629, 'Senador Amaral', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5630, 'Senador Cortes', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5631, 'Senador Firmino', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5632, 'Senador José Bento', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5633, 'Senador Modestino Gonçalves', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5634, 'Senhora de Oliveira', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5635, 'Senhora do Porto', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5636, 'Senhora dos Remédios', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5637, 'Sericita', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5638, 'Seritinga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5639, 'Serra Azul de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5640, 'Serra da Saudade', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5641, 'Serra dos Aimorés', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5642, 'Serra do Salitre', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5643, 'Serrania', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5644, 'Serranópolis de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5645, 'Serranos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5646, 'Serro', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5647, 'Sete Lagoas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5648, 'Silveirânia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5649, 'Silvianópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5650, 'Simão Pereira', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5651, 'Simonésia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5652, 'Sobrália', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5653, 'Soledade de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5654, 'Tabuleiro', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5655, 'Taiobeiras', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5656, 'Taparuba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5657, 'Tapira', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5658, 'Tapiraí', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5659, 'Taquaraçu de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5660, 'Tarumirim', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5661, 'Teixeiras', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5662, 'Teófilo Otoni', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5663, 'Timóteo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5664, 'Tiradentes', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5665, 'Tiros', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5666, 'Tocantins', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5667, 'Tocos do Moji', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5668, 'Toledo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5669, 'Tombos', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5670, 'Três Corações', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5671, 'Três Marias', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5672, 'Três Pontas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5673, 'Tumiritinga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5674, 'Tupaciguara', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5675, 'Turmalina', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5676, 'Turvolândia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5677, 'Ubá', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5678, 'Ubaí', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5679, 'Ubaporanga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5680, 'Uberaba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5681, 'Uberlândia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5682, 'Umburatiba', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5683, 'Unaí', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5684, 'União de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5685, 'Uruana de Minas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5686, 'Urucânia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5687, 'Urucuia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5688, 'Vargem Alegre', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5689, 'Vargem Bonita', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5690, 'Vargem Grande do Rio Pardo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5691, 'Varginha', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5692, 'Varjão de MInas', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5693, 'Várzea da Palma', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5694, 'Varzelândia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5695, 'Vazante', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5696, 'Verdelândia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5697, 'Veredinha', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5698, 'Veríssimo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5699, 'Vermelho Novo', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5700, 'Vespasiano', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5701, 'Viçosa', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5702, 'Vieiras', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5703, 'Mathias Lobato', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5704, 'Virgem da Lapa', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5705, 'Virgínia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5706, 'Virginópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5707, 'Virgolândia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5708, 'Visconde do Rio Branco', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5709, 'Volta Grande', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5710, 'Wenceslau Braz', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5711, 'Afonso Cláudio', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5712, 'Águia Branca', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5713, 'Água Doce do Norte', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5714, 'Alfredo Chaves', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5715, 'Alto Rio Novo', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5716, 'Anchieta', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5717, 'Apiacá', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5718, 'Aracruz', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5719, 'Atílio Vivacqua', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5720, 'Baixo Guandu', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5721, 'Barra de São Francisco', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5722, 'Boa Esperança', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5723, 'Bom Jesus do Norte', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5724, 'Brejetuba', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5725, 'Cachoeiro de Itapemirim', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5726, 'Cariacica', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5727, 'Castelo', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5728, 'Conceição da Barra', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5729, 'Conceição do Castelo', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5730, 'Divino de São Lourenço', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5731, 'Domingos Martins', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5732, 'Dores do Rio Preto', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5733, 'Ecoporanga', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5734, 'Fundão', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5735, 'Guaçuí', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5736, 'Guarapari', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5737, 'Ibatiba', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5738, 'Ibiraçu', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5739, 'Ibitirama', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5740, 'Iconha', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5741, 'Irupi', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5742, 'Itaguaçu', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5743, 'Itapemirim', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5744, 'Itarana', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5745, 'Iúna', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5746, 'Jaguaré', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5747, 'Jerônimo Monteiro', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5748, 'João Neiva', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5749, 'Laranja da Terra', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5750, 'Linhares', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5751, 'Mantenópolis', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5752, 'Marataízes', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5753, 'Marechal Floriano', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5754, 'Marilândia', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5755, 'Mimoso do Sul', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5756, 'Montanha', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5757, 'Mucurici', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5758, 'Muniz Freire', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5759, 'Muqui', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5760, 'Nova Venécia', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5761, 'Pancas', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5762, 'Pedro Canário', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5763, 'Pinheiros', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5764, 'Piúma', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5765, 'Ponto Belo', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5766, 'Presidente Kennedy', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5767, 'Rio Bananal', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5768, 'Rio Novo do Sul', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5769, 'Santa Teresa', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5770, 'São Domingos do Norte', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5771, 'São Gabriel da Palha', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5772, 'São Mateus', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5773, 'São Roque do Canaã', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5774, 'Serra', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5775, 'Sooretama', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5776, 'Vargem Alta', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5777, 'Venda Nova do Imigrante', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5778, 'Viana', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5779, 'Vila Pavão', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5780, 'Vila Valério', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5781, 'Vila Velha', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5782, 'Vitória', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5783, 'Angra dos Reis', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5784, 'Aperibé', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5785, 'Araruama', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5786, 'Arraial do Cabo', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5787, 'Barra do Piraí', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5788, 'Barra Mansa', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5789, 'Belford Roxo', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5790, 'Bom Jardim', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5791, 'Bom Jesus do Itabapoana', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5792, 'Cabo Frio', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5793, 'Cachoeiras de Macacu', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5794, 'Cambuci', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5795, 'Carapebus', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5796, 'Comendador Levy Gasparian', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5797, 'Campos dos Goytacazes', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5798, 'Cardoso Moreira', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5799, 'Casimiro de Abreu', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5800, 'Cordeiro', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5801, 'Duque de Caxias', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5802, 'Engenheiro Paulo de Frontin', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5803, 'Guapimirim', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5804, 'Iguaba Grande', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5805, 'Itaboraí', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5806, 'Itaguaí', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5807, 'Italva', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5808, 'Itaocara', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5809, 'Itaperuna', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5810, 'Itatiaia', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5811, 'Japeri', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5812, 'Laje do Muriaé', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5813, 'Macaé', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5814, 'Macuco', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5815, 'Magé', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5816, 'Mangaratiba', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5817, 'Maricá', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5818, 'Mendes', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5819, 'Miguel Pereira', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5820, 'Miracema', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5821, 'Natividade', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5822, 'Nilópolis', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5823, 'Niterói', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5824, 'Nova Friburgo', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5825, 'Paracambi', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5826, 'Paraíba do Sul', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5827, 'Paraty', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5828, 'Paty do Alferes', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5829, 'Petrópolis', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5830, 'Pinheiral', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5831, 'Piraí', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5832, 'Porciúncula', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5833, 'Porto Real', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5834, 'Quatis', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5835, 'Queimados', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5836, 'Quissamã', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5837, 'Resende', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5838, 'Rio Bonito', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5839, 'Rio Claro', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5840, 'Rio das Flores', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5841, 'Rio das Ostras', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5842, 'Rio de Janeiro', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5843, 'Santa Maria Madalena', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5844, 'Santo Antônio de Pádua', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5845, 'São Francisco de Itabapoana', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5846, 'São Fidélis', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5847, 'São Gonçalo', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5848, 'São João da Barra', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5849, 'São João de Meriti', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5850, 'São José de Ubá', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5851, 'São José do Vale do Rio Preto', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5852, 'São Pedro da Aldeia', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5853, 'São Sebastião do Alto', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5854, 'Sapucaia', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5855, 'Saquarema', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5856, 'Seropédica', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5857, 'Silva Jardim', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5858, 'Sumidouro', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5859, 'Tanguá', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5860, 'Teresópolis', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5861, 'Trajano de Moraes', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5862, 'Três Rios', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5863, 'Valença', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5864, 'Varre-Sai', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5865, 'Vassouras', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5866, 'Volta Redonda', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5867, 'Adolfo', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5868, 'Águas de Lindóia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5869, 'Águas de Santa Bárbara', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5870, 'Alambari', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5871, 'Altair', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5872, 'Alumínio', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5873, 'Alvinlândia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5874, 'Américo Brasiliense', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5875, 'Andradina', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5876, 'Angatuba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5877, 'Anhembi', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5878, 'Aparecida', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5879, 'Aparecida d''Oeste', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5880, 'Apiaí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5881, 'Araçariguama', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5882, 'Araçatuba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5883, 'Araçoiaba da Serra', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5884, 'Aramina', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5885, 'Arandu', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5886, 'Arapeí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5887, 'Araraquara', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5888, 'Araras', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5889, 'Arco-Íris', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5890, 'Areias', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5891, 'Areiópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5892, 'Ariranha', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5893, 'Artur Nogueira', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5894, 'Arujá', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5895, 'Aspásia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5896, 'Atibaia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5897, 'Auriflama', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5898, 'Avaí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5899, 'Avanhandava', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5900, 'Avaré', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5901, 'Bady Bassitt', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5902, 'Balbinos', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5903, 'Bálsamo', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5904, 'Bananal', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5905, 'Barão de Antonina', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5906, 'Bariri', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5907, 'Barra Bonita', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5908, 'Barra do Chapéu', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5909, 'Barra do Turvo', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5910, 'Barretos', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5911, 'Barrinha', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5912, 'Barueri', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5913, 'Bastos', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5914, 'Batatais', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5915, 'Bauru', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5916, 'Bebedouro', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5917, 'Bento de Abreu', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5918, 'Bernardino de Campos', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5919, 'Bertioga', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5920, 'Bilac', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5921, 'Birigui', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5922, 'Biritiba-Mirim', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5923, 'Boa Esperança do Sul', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5924, 'Bocaina', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5925, 'Bofete', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5926, 'Boituva', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5927, 'Bom Jesus dos Perdões', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5928, 'Bom Sucesso de Itararé', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5929, 'Borá', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5930, 'Boracéia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5931, 'Borborema', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5932, 'Borebi', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5933, 'Botucatu', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5934, 'Bragança Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5935, 'Braúna', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5936, 'Brejo Alegre', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5937, 'Brodowski', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5938, 'Brotas', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5939, 'Buri', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5940, 'Buritama', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5941, 'Buritizal', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5942, 'Cabrália Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5943, 'Cabreúva', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5944, 'Caçapava', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5945, 'Cachoeira Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5946, 'Caconde', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5947, 'Cafelândia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5948, 'Caiabu', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5949, 'Caieiras', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5950, 'Caiuá', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5951, 'Cajamar', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5952, 'Cajati', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5953, 'Cajobi', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5954, 'Cajuru', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5955, 'Campina do Monte Alegre', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5956, 'Campos do Jordão', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5957, 'Campos Novos Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5958, 'Cananéia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5959, 'Canas', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5960, 'Cândido Mota', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5961, 'Cândido Rodrigues', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5962, 'Canitar', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5963, 'Capão Bonito', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5964, 'Capela do Alto', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5965, 'Capivari', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5966, 'Caraguatatuba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5967, 'Carapicuíba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5968, 'Cardoso', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5969, 'Casa Branca', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5970, 'Cássia dos Coqueiros', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5971, 'Castilho', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5972, 'Catanduva', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5973, 'Catiguá', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5974, 'Cedral', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5975, 'Cerqueira César', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5976, 'Cerquilho', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5977, 'Cesário Lange', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5978, 'Clementina', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5979, 'Colina', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5980, 'Colômbia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5981, 'Conchal', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5982, 'Conchas', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5983, 'Cordeirópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5984, 'Coronel Macedo', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5985, 'Cosmópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5986, 'Cotia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5987, 'Cravinhos', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5988, 'Cristais Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5989, 'Cruzália', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5990, 'Cruzeiro', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5991, 'Cubatão', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5992, 'Cunha', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5993, 'Descalvado', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5994, 'Diadema', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5995, 'Dirce Reis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5996, 'Dobrada', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5997, 'Dois Córregos', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5998, 'Dolcinópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (5999, 'Dourado', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6000, 'Dracena', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6001, 'Duartina', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6002, 'Dumont', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6003, 'Echaporã', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6004, 'Eldorado', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6005, 'Elias Fausto', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6006, 'Elisiário', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6007, 'Embaúba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6008, 'Embu das Artes', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6009, 'Embu-Guaçu', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6010, 'Emilianópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6011, 'Engenheiro Coelho', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6012, 'Espírito Santo do Pinhal', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6013, 'Espírito Santo do Turvo', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6014, 'Estrela d''Oeste', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6015, 'Estrela do Norte', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6016, 'Euclides da Cunha Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6017, 'Fartura', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6018, 'Fernandópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6019, 'Fernando Prestes', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6020, 'Fernão', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6021, 'Ferraz de Vasconcelos', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6022, 'Flora Rica', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6023, 'Floreal', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6024, 'Flórida Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6025, 'Florínea', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6026, 'Francisco Morato', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6027, 'Franco da Rocha', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6028, 'Gabriel Monteiro', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6029, 'Gália', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6030, 'Gastão Vidigal', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6031, 'Gavião Peixoto', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6032, 'General Salgado', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6033, 'Getulina', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6034, 'Glicério', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6035, 'Guaiçara', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6036, 'Guaimbê', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6037, 'Guaíra', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6038, 'Guapiaçu', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6039, 'Guapiara', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6040, 'Guará', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6041, 'Guaraci', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6042, 'Guarani d''Oeste', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6043, 'Guarantã', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6044, 'Guararapes', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6045, 'Guararema', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6046, 'Guaratinguetá', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6047, 'Guareí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6048, 'Guariba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6049, 'Guarujá', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6050, 'Guarulhos', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6051, 'Guatapará', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6052, 'Guzolândia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6053, 'Herculândia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6054, 'Holambra', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6055, 'Hortolândia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6056, 'Iacri', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6057, 'Iaras', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6058, 'Ibaté', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6059, 'Ibirá', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6060, 'Ibirarema', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6061, 'Ibitinga', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6062, 'Ibiúna', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6063, 'Icém', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6064, 'Iepê', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6065, 'Igaraçu do Tietê', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6066, 'Igaratá', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6067, 'Iguape', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6068, 'Ilhabela', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6069, 'Ilha Comprida', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6070, 'Ilha Solteira', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6071, 'Indaiatuba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6072, 'Indiana', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6073, 'Indiaporã', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6074, 'Inúbia Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6075, 'Ipaussu', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6076, 'Iperó', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6077, 'Ipeúna', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6078, 'Ipiguá', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6079, 'Ipuã', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6080, 'Iracemápolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6081, 'Irapuã', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6082, 'Irapuru', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6083, 'Itaberá', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6084, 'Itaí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6085, 'Itajobi', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6086, 'Itaju', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6087, 'Itanhaém', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6088, 'Itaoca', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6089, 'Itapecerica da Serra', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6090, 'Itapetininga', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6091, 'Itapeva', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6092, 'Itapevi', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6093, 'Itapirapuã Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6094, 'Itápolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6095, 'Itaporanga', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6096, 'Itapuí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6097, 'Itapura', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6098, 'Itaquaquecetuba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6099, 'Itararé', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6100, 'Itariri', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6101, 'Itatiba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6102, 'Itatinga', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6103, 'Itirapina', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6104, 'Itobi', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6105, 'Itu', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6106, 'Itupeva', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6107, 'Ituverava', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6108, 'Jaborandi', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6109, 'Jaboticabal', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6110, 'Jacareí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6111, 'Jaci', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6112, 'Jacupiranga', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6113, 'Jaguariúna', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6114, 'Jales', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6115, 'Jambeiro', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6116, 'Jandira', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6117, 'Jaú', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6118, 'Jeriquara', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6119, 'Joanópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6120, 'João Ramalho', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6121, 'Júlio Mesquita', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6122, 'Jumirim', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6123, 'Jundiaí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6124, 'Junqueirópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6125, 'Juquiá', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6126, 'Juquitiba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6127, 'Lagoinha', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6128, 'Laranjal Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6129, 'Lavínia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6130, 'Lavrinhas', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6131, 'Leme', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6132, 'Lençóis Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6133, 'Limeira', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6134, 'Lins', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6135, 'Lorena', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6136, 'Lourdes', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6137, 'Louveira', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6138, 'Lucianópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6139, 'Luiziânia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6140, 'Macatuba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6141, 'Macaubal', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6142, 'Macedônia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6143, 'Magda', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6144, 'Mairinque', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6145, 'Mairiporã', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6146, 'Manduri', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6147, 'Marabá Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6148, 'Maracaí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6149, 'Marapoama', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6150, 'Mariápolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6151, 'Marília', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6152, 'Marinópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6153, 'Martinópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6154, 'Matão', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6155, 'Mauá', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6156, 'Mendonça', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6157, 'Meridiano', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6158, 'Mesópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6159, 'Miguelópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6160, 'Mineiros do Tietê', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6161, 'Miracatu', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6162, 'Mira Estrela', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6163, 'Mirandópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6164, 'Mirante do Paranapanema', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6165, 'Mirassol', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6166, 'Mirassolândia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6167, 'Mococa', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6168, 'Mogi das Cruzes', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6169, 'Mogi Mirim', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6170, 'Mombuca', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6171, 'Monções', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6172, 'Mongaguá', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6173, 'Monte Alegre do Sul', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6174, 'Monte Alto', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6175, 'Monte Aprazível', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6176, 'Monte Azul Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6177, 'Monte Castelo', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6178, 'Monteiro Lobato', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6179, 'Monte Mor', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6180, 'Morro Agudo', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6181, 'Morungaba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6182, 'Motuca', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6183, 'Murutinga do Sul', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6184, 'Nantes', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6185, 'Narandiba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6186, 'Natividade da Serra', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6187, 'Nazaré Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6188, 'Neves Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6189, 'Nhandeara', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6190, 'Nipoã', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6191, 'Nova Aliança', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6192, 'Nova Campina', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6193, 'Nova Europa', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6194, 'Nova Granada', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6195, 'Nova Guataporanga', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6196, 'Nova Independência', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6197, 'Novais', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6198, 'Nova Luzitânia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6199, 'Novo Horizonte', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6200, 'Nuporanga', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6201, 'Ocauçu', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6202, 'Óleo', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6203, 'Olímpia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6204, 'Onda Verde', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6205, 'Oriente', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6206, 'Orindiúva', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6207, 'Orlândia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6208, 'Osasco', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6209, 'Oscar Bressane', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6210, 'Osvaldo Cruz', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6211, 'Ourinhos', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6212, 'Ouroeste', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6213, 'Ouro Verde', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6214, 'Pacaembu', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6215, 'Palestina', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6216, 'Palmares Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6217, 'Palmeira d''Oeste', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6218, 'Palmital', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6219, 'Panorama', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6220, 'Paraguaçu Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6221, 'Paraibuna', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6222, 'Paraíso', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6223, 'Paranapanema', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6224, 'Paranapuã', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6225, 'Parapuã', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6226, 'Pardinho', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6227, 'Pariquera-Açu', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6228, 'Parisi', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6229, 'Paulicéia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6230, 'Paulínia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6231, 'Paulo de Faria', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6232, 'Pederneiras', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6233, 'Pedra Bela', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6234, 'Pedranópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6235, 'Pedregulho', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6236, 'Pedrinhas Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6237, 'Pedro de Toledo', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6238, 'Pereira Barreto', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6239, 'Pereiras', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6240, 'Peruíbe', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6241, 'Piacatu', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6242, 'Piedade', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6243, 'Pilar do Sul', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6244, 'Pindamonhangaba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6245, 'Pindorama', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6246, 'Pinhalzinho', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6247, 'Piquerobi', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6248, 'Piquete', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6249, 'Piracaia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6250, 'Piraju', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6251, 'Pirajuí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6252, 'Pirangi', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6253, 'Pirapora do Bom Jesus', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6254, 'Pirassununga', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6255, 'Pitangueiras', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6256, 'Planalto', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6257, 'Platina', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6258, 'Poá', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6259, 'Poloni', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6260, 'Pompéia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6261, 'Pongaí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6262, 'Pontal', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6263, 'Pontalinda', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6264, 'Populina', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6265, 'Porangaba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6266, 'Porto Feliz', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6267, 'Porto Ferreira', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6268, 'Potim', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6269, 'Potirendaba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6270, 'Pracinha', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6271, 'Pradópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6272, 'Pratânia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6273, 'Presidente Alves', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6274, 'Presidente Epitácio', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6275, 'Presidente Venceslau', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6276, 'Promissão', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6277, 'Quadra', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6278, 'Quatá', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6279, 'Queiroz', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6280, 'Queluz', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6281, 'Quintana', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6282, 'Rafard', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6283, 'Rancharia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6284, 'Redenção da Serra', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6285, 'Regente Feijó', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6286, 'Reginópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6287, 'Registro', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6288, 'Restinga', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6289, 'Ribeira', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6290, 'Ribeirão Bonito', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6291, 'Ribeirão Branco', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6292, 'Ribeirão Corrente', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6293, 'Ribeirão do Sul', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6294, 'Ribeirão dos Índios', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6295, 'Ribeirão Grande', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6296, 'Ribeirão Pires', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6297, 'Ribeirão Preto', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6298, 'Riversul', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6299, 'Rifaina', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6300, 'Rincão', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6301, 'Rinópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6302, 'Rio Claro', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6303, 'Rio das Pedras', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6304, 'Rio Grande da Serra', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6305, 'Rosana', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6306, 'Roseira', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6307, 'Rubiácea', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6308, 'Rubinéia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6309, 'Sabino', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6310, 'Sagres', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6311, 'Sales Oliveira', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6312, 'Salesópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6313, 'Salmourão', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6314, 'Salto', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6315, 'Salto de Pirapora', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6316, 'Salto Grande', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6317, 'Sandovalina', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6318, 'Santa Adélia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6319, 'Santa Albertina', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6320, 'Santa Bárbara d''Oeste', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6321, 'Santa Branca', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6322, 'Santa Clara d''Oeste', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6323, 'Santa Cruz da Esperança', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6324, 'Santa Cruz das Palmeiras', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6325, 'Santa Cruz do Rio Pardo', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6326, 'Santa Ernestina', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6327, 'Santa Fé do Sul', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6328, 'Santa Gertrudes', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6329, 'Santa Isabel', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6330, 'Santa Lúcia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6331, 'Santa Maria da Serra', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6332, 'Santa Mercedes', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6333, 'Santana da Ponte Pensa', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6334, 'Santana de Parnaíba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6335, 'Santa Rita d''Oeste', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6336, 'Santa Rita do Passa Quatro', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6337, 'Santa Rosa de Viterbo', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6338, 'Santa Salete', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6339, 'Santo Anastácio', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6340, 'Santo André', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6341, 'Santo Antônio da Alegria', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6342, 'Santo Antônio de Posse', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6343, 'Santo Antônio do Aracanguá', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6344, 'Santo Antônio do Jardim', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6345, 'Santo Antônio do Pinhal', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6346, 'Santo Expedito', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6347, 'Santópolis do Aguapeí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6348, 'Santos', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6349, 'São Bento do Sapucaí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6350, 'São Caetano do Sul', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6351, 'São Carlos', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6352, 'São João das Duas Pontes', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6353, 'São João de Iracema', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6354, 'São João do Pau d''Alho', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6355, 'São Joaquim da Barra', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6356, 'São José da Bela Vista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6357, 'São José do Barreiro', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6358, 'São José do Rio Pardo', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6359, 'São José do Rio Preto', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6360, 'São José dos Campos', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6361, 'São Lourenço da Serra', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6362, 'São Luiz do Paraitinga', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6363, 'São Manuel', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6364, 'São Miguel Arcanjo', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6365, 'São Pedro do Turvo', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6366, 'São Roque', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6367, 'São Sebastião', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6368, 'São Sebastião da Grama', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6369, 'São Simão', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6370, 'Sarapuí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6371, 'Sarutaiá', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6372, 'Sebastianópolis do Sul', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6373, 'Serra Azul', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6374, 'Serrana', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6375, 'Serra Negra', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6376, 'Sete Barras', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6377, 'Severínia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6378, 'Silveiras', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6379, 'Socorro', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6380, 'Sorocaba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6381, 'Sud Mennucci', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6382, 'Sumaré', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6383, 'Suzano', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6384, 'Suzanápolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6385, 'Tabapuã', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6386, 'Tabatinga', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6387, 'Taboão da Serra', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6388, 'Taciba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6389, 'Taguaí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6390, 'Taiaçu', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6391, 'Taiúva', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6392, 'Tambaú', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6393, 'Tanabi', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6394, 'Tapiraí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6395, 'Tapiratiba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6396, 'Taquaral', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6397, 'Taquaritinga', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6398, 'Taquarituba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6399, 'Taquarivaí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6400, 'Tarabai', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6401, 'Tarumã', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6402, 'Tatuí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6403, 'Taubaté', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6404, 'Teodoro Sampaio', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6405, 'Terra Roxa', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6406, 'Tietê', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6407, 'Timburi', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6408, 'Torre de Pedra', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6409, 'Torrinha', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6410, 'Trabiju', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6411, 'Tremembé', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6412, 'Três Fronteiras', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6413, 'Tuiuti', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6414, 'Tupã', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6415, 'Tupi Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6416, 'Turiúba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6417, 'Turmalina', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6418, 'Ubarana', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6419, 'Ubatuba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6420, 'Ubirajara', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6421, 'Uchoa', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6422, 'União Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6423, 'Urânia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6424, 'Uru', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6425, 'Urupês', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6426, 'Valentim Gentil', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6427, 'Valinhos', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6428, 'Valparaíso', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6429, 'Vargem', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6430, 'Vargem Grande do Sul', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6431, 'Vargem Grande Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6432, 'Várzea Paulista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6433, 'Vinhedo', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6434, 'Viradouro', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6435, 'Vista Alegre do Alto', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6436, 'Vitória Brasil', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6437, 'Votorantim', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6438, 'Zacarias', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6439, 'Chavantes', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6440, 'Estiva Gerbi', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6441, 'Abatiá', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6442, 'Adrianópolis', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6443, 'Agudos do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6444, 'Almirante Tamandaré', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6445, 'Altamira do Paraná', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6446, 'Altônia', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6447, 'Alto Paraná', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6448, 'Alto Piquiri', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6449, 'Alvorada do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6450, 'Amaporã', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6451, 'Ampére', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6452, 'Anahy', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6453, 'Andirá', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6454, 'Ângulo', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6455, 'Antonina', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6456, 'Antônio Olinto', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6457, 'Apucarana', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6458, 'Arapongas', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6459, 'Arapoti', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6460, 'Arapuã', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6461, 'Araruna', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6462, 'Araucária', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6463, 'Ariranha do Ivaí', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6464, 'Assaí', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6465, 'Assis Chateaubriand', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6466, 'Astorga', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6467, 'Atalaia', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6468, 'Balsa Nova', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6469, 'Bandeirantes', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6470, 'Barbosa Ferraz', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6471, 'Barracão', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6472, 'Barra do Jacaré', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6473, 'Bela Vista da Caroba', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6474, 'Bela Vista do Paraíso', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6475, 'Bituruna', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6476, 'Boa Esperança', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6477, 'Boa Esperança do Iguaçu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6478, 'Boa Ventura de São Roque', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6479, 'Boa Vista da Aparecida', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6480, 'Bocaiúva do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6481, 'Bom Jesus do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6482, 'Bom Sucesso', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6483, 'Bom Sucesso do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6484, 'Borrazópolis', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6485, 'Braganey', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6486, 'Brasilândia do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6487, 'Cafeara', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6488, 'Cafelândia', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6489, 'Cafezal do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6490, 'Califórnia', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6491, 'Cambará', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6492, 'Cambé', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6493, 'Cambira', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6494, 'Campina da Lagoa', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6495, 'Campina do Simão', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6496, 'Campina Grande do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6497, 'Campo Bonito', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6498, 'Campo do Tenente', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6499, 'Campo Largo', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6500, 'Campo Magro', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6501, 'Campo Mourão', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6502, 'Cândido de Abreu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6503, 'Candói', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6504, 'Cantagalo', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6505, 'Capanema', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6506, 'Capitão Leônidas Marques', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6507, 'Carambeí', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6508, 'Carlópolis', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6509, 'Cascavel', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6510, 'Castro', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6511, 'Catanduvas', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6512, 'Centenário do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6513, 'Cerro Azul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6514, 'Céu Azul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6515, 'Chopinzinho', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6516, 'Cianorte', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6517, 'Cidade Gaúcha', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6518, 'Clevelândia', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6519, 'Colombo', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6520, 'Colorado', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6521, 'Congonhinhas', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6522, 'Conselheiro Mairinck', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6523, 'Contenda', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6524, 'Corbélia', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6525, 'Cornélio Procópio', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6526, 'Coronel Domingos Soares', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6527, 'Coronel Vivida', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6528, 'Corumbataí do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6529, 'Cruzeiro do Iguaçu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6530, 'Cruzeiro do Oeste', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6531, 'Cruzeiro do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6532, 'Cruz Machado', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6533, 'Cruzmaltina', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6534, 'Curitiba', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6535, 'Curiúva', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6536, 'Diamante do Norte', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6537, 'Diamante do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6538, 'Diamante d''Oeste', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6539, 'Dois Vizinhos', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6540, 'Douradina', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6541, 'Doutor Camargo', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6542, 'Enéas Marques', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6543, 'Engenheiro Beltrão', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6544, 'Esperança Nova', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6545, 'Entre Rios do Oeste', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6546, 'Espigão Alto do Iguaçu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6547, 'Farol', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6548, 'Faxinal', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6549, 'Fazenda Rio Grande', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6550, 'Fênix', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6551, 'Fernandes Pinheiro', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6552, 'Figueira', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6553, 'Floraí', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6554, 'Flor da Serra do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6555, 'Floresta', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6556, 'Florestópolis', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6557, 'Flórida', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6558, 'Formosa do Oeste', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6559, 'Foz do Iguaçu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6560, 'Francisco Alves', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6561, 'Francisco Beltrão', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6562, 'Foz do Jordão', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6563, 'General Carneiro', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6564, 'Godoy Moreira', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6565, 'Goioerê', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6566, 'Goioxim', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6567, 'Grandes Rios', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6568, 'Guaíra', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6569, 'Guairaçá', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6570, 'Guamiranga', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6571, 'Guapirama', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6572, 'Guaporema', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6573, 'Guaraci', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6574, 'Guaraniaçu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6575, 'Guarapuava', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6576, 'Guaraqueçaba', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6577, 'Guaratuba', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6578, 'Honório Serpa', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6579, 'Ibaiti', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6580, 'Ibema', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6581, 'Ibiporã', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6582, 'Icaraíma', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6583, 'Iguaraçu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6584, 'Imbaú', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6585, 'Imbituva', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6586, 'Inácio Martins', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6587, 'Inajá', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6588, 'Indianópolis', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6589, 'Ipiranga', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6590, 'Iporã', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6591, 'Iracema do Oeste', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6592, 'Irati', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6593, 'Iretama', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6594, 'Itaguajé', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6595, 'Itaipulândia', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6596, 'Itambaracá', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6597, 'Itambé', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6598, 'Itapejara d''Oeste', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6599, 'Itaperuçu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6600, 'Itaúna do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6601, 'Ivaté', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6602, 'Ivatuba', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6603, 'Jaboti', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6604, 'Jacarezinho', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6605, 'Jaguapitã', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6606, 'Jaguariaíva', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6607, 'Jandaia do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6608, 'Janiópolis', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6609, 'Japira', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6610, 'Japurá', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6611, 'Jardim Alegre', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6612, 'Jardim Olinda', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6613, 'Jataizinho', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6614, 'Jesuítas', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6615, 'Joaquim Távora', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6616, 'Jundiaí do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6617, 'Juranda', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6618, 'Jussara', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6619, 'Kaloré', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6620, 'Lapa', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6621, 'Laranjal', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6622, 'Laranjeiras do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6623, 'Leópolis', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6624, 'Lidianópolis', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6625, 'Lindoeste', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6626, 'Loanda', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6627, 'Lobato', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6628, 'Londrina', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6629, 'Luiziana', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6630, 'Lunardelli', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6631, 'Mallet', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6632, 'Mamborê', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6633, 'Mandaguaçu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6634, 'Mandaguari', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6635, 'Mandirituba', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6636, 'Manfrinópolis', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6637, 'Mangueirinha', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6638, 'Manoel Ribas', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6639, 'Marechal Cândido Rondon', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6640, 'Maria Helena', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6641, 'Marialva', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6642, 'Marilândia do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6643, 'Marilena', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6644, 'Mariluz', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6645, 'Maringá', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6646, 'Mariópolis', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6647, 'Maripá', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6648, 'Marmeleiro', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6649, 'Marquinho', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6650, 'Marumbi', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6651, 'Matelândia', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6652, 'Matinhos', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6653, 'Mato Rico', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6654, 'Mauá da Serra', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6655, 'Medianeira', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6656, 'Mercedes', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6657, 'Mirador', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6658, 'Miraselva', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6659, 'Missal', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6660, 'Moreira Sales', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6661, 'Morretes', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6662, 'Munhoz de Melo', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6663, 'Nossa Senhora das Graças', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6664, 'Nova Aliança do Ivaí', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6665, 'Nova América da Colina', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6666, 'Nova Aurora', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6667, 'Nova Cantu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6668, 'Nova Esperança', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6669, 'Nova Esperança do Sudoeste', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6670, 'Nova Fátima', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6671, 'Nova Laranjeiras', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6672, 'Nova Londrina', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6673, 'Nova Olímpia', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6674, 'Nova Santa Bárbara', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6675, 'Nova Santa Rosa', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6676, 'Nova Prata do Iguaçu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6677, 'Nova Tebas', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6678, 'Novo Itacolomi', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6679, 'Ourizona', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6680, 'Ouro Verde do Oeste', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6681, 'Paiçandu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6682, 'Palmas', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6683, 'Palmeira', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6684, 'Palmital', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6685, 'Palotina', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6686, 'Paraíso do Norte', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6687, 'Paranacity', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6688, 'Paranaguá', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6689, 'Paranapoema', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6690, 'Paranavaí', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6691, 'Pato Bragado', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6692, 'Pato Branco', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6693, 'Paula Freitas', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6694, 'Paulo Frontin', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6695, 'Peabiru', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6696, 'Perobal', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6697, 'Pérola', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6698, 'Pérola d''Oeste', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6699, 'Piên', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6700, 'Pinhais', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6701, 'Pinhalão', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6702, 'Pinhal de São Bento', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6703, 'Piraí do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6704, 'Piraquara', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6705, 'Pitanga', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6706, 'Pitangueiras', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6707, 'Planalto', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6708, 'Ponta Grossa', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6709, 'Pontal do Paraná', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6710, 'Porecatu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6711, 'Porto Amazonas', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6712, 'Porto Barreiro', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6713, 'Porto Rico', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6714, 'Porto Vitória', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6715, 'Prado Ferreira', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6716, 'Pranchita', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6717, 'Presidente Castelo Branco', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6718, 'Primeiro de Maio', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6719, 'Prudentópolis', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6720, 'Quarto Centenário', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6721, 'Quatiguá', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6722, 'Quatro Barras', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6723, 'Quatro Pontes', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6724, 'Quedas do Iguaçu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6725, 'Querência do Norte', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6726, 'Quinta do Sol', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6727, 'Quitandinha', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6728, 'Ramilândia', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6729, 'Rancho Alegre', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6730, 'Rancho Alegre d''Oeste', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6731, 'Rebouças', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6732, 'Renascença', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6733, 'Reserva', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6734, 'Reserva do Iguaçu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6735, 'Ribeirão Claro', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6736, 'Ribeirão do Pinhal', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6737, 'Rio Azul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6738, 'Rio Bom', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6739, 'Rio Bonito do Iguaçu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6740, 'Rio Branco do Ivaí', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6741, 'Rio Branco do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6742, 'Rio Negro', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6743, 'Rolândia', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6744, 'Roncador', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6745, 'Rondon', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6746, 'Rosário do Ivaí', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6747, 'Sabáudia', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6748, 'Salgado Filho', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6749, 'Salto do Itararé', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6750, 'Salto do Lontra', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6751, 'Santa Amélia', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6752, 'Santa Helena', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6753, 'Santa Inês', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6754, 'Santa Isabel do Ivaí', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6755, 'Santa Izabel do Oeste', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6756, 'Santa Lúcia', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6757, 'Santa Maria do Oeste', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6758, 'Santa Mariana', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6759, 'Santa Mônica', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6760, 'Santa Tereza do Oeste', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6761, 'Santa Terezinha de Itaipu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6762, 'Santo Antônio da Platina', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6763, 'Santo Antônio do Caiuá', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6764, 'Santo Antônio do Sudoeste', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6765, 'Santo Inácio', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6766, 'São Carlos do Ivaí', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6767, 'São Jerônimo da Serra', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6768, 'São João do Caiuá', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6769, 'São João do Ivaí', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6770, 'São João do Triunfo', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6771, 'São Jorge d''Oeste', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6772, 'São Jorge do Ivaí', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6773, 'São Jorge do Patrocínio', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6774, 'São José dos Pinhais', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6775, 'São Manoel do Paraná', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6776, 'São Mateus do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6777, 'São Miguel do Iguaçu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6778, 'São Pedro do Iguaçu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6779, 'São Pedro do Ivaí', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6780, 'São Pedro do Paraná', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6781, 'São Sebastião da Amoreira', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6782, 'São Tomé', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6783, 'Sapopema', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6784, 'Sarandi', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6785, 'Saudade do Iguaçu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6786, 'Sengés', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6787, 'Sertaneja', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6788, 'Sertanópolis', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6789, 'Siqueira Campos', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6790, 'Sulina', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6791, 'Tamarana', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6792, 'Tamboara', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6793, 'Tapejara', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6794, 'Tapira', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6795, 'Teixeira Soares', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6796, 'Terra Boa', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6797, 'Terra Rica', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6798, 'Terra Roxa', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6799, 'Tibagi', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6800, 'Tijucas do Sul', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6801, 'Toledo', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6802, 'Tomazina', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6803, 'Tunas do Paraná', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6804, 'Tuneiras do Oeste', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6805, 'Tupãssi', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6806, 'Turvo', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6807, 'Ubiratã', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6808, 'Umuarama', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6809, 'União da Vitória', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6810, 'Uniflor', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6811, 'Uraí', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6812, 'Wenceslau Braz', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6813, 'Ventania', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6814, 'Vera Cruz do Oeste', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6815, 'Verê', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6816, 'Alto Paraíso', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6817, 'Doutor Ulysses', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6818, 'Virmond', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6819, 'Vitorino', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6820, 'Xambrê', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6821, 'Abdon Batista', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6822, 'Abelardo Luz', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6823, 'Agrolândia', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6824, 'Agronômica', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6825, 'Água Doce', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6826, 'Águas de Chapecó', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6827, 'Águas Frias', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6828, 'Águas Mornas', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6829, 'Alfredo Wagner', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6830, 'Alto Bela Vista', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6831, 'Anchieta', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6832, 'Angelina', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6833, 'Anita Garibaldi', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6834, 'Anitápolis', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6835, 'Antônio Carlos', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6836, 'Apiúna', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6837, 'Arabutã', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6838, 'Araquari', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6839, 'Araranguá', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6840, 'Armazém', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6841, 'Arroio Trinta', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6842, 'Arvoredo', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6843, 'Ascurra', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6844, 'Atalanta', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6845, 'Balneário Arroio do Silva', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6846, 'Balneário Camboriú', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6847, 'Balneário Barra do Sul', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6848, 'Balneário Gaivota', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6849, 'Bandeirante', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6850, 'Barra Bonita', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6851, 'Barra Velha', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6852, 'Bela Vista do Toldo', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6853, 'Belmonte', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6854, 'Benedito Novo', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6855, 'Biguaçu', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6856, 'Blumenau', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6857, 'Bocaina do Sul', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6858, 'Bombinhas', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6859, 'Bom Jardim da Serra', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6860, 'Bom Jesus', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6861, 'Bom Jesus do Oeste', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6862, 'Bom Retiro', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6863, 'Botuverá', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6864, 'Braço do Norte', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6865, 'Braço do Trombudo', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6866, 'Brunópolis', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6867, 'Brusque', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6868, 'Caçador', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6869, 'Caibi', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6870, 'Calmon', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6871, 'Camboriú', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6872, 'Capão Alto', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6873, 'Campo Alegre', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6874, 'Campo Belo do Sul', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6875, 'Campos Novos', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6876, 'Canelinha', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6877, 'Canoinhas', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6878, 'Capinzal', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6879, 'Capivari de Baixo', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6880, 'Catanduvas', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6881, 'Caxambu do Sul', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6882, 'Celso Ramos', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6883, 'Cerro Negro', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6884, 'Chapadão do Lageado', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6885, 'Chapecó', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6886, 'Cocal do Sul', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6887, 'Cordilheira Alta', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6888, 'Coronel Freitas', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6889, 'Coronel Martins', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6890, 'Corupá', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6891, 'Cunha Porã', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6892, 'Cunhataí', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6893, 'Curitibanos', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6894, 'Descanso', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6895, 'Dionísio Cerqueira', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6896, 'Dona Emma', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6897, 'Doutor Pedrinho', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6898, 'Entre Rios', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6899, 'Ermo', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6900, 'Erval Velho', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6901, 'Faxinal dos Guedes', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6902, 'Flor do Sertão', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6903, 'Florianópolis', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6904, 'Formosa do Sul', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6905, 'Forquilhinha', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6906, 'Fraiburgo', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6907, 'Frei Rogério', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6908, 'Galvão', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6909, 'Garopaba', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6910, 'Garuva', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6911, 'Gaspar', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6912, 'Governador Celso Ramos', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6913, 'Grão Pará', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6914, 'Gravatal', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6915, 'Guabiruba', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6916, 'Guaraciaba', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6917, 'Guaramirim', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6918, 'Guarujá do Sul', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6919, 'Guatambú', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6920, 'Herval d''Oeste', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6921, 'Ibiam', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6922, 'Ibicaré', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6923, 'Ibirama', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6924, 'Içara', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6925, 'Ilhota', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6926, 'Imaruí', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6927, 'Imbituba', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6928, 'Imbuia', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6929, 'Indaial', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6930, 'Iomerê', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6931, 'Ipira', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6932, 'Iporã do Oeste', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6933, 'Ipuaçu', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6934, 'Ipumirim', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6935, 'Iraceminha', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6936, 'Irani', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6937, 'Irati', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6938, 'Irineópolis', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6939, 'Itá', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6940, 'Itaiópolis', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6941, 'Itajaí', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6942, 'Itapiranga', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6943, 'Itapoá', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6944, 'Ituporanga', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6945, 'Jaborá', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6946, 'Jacinto Machado', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6947, 'Jaguaruna', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6948, 'Jaraguá do Sul', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6949, 'Jardinópolis', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6950, 'Joaçaba', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6951, 'Joinville', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6952, 'José Boiteux', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6953, 'Jupiá', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6954, 'Lacerdópolis', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6955, 'Lages', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6956, 'Laguna', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6957, 'Lajeado Grande', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6958, 'Laurentino', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6959, 'Lauro Müller', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6960, 'Lebon Régis', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6961, 'Leoberto Leal', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6962, 'Lindóia do Sul', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6963, 'Lontras', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6964, 'Luiz Alves', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6965, 'Luzerna', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6966, 'Macieira', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6967, 'Mafra', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6968, 'Major Gercino', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6969, 'Major Vieira', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6970, 'Maracajá', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6971, 'Maravilha', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6972, 'Marema', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6973, 'Massaranduba', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6974, 'Matos Costa', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6975, 'Meleiro', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6976, 'Mirim Doce', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6977, 'Modelo', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6978, 'Mondaí', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6979, 'Monte Carlo', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6980, 'Monte Castelo', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6981, 'Morro da Fumaça', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6982, 'Morro Grande', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6983, 'Navegantes', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6984, 'Nova Erechim', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6985, 'Nova Itaberaba', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6986, 'Nova Trento', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6987, 'Nova Veneza', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6988, 'Novo Horizonte', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6989, 'Orleans', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6990, 'Otacílio Costa', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6991, 'Ouro', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6992, 'Ouro Verde', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6993, 'Paial', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6994, 'Painel', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6995, 'Palhoça', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6996, 'Palma Sola', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6997, 'Palmeira', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6998, 'Palmitos', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (6999, 'Papanduva', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7000, 'Passo de Torres', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7001, 'Paulo Lopes', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7002, 'Pedras Grandes', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7003, 'Penha', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7004, 'Peritiba', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7005, 'Petrolândia', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7006, 'Balneário Piçarras', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7007, 'Pinhalzinho', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7008, 'Pinheiro Preto', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7009, 'Piratuba', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7010, 'Planalto Alegre', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7011, 'Pomerode', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7012, 'Ponte Alta', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7013, 'Ponte Alta do Norte', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7014, 'Ponte Serrada', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7015, 'Porto Belo', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7016, 'Porto União', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7017, 'Pouso Redondo', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7018, 'Praia Grande', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7019, 'Presidente Castello Branco', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7020, 'Presidente Getúlio', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7021, 'Presidente Nereu', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7022, 'Princesa', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7023, 'Quilombo', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7024, 'Rancho Queimado', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7025, 'Rio das Antas', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7026, 'Rio do Oeste', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7027, 'Rio dos Cedros', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7028, 'Rio do Sul', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7029, 'Rio Fortuna', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7030, 'Rio Negrinho', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7031, 'Rio Rufino', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7032, 'Riqueza', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7033, 'Rodeio', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7034, 'Romelândia', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7035, 'Saltinho', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7036, 'Salto Veloso', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7037, 'Sangão', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7038, 'Santa Cecília', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7039, 'Santa Helena', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7040, 'Santa Rosa de Lima', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7041, 'Santa Rosa do Sul', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7042, 'Santa Terezinha', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7043, 'Santa Terezinha do Progresso', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7044, 'Santiago do Sul', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7045, 'Santo Amaro da Imperatriz', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7046, 'São Bernardino', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7047, 'São Bento do Sul', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7048, 'São Bonifácio', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7049, 'São Carlos', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7050, 'São Cristóvão do Sul', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7051, 'São Domingos', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7052, 'São Francisco do Sul', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7053, 'São João do Oeste', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7054, 'São João Batista', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7055, 'São João do Itaperiú', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7056, 'São João do Sul', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7057, 'São Joaquim', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7058, 'São José', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7059, 'São José do Cedro', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7060, 'São José do Cerrito', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7061, 'São Ludgero', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7062, 'São Martinho', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7063, 'São Miguel da Boa Vista', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7064, 'São Miguel do Oeste', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7065, 'São Pedro de Alcântara', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7066, 'Saudades', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7067, 'Schroeder', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7068, 'Seara', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7069, 'Serra Alta', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7070, 'Siderópolis', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7071, 'Sombrio', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7072, 'Sul Brasil', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7073, 'Tangará', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7074, 'Tigrinhos', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7075, 'Timbé do Sul', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7076, 'Timbó', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7077, 'Timbó Grande', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7078, 'Três Barras', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7079, 'Treviso', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7080, 'Treze de Maio', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7081, 'Treze Tílias', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7082, 'Trombudo Central', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7083, 'Tubarão', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7084, 'Tunápolis', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7085, 'Turvo', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7086, 'União do Oeste', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7087, 'Urubici', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7088, 'Urupema', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7089, 'Urussanga', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7090, 'Vargeão', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7091, 'Vargem', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7092, 'Vargem Bonita', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7093, 'Vidal Ramos', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7094, 'Videira', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7095, 'Vitor Meireles', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7096, 'Witmarsum', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7097, 'Xanxerê', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7098, 'Xavantina', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7099, 'Xaxim', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7100, 'Zortéa', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7101, 'Agudo', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7102, 'Ajuricaba', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7103, 'Alecrim', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7104, 'Alegrete', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7105, 'Alegria', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7106, 'Alpestre', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7107, 'Alto Feliz', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7108, 'Alvorada', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7109, 'Amaral Ferrador', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7110, 'Ametista do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7111, 'André da Rocha', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7112, 'Anta Gorda', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7113, 'Arambaré', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7114, 'Araricá', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7115, 'Aratiba', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7116, 'Arroio do Meio', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7117, 'Arroio do Sal', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7118, 'Arroio dos Ratos', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7119, 'Arroio do Tigre', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7120, 'Arvorezinha', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7121, 'Áurea', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7122, 'Balneário Pinhal', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7123, 'Barão', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7124, 'Barão do Triunfo', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7125, 'Barracão', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7126, 'Barra do Guarita', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7127, 'Barra do Quaraí', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7128, 'Barra do Ribeiro', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7129, 'Barra do Rio Azul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7130, 'Barra Funda', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7131, 'Benjamin Constant do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7132, 'Boa Vista das Missões', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7133, 'Boa Vista do Buricá', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7134, 'Boa Vista do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7135, 'Bom Jesus', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7136, 'Bom Princípio', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7137, 'Bom Progresso', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7138, 'Bom Retiro do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7139, 'Bossoroca', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7140, 'Braga', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7141, 'Brochier', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7142, 'Butiá', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7143, 'Caçapava do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7144, 'Cacequi', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7145, 'Cachoeira do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7146, 'Cachoeirinha', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7147, 'Cacique Doble', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7148, 'Caiçara', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7149, 'Camaquã', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7150, 'Camargo', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7151, 'Cambará do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7152, 'Campestre da Serra', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7153, 'Campina das Missões', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7154, 'Campo Novo', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7155, 'Campos Borges', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7156, 'Candelária', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7157, 'Cândido Godói', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7158, 'Candiota', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7159, 'Canela', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7160, 'Canoas', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7161, 'Capão da Canoa', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7162, 'Capão do Leão', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7163, 'Capivari do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7164, 'Capela de Santana', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7165, 'Capitão', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7166, 'Caraá', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7167, 'Carlos Gomes', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7168, 'Casca', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7169, 'Catuípe', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7170, 'Caxias do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7171, 'Centenário', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7172, 'Cerrito', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7173, 'Cerro Branco', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7174, 'Cerro Grande do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7175, 'Cerro Largo', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7176, 'Chapada', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7177, 'Charqueadas', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7178, 'Charrua', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7179, 'Chiapetta', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7180, 'Chuí', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7181, 'Chuvisca', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7182, 'Cidreira', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7183, 'Ciríaco', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7184, 'Colinas', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7185, 'Colorado', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7186, 'Condor', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7187, 'Coqueiros do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7188, 'Coronel Barros', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7189, 'Coronel Bicaco', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7190, 'Cotiporã', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7191, 'Coxilha', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7192, 'Crissiumal', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7193, 'Cristal', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7194, 'Cristal do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7195, 'Cruzeiro do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7196, 'Dezesseis de Novembro', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7197, 'Dilermando de Aguiar', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7198, 'Dois Irmãos', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7199, 'Dois Irmãos das Missões', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7200, 'Dois Lajeados', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7201, 'Dom Feliciano', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7202, 'Dom Pedro de Alcântara', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7203, 'Dom Pedrito', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7204, 'Dona Francisca', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7205, 'Doutor Maurício Cardoso', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7206, 'Doutor Ricardo', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7207, 'Eldorado do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7208, 'Encantado', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7209, 'Encruzilhada do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7210, 'Engenho Velho', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7211, 'Entre-Ijuís', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7212, 'Entre Rios do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7213, 'Erebango', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7214, 'Erval Grande', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7215, 'Erval Seco', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7216, 'Esperança do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7217, 'Estação', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7218, 'Estância Velha', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7219, 'Esteio', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7220, 'Estrela', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7221, 'Estrela Velha', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7222, 'Eugênio de Castro', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7223, 'Fagundes Varela', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7224, 'Farroupilha', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7225, 'Faxinal do Soturno', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7226, 'Faxinalzinho', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7227, 'Fazenda Vilanova', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7228, 'Feliz', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7229, 'Flores da Cunha', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7230, 'Floriano Peixoto', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7231, 'Fontoura Xavier', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7232, 'Formigueiro', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7233, 'Frederico Westphalen', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7234, 'Garruchos', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7235, 'Gaurama', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7236, 'General Câmara', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7237, 'Gentil', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7238, 'Getúlio Vargas', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7239, 'Giruá', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7240, 'Glorinha', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7241, 'Gramado', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7242, 'Gramado dos Loureiros', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7243, 'Gramado Xavier', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7244, 'Gravataí', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7245, 'Guabiju', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7246, 'Guaíba', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7247, 'Guaporé', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7248, 'Guarani das Missões', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7249, 'Harmonia', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7250, 'Herveiras', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7251, 'Horizontina', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7252, 'Hulha Negra', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7253, 'Humaitá', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7254, 'Ibarama', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7255, 'Ibiraiaras', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7256, 'Ibirubá', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7257, 'Igrejinha', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7258, 'Ilópolis', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7259, 'Imbé', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7260, 'Inhacorá', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7261, 'Ipê', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7262, 'Ipiranga do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7263, 'Iraí', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7264, 'Itaara', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7265, 'Itacurubi', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7266, 'Itapuca', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7267, 'Itaqui', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7268, 'Itatiba do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7269, 'Ivorá', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7270, 'Ivoti', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7271, 'Jaboticaba', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7272, 'Jaguarão', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7273, 'Jaquirana', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7274, 'Jari', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7275, 'Jóia', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7276, 'Júlio de Castilhos', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7277, 'Lagoão', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7278, 'Lagoa dos Três Cantos', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7279, 'Lajeado do Bugre', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7280, 'Lavras do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7281, 'Liberato Salzano', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7282, 'Lindolfo Collor', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7283, 'Linha Nova', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7284, 'Machadinho', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7285, 'Maçambará', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7286, 'Mampituba', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7287, 'Manoel Viana', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7288, 'Maquiné', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7289, 'Marau', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7290, 'Marcelino Ramos', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7291, 'Mariana Pimentel', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7292, 'Mariano Moro', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7293, 'Mata', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7294, 'Mato Castelhano', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7295, 'Mato Leitão', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7296, 'Maximiliano de Almeida', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7297, 'Minas do Leão', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7298, 'Miraguaí', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7299, 'Montauri', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7300, 'Monte Alegre dos Campos', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7301, 'Morrinhos do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7302, 'Morro Redondo', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7303, 'Morro Reuter', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7304, 'Mostardas', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7305, 'Muçum', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7306, 'Muitos Capões', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7307, 'Muliterno', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7308, 'Não-Me-Toque', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7309, 'Nicolau Vergueiro', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7310, 'Nonoai', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7311, 'Nova Alvorada', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7312, 'Nova Araçá', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7313, 'Nova Bassano', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7314, 'Nova Esperança do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7315, 'Nova Hartz', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7316, 'Nova Pádua', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7317, 'Nova Palma', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7318, 'Nova Petrópolis', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7319, 'Nova Prata', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7320, 'Nova Ramada', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7321, 'Nova Roma do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7322, 'Nova Santa Rita', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7323, 'Novo Cabrais', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7324, 'Novo Machado', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7325, 'Novo Tiradentes', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7326, 'Novo Barreiro', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7327, 'Osório', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7328, 'Paim Filho', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7329, 'Palmares do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7330, 'Palmitinho', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7331, 'Panambi', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7332, 'Pantano Grande', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7333, 'Paraí', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7334, 'Paraíso do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7335, 'Pareci Novo', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7336, 'Parobé', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7337, 'Passa Sete', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7338, 'Passo do Sobrado', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7339, 'Passo Fundo', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7340, 'Paverama', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7341, 'Pedro Osório', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7342, 'Pejuçara', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7343, 'Picada Café', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7344, 'Pinhal', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7345, 'Pinhal Grande', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7346, 'Pinheirinho do Vale', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7347, 'Pirapó', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7348, 'Piratini', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7349, 'Planalto', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7350, 'Poço das Antas', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7351, 'Pontão', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7352, 'Portão', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7353, 'Porto Alegre', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7354, 'Porto Lucena', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7355, 'Porto Mauá', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7356, 'Porto Vera Cruz', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7357, 'Porto Xavier', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7358, 'Pouso Novo', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7359, 'Presidente Lucena', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7360, 'Protásio Alves', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7361, 'Putinga', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7362, 'Quaraí', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7363, 'Quevedos', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7364, 'Quinze de Novembro', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7365, 'Redentora', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7366, 'Restinga Sêca', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7367, 'Rio dos Índios', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7368, 'Rio Pardo', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7369, 'Riozinho', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7370, 'Rodeio Bonito', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7371, 'Rolante', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7372, 'Ronda Alta', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7373, 'Rondinha', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7374, 'Roque Gonzales', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7375, 'Rosário do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7376, 'Sagrada Família', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7377, 'Saldanha Marinho', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7378, 'Salvador das Missões', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7379, 'Sananduva', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7380, 'Santa Bárbara do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7381, 'Santa Clara do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7382, 'Santa Cruz do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7383, 'Santa Maria do Herval', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7384, 'Santana da Boa Vista', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7385, 'Sant''Ana do Livramento', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7386, 'Santa Rosa', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7387, 'Santa Tereza', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7388, 'Santa Vitória do Palmar', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7389, 'Santo Ângelo', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7390, 'Santo Antônio do Palma', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7391, 'Santo Antônio da Patrulha', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7392, 'Santo Antônio das Missões', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7393, 'Santo Antônio do Planalto', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7394, 'Santo Augusto', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7395, 'Santo Cristo', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7396, 'Santo Expedito do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7397, 'São Borja', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7398, 'São Domingos do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7399, 'São Francisco de Assis', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7400, 'São Jerônimo', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7401, 'São João da Urtiga', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7402, 'São João do Polêsine', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7403, 'São Jorge', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7404, 'São José das Missões', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7405, 'São José do Herval', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7406, 'São José do Hortêncio', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7407, 'São José do Inhacorá', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7408, 'São José do Norte', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7409, 'São José do Ouro', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7410, 'São José dos Ausentes', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7411, 'São Leopoldo', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7412, 'São Lourenço do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7413, 'São Marcos', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7414, 'São Martinho', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7415, 'São Martinho da Serra', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7416, 'São Nicolau', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7417, 'São Paulo das Missões', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7418, 'São Pedro da Serra', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7419, 'São Pedro do Butiá', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7420, 'São Pedro do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7421, 'São Sebastião do Caí', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7422, 'São Sepé', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7423, 'São Valentim', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7424, 'São Valentim do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7425, 'São Valério do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7426, 'São Vendelino', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7427, 'São Vicente do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7428, 'Sapiranga', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7429, 'Sapucaia do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7430, 'Sarandi', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7431, 'Seberi', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7432, 'Sede Nova', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7433, 'Segredo', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7434, 'Selbach', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7435, 'Senador Salgado Filho', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7436, 'Sentinela do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7437, 'Serafina Corrêa', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7438, 'Sério', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7439, 'Sertão', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7440, 'Sertão Santana', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7441, 'Sete de Setembro', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7442, 'Severiano de Almeida', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7443, 'Silveira Martins', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7444, 'Sinimbu', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7445, 'Tabaí', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7446, 'Tapera', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7447, 'Tapes', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7448, 'Taquara', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7449, 'Taquari', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7450, 'Taquaruçu do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7451, 'Tavares', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7452, 'Tenente Portela', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7453, 'Tiradentes do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7454, 'Toropi', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7455, 'Torres', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7456, 'Tramandaí', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7457, 'Travesseiro', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7458, 'Três Arroios', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7459, 'Três Cachoeiras', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7460, 'Três Coroas', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7461, 'Três de Maio', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7462, 'Três Forquilhas', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7463, 'Três Palmeiras', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7464, 'Três Passos', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7465, 'Trindade do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7466, 'Triunfo', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7467, 'Tucunduva', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7468, 'Tunas', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7469, 'Tupanci do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7470, 'Tupanciretã', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7471, 'Tupandi', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7472, 'Tuparendi', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7473, 'Turuçu', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7474, 'Ubiretama', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7475, 'União da Serra', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7476, 'Unistalda', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7477, 'Uruguaiana', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7478, 'Vacaria', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7479, 'Vale Verde', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7480, 'Vale do Sol', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7481, 'Vale Real', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7482, 'Vanini', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7483, 'Venâncio Aires', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7484, 'Vera Cruz', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7485, 'Veranópolis', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7486, 'Vespasiano Corrêa', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7487, 'Viadutos', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7488, 'Viamão', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7489, 'Vicente Dutra', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7490, 'Vila Flores', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7491, 'Vila Lângaro', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7492, 'Vila Maria', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7493, 'Vila Nova do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7494, 'Vista Alegre', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7495, 'Vista Alegre do Prata', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7496, 'Vista Gaúcha', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7497, 'Vitória das Missões', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7498, 'Xangri-lá', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7499, 'Água Clara', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7500, 'Alcinópolis', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7501, 'Amambai', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7502, 'Anastácio', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7503, 'Anaurilândia', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7504, 'Angélica', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7505, 'Antônio João', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7506, 'Aparecida do Taboado', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7507, 'Aquidauana', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7508, 'Aral Moreira', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7509, 'Bandeirantes', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7510, 'Bataguassu', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7511, 'Batayporã', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7512, 'Bela Vista', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7513, 'Bodoquena', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7514, 'Bonito', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7515, 'Brasilândia', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7516, 'Caarapó', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7517, 'Camapuã', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7518, 'Campo Grande', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7519, 'Caracol', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7520, 'Cassilândia', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7521, 'Chapadão do Sul', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7522, 'Corguinho', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7523, 'Coronel Sapucaia', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7524, 'Corumbá', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7525, 'Costa Rica', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7526, 'Coxim', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7527, 'Deodápolis', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7528, 'Dois Irmãos do Buriti', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7529, 'Douradina', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7530, 'Dourados', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7531, 'Eldorado', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7532, 'Fátima do Sul', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7533, 'Glória de Dourados', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7534, 'Guia Lopes da Laguna', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7535, 'Iguatemi', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7536, 'Inocência', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7537, 'Itaporã', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7538, 'Itaquiraí', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7539, 'Ivinhema', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7540, 'Japorã', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7541, 'Jaraguari', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7542, 'Jateí', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7543, 'Juti', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7544, 'Ladário', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7545, 'Laguna Carapã', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7546, 'Maracaju', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7547, 'Miranda', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7548, 'Mundo Novo', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7549, 'Naviraí', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7550, 'Nioaque', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7551, 'Nova Alvorada do Sul', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7552, 'Nova Andradina', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7553, 'Novo Horizonte do Sul', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7554, 'Paranaíba', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7555, 'Paranhos', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7556, 'Pedro Gomes', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7557, 'Ponta Porã', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7558, 'Porto Murtinho', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7559, 'Ribas do Rio Pardo', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7560, 'Rio Brilhante', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7561, 'Rio Negro', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7562, 'Rio Verde de Mato Grosso', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7563, 'Rochedo', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7564, 'Santa Rita do Pardo', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7565, 'São Gabriel do Oeste', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7566, 'Sete Quedas', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7567, 'Selvíria', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7568, 'Sonora', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7569, 'Tacuru', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7570, 'Taquarussu', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7571, 'Terenos', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7572, 'Três Lagoas', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7573, 'Vicentina', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7574, 'Acorizal', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7575, 'Alta Floresta', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7576, 'Alto Araguaia', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7577, 'Alto Garças', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7578, 'Alto Paraguai', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7579, 'Alto Taquari', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7580, 'Apiacás', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7581, 'Araguaiana', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7582, 'Araguainha', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7583, 'Araputanga', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7584, 'Arenápolis', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7585, 'Barão de Melgaço', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7586, 'Barra do Bugres', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7587, 'Barra do Garças', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7588, 'Brasnorte', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7589, 'Campinápolis', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7590, 'Campo Novo do Parecis', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7591, 'Campo Verde', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7592, 'Campos de Júlio', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7593, 'CanaBrava do Norte', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7594, 'Canarana', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7595, 'Castanheira', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7596, 'Chapada dos Guimarães', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7597, 'Cláudia', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7598, 'Colíder', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7599, 'Comodoro', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7600, 'Confresa', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7601, 'Cotriguaçu', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7602, 'Cuiabá', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7603, 'Denise', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7604, 'Diamantino', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7605, 'Dom Aquino', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7606, 'Feliz Natal', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7607, 'Figueirópolis d''Oeste', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7608, 'Gaúcha do Norte', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7609, 'General Carneiro', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7610, 'Glória d''Oeste', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7611, 'Guiratinga', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7612, 'Indiavaí', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7613, 'Itiquira', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7614, 'Jaciara', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7615, 'Jangada', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7616, 'Jauru', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7617, 'Juara', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7618, 'Juína', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7619, 'Juruena', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7620, 'Juscimeira', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7621, 'Vila Bela da Santíssima Trindade', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7622, 'Nortelândia', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7623, 'Nossa Senhora do Livramento', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7624, 'Nova Bandeirantes', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7625, 'Nova Lacerda', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7626, 'Nova Brasilândia', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7627, 'Nova Canaã do Norte', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7628, 'Nova Olímpia', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7629, 'Nova Ubiratã', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7630, 'Nova Xavantina', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7631, 'Novo Horizonte do Norte', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7632, 'Paranaíta', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7633, 'Paranatinga', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7634, 'Pedra Preta', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7635, 'Planalto da Serra', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7636, 'Poconé', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7637, 'Pontal do Araguaia', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7638, 'Ponte Branca', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7639, 'Porto Alegre do Norte', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7640, 'Porto dos Gaúchos', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7641, 'Porto Esperidião', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7642, 'Porto Estrela', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7643, 'Poxoréu', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7644, 'Primavera do Leste', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7645, 'Querência', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7646, 'São José dos Quatro Marcos', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7647, 'Reserva do Cabaçal', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7648, 'Ribeirãozinho', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7649, 'Rio Branco', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7650, 'Santa Carmem', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7651, 'Santo Afonso', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7652, 'São José do Rio Claro', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7653, 'São Pedro da Cipa', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7654, 'Rondonópolis', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7655, 'Rosário Oeste', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7656, 'Salto do Céu', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7657, 'Santo Antônio do Leverger', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7658, 'Sapezal', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7659, 'Sinop', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7660, 'Tabaporã', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7661, 'Tangará da Serra', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7662, 'Tapurah', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7663, 'Terra Nova do Norte', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7664, 'Tesouro', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7665, 'Torixoréu', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7666, 'União do Sul', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7667, 'Várzea Grande', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7668, 'Vera', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7669, 'Vila Rica', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7670, 'Nova Guarita', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7671, 'Nova Monte Verde', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7672, 'Abadia de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7673, 'Abadiânia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7674, 'Acreúna', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7675, 'Adelândia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7676, 'Água Limpa', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7677, 'Águas Lindas de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7678, 'Alexânia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7679, 'Aloândia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7680, 'Alto Horizonte', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7681, 'Alvorada do Norte', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7682, 'Amaralina', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7683, 'Americano do Brasil', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7684, 'Amorinópolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7685, 'Anhanguera', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7686, 'Anicuns', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7687, 'Aparecida de Goiânia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7688, 'Aparecida do Rio Doce', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7689, 'Aporé', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7690, 'Araçu', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7691, 'Aragarças', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7692, 'Aragoiânia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7693, 'Araguapaz', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7694, 'Arenópolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7695, 'Aruanã', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7696, 'Avelinópolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7697, 'Barro Alto', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7698, 'Bela Vista de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7699, 'Bom Jardim de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7700, 'Bom Jesus de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7701, 'Bonfinópolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7702, 'Bonópolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7703, 'Brazabrantes', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7704, 'Britânia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7705, 'Buriti Alegre', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7706, 'Buriti de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7707, 'Buritinópolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7708, 'Cabeceiras', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7709, 'Cachoeira Alta', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7710, 'Cachoeira de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7711, 'Cachoeira Dourada', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7712, 'Caçu', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7713, 'Caiapônia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7714, 'Caldas Novas', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7715, 'Caldazinha', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7716, 'Campestre de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7717, 'Campinaçu', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7718, 'Campinorte', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7719, 'Campo Alegre de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7720, 'Campos Belos', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7721, 'Campos Verdes', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7722, 'Carmo do Rio Verde', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7723, 'Castelândia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7724, 'Catalão', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7725, 'Caturaí', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7726, 'Cavalcante', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7727, 'Cezarina', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7728, 'Cidade Ocidental', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7729, 'Cocalzinho de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7730, 'Colinas do Sul', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7731, 'Córrego do Ouro', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7732, 'Corumbá de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7733, 'Corumbaíba', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7734, 'Cristalina', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7735, 'Cristianópolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7736, 'Crixás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7737, 'Cromínia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7738, 'Cumari', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7739, 'Damianópolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7740, 'Damolândia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7741, 'Davinópolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7742, 'Diorama', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7743, 'Doverlândia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7744, 'Edealina', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7745, 'Edéia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7746, 'Estrela do Norte', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7747, 'Faina', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7748, 'Fazenda Nova', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7749, 'Firminópolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7750, 'Flores de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7751, 'Formosa', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7752, 'Formoso', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7753, 'Goianápolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7754, 'Goiandira', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7755, 'Goianésia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7756, 'Goiânia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7757, 'Goianira', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7758, 'Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7759, 'Goiatuba', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7760, 'Gouvelândia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7761, 'Guapó', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7762, 'Guaraíta', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7763, 'Guarani de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7764, 'Guarinos', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7765, 'Heitoraí', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7766, 'Hidrolândia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7767, 'Hidrolina', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7768, 'Iaciara', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7769, 'Inaciolândia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7770, 'Indiara', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7771, 'Inhumas', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7772, 'Ipameri', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7773, 'Iporá', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7774, 'Israelândia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7775, 'Itaberaí', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7776, 'Itaguari', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7777, 'Itaguaru', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7778, 'Itapaci', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7779, 'Itapirapuã', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7780, 'Itapuranga', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7781, 'Itarumã', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7782, 'Itauçu', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7783, 'Itumbiara', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7784, 'Ivolândia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7785, 'Jandaia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7786, 'Jaraguá', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7787, 'Jataí', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7788, 'Jaupaci', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7789, 'Jesúpolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7790, 'Joviânia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7791, 'Jussara', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7792, 'Leopoldo de Bulhões', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7793, 'Luziânia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7794, 'Mairipotaba', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7795, 'Mambaí', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7796, 'Mara Rosa', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7797, 'Marzagão', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7798, 'Matrinchã', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7799, 'Maurilândia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7800, 'Mimoso de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7801, 'Minaçu', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7802, 'Mineiros', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7803, 'Moiporá', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7804, 'Monte Alegre de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7805, 'Montes Claros de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7806, 'Montividiu', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7807, 'Montividiu do Norte', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7808, 'Morrinhos', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7809, 'Morro Agudo de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7810, 'Mossâmedes', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7811, 'Mozarlândia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7812, 'Mundo Novo', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7813, 'Mutunópolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7814, 'Nazário', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7815, 'Nerópolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7816, 'Niquelândia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7817, 'Nova América', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7818, 'Nova Aurora', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7819, 'Nova Crixás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7820, 'Nova Glória', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7821, 'Nova Iguaçu de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7822, 'Nova Roma', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7823, 'Nova Veneza', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7824, 'Novo Brasil', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7825, 'Novo Gama', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7826, 'Novo Planalto', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7827, 'Orizona', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7828, 'Ouro Verde de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7829, 'Ouvidor', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7830, 'Padre Bernardo', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7831, 'Palestina de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7832, 'Palmeiras de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7833, 'Palmelo', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7834, 'Palminópolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7835, 'Panamá', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7836, 'Paranaiguara', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7837, 'Paraúna', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7838, 'Perolândia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7839, 'Petrolina de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7840, 'Pilar de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7841, 'Piracanjuba', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7842, 'Pirenópolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7843, 'Pires do Rio', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7844, 'Planaltina', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7845, 'Pontalina', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7846, 'Porangatu', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7847, 'Porteirão', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7848, 'Portelândia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7849, 'Posse', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7850, 'Professor Jamil', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7851, 'Quirinópolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7852, 'Rialma', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7853, 'Rianápolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7854, 'Rio Quente', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7855, 'Rio Verde', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7856, 'Rubiataba', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7857, 'Sanclerlândia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7858, 'Santa Cruz de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7859, 'Santa Fé de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7860, 'Santa Helena de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7861, 'Santa Isabel', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7862, 'Santa Rita do Araguaia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7863, 'Santa Rita do Novo Destino', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7864, 'Santa Rosa de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7865, 'Santa Tereza de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7866, 'Santa Terezinha de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7867, 'Santo Antônio da Barra', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7868, 'Santo Antônio de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7869, 'São João d''Aliança', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7870, 'São João da Paraúna', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7871, 'São Luís de Montes Belos', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7872, 'São Luiz do Norte', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7873, 'São Miguel do Araguaia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7874, 'São Miguel do Passa Quatro', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7875, 'São Patrício', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7876, 'São Simão', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7877, 'Sítio d''Abadia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7878, 'Taquaral de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7879, 'Teresina de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7880, 'Terezópolis de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7881, 'Três Ranchos', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7882, 'Trindade', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7883, 'Trombas', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7884, 'Turvânia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7885, 'Turvelândia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7886, 'Uirapuru', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7887, 'Uruaçu', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7888, 'Uruana', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7889, 'Urutaí', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7890, 'Valparaíso de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7891, 'Varjão', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7892, 'Vianópolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7893, 'Vicentinópolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7894, 'Vila Boa', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7895, 'Vila Propício', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7896, 'Novo Xingu', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7897, 'Constantina', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7898, 'Barão de Cotegipe', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7899, 'Arroio do Padre', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7900, 'Bagé', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7901, 'Pedras Altas', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7902, 'Pinheiro Machado', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7903, 'Augusto Pestana', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7904, 'Ijuí', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7905, 'Boa Vista do Cadeado', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7906, 'Bozano', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7907, 'Cruz Alta', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7908, 'Fortaleza dos Valos', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7909, 'Boa Vista do Incra', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7910, 'Salto do Jacuí', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7911, 'Jacuizinho', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7912, 'Espumoso', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7913, 'Victor Graeff', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7914, 'Tio Hugo', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7915, 'Ibirapuitã', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7916, 'Ernestina', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7917, 'Água Santa', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7918, 'Tapejara', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7919, 'Caseiros', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7920, 'Santa Cecília do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7921, 'Ibiaçá', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7922, 'Esmeralda', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7923, 'Pinhal da Serra', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7924, 'Rondolândia', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7925, 'Aripuanã', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7926, 'Colniza', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7927, 'Pontes e Lacerda', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7928, 'Vale de São Domingos', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7929, 'Conquista D''oeste', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7930, 'Santo Antônio do Leste', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7931, 'Novo São Joaquim', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7932, 'Santa Cruz do Xingu', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7933, 'Luís Eduardo Magalhães', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7934, 'Colatina', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7935, 'Governador Lindenberg', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7936, 'Ipiranga de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7937, 'Ceres', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7938, 'Itajá', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7939, 'Lagoa Santa', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7940, 'Anápolis', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7941, 'Silvânia', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7942, 'Campo Limpo de Goiás', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7943, 'São Miguel dos Campos', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7944, 'Nobres', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7945, 'Santa Rita do Trivelato', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7946, 'Marcelândia', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7947, 'Nova Santa Helena', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7948, 'Itaúba', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7949, 'Várzea', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7950, 'Jundiá', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7951, 'Espírito Santo', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7952, 'Buenópolis', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7953, 'São Gabriel', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7954, 'Jaru', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7955, 'Governador Jorge Teixeira', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7956, 'Mirante da Serra', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7957, 'Feijó', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7958, 'Manoel Urbano', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7959, 'Santa Rosa do Purus', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7960, 'Sena Madureira', 31, 384)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7961, 'Coari', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7962, 'Caracaraí', 31, 382)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7963, 'Rorainópolis', 31, 382)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7964, 'Almeirim', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7965, 'Altamira', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7966, 'Serra do Navio', 31, 366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7967, 'Pedra Branca do Amapari', 31, 366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7968, 'Ferreira Gomes', 31, 366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7969, 'Porto Grande', 31, 366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7970, 'Laranjal do Jari', 31, 366)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7971, 'Monte do Carmo', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7972, 'Natividade', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7973, 'São Valério', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7974, 'São Raimundo do Doca Bezerra', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7975, 'São Roberto', 31, 364)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7976, 'Floriano', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7977, 'Caiçara do Rio do Vento', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7978, 'Gurjão', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7979, 'São José da Laje', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7980, 'Barra do Mendes', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7981, 'Souto Soares', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7982, 'Augusto de Lima', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7983, 'Diamantina', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7984, 'Santa Leopoldina', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7985, 'Santa Maria de Jetibá', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7986, 'Carmo', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7987, 'Duas Barras', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7988, 'Arealva', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7989, 'Iacanga', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7990, 'Iporanga', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7991, 'Ortigueira', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7992, 'Telêmaco Borba', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7993, 'Rio do Campo', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7994, 'Salete', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7995, 'Taió', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7996, 'Santa Maria', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7997, 'Sidrolândia', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7998, 'Guarantã do Norte', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (7999, 'Lucas do Rio Verde', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8000, 'Matupá', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8001, 'Nova Mutum', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8002, 'Peixoto de Azevedo', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8003, 'Sorriso', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8004, 'Brasília', 31, 378)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8005, 'São João da Fronteira', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8006, 'Glória', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8007, 'Prata', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8008, 'São Francisco', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8009, 'Flores', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8010, 'Paulista', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8011, 'São João', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8012, 'Prado', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8013, 'Gouveia', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8014, 'Ipanema', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8015, 'Machado', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8016, 'Prata', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8017, 'São Francisco', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8018, 'Alegre', 31, 379)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8019, 'Barbosa', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8020, 'Sales', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8021, 'São Francisco', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8022, 'São Vicente', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8023, 'São Francisco de Paula', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8024, 'Água Branca', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8025, 'São Pedro', 31, 359)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8026, 'Água Branca', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8027, 'Sertãozinho', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8028, 'Araçoiaba', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8029, 'Pinhão', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8030, 'Independência', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8031, 'Alto Alegre', 31, 382)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8032, 'Iguatu', 31, 373)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8033, 'Iracema', 31, 382)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8034, 'Ipueiras', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8035, 'Batalha', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8036, 'Amparo', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8037, 'Pedra Branca', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8038, 'Soledade', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8039, 'Cedro', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8040, 'Pacatuba', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8041, 'Milagres', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8042, 'Candeias', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8043, 'Aurora', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8044, 'Alto Alegre', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8045, 'Jardim', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8046, 'Piranhas', 31, 377)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8047, 'Granja', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8048, 'Itambé', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8049, 'Serrita', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8050, 'Jacaré dos Homens', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8051, 'Olho d''Água do Casado', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8052, 'Hidrolândia', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8053, 'Ocara', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8054, 'Belo Monte', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8055, 'Igaci', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8056, 'Nova Mamoré', 31, 385)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8057, 'Canutama', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8058, 'Tapauá', 31, 383)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8059, 'Aveiro', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8060, 'Inhangapi', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8061, 'Viseu', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8062, 'Lagoa da Confusão', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8063, 'Presidente Kennedy', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8064, 'Tupiratins', 31, 381)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8065, 'Avelino Lopes', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8066, 'Morro Cabeça no Tempo', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8067, 'Aracati', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8068, 'Ararendá', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8069, 'Banabuiú', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8070, 'Croatá', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8071, 'Ererê', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8072, 'Forquilha', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8073, 'Graça', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8074, 'Irauçuba', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8075, 'Itaitinga', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8076, 'Itapiúna', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8077, 'Jaguaribara', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8078, 'Madalena', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8079, 'Milhã', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8080, 'Nova Olinda', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8081, 'Palhano', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8082, 'Potiretama', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8083, 'Senador Sá', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8084, 'Tabuleiro do Norte', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8085, 'Varjota', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8086, 'Piancó', 31, 362)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8087, 'Ferreiros', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8088, 'Cacimbinhas', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8089, 'Campo Grande', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8090, 'Craíbas', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8091, 'Estrela de Alagoas', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8092, 'Girau do Ponciano', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8093, 'Maribondo', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8094, 'Poço das Trincheiras', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8095, 'São José da Tapera', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8096, 'Senador Rui Palmeira', 31, 367)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8097, 'Feira Nova', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8098, 'Gracho Cardoso', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8099, 'Japoatã', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8100, 'Pedra Mole', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8101, 'São Domingos', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8102, 'São Miguel do Aleixo', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8103, 'Aramari', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8104, 'Chorrochó', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8105, 'Itapicuru', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8106, 'Macururé', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8107, 'Paulo Afonso', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8108, 'Rio Real', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8109, 'Rodelas', 31, 380)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8110, 'Belmiro Braga', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8111, 'Monte Sião', 31, 374)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8112, 'Cantagalo', 31, 372)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8113, 'Anhumas', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8114, 'Campinas', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8115, 'Coroados', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8116, 'Corumbataí', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8117, 'Cosmorama', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8118, 'Franca', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8119, 'Garça', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8120, 'Itapira', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8121, 'Jardinópolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8122, 'Jarinu', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8123, 'Lucélia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8124, 'Mogi Guaçu', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8125, 'Nova Odessa', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8126, 'Paulistânia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8127, 'Pedreira', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8128, 'Penápolis', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8129, 'Piracicaba', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8130, 'Pirapozinho', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8131, 'Piratininga', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8132, 'Pontes Gestal', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8133, 'Praia Grande', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8134, 'Presidente Bernardes', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8135, 'Presidente Prudente', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8136, 'Riolândia', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8137, 'Santa Cruz da Conceição', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8138, 'São Bernardo do Campo', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8139, 'São João da Boa Vista', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8140, 'São Paulo', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8141, 'Vera Cruz', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8142, 'Votuporanga', 31, 369)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8143, 'Tijucas', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8144, 'Arroio Grande', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8145, 'Canguçu', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8146, 'Carlos Barbosa', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8147, 'Novo Hamburgo', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8148, 'Carlinda', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8149, 'Novo Mundo', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8150, 'Santa Terezinha', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8151, 'Almirante Tamandaré do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8152, 'Capão Bonito do Sul', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8153, 'São Francisco', 31, 368)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8154, 'Acopiara', 31, 365)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8155, 'Ipiranga do Norte', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8156, 'Itanhangá', 31, 376)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8157, 'Buenos Aires', 31, 361)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8158, 'Aroeiras do Itaim', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8159, 'Nazária', 31, 360)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8160, 'Mojuí Dos Campos', 31, 363)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8161, 'Pinto Bandeira', 31, 371)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8162, 'Balneário Rincão', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8163, 'Pescaria Brava', 31, 370)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8164, 'Paraíso das Águas', 31, 375)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8165, 'Tashigang', 33, 432)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8166, 'Dangchu', 33, 435)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8167, 'Tsangkha', 33, 420)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8168, 'Lajab', 33, 420)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8169, 'Drukgyegang', 33, 420)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8170, 'Khar', 33, 427)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8171, 'Chongshing', 33, 427)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8172, 'Yurung', 33, 427)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8173, 'Radi', 33, 432)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8174, 'Nangkor', 33, 431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8175, 'Phuentsholing', 33, 419)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8176, 'Bongo', 33, 419)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8177, 'Goshing', 33, 431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8178, 'Bardo', 33, 431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8179, 'Lumang', 33, 432)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8180, 'Thrimshing', 33, 432)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8181, 'Chabchha', 33, 419)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8182, 'Khiphisa', 33, 420)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8183, 'Nubi', 33, 434)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8184, 'Bjakteng', 33, 434)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8185, 'Kikhorthang', 33, 421)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8186, 'Beteni', 33, 421)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8187, 'Ruepaisa', 33, 435)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8188, 'Nahi', 33, 435)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8189, 'Trong', 33, 431)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8190, 'Mewang', 33, 426)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8191, 'Lingzhi Gewog', 33, 433)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8192, 'Gaborone', 35, 439)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8193, 'Kgatleng', 35, 443)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8194, 'Mahalapye', 35, 447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8195, 'Machaneng', 35, 447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8196, 'Serowe', 35, 447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8197, 'Palapye', 35, 447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8198, 'Tutume', 35, 447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8199, 'Tshabong', 35, 444)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8200, 'Ngamiland East', 35, 441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8201, 'Chobe', 35, 446)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8202, 'Gemsbok', 35, 444)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8203, 'South East', 35, 439)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8204, 'Barolong', 35, 438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8205, 'Ngwaketse Central', 35, 438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8206, 'Hukunsti', 35, 444)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8207, 'Bobonong', 35, 447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8208, 'Ngwaketse South', 35, 438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8209, 'Kweneng North', 35, 442)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8210, 'Tuli', 35, 447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8211, 'Lethlakane', 35, 447)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8212, 'Ngamiland West', 35, 441)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8213, 'Ngwaketse North', 35, 438)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8214, 'Kweneng South', 35, 442)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8215, 'Masungu', 35, 440)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8216, 'Ghanzi', 35, 445)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8217, 'Zhlobinski Rayon', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8218, 'Zhytkavitski Rayon', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8219, 'Zhabinkawski Rayon', 36, 460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8220, 'Zel’venskiy Rayon', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8221, 'Zavodski Rayon', 36, 457)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8222, 'Yel’ski Rayon', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8223, 'Voranawski Rayon', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8224, 'Valozhynski Rayon', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8225, 'Vawkavyski Rayon', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8226, 'Vitsyebski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8227, 'Vilyeyski Rayon', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8228, 'Vyetkawski Rayon', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8229, 'Vyerkhnyadzvinski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8230, 'Uzdzyenski Rayon', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8231, 'Ushatski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8232, 'Tsentral’ny Rayon', 36, 457)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8233, 'Talachynski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8234, 'Svislatski Rayon', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8235, 'Svietlahorsk District', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8236, 'Stolinski Rayon', 36, 460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8237, 'Stawbtsowski Rayon', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8238, 'Staradarozhski Rayon', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8239, 'Savyetski Rayon', 36, 457)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8240, 'Salihorsk District', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8241, 'Smarhonski Rayon', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8242, 'Smalyavitski Rayon', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8243, 'Slutski Rayon', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8244, 'Slonimskiy Rayon', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8245, 'Slawharadski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8246, 'Shumilinski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8247, 'Shklowski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8248, 'Shchuchynski Rayon', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8249, 'Sharkawshchynski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8250, 'Syennyenski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8251, 'Rasonski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8252, 'Rahachow District', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8253, 'Rechytski Rayon', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8254, 'Pukhavichy Raion', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8255, 'Pruzhanski Rayon', 36, 460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8256, 'Pastawski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8257, 'Polatski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8258, 'Pinski Rayon', 36, 460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8259, 'Pyetrykawski Rayon', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8260, 'Pyershamayski Rayon', 36, 457)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8261, 'Partyzanski Rayon', 36, 457)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8262, 'Astravyetski Rayon', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8263, 'Asipovitski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8264, 'Ashmyanski Rayon', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8265, 'Arshanski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8266, 'Kastrychnitski Rayon', 36, 457)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8267, 'Aktsyabrski Rayon', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8268, 'Novogrudskiy Rayon', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8269, 'Nyasvizhski Rayon', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8270, 'Narawlyanski Rayon', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8271, 'Myadzyel’ski Rayon', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8272, 'Mstsislawski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8273, 'Mazyrski Rayon', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8274, 'Mastowski Rayon', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8275, 'Maskowski Rayon', 36, 457)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8276, 'Maladzyechna District', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8277, 'Mahilyowski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8278, 'Myorski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8279, 'Minski Rayon', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8280, 'Malarytski Rayon', 36, 460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8281, 'Lyubanski Rayon', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8282, 'Lyakhavitski Rayon', 36, 460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8283, 'Luninyetski Rayon', 36, 460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8284, 'Loyewski Rayon', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8285, 'Lahoyski Rayon', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8286, 'Lyoznyenski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8287, 'Lidski Rayon', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8288, 'Lyepyel’ski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8289, 'Lyeninski Rayon', 36, 457)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8290, 'Lyel’chytski Rayon', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8291, 'Krupski Rayon', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8292, 'Kruhlyanski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8293, 'Krychawski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8294, 'Krasnapol’ski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8295, 'Kastsyukovitski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8296, 'Karmyanski Rayon', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8297, 'Karelitski Rayon', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8298, 'Kapyl’ski Rayon', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8299, 'Kobrynski Rayon', 36, 460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8300, 'Klimavitski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8301, 'Klichawski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8302, 'Klyetski Rayon', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8303, 'Kirawski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8304, 'Khoynitski Rayon', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8305, 'Khotsimski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8306, 'Kamyanyetski Rayon', 36, 460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8307, 'Kalinkavitski Rayon', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8308, 'Iwyewski Rayon', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8309, 'Ivatsevitski Rayon', 36, 460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8310, 'Ivanawski Rayon', 36, 460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8311, 'Grodnenskiy Rayon', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8312, 'Haradotski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8313, 'Horatski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8314, 'Homyel’ski Rayon', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8315, 'Hluski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8316, 'Hlybotski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8317, 'Hantsavitski Rayon', 36, 460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8318, 'Frunzyenski Rayon', 36, 457)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8319, 'Dzyarzhynski Rayon', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8320, 'Dzyatlawski Rayon', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8321, 'Dubrovyenski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8322, 'Drahichynski Rayon', 36, 460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8323, 'Dokshytski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8324, 'Dobrush District', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8325, 'Chervyen’ski Rayon', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8326, 'Cherykawski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8327, 'Chacherski Rayon', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8328, 'Chavuski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8329, 'Chashnitski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8330, 'Bykhawski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8331, 'Buda-Kashalyowski Rayon', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8332, 'Brestski Rayon', 36, 460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8333, 'Braslawski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8334, 'Brahinski Rayon', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8335, 'Barysawski Rayon', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8336, 'Babruyski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8337, 'Byeshankovitski Rayon', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8338, 'Byarozawski Rayon', 36, 460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8339, 'Byarezinski Rayon', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8340, 'Byerastavitski Rayon', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8341, 'Byalynitski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8342, 'Baranovichskiy Rayon', 36, 460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8343, 'Drybinski Rayon', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8344, 'Horad Hrodna', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8345, 'Uvarovichskiy Rayon', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8346, 'Horad Brest', 36, 460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8347, 'Horad Baranavichy', 36, 460)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8348, 'Horad Vitsyebsk', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8349, 'Horad Lyepyel’', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8350, 'Horad Navapolatsk', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8351, 'Horad Polatsk', 36, 454)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8352, 'Horad Homyel’', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8353, 'Dobrush City', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8354, 'Horad Zhlobin', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8355, 'Horad Kalinkavichy', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8356, 'Horad Mazyr', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8357, 'Rahachow City', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8358, 'Svietlahorsk City', 36, 459)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8359, 'Horad Vawkavysk', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8360, 'Horad Lida', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8361, 'Horad Navahrudak', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8362, 'Horad Slonim', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8363, 'Horad Smarhon’', 36, 458)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8364, 'Barysaw', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8365, 'Horad Vilyeyka', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8366, 'Horad Dzyarzhynsk', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8367, 'Horad Zaslawye', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8368, 'Maladzyechna City', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8369, 'Horad Slutsk', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8370, 'Salihorsk City', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8371, 'Mahilyow', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8372, 'Horad Asipovichy', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8373, 'Molodechnenskij Rajon', 36, 456)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8374, 'Kirawsk', 36, 455)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8375, 'Hopelchén', 37, 463)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8376, 'Dangriga', 37, 462)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8377, 'Abitibi-Témiscamingue', 38, 476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8378, 'Albert County', 38, 470)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8379, 'Alexander', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8380, 'Algoma', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8381, 'Alonsa', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8382, 'Annapolis County', 38, 472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8383, 'Antigonish County', 38, 472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8384, 'Argyle', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8385, 'Armstrong', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8386, 'Beaver County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8387, 'Birch Hills County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8388, 'Brant', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8389, 'Brazeau County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8390, 'Brokenhead', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8391, 'Bruce County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8392, 'Cape Breton County', 38, 472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8393, 'Capital Regional District', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8394, 'Cardston County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8395, 'Cariboo Regional District', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8396, 'Carleton County', 38, 470)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8397, 'Cartier', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8398, 'Central Coast Regional District', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8399, 'Charlotte County', 38, 470)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8400, 'Chatham-Kent', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8401, 'Clearwater County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8402, 'Cochrane District', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8403, 'Colchester', 38, 472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8404, 'Coldwell', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8405, 'Columbia-Shuswap Regional District', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8406, 'Cornwallis', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8407, 'Côte-Nord', 38, 476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8408, 'County of Athabasca No. 12', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8409, 'County of Barrhead No. 11', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8410, 'County of Camrose No. 22', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8411, 'County of Forty Mile No. 8', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8412, 'County of Grande Prairie No. 1', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8413, 'County of Lethbridge No. 26', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8414, 'County of Minburn No. 27', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8415, 'County of Newell No. 4', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8416, 'County of Paintearth No. 18', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8417, 'County of Stettler No. 6', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8418, 'County of St. Paul No. 19', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8419, 'County of Thorhild No. 7', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8420, 'County of Two Hills No. 21', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8421, 'County of Vermilion River No. 24', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8422, 'County of Warner No. 5', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8423, 'County of Wetaskiwin No. 10', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8424, 'Cowichan Valley Regional District', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8425, 'Cumberland County', 38, 472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8426, 'Cypress County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8427, 'Dauphin', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8428, 'De Salaberry', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8429, 'Digby County', 38, 472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8430, 'Dufferin County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8431, 'Dufferin', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8432, 'Durham', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8433, 'East St. Paul', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8434, 'Elgin County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8435, 'Elton', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8436, 'Essex County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8437, 'Estrie', 38, 476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8438, 'Ethelbert', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8439, 'Fisher', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8440, 'Flagstaff County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8441, 'Fraser Valley Regional District', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8442, 'Frontenac County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8443, 'Gilbert Plains', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8444, 'Gimli', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8445, 'Grahamdale', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8446, 'Grandview', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8447, 'Metro Vancouver Regional District', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8448, 'Grey County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8449, 'Grey', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8450, 'Guysborough County', 38, 472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8451, 'Haldimand County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8452, 'Haliburton County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8453, 'Halifax Regional Municipality', 38, 472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8454, 'Halton', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8455, 'Hamilton', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8456, 'Hamiota', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8457, 'Hanover', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8458, 'Hants', 38, 472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8459, 'Hastings County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8460, 'Headingley', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8461, 'Huron County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8462, 'Improvement District No. 12', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8463, 'Improvement District No. 13', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8464, 'Improvement District No. 24', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8465, 'Improvement District No. 25', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8466, 'Improvement District No. 4', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8467, 'Improvement District No. 9', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8468, 'Inverness County', 38, 472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8469, 'Jasper', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8470, 'Kananaskis Improvement District', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8471, 'Kawartha Lakes', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8472, 'Kelsey', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8473, 'Kenora District', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8474, 'Kent County', 38, 470)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8475, 'Kings County', 38, 475)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8476, 'Kings County', 38, 472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8477, 'Kings County', 38, 470)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8478, 'Kneehill County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8479, 'La Broquerie', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8480, 'Lac du Bonnet', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8481, 'Lacombe County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8482, 'Lac Ste. Anne County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8483, 'Lambton County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8484, 'Lamont County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8485, 'Lanark County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8486, 'Lanaudière', 38, 476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8487, 'Laurentides', 38, 476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8488, 'Laval', 38, 476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8489, 'Leduc County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8490, 'Lennox and Addington County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8491, 'Lorne', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8492, 'Louise', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8493, 'Lunenburg County', 38, 472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8494, 'Macdonald', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8495, 'Manitoulin District', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8496, 'Mauricie', 38, 476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8497, 'McCreary', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8498, 'Middlesex County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8499, 'Montcalm', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8500, 'Montérégie', 38, 476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8501, 'Montréal', 38, 476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8502, 'Morris', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8503, 'Mossey River', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8504, 'Mountain View County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8505, 'Municipal District of Acadia No. 34', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8506, 'Municipal District of Bighorn No. 8', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8507, 'Municipal District of Big Lakes No. 125', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8508, 'Municipal District of Bonnyville No. 87', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8509, 'Municipal District of Clear Hills No. 21', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8510, 'Municipal District of Fairview No. 136', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8511, 'Municipal District of Foothills No. 31', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8512, 'Municipal District of Greenview No. 16', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8513, 'Municipal District of Lesser Slave River No. 124', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8514, 'Municipal District of Northern Lights No. 22', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8515, 'Municipal District of Opportunity No. 17', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8516, 'Municipal District of Peace No. 135', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8517, 'Municipal District of Pincher Creek No. 9', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8518, 'Municipal District of Provost No. 52', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8519, 'Municipal District of Ranchland No. 66', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8520, 'Municipal District of Rocky View No. 44', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8521, 'Municipal District of Smoky River No. 130', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8522, 'Municipal District of Spirit River No. 133', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8523, 'Municipal District of Taber', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8524, 'Municipal District of Wainwright No. 61', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8525, 'Municipal District of Westlock No. 92', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8526, 'Municipal District of Willow Creek No. 26', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8527, 'District Municipality of Muskoka', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8528, 'Regional Municipality of Niagara', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8529, 'Nipissing District', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8530, 'Northern Sunrise County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8531, 'North Norfolk', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8532, 'Northumberland County', 38, 470)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8533, 'Northumberland County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8534, 'Outaouais', 38, 476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8535, 'Oxford County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8536, 'Parkland County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8537, 'Parry Sound District', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8538, 'Peace River Regional District', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8539, 'Peel', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8540, 'Pembina', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8541, 'Perth County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8542, 'Peterborough County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8543, 'Pictou County', 38, 472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8544, 'Piney', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8545, 'Pipestone', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8546, 'Ponoka County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8547, 'Portage la Prairie', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8548, 'Powell River Regional District', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8549, 'Prince County', 38, 475)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8550, 'Prince Edward County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8551, 'Queens County', 38, 475)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8552, 'Queens County', 38, 472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8553, 'Queens County', 38, 470)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8554, 'Rainy River District', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8555, 'Red Deer County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8556, 'Regional District of Alberni-Clayoquot', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8557, 'Regional District of Bulkley-Nechako', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8558, 'Regional District of Central Kootenay', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8559, 'Regional District of Central Okanagan', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8560, 'Regional District of East Kootenay', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8561, 'Regional District of Fraser-Fort George', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8562, 'Regional District of Kitimat-Stikine', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8563, 'Regional District of Kootenay-Boundary', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8564, 'Regional District of Mount Waddington', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8565, 'Regional District of Nanaimo', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8566, 'Regional District of North Okanagan', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8567, 'Regional District of Okanagan-Similkameen', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8568, 'Renfrew County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8569, 'Reynolds', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8570, 'Rhineland', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8571, 'Richmond County', 38, 472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8572, 'Ritchot', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8573, 'Cartwright–Roblin', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8574, 'Rockwood', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8575, 'Roland', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8576, 'Rosedale', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8577, 'Rossburn', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8578, 'Rosser', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8579, 'Saddle Hills County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8580, 'Saguenay/Lac-Saint-Jean', 38, 476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8581, 'Saint John County', 38, 470)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8582, 'Shelburne County', 38, 472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8583, 'Sifton', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8584, 'Simcoe County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8585, 'Skeena-Queen Charlotte Regional District', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8586, 'Smoky Lake County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8587, 'Special Area No. 2', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8588, 'Special Area No. 3', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8589, 'Special Area No. 4', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8590, 'Mackenzie County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8591, 'Springfield', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8592, 'Squamish-Lillooet Regional District', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8593, 'St. Andrews', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8594, 'Stanley', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8595, 'Starland County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8596, 'St. Clements', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8597, 'Ste. Anne', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8598, 'Ste. Rose', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8599, 'St. François Xavier', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8600, 'St. Laurent', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8601, 'Strathcona County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8602, 'Stuartburn', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8603, 'Sturgeon County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8604, 'Sudbury', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8605, 'Greater Sudbury', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8606, 'Sunbury County', 38, 470)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8607, 'Sunshine Coast Regional District', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8608, 'Taché', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8609, 'Thompson', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8610, 'Thompson-Nicola Regional District', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8611, 'Thunder Bay District', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8612, 'Timiskaming District', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8613, 'Killarney-Turtle Mountain', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8614, 'United Counties of Leeds and Grenville', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8615, 'Comtés unis de Prescott et Russell', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8616, 'United Counties of Stormont, Dundas and Glengarry', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8617, 'Victoria County', 38, 472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8618, 'Victoria', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8619, 'Victoria Beach', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8620, 'Vulcan County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8621, 'Regional Municipality of Waterloo', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8622, 'Wellington County', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8623, 'Westmorland County', 38, 470)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8624, 'West St. Paul', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8625, 'Wheatland County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8626, 'Whitehead', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8627, 'Whitemouth', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8628, 'Wood Buffalo', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8629, 'Woodlands', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8630, 'Woodlands County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8631, 'Yarmouth County', 38, 472)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8632, 'Yellowhead County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8633, 'York County', 38, 470)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8634, 'York', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8635, 'Bas-Saint-Laurent', 38, 476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8636, 'Capitale-Nationale', 38, 476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8637, 'Nord-du-Québec', 38, 476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8638, 'Gaspésie-Îles-de-la-Madeleine', 38, 476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8639, 'Chaudière-Appalaches', 38, 476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8640, 'Restigouche', 38, 470)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8641, 'Toronto county', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8642, 'Centre-du-Québec', 38, 476)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8643, 'Ottawa', 38, 474)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8644, 'Comox Valley Regional District', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8645, 'Northern Rockies Regional Municipality', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8646, 'Stikine Region', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8647, 'Strathcona Regional District', 38, 468)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8648, 'Gloucester County', 38, 470)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8649, 'Madawaska County', 38, 470)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8650, 'Victoria County', 38, 470)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8651, 'Yellowhead', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8652, 'Lac la Biche County', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8653, 'Crowsnest Pass', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8654, 'Calgary', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8655, 'Edmonton', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8656, 'Medicine Hat', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8657, 'Lethbridge', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8658, 'Norris Beach', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8659, 'St. Albert', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8660, 'Granum', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8661, 'Westlock', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8662, 'Edson', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8663, 'Boyle', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8664, 'Airdrie', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8665, 'Coaldale', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8666, 'Onoway', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8667, 'Irricana', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8668, 'Crossfield', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8669, 'Elk Point', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8670, 'Lloydminster', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8671, 'Czar', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8672, 'Camrose', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8673, 'Lacombe', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8674, 'Leduc', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8675, 'Spruce Grove', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8676, 'Brooks', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8677, 'Olds', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8678, 'St. Paul', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8679, 'Viking', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8680, 'Fort Saskatchewan', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8681, 'Grande Prairie', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8682, 'Vauxhall', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8683, 'Red Deer', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8684, 'Millet', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8685, 'Chestermere', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8686, 'Wetaskiwin', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8687, 'Beaumont', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8688, 'Trochu', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8689, 'Cowley', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8690, 'Cold Lake', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8691, 'Mayerthorpe', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8692, 'Swan Hills', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8693, 'Three Hills', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8694, 'Vegreville', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8695, 'Coronation', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8696, 'Redwater', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8697, 'Bon Accord', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8698, 'Two Hills', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8699, 'Falher', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8700, 'Picture Butte', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8701, 'Canmore', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8702, 'Stony Plain', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8703, 'Nanton', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8704, 'Sylvan Lake', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8705, 'Eckville', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8706, 'Bentley', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8707, 'Blackfalds', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8708, 'Hinton', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8709, 'Stavely', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8710, 'Didsbury', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8711, 'South View', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8712, 'Fort Macleod', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8713, 'Claresholm', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8714, 'Carstairs', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8715, 'Gibbons', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8716, 'Stettler', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8717, 'Oyen', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8718, 'Bow Island', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8719, 'Strathmore', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8720, 'Barrhead', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8721, 'Larkspur', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8722, 'Redcliff', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8723, 'Coalhurst', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8724, 'Ryley', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8725, 'Tofield', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8726, 'Beaverlodge', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8727, 'Cochrane', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8728, 'Delia', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8729, 'Vulcan', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8730, 'Provost', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8731, 'Munson', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8732, 'Bruderheim', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8733, 'Duchess', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8734, 'Willingdon', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8735, 'Castor', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8736, 'Wembley', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8737, 'Drumheller', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8738, 'Smoky Lake', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8739, 'Bashaw', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8740, 'Morrin', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8741, 'Devon', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8742, 'Calmar', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8743, 'Milk River', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8744, 'Drayton Valley', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8745, 'Vermilion', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8746, 'Halkirk', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8747, 'Rimbey', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8748, 'Whitecourt', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8749, 'Raymond', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8750, 'Valleyview', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8751, 'Mundare', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8752, 'Lamont', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8753, 'Parkland Beach', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8754, 'Taber', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8755, 'Ponoka', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8756, 'Big Valley', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8757, 'Morinville', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8758, 'Legal', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8759, 'High Prairie', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8760, 'Cremona', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8761, 'Banff', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8762, 'Fox Creek', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8763, 'Grande Cache', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8764, 'Athabasca', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8765, 'Slave Lake', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8766, 'Manning', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8767, 'High Level', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8768, 'Rainbow Lake', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8769, 'Sexsmith', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8770, 'Fairview', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8771, 'Grimshaw', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8772, 'Bowden', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8773, 'Hanna', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8774, 'Warburg', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8775, 'Sundre', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8776, 'Peace River', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8777, 'McLennan', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8778, 'Spirit River', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8779, 'Arrowwood', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8780, 'Innisfail', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8781, 'Penhold', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8782, 'High River', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8783, 'Bonnyville', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8784, 'Cardston', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8785, 'Pincher Creek', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8786, 'Bassano', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8787, 'Magrath', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8788, 'Turner Valley', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8789, 'Black Diamond', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8790, 'Gull Lake', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8791, 'Sunset Point', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8792, 'Okotoks', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8793, 'Sedgewick', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8794, 'Nakamun Park', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8795, 'Silver Sands', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8796, 'Bonnyville Beach', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8797, 'West Baptiste', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8798, 'Rocky Mountain House', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8799, 'Daysland', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8800, 'Killam', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8801, 'Argentia Beach', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8802, 'Hardisty', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8803, 'Wainwright', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8804, 'Ross Haven', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8805, 'Whispering Hills', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8806, 'Castle Island', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8807, 'Sunbreaker Cove', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8808, 'Rochon Sands', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8809, 'Ma-Me-O Beach', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8810, 'Silver Beach', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8811, 'Birch Cove', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8812, 'Horseshoe Bay', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8813, 'Seba Beach', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8814, 'Betula Beach', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8815, 'Rosemary', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8816, 'Point Alison', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8817, 'White Sands', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8818, 'Ghost Lake', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8819, 'Norglenwold', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8820, 'Birchcliff', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8821, 'Half Moon Bay', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8822, 'South Baptiste', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8823, 'Yellowstone', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8824, 'Val Quentin', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8825, 'West Cove', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8826, 'Lakeview', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8827, 'Nobleford', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8828, 'Kapasiwin', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8829, 'Sandy Beach', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8830, 'Golden Days', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8831, 'Carmangay', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8832, 'Sunrise Beach', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8833, 'Sundance Beach', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8834, 'Mewatha Beach', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8835, 'Poplar Bay', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8836, 'Crystal Springs', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8837, 'Itaska Beach', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8838, 'Waiparous', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8839, 'Coutts', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8840, 'Sunset Beach', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8841, 'Island Lake', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8842, 'Island Lake South', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8843, 'Bondiss', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8844, 'Donalda', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8845, 'Jarvis Bay', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8846, 'Pelican Narrows', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8847, 'Grandview', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8848, 'Burnstick Lake', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8849, 'Rockyford', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8850, 'Carbon', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8851, 'Acme', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8852, 'Linden', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8853, 'Hughenden', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8854, 'Vilna', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8855, 'Waskatenau', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8856, 'Myrnam', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8857, 'Bawlf', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8858, 'Barons', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8859, 'Lougheed', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8860, 'Hussar', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8861, 'Alberta Beach', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8862, 'Beiseker', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8863, 'Innisfree', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8864, 'Glendon', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8865, 'Wabamun', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8866, 'Amisk', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8867, 'Alliance', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8868, 'Foremost', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8869, 'Mannville', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8870, 'Paradise Valley', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8871, 'Stirling', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8872, 'Cereal', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8873, 'Youngstown', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8874, 'Veteran', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8875, 'Consort', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8876, 'Champion', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8877, 'Standard', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8878, 'Lomond', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8879, 'Milo', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8880, 'Gadsby', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8881, 'Botha', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8882, 'Rosalind', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8883, 'Ferintosh', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8884, 'Edberg', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8885, 'Bittern Lake', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8886, 'Hay Lakes', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8887, 'Breton', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8888, 'Warner', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8889, 'Thorsby', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8890, 'Clive', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8891, 'Barnwell', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8892, 'Alix', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8893, 'Dewberry', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8894, 'Holden', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8895, 'Kitscoty', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8896, 'Marwayne', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8897, 'Spring Lake', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8898, 'Andrew', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8899, 'Chipman', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8900, 'Clyde', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8901, 'Girouxville', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8902, 'Berwyn', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8903, 'Hythe', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8904, 'Donnelly', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8905, 'Rycroft', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8906, 'Elnora', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8907, 'Delburne', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8908, 'Empress', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8909, 'Nampa', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8910, 'Hines Creek', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8911, 'Longview', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8912, 'Glenwood', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8913, 'Hill Spring', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8914, 'Caroline', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8915, 'Forestburg', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8916, 'Heisler', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8917, 'Chauvin', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8918, 'Edgerton', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8919, 'Irma', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8920, 'Improvement District No. 349', 38, 467)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8921, 'Inuvik Region', 38, 471)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8922, 'North Slave Region', 38, 471)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8923, 'Sahtu Region', 38, 471)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8924, 'South Slave Region', 38, 471)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8925, 'Dehcho Region', 38, 471)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8926, 'Ellice-Archie', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8927, 'Wallace-Woodworth', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8928, 'Lakeshore', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8929, 'Prairie Lakes', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8930, 'Oakview', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8931, 'Riding Mountain West', 38, 469)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8932, 'Mbuji-Mayi City', 40, 489)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8933, 'Lubero', 40, 485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8934, 'Ville de Kisangani', 40, 481)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8935, 'Kabinda', 40, 503)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8936, 'Goma', 40, 485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8937, 'Beni', 40, 485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8938, 'Ango', 40, 495)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8939, 'Ville de Zongo', 40, 505)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8940, 'Bagata', 40, 498)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8941, 'Boma (city)', 40, 501)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8942, 'Kolwezi', 40, 496)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8943, 'Kinshasa rural', 40, 500)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8944, 'Kinshasa Urban', 40, 500)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8945, 'Nyirangongo', 40, 485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8946, 'Butembo', 40, 485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8947, 'Oicha', 40, 485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8948, 'Kananga City', 40, 488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8949, 'Tshikapa City', 40, 490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8950, 'Lubumbashi (city)', 40, 502)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8951, 'Lukunga District', 40, 500)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8952, 'Tshangu District', 40, 500)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8953, 'Kalemie Ville', 40, 482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8954, 'Kipushi Ville', 40, 502)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8955, 'Kongolo Ville', 40, 482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8956, 'Kambove Ville', 40, 502)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8957, 'Likasi', 40, 502)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8958, 'Bukavu', 40, 483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8959, 'Kalehe', 40, 483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8960, 'Mwenga', 40, 483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8961, 'Fizi', 40, 483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8962, 'Kabare', 40, 483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8963, 'Masisi Territory', 40, 485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8964, 'Rutshuru Territory', 40, 485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8965, 'Kasaji', 40, 496)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8966, 'Manono', 40, 482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8967, 'Funa', 40, 500)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8968, 'Mont Amba District', 40, 500)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8969, 'Niangara', 40, 492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8970, 'Malemba-Nkulu', 40, 493)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8971, 'Basankusu', 40, 494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8972, 'Kenge', 40, 499)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8973, 'Businga', 40, 504)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8974, 'Kole', 40, 484)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8975, 'Mbanza-Ngungu', 40, 501)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8976, 'Popokabaka', 40, 499)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8977, 'Punia', 40, 487)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8978, 'Shabunda', 40, 483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8979, 'Ariwara', 40, 491)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8980, 'Mambasa', 40, 491)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8981, 'Ingende', 40, 494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8982, 'Songololo', 40, 501)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8983, 'Yahuma', 40, 481)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8984, 'Bangu', 40, 501)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8985, 'Bafwasende', 40, 481)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8986, 'Bambesa', 40, 495)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8987, 'Banalia', 40, 481)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8988, 'Boende', 40, 480)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8989, 'Bokungu', 40, 480)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8990, 'Dekese', 40, 490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8991, 'Demba', 40, 488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8992, 'Dibaya', 40, 488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8993, 'Dibaya-Lubwe', 40, 498)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8994, 'Bolomba', 40, 494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8995, 'Bomongo', 40, 494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8996, 'Bondo', 40, 495)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8997, 'Bongandanga', 40, 486)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8998, 'Bosobolo', 40, 504)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (8999, 'Budjala', 40, 505)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9000, 'Bukama', 40, 493)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9001, 'Bulungu', 40, 498)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9002, 'Bumba', 40, 486)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9003, 'Gemena', 40, 505)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9004, 'Gungu', 40, 498)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9005, 'Idiofa', 40, 498)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9006, 'Luilu', 40, 503)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9007, 'Luiza', 40, 488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9008, 'Ikela', 40, 480)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9009, 'Ilebo', 40, 490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9010, 'Ingbokolo', 40, 491)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9011, 'Isiro', 40, 492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9012, 'Kabalo', 40, 482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9013, 'Kabambare', 40, 487)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9014, 'Kabeya-Kamwanga', 40, 489)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9015, 'Kamina', 40, 493)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9016, 'Kamituga', 40, 483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9017, 'Kamonia', 40, 490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9018, 'Kaniama', 40, 493)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9019, 'Kaoze', 40, 482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9020, 'Kapanga', 40, 496)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9021, 'Kasangulu', 40, 501)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9022, 'Kasenga', 40, 502)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9023, 'Kasongo', 40, 487)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9024, 'Kasongo-Lunda', 40, 499)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9025, 'Katako-Kombe', 40, 484)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9026, 'Katanda', 40, 489)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9027, 'Kazumba', 40, 488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9028, 'Kibombo', 40, 487)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9029, 'Walikale', 40, 485)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9030, 'Walungu', 40, 483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9031, 'Wamba', 40, 492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9032, 'Yakoma', 40, 504)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9033, 'Yangambi', 40, 481)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9034, 'Ngandajika', 40, 503)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9035, 'Kinshasa', 40, 500)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9036, 'Basoko', 40, 481)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9037, 'Befale', 40, 480)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9038, 'Bena-Dibele', 40, 484)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9039, 'Dingila', 40, 495)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9040, 'Djolu', 40, 480)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9041, 'Djugu', 40, 491)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9042, 'Dungu', 40, 492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9043, 'Faradje', 40, 492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9044, 'Feshi', 40, 499)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9045, 'Pangi', 40, 487)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9046, 'Poko', 40, 495)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9047, 'Kungu', 40, 505)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9048, 'Kutu', 40, 497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9049, 'Kwamouth', 40, 497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9050, 'Libenge', 40, 505)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9051, 'Lisala', 40, 486)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9052, 'Matadi', 40, 501)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9053, 'Bandundu', 40, 498)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9054, 'Lomela', 40, 484)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9055, 'Lubao', 40, 503)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9056, 'Lubefu', 40, 484)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9057, 'Lubudi', 40, 496)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9058, 'Lubutu', 40, 487)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9059, 'Luebo', 40, 490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9060, 'Mongwalu', 40, 491)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9061, 'Namoya', 40, 487)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9062, 'Luozi', 40, 501)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9063, 'Lupatapata', 40, 489)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9064, 'Lusambo', 40, 484)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9065, 'Madimba', 40, 501)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9066, 'Moanda', 40, 501)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9067, 'Moba', 40, 482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9068, 'Mobayi-Mbongo', 40, 504)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9069, 'Monkoto', 40, 480)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9070, 'Mushie', 40, 497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9071, 'Mutshatsha', 40, 496)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9072, 'Mweka', 40, 490)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9073, 'Baraka', 40, 483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9074, 'Buta', 40, 495)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9075, 'Dilolo', 40, 496)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9076, 'Dimbelenge', 40, 488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9077, 'Kailo', 40, 487)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9078, 'Aba', 40, 492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9079, 'Aketi', 40, 495)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9080, 'Mbandaka', 40, 494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9081, 'Mangai', 40, 498)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9082, 'Masi-Manimba', 40, 498)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9083, 'Nyunzu', 40, 482)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9084, 'Mitwaba', 40, 502)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9085, 'Oshwe', 40, 497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9086, 'Tshimbulu', 40, 488)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9087, 'Kindu', 40, 487)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9088, 'Yumbi', 40, 497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9089, 'Inkisi', 40, 501)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9090, 'Inongo', 40, 497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9091, 'Irumu', 40, 491)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9092, 'Kabongo', 40, 493)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9093, 'Kahemba', 40, 499)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9094, 'Lukalaba', 40, 489)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9095, 'Pweto', 40, 502)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9096, 'Rungu', 40, 492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9097, 'Sakania', 40, 502)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9098, 'Sandoa', 40, 496)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9099, 'Kiri', 40, 497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9100, 'Nioki', 40, 497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9101, 'Tshumbe', 40, 484)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9102, 'Ubundu', 40, 481)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9103, 'Uvira', 40, 483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9104, 'Bunia', 40, 491)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9105, 'Mwene-Ditu', 40, 503)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9106, 'Makanza', 40, 494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9107, 'Kalima', 40, 487)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9108, 'Gbadolite', 40, 504)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9109, 'Lukula', 40, 501)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9110, 'Tshilenge', 40, 489)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9111, 'Aru', 40, 491)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9112, 'Kikwit', 40, 498)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9113, 'Watsa', 40, 492)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9114, 'Bikoro', 40, 494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9115, 'Bolobo', 40, 497)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9116, 'Idjwi', 40, 483)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9117, 'Isangi', 40, 481)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9118, 'Kamiji', 40, 503)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9119, 'Mahagi', 40, 491)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9120, 'Seke-Banza', 40, 501)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9121, 'Kimvula', 40, 501)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9122, 'Lodja', 40, 484)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9123, 'Lukolela', 40, 494)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9124, 'Miabi', 40, 489)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9125, 'Opala', 40, 481)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9126, 'Tshela', 40, 501)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9127, 'Carnot', 41, 520)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9128, 'Baboua Sub-Prefecture', 41, 517)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9129, 'Ouango', 41, 508)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9130, 'Gambo', 41, 508)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9131, 'Kembe', 41, 511)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9132, 'Mobaye', 41, 511)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9133, 'Zangba', 41, 511)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9134, 'Kouango', 41, 507)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9135, 'Ndjoukou', 41, 519)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9136, 'Damara', 41, 516)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9137, 'Bimbo Sub-Prefecture', 41, 516)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9138, 'Bangui Sub-Prefecture', 41, 522)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9139, 'Mongoumba', 41, 518)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9140, 'Nola', 41, 513)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9141, 'Bayanga', 41, 513)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9142, 'Bambari', 41, 507)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9143, 'Bangassou', 41, 508)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9144, 'Alindao', 41, 511)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9145, 'Ippy', 41, 507)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9146, 'Mbaiki', 41, 518)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9147, 'Mingala', 41, 511)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9148, 'Bouar Sub-Prefecture', 41, 517)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9149, 'Baoro Sub-Prefecture', 41, 517)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9150, 'Bossangoa', 41, 515)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9151, 'Yaloke Sub-Prefecture', 41, 516)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9152, 'Grimari', 41, 507)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9153, 'Sibut', 41, 519)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9154, 'Berberati', 41, 520)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9155, 'Bakouma', 41, 508)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9156, 'Bossembele Sub-Prefecture', 41, 516)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9157, 'Gamboula', 41, 520)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9158, 'Gadzi', 41, 520)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9159, 'Boali Sub-Prefecture', 41, 516)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9160, 'Bozoum Sub-Prefecture', 41, 514)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9161, 'Birao', 41, 506)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9162, 'Bamingui', 41, 512)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9163, 'Ndélé', 41, 512)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9164, 'Bambouti', 41, 509)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9165, 'Djéma', 41, 509)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9166, 'Obo', 41, 509)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9167, 'Zémio', 41, 509)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9168, 'Bria', 41, 510)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9169, 'Ouadda', 41, 510)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9170, 'Boda', 41, 518)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9171, 'Rafai', 41, 508)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9172, 'Kaga-Bandoro', 41, 521)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9173, 'Mbrès', 41, 521)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9174, 'Bakala', 41, 507)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9175, 'Batangafo', 41, 515)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9176, 'Bambio', 41, 513)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9177, 'Yalinga', 41, 510)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9178, 'Amada-Gaza', 41, 520)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9179, 'Bouca', 41, 515)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9180, 'Kabo', 41, 515)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9181, 'Markounda', 41, 515)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9182, 'Nana-Bakassa', 41, 515)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9183, 'Nangha Boguila', 41, 515)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9184, 'Abba', 41, 517)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9185, 'Bossemtélé', 41, 514)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9186, 'Dékoa', 41, 519)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9187, 'Mala', 41, 519)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9188, 'Boganangone', 41, 518)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9189, 'Boganda', 41, 518)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9190, 'Dédé-Mokouba', 41, 520)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9191, 'Sosso-Nakombo', 41, 520)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9192, 'Bogangolo', 41, 516)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9193, 'Bocaranga', 41, 514)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9194, 'Koui', 41, 514)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9195, 'Ngaoundaye', 41, 514)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9196, 'Paoua', 41, 514)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9197, 'Ouanda-Djallé', 41, 506)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9198, 'Mindouli', 42, 524)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9199, 'Mayama', 42, 524)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9200, 'Souanke', 42, 523)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9201, 'Sembe', 42, 523)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9202, 'Ouesso', 42, 523)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9203, 'Dongou', 42, 527)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9204, 'Impfondo', 42, 527)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9205, 'Mossaka', 42, 530)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9206, 'Gamboma', 42, 525)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9207, 'Djambala', 42, 525)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9208, 'Ngabe', 42, 524)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9209, 'Kinkala', 42, 524)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9210, 'Boko', 42, 524)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9211, 'Boundji', 42, 530)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9212, 'Loukolela', 42, 530)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9213, 'Makoua', 42, 530)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9214, 'Owando', 42, 530)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9215, 'Madingo-Kayes', 42, 529)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9216, 'Kakamoeka', 42, 529)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9217, 'Mvouti', 42, 529)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9218, 'Bambama', 42, 528)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9219, 'Komono', 42, 528)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9220, 'Sibiti', 42, 528)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9221, 'Zanaga', 42, 528)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9222, 'Divenie', 42, 526)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9223, 'Kibangou', 42, 526)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9224, 'Kimongo', 42, 526)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9225, 'Louvakou', 42, 526)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9226, 'Mayoko', 42, 526)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9227, 'Abala', 42, 525)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9228, 'Lekana', 42, 525)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9229, 'Kindamba', 42, 524)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9230, 'Okoyo', 42, 533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9231, 'Mouyondzi', 42, 531)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9232, 'Madingou', 42, 531)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9233, 'Nkayi', 42, 531)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9234, 'Loudima', 42, 531)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9235, 'Pointe-Noire', 42, 534)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9236, 'Enyelle', 42, 527)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9237, 'Bouanila', 42, 527)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9238, 'Mbon', 42, 525)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9239, 'Kelle', 42, 533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9240, 'Mfouati', 42, 531)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9241, 'Mbomo', 42, 533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9242, 'Pikounda', 42, 523)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9243, 'Etoumbi', 42, 533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9244, 'Mbama', 42, 533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9245, 'Ngbala', 42, 523)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9246, 'Allembe', 42, 525)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9247, 'Ngo', 42, 525)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9248, 'Mbinda', 42, 526)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9249, 'Ewo', 42, 533)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9250, 'Oyo', 42, 530)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9251, 'Nzambi', 42, 529)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9252, 'Louingui', 42, 524)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9253, 'Ntokou', 42, 530)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9254, 'Hinda', 42, 529)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9255, 'Boko-Songho', 42, 531)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9256, 'Kimba', 42, 524)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9257, 'Epena', 42, 527)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9258, 'Moungoundou-Sud', 42, 526)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9259, 'Makotimpoko', 42, 525)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9260, 'Ngoko', 42, 530)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9261, 'Nyanga', 42, 526)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9262, 'Banba', 42, 526)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9263, 'Londela-Kayes', 42, 526)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9264, 'Goma-Tsetse', 42, 524)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9265, 'Ollombo', 42, 525)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9266, 'Ongogni', 42, 525)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9267, 'Mpouya', 42, 525)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9268, 'Brazzaville', 42, 532)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9269, 'Mayeye', 42, 528)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9270, 'Ignie', 42, 524)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9271, 'Tsiaki', 42, 531)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9272, 'Vindza', 42, 524)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9273, 'Kingoue', 42, 531)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9274, 'Loumo', 42, 524)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9275, 'Yamba', 42, 531)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9276, 'Mokeko', 42, 523)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9277, 'Mabombo', 42, 531)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9278, 'Mbandza-Ndounga', 42, 524)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9279, 'Moutamba', 42, 526)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9280, 'Moungoundou-Nord', 42, 526)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9281, 'Tchiamba-Nzassi', 42, 529)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9282, 'Yaya', 42, 526)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9283, 'Makabana', 42, 526)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9284, 'Betou', 42, 527)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9285, 'Tchikapika', 42, 530)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9286, 'Liranga', 42, 527)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9287, 'Vallemaggia District', 43, 540)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9288, 'Bezirk Thierstein', 43, 542)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9289, 'Wahlkreis Sarganserland', 43, 545)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9290, 'Raron District', 43, 538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9291, 'Bezirk Meilen', 43, 535)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9292, 'Martigny District', 43, 538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9293, 'Glâne District', 43, 554)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9294, 'Bezirk Andelfingen', 43, 535)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9295, 'Bezirk Gäu', 43, 542)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9296, 'Appenzell Inner Rhodes', 43, 559)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9297, 'Delémont District', 43, 550)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9298, 'Sion District', 43, 538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9299, 'Bezirk Zofingen', 43, 560)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9300, 'Glarus', 43, 552)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9301, 'Bezirk Waldenburg', 43, 557)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9302, 'Locarno District', 43, 540)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9303, 'Bezirk Uster', 43, 535)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9304, 'Leuk District', 43, 538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9305, 'Broye District', 43, 554)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9306, 'Riviera District', 43, 540)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9307, 'Bezirk Dietikon', 43, 535)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9308, 'Nidwalden', 43, 547)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9309, 'Basel-Stadt', 43, 556)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9310, 'Goms District', 43, 538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9311, 'Sarine District', 43, 554)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9312, 'Entremont District', 43, 538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9313, 'Bezirk Schleitheim', 43, 544)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9314, 'Wahlkreis St. Gallen', 43, 545)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9315, 'Lugano District', 43, 540)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9316, 'Bezirk Kulm', 43, 560)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9317, 'Bezirk Bremgarten', 43, 560)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9318, 'Bezirk Schwyz', 43, 543)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9319, 'Porrentruy District', 43, 550)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9320, 'Bezirk Solothurn', 43, 542)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9321, 'Bezirk March', 43, 543)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9322, 'Geneva', 43, 553)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9323, 'Blenio District', 43, 540)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9324, 'Bezirk Zurzach', 43, 560)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9325, 'Franches-Montagnes District', 43, 550)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9326, 'Bezirk Stein', 43, 544)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9327, 'Sierre District', 43, 538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9328, 'Gruyère District', 43, 554)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9329, 'Bezirk Hinwil', 43, 535)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9330, 'Bezirk Zürich', 43, 535)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9331, 'Uri', 43, 539)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9332, 'Bezirk Lenzburg', 43, 560)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9333, 'Zug', 43, 536)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9334, 'Bezirk Winterthur', 43, 535)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9335, 'Le Locle District', 43, 548)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9336, 'Bezirk Gersau', 43, 543)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9337, 'Val-de-Ruz District', 43, 548)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9338, 'Bezirk Baden', 43, 560)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9339, 'Bezirk Oberklettgau', 43, 544)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9340, 'Obwalden', 43, 546)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9341, 'Bezirk Affoltern', 43, 535)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9342, 'See District', 43, 554)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9343, 'Brig District', 43, 538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9344, 'Bezirk Sissach', 43, 557)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9345, 'Boudry District', 43, 548)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9346, 'Bezirk Brugg', 43, 560)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9347, 'Bezirk Lebern', 43, 542)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9348, 'Bezirk Mittelland', 43, 558)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9349, 'La Chaux-de-Fonds District', 43, 548)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9350, 'Saint-Maurice District', 43, 538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9351, 'Bezirk Laufen', 43, 557)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9352, 'Val-de-Travers District', 43, 548)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9353, 'Bezirk Unterklettgau', 43, 544)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9354, 'Bezirk Hinterland', 43, 558)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9355, 'Wahlkreis Rorschach', 43, 545)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9356, 'Bezirk Küssnacht', 43, 543)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9357, 'Wahlkreis Wil', 43, 545)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9358, 'Bezirk Bucheggberg', 43, 542)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9359, 'Bezirk Arlesheim', 43, 557)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9360, 'Visp District', 43, 538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9361, 'Monthey District', 43, 538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9362, 'Bezirk Aarau', 43, 560)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9363, 'Bezirk Horgen', 43, 535)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9364, 'Bezirk Höfe', 43, 543)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9365, 'Conthey District', 43, 538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9366, 'Bezirk Pfäffikon', 43, 535)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9367, 'Bezirk Rheinfelden', 43, 560)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9368, 'Bezirk Liestal', 43, 557)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9369, 'Morges District', 43, 537)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9370, 'Bezirk Laufenburg', 43, 560)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9371, 'Veveyse District', 43, 554)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9372, 'Bezirk Vorderland', 43, 558)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9373, 'Bezirk Dielsdorf', 43, 535)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9374, 'Lausanne District', 43, 537)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9375, 'Bezirk Bülach', 43, 535)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9376, 'Bezirk Thal', 43, 542)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9377, 'Bellinzona District', 43, 540)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9378, 'Hérens District', 43, 538)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9379, 'Bezirk Gösgen', 43, 542)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9380, 'Bezirk Einsiedeln', 43, 543)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9381, 'Wahlkreis Werdenberg', 43, 545)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9382, 'Bezirk Schaffhausen', 43, 544)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9383, 'Bezirk Reiat', 43, 544)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9384, 'Bezirk Wasseramt', 43, 542)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9385, 'Neuchâtel District', 43, 548)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9386, 'Bezirk Olten', 43, 542)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9387, 'Mendrisio District', 43, 540)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9388, 'Aigle District', 43, 537)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9389, 'Sense District', 43, 554)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9390, 'Bezirk Muri', 43, 560)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9391, 'Leventina District', 43, 540)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9392, 'Bezirk Dorneck', 43, 542)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9393, 'Wahlkreis Rheintal', 43, 545)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9394, 'Wahlkreis Toggenburg', 43, 545)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9395, 'Broye-Vully District', 43, 537)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9396, 'Gros-de-Vaud District', 43, 537)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9397, 'Jura-Nord vaudois District', 43, 537)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9398, 'Lavaux-Oron District', 43, 537)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9399, 'Nyon District', 43, 537)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9400, 'Ouest Lausannois District', 43, 537)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9401, 'Riviera-Pays-d''Enhaut District', 43, 537)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9402, 'Wahlkreis See-Gaster', 43, 545)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9403, 'Emmental District', 43, 555)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9404, 'Obersimmental-Saanen District', 43, 555)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9405, 'Frutigen-Niedersimmental District', 43, 555)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9406, 'Biel/Bienne District', 43, 555)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9407, 'Seeland District', 43, 555)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9408, 'Thun District', 43, 555)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9409, 'Interlaken-Oberhasli District', 43, 555)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9410, 'Jura bernois', 43, 555)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9411, 'Oberaargau', 43, 555)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9412, 'Bern-Mittelland District', 43, 555)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9413, 'Bezirk Frauenfeld', 43, 541)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9414, 'Bezirk Arbon', 43, 541)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9415, 'Bezirk Münchwilen', 43, 541)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9416, 'Bezirk Kreuzlingen', 43, 541)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9417, 'Bezirk Weinfelden', 43, 541)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9418, 'Lucerne-Land District', 43, 549)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9419, 'Lucerne-Stadt District', 43, 549)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9420, 'Entlebuch District', 43, 549)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9421, 'Hochdorf District', 43, 549)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9422, 'Sursee District', 43, 549)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9423, 'Willisau District', 43, 549)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9424, 'Region Surselva', 43, 551)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9425, 'Region Viamala', 43, 551)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9426, 'Region Engiadina Bassa / Val Müstair', 43, 551)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9427, 'Region Plessur', 43, 551)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9428, 'Region Imboden', 43, 551)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9429, 'Region Albula', 43, 551)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9430, 'Region Prättigau / Davos', 43, 551)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9431, 'Region Landquart', 43, 551)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9432, 'Region Bernina', 43, 551)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9433, 'Region Moesa', 43, 551)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9434, 'Region Maloja', 43, 551)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9435, 'Bafing', 44, 572)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9436, 'Gbôklé', 44, 562)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9437, 'Nawa', 44, 562)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9438, 'San-Pédro', 44, 562)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9439, 'Indénié-Djuablin', 44, 563)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9440, 'Sud-Comoé', 44, 563)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9441, 'Folon', 44, 564)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9442, 'Kabadougou', 44, 564)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9443, 'Gôh', 44, 565)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9444, 'Lôh-Djiboua', 44, 565)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9445, 'Bélier', 44, 566)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9446, 'Iffou', 44, 566)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9447, 'Moronou', 44, 566)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9448, 'N''Zi', 44, 566)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9449, 'Agnéby-Tiassa', 44, 567)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9450, 'Grands-Ponts', 44, 567)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9451, 'Cavally', 44, 568)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9452, 'Guémon', 44, 568)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9453, 'Tonkpi', 44, 568)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9454, 'Haut-Sassandra', 44, 569)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9455, 'Marahoué', 44, 569)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9456, 'Bagoué', 44, 570)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9457, 'Poro', 44, 570)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9458, 'Gbêkê', 44, 571)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9459, 'Hambol', 44, 571)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9460, 'Béré', 44, 572)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9461, 'Worodougou', 44, 572)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9462, 'Bounkani', 44, 573)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9463, 'Gontougo', 44, 573)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9464, 'Tchologo', 44, 570)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9465, 'Région de La Mé', 44, 567)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9466, 'Yamoussoukro', 44, 561)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9467, 'Abidjan', 44, 574)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9468, 'Tautu District', 45, 575)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9469, 'Vaitupa District', 45, 575)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9470, 'Anaunga District', 45, 575)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9471, 'Avanui District', 45, 575)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9472, 'Amuri District', 45, 575)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9473, 'Arutanga District', 45, 575)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9474, 'Vaipae District', 45, 575)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9475, 'Provincia de Valparaíso', 46, 586)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9476, 'Provincia de Valdivia', 46, 600)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9477, 'Provincia de Última Esperanza', 46, 598)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9478, 'Provincia de Tocopilla', 46, 596)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9479, 'Provincia de Tierra del Fuego', 46, 598)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9480, 'Provincia de Talca', 46, 589)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9481, 'Provincia de Talagante', 46, 588)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9482, 'Provincia de Santiago', 46, 588)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9483, 'Provincia de San Felipe de Aconcagua', 46, 586)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9484, 'San Antonio Province', 46, 586)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9485, 'Provincia de Quillota', 46, 586)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9486, 'Petorca Province', 46, 586)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9487, 'Provincia de Osorno', 46, 590)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9488, 'Provincia de Melipilla', 46, 588)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9489, 'Provincia de Malleco', 46, 595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9490, 'Provincia de Maipo', 46, 588)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9491, 'Provincia de Magallanes', 46, 598)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9492, 'Provincia de Los Andes', 46, 586)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9493, 'Provincia de Llanquihue', 46, 590)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9494, 'Provincia de Linares', 46, 589)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9495, 'Provincia de Limarí', 46, 592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9496, 'Provincia de Iquique', 46, 587)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9497, 'Provincia de Huasco', 46, 594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9498, 'Provincia General Carrera', 46, 597)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9499, 'Provincia de Elqui', 46, 592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9500, 'Provincia de El Loa', 46, 596)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9501, 'Provincia de Curicó', 46, 589)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9502, 'Provincia de Copiapó', 46, 594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9503, 'Provincia de Concepción', 46, 593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9504, 'Provincia de Colchagua', 46, 591)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9505, 'Provincia de Choapa', 46, 592)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9506, 'Provincia de Chiloé', 46, 590)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9507, 'Provincia de Chañaral', 46, 594)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9508, 'Provincia de Cautín', 46, 595)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9509, 'Provincia Capitán Prat', 46, 597)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9510, 'Provincia de Cachapoal', 46, 591)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9511, 'Provincia de Biobío', 46, 593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9512, 'Provincia de Arica', 46, 599)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9513, 'Provincia de Arauco', 46, 593)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9514, 'Provincia de Antofagasta', 46, 596)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9515, 'Provincia de Aisén', 46, 597)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9516, 'Provincia de Isla de Pascua', 46, 586)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9517, 'Provincia Antártica Chilena', 46, 598)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9518, 'Provincia del Ranco', 46, 600)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9519, 'Provincia de Parinacota', 46, 599)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9520, 'Provincia del Tamarugal', 46, 587)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9521, 'Provincia de Marga Marga', 46, 586)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9522, 'Provincia de Cardenal Caro', 46, 591)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9523, 'Provincia de Cauquenes', 46, 589)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9524, 'Provincia de Palena', 46, 590)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9525, 'Provincia de Coyhaique', 46, 597)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9526, 'Provincia de Cordillera', 46, 588)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9527, 'Provincia de Chacabuco', 46, 588)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9528, 'Provincia de Punilla', 46, 601)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9529, 'Provincia de Itata', 46, 601)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9530, 'Provincia de Diguillín', 46, 601)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9531, 'Wouri', 47, 607)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9532, 'Sanaga-Maritime', 47, 607)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9533, 'Nyong-et-Soo', 47, 610)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9534, 'Nyong-et-Mfoumou', 47, 610)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9535, 'Département du Nyong-et-Kéllé', 47, 610)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9536, 'Nkam', 47, 607)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9537, 'Ndian Division', 47, 602)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9538, 'Département du Ndé', 47, 604)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9539, 'Département du Mungo', 47, 607)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9540, 'Momo Division', 47, 605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9541, 'Mifi', 47, 604)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9542, 'Mezam Division', 47, 605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9543, 'Metchum Division', 47, 605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9544, 'Département de la Ménoua', 47, 604)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9545, 'Meme Division', 47, 602)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9546, 'Département du Mayo Danaï', 47, 608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9547, 'Manyu Division', 47, 602)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9548, 'Département du Lom-et-Djérem', 47, 609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9549, 'Logone-et-Chari', 47, 608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9550, 'Département de la Lékié', 47, 610)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9551, 'Département de l''Océan', 47, 603)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9552, 'Département de la Kadeï', 47, 609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9553, 'Departement du Haut-Nyong', 47, 609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9554, 'Haut-Nkam', 47, 604)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9555, 'Haute-Sanaga', 47, 610)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9556, 'Fako Division', 47, 602)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9557, 'Donga and Mantung Division', 47, 605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9558, 'Dja-et-Lobo', 47, 603)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9559, 'Département du Diamaré', 47, 608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9560, 'Bui Division', 47, 605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9561, 'Boumba-Ngoko', 47, 609)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9562, 'Département de la Bénoué', 47, 606)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9563, 'Bamboutos', 47, 604)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9564, 'Djerem', 47, 611)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9565, 'Faro-et-Deo', 47, 611)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9566, 'Vina', 47, 611)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9567, 'Mbam-et-Kim', 47, 610)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9568, 'Méfou-et-Afamba', 47, 610)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9569, 'Departement du Mayo-Kani', 47, 608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9570, 'Mbere Department', 47, 611)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9571, 'Koupé-Manengouba', 47, 602)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9572, 'Mfoundi', 47, 610)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9573, 'Mayo-Rey', 47, 606)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9574, 'Mayo-Louti', 47, 606)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9575, 'Mefou-et-Akono', 47, 610)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9576, 'Mayo-Banyo', 47, 611)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9577, 'Mbam-Et-Inoubou', 47, 610)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9578, 'Mayo-Sava', 47, 608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9579, 'Mayo-Tsanaga', 47, 608)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9580, 'Boyo', 47, 605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9581, 'Hauts-Plateaux', 47, 604)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9582, 'Koung-Khi', 47, 604)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9583, 'Noun', 47, 604)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9584, 'Lebialem', 47, 602)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9585, 'Faro Department', 47, 606)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9586, 'Mvila', 47, 603)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9587, 'Vallée-du-Ntem', 47, 603)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9588, 'Ngo-Ketunjia', 47, 605)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9589, 'Yushu Zangzu Zizhizhou', 48, 613)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9590, 'Rikaze Diqu', 48, 612)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9591, 'Shannan Diqu', 48, 612)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9592, 'Qamdo Shi', 48, 612)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9593, 'Nyingchi Prefecture', 48, 612)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9594, 'Nujiang Lisuzu Zizhizhou', 48, 616)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9595, 'Ngari Diqu', 48, 612)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9596, 'Nagqu Shi', 48, 612)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9597, 'Lhasa Shi', 48, 612)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9598, 'Qizilsu', 48, 614)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9599, 'Kaxgar Diqu', 48, 614)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9600, 'Jiuquan Shi', 48, 634)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9601, 'Jiayuguan Shi', 48, 634)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9602, 'Xoten Wilayiti', 48, 614)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9603, 'Haixi Mengguzu Zangzu Zizhizhou', 48, 613)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9604, 'Golog Tibetan Autonomous Prefecture', 48, 613)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9605, 'Dêqên Tibetan Autonomous Prefecture', 48, 616)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9606, 'Dehong Daizu Jingpozu Zizhizhou', 48, 616)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9607, 'Baoshan Shi', 48, 616)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9608, 'Urumqi Shi', 48, 614)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9609, 'Turpan Diqu', 48, 614)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9610, 'Tacheng Diqu', 48, 614)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9611, 'Karamay Shi', 48, 614)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9612, 'Ili Kazak Zizhizhou', 48, 614)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9613, 'Kumul Diqu', 48, 614)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9614, 'Changji Huizu Zizhizhou', 48, 614)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9615, 'Bortala Mongol Zizhizhou', 48, 614)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9616, 'Bayingolin Mongol Zizhizhou', 48, 614)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9617, 'Altay Diqu', 48, 614)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9618, 'Aksu Diqu', 48, 614)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9619, 'Zunyi Shi', 48, 631)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9620, 'Zigong Shi', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9621, 'Zibo Shi', 48, 621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9622, 'Zhuzhou Shi', 48, 626)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9623, 'Zhumadian Shi', 48, 628)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9624, 'Zhuhai Shi', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9625, 'Zhoushan Shi', 48, 615)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9626, 'Zhoukou Shi', 48, 628)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9627, 'Zhongshan Prefecture', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9628, 'Zhenjiang Shi', 48, 625)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9629, 'Zhengzhou Shi', 48, 628)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9630, 'Zhaotong Shi', 48, 616)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9631, 'Zhaoqing Shi', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9632, 'Zhanjiang Shi', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9633, 'Zhangzhou Shi', 48, 635)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9634, 'Zhangye Shi', 48, 634)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9635, 'Zaozhuang Shi', 48, 621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9636, 'Yuxi Shi', 48, 616)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9637, 'Yunfu Shi', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9638, 'Yuncheng Shi', 48, 619)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9639, 'Yulin Shi', 48, 622)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9640, 'Yueyang Shi', 48, 626)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9641, 'Yiyang Shi', 48, 626)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9642, 'Wuzhong Shi', 48, 623)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9643, 'Yingtan Shi', 48, 624)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9644, 'Yinchuan Shi', 48, 623)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9645, 'Yichun Shi', 48, 624)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9646, 'Yichangshi', 48, 627)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9647, 'Yibin Shi', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9648, 'Yantai Shi', 48, 621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9649, 'Yangzhou Shi', 48, 625)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9650, 'Yangquan Shi', 48, 619)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9651, 'Yangjiang Shi', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9652, 'Yancheng Shi', 48, 625)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9653, 'Yan’an Shi', 48, 622)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9654, 'Ya’an Shi', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9655, 'Xuzhou', 48, 625)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9656, 'Xuchang Shi', 48, 628)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9657, 'Xuancheng Shi', 48, 637)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9658, 'Xishuangbanna Daizu Zizhizhou', 48, 616)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9659, 'Xinyang Shi', 48, 628)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9660, 'Xinxiang Shi', 48, 628)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9661, 'Xining Shi', 48, 613)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9662, 'Xingtai County', 48, 629)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9663, 'Xiaogan', 48, 627)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9664, 'Xianyang Shi', 48, 622)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9665, 'Xi’an Shi', 48, 622)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9666, 'Xianning Prefecture', 48, 627)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9667, 'Xiangxi Tujiazu Miaozu Zizhizhou', 48, 626)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9668, 'Xiangtan Shi', 48, 626)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9669, 'Xiangyang', 48, 627)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9670, 'Xiamen Shi', 48, 635)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9671, 'Wuzhou Shi', 48, 632)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9672, 'Wuxi Shi', 48, 625)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9673, 'Wuwei Shi', 48, 634)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9674, 'Wuhu Shi', 48, 637)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9675, 'Wuhan Shi', 48, 627)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9676, 'Wuhai Shi', 48, 638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9677, 'Wenzhou Shi', 48, 615)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9678, 'Wenshan Zhuangzu Miaozu Zizhizhou', 48, 616)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9679, 'Wenchang Shi', 48, 630)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9680, 'Weinan Shi', 48, 622)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9681, 'Weihai Shi', 48, 621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9682, 'Weifang Shi', 48, 621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9683, 'Wanning Shi', 48, 630)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9684, 'Tongren Diqu', 48, 631)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9685, 'Tongling Shi', 48, 637)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9686, 'Tongchuan Shi', 48, 622)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9687, 'Tianshui Shi', 48, 634)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9688, 'Tangshan Shi', 48, 629)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9689, 'Taizhou Shi', 48, 625)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9690, 'Taizhou Shi', 48, 615)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9691, 'Taiyuan Shi', 48, 619)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9692, 'Tai’an Shi', 48, 621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9693, 'Suzhou Shi', 48, 637)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9694, 'Suqian Shi', 48, 625)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9695, 'Suizhou Shi', 48, 627)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9696, 'Pu''er City', 48, 616)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9697, 'Shizuishan Shi', 48, 623)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9698, 'Shiyan Shi', 48, 627)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9699, 'Shijiazhuang Shi', 48, 629)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9700, 'Shenzhen', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9701, 'Shennongjia', 48, 627)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9702, 'Shaoyang County', 48, 626)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9703, 'Shaoxing Shi', 48, 615)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9704, 'Shaoguan Shi', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9705, 'Shantou Shi', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9706, 'Shangrao Shi', 48, 624)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9707, 'Shangqiu Shi', 48, 628)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9708, 'Shangluo Shi', 48, 622)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9709, 'Sanya Shi', 48, 630)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9710, 'Sanming Shi', 48, 635)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9711, 'Sanmenxia Shi', 48, 628)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9712, 'Rizhao Shi', 48, 621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9713, 'Quzhou Shi', 48, 615)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9714, 'Qujing Shi', 48, 616)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9715, 'Quanzhou Shi', 48, 635)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9716, 'Qionghai County', 48, 630)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9717, 'Qinzhou Shi', 48, 632)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9718, 'Qinhuangdao Shi', 48, 629)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9719, 'Qingyuan Shi', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9720, 'Qingyang Shi', 48, 634)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9721, 'Qingdao Shi', 48, 621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9722, 'Qianxinan Buyei and Miao Autonomous Prefecture', 48, 631)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9723, 'Qiannan Bouyeizu Miaozu Zizhizhou', 48, 631)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9724, 'Qiandongnan Miao and Dong Autonomous Prefecture', 48, 631)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9725, 'Putian Shi', 48, 635)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9726, 'Pingxiang Shi', 48, 624)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9727, 'Pingliang Shi', 48, 634)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9728, 'Pingdingshan Shi', 48, 628)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9729, 'Panzhihua Shi', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9730, 'Ningde Shi', 48, 635)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9731, 'Ningbo Shi', 48, 615)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9732, 'Neijiang Shi', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9733, 'Nanyang Shi', 48, 628)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9734, 'Nantong Shi', 48, 625)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9735, 'Nanping Shi', 48, 635)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9736, 'Nanning Shi', 48, 632)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9737, 'Nanjing Shi', 48, 625)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9738, 'Nanchong Shi', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9739, 'Nanchang Shi', 48, 624)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9740, 'Mianyang Shi', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9741, 'Meizhou Shi', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9742, 'Maoming Shi', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9743, 'Ma’anshan Shi', 48, 637)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9744, 'Luzhou Shi', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9745, 'Lupanshui Shi', 48, 631)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9746, 'Luoyang Shi', 48, 628)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9747, 'Luohe Shi', 48, 628)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9748, 'Lüliang', 48, 619)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9749, 'Lu’an Shi', 48, 637)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9750, 'Loudi Shi', 48, 626)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9751, 'Longyan Shi', 48, 635)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9752, 'Longnan Shi', 48, 634)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9753, 'Liuzhou Shi', 48, 632)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9754, 'Lishui Shi', 48, 615)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9755, 'Linyi Shi', 48, 621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9756, 'Linxia Huizu Zizhizhou', 48, 634)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9757, 'Linfen Shi', 48, 619)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9758, 'Lincang Shi', 48, 616)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9759, 'Lijiang Shi', 48, 616)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9760, 'Liaocheng Shi', 48, 621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9761, 'Lianyungang Shi', 48, 625)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9762, 'Liangshan Yizu Zizhizhou', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9763, 'Leshan Shi', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9764, 'Lanzhou Shi', 48, 634)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9765, 'Langfang Shi', 48, 629)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9766, 'Kunming Shi', 48, 616)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9767, 'Kaifeng Shi', 48, 628)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9768, 'Jiujiang Shi', 48, 624)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9769, 'Jinzhong Shi', 48, 619)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9770, 'Jining Shi', 48, 621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9771, 'Jinhua Shi', 48, 615)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9772, 'Jingzhou Shi', 48, 627)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9773, 'Jingmen Shi', 48, 627)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9774, 'Jingdezhen Shi', 48, 624)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9775, 'Jincheng Shi', 48, 619)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9776, 'Jinchang Shi', 48, 634)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9777, 'Jinan Shi', 48, 621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9778, 'Jieyang Shi', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9779, 'Jiaxing Shi', 48, 615)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9780, 'Jiaozuo Shi', 48, 628)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9781, 'Jiangmen Shi', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9782, 'Ji’an Shi', 48, 624)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9783, 'Ordos Shi', 48, 638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9784, 'Huzhou Shi', 48, 615)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9785, 'Huangshan Shi', 48, 637)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9786, 'Huizhou Shi', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9787, 'Huangshi Shi', 48, 627)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9788, 'Huangnan Zangzu Zizhizhou', 48, 613)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9789, 'Huanggang Shi', 48, 627)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9790, 'Huai’an Shi', 48, 625)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9791, 'Huainan Shi', 48, 637)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9792, 'Huaihua Prefecture', 48, 626)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9793, 'Huaibei Shi', 48, 637)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9794, 'Honghe Hanizu Yizu Zizhizhou', 48, 616)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9795, 'Heze Shi', 48, 621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9796, 'Heyuan Shi', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9797, 'Hengyang Shi', 48, 626)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9798, 'Hengshui Shi', 48, 629)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9799, 'Hefei Shi', 48, 637)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9800, 'Hechi Shi', 48, 632)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9801, 'Hebi Shi', 48, 628)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9802, 'Hanzhong Shi', 48, 622)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9803, 'Hangzhou Shi', 48, 615)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9804, 'Handan Shi', 48, 629)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9805, 'Hainan Zangzu Zizhizhou', 48, 613)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9806, 'Haikou Shi', 48, 630)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9807, 'Haidong Diqu', 48, 613)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9808, 'Haibei Tibetan Autonomous Prefecture', 48, 613)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9809, 'Guyuan Shi', 48, 623)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9810, 'Guiyang Shi', 48, 631)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9811, 'Guilin Shi', 48, 632)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9812, 'Guangzhou Shi', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9813, 'Garzê Zangzu Zizhizhou', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9814, 'Ganzhou Shi', 48, 624)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9815, 'Gannan Zangzu Zizhizhou', 48, 634)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9816, 'Fuzhou Shi', 48, 635)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9817, 'Fuzhou Shi', 48, 624)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9818, 'Fuyang Shi', 48, 637)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9819, 'Foshan Shi', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9820, 'Ezhou Shi', 48, 627)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9821, 'Enshi Tujiazu Miaozu Zizhizhou', 48, 627)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9822, 'Dongying Shi', 48, 621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9823, 'Dongguan Shi', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9824, 'Dingxi Shi', 48, 634)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9825, 'Dezhou Shi', 48, 621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9826, 'Zhangjiajie Shi', 48, 626)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9827, 'Dazhou Shi', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9828, 'Danzhou Shi', 48, 630)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9829, 'Dali Baizu Zizhizhou', 48, 616)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9830, 'Dalian Shi', 48, 639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9831, 'Chuxiong Yizu Zizhizhou', 48, 616)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9832, 'Chuzhou Shi', 48, 637)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9833, 'Prefecture of Chenzhou', 48, 626)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9834, 'Chengdu Shi', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9835, 'Chaozhou Shi', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9836, 'Changzhou Shi', 48, 625)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9837, 'Changzhi Shi', 48, 619)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9838, 'Changsha Shi', 48, 626)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9839, 'Changde Shi', 48, 626)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9840, 'Cangzhou Shi', 48, 629)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9841, 'Baise Shi', 48, 632)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9842, 'Binzhou Shi', 48, 621)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9843, 'Bijie Diqu', 48, 631)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9844, 'Bengbu Shi', 48, 637)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9845, 'Beihai Shi', 48, 632)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9846, 'Baoji Shi', 48, 622)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9847, 'Baoding Shi', 48, 629)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9848, 'Baiyin Prefecture', 48, 634)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9849, 'Anyang Shi', 48, 628)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9850, 'Anshun Shi', 48, 631)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9851, 'Anqing Shi', 48, 637)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9852, 'Ankang Shi', 48, 622)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9853, 'Alxa Meng', 48, 638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9854, 'Aba Zangzu Qiangzu Zizhizhou', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9855, 'Suzhou Shi', 48, 625)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9856, 'Puyang Shi', 48, 628)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9857, 'Zhangjiakou Shi', 48, 629)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9858, 'Yingkou', 48, 639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9859, 'Yichun Shi', 48, 641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9860, 'Yanbian Chaoxianzu Zizhizhou', 48, 640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9861, 'Xilin Gol Meng', 48, 638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9862, 'Wulanchabu Shi', 48, 638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9863, 'Tonghua Shi', 48, 640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9864, 'Tieling Shi', 48, 639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9865, 'Suihua Shi', 48, 641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9866, 'Siping Shi', 48, 640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9867, 'Shuangyashan Shi', 48, 641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9868, 'Shenyang Shi', 48, 639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9869, 'Qitaihe Shi', 48, 641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9870, 'Qiqihar Shi', 48, 641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9871, 'Panjin Shi', 48, 639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9872, 'Mudanjiang Shi', 48, 641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9873, 'Liaoyuan Shi', 48, 640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9874, 'Liaoyang Shi', 48, 639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9875, 'Jixi Shi', 48, 641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9876, 'Tongliao Shi', 48, 638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9877, 'Jinzhou Shi', 48, 639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9878, 'Huludao Shi', 48, 639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9879, 'Jilin Shi', 48, 640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9880, 'Jiamusi Shi', 48, 641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9881, 'Baishan Shi', 48, 640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9882, 'Hulunbuir Region', 48, 638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9883, 'Hohhot Shi', 48, 638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9884, 'Hinggan Meng', 48, 638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9885, 'Heihe Shi', 48, 641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9886, 'Hegang Shi', 48, 641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9887, 'Harbin Shi', 48, 641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9888, 'Fuxin Shi', 48, 639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9889, 'Fushun Shi', 48, 639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9890, 'Datong Shi', 48, 619)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9891, 'Daqing Shi', 48, 641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9892, 'Dandong Shi', 48, 639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9893, 'Daxing’anling Diqu', 48, 641)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9894, 'Chifeng Shi', 48, 638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9895, 'Chengde Prefecture', 48, 629)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9896, 'Chaoyang Shi', 48, 639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9897, 'Changchun Shi', 48, 640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9898, 'Benxi Shi', 48, 639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9899, 'Bayannur Shi', 48, 638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9900, 'Baotou Shi', 48, 638)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9901, 'Baicheng Shi', 48, 640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9902, 'Anshan Shi', 48, 639)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9903, 'Shanwei Shi', 48, 633)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9904, 'Songyuan Shi', 48, 640)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9905, 'Chizhou Shi', 48, 637)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9906, 'Shuozhou Shi', 48, 619)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9907, 'Xinzhou Shi', 48, 619)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9908, 'Deyang Shi', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9909, 'Zhongwei Shi', 48, 623)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9910, 'Guangyuan Shi', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9911, 'Guang’an Shi', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9912, 'Suining Shi', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9913, 'Bazhong Shi', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9914, 'Guigang Shi', 48, 632)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9915, 'Chongzuo Shi', 48, 632)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9916, 'Laibin Shi', 48, 632)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9917, 'Fangchenggang Shi', 48, 632)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9918, 'Hezhou Shi', 48, 632)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9919, 'Tumxuk', 48, 614)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9920, 'Sansha', 48, 630)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9921, 'Yulin Shi', 48, 632)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9922, 'Meishan Shi', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9923, 'Ziyang Shi', 48, 618)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9924, 'Chongqing', 48, 636)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9925, 'Xinyu', 48, 624)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9926, 'Bozhou', 48, 637)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9927, 'Yongzhou', 48, 626)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9928, 'Beijing', 48, 642)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9929, 'Shihezi', 48, 614)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9930, 'Tianmen', 48, 627)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9931, 'Wuzhishan City', 48, 630)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9932, 'Ledong Li Autonomous County', 48, 630)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9933, 'Dongfang City', 48, 630)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9934, 'Changjiang Li Autonomous County', 48, 630)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9935, 'Lingao County', 48, 630)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9936, 'Qianjiang', 48, 627)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9937, 'Xiantao', 48, 627)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9938, 'Lingshui Li Autonomous County', 48, 630)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9939, 'Tianjin Municipality', 48, 617)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9940, 'Baoting Li and Miao Autonomous County', 48, 630)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9941, 'Shanghai Municipality', 48, 620)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9942, 'Tunchang County', 48, 630)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9943, 'Ding''an County', 48, 630)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9944, 'Baisha Li Autonomous County', 48, 630)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9945, 'Qiongzhong Li and Miao Autonomous County', 48, 630)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9946, 'Chengmai County', 48, 630)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9947, 'Jiyuan', 48, 628)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9948, 'Zipaquirá', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9949, 'Zipacón', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9950, 'Zetaquira', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9951, 'Zarzal', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9952, 'Zaragoza', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9953, 'Zapatoca', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9954, 'Zambrano', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9955, 'Yotoco', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9956, 'Yopal', 49, 666)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9957, 'Yolombó', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9958, 'Yarumal', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9959, 'Yalí', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9960, 'Yaguará', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9961, 'Yacuanquer', 49, 654)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9962, 'Yacopí', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9963, 'Viterbo', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9964, 'Viracachá', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9965, 'Viotá', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9966, 'Villeta', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9967, 'Villavieja', 49, 658)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9968, 'Villavicencio', 49, 655)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9969, 'Villarrica', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9970, 'Villa del Rosario', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9971, 'Villapinzón', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9972, 'Villanueva', 49, 657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9973, 'Villanueva', 49, 670)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9974, 'Villamaría', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9975, 'Villahermosa', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9976, 'Villa Caro', 49, 653)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9977, 'Vijes', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9978, 'Victoria', 49, 668)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9979, 'Vianí', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9980, 'Versalles', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9981, 'Vergara', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9982, 'Ventaquemada', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9983, 'Venecia', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9984, 'Venadillo', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9985, 'Vélez', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9986, 'Valparaíso', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9987, 'Valle de San Juan', 49, 646)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9988, 'Valle de San José', 49, 648)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9989, 'Valencia', 49, 662)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9990, 'Valdivia', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9991, 'Útica', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9992, 'Usiacurí', 49, 672)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9993, 'Urrao', 49, 674)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9994, 'Uribia', 49, 657)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9995, 'Une', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9996, 'Umbita', 49, 669)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9997, 'Ulloa', 49, 645)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9998, 'Ubaque', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (9999, 'Ubalá', 49, 661)`,
    );
    await queryRunner.query(
      `INSERT INTO subregions (id, name, "countryId", "regionId") VALUES (10000, 'Tutazá', 49, 669)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM subregions');
  }
}
