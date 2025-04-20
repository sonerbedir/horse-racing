import {IRace, IRaceHorse, IRaceResult} from "@/interfaces/index.js";
import { LAP_LENGTH } from "@/constants/constants.js";

export function awaitTimeout(duration: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export function calculateMaxFinishTime(
  currentRaceHorses: IRaceHorse[],
  race: IRace
): number {
  return Math.max(
    ...currentRaceHorses.map((horse) =>
      Math.round(race.distance / horse.speed)
    )
  );
}

export function calculateRaceResults(
  currentRaceHorses: IRaceHorse[],
  race: IRace
): IRaceResult[] {
  const raceResult: IRaceResult[] = currentRaceHorses.map((horse) => ({
    position: 0,
    name: horse.name,
    finishTime: Math.round(race.distance / horse.speed),
    distance: race.distance,
  }));

  raceResult.sort((a, b) => a.finishTime - b.finishTime);
  raceResult.forEach((horse, index) => {
    horse.position = index + 1;
  });

  return raceResult;
}

export const generateTableHeaderContent = (index: number): string => {
  return `${index + 1}ST Lap - ${LAP_LENGTH[index] + 'm'}`
};
