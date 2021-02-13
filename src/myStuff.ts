/*
In here I use a combination of techniques to achieve the same interface as the original
Javascript API from screeps.

It could probably be better but works for now


first the Record utility type allows to mimick the dictionary inteface this gaining access to the
members screeps and spawns by name as though they were an actual member of the object.
https://stackoverflow.com/a/44441178


then I use the Object.assign from javascript (requires ec6) to assign all members of the dictionary object
from the API into the scriptlist object.
https://stackoverflow.com/a/54445030

With this technique I can inject the count property and have it return the number of items in the
API object
 */
export class GameWrap {
    private _time: number;

    get creeps(): ICreeps{
        const creeps = new CreepList();
        return Object.assign(creeps, Game.creeps);
    }

    get spawns(): ISpawns{
        const spawns = new SpawnList();
        return Object.assign(spawns, Game.spawns);
    }

    get time(): number{
        return Game.time
    }
}


interface ICreeps extends Record<string,any> {
    count: number
}

class CreepList implements ICreeps{

    get count(): number{
        return Object.keys(Game.creeps).length;
    }
}

class CreepWrap {
    private _creep_name: string

    constructor(name: string) {
        this._creep_name = name
    }
}

interface ISpawns extends Record<string,any> {
    count: number
}

class SpawnList implements ISpawns{

    get count(): number{
        return Object.keys(Game.spawns).length;
    }
}

class StructureSpawnWrap{
    private _spawn_name: string;

    constructor(name: string){
        this._spawn_name = name;
    }

    spawnCreep(body: string[], name: string, opts?: SpawnOpts): number {
        return Game.spawns[this._spawn_name].spawnCreep(body, name, opts)
    }
}


