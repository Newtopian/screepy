import {GameWrap} from "./myStuff";

/**
 * Screeps system expects this "loop" method in main.js to run the
 * application. If we have this line, we can be sure that the globals are
 * bootstrapped properly and the game loop is executed.
 * http://support.screeps.com/hc/en-us/articles/204825672-New-main-loop-architecture
 *
 * @export
 */
export function loop() {
    const game = new GameWrap();

    console.log(`
===========  ${game.time} =
    * Total number of spawns ${game.spawns.count}
    * Total number of creeps ${game.creeps.count}
    `);

    if(game.creeps.count <= 0) {
        game.spawns.central.spawnCreep([WORK, MOVE, CARRY], "Harvester1")
    }
}