export interface List<T> {
  [index: number]: T;
  length: number;
}

export interface Dict<T> {
  [index: string]: T;
}

export type Collection<T> = List<T> | Dict<T>;

export interface Predicate<T> {
  (arg: T): boolean;
}

export type TypeofList<V> = V extends never ? any : V extends List<infer T> ? T : never;

export type TypeOfDictionary<V, TDefault = never> = V extends never
  ? any
  : V extends Dict<infer T>
  ? T
  : TDefault;

export type TypeOfCollection<V, TObjectDefault = never> = V extends List<any>
  ? TypeofList<V>
  : TypeOfDictionary<V, TObjectDefault>;

export type CollectionKey<V> = V extends never
  ? any
  : V extends List<any>
  ? number
  : V extends Dict<any>
  ? string
  : V extends undefined
  ? undefined
  : never;

export interface CollectionIterator<
  T extends TypeofList<V> | TypeOfCollection<V, any>,
  TResult,
  V = Collection<T>,
> {
  (arg: T, key: CollectionKey<V>, collection: V): TResult;
}
