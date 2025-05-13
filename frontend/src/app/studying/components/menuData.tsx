export interface RootInterface {
  name: string;
  programs: Program[];
}

export interface Program {
  name: string;
  profession_name: string;
  profession_number: string;
  department: string;
}

export const institutes = [
  {
    institute_name: "Институт №1 «Авиационная техника»",
    institute_number: "1",
    programs: [
      {
        program_name: "Самолётостроение",
        profession_name: "Самолёто- и вертолётостроение",
        profession_number: "24.05.07",
        department_number: "101",
        department_name: "Проектирование и сертификация авиационной техники"
      },
      {
        program_name: "Самолётостроение (сетевая программа МАИ и Смоленского государственного университета)",
        profession_name: "Самолёто- и вертолётостроение",
        profession_number: "24.05.07",
        department_number: "101",
        department_name: "Проектирование и сертификация авиационной техники"
      },
      {
        program_name: "Проектирование и технология производства ЛА (сетевая программа МАИ и Тихоокеанского государственного университета)",
        profession_name: "Самолёто- и вертолётостроение",
        profession_number: "24.05.07",
        department_number: "101",
        department_name: "Проектирование и сертификация авиационной техники"
      },
      {
        program_name: "Системы жизнеобеспечения и оборудования летательных аппаратов",
        profession_name: "Самолёто- и вертолётостроение",
        profession_number: "24.05.07",
        department_number: "101",
        department_name: "Проектирование и сертификация авиационной техники"
      },
      {
        program_name: "Нормирование лётной годности и сертификация авиационной техники",
        profession_name: "Самолёто- и вертолётостроение",
        profession_number: "24.05.07",
        department_number: "101",
        department_name: "Проектирование и сертификация авиационной техники"
      },
      {
        program_name: "Вертолётостроение",
        profession_name: "Самолёто- и вертолётостроение",
        profession_number: "24.05.07",
        department_number: "102",
        department_name: "Проектирование вертолётов"
      },
      {
        program_name: "Вертолётостроение (сетевая программа МАИ и Восточно-Сибирского государственного университета технологий и управления)",
        profession_name: "Самолёто- и вертолётостроение",
        profession_number: "24.05.07",
        department_number: "102",
        department_name: "Проектирование вертолётов"
      },
      {
        program_name: "Технологическое проектирование высокоресурсных конструкций самолётов и вертолётов",
        profession_name: "Самолёто- и вертолётостроение",
        profession_number: "24.05.07",
        department_number: "104",
        department_name: "Технологическое проектирование и управление качеством"
      },
      {
        program_name: "Управление качеством в жизненном цикле авиационной техники",
        profession_name: "Самолёто- и вертолётостроение",
        profession_number: "24.05.07",
        department_number: "104",
        department_name: "Технологическое проектирование и управление качеством"
      },
      {
        program_name: "Вычислительная и экспериментальная аэрогидродинамика летательных аппаратов",
        profession_name: "Самолёто- и вертолётостроение",
        profession_number: "24.05.07",
        department_number: "106",
        department_name: "Аэродинамика, динамика и управление летательных аппаратов"
      },
      {
        program_name: "Управление и динамика полёта летательных аппаратов",
        profession_name: "Самолёто- и вертолётостроение",
        profession_number: "24.05.07",
        department_number: "106",
        department_name: "Аэродинамика, динамика и управление летательных аппаратов"
      },
      {
        program_name: "Конструкция, технология эксплуатации и ремонта авиационной техники",
        profession_name: "Техническая эксплуатация летательных аппаратов и двигателей",
        profession_number: "25.03.01",
        department_number: "101",
        department_name: "Проектирование и сертификация авиационной техники"
      }
    ]
  },
  {
    institute_name: "Институт №2 «Авиационные, ракетные двигатели и энергетические установки»",
    institute_number: "2",
    programs: [
      {
        program_name: "Тепловые процессы в авиационной и ракетно-космической технике",
        profession_name: "Теплоэнергетика и теплотехника",
        profession_number: "13.03.01",
        department_number: "204",
        department_name: "Авиационно-космическая теплотехника"
      },
      {
        program_name: "Проектирование авиационных двигателей",
        profession_name: "Проектирование авиационных и ракетных двигателей",
        profession_number: "24.05.02",
        department_number: "201",
        department_name: "Теория воздушно-реактивных двигателей"
      },
      {
        program_name: "Проектирование жидкостных ракетных двигателей",
        profession_name: "Проектирование авиационных и ракетных двигателей",
        profession_number: "24.05.02",
        department_number: "202",
        department_name: "Ракетные двигатели"
      },
      {
        program_name: "Конструкция и прочность авиационных, ракетных двигателей и энергетических установок (целевая программа в рамках проекта «Крылья Ростеха»)",
        profession_name: "Проектирование авиационных и ракетных двигателей",
        profession_number: "24.05.02",
        department_number: "203",
        department_name: "Конструкция и проектирование двигателей"
      },
      {
        program_name: "Тепловое проектирование двигательных и энергетических систем",
        profession_name: "Проектирование авиационных и ракетных двигателей",
        profession_number: "24.05.02",
        department_number: "204",
        department_name: "Авиационно-космическая теплотехника"
      },
      {
        program_name: "Проектирование технологических процессов производства авиационных, ракетных двигателей и энергетических установок",
        profession_name: "Проектирование авиационных и ракетных двигателей",
        profession_number: "24.05.02",
        department_number: "205",
        department_name: "Технология производства двигателей летательных аппаратов"
      },
      {
        program_name: "Испытания и сертификация двигателей летательных аппаратов (сетевая программа МАИ и Объединенной двигателестроительной корпорации)",
        profession_name: "Проектирование авиационных и ракетных двигателей",
        profession_number: "24.05.02",
        department_number: "207",
        department_name: "Метрология, стандартизация и сертификация"
      },
      {
        program_name: "Проектирование электроракетных двигателей",
        profession_name: "Проектирование авиационных и ракетных двигателей",
        profession_number: "24.05.02",
        department_number: "208",
        department_name: "Электроракетные двигатели, энергетические и энергофизические установки"
      }
    ]
  },
  {
    institute_name: "Институт №3 «Системы управления, информатика и электроэнергетика»",
    institute_number: "3",
    programs: [
      {
        program_name: "Вычислительные машины, комплексы, системы и сети",
        profession_name: "Информатика и вычислительная техника",
        profession_number: "09.03.01",
        department_number: "304",
        department_name: "Вычислительные машины, системы и сети"
      },
      {
        program_name: "Программное обеспечение средств вычислительной техники и автоматизированных систем",
        profession_name: "Информатика и вычислительная техника",
        profession_number: "09.03.01",
        department_number: "304",
        department_name: "Вычислительные машины, системы и сети"
      },
      {
        program_name: "Автоматизированное управление бизнес-процессами и финансами",
        profession_name: "Информатика и вычислительная техника",
        profession_number: "09.03.01",
        department_number: "315",
        department_name: "Управление высокотехнологичными предприятиями"
      },
      {
        program_name: "Системы автоматизированного проектирования",
        profession_name: "Информатика и вычислительная техника",
        profession_number: "09.03.01",
        department_number: "316",
        department_name: "Системное моделирование и автоматизированное проектирование"
      },
      {
        program_name: "Системы интеллектуального мониторинга",
        profession_name: "Информатика и вычислительная техника",
        profession_number: "09.03.01",
        department_number: "316",
        department_name: "Системное моделирование и автоматизированное проектирование"
      },
      {
        program_name: "Информационные системы и технологии",
        profession_name: "Информационные системы и технологии",
        profession_number: "09.03.02",
        department_number: "307",
        department_name: "Цифровые технологии и информационные системы"
      },
      {
        program_name: "Прикладная информатика в технических системах",
        profession_name: "Прикладная информатика",
        profession_number: "09.03.03",
        department_number: "311",
        department_name: "Прикладные программные средства и математические методы"
      },
      {
        program_name: "Программно-информационные системы",
        profession_name: "Программная инженерия",
        profession_number: "09.03.04",
        department_number: "304",
        department_name: "Вычислительные машины, системы и сети"
      },
      {
        program_name: "Биотехнические и медицинские аппараты и системы",
        profession_name: "Биотехнические системы и технологии",
        profession_number: "12.03.04",
        department_number: "310",
        department_name: "Электроэнергетические, электромеханические и биотехнические системы"
      },
      {
        program_name: "Информационные технологии в электроэнергетических и электромеханических системах",
        profession_name: "Электроэнергетика и электротехника",
        profession_number: "13.03.02",
        department_number: "310",
        department_name: "Электроэнергетические, электромеханические и биотехнические системы"
      },
      {
        program_name: "Электрооборудование летательных аппаратов",
        profession_name: "Электроэнергетика и электротехника",
        profession_number: "13.03.02",
        department_number: "310",
        department_name: "Электроэнергетические, электромеханические и биотехнические системы"
      },
      {
        program_name: "Системы интеллектуального управления летательными аппаратами",
        profession_name: "Системы управления летательных аппаратов",
        profession_number: "24.05.06",
        department_number: "301",
        department_name: "Системы автоматического и интеллектуального управления"
      },
      {
        program_name: "Управляющие пилотажно-навигационные комплексы летательных аппаратов",
        profession_name: "Системы управления летательных аппаратов",
        profession_number: "24.05.06",
        department_number: "305",
        department_name: "Пилотажно-навигационные и информационно-измерительные комплексы"
      },
      {
        program_name: "Интеллектуальные навигационные и информационно-измерительные системы беспилотных аппаратов",
        profession_name: "Системы управления летательных аппаратов",
        profession_number: "24.05.06",
        department_number: "305",
        department_name: "Пилотажно-навигационные и информационно-измерительные комплексы"
      },
      {
        program_name: "Управление и информатика в технических системах",
        profession_name: "Управление в технических системах",
        profession_number: "27.03.04",
        department_number: "301",
        department_name: "Системы автоматического и интеллектуального управления"
      },
      {
        program_name: "Информационные технологии в управлении",
        profession_name: "Управление в технических системах",
        profession_number: "27.03.04",
        department_number: "301",
        department_name: "Системы автоматического и интеллектуального управления"
      },
      {
        program_name: "Управление инновациями",
        profession_name: "Инноватика",
        profession_number: "27.03.05",
        department_number: "317",
        department_name: "Управление инновациями"
      },
      {
        program_name: "Бизнес-аналитика и информатика",
        profession_name: "Бизнес-информатика",
        profession_number: "38.03.05",
        department_number: "315",
        department_name: "Управление высокотехнологичными предприятиями"
      }
    ]
  },
  {
    institute_name: "Институт №4 «Радиоэлектроника, инфокоммуникации и информационная безопасность»",
    institute_number: "4",
    programs: [
      {
        program_name: "Безопасность телекоммуникационных систем",
        profession_name: "Информационная безопасность",
        profession_number: "10.03.01",
        department_number: "402",
        department_name: "Радиосистемы и комплексы управления, передачи информации и информационная безопасность"
      },
      {
        program_name: "Информационная безопасность аэрокосмических телекоммуникационных систем",
        profession_name: "Информационная безопасность",
        profession_number: "10.03.01",
        department_number: "402",
        department_name: "Радиосистемы и комплексы управления, передачи информации и информационная безопасность"
      },
      {
        program_name: "Радиосистемы управления и передачи информации",
        profession_name: "Информационная безопасность",
        profession_number: "10.03.01",
        department_number: "402",
        department_name: "Радиосистемы и комплексы управления, передачи информации и информационная безопасность"
      },
      {
        program_name: "Информационные технологии проектирования радиоэлектронных систем",
        profession_name: "Информационная безопасность",
        profession_number: "10.03.01",
        department_number: "404",
        department_name: "Конструирование, технология и производство радиоэлектронных средств"
      },
      {
        program_name: "Радиоэлектронная борьба",
        profession_name: "Информационная безопасность",
        profession_number: "10.03.01",
        department_number: "405",
        department_name: "Теоретическая радиотехника"
      },
      {
        program_name: "Радиофизика и антенно-интегрированные системы",
        profession_name: "Информационная безопасность",
        profession_number: "10.03.01",
        department_number: "406",
        department_name: "Радиофизика, антенны и микроволновая техника"
      },
      {
        program_name: "Системы мобильной связи",
        profession_name: "Информационная безопасность",
        profession_number: "10.03.01",
        department_number: "408",
        department_name: "Инфокоммуникации"
      },
      {
        program_name: "Радиолокационные системы и комплексы",
        profession_name: "Информационная безопасность",
        profession_number: "10.03.01",
        department_number: "410",
        department_name: "Радиолокация, радионавигация и бортовое радиоэлектронное оборудование"
      },
      {
        program_name: "Радиолокационные системы и комплексы (сетевая программа МАИ и Восточно-Сибирского государственного университета технологий и управления)",
        profession_name: "Информационная безопасность",
        profession_number: "10.03.01",
        department_number: "410",
        department_name: "Радиолокация, радионавигация и бортовое радиоэлектронное оборудование"
      }
    ]
  },
  {
    institute_name: "Институт №5 «Экономика и менеджмент высокотехнологичной индустрии»",
    institute_number: "5",
    programs: [
      {
        program_name: "Менеджмент и маркетинг цифрового предприятия",
        profession_name: "Экономика и управление",
        profession_number: "38.03.01",
        department_number: "501",
        department_name: "Менеджмент и маркетинг высокотехнологичных отраслей промышленности"
      },
      {
        program_name: "Экономика фирмы",
        profession_name: "Экономика и управление",
        profession_number: "38.03.01",
        department_number: "502",
        department_name: "Экономика промышленности: учёт, анализ и аудит"
      },
      {
        program_name: "Экономика и управление проектами",
        profession_name: "Экономика и управление",
        profession_number: "38.03.01",
        department_number: "505",
        department_name: "Инновационная экономика, финансы и управление проектами"
      },
      {
        program_name: "Цифровая экономика",
        profession_name: "Экономика и управление",
        profession_number: "38.03.01",
        department_number: "507",
        department_name: "Экономическая теория и прикладная экономика"
      },
      {
        program_name: "Управление персоналом",
        profession_name: "Управление персоналом",
        profession_number: "38.03.03",
        department_number: "512",
        department_name: "Управление персоналом"
      },
      {
        program_name: "Управление государственной и муниципальной собственностью",
        profession_name: "Государственное и муниципальное управление",
        profession_number: "38.03.04",
        department_number: "515",
        department_name: "Государственное управление и социальные технологии"
      }
    ]
  },
  {
    institute_name: "Институт №6 «Аэрокосмический»",
    institute_number: "6",
    programs: [
      {
        program_name: "Экологическая безопасность аэрокосмической деятельности",
        profession_name: "Экология и природопользование",
        profession_number: "05.03.06",
        department_number: "614",
        department_name: "Экология, системы жизнеобеспечения и безопасность жизнедеятельности"
      },
      {
        program_name: "Программные системы цифровизации организаций",
        profession_name: "Информатика и вычислительная техника",
        profession_number: "09.03.01",
        department_number: "609",
        department_name: "Прикладная информатика"
      },
      {
        program_name: "Инженерное дело в аэрокосмической медицине",
        profession_name: "Биотехнические системы и технологии",
        profession_number: "12.03.04",
        department_number: "614",
        department_name: "Экология, системы жизнеобеспечения и безопасность жизнедеятельности"
      },
      {
        program_name: "Инженерное дело в медико-биологической практике и биотехнических системах",
        profession_name: "Биотехнические системы и технологии",
        profession_number: "12.03.04",
        department_number: "614",
        department_name: "Экология, системы жизнеобеспечения и безопасность жизнедеятельности"
      },
      {
        program_name: "Аэрокосмическая техника",
        profession_name: "Проектирование, производство и эксплуатация ракет и ракетно-космических комплексов",
        profession_number: "24.05.01",
        department_number: "601",
        department_name: "Космические системы и ракетостроение"
      },
      {
        program_name: "Аэрокосмическая техника (сетевая программа МАИ и Сибирского государственного университета науки и технологий)",
        profession_name: "Проектирование, производство и эксплуатация ракет и ракетно-космических комплексов",
        profession_number: "24.05.01",
        department_number: "601",
        department_name: "Космические системы и ракетостроение"
      },
      {
        program_name: "Пилотируемые и автоматические космические аппараты и системы (сетевая программа МАИ и Смоленского государственного университета)",
        profession_name: "Проектирование, производство и эксплуатация ракет и ракетно-космических комплексов",
        profession_number: "24.05.01",
        department_number: "601",
        department_name: "Космические системы и ракетостроение"
      },
      {
        program_name: "Прочность аэрокосмических конструкций",
        profession_name: "Проектирование, производство и эксплуатация ракет и ракетно-космических комплексов",
        profession_number: "24.05.01",
        department_number: "602",
        department_name: "Проектирование и прочность авиационно-ракетных и космических изделий"
      },
      {
        program_name: "Проектирование авиационно-ракетных систем",
        profession_name: "Проектирование, производство и эксплуатация ракет и ракетно-космических комплексов",
        profession_number: "24.05.01",
        department_number: "602",
        department_name: "Проектирование и прочность авиационно-ракетных и космических изделий"
      },
      {
        program_name: "Цифровые технологии управления полётом",
        profession_name: "Проектирование, производство и эксплуатация ракет и ракетно-космических комплексов",
        profession_number: "24.05.01",
        department_number: "604",
        department_name: "Системный анализ и управление"
      },
      {
        program_name: "Системы управления и информационной поддержки жизненного цикла аэрокосмической техники",
        profession_name: "Проектирование, производство и эксплуатация ракет и ракетно-космических комплексов",
        profession_number: "24.05.01",
        department_number: "609",
        department_name: "Прикладная информатика"
      },
      {
        program_name: "Проектирование информационных систем связи космических аппаратов",
        profession_name: "Проектирование, производство и эксплуатация ракет и ракетно-космических комплексов",
        profession_number: "24.05.01",
        department_number: "610",
        department_name: "Управление эксплуатацией ракетно-космических систем"
      },
      {
        program_name: "Эксплуатация и испытания аэрокосмических систем",
        profession_name: "Проектирование, производство и эксплуатация ракет и ракетно-космических комплексов",
        profession_number: "24.05.01",
        department_number: "610",
        department_name: "Управление эксплуатацией ракетно-космических систем"
      },
      {
        program_name: "Системы обеспечения жизнедеятельности летательных аппаратов",
        profession_name: "Проектирование, производство и эксплуатация ракет и ракетно-космических комплексов",
        profession_number: "24.05.01",
        department_number: "614",
        department_name: "Экология, системы жизнеобеспечения и безопасность жизнедеятельности"
      },
      {
        program_name: "Моделирование и исследование операций в аэрокосмических системах",
        profession_name: "Системный анализ и управление",
        profession_number: "27.03.03",
        department_number: "604",
        department_name: "Системный анализ и управление"
      },
      {
        program_name: "Системный анализ в области информатизации организаций",
        profession_name: "Системный анализ и управление",
        profession_number: "27.03.03",
        department_number: "609",
        department_name: "Прикладная информатика"
      }
    ]
  },
  {
    institute_name: "Институт №7 «Робототехнические и интеллектуальные системы»",
    institute_number: "7",
    programs: [
      {
        program_name: "Робототехнические системы вооружения летательных аппаратов",
        profession_name: "Интегрированные системы летательных аппаратов",
        profession_number: "24.05.05",
        department_number: "701",
        department_name: "Авиационные робототехнические системы"
      },
      {
        program_name: "Системы приводов летательных аппаратов",
        profession_name: "Интегрированные системы летательных аппаратов",
        profession_number: "24.05.05",
        department_number: "702",
        department_name: "Системы приводов авиационно-космической техники"
      },
      {
        program_name: "Системное проектирование авиационных комплексов",
        profession_name: "Интегрированные системы летательных аппаратов",
        profession_number: "24.05.05",
        department_number: "703",
        department_name: "Системное проектирование авиакомплексов"
      },
      {
        program_name: "Информационно-управляющие комплексы летательных аппаратов",
        profession_name: "Интегрированные системы летательных аппаратов",
        profession_number: "24.05.05",
        department_number: "704",
        department_name: "Информационно-управляющие комплексы летательных аппаратов"
      },
      {
        program_name: "Интегрированные интеллектуальные робототехнические комплексы",
        profession_name: "Интегрированные системы летательных аппаратов",
        profession_number: "24.05.05",
        department_number: "704",
        department_name: "Информационно-управляющие комплексы летательных аппаратов"
      },
      {
        program_name: "Внешнее проектирование и эффективность авиационных комплексов",
        profession_name: "Интегрированные системы летательных аппаратов",
        profession_number: "24.05.05",
        department_number: "707Б",
        department_name: "Внешнее проектирование и эффективность авиационных комплексов"
      },
      {
        program_name: "Системы управления беспилотными летательными аппаратами",
        profession_name: "Системы управления летательных аппаратов",
        profession_number: "24.05.06",
        department_number: "705Б",
        department_name: "Бортовая автоматика беспилотных космических и атмосферных летательных аппаратов"
      },
      {
        program_name: "Информационно-управляющие системы летательных аппаратов",
        profession_name: "Системный анализ и управление",
        profession_number: "27.03.03",
        department_number: "704",
        department_name: "Информационно-управляющие комплексы летательных аппаратов"
      },
      {
        program_name: "Моделирование и исследование операций в авиационных организационно-технических системах",
        profession_name: "Системный анализ и управление",
        profession_number: "27.03.03",
        department_number: "707Б",
        department_name: "Внешнее проектирование и эффективность авиационных комплексов"
      }
    ]
  },
  {
    institute_name: "Институт №8 «Компьютерные науки и прикладная математика»",
    institute_number: "8",
    programs: [
      {
        program_name: "Информатика",
        profession_name: "Прикладная математика и информатика",
        profession_number: "01.03.02",
        department_number: "806",
        department_name: "Вычислительная математика и программирование"
      },
      {
        program_name: "Математическое и компьютерное моделирование в механике",
        profession_name: "Прикладная математика",
        profession_number: "01.03.04",
        department_number: "802",
        department_name: "Мехатроника и теоретическая механика"
      },
      {
        program_name: "Статистический анализ и оптимизация сложных технических и экономических систем",
        profession_name: "Прикладная математика",
        profession_number: "01.03.04",
        department_number: "804",
        department_name: "Теория вероятностей и компьютерное моделирование"
      },
      {
        program_name: "Математическое и программное обеспечение систем обработки информации и управления",
        profession_name: "Прикладная математика",
        profession_number: "01.03.04",
        department_number: "805",
        department_name: "Математическая кибернетика"
      },
      {
        program_name: "Информатика и компьютерные науки",
        profession_name: "Фундаментальная информатика и информационные технологии",
        profession_number: "02.03.02",
        department_number: "806",
        department_name: "Вычислительная математика и программирование"
      }
    ]
  },
  {
    institute_name: "Институт №10 «Иностранные языки»",
    institute_number: "И",
    programs: [
      {
        program_name: "Цифровые коммуникации и искусственный интеллект в рекламе и связях с общественностью",
        profession_name: "Реклама и связи с общественностью",
        profession_number: "42.03.01",
        department_number: "И-15",
        department_name: "Реклама и связи с общественностью в высокотехнологичных отраслях"
      },
      {
        program_name: "Перевод и переводоведение в аэрокосмической отрасли",
        profession_name: "Лингвистика",
        profession_number: "45.03.02",
        department_number: "И-12",
        department_name: "Лингвистика и переводоведение"
      }
    ]
  },
  {
    institute_name: "Институт №11 «Материаловедение и технологии материалов»",
    institute_number: "11",
    programs: [
      {
        program_name: "Материалы и технологии в биотехнических системах",
        profession_name: "Биотехнические системы и технологии",
        profession_number: "12.03.04",
        department_number: "1102",
        department_name: "Материаловедение и технология обработки материалов"
      },
      {
        program_name: "Наукоёмкие технологии металлургических процессов",
        profession_name: "Новые материалы и цифровые технологии",
        profession_number: "22.03.01",
        department_number: "1101",
        department_name: "Технологии и системы автоматизированного проектирования металлургических процессов"
      },
      {
        program_name: "Материаловедение и технология новых материалов",
        profession_name: "Новые материалы и цифровые технологии",
        profession_number: "22.03.01",
        department_number: "1102",
        department_name: "Материаловедение и технология обработки материалов"
      }
    ]
  },
  {
    institute_name: "Институт №12 «Аэрокосмические наукоемкие технологии и производства»",
    institute_number: "12",
    programs: [
      {
        program_name: "Цифровые и лазерные технологии в аэрокосмическом приборостроении",
        profession_name: "Информационная безопасность",
        profession_number: "10.03.01",
        department_number: "1203",
        department_name: "Технологии производства приборов и информационных систем управления летательных аппаратов"
      }
    ]
  },
  {
    institute_name: "Филиал «Взлёт»",
    institute_number: "А",
    programs: [
      {
        program_name: "Радиоэлектронные системы и комплексы",
        profession_name: "Лингвистика",
        profession_number: "45.03.02",
        department_number: "А21",
        department_name: "Радио и электронно-вычислительные средства летательных аппаратов"
      },
      {
        program_name: "Лётные испытания пилотируемых авиационных и воздушно-космических ЛА",
        profession_name: "Лингвистика",
        profession_number: "45.03.02",
        department_number: "А11",
        department_name: "Испытания авиационной техники"
      },
      {
        program_name: "Менеджмент",
        profession_name: "Лингвистика",
        profession_number: "45.03.02",
        department_number: "А31",
        department_name: "Общеинженерная подготовка и информационные технологии"
      }
    ]
  },
  {
    institute_name: "Филиал «Стрела»",
    institute_number: "С",
    programs: [
      {
        program_name: "Информатика и вычислительная техника",
        profession_name: "Лингвистика",
        profession_number: "45.03.02",
        department_number: "С-15",
        department_name: "Цифровые вычислительные комплексы систем управления бортовым радиоэлектронным оборудованием"
      },
      {
        program_name: "Радиолокационные системы и комплексы",
        profession_name: "Лингвистика",
        profession_number: "45.03.02",
        department_number: "С-14",
        department_name: "Радиоэлектронные системы"
      },
      {
        program_name: "Баллистика и гидроаэродинамика",
        profession_name: "Лингвистика",
        profession_number: "45.03.02",
        department_number: "С-12",
        department_name: "Аэромеханика, управление и навигация летательных аппаратов"
      },
      {
        program_name: "Испытание летательных аппаратов",
        profession_name: "Лингвистика",
        profession_number: "45.03.02",
        department_number: "С-13",
        department_name: "Лётные испытания пилотируемых авиационных и воздушно-космических летательных аппаратов"
      },
      {
        program_name: "Системы управления летательными аппаратами",
        profession_name: "Лингвистика",
        profession_number: "45.03.02",
        department_number: "С-12",
        department_name: "Аэромеханика, управление и навигация летательных аппаратов"
      },
      {
        program_name: "Самолёто- и вертолётостроение",
        profession_name: "Лингвистика",
        profession_number: "45.03.02",
        department_number: "С-11",
        department_name: "Проектирование и конструкция самолётов и экспериментальных установок"
      },
      {
        program_name: "Менеджмент",
        profession_name: "Лингвистика",
        profession_number: "45.03.02",
        department_number: "С-17",
        department_name: "Экономика и управление авиационной промышленности"
      }
    ]
  },
  {
    institute_name: "Ступинский филиал",
    institute_number: "МТЭ",
    programs: [
      {
        program_name: "Автоматизированные системы обработки информации и управления",
        profession_name: "Лингвистика",
        profession_number: "45.03.02",
        department_number: "МСиИТ",
        department_name: "Моделирование систем и информационные технологии"
      },
      {
        program_name: "Управление технологическими инновациями",
        profession_name: "Лингвистика",
        profession_number: "45.03.02",
        department_number: "ЭиУ",
        department_name: "Экономика и управление"
      },
      {
        program_name: "Финансовый менеджмент",
        profession_name: "Лингвистика",
        profession_number: "45.03.02",
        department_number: "ЭиУ",
        department_name: "Экономика и управление"
      }
    ]
  }
]
