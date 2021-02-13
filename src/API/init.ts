declare var Game:IGame;
type Extension = StructureExtension;


interface _Constructor<T> {
    readonly prototype: T;
}
interface _ConstructorById<T> extends _Constructor<T> {
    new (id: string): T;
    (id: string): T;
}