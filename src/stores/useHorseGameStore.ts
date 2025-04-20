import { defineStore } from "pinia";
import {
  IState,
  IRace,
  IRaceHorse,
  IRaceResult,
  RaceHorse
} from "@/interfaces";

import {
  LAP_LENGTH,
  raceHorses,
  HORSE_SPEED_RANGE,
  ANIMATION_DURATION_TIME
} from "@/constants/constants.js";

import {
  awaitTimeout,
  calculateRaceResults,
  calculateMaxFinishTime
} from "@/utils/utils.js";

export const useHorseGameStore = defineStore("gameStore", {
  state: (): IState => ({
    horses: [],
    raceSchedule: [],
    raceResults: [],
    currentRaceName: "",
    currentRaceHorses: [],
    isRaceInProgress: false,
    isRaceStart: false,
    boardWidth: 0,
    currentLapName: null,
  }),
  getters: {
    getCurrentRacingHorses(state) {
      return state.currentRaceHorses
    }
  },
  actions: {
    setInitialHorseList(){
      this.horses = raceHorses;
      this.currentRaceHorses = raceHorses.slice(0, 10);
    },
    async generateRaceSchedule() {
      const currentSchedule: IRace[] = [];

      for (let i = 0; i < 6; i++) {
        const shuffledArray: RaceHorse[] = [...this.horses].sort(() => 0.5 - Math.random());
        const horsesToRace = shuffledArray.slice(0, 10);

        currentSchedule.push({
          distance: LAP_LENGTH[i],
          horses: horsesToRace.map((horse, index) => ({
            position: index + 1,
            name: horse.name,
            color: horse.color,
          })),
        });
      }
      this.raceSchedule = currentSchedule;
    },
    async startRace() {
      this.isRaceStart = true;
      for (const [index, race] of this.raceSchedule.entries()) {
        const currentRacingHorseList: IRaceHorse[] = race.horses.map((horse) => ({
          ...horse,
          position: 0,
          speed: Math.floor(Math.random() * (HORSE_SPEED_RANGE.max - HORSE_SPEED_RANGE.min + 1)) + HORSE_SPEED_RANGE.max,
        }));

        this.currentLapName = `${index + 1}.ST Lap - ${LAP_LENGTH[index] + 'm'}`

        this.currentRaceHorses = currentRacingHorseList;

        const maxFinishTime = calculateMaxFinishTime(currentRacingHorseList, race);

        await awaitTimeout(maxFinishTime * ANIMATION_DURATION_TIME);

        const raceResult: IRaceResult[] = calculateRaceResults(currentRacingHorseList, race);
        this.raceResults = [...this.raceResults, raceResult];
        this.currentRaceHorses = [];

        await awaitTimeout(ANIMATION_DURATION_TIME);

        if (index === 5) {
          this.currentRaceHorses = raceHorses.slice(0, 10);
        }
      }
    }
  }
})
