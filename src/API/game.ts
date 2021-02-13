interface IGame {
    creeps: { [creepName: string]: Creep};
    spawns: {[spawnName: string]: StructureSpawn};
    time: number;
}
