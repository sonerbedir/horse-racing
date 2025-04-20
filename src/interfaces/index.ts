export interface IButton {
  text?: string;
  disabled?: boolean;
  size?: string;
  color?: string
}

export interface ITableStyleOptions {
  fontSize?: string;
  fontWeight?: string;
  tableBorder?: string;
  tableBorderRadius?: string;
  tableCellPadding?: string;
  backgroundColor?: string;
  tableBackgroundColor?: string;
  verticalBorder?: boolean;
  horizontalBorder?: string;
  tableCellAlignment?: string;
  headerCellAlignment?: string;
  headerCellPadding?: string;
  headerBackgroundColor?: string;
}

export interface ITable {
  customStyle?: ITableStyleOptions;
  data?: Array[],
  columns: Array[],
  bordered?: boolean,
  verticalBorder?: boolean
}

export interface IHorse {
  name: string;
  color: string;
  condition: number;
}

export interface IRaceHorse extends IHorse {
  position: number;
  speed: number;
  finishTime?: number;
}

export interface IRaceResult {
  name: string;
  finishTime: number;
  distance: number;
  position: number;
}

export interface IRace {
  distance: number;
  horses: {
    position: number;
    name: string;
    color: string;
  }[];
}

export interface IState {
  horses: IHorse[];
  raceSchedule: IRace[];
  raceResults: IRaceResult[][];
  currentRaceName: string;
  currentRaceHorses: IRaceHorse[];
  isRaceInProgress: boolean;
  isRaceStart: boolean;
  boardWidth: number;
  currentLapName: string;
}

export interface RaceHorse {
  name: string;
  color: string;
  condition: number;
}

export interface IDrawerProps {
  modelValue: boolean;
  width?: number;
  position?: string;
  isClickOutside?: boolean;
}
