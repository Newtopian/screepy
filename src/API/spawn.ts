/**
 * An object containing creep spawning options
 */
interface SpawnOpts {
    /**
     * Memory of the new creep. If provided, it will be immediately stored into Memory.creeps[name].
     */
    memory?: any;
    /**
     * Array of spawns/extensions from which to draw energy for the spawning process. Structures will be used according to the array order.
     */
    energyStructures?: Array<StructureExtension | StructureSpawn>;
    /**
     * If dryRun is true, the operation will only check if it is possible to create a creep.
     */
    dryRun?: boolean;
}

interface StructureSpawn{

    spawnCreep(body: string[], name: string, opts? : SpawnOpts): number;
}
interface StructureSpawnConstructor extends _Constructor<StructureSpawn>, _ConstructorById<StructureSpawn> {
}
declare const StructureSpawn: StructureSpawnConstructor;