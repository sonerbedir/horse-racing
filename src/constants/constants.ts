import {RaceHorse} from "@/interfaces/index.js";

export const raceHorses: RaceHorse[] = [
  {
    name: "King Berkay",
    color: "yellow",
    condition: getRandomCondition()
  },
  {
    name: "Arslanhan",
    color: "green",
    condition: getRandomCondition()
  },
  {
    name: "Black Wings",
    color: "darkcyan",
    condition: getRandomCondition()
  },
  {
    name: "Zafere Koşan",
    color: "maroon",
    condition: getRandomCondition()
  },
  {
    name: "Red Falcon",
    color: "darkorange",
    condition: getRandomCondition()
  },
  {
    name: "Prenses Işıl",
    color: "azure",
    condition: getRandomCondition()
  },
  {
    name: "Lord of Fire",
    color: "red",
    condition: getRandomCondition()
  },
  {
    name: "Derin Gölge",
    color: "black",
    condition: getRandomCondition()
  },
  {
    name: "Golden Runner",
    color: "darkblue",
    condition: getRandomCondition()
  },
  {
    name: "Blue Storm",
    color: "blue",
    condition: getRandomCondition()
  },
  {
    name: "Yıldızhan",
    color: "darksalmon",
    condition: getRandomCondition()
  },
  {
    name: "Okyanus Kralı",
    color: "fuchsia",
    condition: getRandomCondition()
  },
  {
    name: "Karaoğlan",
    color: "orange",
    condition: getRandomCondition()
  },
  {
    name: "Efsane Savaşçı",
    color: "darkred",
    condition: getRandomCondition()
  },
  {
    name: "Anadolu Kartalı",
    color: "darkgreen",
    condition: getRandomCondition()
  },
  {
    name: "Gümüş Paten",
    color: "darkviolet",
    condition: getRandomCondition()
  },
  {
    name: "Şahbatur",
    color: "olive",
    condition: getRandomCondition()
  },
  {
    name: "Kumsalın Kızı",
    color: "pink",
    condition: getRandomCondition()
  },
  {
    name: "Neşeli Ayak",
    color: "lightcyan",
    condition: getRandomCondition()
  },
  {
    name: "Turbo Yadigârı",
    color: "purple",
    condition: getRandomCondition()
  }
];

export const BUTTON_TEXT = {
  GENERATE: "GENERATE PROGRAM",
  START: "START",
  RESULT: "RACE RESULTS",
  SCHEDULE: "RACE SCHEDULE"
} as const;

export const TITLE_TEXT = {
  SCHEDULE: "Race Schedule",
  RESULTS: "Race Results",
} as const;

export const LAP_LENGTH: number[] = [
  1200,
  1400,
  1600,
  1800,
  2000,
  2200
] as const

export const ANIMATION_DURATION_TIME: number = 200

export const HORSE_SPEED_RANGE = { min: 10, max: 20 } as const;

export const RESULT_AND_SCHEDULE_TABLE_CONFIG = {
  CUSTOM_STYLE: {
    headerCellAlignment: 'center',
    tableCellAlignment: 'center',
    verticalAlign: 'middle',
    headerBackgroundColor: '#e1e1e1',
    tableWidth: 'fit-content',
  },
  COLUMN: [
    {
      dataIndex: 'position',
      value: 'Position',
      style: {
        width: '50px',
      }
    },
    {
      dataIndex: 'name',
      value: 'Name',
      style: {
        width: '300px',
      },
    }
  ]
}

export const GENERAL_HORSE_TABLE_CONFIG = {
  COLUMN: [
    {
      dataIndex: 'name',
      value: 'Name',
      style: {
        width: '150px',
      }
    },
    {
      dataIndex: 'condition',
      value: 'Condition',
      style: {
        width: '100px',
      },
    },
    {
      dataIndex: 'color',
      value: 'Color',
      style: {
        width: '100px'
      },
    },
  ],
  CUSTOM_STYLE: {
    headerCellAlignment: 'center',
    tableCellAlignment: 'center',
    verticalAlign: 'middle',
    tableHeight: '500px',
    headerBackgroundColor: '#e1e1e1'
  },
  TITLE: 'Horse List'
} as const;


function getRandomCondition(): number {
  return Math.floor(Math.random() * (100 - 30 + 1)) + 30;
}

