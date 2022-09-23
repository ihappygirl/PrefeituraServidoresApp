const beneficiosList = [
    {
      id: 1,
      categoria:'Educação',
      info: [
        {
            title: 'Skill Idiomas',
            texto: '50% de desconto na matrícula e 25% de desconto na mensalidade.',
            endereco: 'Rua José Michelotti, 175 – Cidade Saúde',
            telefone: '4142-3208',
            site: 'www.skill.com.br'
        },
        {   
            title: 'Wizard',
            texto: '50% de desconto na matrícula e 25% de desconto na mensalidade.',
            endereco: 'Rua Isola Belli Leonardi, 36 – Vila Nova Itapevi',
            telefone: '4141-4869',
            site: 'www.wizard.com.br'
        },
        {
            title: 'CNA',
            texto: '37% de desconto na mensalidade mediante apresentação de crachá e holerite.',
            endereco: 'Avenida Brasil, 59 – Centro – Itapevi',
            telefone: '4773-1000',
            site: 'www.cna.com.br'
        },
        {   
            title: 'FCE – Faculdade Campos Elíseos',
            texto: '10% de desconto na mensalidade mediante apresentação de holerite.',
            telefone: 'Polo Cotia - 99146-7665',
            site: 'polosedecotia@fce.edu.br'
        },
        {
            title: 'Faculdade Anhanguera - Polo Cotia',
            texto: '20% de desconto na mensalidade.',
            endereco: 'Avenida Professor Joaquim Barreto, 294 – Centro - Cotia',
            telefone: '(11) 4703-7833',
            site: 'www.anhanguera.com'
        },
        {   
            title: 'Faculdade Anhanguera - Polo Itapevi',
            texto: '20% de desconto na mensalidade.',
            endereco: 'Rua Leopoldina de Camargo, 190 – Centro – Itapevi',
            telefone: '(11) 4703-7833',
            site: 'www.anhanguera.com'
        },
        {   
            title: 'Universidade Cruzeiro do Sul Virtual',
            texto: '30% de desconto em todos os cursos à distância e descontos especiais em cursos semipresenciais e presenciais.',
            endereco: 'Rua Agostinho Ferreira Campos, 73 – Cidade Saúde – Itapevi',
            telefone: '4261-1618',
            site: 'www.cruzeirodosulvirtual.com.br'
        },
        {   
            title: 'Uninove – Universidade 9 de Julho',
            texto: '20% de desconto nas mensalidades dos ingressantes (1º e 2º semestres) e 10% a partir do 3º semestre.',
            site: 'Confira unidades e cursos no site www.uninove.br'
        },
        {   
            title: 'IM – Instituto Mix de Produções',
            texto: '25% de desconto em qualquer curso mediante apresentação de holerite.',
            endereco: 'Avenida Brasil, 31 – Centro – Itapevi',
            telefone: '4553-7446',
            site: 'www.institutomix.com.br ou itapevi@institutomix.com.br'
        },
        {   
            title: 'Instituto EduKaio',
            texto: 'R$ 50,00 de desconto na mensalidade.',
            endereco: 'Avenida Presidente Vargas, 324 – Jardim Christianópolis',
            telefone: '4141-3075'
        }
    ]
    },
    {
        id: 2,
        categoria:'Gastronomia',
        info: [
            {
                title: 'Rei da Coxinha',
                texto: 'Até 15% de desconto para funcionários mediante apresentação do holerite.',
                endereco: 'Rua Luiz Belli, 157 – Cohab 2',
                telefone: '95023-4392',
            },
            {   
                title: 'Empório do Chá',
                texto: '10% de desconto para todos os produtos mediante apresentação do holerite.',
                endereco: 'Avenida Presidente Vargas, 357 – Cidade Saúde',
                telefone: '4205-1167 / 98401-4659',
                site: 'emporiodochanatural@yahoo.com.br'
            },
            {   
                title: 'Espaço Coffee',
                texto: '10% de desconto para todos os produtos mediante apresentação do holerite.',
                endereco: 'Avenida Presidente Vargas, 700 – Cidade Saúde',
                telefone: '4205-0497',
                site: 'smr.smr44@yahoo.com.br'
            },
            {   
                title: 'Miê – Temakeria e Cia.',
                texto: '5% de desconto para todos os produtos mediante apresentação do holerite.',
                endereco: 'Rua Professor Dimarães Antonio Sandei, 29 – Cidade Saúde',
                telefone: '4205-2868',
            },
            {   
                title: 'Fritinho – Fritos e Salgados',
                texto: '10% de desconto para todos os produtos mediante apresentação do holerite.',
                endereco: 'Rua Porto Seguro, 95 – Jardim Julieta',
                telefone: '96900-4047/ 94375-7350/ 97732-1700/ 96900-4047',
                site: 'www.icemixbrasil.com.br ou vendas@icemixbrasil.com.br'
            },
            {   
                title: 'Sacolão Zacarias',
                texto: 'Em compras acima de R$ 15,00, 5% de desconto nos cartões de crédito, débito e à vista. Não serão aceitos descontos em cartões alimentação/refeição.',
                endereco: 'Avenida Presidente Vargas, 344 – Vila Nova Itapevi',
                telefone: '4142-1463',
                site: 'sacolaocentralzacarias@hotmail.com'
            }
            
        ]
    },
    {
        id: 3,
        categoria:'Saúde e Atividade Física',
        info: [
            {
                title: 'JM Farma Drogaria',
                texto: '30% de desconto em medicamentos genéricos e similares. 10% de desconto em medicamentos com receituário. 5% de desconto em perfumaria (exceto leite e fralda), mediante apresentação do holerite.',
                endereco: 'Avenida Presidente Vargas, 393 – Cidade Saúde',
                telefone: '4141-4772/ 4205-0554/ 98957-9104 (Whatsapp)'
            },
            {   
                title: 'Vick Odontologia',
                texto: '30% de descontos para todos os tratamentos clínicos. 15% de desconto para os tratamentos de implantes e próteses.',
                endereco: 'Rua Ana Maria Vaz, 57 – Parque Santo Antônio – Itapevi',
                telefone: '4205-0717'
            },
            {
                title: 'Academia Classe A',
                texto: 'Condições diferenciadas para servidores mediante apresentação do holerite.',
                endereco: 'Avenida Presidente Vargas, 393 – Cidade Saúde',
                telefone: '4141-4772/ 4205-0554/ 98957-9104 (Whatsapp)'
            },
            {   
                title: 'Bio Mania Academia',
                texto: 'Condições especiais para o servidor público de Itapevi mediante apresentação do crachá.',
                endereco: 'Avenida Cesário de Abreu, 503 – Itapevi',
                telefone: '4142-3769/ 94018-5011 (Whatsapp)',
                site: 'www.biomaniaacademia.com.br'
            },
            {
                title: 'Souza e Zamariolo Odontologia',
                texto: '25% de desconto para funcionários mediante apresentação do holerite.',
                endereco: 'Rua Licínio Avelino da Costa, 119 –Sala 3 – Jardim Rosemary',
                telefone: '4142-5513/ 98652-2466',
                site: 'www.sdodontologia.com.br'
            },
            {   
                title: 'Odonto Clinic',
                texto: '50% de Desconto na Matrícula. 25% de Desconto na Mensalidade.',
                endereco: 'Rua Pedro Luiz Garcia, 91 – Jardim Itapevi',
                telefone: '4141-2339',
                site: 'www.odontoclinic.com'
            },
            {
                title: 'Farmais',
                texto: 'Até 30% de desconto para funcionários mediante apresentação de holerite.',
                endereco: 'Rua José Michelotti, 88 – Loja 11 e 12 – Vila Nova Itapevi',
                telefone: '4142-4140',
                site: 'www.farmais.com.br'
            },
            {   
                title: 'Planos de Saúde',
                texto: '15% de desconto em qualquer plano de saúde.',
                endereco: 'Avenida Miguel Stéfano, 158 – Sala 121 - Bloco A Saúde – São Paulo – SP',
                telefone: '99206-7664 / 97998-7964',
                site: 'catia.saude@outlook.com'
            },
            {
                title: 'SR – Ótica Fábrica de Óculos',
                texto: '15% de desconto à vista e10% parcelado em até 6x mediante apresentação do holerite.',
                endereco: 'Rua Manoel Alves Mendes, 48 – Centro – Itapevi',
                telefone: '4142-6319',
                site: 'www.oticasr.com.br'
            },
            {   
                title: 'Óticas Prime',
                texto: '35% de desconto na compra do óculos completo ou 15% na compra de lentes.',
                endereco: 'Avenida Brasil, 7 – Centro – Itapevi',
                telefone: '4142-2028'
            },
            {
                title: 'Espaço Vida Saudável – Herbalife',
                texto: 'Até 20% de desconto mediante apresentação do holerite.',
                endereco: 'Avenida Presidente Vargas, 181, Sala 1 – Vila Nova Itapevi',
                telefone: '98031-5760 (Whatsapp)'
            },
            {   
                title: 'Sorridents',
                texto: '20% em todo tipo de procedimento clínico (mediante apresentação do holerite ou crachá).',
                endereco: 'Praça 18 de Fevereiro, 20 – Centro – Itapevi',
                telefone: '4774-5464',
                site: 'www.sorridents.com.br'
            },
            {
                title: 'Véio Suplementos',
                texto: '5% de desconto mediante apresentação do holerite.',
                endereco: 'Avenida Cesário de Abreu, 220 – Centro (Galeria JP) – Itapevi',
                telefone: '4142-5107',
                site: 'www.veiosuplementos.com.br'
            },
            {   
                title: 'Clínica de Olhos Vedere',
                texto: '30% de desconto para pagamento à vista e mediante apresentação de holerite.',
                endereco: 'Rua Leopoldina de Camargo, 200 – Sala 1 – 1º Piso – Centro – Itapevi',
                telefone: '4141-1273'
            },
            {
                title: 'Tenet Benefícios',
                texto: 'Valores beneficiados para funcionários públicos de Itapevi nos planos de saúde e odontológicos.',
                endereco: 'Avenida Anápolis, 100 – Conjunto 911- ED NBC – Bethaville – Barueri/ SP',
                telefone: '4198-4085/ 2102-2102',
                site: 'www.tenetbeneficios.com.br'
            },
            {   
                title: 'Ótica Gil Lancaster',
                texto: 'Até 30% de descontos em produtos mediante apresentação do holerite.',
                endereco: 'Avenida Rubens Caramez, 434 – Vila Aurora',
                telefone: '4205-4623'
            },
            {
                title: 'Cartão de Todos',
                texto: 'Isenção da taxa de adesão para funcionários públicos de Itapevi.',
                endereco: 'Rua Américo Valentin Cristianini, 12- Centro – Itapevi',
                telefone: '4773-9980'
            },
        ]
    },
    {
        id: 4,
        categoria:'Comércios',
        info: [
            {
                title: 'Casa das Fraldas',
                texto: '5% a 20% de desconto em toda a loja, nas compras acima de R$ 60,00 ganhe brindes especiais.',
                endereco: 'Rua João de Abreu, 88 – Parque Itamaraty',
                telefone: '4141-1383',
            },
            {   
                title: 'Comercial Lubvargas',
                texto: '5% de desconto em serviços mediante apresentação de crachá e holerite.',
                endereco: 'Avenida Presidente Vargas, 707/688 – Cidade Saúde',
                telefone: '4773- 5648 / 94013-5865 (Whatsapp)',
                site: 'comerciallubvargas@hotmail.com'
            },
            {
                title: 'Duca Silva – Fotografia',
                texto: '10% de desconto para contratante. Contratante que indicar outro cliente que fechar contrato ganha + 5% de desconto.',
                endereco: 'Rua Piracicaba, 202 – Jardim Portela',
                telefone: '97384-4717 (Whatsapp)',
                site: 'eduardocs28@fotografia.com.br'
            },
            {   
                title: 'Italuga',
                texto: '5% a 10% de desconto mediante apresentação de holerite e crachá funcional.',
                endereco: 'Rua Professor Dimarães Antonio Sandei, 790 – Vila Nova Itapevi',
                telefone: '4141-2405 / 4141-2845',
                site: 'www.italuga.com.br ou italuga01@gmail.com'
            },
            {
                title: 'Elétrica Forte',
                texto: '5% a 10% de desconto mediante apresentação do holerite.',
                endereco: 'Avenida Cesário de Abreu, 232 – Centro – Itapevi',
                telefone: '4141-4228 / 4141-6988',
                site: 'www.eletricaforteitapevi.com.br ou vendas@eletricaforteitapevi.com.br'
            },
            {   
                title: 'Inside Out – Street Garage',
                texto: '10% nas mercadorias que não estão em promoção.',
                endereco: 'Avenida Presidente Vargas, 359 – Cidade Saúde',
                telefone: '4773-6653 / 97772-5895',
                site: 'www.insideoutgarageblogspot.com.br ou insideoutskate@hotmail.com'
            },
            {
                title: 'Casa das Pedras',
                texto: '5% a 10% de desconto mediante apresentação do holerite.',
                endereco: 'Avenida Presidente Vargas, 963 – Vila Nova Itapevi',
                telefone: '4141-2405 / 4141-2845',
                site: 'www.casadaspedrassp.com.br ou contato@casadaspedrassp.com.br'
            },
            {   
                title: 'Capricho de Brechó',
                texto: '5% a 10% de desconto para funcionários mediante apresentação do holerite.',
                endereco: 'Rua Doutor José Pedro de castro, 36 – Jardim Rainha',
                telefone: '4141-6357 / 94342-0139 / 98558-3039 (Whatsapp)',
            },
            {
                title: 'Coisas e Ferramentas',
                texto: '10% de desconto mediante apresentação do holerite.',
                endereco: 'Avenida Presidente Vargas, 214 – Cidade Saúde',
                telefone: '4141-2881',
                site: 'www.coisaseferramentas.com.br'
            },
            {   
                title: 'Zanetti Tactical',
                texto: '5% de desconto mediante apresentação do holerite.',
                endereco: 'Avenida Presidente Vargas, 325 – Vila Nova Itapevi',
                telefone: '4141-5115',
                site: 'zanettitactical@hotmail.com'
            },
            {
                title: 'Foto Center',
                texto: '10% de desconto nos produtos da loja mediante apresentação do holerite.',
                endereco: 'Rua Leopoldina de Camargo, 260 – Ita Shopping',
                telefone: '4142-4213',
                site: 'lojafotocenter@hotmail.com'
            },
        ]
    },
    {   id: 5,
        categoria:'Outros',
        info: [
            {
                id: 9,
                title: 'Sienna',
                texto: '5% de desconto no processo mediante apresentação do holerite.',
                endereco: 'Rua Manoel Alves, 37 – Centro – Itapevi',
                telefone: '4141-8720/ 4142-4734',
                site: 'siennaitapevi@ig.com.br'
            },
            {   
                id: 10,
                title: 'Cromos Turismo – Agência de Viagens',
                texto: '5% de desconto à vista e 10x sem juros nos pacotes turísticos, mediante apresentação do holerite.',
                endereco: 'Avenida Cesário de Abreu, 220 – Loja 2 – Galeria Novaes – Centro Itapevi',
                telefone: '4205-2610',
            },
            {   
                id: 11,
                title: 'Glória A. Xavier – Consultoria de Beleza e Imagem',
                texto: '10% de desconto na compra de qualquer produto à vista, débito ou crédito.',
                endereco: 'Rua Darwin, 369 – apartamento 53 – Santo Amaro – São Paulo/ SP',
                telefone: '99217-3137/ 98750-2929',
                site: 'gloria.angela.xavier@gmail.com'
            },
            {   
                id: 11,
                title: 'CJA',
                texto: '10% de desconto nos pagamentos parcelados e 15% de desconto nos pagamentos à vista.',
                endereco: 'Rua Manoel Alves Mendes, 192 – centro – Itapevi',
                telefone: '4143-0986/ 96467-7093/ 96354-7555',
                site: 'consultoria.cja@gmail.com'
            }
        ]
    }
];
  
export default beneficiosList;